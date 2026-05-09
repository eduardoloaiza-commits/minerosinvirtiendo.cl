import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";
import { LEAD_FORM_URL, STOCK } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Inversión Inmobiliaria para Mineros | Mineros Invirtiendo",
  description:
    "Diseñamos un portafolio inmobiliario estructurado para tu etapa profesional, tu capacidad crediticia y tu objetivo patrimonial. Sin convertir la inversión en un segundo trabajo.",
  alternates: {
    canonical: "/servicios/inversion-departamentos-alta-plusvalia",
  },
};

const CRITERIOS = [
  {
    icon: "fact_check",
    title: "Estudio de demanda real",
    body: "Solo proyectos donde podemos validar mercado de arriendo, vacancia histórica y crecimiento del barrio.",
  },
  {
    icon: "insights",
    title: "Retorno y flujo proyectado",
    body: "Cap rate, dividendo vs. arriendo, gastos operativos. Te entregamos los números antes de firmar.",
  },
  {
    icon: "verified",
    title: "Respaldo institucional",
    body: "Permiso de edificación, recepción final y boleta de garantía bancaria. Cero riesgo de inmobiliaria fantasma.",
  },
  {
    icon: "shield",
    title: "Estructura crediticia sólida",
    body: "Negociamos con varios bancos para que el crédito calce con tu flujo minero, no al revés.",
  },
];

const BLINDAJE = [
  {
    icon: "security",
    title: "Protección contra inflación",
    body: "Los bienes raíces históricamente superan el IPC en Chile, protegiendo el poder adquisitivo de tus honorarios mineros.",
  },
  {
    icon: "trending_up",
    title: "Apalancamiento inteligente",
    body: "Estructuramos créditos hipotecarios para maximizar tu ROE sin comprometer tu liquidez operativa.",
  },
  {
    icon: "family_restroom",
    title: "Legado generacional",
    body: "Activos tangibles y heredables, con procesos de sucesión simplificados frente a otros vehículos de inversión.",
  },
];

export default function InversionInmobiliariaPage() {
  return (
    <>
      <Header />
      <main className="pt-[68px] lg:pt-[84px]">
        {/* ── HERO split ── */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-10 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-4">
              Servicio · Inversión Inmobiliaria
            </p>
            <h1 className="font-heading font-bold text-[26px] sm:text-[34px] md:text-[44px] text-[#2B2B2B] leading-tight tracking-[-0.02em] mb-6">
              Invierte en departamentos con{" "}
              <span className="text-[#B67A2D]">rigor minero</span>.
            </h1>
            <p className="font-body text-[16px] md:text-[18px] text-[#4A463E] leading-relaxed mb-8">
              No te llenamos de proyectos. Diseñamos un portafolio coherente
              con tu etapa profesional, tu capacidad crediticia y tu objetivo
              patrimonial. Tú decides; nosotros ejecutamos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={LEAD_FORM_URL}
                className="inline-flex items-center gap-2 bg-[#B67A2D] text-white px-7 py-4 rounded-lg font-heading font-bold text-[14px] md:text-[15px] hover:bg-[#9A6624] transition-colors"
              >
                Agendar sesión gratuita
              </Link>
              <Link
                href="/metodo"
                className="inline-flex items-center gap-2 border border-[#B67A2D] text-[#B67A2D] px-7 py-4 rounded-lg font-heading font-bold text-[14px] md:text-[15px] hover:bg-[#F5E8D0] transition-colors"
              >
                Ver el método
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#E8C28A]/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={STOCK.heroBuilding}
                alt="Edificio residencial. Inversión inmobiliaria curada para mineros"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── CRITERIOS DE SELECCIÓN ── */}
        <FadeIn>
          <section className="bg-[#F9F9F9] py-12 md:py-20">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
                <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
                  Cómo seleccionamos
                </p>
                <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[36px] text-[#2B2B2B] leading-tight tracking-[-0.01em]">
                  No vendemos lanzamientos. Filtramos oportunidades.
                </h2>
                <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] leading-relaxed mt-4">
                  Cada proyecto que te presentamos pasó por estos cuatro
                  criterios. Si uno falla, no entra a la mesa.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                {CRITERIOS.map((c, i) => (
                  <div
                    key={c.title}
                    className="bg-white border border-slate-100 rounded-2xl p-6 hover:border-[#B67A2D] hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-lg bg-[#8A5A1F] text-white grid place-items-center font-heading font-extrabold text-[13px]">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <span
                        className="material-symbols-outlined text-[#B67A2D] text-[22px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {c.icon}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-[16px] md:text-[17px] text-[#2B2B2B] mb-2 leading-snug">
                      {c.title}
                    </h3>
                    <p className="font-body text-[13.5px] md:text-[14.5px] text-[#4A463E] leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ── BLINDAJE ── */}
        <FadeIn>
          <section className="bg-white py-12 md:py-20">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8">
              <div className="bg-[#F5E8D0] rounded-3xl p-7 md:p-14 relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                  <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#8A5A1F] mb-3">
                    Por qué inmobiliario
                  </p>
                  <h2 className="font-heading font-bold text-[22px] sm:text-[28px] md:text-[34px] text-[#2B2B2B] mb-8 leading-tight tracking-[-0.01em]">
                    Estrategia de blindaje patrimonial
                  </h2>
                  <div className="space-y-6">
                    {BLINDAJE.map((b) => (
                      <div key={b.title} className="flex gap-5">
                        <div className="h-11 w-11 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                          <span
                            className="material-symbols-outlined text-[#B67A2D]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            {b.icon}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-[16px] md:text-[17px] text-[#2B2B2B] mb-1">
                            {b.title}
                          </h4>
                          <p className="font-body text-[14px] md:text-[15px] text-[#4A463E] leading-relaxed">
                            {b.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ── CTA ── */}
        <FadeIn>
          <section className="py-12 md:py-20 max-w-4xl mx-auto text-center px-5 sm:px-6 lg:px-8">
            <h2 className="font-heading font-bold text-[24px] sm:text-[30px] md:text-[40px] text-[#2B2B2B] mb-5 leading-tight tracking-[-0.01em]">
              ¿Listo para diversificar con estructura?
            </h2>
            <p className="font-body text-[15px] md:text-[17px] text-[#4A463E] max-w-2xl mx-auto mb-10">
              Agenda una sesión estratégica privada para evaluar tu perfil y
              recibir las oportunidades curadas que calzan con tu caso.
            </p>
            <Link
              href={LEAD_FORM_URL}
              className="inline-flex items-center justify-center gap-2 bg-[#B67A2D] text-white px-8 py-4 rounded-lg font-heading font-bold text-[14px] md:text-[15px] hover:bg-[#9A6624] transition-colors"
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                event
              </span>
              Agendar sesión estratégica
            </Link>
          </section>
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
