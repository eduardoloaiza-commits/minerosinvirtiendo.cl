import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Políticas de Privacidad",
  description: "Políticas de privacidad y tratamiento de datos personales de Mineros Invirtiendo.",
  robots: { index: false, follow: false },
};

export default function PoliticasPrivacidadPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-[88px] lg:pt-[104px] py-12 md:py-20 px-6">
        <div className="max-w-[760px] mx-auto">
          <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-4">
            Legal
          </p>
          <h1 className="font-heading font-extrabold text-[#3D3D3D] text-[36px] mb-8">
            Políticas de Privacidad
          </h1>

          <div className="prose prose-slate max-w-none text-[#666666] text-[15px] leading-relaxed space-y-6">
            <p>
              En Mineros Invirtiendo (<strong>minerosinvirtiendo.cl</strong>) nos comprometemos a proteger tu privacidad y el tratamiento de tus datos personales, de acuerdo con la Ley N.° 19.628 sobre Protección de la Vida Privada de Chile.
            </p>

            <h2 className="font-heading font-bold text-[20px] text-[#3D3D3D] mt-8">
              Datos que recopilamos
            </h2>
            <p>
              Cuando te contactas con nosotros a través de WhatsApp o formularios del sitio, podemos recopilar tu nombre, número de teléfono y correo electrónico. Esta información es utilizada exclusivamente para responder tus consultas y brindarte asesoría.
            </p>

            <h2 className="font-heading font-bold text-[20px] text-[#3D3D3D] mt-8">
              Uso de los datos
            </h2>
            <p>
              Los datos personales recopilados son utilizados para: (1) responder consultas sobre nuestros servicios, (2) agendar reuniones de asesoría, (3) enviar información relevante sobre inversión inmobiliaria cuando el usuario lo solicite explícitamente.
            </p>

            <h2 className="font-heading font-bold text-[20px] text-[#3D3D3D] mt-8">
              Cookies y tecnologías de seguimiento
            </h2>
            <p>
              Este sitio puede utilizar cookies de análisis (Google Analytics) y el Facebook Pixel (ID: 435217645420615) para medir el rendimiento del sitio y mejorar la experiencia del usuario. Puedes deshabilitar estas tecnologías desde la configuración de tu navegador.
            </p>

            <h2 className="font-heading font-bold text-[20px] text-[#3D3D3D] mt-8">
              Tus derechos
            </h2>
            <p>
              Tienes derecho a acceder, rectificar, cancelar y oponerte al tratamiento de tus datos personales. Para ejercer estos derechos, contáctanos directamente por WhatsApp.
            </p>

            <p className="text-[#999999] text-[13px] mt-10">
              Última actualización: Abril 2026
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
