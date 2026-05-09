import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LeadCtas from "@/components/LeadCtas";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import YouTubeLite from "@/components/ui/YouTubeLite";
import {
  TEAM,
  VSL_VIDEO,
} from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Sesión de Asesoría Gratuita | Centro de Diagnóstico y Estrategia Patrimonial",
  description:
    "Agenda una sesión para optimizar recursos, impuestos y decisiones según tu etapa profesional. Sin tratamientos genéricos, con un equipo experto en mineros.",
  alternates: { canonical: "/entrenamiento/vsl" },
  robots: { index: true, follow: true },
};

/* 3 pilares: versión condensada, misma data que /metodo */
const PILARES = [
  {
    step: "01",
    name: "Sondaje",
    title: "Sondaje Financiero y Patrimonial",
    body: "Diagnóstico real: cuánto puedes invertir, cómo está compuesta tu renta, qué carga tienes y qué decisiones calzan con tu etapa.",
  },
  {
    step: "02",
    name: "Diseño",
    title: "Diseño de Estrategia Inmobiliaria",
    body: "Un plan claro con 2 o 3 opciones que calzan con tu flujo, tu objetivo patrimonial y tu momento profesional. No un catálogo.",
  },
  {
    step: "03",
    name: "Aplicación",
    title: "Aplicar la Estrategia Inmobiliaria",
    body: "Ejecutamos contigo: crédito, documentación, firmas, arriendo y administración. No firmamos y desaparecemos.",
  },
];

/* ── Casos ilustrativos (pendiente reemplazar con casos reales del cliente) ── */
const CASOS = [
  {
    nombre: "Sergio",
    etapa: "Operador con turno 7x7",
    hecho: "3 departamentos estructurados usando solo el 50% de su capacidad de ahorro mensual.",
    metric: "+$500M",
    metricLabel: "patrimonio proyectado",
  },
  {
    nombre: "Gino",
    etapa: "Supervisor, crédito casi copado",
    hecho: "2 propiedades con 30% de su capacidad de ahorro y una estructura bien diseñada.",
    metric: "+$350M",
    metricLabel: "patrimonio construido",
  },
  {
    nombre: "Cristóbal",
    etapa: "Jefe de operaciones · consultoría minera",
    hecho: "Invirtió desde su sociedad de consultoría optimizando más de $50M en impuestos.",
    metric: "$300M",
    metricLabel: "patrimonio proyectado",
  },
];

const GARANTIAS = [
  {
    icon: "schedule",
    title: "Diagnóstico en 7 días o devolución 100%",
  },
  {
    icon: "paid",
    title: "Tu pago se transforma en reserva real de tu propiedad",
  },
  {
    icon: "group",
    title: "Solo 5 cupos abiertos por capacidad operativa",
  },
];

function VideoEmbed() {
  // Placeholder mientras no haya URL real configurada.
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
          Mientras tanto puedes agendar directamente tu sesión estratégica
          abajo y conversar con el equipo.
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

export default function VslPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px] lg:pt-[84px]">
        {/* HERO: video central */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2B2B2B] via-[#2B2B2B] to-[#523515] text-white">
          <div
            className="absolute top-0 right-0 w-[45%] h-full opacity-15 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at right, #B67A2D 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-14 text-center">
            <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-3">
              Centro de Diagnóstico y Estrategia Patrimonial
            </p>
            <h1 className="font-heading font-extrabold text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] tracking-[-0.015em] mb-4 max-w-4xl mx-auto">
              Si quieres optimizar recursos, impuestos y decisiones según tu
              etapa profesional, con{" "}
              <span className="text-[#B67A2D]">
                un método sin tratamientos genéricos
              </span>
              , mira este video.
            </h1>
            <p className="font-body text-[14px] md:text-[17px] text-white/75 leading-relaxed max-w-2xl mx-auto mb-8">
              15 minutos. Sin relleno. Te mostramos cómo funciona el sistema
              que aplicamos con profesionales mineros en Chile.
            </p>

            {/* Video */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black max-w-5xl mx-auto aspect-video">
              <VideoEmbed />
            </div>

            {/* CTA inmediato debajo del video */}
            <div className="mt-8 md:mt-10">
              <LeadCtas variant="row" />
              <p className="font-body text-[12px] md:text-[13px] text-white/55 mt-4">
                Sin costo. Sin compromiso. Solo si calza contigo.
              </p>
            </div>
          </div>
        </section>

        {/* TRUST BAR pendiente: agregar gremios mineros / convenios reales */}

        {/* ══ 3 PILARES condensados ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                El sistema
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                No vendemos proyectos. Diseñamos e implementamos una estrategia.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {PILARES.map((p) => (
                <div
                  key={p.step}
                  className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#8A5A1F] text-white grid place-items-center font-heading font-extrabold text-[14px]">
                      {p.step}
                    </div>
                    <span className="inline-block bg-[#F5E8D0] text-[#8A5A1F] font-heading font-bold text-[10px] tracking-[2px] uppercase px-2.5 py-1 rounded-full">
                      {p.name}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[17px] md:text-[19px] text-[#2B2B2B] mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-body text-[14px] md:text-[15px] text-[#4A463E] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 md:mt-10">
              <Link
                href="/metodo"
                className="inline-flex items-center gap-2 text-[#B67A2D] hover:text-[#9A6624] font-heading font-bold text-[13px] md:text-[14px] transition-colors"
              >
                Ver el método completo
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </section>
        </FadeIn>

        {/* ══ CASOS ══ */}
        <FadeIn>
          <section className="bg-[#2B2B2B] py-12 md:py-20">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-3">
                  Casos reales
                </p>
                <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-white leading-tight tracking-[-0.01em]">
                  No fue suerte. Fue estructura aplicada correctamente.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {CASOS.map((c) => (
                  <div
                    key={c.nombre}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-[#B67A2D] grid place-items-center shrink-0">
                        <span
                          className="material-symbols-outlined text-white text-[20px]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          person
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-heading font-bold text-[17px] text-white leading-tight">
                          {c.nombre}
                        </p>
                        <p className="font-body text-[12px] text-[#E8C28A]/90 leading-tight mt-0.5">
                          {c.etapa}
                        </p>
                      </div>
                    </div>
                    <p className="font-body text-[14px] text-white/80 leading-relaxed mb-5">
                      {c.hecho}
                    </p>
                    <div className="pt-4 border-t border-white/10">
                      <p className="font-heading font-extrabold text-[26px] md:text-[30px] text-[#B67A2D] leading-none">
                        {c.metric}
                      </p>
                      <p className="font-body text-[11px] text-white/60 mt-1 uppercase tracking-[1px]">
                        {c.metricLabel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ══ EQUIPO ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                Quiénes están detrás
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                Un equipo de expertos, no de vendedores
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {TEAM.map((p) => (
                <div
                  key={p.name}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[4/5] bg-[#F5E8D0]">
                    <Image
                      src={p.photo}
                      alt={p.name}
                      fill
                      sizes="(min-width:768px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 md:p-5">
                    <p className="font-heading font-bold text-[10px] tracking-[2px] uppercase text-[#B67A2D] mb-1 line-clamp-2">
                      {p.role}
                    </p>
                    <p className="font-heading font-bold text-[14px] md:text-[16px] text-[#2B2B2B] leading-tight">
                      {p.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ══ GARANTÍAS ══ */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-12 md:py-16">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                  Lógica de riesgo
                </p>
                <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                  Para que no sea otro salto al vacío
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                {GARANTIAS.map((g) => (
                  <div
                    key={g.title}
                    className="bg-white border-2 border-[#B67A2D]/20 rounded-2xl p-5 md:p-6 flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#B67A2D] grid place-items-center shrink-0">
                      <span
                        className="material-symbols-outlined text-white text-[22px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {g.icon}
                      </span>
                    </div>
                    <p className="font-heading font-bold text-[14px] md:text-[15px] text-[#2B2B2B] leading-snug">
                      {g.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ══ CTA FINAL ══ */}
        <FadeIn>
          <section className="bg-[#2B2B2B] py-14 md:py-24 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-[40%] h-full opacity-15 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at right, #B67A2D 0%, transparent 70%)",
              }}
            />
            <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 text-center">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-4">
                Agenda tu sesión estratégica
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[32px] md:text-[44px] text-white leading-tight tracking-[-0.01em] mb-5 max-w-3xl mx-auto">
                No es una llamada de presión.{" "}
                <span className="text-[#B67A2D]">
                  No te vamos a vender un departamento.
                </span>
              </h2>
              <p className="font-body text-[15px] md:text-[17px] text-white/75 max-w-2xl mx-auto mb-8">
                Es una reunión para entender dónde estás y si realmente podemos
                ayudarte. Si no somos la solución correcta, te lo decimos con
                total honestidad.
              </p>
              <LeadCtas variant="row" />
              <p className="font-body text-[12px] text-white/50 mt-4">
                5 cupos abiertos · solo para mineros con capacidad crediticia
              </p>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
