import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CONVENIOS, LEAD_FORM_URL, STOCK, TEAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Quiénes Somos | Especialistas inmobiliarios y patrimoniales para profesionales mineros",
  description:
    "Un equipo con trayectoria probada en construcción, inversión inmobiliaria y gestión patrimonial. Más de 10 años acompañando a profesionales de alta renta a construir patrimonio. Más que asesores, somos tus amigos financieros.",
  alternates: { canonical: "/quienes-somos" },
};

const VALORES = [
  {
    icon: "apartment",
    title: "Trayectoria probada en inversión",
    body:
      "Especialistas en construcción, desarrollo inmobiliario y gestión patrimonial. Trabajamos cada caso con la misma rigurosidad que aplicamos a nuestras propias inversiones.",
  },
  {
    icon: "handshake",
    title: "Más que asesores, amigos financieros",
    body:
      "Acompañamos cada paso del proceso con cercanía y claridad. Queremos que tomes decisiones informadas, no apuradas.",
  },
  {
    icon: "verified",
    title: "Sin comisiones para ti",
    body:
      "Nuestra asesoría es gratuita: nos financiamos a través de las inmobiliarias con las que trabajamos. Tú no pagas por nuestro acompañamiento.",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <Header />
      <main className="pt-[88px] lg:pt-[104px]">
        {/* ── HERO ── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={STOCK.heroTeam}
              alt="Equipo Mineros Invirtiendo"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2B2B2B]/90 via-[#2B2B2B]/70 to-[#2B2B2B]/30" />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-32">
            <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-4">
              Sobre nosotros
            </p>
            <h1 className="font-heading font-bold text-[28px] sm:text-[38px] md:text-[56px] text-white leading-[1.1] tracking-[-0.02em] max-w-3xl mb-6">
              Especialistas en inversión que <span className="text-[#E8C28A]">también invertimos</span>.
            </h1>
            <p className="font-body text-[18px] text-white/80 max-w-2xl leading-relaxed">
              Somos un equipo especializado en el mercado inmobiliario chileno desde hace más de 10 años:
              construcción, desarrollo, asesoría hipotecaria y gestión patrimonial. Acompañamos a
              profesionales de alta renta a tomar decisiones informadas y construir patrimonio con
              método. Más que asesores, somos tus amigos financieros.
            </p>
          </div>
        </section>

        {/* ── VALORES ── */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-4">
              Cómo trabajamos
            </p>
            <h2 className="font-heading font-bold text-[22px] sm:text-[30px] md:text-[38px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
              Cercanía, experiencia y transparencia
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALORES.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-slate-100 rounded-2xl p-8 hover:border-[#B67A2D] hover:shadow-lg transition-all"
              >
                <span
                  className="material-symbols-outlined text-[#B67A2D] text-[36px] mb-4 block"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {v.icon}
                </span>
                <h3 className="font-heading font-bold text-[19px] text-[#2B2B2B] mb-3">
                  {v.title}
                </h3>
                <p className="font-body text-[15px] text-[#4A463E] leading-relaxed">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── EQUIPO ── */}
        <section className="bg-[#F9F9F9] py-12 md:py-20">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-14 max-w-2xl mx-auto">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-4">
                El equipo
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[30px] md:text-[38px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                Las personas detrás del proyecto
              </h2>
              <p className="font-body text-[16px] text-[#4A463E] mt-3 leading-relaxed">
                Trayectoria multidisciplinaria con foco en construcción, gestión patrimonial e
                inversión inmobiliaria — la base técnica que sostiene cada recomendación del método.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
                >
                  <div className="relative h-64 bg-gradient-to-br from-[#B67A2D]/10 via-[#E8C28A]/15 to-[#E8C28A]/10">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full grid place-items-center">
                        <span
                          className="material-symbols-outlined text-[#B67A2D] text-[72px] opacity-40"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          group
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="font-heading font-bold text-[10px] tracking-[2px] uppercase text-[#B67A2D] mb-2">
                      {member.role}
                    </p>
                    <h3 className="font-heading font-bold text-[18px] text-[#2B2B2B] mb-2">
                      {member.name}
                    </h3>
                    {member.tagline ? (
                      <p className="font-body text-[13px] text-[#4A463E] leading-snug mb-4">
                        {member.tagline}
                      </p>
                    ) : null}
                    <ul className="flex flex-col gap-2 mt-auto pt-2 border-t border-[#F5F0E8]">
                      {member.credentials.map((c) => (
                        <li key={c} className="flex gap-2.5 text-[#6E6E6E] text-[12px] leading-snug">
                          <span
                            className="material-symbols-outlined text-[#B67A2D] text-[14px] shrink-0 mt-0.5"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            check
                          </span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONVENIOS ── (solo renderizamos si hay al menos uno;
            mientras no estén firmados los convenios gremiales mineros,
            la sección queda oculta para no mostrar un bloque vacío). */}
        {CONVENIOS.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-4">
              Vínculos institucionales
            </p>
            <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
              Trabajamos con respaldo
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {CONVENIOS.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-slate-100 rounded-2xl p-7 flex items-start gap-5"
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-white border border-slate-100 shrink-0 grid place-items-center p-2">
                  {c.logo ? (
                    <Image
                      src={c.logo}
                      alt={c.logoAlt ?? c.name}
                      width={120}
                      height={120}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span
                      className="material-symbols-outlined text-[#B67A2D] text-[32px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {c.icon}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[17px] text-[#2B2B2B] mb-1">
                    {c.name}
                  </h3>
                  <p className="font-body text-[14px] text-[#4A463E] leading-relaxed">
                    {c.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        )}

        {/* ── CTA ── */}
        <section className="bg-[#2B2B2B] py-12 md:py-20">
          <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-[22px] sm:text-[30px] md:text-[42px] text-white leading-tight tracking-[-0.01em] mb-5 max-w-2xl mx-auto">
              Conversemos sobre tu camino
            </h2>
            <p className="font-body text-[17px] text-white/70 max-w-xl mx-auto mb-8">
              Una primera reunión gratuita para conocer tus objetivos financieros y ver si podemos
              acompañarte. Sin compromiso.
            </p>
            <Link
              href={LEAD_FORM_URL}
              className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-8 py-4 rounded-xl font-heading font-bold text-[15px] hover:bg-[#9A6624] transition-colors"
            >
              Agendar diagnóstico
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
