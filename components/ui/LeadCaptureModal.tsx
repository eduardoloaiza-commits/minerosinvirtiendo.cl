"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { LEAD_FORM_URL, LEAD_STORAGE_KEY, WHATSAPP_NUMBER } from "@/lib/constants";

/**
 * Modal central de captura rápida. Complementa el toast LeadReminder:
 * mientras ese es un recordatorio suave en la esquina, este es un CTA
 * prominente que interrumpe el scroll una vez por sesión.
 *
 * Flujo:
 * - Aparece tras FIRST_DELAY_MS de engagement.
 * - Una sola vez por sesión (sessionStorage).
 * - No aparece en /diagnostico ni si el lead ya fue capturado antes.
 * - Snooze: al descartar, no vuelve en esa sesión.
 * - Envío: guarda flag global (desbloquea WhatsApp flotante) y abre
 *   WhatsApp con los datos pre-cargados en nueva pestaña.
 */
const FIRST_DELAY_MS = 120_000;          // 2 min de engagement antes del primer disparo
const SESSION_DISMISS_KEY = "mi_lead_modal_dismissed";

const ESPECIALIDADES = [
  "Médico Cirujano",
  "Médico Especialista",
  "Residente / Becado",
  "Tecnólogo Médico",
  "Enfermero/a",
  "Kinesiólogo/a",
  "Otro profesional de la minería",
];

interface FormState {
  nombre: string;
  telefono: string;
  especialidad: string;
}

export default function LeadCaptureModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    especialidad: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);

  const shouldSkip = () => {
    if (typeof window === "undefined") return true;
    if (pathname === LEAD_FORM_URL) return true;
    if (localStorage.getItem(LEAD_STORAGE_KEY) === "1") return true;
    if (sessionStorage.getItem(SESSION_DISMISS_KEY) === "1") return true;
    return false;
  };

  useEffect(() => {
    if (shouldSkip()) return;
    const t = setTimeout(() => {
      if (!shouldSkip()) setOpen(true);
    }, FIRST_DELAY_MS);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // ESC y bloqueo de scroll
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const dismiss = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(SESSION_DISMISS_KEY, "1");
    }
    setOpen(false);
  };

  const valid =
    form.nombre.trim().length >= 2 &&
    form.telefono.trim().length >= 8 &&
    !!form.especialidad;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ nombre: true, telefono: true, especialidad: true });
    if (!valid) return;

    setSubmitting(true);
    // Marca lead capturado, esto desbloquea el FloatingLeadCTA a verde WhatsApp
    localStorage.setItem(LEAD_STORAGE_KEY, "1");
    sessionStorage.setItem(SESSION_DISMISS_KEY, "1");

    const msg =
      `Hola, soy ${form.nombre.trim()}, ${form.especialidad}.\n` +
      `Teléfono: +56${form.telefono}\n\n` +
      `Llegué desde el sitio y quiero agendar mi diagnóstico patrimonial.`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setOpen(false);
    setSubmitting(false);
  };

  if (!open) return null;

  const inputCls =
    "w-full bg-white border border-[#C4BCA9] rounded-lg px-4 py-3 text-[15px] text-[#2B2B2B] placeholder-[#6E6E6E] focus:outline-none focus:border-[#B67A2D] focus:ring-2 focus:ring-[#B67A2D]/20 transition-all";
  const errCls = (key: keyof FormState, ok: boolean) =>
    touched[key] && !ok ? " border-[#BA1A1A] focus:border-[#BA1A1A] focus:ring-[#BA1A1A]/20" : "";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
      className="fixed inset-0 z-[80] bg-[#2B2B2B]/70 backdrop-blur-sm grid place-items-center p-4 animate-[fadeIn_.2s_ease-out]"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden animate-[fadeInUp_.35s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header con gradiente */}
        <div className="relative bg-gradient-to-br from-[#B67A2D] via-[#B67A2D] to-[#9A6624] px-7 pt-7 pb-5 text-white">
          <button
            type="button"
            aria-label="Cerrar"
            onClick={dismiss}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          <div className="w-12 h-12 rounded-full bg-white/15 grid place-items-center mb-3">
            <span
              className="material-symbols-outlined text-white text-[26px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              mark_email_read
            </span>
          </div>
          <h2
            id="lead-modal-title"
            className="font-heading font-extrabold text-[22px] leading-tight mb-1"
          >
            Tu diagnóstico patrimonial, en 2 minutos
          </h2>
          <p className="font-body text-[14px] text-white/85 leading-relaxed">
            Déjanos tus datos y un asesor te contacta hoy por WhatsApp con una primera lectura de tu caso.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
          <div>
            <label className="block font-heading font-semibold text-[12px] text-[#2B2B2B] mb-1.5">
              Nombre <span className="text-[#BA1A1A]">*</span>
            </label>
            <input
              type="text"
              className={inputCls + errCls("nombre", form.nombre.trim().length >= 2)}
              placeholder="Tu nombre y apellido"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              onBlur={() => setTouched({ ...touched, nombre: true })}
              autoFocus
            />
          </div>

          <div>
            <label className="block font-heading font-semibold text-[12px] text-[#2B2B2B] mb-1.5">
              Teléfono (Chile) <span className="text-[#BA1A1A]">*</span>
            </label>
            <div className="flex gap-2">
              <span className="flex items-center px-3 bg-[#F5F0E8] border border-[#C4BCA9] rounded-lg text-[14px] text-[#4A463E] font-semibold whitespace-nowrap">
                🇨🇱 +56
              </span>
              <input
                type="tel"
                className={inputCls + errCls("telefono", form.telefono.trim().length >= 8)}
                placeholder="9 1234 5678"
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value.replace(/\D/g, "") })}
                onBlur={() => setTouched({ ...touched, telefono: true })}
                maxLength={9}
              />
            </div>
          </div>

          <div>
            <label className="block font-heading font-semibold text-[12px] text-[#2B2B2B] mb-1.5">
              Tu especialidad <span className="text-[#BA1A1A]">*</span>
            </label>
            <div className="relative">
              <select
                className={
                  inputCls +
                  " appearance-none cursor-pointer" +
                  errCls("especialidad", !!form.especialidad)
                }
                value={form.especialidad}
                onChange={(e) => setForm({ ...form, especialidad: e.target.value })}
                onBlur={() => setTouched({ ...touched, especialidad: true })}
              >
                <option value="">Selecciona una opción</option>
                {ESPECIALIDADES.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#6E6E6E]">
                ▾
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={!valid || submitting}
            className="w-full inline-flex items-center justify-center gap-2 font-heading font-bold text-[14px] tracking-[1px] uppercase bg-[#25D366] text-white px-5 py-3.5 rounded-lg shadow-lg shadow-[#25D366]/25 hover:bg-[#1db954] disabled:bg-[#C4BCA9] disabled:shadow-none disabled:cursor-not-allowed transition-all"
          >
            <span
              className="material-symbols-outlined text-[20px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chat
            </span>
            Enviar y abrir WhatsApp
          </button>

          <div className="flex items-center justify-between pt-1 gap-3 text-[12px]">
            <button
              type="button"
              onClick={dismiss}
              className="text-[#6E6E6E] hover:text-[#2B2B2B] transition-colors underline underline-offset-2"
            >
              Ahora no
            </button>
            <span className="flex items-center gap-1 text-[#6E6E6E]">
              <span className="material-symbols-outlined text-[14px]">lock</span>
              Datos confidenciales
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
