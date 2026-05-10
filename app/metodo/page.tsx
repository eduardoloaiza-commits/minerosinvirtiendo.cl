import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { LEAD_FORM_URL, VSL_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "El Método | Centro de Diagnóstico y Estrategia Patrimonial para Mineros",
  description:
    "No necesitas más vitrinas, necesitas un sistema. Diseñamos e implementamos una estrategia patrimonial coherente con tu etapa profesional, capacidad crediticia y tiempo.",
  alternates: { canonical: "/metodo" },
};

const EXTREMOS = [
  {
    icon: "hourglass_empty",
    title: "Postergar por miedo a equivocarse",
    body: "La decisión queda pendiente mes tras mes mientras el tiempo, y la capacidad de construir patrimonio, se va.",
  },
  {
    icon: "warning",
    title: "Comprar algo que 'parecía buena idea'",
    body: "Después te encuentras con que no puedes acceder a crédito hipotecario futuro, quedas sin liquidez o el activo no rinde lo proyectado.",
  },
];

const NO_TIENES_TIEMPO = [
  "Revisar decenas de proyectos",
  "Comparar estructuras y simuladores",
  "Perseguir ejecutivos de bancos",
  "Entender variables hipotecarias",
  "Ordenar documentación",
  "Coordinar como un segundo trabajo",
];

const POR_QUE_MINERO = [
  {
    icon: "receipt_long",
    title: "Cómo está compuesta tu renta",
    body: "Honorarios, sociedad, contrato, tributación. Tu estructura de ingresos define cómo se debe armar la inversión.",
  },
  {
    icon: "timeline",
    title: "En qué etapa de tu carrera estás",
    body: "General, Faena Extrema, profesional en formación o especialista: cada etapa tiene decisiones que aceleran o bloquean tu capacidad futura.",
  },
  {
    icon: "credit_score",
    title: "Qué carga financiera tienes hoy",
    body: "Créditos, compromisos y tu capacidad crediticia real son el piso sobre el que se diseña la estrategia.",
  },
  {
    icon: "trending_up",
    title: "Cómo cambiará tu realidad profesional",
    body: "Las decisiones de hoy no pueden bloquear al profesional minero que vas a ser en 5 años.",
  },
  {
    icon: "engineering",
    title: "Sin desordenar tu foco operativo",
    body: "El sistema está pensado para que inviertas bien sin que esto compita con tus turnos ni tu energía.",
  },
];

const PILARES = [
  {
    step: "01",
    name: "Sondaje",
    title: "Sondaje Financiero y Patrimonial",
    body: "Hacemos un diagnóstico real de tu situación: cuánto puedes invertir, cómo está compuesta tu renta, qué carga financiera tienes, en qué etapa profesional estás y qué decisiones tienen sentido sin comprometer tu capacidad de pago presente y futura.",
    bullets: [
      "Lectura de ingresos, honorarios y sociedad",
      "Capacidad crediticia real y carga actual",
      "Mapeo de etapa profesional y proyección a 5 años",
      "Definición del objetivo patrimonial",
    ],
  },
  {
    step: "02",
    name: "Diseño",
    title: "Diseño de Estrategia Inmobiliaria",
    body: "Transformamos el diagnóstico en un plan claro. No para mostrarte 200 proyectos: para definir 2 o 3 opciones que realmente calcen con tu capacidad de pago, tu objetivo patrimonial y, sobre todo, tu momento profesional.",
    bullets: [
      "2 a 3 alternativas curadas, no un catálogo",
      "Calce con flujo, crédito y etapa",
      "Estructura tributaria (sociedad, DFL2)",
      "Hoja de ruta con hitos y fechas",
    ],
  },
  {
    step: "03",
    name: "Aplicación",
    title: "Aplicar la Estrategia Inmobiliaria",
    body: "Ejecutamos contigo todo el proceso: buscamos el mejor crédito hipotecario, armamos tu documentación, coordinamos las firmas si tienes que viajar, y te acompañamos en la puesta en marcha con arriendo y administración.",
    bullets: [
      "Negociación de crédito con múltiples bancos",
      "Documentación y firmas coordinadas",
      "Arriendo y administración del activo",
      "Seguimiento permanente, no 'firmar y desaparecer'",
    ],
  },
];

const DIFERENCIA_NO = [
  "No es un curso más",
  "No es un broker que vende por moda",
  "No es una asesoría que te dice 'esto te conviene' y desaparece",
];

const DIFERENCIA_SI = [
  "Es trabajo aplicado sobre tu caso real",
  "Tomamos tus ingresos, etapa profesional y objetivo",
  "Construimos contigo una estrategia que quede ejecutada",
  "Si no podemos generar impacto real, no trabajamos contigo",
];

const CASOS = [
  {
    nombre: "Sergio",
    etapa: "Faena Extrema",
    hecho: "3 departamentos estructurados usando solo el 50% de su capacidad de ahorro.",
    metric: "+$500M",
    metricLabel: "patrimonio proyectado",
  },
  {
    nombre: "Gino",
    etapa: "Especialista, crédito casi copado",
    hecho: "2 propiedades con 30% de su capacidad de ahorro y una estructura bien diseñada.",
    metric: "+$350M",
    metricLabel: "patrimonio construido",
  },
  {
    nombre: "Cristóbal",
    etapa: "Jefe de operaciones · sociedad minera",
    hecho: "Invirtió desde su sociedad minera optimizando más de $50M en impuestos.",
    metric: "$300M",
    metricLabel: "patrimonio proyectado",
  },
];

const GARANTIAS = [
  {
    icon: "schedule",
    title: "Diagnóstico en 7 días",
    body: "Si no te entregamos tu Diagnóstico y Estrategia dentro de los primeros 7 días desde tu ingreso, devolvemos el 100% de lo pagado por acceder al método.",
  },
  {
    icon: "paid",
    title: "Tu pago se vuelve acción real",
    body: "Si el plan calza y decides avanzar, tu pago inicial se usa para cubrir las reservas de los departamentos que compras. No pagas por humo: pones en marcha una decisión concreta.",
  },
  {
    icon: "group",
    title: "Solo 5 cupos abiertos",
    body: "Por capacidad operativa trabajamos con 5 mineros a la vez. Cuando los cupos se llenan, se cierra. Esto exige trabajo directo, personalizado y seguimiento real.",
  },
];

export default function MetodoPage() {
  return (
    <>
      <Header />
      <main className="pt-[88px] lg:pt-[104px]">
        {/* HERO: el problema real */}
        <section className="relative overflow-hidden bg-[#2B2B2B] text-white">
          <div
            className="absolute top-0 right-0 w-[50%] h-full opacity-15 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at right, #B67A2D 0%, transparent 60%)",
            }}
          />
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-14 md:py-24">
            <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-5">
              El Método · Centro de Diagnóstico y Estrategia Patrimonial
            </p>
            <h1 className="font-heading font-extrabold text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] mb-6 max-w-4xl">
              No necesitas más vitrinas.{" "}
              <span className="text-[#B67A2D]">Necesitas un sistema.</span>
            </h1>
            <p className="font-body text-[16px] md:text-[19px] text-white/80 leading-relaxed max-w-3xl mb-8">
              Puedes tener capacidad de ahorro, acceso a crédito y buenas
              intenciones, pero aun así tomar malas decisiones si no tienes una
              estructura diseñada para invertir con lógica patrimonial.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={LEAD_FORM_URL}
                className="bg-[#B67A2D] text-white px-7 py-4 rounded-xl font-heading font-bold text-[14px] md:text-[15px] hover:bg-[#9A6624] active:scale-95 transition-all shadow-lg shadow-[#B67A2D]/20 text-center"
              >
                Agendar conversación estratégica
              </Link>
              <Link
                href={VSL_URL}
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/15 backdrop-blur-md px-7 py-4 rounded-xl font-heading font-bold text-[14px] md:text-[15px] hover:bg-white/20 transition-colors"
              >
                <span
                  className="material-symbols-outlined text-[20px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  play_circle
                </span>
                Ver el video completo
              </Link>
            </div>
          </div>
        </section>

        {/* ══ LOS DOS EXTREMOS ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="max-w-3xl mb-10 md:mb-12">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                El problema real
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em] mb-4">
                La mayoría de los mineros queda atrapada entre dos extremos
              </h2>
              <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] leading-relaxed">
                El mercado está lleno de brokers, influencers, lanzamientos y
                supuestas oportunidades. Pero eso no necesariamente construye
                patrimonio: muchas veces lo frena.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              {EXTREMOS.map((e) => (
                <div
                  key={e.title}
                  className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FFF4E6] grid place-items-center mb-5">
                    <span
                      className="material-symbols-outlined text-[#E07820] text-[26px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {e.icon}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[18px] md:text-[20px] text-[#2B2B2B] mb-3 leading-snug">
                    {e.title}
                  </h3>
                  <p className="font-body text-[14.5px] md:text-[15px] text-[#4A463E] leading-relaxed">
                    {e.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ══ NO TIENES TIEMPO ══ */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-12 md:py-20">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-start">
              <div>
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                  Y se agrava por algo simple
                </p>
                <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em] mb-5">
                  La mayoría de los mineros no tiene tiempo para nada de esto.
                </h2>
                <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] leading-relaxed">
                  El problema no es tu inteligencia ni tu capacidad. Es que no
                  tienes una estructura diseñada para ayudarte a invertir según
                  tu realidad minera, proteger tu capacidad crediticia y
                  construir patrimonio de forma predecible.
                </p>
              </div>
              <ul className="bg-white border border-slate-100 rounded-2xl p-5 md:p-7 space-y-3">
                {NO_TIENES_TIEMPO.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-[#4A463E] text-[14.5px] md:text-[15px]"
                  >
                    <span className="material-symbols-outlined text-[#BA1A1A] text-[18px] mt-0.5 shrink-0">
                      close
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </FadeIn>

        {/* ══ POR QUÉ UN PROFESIONAL MINERO NECESITA ASESORÍA DISTINTA ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                Por qué no sirve la asesoría genérica
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                A un minero no se le puede asesorar como a un cliente genérico
              </h2>
              <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] leading-relaxed mt-4">
                Hay que entender cómo está compuesta su renta, en qué etapa de
                su carrera está, qué carga financiera tiene y cómo puede
                cambiar su realidad profesional en los próximos años.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {POR_QUE_MINERO.map((p) => (
                <div
                  key={p.title}
                  className="bg-white border border-slate-100 rounded-2xl p-5 md:p-6 hover:border-[#B67A2D] hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5E8D0] grid place-items-center mb-4">
                    <span
                      className="material-symbols-outlined text-[#B67A2D] text-[22px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {p.icon}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[16px] md:text-[17px] text-[#2B2B2B] mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="font-body text-[13.5px] md:text-[14.5px] text-[#4A463E] leading-relaxed">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* ══ LOS 3 PILARES ══ */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-12 md:py-20">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                  El sistema en 3 pilares
                </p>
                <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em] mb-4">
                  Trabajamos con una lógica distinta al mercado tradicional
                </h2>
                <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] leading-relaxed">
                  No nos quedamos en la recomendación: implementamos.
                </p>
              </div>

              <div className="space-y-6 md:space-y-8">
                {PILARES.map((p) => (
                  <article
                    key={p.step}
                    className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10 grid md:grid-cols-[180px_1fr] gap-6 md:gap-10 items-start"
                  >
                    <div>
                      <div className="font-heading font-extrabold text-[64px] md:text-[88px] text-[#B67A2D]/20 leading-none mb-2">
                        {p.step}
                      </div>
                      <span className="inline-block bg-[#F5E8D0] text-[#8A5A1F] font-heading font-bold text-[11px] tracking-[2px] uppercase px-3 py-1 rounded-full">
                        {p.name}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[20px] md:text-[26px] text-[#2B2B2B] leading-tight tracking-[-0.01em] mb-4">
                        {p.title}
                      </h3>
                      <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] leading-relaxed mb-5">
                        {p.body}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {p.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-[#4A463E] text-[14px] md:text-[15px] leading-snug"
                          >
                            <span className="material-symbols-outlined text-[#B67A2D] text-[18px] mt-0.5 shrink-0">
                              check_circle
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ══ DIFERENCIACIÓN ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                Esto importa
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                No es curso. No es broker. Es trabajo aplicado.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8">
                <p className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#BA1A1A] mb-5">
                  Esto NO es
                </p>
                <ul className="space-y-3">
                  {DIFERENCIA_NO.map((n) => (
                    <li
                      key={n}
                      className="flex items-start gap-3 text-[#4A463E] text-[15px] leading-snug"
                    >
                      <span className="material-symbols-outlined text-[#BA1A1A] text-[20px] mt-0.5 shrink-0">
                        close
                      </span>
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#F5E8D0] border border-[#E8C28A]/50 rounded-2xl p-6 md:p-8">
                <p className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#8A5A1F] mb-5">
                  Esto SÍ es
                </p>
                <ul className="space-y-3">
                  {DIFERENCIA_SI.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-3 text-[#2B2B2B] text-[15px] leading-snug font-medium"
                    >
                      <span
                        className="material-symbols-outlined text-[#B67A2D] text-[20px] mt-0.5 shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ══ CASOS REALES ══ */}
        <FadeIn>
          <section className="bg-[#2B2B2B] py-12 md:py-20">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#E8C28A] mb-3">
                  Casos reales
                </p>
                <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-white leading-tight tracking-[-0.01em] mb-4">
                  No fue suerte. Fue estructura aplicada correctamente.
                </h2>
                <p className="font-body text-[15px] md:text-[17px] text-white/70 leading-relaxed">
                  Tres mineros, tres etapas, tres estrategias distintas. El
                  mismo sistema.
                </p>
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
                        <p className="font-heading font-bold text-[18px] text-white leading-tight">
                          {c.nombre}
                        </p>
                        <p className="font-body text-[13px] text-[#E8C28A]/90 leading-tight mt-0.5">
                          {c.etapa}
                        </p>
                      </div>
                    </div>
                    <p className="font-body text-[14.5px] text-white/80 leading-relaxed mb-6">
                      {c.hecho}
                    </p>
                    <div className="pt-5 border-t border-white/10">
                      <p className="font-heading font-extrabold text-[28px] md:text-[32px] text-[#B67A2D] leading-none">
                        {c.metric}
                      </p>
                      <p className="font-body text-[12px] text-white/60 mt-1 uppercase tracking-[1px]">
                        {c.metricLabel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ══ DAVID CAMPOS ══ */}
        <FadeIn>
          <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-10 grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 items-center">
              <div className="aspect-square bg-gradient-to-br from-[#F5E8D0] to-[#E8C28A]/30 rounded-2xl grid place-items-center relative overflow-hidden">
                <span
                  className="material-symbols-outlined text-[#B67A2D] text-[120px] md:text-[160px] opacity-30"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  account_circle
                </span>
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3">
                  <p className="font-heading font-bold text-[13px] text-[#2B2B2B]">
                    David Campos
                  </p>
                  <p className="font-body text-[11px] text-[#6E6E6E] leading-tight mt-0.5">
                    Fundador · Centro de Diagnóstico y Estrategia Patrimonial
                  </p>
                </div>
              </div>
              <div>
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                  Quién está detrás
                </p>
                <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[32px] text-[#2B2B2B] leading-tight tracking-[-0.01em] mb-4">
                  Soy David Campos
                </h2>
                <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] leading-relaxed mb-4">
                  Fundador del Centro de Diagnóstico y Estrategia Patrimonial
                  para Mineros. Durante los últimos años hemos trabajado con
                  profesionales de la minería en distintas etapas de su carrera
                  para ayudarlos a invertir con una lógica completamente distinta
                  a la del mercado tradicional.
                </p>
                <p className="font-body text-[15px] md:text-[17px] text-[#2B2B2B] font-semibold leading-relaxed">
                  Lo que lees aquí no es teoría. Es lo que implementamos todos
                  los días con casos reales.
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ══ GARANTÍAS ══ */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-12 md:py-20">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                  Lógica de riesgo
                </p>
                <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                  Para que no se sienta como otro salto al vacío
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                {GARANTIAS.map((g) => (
                  <div
                    key={g.title}
                    className="bg-white border-2 border-[#B67A2D]/20 rounded-2xl p-6 md:p-7 relative"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#B67A2D] grid place-items-center mb-5">
                      <span
                        className="material-symbols-outlined text-white text-[24px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {g.icon}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-[18px] md:text-[20px] text-[#2B2B2B] mb-3 leading-snug">
                      {g.title}
                    </h3>
                    <p className="font-body text-[14px] md:text-[15px] text-[#4A463E] leading-relaxed">
                      {g.body}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:mt-10 bg-[#2B2B2B] text-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
                <div className="w-12 h-12 rounded-xl bg-[#B67A2D]/20 grid place-items-center shrink-0">
                  <span
                    className="material-symbols-outlined text-[#E8C28A] text-[24px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    local_offer
                  </span>
                </div>
                <div>
                  <p className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#E8C28A] mb-1">
                    Beneficio de reunión
                  </p>
                  <p className="font-body text-[15px] md:text-[17px] leading-relaxed">
                    Si calificas y decides avanzar con el método{" "}
                    <strong className="text-white">
                      dentro de la reunión estratégica
                    </strong>
                    , el programa reduce su valor en un{" "}
                    <strong className="text-[#E8C28A]">35%</strong>.
                  </p>
                </div>
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
                Agenda tu conversación estratégica
              </p>
              <h2 className="font-heading font-bold text-[22px] sm:text-[32px] md:text-[44px] text-white leading-tight tracking-[-0.01em] mb-5 max-w-3xl mx-auto">
                No es llamada de presión.{" "}
                <span className="text-[#B67A2D]">
                  No es para venderte un departamento.
                </span>
              </h2>
              <p className="font-body text-[15px] md:text-[17px] text-white/75 max-w-2xl mx-auto mb-8 leading-relaxed">
                Es una reunión para entender dónde estás, qué quieres lograr y
                si realmente podemos ayudarte a construir una estrategia
                patrimonial coherente con tu realidad. Si no somos la solución
                correcta para ti, te lo decimos con total honestidad.
              </p>
              <Link
                href={LEAD_FORM_URL}
                className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-8 py-4 rounded-xl font-heading font-bold text-[14px] md:text-[15px] hover:bg-[#9A6624] transition-colors shadow-lg shadow-[#B67A2D]/30"
              >
                Agendar conversación estratégica
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </Link>
              <p className="font-body text-[12px] text-white/50 mt-5">
                5 cupos abiertos · Solo para mineros con capacidad crediticia
              </p>
            </div>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
