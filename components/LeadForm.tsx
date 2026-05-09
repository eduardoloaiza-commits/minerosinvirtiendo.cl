"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ENTRENAMIENTO_STORAGE_KEY,
  LEAD_STORAGE_KEY,
} from "@/lib/constants";
import { formatoLabel } from "@/lib/marketplace";
import LeadSuccess, { type LeadData } from "@/components/LeadSuccess";

type FormState = LeadData;

const EMPTY: FormState = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  etapa: "",
  ingresos: "",
  ahorros: "",
  meta: "",
  tipoInversion: "",
};

// Niveles dentro de la organización minera. Se persiste el string completo
// en la columna `etapa` del lead.
const ETAPAS = [
  "Personal de operación",
  "Personal técnico / mantenimiento",
  "Supervisor / Capataz",
  "Ingeniero / Especialista técnico",
  "Jefatura / Gerencia",
  "Otro profesional de la minería",
];

const INGRESOS = [
  "Menos de $2.000.000",
  "$2.000.000 a $4.000.000",
  "$4.000.000 a $6.000.000",
  "$6.000.000 a $10.000.000",
  "Más de $10.000.000",
];

const AHORROS = [
  "No tengo ahorros actualmente",
  "Menos de $5.000.000",
  "$5.000.000 a $15.000.000",
  "$15.000.000 a $30.000.000",
  "Más de $30.000.000",
];

const METAS = [
  { value: "primera", label: "Realizar mi primera inversión inmobiliaria" },
  { value: "diversificar", label: "Diversificar mi patrimonio existente" },
  { value: "credito", label: "Aprovechar mi capacidad crediticia actual" },
  { value: "todo", label: "Todo lo anterior, quiero el panorama completo" },
];

const inputCls =
  "w-full bg-white border border-[#C4BCA9] rounded-lg px-4 py-3 text-[15px] text-[#2B2B2B] placeholder-[#6E6E6E] focus:outline-none focus:border-[#B67A2D] focus:ring-2 focus:ring-[#B67A2D]/20 transition-all";
const labelCls =
  "block font-heading font-semibold text-[12px] text-[#2B2B2B] mb-1.5";
const selectCls = inputCls + " appearance-none cursor-pointer";

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function isValidPhone(s: string) {
  return s.trim().replace(/\D/g, "").length >= 8;
}

type TouchKey =
  | "nombre"
  | "apellido"
  | "email"
  | "telefono"
  | "etapa"
  | "ingresos"
  | "ahorros"
  | "meta";

type Props = {
  /** Identifica de qué form vino el lead. Se persiste en `source`. */
  source: string;
  /** Pre-cargado desde el query string si llegó desde /marketplace/<formato>. */
  tipoInicial?: string;
  /** Heading interno del form (cada page lo redacta). */
  intro?: { eyebrow: string; title: string };
  /**
   * Si se pasa, después del submit el form hace router.push(redirectAfter)
   * en vez de mostrar el success state inline. Útil para /entrenamiento que
   * después manda al usuario a /entrenamiento/vsl.
   */
  redirectAfter?: string;
};

export default function LeadForm({
  source,
  tipoInicial,
  intro,
  redirectAfter,
}: Props) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(() => ({
    ...EMPTY,
    tipoInversion:
      tipoInicial && formatoLabel(tipoInicial) ? tipoInicial : "",
  }));
  const [touched, setTouched] = useState<Record<TouchKey, boolean>>({
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    etapa: false,
    ingresos: false,
    ahorros: false,
    meta: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const tipoLabel = formatoLabel(form.tipoInversion ?? "");

  useEffect(() => {
    if (done && typeof window !== "undefined") {
      try {
        window.localStorage.setItem(LEAD_STORAGE_KEY, "1");
      } catch {
        // localStorage roto: no es crítico.
      }
    }
  }, [done]);

  const set = (k: keyof FormState, v: string) =>
    setForm((prev) => ({ ...prev, [k]: v }));

  const touch = (k: TouchKey) =>
    setTouched((prev) => ({ ...prev, [k]: true }));

  const validNombre = form.nombre.trim().length >= 2;
  const validApellido = form.apellido.trim().length >= 2;
  const validEmail = isValidEmail(form.email);
  const validTelefono = isValidPhone(form.telefono);
  const validEtapa = !!form.etapa;
  const validIngresos = !!form.ingresos;
  const validAhorros = !!form.ahorros;
  const validMeta = !!form.meta;

  const step1Valid = validNombre && validApellido && validEmail && validTelefono;
  const step2Valid = validEtapa;
  const step3Valid = validIngresos && validAhorros && validMeta;

  const errCls = (ok: boolean, key: TouchKey) =>
    touched[key] && !ok
      ? " border-[#BA1A1A] focus:border-[#BA1A1A] focus:ring-[#BA1A1A]/20"
      : "";

  const submit = async () => {
    setSubmitting(true);

    let utm: Record<string, string> | null = null;
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const collected: Record<string, string> = {};
      for (const [k, v] of params.entries()) {
        if (k.startsWith("utm_") || k === "gclid" || k === "fbclid") {
          collected[k] = v;
        }
      }
      if (Object.keys(collected).length > 0) utm = collected;
    }

    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(
          ENTRENAMIENTO_STORAGE_KEY,
          JSON.stringify({ ...form, at: new Date().toISOString() }),
        );
      } catch {
        // localStorage roto: seguimos.
      }

      const w = window as unknown as { fbq?: (...args: unknown[]) => void };
      if (typeof w.fbq === "function") {
        w.fbq("track", "Lead", {
          content_name: source,
          etapa: form.etapa,
        });
      }
    }

    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...form,
          tipo_inversion: form.tipoInversion || null,
          source,
          utm,
        }),
      });
    } catch {
      // Si falla el endpoint el lead queda en localStorage y el usuario
      // sigue su flujo igual (redirect al VSL o success state).
    }

    setSubmitting(false);
    if (redirectAfter) {
      router.push(redirectAfter);
      return;
    }
    setDone(true);
  };

  const next = () => {
    if (step === 1) {
      setTouched((t) => ({
        ...t,
        nombre: true,
        apellido: true,
        email: true,
        telefono: true,
      }));
      if (!step1Valid) return;
      setStep(2);
      return;
    }
    if (step === 2) {
      setTouched((t) => ({ ...t, etapa: true }));
      if (!step2Valid) return;
      setStep(3);
      return;
    }
    if (step === 3) {
      setTouched((t) => ({
        ...t,
        ingresos: true,
        ahorros: true,
        meta: true,
      }));
      if (!step3Valid) return;
      void submit();
    }
  };

  if (done) {
    return <LeadSuccess lead={form} />;
  }

  const progress = step === 1 ? 33 : step === 2 ? 66 : submitting ? 100 : 90;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        next();
      }}
      className="space-y-5"
      noValidate
    >
      {tipoLabel && (
        <div className="flex items-center justify-between gap-3 bg-[#F5E8D0] border border-[#B67A2D]/30 rounded-xl px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <span
              className="material-symbols-outlined text-[#B67A2D] text-[20px] shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              bookmark
            </span>
            <p className="text-[13px] text-[#2B2B2B] leading-snug truncate">
              Tu consulta es por <strong className="font-heading font-bold">{tipoLabel}</strong>
            </p>
          </div>
          <Link
            href="/marketplace"
            className="font-heading font-bold text-[12px] text-[#8A5A1F] hover:text-[#2B2B2B] underline shrink-0"
          >
            cambiar
          </Link>
        </div>
      )}

      {intro && (
        <div>
          <p className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#B67A2D] mb-1">
            {intro.eyebrow}
          </p>
          <h3 className="font-heading font-bold text-[20px] md:text-[22px] text-[#2B2B2B] leading-tight">
            {intro.title}
          </h3>
        </div>
      )}

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-heading font-semibold text-[12px] text-[#6E6E6E]">
            Paso {step} de 3
          </span>
          <span className="font-heading font-bold text-[12px] text-[#B67A2D]">
            {progress}% completado
          </span>
        </div>
        <div className="h-1.5 bg-[#E2E2E2] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#B67A2D] rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between mt-3">
          {["Datos personales", "Perfil profesional", "Situación financiera"].map(
            (label, i) => (
              <span
                key={label}
                className={`text-[10px] sm:text-[11px] font-heading font-semibold ${
                  step > i + 1
                    ? "text-[#29C4A9]"
                    : step === i + 1
                    ? "text-[#B67A2D]"
                    : "text-[#C4BCA9]"
                }`}
              >
                {step > i + 1 ? "✓ " : ""}
                {label}
              </span>
            ),
          )}
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls} htmlFor="lf-nombre">
                Nombre <span className="text-[#BA1A1A]">*</span>
              </label>
              <input
                id="lf-nombre"
                type="text"
                autoComplete="given-name"
                className={inputCls + errCls(validNombre, "nombre")}
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={(e) => set("nombre", e.target.value)}
                onBlur={() => touch("nombre")}
              />
            </div>
            <div>
              <label className={labelCls} htmlFor="lf-apellido">
                Apellido <span className="text-[#BA1A1A]">*</span>
              </label>
              <input
                id="lf-apellido"
                type="text"
                autoComplete="family-name"
                className={inputCls + errCls(validApellido, "apellido")}
                placeholder="Tu apellido"
                value={form.apellido}
                onChange={(e) => set("apellido", e.target.value)}
                onBlur={() => touch("apellido")}
              />
            </div>
          </div>

          <div>
            <label className={labelCls} htmlFor="lf-email">
              Correo electrónico <span className="text-[#BA1A1A]">*</span>
            </label>
            <input
              id="lf-email"
              type="email"
              autoComplete="email"
              className={inputCls + errCls(validEmail, "email")}
              placeholder="tu@correo.cl"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              onBlur={() => touch("email")}
            />
          </div>

          <div>
            <label className={labelCls} htmlFor="lf-telefono">
              Teléfono <span className="text-[#BA1A1A]">*</span>
            </label>
            <div className="flex gap-2">
              <span className="flex items-center px-3 bg-[#F5F0E8] border border-[#C4BCA9] rounded-lg text-[14px] text-[#4A463E] font-semibold whitespace-nowrap">
                🇨🇱 +56
              </span>
              <input
                id="lf-telefono"
                type="tel"
                autoComplete="tel"
                className={inputCls + errCls(validTelefono, "telefono")}
                placeholder="9 1234 5678"
                value={form.telefono}
                onChange={(e) =>
                  set("telefono", e.target.value.replace(/\D/g, ""))
                }
                onBlur={() => touch("telefono")}
                maxLength={9}
              />
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="bg-[#F5E8D0] rounded-xl p-4 text-[13px] text-[#4A463E] flex gap-3">
            <span
              className="material-symbols-outlined text-[#B67A2D] shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              engineering
            </span>
            <p>
              Esta información nos ayuda a personalizar el diagnóstico según tu
              etapa profesional.
            </p>
          </div>
          <div>
            <label className={labelCls} htmlFor="lf-etapa">
              ¿Cuál es tu etapa profesional?{" "}
              <span className="text-[#BA1A1A]">*</span>
            </label>
            <div className="relative">
              <select
                id="lf-etapa"
                className={selectCls + errCls(validEtapa, "etapa")}
                value={form.etapa}
                onChange={(e) => set("etapa", e.target.value)}
                onBlur={() => touch("etapa")}
              >
                <option value="">Selecciona tu etapa</option>
                {ETAPAS.map((et) => (
                  <option key={et} value={et}>
                    {et}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6E6E6E]">
                ▾
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="bg-[#F5E8D0] rounded-xl p-4 text-[13px] text-[#4A463E] flex gap-3">
            <span
              className="material-symbols-outlined text-[#B67A2D] shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              lock
            </span>
            <p>
              Tus datos son confidenciales y solo se usan para preparar tu
              diagnóstico personalizado.
            </p>
          </div>

          <div>
            <label className={labelCls} htmlFor="lf-ingresos">
              Ingresos mensuales aproximados{" "}
              <span className="text-[#BA1A1A]">*</span>
            </label>
            <div className="relative">
              <select
                id="lf-ingresos"
                className={selectCls + errCls(validIngresos, "ingresos")}
                value={form.ingresos}
                onChange={(e) => set("ingresos", e.target.value)}
                onBlur={() => touch("ingresos")}
              >
                <option value="">Selecciona un rango</option>
                {INGRESOS.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6E6E6E]">
                ▾
              </div>
            </div>
          </div>

          <div>
            <label className={labelCls} htmlFor="lf-ahorros">
              Ahorros disponibles para invertir{" "}
              <span className="text-[#BA1A1A]">*</span>
            </label>
            <div className="relative">
              <select
                id="lf-ahorros"
                className={selectCls + errCls(validAhorros, "ahorros")}
                value={form.ahorros}
                onChange={(e) => set("ahorros", e.target.value)}
                onBlur={() => touch("ahorros")}
              >
                <option value="">Selecciona un rango</option>
                {AHORROS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6E6E6E]">
                ▾
              </div>
            </div>
          </div>

          <div>
            <label className={labelCls}>
              ¿Qué quieres lograr? <span className="text-[#BA1A1A]">*</span>
            </label>
            <div className="space-y-2 mt-1">
              {METAS.map((m) => (
                <label
                  key={m.value}
                  className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    form.meta === m.value
                      ? "border-[#B67A2D] bg-[#F5E8D0]"
                      : "border-[#C4BCA9] bg-white hover:border-[#B67A2D]/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="meta"
                    value={m.value}
                    checked={form.meta === m.value}
                    onChange={() => set("meta", m.value)}
                    onBlur={() => touch("meta")}
                    className="mt-0.5 accent-[#B67A2D]"
                  />
                  <span className="text-[14px] text-[#2B2B2B] leading-snug">
                    {m.label}
                  </span>
                </label>
              ))}
            </div>
            {touched.meta && !validMeta && (
              <p className="text-[#BA1A1A] text-[12px] mt-1">
                Selecciona una opción
              </p>
            )}
          </div>
        </div>
      )}

      <div className="flex gap-3 pt-2">
        {step > 1 && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="px-5 py-3 border-2 border-[#C4BCA9] rounded-lg text-[#4A463E] font-heading font-bold text-[12px] tracking-[1px] uppercase hover:border-[#2B2B2B] hover:text-[#2B2B2B] transition-all"
          >
            ← Atrás
          </button>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="flex-1 bg-gradient-to-r from-[#FF8C00] to-[#E07820] text-white rounded-xl py-3.5 font-heading font-bold text-[13px] md:text-[14px] tracking-[1.5px] uppercase shadow-md shadow-[#FF8C00]/30 hover:from-[#E07820] hover:to-[#FF8C00] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitting
            ? "Enviando…"
            : step === 3
            ? "Enviar y continuar →"
            : "Siguiente paso →"}
        </button>
      </div>

      <p className="font-body text-[12px] text-[#6E6E6E] text-center leading-snug">
        Es gratuito. Tus datos viajan cifrados y no los compartimos con
        terceros.
      </p>
    </form>
  );
}
