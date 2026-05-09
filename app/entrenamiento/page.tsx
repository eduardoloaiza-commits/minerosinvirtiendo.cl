import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import LeadForm from "@/components/LeadForm";
import { TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Entrenamiento Inmobiliario para Mineros | Centro de Diagnóstico y Estrategia Patrimonial",
  description:
    "Registro gratuito. Aprende cómo siendo minero y con acceso a crédito hipotecario puedes invertir en 2 o más propiedades con un plan específico para tu etapa profesional.",
  alternates: { canonical: "/entrenamiento" },
};

const BENEFICIOS = [
  {
    icon: "analytics",
    title: "Tu punto de partida real",
    body: "Cómo se lee tu capacidad de inversión según tu etapa profesional, tu renta y tu carga financiera.",
  },
  {
    icon: "vpn_key",
    title: "Los 2 DFL2 bien usados",
    body: "Por qué tus 2 primeras oportunidades tributarias son la palanca más importante y cómo NO malgastarlas.",
  },
  {
    icon: "apartment",
    title: "Elegir el activo correcto",
    body: "Criterios reales para filtrar proyectos que calzan con tu flujo, crédito y horizonte, no con la vitrina del momento.",
  },
  {
    icon: "trending_up",
    title: "Ordenar la ejecución",
    body: "Cómo estructurar crédito, flujo y crecimiento sin convertir la inversión en un segundo trabajo.",
  },
];

const STATS = [
  { valor: "$0", label: "comisión al cliente" },
  { valor: "100%", label: "transparencia tributaria" },
  { valor: "DFL2", label: "estructurado correctamente" },
  { valor: "360°", label: "acompañamiento real" },
];

const FOUNDERS = TEAM.slice(0, 2);

export default function EntrenamientoPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px] lg:pt-[84px]">
        {/* ══ HERO + FORM ══ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2B2B2B] via-[#2B2B2B] to-[#523515] text-white">
          <div
            className="absolute top-0 right-0 w-[45%] h-full opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at right, #B67A2D 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-4">
                Entrenamiento gratuito · Centro de Diagnóstico y Estrategia Patrimonial
              </p>
              <h1 className="font-heading font-extrabold text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.1] tracking-[-0.015em] mb-5">
                Aprende cómo siendo minero y con acceso a crédito hipotecario
                puedes invertir en{" "}
                <span className="text-[#B67A2D]">2 o más propiedades</span>
              </h1>
              <p className="font-body text-[15px] md:text-[18px] text-white/80 leading-relaxed mb-7 max-w-xl">
                Con un plan específico para tu etapa profesional y tu realidad,
                usando el menor tiempo posible. Sin brokers genéricos, sin
                improvisación, sin convertir esto en un segundo trabajo.
              </p>

              {/* Trust row pendiente: agregar logos de gremios mineros */}
            </div>

            {/* Form card */}
            <div id="registro" className="relative scroll-mt-24">
              <div className="absolute -top-6 -right-6 bg-[#FF8C00] text-white font-heading font-bold text-[10px] tracking-[1.5px] uppercase px-3 py-1.5 rounded-full shadow-lg z-10">
                Cupos limitados
              </div>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-7">
                <LeadForm
                  source="entrenamiento_form"
                  redirectAfter="/entrenamiento/vsl"
                  intro={{
                    eyebrow: "Registro gratuito",
                    title: "Accede al entrenamiento ahora",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ QUÉ VAS A APRENDER ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                Qué vas a aprender
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                Los 4 movimientos que cambian tu resultado patrimonial
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {BENEFICIOS.map((b, i) => (
                <div
                  key={b.title}
                  className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 hover:border-[#B67A2D] hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#8A5A1F] text-white grid place-items-center font-heading font-extrabold text-[14px]">
                      {i + 1}
                    </div>
                    <span
                      className="material-symbols-outlined text-[#B67A2D] text-[22px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {b.icon}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[16px] md:text-[17px] text-[#2B2B2B] mb-2 leading-snug">
                    {b.title}
                  </h3>
                  <p className="font-body text-[13.5px] md:text-[14.5px] text-[#4A463E] leading-relaxed">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ══ STATS BAR ══ */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-10 md:py-14">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading font-extrabold text-[28px] md:text-[40px] text-[#B67A2D] leading-none">
                    {s.valor}
                  </p>
                  <p className="font-body text-[12px] md:text-[13px] text-[#4A463E] mt-2 uppercase tracking-[1px]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ══ FUNDADORES ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                Quiénes dirigen el entrenamiento
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                Giovanni Prelle y David Campos
              </h2>
              <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] leading-relaxed mt-3">
                No es un curso. Es lo que hacemos todos los días con mineros
                reales.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {FOUNDERS.map((f) => (
                <article
                  key={f.name}
                  className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 grid sm:grid-cols-[120px_1fr] gap-5 md:gap-6 items-start"
                >
                  <div className="relative w-[120px] h-[120px] rounded-2xl overflow-hidden bg-[#F5E8D0] shrink-0">
                    <Image
                      src={f.photo}
                      alt={f.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-[10px] tracking-[2px] uppercase text-[#B67A2D] mb-1">
                      {f.role}
                    </p>
                    <h3 className="font-heading font-bold text-[20px] md:text-[22px] text-[#2B2B2B] mb-3 leading-tight">
                      {f.name}
                    </h3>
                    <ul className="space-y-1.5">
                      {f.credentials.slice(0, 4).map((c) => (
                        <li
                          key={c}
                          className="flex items-start gap-2 text-[#4A463E] text-[13px] md:text-[14px] leading-snug"
                        >
                          <span className="material-symbols-outlined text-[#B67A2D] text-[16px] mt-0.5 shrink-0">
                            check
                          </span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ══ CTA FINAL ══ */}
        <FadeIn>
          <section className="bg-[#2B2B2B] py-14 md:py-20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 w-[50%] h-full opacity-15 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at left, #B67A2D 0%, transparent 65%)",
              }}
            />
            <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-4">
                Último paso
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[30px] md:text-[40px] text-white leading-tight tracking-[-0.01em] mb-5 max-w-3xl mx-auto">
                Es gratuito. Empieza tu entrenamiento ahora.
              </h2>
              <p className="font-body text-[15px] md:text-[17px] text-white/70 max-w-xl mx-auto mb-8">
                Registro en 30 segundos. Acceso inmediato al video del método.
              </p>
              <Link
                href="#registro"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8C00] to-[#E07820] text-white px-8 py-4 rounded-xl font-heading font-bold text-[14px] md:text-[15px] tracking-[1.5px] uppercase hover:from-[#E07820] hover:to-[#FF8C00] transition-all shadow-lg shadow-[#FF8C00]/30"
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  rocket_launch
                </span>
                Registrarme al entrenamiento
              </Link>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
