import { SITE_URL } from "@/lib/constants";

/**
 * JSON-LD global en el <head>. Expone:
 *   - FinancialService: identidad de la empresa (rich results en Google)
 *   - FAQPage: las preguntas frecuentes (candidato a Snippet destacado)
 *   - BreadcrumbList con las secciones principales
 *
 * Estas schemas se emiten en el <head> del RootLayout, por lo que aplican a
 * todo el sitio. Si una página específica necesita un FAQPage distinto,
 * puede sobreescribirlo emitiendo su propio bloque JSON-LD.
 */

const FAQ_GLOBAL = [
  {
    q: "¿Cuánto cuesta la asesoría?",
    a: "La asesoría es gratuita para el médico. Cobramos un fee fijo a las inmobiliarias por llevar leads calificados. Tú nunca pagas comisiones.",
  },
  {
    q: "¿Cuánto capital necesito para empezar a invertir en departamentos?",
    a: "El pie de un departamento tipo es alrededor de 20% del valor (ej: $18M para un depto de $90M). Con tu renta médica puedes acceder a crédito hipotecario al 80% restante.",
  },
  {
    q: "¿Trabajan con mineros en regiones?",
    a: "Sí. Hacemos diagnósticos online y tenemos proyectos en Santiago (Ñuñoa, Las Condes, San Miguel), Valparaíso, Concepción y otras regiones con alta demanda de arriendo.",
  },
  {
    q: "¿Cuánto tiempo toma construir un patrimonio de $300M?",
    a: "Depende de tu capacidad de ahorro y del momento de tu carrera médica. Conversemos en una sesión gratuita y te entregamos un diagnóstico personalizado.",
  },
];

export default function SchemaOrg() {
  const financialService = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}#financial-service`,
    name: "Mineros Invirtiendo",
    alternateName: "MI",
    description:
      "Asesoría patrimonial e inversión inmobiliaria especializada para profesionales de la minería en Chile. 5 profesionales de la minería con +10 años en el mercado inmobiliario, sin comisiones al cliente.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    inLanguage: "es-CL",
    areaServed: {
      "@type": "Country",
      name: "Chile",
    },
    serviceType: [
      "Inversión inmobiliaria para mineros",
      "Gestión patrimonial",
      "Crédito hipotecario",
    ],
    knowsAbout: [
      "Inversión inmobiliaria",
      "Plusvalía inmobiliaria",
      "Crédito hipotecario UF",
      "Mercado inmobiliario chileno",
      "Gestión patrimonial médica",
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Cámara Chilena de Comercio",
        alternateName: "CCS",
        url: "https://www.ccs.cl/",
      },
      {
        "@type": "Organization",
        name: "ANSI, Asociación Nacional del Sector Inmobiliario",
        alternateName: "ANSI",
      },
    ],
    affiliation: {
      "@type": "Organization",
      name: "AMCI (Asociación de Mineros de la Clínica INDISA)",
      description: "Convenio exclusivo de asesoría patrimonial para los mineros de Clínica INDISA",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Profesionales de la Salud",
      geographicArea: { "@type": "Country", name: "Chile" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Mineros Invirtiendo",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Inversión en Departamentos de Alta Plusvalía",
            url: `${SITE_URL}/servicios/inversion-departamentos-alta-plusvalia`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Transfórmate en Inversionista",
            url: `${SITE_URL}/servicios/transformate-en-inversionista`,
          },
        },
      ],
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}#faq`,
    mainEntity: FAQ_GLOBAL.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Servicios",
        item: `${SITE_URL}/servicios/inversion-departamentos-alta-plusvalia`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "El Método",
        item: `${SITE_URL}/metodo`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Noticias",
        item: `${SITE_URL}/educacion-financiera-para-mineros`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
