import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LEAD_FORM_URL, STOCK } from "@/lib/constants";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Educación Financiera para Mineros en Chile | Blog de Inversión",
  description:
    "Guías y análisis sobre inversión inmobiliaria, sociedad de profesionales, crédito hipotecario y optimización tributaria para profesionales de la minería en Chile.",
  alternates: {
    canonical: "/educacion-financiera-para-mineros",
  },
};

const CATEGORIAS = ["Todos", "Tributario", "Inmobiliario", "Financiero", "Guía 2026"];

export default function EducacionPage() {
  const featured = ARTICLES[0];
  const regulares = ARTICLES.slice(1);

  return (
    <>
      <Header />
      <main className="pt-[68px] lg:pt-[84px]">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={STOCK.heroLibrary}
              alt="Educación financiera para profesionales de la minería en Chile"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2B2B2B]/85 via-[#2B2B2B]/70 to-[#2B2B2B]/40" />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-28">
            <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-4">
              Hub · Educación Financiera
            </p>
            <h1 className="font-heading font-bold text-[26px] sm:text-[36px] md:text-[52px] text-white leading-tight tracking-[-0.02em] max-w-3xl mb-6">
              Guías y análisis para <span className="text-[#E8C28A]">mentes médicas</span>
            </h1>
            <p className="font-body text-[18px] text-white/80 max-w-2xl leading-relaxed">
              Contenido con el detalle técnico que un profesional de la minería necesita: inversión inmobiliaria en Chile, estructura tributaria, crédito hipotecario y estrategia patrimonial a 10 años.
            </p>
          </div>
        </section>

        {/* ── CATEGORÍAS ── */}
        <section className="border-b border-slate-100 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-2">
            {CATEGORIAS.map((cat, i) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-[12px] font-heading font-semibold border transition-colors cursor-pointer ${
                  i === 0
                    ? "bg-[#B67A2D] text-white border-[#B67A2D]"
                    : "bg-white text-[#4A463E] border-[#C4BCA9] hover:border-[#B67A2D] hover:text-[#B67A2D]"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </section>

        {/* ── DESTACADO ── */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 pt-12 md:pt-16">
          <Link
            href={`/educacion-financiera-para-mineros/${featured.slug}`}
            className="group block bg-white border border-slate-100 rounded-3xl overflow-hidden hover:border-[#B67A2D] hover:shadow-2xl transition-all"
          >
            <div className="grid md:grid-cols-2 items-stretch">
              <div className="relative h-64 md:h-auto min-h-[320px] overflow-hidden">
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 inline-block px-3 py-1.5 bg-[#FF8C00] text-white text-[11px] font-heading font-bold tracking-[0.05em] uppercase rounded-full shadow-md">
                  Destacado
                </span>
              </div>
              <div className="p-6 md:p-12 flex flex-col justify-center">
                <span className="inline-block self-start px-3 py-1 bg-[#F5E8D0] text-[#9A6624] text-[11px] font-body font-semibold tracking-[0.05em] uppercase rounded-full mb-4">
                  {featured.category}
                </span>
                <h2 className="font-heading font-bold text-[22px] sm:text-[26px] md:text-[34px] text-[#2B2B2B] leading-tight tracking-[-0.02em] mb-4">
                  {featured.title}
                </h2>
                <p className="font-body text-[16px] text-[#4A463E] leading-relaxed mb-5">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between text-[13px]">
                  <span className="text-[#6E6E6E] flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">
                      schedule
                    </span>
                    {featured.readMinutes} min de lectura
                  </span>
                  <span className="text-[#B67A2D] font-heading font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Leer artículo
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ── GRID ── */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulares.map((a) => (
              <Link
                key={a.slug}
                href={`/educacion-financiera-para-mineros/${a.slug}`}
                className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-[#B67A2D] hover:shadow-xl transition-all flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={a.cover}
                    alt={a.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 inline-block px-3 py-1 bg-white/90 backdrop-blur text-[#9A6624] text-[11px] font-body font-semibold tracking-[0.05em] uppercase rounded-full">
                    {a.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-[19px] text-[#2B2B2B] leading-snug mb-3">
                    {a.title}
                  </h3>
                  <p className="font-body text-[14px] text-[#4A463E] leading-relaxed mb-5 flex-1">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[13px] text-[#6E6E6E] mt-auto">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]">
                        schedule
                      </span>
                      {a.readMinutes} min
                    </span>
                    <span className="text-[#B67A2D] font-bold group-hover:translate-x-1 transition-transform">
                      Leer →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-[#F9F9F9] py-12 md:py-20">
          <div className="max-w-[720px] mx-auto px-6 lg:px-8 text-center">
            <span
              className="material-symbols-outlined text-[#B67A2D] text-[48px] mb-4 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              mark_email_read
            </span>
            <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em] mb-4">
              Aplica lo que lees a tu caso real
            </h2>
            <p className="font-body text-[17px] text-[#4A463E] mb-8 leading-relaxed">
              Leer es el primer paso. Completa tu diagnóstico patrimonial y un asesor te acompaña para bajar estos conceptos a tu realidad financiera.
            </p>
            <Link
              href={LEAD_FORM_URL}
              className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-8 py-4 rounded-xl font-heading font-bold text-[15px] hover:bg-[#9A6624] transition-colors"
            >
              Agendar diagnóstico gratis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
