import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { LEAD_FORM_URL, SITE_URL } from "@/lib/constants";
import { FORMATOS, FORMATOS_BY_SLUG } from "@/lib/marketplace";

type Params = Promise<{ formato: string }>;

export async function generateStaticParams() {
  return FORMATOS.map((f) => ({ formato: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { formato } = await params;
  const f = FORMATOS_BY_SLUG[formato];
  if (!f) return {};
  const canonical = `/marketplace/${f.slug}`;
  const title = `${f.label} · Marketplace de Inversiones | Mineros Invirtiendo`;
  const description = f.shortDescription;
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

export default async function FormatoPage({ params }: { params: Params }) {
  const { formato } = await params;
  const f = FORMATOS_BY_SLUG[formato];
  if (!f) notFound();

  const ctaHref = `${LEAD_FORM_URL}?tipo=${f.slug}`;

  return (
    <>
      <Header />
      <main className="pt-[88px] lg:pt-[104px]">
        {/* HERO */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href="/marketplace"
              className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#B67A2D] hover:text-[#9A6624] transition-colors"
            >
              ← Marketplace
            </Link>
            <span className="text-[#C4BCA9]">/</span>
            <span className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#6E6E6E]">
              {f.label}
            </span>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#F5E8D0] grid place-items-center shrink-0">
              <span
                className="material-symbols-outlined text-[#B67A2D] text-[26px] md:text-[28px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {f.icon}
              </span>
            </div>
            <span className="inline-block px-3 py-1 bg-[#E8C28A] text-[#8A5A1F] text-[12px] font-body font-semibold tracking-[0.05em] uppercase rounded-full">
              {f.hero.eyebrow}
            </span>
          </div>

          <h1 className="font-heading font-bold text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] text-[#2B2B2B] leading-[1.05] tracking-[-0.025em] max-w-4xl mb-6">
            {f.hero.headline}
          </h1>
          <p className="font-body text-[18px] md:text-[22px] text-[#2B2B2B] max-w-3xl leading-[1.4] mb-8">
            {f.hero.sub}
          </p>
          <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] max-w-3xl leading-relaxed mb-10">
            {f.description}
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-9 py-5 rounded-xl font-heading font-bold text-[16px] hover:bg-[#9A6624] transition-colors shadow-sm shadow-[#B67A2D]/20"
          >
            Agendar diagnóstico
            <span className="material-symbols-outlined text-[22px]">
              arrow_forward
            </span>
          </Link>
        </section>

        {/* PARA QUIEN */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-slate-100">
            <h2 className="font-heading font-bold text-[24px] sm:text-[32px] md:text-[40px] text-[#2B2B2B] leading-tight tracking-[-0.015em] mb-10 md:mb-12">
              Este formato es para ti si...
            </h2>
            <ul className="space-y-6 max-w-3xl">
              {f.paraQuien.map((item) => (
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
        </FadeIn>

        {/* COMO FUNCIONA */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-16 md:py-24">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <h2 className="font-heading font-bold text-[24px] sm:text-[32px] md:text-[40px] text-[#2B2B2B] leading-tight tracking-[-0.015em] mb-10 md:mb-14">
                Cómo lo hacemos.
              </h2>
              <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {f.comoFunciona.map((p) => (
                  <li key={p.n}>
                    <p className="font-heading font-extrabold text-[44px] md:text-[56px] text-[#B67A2D] leading-none mb-3">
                      {p.n}
                    </p>
                    <p className="font-heading font-bold text-[17px] md:text-[20px] text-[#2B2B2B] leading-snug mb-2">
                      {p.title}
                    </p>
                    <p className="font-body text-[14px] md:text-[15px] text-[#4A463E] leading-relaxed">
                      {p.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        </FadeIn>

        {/* PROXIMAMENTE PROPIEDADES */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20">
            <div className="bg-white border border-[#E8C28A]/60 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6 md:gap-10 md:items-center">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#F5E8D0] grid place-items-center shrink-0">
                <span
                  className="material-symbols-outlined text-[#B67A2D] text-[30px] md:text-[34px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  schedule
                </span>
              </div>
              <div className="flex-1">
                <p className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#B67A2D] mb-2">
                  Próximamente
                </p>
                <h3 className="font-heading font-bold text-[20px] md:text-[26px] text-[#2B2B2B] leading-snug mb-2">
                  Aquí listaremos las propiedades disponibles en este formato.
                </h3>
                <p className="font-body text-[14px] md:text-[16px] text-[#4A463E] leading-relaxed">
                  Mientras tanto, agenda tu diagnóstico con el formato preseteado y el equipo te muestra las opciones que calzan contigo.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CTA CIERRE */}
        <FadeIn>
          <section className="bg-[#2B2B2B] py-14 md:py-20">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
              <h2 className="font-heading font-bold text-[26px] sm:text-[34px] md:text-[44px] text-white leading-tight tracking-[-0.015em] mb-4 max-w-3xl mx-auto">
                Agendar con formato <span className="text-[#B67A2D]">{f.label}</span>.
              </h2>
              <p className="font-body text-[15px] md:text-[17px] text-white/70 max-w-2xl mx-auto mb-8">
                Tu diagnóstico llega al equipo ya seteado con este formato. La conversación parte donde tú estás.
              </p>
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-8 py-4 rounded-xl font-heading font-bold text-[14px] md:text-[15px] hover:bg-[#9A6624] transition-colors shadow-lg shadow-[#B67A2D]/30"
              >
                Agendar diagnóstico
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
