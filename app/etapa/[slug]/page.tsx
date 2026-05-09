import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { LEAD_FORM_URL, SITE_URL } from "@/lib/constants";
import {
  ETAPAS,
  ETAPAS_BY_SLUG,
  ETAPAS_ENFOQUE,
  ETAPAS_FASES,
  ETAPAS_HERO,
} from "@/lib/etapas";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return ETAPAS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const etapa = ETAPAS_BY_SLUG[slug];
  if (!etapa) return {};
  const canonical = `/etapa/${etapa.slug}`;
  const title = `Inversión Inmobiliaria para ${etapa.label} | Mineros Invirtiendo`;
  const description = `Guía por etapa profesional: los 4 pasos correctos para invertir como ${etapa.label.toLowerCase()} sin desperdiciar tus DFL2 ni comprometer tu futuro.`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: `${SITE_URL}${canonical}`,
      title,
      description,
    },
  };
}

export default async function EtapaPage({ params }: { params: Params }) {
  const { slug } = await params;
  const etapa = ETAPAS_BY_SLUG[slug];
  if (!etapa) notFound();

  const numero = String(etapa.number).padStart(2, "0");

  return (
    <>
      <Header />
      <main className="pt-[68px] lg:pt-[84px]">
        {/* ══ HERO COMPARTIDO ══ */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-8 md:py-14">
          <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-4">
            {ETAPAS_HERO.eyebrow}
          </p>
          <h1 className="font-heading font-bold text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] text-[#2B2B2B] leading-[1.15] tracking-[-0.015em] mb-5 max-w-3xl">
            {ETAPAS_HERO.title}
          </h1>
          <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] leading-relaxed max-w-3xl">
            {ETAPAS_HERO.intro}
          </p>

          {/* Nota con icono de check */}
          <div className="mt-6 md:mt-8 flex gap-3 items-start bg-white border border-[#E8C28A]/40 rounded-2xl p-4 md:p-5 max-w-3xl">
            <span
              className="material-symbols-outlined text-[#B67A2D] text-[22px] mt-0.5 shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
            <p className="font-body text-[14px] md:text-[15px] text-[#4A463E] leading-relaxed">
              {ETAPAS_HERO.nota}
            </p>
          </div>
        </section>

        {/* ══ BANNER DE ETAPA ══ */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pb-6 md:pb-10">
          <div className="bg-gradient-to-r from-[#523515] via-[#8A5A1F] to-[#9A6624] rounded-2xl md:rounded-[28px] px-6 md:px-10 py-5 md:py-7 text-white flex flex-wrap items-center gap-4 md:gap-6 shadow-lg shadow-[#B67A2D]/20">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 border border-white/15 grid place-items-center shrink-0">
              <span
                className="material-symbols-outlined text-[#E8C28A] text-[28px] md:text-[32px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                medical_services
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A]/90">
                Etapa {numero}
              </p>
              <h2 className="font-heading font-extrabold text-[22px] sm:text-[26px] md:text-[32px] leading-tight mt-1">
                {numero}. {etapa.label.toUpperCase()}
              </h2>
            </div>
          </div>
          <p className="font-body font-semibold text-[16px] md:text-[18px] text-[#2B2B2B] leading-relaxed mt-6">
            {etapa.tagline}
          </p>
          <p className="font-body text-[14px] md:text-[16px] text-[#4A463E] leading-relaxed mt-3 max-w-4xl">
            {etapa.heroIntro}
          </p>
        </section>

        {/* ══ 4 PASOS (2x2 en desktop) ══ */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-12 md:py-16">
            <div className="max-w-[1120px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="mb-10 md:mb-12">
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                  Los 4 pasos correctos
                </p>
                <h3 className="font-heading font-bold text-[22px] md:text-[30px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                  El camino específico para tu etapa
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {etapa.steps.map((step, i) => (
                  <article
                    key={step.title}
                    className="bg-white rounded-2xl border border-slate-100 p-6 md:p-7 flex flex-col"
                  >
                    <header className="flex items-start gap-4 mb-4">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-[#8A5A1F] text-white grid place-items-center font-heading font-extrabold text-[16px]">
                        {i + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-heading font-bold text-[10px] tracking-[3px] uppercase text-[#B67A2D] mb-1">
                          Paso {String(i + 1).padStart(2, "0")}
                        </p>
                        <h4 className="font-heading font-bold text-[18px] md:text-[20px] text-[#2B2B2B] leading-snug">
                          {step.title}
                        </h4>
                      </div>
                      <span
                        className="material-symbols-outlined text-[#B67A2D] text-[26px] shrink-0 mt-1"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {step.icon}
                      </span>
                    </header>
                    <p className="font-body text-[14.5px] md:text-[15px] text-[#4A463E] leading-relaxed mb-4">
                      {step.body}
                    </p>
                    <ul className="space-y-2 mt-auto pt-2 border-t border-slate-100">
                      {step.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-[#4A463E] text-[14px] leading-snug"
                        >
                          <span className="material-symbols-outlined text-[#B67A2D] text-[16px] mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ══ 3 INSIGHTS: nadie dice / pregunta / enfoque ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {/* Lo que casi nadie te dice */}
              <div className="bg-[#2B2B2B] text-white rounded-2xl p-6 md:p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#B67A2D]/20 grid place-items-center">
                    <span
                      className="material-symbols-outlined text-[#E8C28A] text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      priority_high
                    </span>
                  </span>
                  <p className="font-heading font-bold text-[10px] tracking-[3px] uppercase text-[#E8C28A]">
                    {etapa.nadieDice.titulo}
                  </p>
                </div>
                <p className="font-heading font-bold text-[17px] md:text-[19px] leading-snug">
                  {etapa.nadieDice.punchline}
                </p>
              </div>

              {/* La pregunta correcta */}
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-[#F5E8D0] grid place-items-center">
                    <span
                      className="material-symbols-outlined text-[#B67A2D] text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      help
                    </span>
                  </span>
                  <p className="font-heading font-bold text-[10px] tracking-[3px] uppercase text-[#8A5A1F]">
                    La pregunta correcta
                  </p>
                </div>
                <p className="font-heading font-bold text-[17px] md:text-[19px] text-[#2B2B2B] leading-snug">
                  {etapa.preguntaCorrecta}
                </p>
              </div>

              {/* Nuestro enfoque */}
              <div className="bg-[#F5E8D0] border border-[#E8C28A]/50 rounded-2xl p-6 md:p-7 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-lg bg-white grid place-items-center">
                    <span
                      className="material-symbols-outlined text-[#B67A2D] text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      group
                    </span>
                  </span>
                  <p className="font-heading font-bold text-[10px] tracking-[3px] uppercase text-[#8A5A1F]">
                    {ETAPAS_ENFOQUE.titulo}
                  </p>
                </div>
                <p className="font-body text-[14.5px] md:text-[15.5px] text-[#2B2B2B] leading-relaxed">
                  {ETAPAS_ENFOQUE.body}
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ══ OBJETIVO ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-14">
            <div className="rounded-3xl border-2 border-dashed border-[#B67A2D] bg-white p-6 md:p-10 flex flex-col md:flex-row gap-5 md:gap-6 items-start md:items-center">
              <div className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#B67A2D] grid place-items-center">
                <span
                  className="material-symbols-outlined text-white text-[28px] md:text-[32px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  flag
                </span>
              </div>
              <div className="flex-1">
                <p className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#B67A2D] mb-2">
                  Objetivo de esta etapa
                </p>
                <p className="font-heading font-bold text-[17px] md:text-[22px] text-[#2B2B2B] leading-snug">
                  {etapa.objetivo}
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* PARTICIPACIÓN: timeline horizontal */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-12 md:py-16">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="mb-10 md:mb-12">
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                  Tu participación activa
                </p>
                <h3 className="font-heading font-bold text-[20px] md:text-[26px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                  En el proceso
                </h3>
              </div>

              <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-4 relative">
                {/* línea base (solo lg+) */}
                <span
                  className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-[#E8C28A]/60"
                  aria-hidden
                />
                {etapa.participacion.map((p, i) => (
                  <li
                    key={p}
                    className="relative flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#B67A2D] grid place-items-center shadow-sm relative z-10">
                      <span className="font-heading font-extrabold text-[#B67A2D] text-[16px]">
                        {i + 1}
                      </span>
                    </div>
                    <p className="font-heading font-bold text-[13px] md:text-[14px] text-[#2B2B2B] leading-snug mt-3 max-w-[200px]">
                      {p}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </FadeIn>

        {/* ══ FASES STRIP ══ */}
        <section className="bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-6 md:py-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {ETAPAS_FASES.map((f, i) => (
              <span
                key={f}
                className="font-heading font-bold text-[11px] md:text-[12px] tracking-[3px] uppercase text-[#8A5A1F] inline-flex items-center gap-3"
              >
                {f}
                {i < ETAPAS_FASES.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B67A2D]/50" />
                )}
              </span>
            ))}
          </div>
        </section>

        {/* ══ CTA FINAL ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="bg-[#2B2B2B] rounded-[32px] p-7 md:p-14 relative overflow-hidden text-center md:text-left">
              <div
                className="absolute top-0 right-0 w-[33%] h-full opacity-20 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to left, #B67A2D 0%, transparent 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-3">
                    {etapa.shortLabel}
                  </p>
                  <h2 className="font-heading font-bold text-[22px] sm:text-[26px] md:text-[34px] text-white mb-4 leading-tight tracking-[-0.01em]">
                    Empieza tu diagnóstico como {etapa.label.toLowerCase()}.
                  </h2>
                  <p className="font-body text-[15px] md:text-[16px] text-white/75 mb-7">
                    Obtén un diagnóstico patrimonial gratuito en 2 minutos. Un
                    asesor te contactará por WhatsApp.
                  </p>
                  <Link
                    href={LEAD_FORM_URL}
                    className="bg-[#B67A2D] text-white px-7 py-3.5 rounded-xl font-heading font-bold text-[14px] hover:bg-[#9A6624] transition-colors inline-flex"
                  >
                    Agendar diagnóstico gratis
                  </Link>
                </div>
                <div className="hidden lg:grid w-52 h-52 bg-white/5 rounded-full border border-white/10 place-items-center">
                  <div className="w-full h-full m-5 bg-[#B67A2D]/10 rounded-full grid place-items-center">
                    <span
                      className="material-symbols-outlined text-[#B67A2D] text-[64px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      medical_services
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ══ Otras etapas ══ */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3 text-center">
            ¿No es tu etapa?
          </p>
          <h3 className="font-heading font-bold text-[18px] md:text-[24px] text-[#2B2B2B] text-center mb-8 leading-tight">
            Revisa la guía correcta para ti
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {ETAPAS.filter((e) => e.slug !== etapa.slug).map((e) => (
              <Link
                key={e.slug}
                href={`/etapa/${e.slug}`}
                className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-[#B67A2D] hover:shadow-md transition-all group"
              >
                <p className="font-heading font-bold text-[11px] tracking-[2px] uppercase text-[#6E6E6E] group-hover:text-[#B67A2D]">
                  Etapa {String(e.number).padStart(2, "0")}
                </p>
                <p className="font-heading font-bold text-[14px] md:text-[15px] text-[#2B2B2B] mt-2 leading-snug">
                  {e.label}
                </p>
                <span className="inline-flex items-center gap-1 text-[#B67A2D] font-heading font-bold text-[12px] mt-3">
                  Ver guía
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
