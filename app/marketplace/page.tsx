import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { LEAD_FORM_URL } from "@/lib/constants";
import { FORMATOS } from "@/lib/marketplace";

export const metadata: Metadata = {
  title: "Marketplace de Inversiones | Mineros Invirtiendo",
  description:
    "4 formatos de inversión inmobiliaria para mineros: renta corta, sector oriente, inversiones clásicas y semi nuevos que se pagan solos. Elige el formato y agenda tu diagnóstico ya seteado al equipo.",
  alternates: { canonical: "/marketplace" },
};

const COMO_FUNCIONA = [
  {
    n: "01",
    title: "Eliges el formato que te hace sentido",
    body: "Renta corta, sector oriente, clásica o semi nuevo. Cada uno se ajusta a un objetivo distinto: flujo, plusvalía, simplicidad o entrega inmediata.",
  },
  {
    n: "02",
    title: "Agendas con tu intención preseteada",
    body: "Tu diagnóstico llega al equipo ya con el formato escogido, así la primera conversación parte avanzada y no desde cero.",
  },
  {
    n: "03",
    title: "Recibes opciones que calzan, no un catálogo",
    body: "El equipo te muestra activos del formato que elegiste, con números proyectados realistas y casos similares al tuyo.",
  },
];

export default function MarketplacePage() {
  return (
    <>
      <Header />
      <main className="pt-[68px] lg:pt-[84px]">
        {/* HERO */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-20">
          <span className="inline-block px-3 py-1 bg-[#E8C28A] text-[#8A5A1F] text-[12px] font-body font-semibold tracking-[0.05em] uppercase rounded-full mb-6">
            Marketplace de inversiones
          </span>
          <h1 className="font-heading font-bold text-[36px] sm:text-[52px] md:text-[64px] lg:text-[72px] text-[#2B2B2B] leading-[1.05] tracking-[-0.025em] max-w-5xl mb-7">
            Elige el <span className="text-[#B67A2D]">formato</span> de inversión que calza contigo.
          </h1>
          <p className="font-body text-[18px] md:text-[22px] text-[#2B2B2B] max-w-3xl leading-[1.4] mb-6">
            4 formas distintas de hacer crecer tu patrimonio. Cada formato se ajusta a un objetivo distinto: <strong>flujo</strong>, <strong>plusvalía</strong>, <strong>simplicidad</strong> o <strong>entrega inmediata</strong>.
          </p>
          <div className="flex gap-3 items-start bg-white border border-[#E8C28A]/60 rounded-2xl p-4 md:p-5 max-w-3xl">
            <span
              className="material-symbols-outlined text-[#B67A2D] text-[22px] mt-0.5 shrink-0"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              info
            </span>
            <p className="font-body text-[14px] md:text-[15px] text-[#4A463E] leading-relaxed">
              Aún no listamos propiedades públicamente. El formato es el primer filtro para que el diagnóstico llegue al equipo ya seteado y la conversación parta donde tú estás, no desde cero.
            </p>
          </div>
        </section>

        {/* GRID DE 4 FORMATOS */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-16 md:py-24">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                {FORMATOS.map((f) => (
                  <article
                    key={f.slug}
                    className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col hover:shadow-md hover:border-[#B67A2D]/30 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#F5E8D0] grid place-items-center shrink-0">
                        <span
                          className="material-symbols-outlined text-[#B67A2D] text-[26px] md:text-[28px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {f.icon}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-heading font-bold text-[10px] tracking-[2.5px] uppercase text-[#B67A2D] mb-1">
                          Formato
                        </p>
                        <h2 className="font-heading font-bold text-[20px] md:text-[24px] text-[#2B2B2B] leading-tight">
                          {f.label}
                        </h2>
                      </div>
                    </div>
                    <p className="font-body text-[15px] md:text-[16px] text-[#4A463E] leading-relaxed mb-6 flex-1">
                      {f.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-3 pt-5 border-t border-slate-100">
                      <Link
                        href={`${LEAD_FORM_URL}?tipo=${f.slug}`}
                        className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-5 py-2.5 rounded-lg font-heading font-bold text-[13px] md:text-[14px] hover:bg-[#9A6624] transition-colors"
                      >
                        Agendar con este formato
                        <span className="material-symbols-outlined text-[18px]">
                          event
                        </span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* CÓMO FUNCIONA */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-16 md:py-24">
            <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
              Cómo funciona
            </p>
            <h2 className="font-heading font-bold text-[26px] sm:text-[32px] md:text-[40px] text-[#2B2B2B] leading-tight tracking-[-0.015em] mb-10 md:mb-14 max-w-3xl">
              De elegir el formato a tener la propiedad operando.
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {COMO_FUNCIONA.map((p) => (
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
          </section>
        </FadeIn>

        {/* CTA GENÉRICO */}
        <FadeIn>
          <section className="bg-[#2B2B2B] py-14 md:py-20">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
              <h2 className="font-heading font-bold text-[26px] sm:text-[34px] md:text-[44px] text-white leading-tight tracking-[-0.015em] mb-4 max-w-3xl mx-auto">
                ¿No tienes claro cuál formato es el tuyo?
              </h2>
              <p className="font-body text-[15px] md:text-[17px] text-white/70 max-w-2xl mx-auto mb-8">
                Agenda igual. En el diagnóstico revisamos tu situación y te decimos cuál de los 4 calza con tu etapa, capacidad y objetivo.
              </p>
              <Link
                href={LEAD_FORM_URL}
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
