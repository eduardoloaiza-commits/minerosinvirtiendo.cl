import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoTestimonials from "@/components/sections/VideoTestimonials";
import { LEAD_FORM_URL, VIDEO_TESTIMONIALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Testimonios | Mineros que ya estructuraron su patrimonio",
  description:
    "Historias reales de mineros en Chile que pasaron por los tres pilares del método. Técnicos en formación, especialistas y Faena Extrema que confiaron su estrategia patrimonial al equipo.",
  alternates: { canonical: "/testimonios" },
};

export default function TestimoniosPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px] lg:pt-[84px]">
        {/* ══ HERO ══ */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-16 text-center">
          <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-4">
            Historias reales
          </p>
          <h1 className="font-heading font-bold text-[26px] sm:text-[34px] md:text-[44px] text-[#2B2B2B] leading-tight tracking-[-0.02em] max-w-3xl mx-auto mb-5">
            Mineros que ya estructuraron su{" "}
            <span className="text-[#B67A2D]">patrimonio</span>
          </h1>
          <p className="font-body text-[15px] md:text-[18px] text-[#4A463E] leading-relaxed max-w-2xl mx-auto">
            Técnicos en formación, especialistas y Faena Extrema que pasaron por los tres pilares del
            método y hoy hablan en primera persona. Sin guion, sin filtro.
          </p>
        </section>

        {/* ══ GRID DE VIDEOS ══ */}
        <section className="bg-[#F9F9F9]">
          <VideoTestimonials
            videos={VIDEO_TESTIMONIALS}
            eyebrow="En voz de quienes lo vivieron"
            title="Cada testimonio, un caso aplicado"
            subtitle="Cómo fue el proceso para quienes pasaron del diagnóstico inicial a tener su portafolio operando."
          />
        </section>

        {/* ══ CTA ══ */}
        <section className="bg-[#2B2B2B] py-14 md:py-20 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[40%] h-full opacity-15 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at right, #B67A2D 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-white leading-tight tracking-[-0.01em] mb-5 max-w-3xl mx-auto">
              Tu caso podría ser el siguiente.
            </h2>
            <p className="font-body text-[15px] md:text-[17px] text-white/75 max-w-xl mx-auto mb-8">
              Agenda una sesión gratuita y conversemos cómo se vería tu plan.
            </p>
            <Link
              href={LEAD_FORM_URL}
              className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-8 py-4 rounded-xl font-heading font-bold text-[14px] md:text-[15px] hover:bg-[#9A6624] transition-colors shadow-lg shadow-[#B67A2D]/30"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                event
              </span>
              Agendar diagnóstico gratis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
