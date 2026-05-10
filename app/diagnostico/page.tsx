import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Agenda tu diagnóstico financiero gratuito",
  description:
    "Completa tu perfil en 3 pasos y conversa directamente con nuestro equipo por WhatsApp. Sin compromiso.",
  robots: { index: false, follow: false },
};

const TRUST = [
  { icon: "🔒", text: "Datos confidenciales" },
  { icon: "✅", text: "Sin compromiso" },
  { icon: "⚡", text: "Respuesta en minutos" },
  { icon: "🆓", text: "100% gratuito" },
];

type SearchParams = Promise<{ tipo?: string | string[] }>;

export default async function DiagnosticoPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { tipo } = await searchParams;
  const tipoInicial = Array.isArray(tipo) ? tipo[0] : tipo;
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#F5F0E8] pt-[88px] lg:pt-[104px]">

        {/* ── Hero compacto ── */}
        <section
          className="py-12 md:py-14 px-5 sm:px-6 text-white text-center"
          style={{ background: "linear-gradient(135deg, #1a2630 0%, #3D3D3D 60%, #3D3D3D 100%)" }}
        >
          <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#D5953F] mb-3">
            Primer paso
          </p>
          <h1
            className="font-heading font-extrabold text-white mb-3"
            style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
          >
            Cuéntanos sobre ti.
            <br />
            <span className="text-[#B67A2D]">Personalizamos tu diagnóstico.</span>
          </h1>
          <p className="font-body text-white/70 text-[16px] max-w-[520px] mx-auto">
            Toma 2 minutos. Al terminar, el botón de WhatsApp se desbloquea con tu información pre-cargada para que el equipo pueda prepararse antes de hablar contigo.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {TRUST.map(t => (
              <span
                key={t.text}
                className="inline-flex items-center gap-1.5 bg-white/10 text-white/80 text-[12px] font-heading font-semibold px-3 py-1.5 rounded-full"
              >
                {t.icon} {t.text}
              </span>
            ))}
          </div>
        </section>

        {/* ── Formulario + sidebar ── */}
        <section className="max-w-[1080px] mx-auto px-5 sm:px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-10 items-start">

            {/* Form card */}
            <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 lg:p-10">
              <LeadForm
                source="diagnostico_form"
                tipoInicial={tipoInicial}
                intro={{
                  eyebrow: "Cuéntanos sobre ti",
                  title: "Personalizamos tu diagnóstico",
                }}
              />
            </div>

            {/* Sidebar de contexto */}
            <div className="flex flex-col gap-5">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <p className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#B67A2D] mb-3">
                  ¿Por qué este formulario?
                </p>
                <p className="text-[#555555] text-[14px] leading-relaxed mb-4">
                  Nos permite llegar a la conversación de WhatsApp con tu perfil ya preparado. Así en lugar de empezar desde cero, empezamos desde donde tú estás.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "El equipo revisa tu perfil antes de responder",
                    "La primera reunión es más productiva",
                    "Recibes recomendaciones personalizadas desde el primer mensaje",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2.5 text-[13px] text-[#555555]">
                      <span className="text-[#29C4A9] font-bold shrink-0 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#3D3D3D] rounded-2xl p-6 text-white">
                <p className="font-heading font-bold text-[11px] tracking-[3px] uppercase text-[#D5953F] mb-2">
                  El equipo
                </p>
                <p className="font-heading font-bold text-[16px] mb-2">
                  Un equipo de expertos, no de vendedores
                </p>
                <p className="text-white/60 text-[13px] leading-relaxed">
                  Equipo experto en estructurar inversiones inmobiliarias para profesionales mineros. Cero comisiones al cliente.
                </p>
              </div>

              <div className="bg-[#F5E8D0] rounded-2xl p-6 border border-[#B67A2D]/20">
                <p className="font-heading font-bold text-[13px] text-[#3D3D3D] mb-1">
                  Primera reunión
                </p>
                <p className="font-heading font-extrabold text-[28px] text-[#29C4A9]">
                  100% gratuita
                </p>
                <p className="text-[#555555] text-[13px] mt-1">
                  Sin costo. Sin compromiso. Sólo una conversación honesta sobre tu patrimonio.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
