import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import YouTubeLite from "@/components/ui/YouTubeLite";
import { LEAD_FORM_URL, VSL_VIDEO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Transfórmate en Inversionista: 2 a 5 departamentos con tu capacidad de crédito",
  description:
    "Si eres joven profesional con acceso a crédito hipotecario, te ayudamos a comprar entre 2 y 5 departamentos. Solo aportas un ahorro mínimo para los gastos operacionales del crédito. Construye ingresos pasivos hacia tu jubilación con un método y un equipo profesional.",
  alternates: {
    canonical: "/servicios/transformate-en-inversionista",
  },
};

const PARA_TI = [
  "Eres profesional joven con acceso a crédito hipotecario.",
  "Quieres generar ingresos pasivos para tu jubilación.",
  "La inversión inmobiliaria es tu objetivo.",
];

const PASOS = [
  { n: "01", title: "Diagnóstico de tu capacidad crediticia." },
  { n: "02", title: "Plan personalizado de 2 a 5 departamentos." },
  { n: "03", title: "Compra y gestión acompañada por el equipo." },
];

function VideoEmbed() {
  if (!VSL_VIDEO.ready || !VSL_VIDEO.id) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#523515] via-[#8A5A1F] to-[#2B2B2B] text-center px-6">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 border border-white/15 grid place-items-center mb-5 backdrop-blur-sm">
          <span
            className="material-symbols-outlined text-[#E8C28A] text-[44px] md:text-[52px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            play_circle
          </span>
        </div>
        <p className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#E8C28A] mb-2">
          Próximamente
        </p>
        <p className="font-heading font-bold text-[18px] md:text-[22px] text-white leading-snug max-w-lg">
          {VSL_VIDEO.posterText}
        </p>
        <p className="font-body text-[13px] md:text-[14px] text-white/60 mt-3 max-w-md">
          Mientras tanto puedes agendar directamente tu sesión y conversar con el equipo.
        </p>
      </div>
    );
  }

  if (VSL_VIDEO.provider === "youtube") {
    return <YouTubeLite videoId={VSL_VIDEO.id} title={VSL_VIDEO.title} />;
  }
  if (VSL_VIDEO.provider === "vimeo") {
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://player.vimeo.com/video/${VSL_VIDEO.id}`}
        title={VSL_VIDEO.title}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <iframe
      className="absolute inset-0 w-full h-full"
      src={VSL_VIDEO.id}
      title={VSL_VIDEO.title}
      allowFullScreen
    />
  );
}

export default function TransformateEnInversionistaPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px] lg:pt-[84px]">
        {/* HERO: afirmación principal */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20">
          <span className="inline-block px-3 py-1 bg-[#E8C28A] text-[#8A5A1F] text-[12px] font-body font-semibold tracking-[0.05em] uppercase rounded-full mb-6">
            Para jóvenes profesionales en Chile
          </span>
          <h1 className="font-heading font-bold text-[36px] sm:text-[52px] md:text-[68px] lg:text-[80px] text-[#2B2B2B] leading-[1.05] tracking-[-0.025em] max-w-5xl mb-7">
            Transfórmate en <span className="text-[#B67A2D]">inversionista</span>.
          </h1>
          <p className="font-body text-[19px] md:text-[24px] text-[#2B2B2B] max-w-3xl leading-[1.4] mb-10">
            Compra entre <strong className="text-[#B67A2D]">2 y 5 departamentos</strong> usando tu capacidad de crédito.
            Solo aportas un ahorro mínimo para los <strong>gastos operacionales del crédito</strong>.
          </p>
          <Link
            href={LEAD_FORM_URL}
            className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-9 py-5 rounded-xl font-heading font-bold text-[16px] hover:bg-[#9A6624] transition-colors shadow-sm shadow-[#B67A2D]/20"
          >
            Agendemos
            <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
          </Link>
        </section>

        {/* VIDEO EXPLICATIVO DEL PROCESO: patrón VSL */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2B2B2B] via-[#2B2B2B] to-[#523515] text-white">
          <div
            className="absolute top-0 right-0 w-[45%] h-full opacity-15 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at right, #B67A2D 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20 text-center">
            <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-3">
              Cómo funciona el proceso
            </p>
            <h2 className="font-heading font-extrabold text-[24px] sm:text-[32px] md:text-[42px] leading-[1.15] tracking-[-0.015em] mb-4 max-w-3xl mx-auto">
              Mira en este video cómo transformamos tu capacidad de crédito en{" "}
              <span className="text-[#B67A2D]">2 a 5 departamentos</span>
            </h2>
            <p className="font-body text-[14px] md:text-[17px] text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
              Te explicamos paso a paso el método con el que hemos aplicamos con profesionales mineros en Chile.
            </p>

            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black max-w-5xl mx-auto aspect-video">
              <VideoEmbed />
            </div>

            <div className="mt-8 md:mt-10">
              <Link
                href={LEAD_FORM_URL}
                className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-7 md:px-9 py-4 md:py-5 rounded-xl font-heading font-bold text-[14px] md:text-[16px] tracking-[1px] uppercase hover:bg-[#9A6624] active:scale-95 transition-all shadow-lg shadow-[#B67A2D]/30"
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  event
                </span>
                Agendar diagnóstico · gratuito
              </Link>
              <p className="font-body text-[12px] md:text-[13px] text-white/55 mt-3">
                Sin costo. Sin compromiso. Solo si calza contigo.
              </p>
            </div>
          </div>
        </section>

        {/* PROPUESTA DE VALOR: el corazón del pitch */}
        <section className="bg-[#2B2B2B] py-20 md:py-32">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
            <p className="font-heading font-bold text-[28px] sm:text-[40px] md:text-[56px] lg:text-[64px] text-white leading-[1.1] tracking-[-0.02em] max-w-5xl">
              El crédito que <span className="text-[#B67A2D]">ya tienes</span> vale entre 2 y 5 departamentos.
              <br className="hidden md:block" />
              <span className="text-white/70">Tu trabajo es comenzar. El resto lo hacemos nosotros.</span>
            </p>
          </div>
        </section>

        {/* PARA TI SI: filtro de audiencia, sin cards */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="font-heading font-bold text-[24px] sm:text-[32px] md:text-[40px] text-[#2B2B2B] leading-tight tracking-[-0.015em] mb-10 md:mb-12">
            Esta página es para ti si...
          </h2>
          <ul className="space-y-6 max-w-3xl">
            {PARA_TI.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="material-symbols-outlined text-[#B67A2D] text-[28px] mt-1 flex-shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="font-body text-[18px] md:text-[22px] text-[#2B2B2B] leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* CÓMO LO HACEMOS: método y equipo en 3 pasos minimalistas */}
        <section className="bg-[#F9F9F9] py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-[24px] sm:text-[32px] md:text-[40px] text-[#2B2B2B] leading-tight tracking-[-0.015em] mb-10 md:mb-14">
              Cómo lo hacemos.
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {PASOS.map((p) => (
                <li key={p.n}>
                  <p className="font-heading font-extrabold text-[48px] md:text-[64px] text-[#B67A2D] leading-none mb-3">
                    {p.n}
                  </p>
                  <p className="font-heading font-bold text-[18px] md:text-[20px] text-[#2B2B2B] leading-snug">
                    {p.title}
                  </p>
                </li>
              ))}
            </ol>
            <p className="font-body text-[16px] md:text-[18px] text-[#4A463E] mt-14 md:mt-16 max-w-3xl leading-relaxed">
              Un método y un equipo para que alcances este objetivo en el{" "}
              <strong className="text-[#2B2B2B]">menor tiempo posible</strong>, con trabajo profesional.
            </p>
          </div>
        </section>

        {/* CIERRE: el "comenzar" */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h2 className="font-heading font-bold text-[32px] sm:text-[44px] md:text-[60px] text-[#2B2B2B] leading-tight tracking-[-0.02em] mb-6">
            Lo importante es <span className="text-[#B67A2D]">comenzar</span>.
          </h2>
          <p className="font-body text-[17px] md:text-[19px] text-[#4A463E] max-w-xl mx-auto mb-10">
            Sin costo. Un asesor te contacta para revisar tu capacidad crediticia.
          </p>
          <Link
            href={LEAD_FORM_URL}
            className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-9 py-5 rounded-xl font-heading font-bold text-[16px] hover:bg-[#9A6624] transition-colors shadow-sm shadow-[#B67A2D]/20"
          >
            Agendemos
            <span className="material-symbols-outlined text-[22px]">arrow_forward</span>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
