import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { LEAD_FORM_URL, SITE_URL } from "@/lib/constants";
import { ARTICLES, getArticle, getOtherArticles } from "@/lib/articles";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const canonical = `/educacion-financiera-para-mineros/${article.slug}`;
  return {
    title: article.metaTitle ?? article.title,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: `${SITE_URL}${canonical}`,
      title: article.metaTitle ?? article.title,
      description: article.metaDescription,
      images: [{ url: article.cover }],
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.metaDescription,
      images: [article.cover],
    },
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const otros = getOtherArticles(slug, 3);
  const fechaFormateada = new Date(article.publishedAt).toLocaleDateString(
    "es-CL",
    { year: "numeric", month: "long", day: "numeric" },
  );

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: article.cover,
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: "Mineros Invirtiendo" },
    publisher: {
      "@type": "Organization",
      name: "Mineros Invirtiendo",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/educacion-financiera-para-mineros/${article.slug}`,
    },
    keywords: article.keywords.join(", "),
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="pt-[68px] lg:pt-[84px] bg-white">
        {/* ── Hero con imagen ── */}
        <section className="relative">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[3/1] w-full overflow-hidden bg-[#2B2B2B]">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/85 via-[#2B2B2B]/40 to-transparent" />
          </div>

          <div className="max-w-[780px] mx-auto px-5 sm:px-6 lg:px-0 -mt-14 sm:-mt-20 md:-mt-32 relative">
            <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-6 md:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-5 text-[13px]">
                <span className="inline-block px-3 py-1 bg-[#F5E8D0] text-[#9A6624] text-[11px] font-body font-semibold tracking-[0.05em] uppercase rounded-full">
                  {article.category}
                </span>
                <span className="text-[#6E6E6E] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    calendar_today
                  </span>
                  {fechaFormateada}
                </span>
                <span className="text-[#6E6E6E] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    schedule
                  </span>
                  {article.readMinutes} min de lectura
                </span>
              </div>
              <h1 className="font-heading font-bold text-[22px] sm:text-[30px] md:text-[42px] text-[#2B2B2B] leading-[1.15] tracking-[-0.02em]">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        {/* ── Contenido ── */}
        <article className="max-w-[720px] mx-auto px-6 lg:px-0 py-12 md:py-16">
          {/* Intro */}
          <div className="space-y-5 mb-10">
            {article.intro.map((p, i) => (
              <p
                key={i}
                className={`font-body text-[#2B2B2B] leading-[1.75] ${
                  i === 0
                    ? "text-[18px] md:text-[20px] font-medium"
                    : "text-[17px]"
                }`}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Secciones */}
          <div className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.h}>
                <h2 className="font-heading font-bold text-[24px] md:text-[28px] text-[#2B2B2B] leading-tight tracking-[-0.01em] mb-5 scroll-mt-24">
                  {section.h}
                </h2>
                <div className="space-y-4">
                  {section.p.map((p, i) => (
                    <p
                      key={i}
                      className="font-body text-[17px] text-[#2B2B2B] leading-[1.75]"
                    >
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2.5 mt-4">
                      {section.list.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 font-body text-[16px] text-[#2B2B2B] leading-[1.65]"
                        >
                          <span className="material-symbols-outlined text-[#B67A2D] text-[20px] shrink-0 mt-0.5">
                            {section.list?.ordered
                              ? ["looks_one", "looks_two", "looks_3", "looks_4", "looks_5", "looks_6"][i] ??
                                "circle"
                              : "check_circle"}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Conclusión */}
          <div className="mt-12 pt-10 border-t border-slate-100 space-y-4">
            <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D]">
              Conclusión
            </p>
            {article.conclusion.map((p, i) => (
              <p
                key={i}
                className="font-body text-[17px] text-[#2B2B2B] leading-[1.75]"
              >
                {p}
              </p>
            ))}
          </div>
        </article>

        {/* ── CTA diagnóstico ── */}
        <section className="bg-[#2B2B2B] py-10 md:py-16">
          <div className="max-w-[720px] mx-auto px-6 lg:px-0 text-center">
            <h2 className="font-heading font-bold text-[22px] sm:text-[26px] md:text-[34px] text-white leading-tight tracking-[-0.01em] mb-4">
              ¿Te hizo sentido? Conversemos tu caso
            </h2>
            <p className="font-body text-[16px] text-white/75 max-w-[480px] mx-auto mb-7">
              Leer es el primer paso. Un diagnóstico gratuito de 2 minutos te conecta con un asesor que revisa tu situación particular por WhatsApp.
            </p>
            <Link
              href={LEAD_FORM_URL}
              className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-8 py-4 rounded-xl font-heading font-bold text-[15px] hover:bg-[#9A6624] transition-colors"
            >
              Agendar diagnóstico gratis
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </section>

        {/* ── Otros artículos ── */}
        {otros.length > 0 && (
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <h2 className="font-heading font-bold text-[24px] md:text-[30px] text-[#2B2B2B] leading-tight tracking-[-0.01em] mb-8">
              Sigue leyendo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otros.map((a) => (
                <Link
                  key={a.slug}
                  href={`/educacion-financiera-para-mineros/${a.slug}`}
                  className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-[#B67A2D] hover:shadow-xl transition-all flex flex-col"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={a.cover}
                      alt={a.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 inline-block px-3 py-1 bg-white/90 backdrop-blur text-[#9A6624] text-[11px] font-body font-semibold tracking-[0.05em] uppercase rounded-full">
                      {a.category}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-heading font-bold text-[17px] text-[#2B2B2B] leading-snug mb-2 flex-1">
                      {a.title}
                    </h3>
                    <div className="flex items-center justify-between text-[12px] text-[#6E6E6E]">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          schedule
                        </span>
                        {a.readMinutes} min
                      </span>
                      <span className="text-[#B67A2D] font-bold">
                        Leer →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
