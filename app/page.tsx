import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import HeroSlider from "@/components/ui/HeroSlider";
import Image from "next/image";
import DeferredStagePopup from "@/components/ui/DeferredStagePopup";
import { LEAD_FORM_URL, STOCK, VSL_URL } from "@/lib/constants";
import { ETAPAS } from "@/lib/etapas";

const HERO_SLIDES = [
  {
    src: STOCK.heroMinerTruck,
    alt: "Profesional minero junto a camión de operación en faena",
  },
  {
    src: STOCK.heroMinerHelmet,
    alt: "Trabajador minero con casco de seguridad",
  },
];

export const metadata: Metadata = {
  title: "Inversión Inmobiliaria para Mineros en Chile | Construye tu patrimonio",
  description:
    "Asesoría especializada en inversión inmobiliaria y gestión patrimonial para profesionales de la minería en Chile. Construye un patrimonio sólido con inversión en departamentos, sin comisiones al cliente.",
};

const PAIN_POINTS = [
  {
    icon: "schedule",
    title: "Tu turno es largo, tu tiempo es escaso",
    body: "Trabajas en sistemas de turnos exigentes y la inversión patrimonial requiere una atención que simplemente no tienes. Nosotros hacemos el trabajo duro por ti.",
  },
  {
    icon: "trending_down",
    title: "APV y AFP no son suficientes",
    body: "La inflación desgasta tu ahorro previsional. La inversión inmobiliaria en Chile sigue siendo el refugio más sólido para profesionales de alta renta.",
  },
  {
    icon: "receipt",
    title: "Pagas más impuestos de los que deberías",
    body: "Sin una estructura legal adecuada, tu sueldo y bonos destinan demasiado a Global Complementario. Hay caminos legales para optimizarlo.",
  },
];

const METODO = [
  { step: "01", title: "Sondaje financiero y patrimonial" },
  { step: "02", title: "Diseño de Estrategia inmobiliaria" },
  { step: "03", title: "Aplicar la Estrategia Inmobiliaria" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <DeferredStagePopup />
      <main className="pt-[88px] lg:pt-[104px]">
        {/* ── HERO ── */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-8 md:py-16 grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-10">
          <div className="md:col-span-7">
            <span className="inline-block px-3 py-1 bg-[#E8C28A] text-[#8A5A1F] text-[12px] font-body font-semibold tracking-[0.05em] uppercase rounded-full mb-6">
              Exclusivo para mineros en Chile
            </span>
            <h1 className="font-heading font-bold text-[22px] sm:text-[26px] md:text-[30px] lg:text-[36px] text-[#2B2B2B] mb-5 md:mb-6 leading-[1.2] tracking-[-0.015em] max-w-[640px]">
              Si trabajas en la minería y tienes acceso a crédito hipotecario te ayudamos a invertir en{" "}
              <span className="text-[#B67A2D]">2 o más propiedades</span>, usando el menor tiempo posible, optimizando tus impuestos y mejorando tu jubilación.
            </h1>
            <p className="font-body font-normal text-[15px] md:text-[16px] text-[#4A463E] mb-7 md:mb-9 max-w-[600px] leading-relaxed">
              Método especialmente diseñado para profesionales mineros, con un equipo experto en <strong className="text-[#2B2B2B]">inversión inmobiliaria</strong> y <strong className="text-[#2B2B2B]">gestión patrimonial</strong>. Cero comisiones al cliente.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <Link
                href={LEAD_FORM_URL}
                className="text-center bg-[#B67A2D] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-heading font-bold text-[14px] md:text-[15px] hover:bg-[#9A6624] active:scale-95 transition-all shadow-sm shadow-[#B67A2D]/20"
              >
                Agendar diagnóstico gratis
              </Link>
            </div>
            {/* Trust bar pendiente: agregar logos de gremios mineros / convenios
                cuando estén firmados (Sonami u otros). */}
          </div>

          <div className="md:col-span-5 relative w-full">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E8C28A]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative bg-white p-2 rounded-2xl border border-slate-100 shadow-2xl">
              <HeroSlider slides={HERO_SLIDES} aspect="5 / 4" />
            </div>
          </div>
        </section>

        {/* ── CALUGAS POR ETAPA ── */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pb-4 md:pb-10">
            <div className="text-center mb-8 md:mb-10">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                Guía por etapa profesional
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                ¿En qué etapa estás?
              </h2>
              <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] mt-3 max-w-2xl mx-auto">
                Tenemos un plan de inversión específico para cada nivel dentro de
                la organización minera. Elige el tuyo y te mostramos la guía
                que corresponde.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
              {ETAPAS.map((e) => (
                <Link
                  key={e.slug}
                  href={`/etapa/${e.slug}`}
                  className="group bg-white border border-slate-100 hover:border-[#B67A2D] hover:shadow-lg hover:-translate-y-0.5 rounded-2xl p-5 md:p-6 flex flex-col transition-all text-left"
                >
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#F5E8D0] group-hover:bg-[#B67A2D] grid place-items-center transition-colors mb-4">
                    <span
                      className="material-symbols-outlined text-[#B67A2D] group-hover:text-white text-[22px] md:text-[24px] transition-colors"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      engineering
                    </span>
                  </div>
                  <p className="font-heading font-bold text-[11px] tracking-[2px] uppercase text-[#B67A2D]">
                    {e.shortLabel}
                  </p>
                  <p className="font-heading font-bold text-[15px] md:text-[17px] text-[#2B2B2B] mt-1 leading-snug">
                    {e.label}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#B67A2D] font-heading font-bold text-[12px] mt-3 md:mt-4 group-hover:gap-2 transition-all">
                    Ver guía
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── PAIN POINTS ── */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-4">
                La realidad de nuestros mineros
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                ¿Sientes que tus ahorros pierden valor frente a la inflación?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PAIN_POINTS.map((p) => (
                <div
                  key={p.title}
                  className="bg-white rounded-2xl border border-slate-100 p-8 hover:border-[#B67A2D] hover:shadow-lg transition-all"
                >
                  <span
                    className="material-symbols-outlined text-[#B67A2D] text-[36px] mb-4 block"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {p.icon}
                  </span>
                  <h3 className="font-heading font-bold text-[19px] text-[#2B2B2B] mb-3">
                    {p.title}
                  </h3>
                  <p className="font-body text-[15px] text-[#4A463E] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ── EL MÉTODO ── */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-12 md:py-20">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-4">
                  Tu camino en 3 pasos
                </p>
                <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                  De minero a inversionista patrimonial
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {METODO.map((m) => (
                  <div
                    key={m.step}
                    className="bg-white rounded-2xl p-8 border border-slate-100 relative"
                  >
                    <span className="absolute top-6 right-6 font-heading font-extrabold text-[48px] text-[#B67A2D]/15 leading-none">
                      {m.step}
                    </span>
                    <h3 className="font-heading font-bold text-[22px] text-[#2B2B2B] leading-snug">
                      {m.title}
                    </h3>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link
                  href={VSL_URL}
                  className="inline-flex items-center gap-2 bg-[#2B2B2B] text-white px-6 md:px-8 py-3.5 md:py-4 rounded-xl font-heading font-bold text-[14px] md:text-[15px] hover:bg-[#B67A2D] active:scale-95 transition-all shadow-sm"
                >
                  <span
                    className="material-symbols-outlined text-[22px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_circle
                  </span>
                  Ver cómo funciona el método
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ── CTA FINAL ── */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="bg-[#2B2B2B] rounded-[32px] p-7 md:p-16 relative overflow-hidden text-center md:text-left">
              <div
                className="absolute top-0 right-0 w-[33%] h-full opacity-20 pointer-events-none"
                style={{
                  background: "linear-gradient(to left, #B67A2D 0%, transparent 100%)",
                }}
              />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="max-w-xl">
                  <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[40px] text-white mb-5 leading-tight tracking-[-0.01em]">
                    ¿Listo para asegurar tu retiro premium?
                  </h2>
                  <p className="font-body text-[17px] text-white/75 mb-8">
                    Obtén un diagnóstico patrimonial gratuito en 2 minutos. Un asesor te contactará por WhatsApp.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <Link
                      href={LEAD_FORM_URL}
                      className="bg-[#B67A2D] text-white px-8 py-4 rounded-xl font-heading font-bold text-[15px] hover:bg-[#9A6624] transition-colors"
                    >
                      Agendar diagnóstico gratis
                    </Link>
                  </div>
                </div>
                <div className="hidden lg:grid w-64 h-64 bg-white/5 rounded-full border border-white/10 place-items-center">
                  <div className="w-full h-full m-6 bg-[#B67A2D]/10 rounded-full grid place-items-center">
                    <span
                      className="material-symbols-outlined text-[#B67A2D] text-[80px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      engineering
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
