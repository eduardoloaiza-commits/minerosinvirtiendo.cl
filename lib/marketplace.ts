/**
 * Formatos del Marketplace de Inversiones.
 * Cada formato es un eje con el que el visitante autodeclara su intención de
 * compra antes de aterrizar en el diagnóstico. La landing /marketplace/[formato]
 * usa esta data y el slug viaja como `?tipo=` al formulario de diagnóstico
 * para que el WhatsApp al equipo llegue ya seteado.
 */

export type FormatoSlug =
  | "renta-corta"
  | "sector-oriente"
  | "inversiones-clasicas"
  | "semi-nuevos";

export type FormatoStep = {
  n: string;
  title: string;
  body: string;
};

export type Formato = {
  slug: FormatoSlug;
  label: string;
  shortDescription: string;
  icon: string;
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
  };
  description: string;
  paraQuien: string[];
  comoFunciona: [FormatoStep, FormatoStep, FormatoStep];
};

export const FORMATOS: Formato[] = [
  {
    slug: "renta-corta",
    label: "Renta Corta",
    shortDescription:
      "Departamentos que se arriendan por Airbnb en distintos sectores de Santiago o Chile. Generan una renta más alta, pero con mayor rotación de arrendatarios. Tenemos los partner perfectos para este modelo.",
    icon: "calendar_month",
    hero: {
      eyebrow: "Formato · Renta corta",
      headline: "Departamentos que rentan como hotel, no como arriendo.",
      sub: "Airbnb en distintos sectores de Santiago o Chile. Renta más alta por noche, mayor rotación de arrendatarios y operación profesional a través de los partners adecuados.",
    },
    description:
      "Departamentos que se arriendan por Airbnb en distintos sectores de Santiago o Chile. Generan una renta más alta, pero con mayor rotación de arrendatarios. Tenemos los partner perfectos para este modelo, que se hacen cargo de la operación completa: limpieza, check-in, plataformas y reportes mensuales.",
    paraQuien: [
      "Buscas mayor renta mensual aunque eso implique más rotación de huéspedes.",
      "Te gustaría tener una propiedad que también puedas usar puntualmente tú o tu familia.",
      "Tienes capacidad de delegar la operación (limpieza, check-in, plataformas) a un equipo profesional.",
    ],
    comoFunciona: [
      {
        n: "01",
        title: "Validamos zona y demanda real",
        body: "Revisamos ocupación promedio histórica, tarifa por noche y temporada baja antes de mostrarte cualquier propiedad.",
      },
      {
        n: "02",
        title: "Estructuramos crédito y operación",
        body: "Crédito hipotecario calzado con flujos esperados de renta corta, más el operador que se hace cargo del Airbnb.",
      },
      {
        n: "03",
        title: "Te entregamos la propiedad operando",
        body: "Equipada, en plataformas y con dashboard mensual de ocupación, ingresos y gastos.",
      },
    ],
  },
  {
    slug: "sector-oriente",
    label: "Sector Oriente",
    shortDescription:
      "Inversión premium en Las Condes y Providencia. Plusvalía protegida y arrendatario de alta calidad. Ideal cuando el objetivo es preservar patrimonio.",
    icon: "location_city",
    hero: {
      eyebrow: "Formato · Sector Oriente",
      headline: "Inversión premium en el sector oriente de Santiago.",
      sub: "Las Condes y Providencia. Menor renta porcentual, pero plusvalía protegida y arrendatario de alta calidad.",
    },
    description:
      "Las Condes y Providencia son el segmento más estable del mercado inmobiliario chileno. La renta porcentual es menor que en otros sectores, pero la plusvalía a 10 años es históricamente más alta y el riesgo de impago del arrendatario es bajo. Es el formato natural cuando lo que buscas es preservar y hacer crecer patrimonio, no maximizar flujo mensual.",
    paraQuien: [
      "Tu objetivo principal es preservar patrimonio, no maximizar renta mensual.",
      "Valoras tener un activo que tu familia entiende y puede administrar el día de mañana.",
      "Buscas plusvalía estable y arrendatario de bajo riesgo.",
    ],
    comoFunciona: [
      {
        n: "01",
        title: "Definimos comuna y tipo de edificio",
        body: "Cada comuna del oriente tiene una lógica distinta. Te mostramos cuál calza mejor con tu plan a 10 años.",
      },
      {
        n: "02",
        title: "Proyectamos plusvalía y flujo",
        body: "Modelo de retorno realista: dividendo, gastos comunes, contribuciones, plusvalía esperada y escenario conservador.",
      },
      {
        n: "03",
        title: "Compra, arriendo y administración",
        body: "Acompañamos firma, equipamiento mínimo y selección de arrendatario; opcionalmente administramos el contrato.",
      },
    ],
  },
  {
    slug: "inversiones-clasicas",
    label: "Inversiones Clásicas",
    shortDescription:
      "Departamentos en sectores emergentes o consolidados como Santiago Centro, Ñuñoa, La Florida, etc. Foco en renta mensual: bajo riesgo y retornos predecibles. Sujetos a subsidio a la tasa y beneficios de las inmobiliarias (sin pie, arriendos asegurados).",
    icon: "apartment",
    hero: {
      eyebrow: "Formato · Inversiones clásicas",
      headline: "El formato base. Comprar bien, arrendar bien, dormir tranquilo.",
      sub: "Departamentos en sectores emergentes o consolidados como Santiago Centro, Ñuñoa, La Florida. Foco en renta mensual, bajo riesgo y retornos predecibles.",
    },
    description:
      "Departamentos en sectores emergentes o consolidados, como Santiago Centro, Ñuñoa, La Florida, etc. El principal foco es la renta mensual: bajo riesgo, retornos predecibles. Son sujetos de subsidio a la tasa y de múltiples beneficios entregados por las inmobiliarias, como comprar sin pie o arriendos asegurados.",
    paraQuien: [
      "Es tu primera inversión y quieres hacer las cosas bien desde el principio.",
      "Buscas un activo de bajo riesgo que se administre con poco esfuerzo.",
      "Te interesa un retorno predecible más que un retorno máximo.",
    ],
    comoFunciona: [
      {
        n: "01",
        title: "Filtramos zonas emergentes y consolidadas",
        body: "Santiago Centro, Ñuñoa, La Florida y otros sectores con demanda de arriendo sostenida y proyección de plusvalía.",
      },
      {
        n: "02",
        title: "Aprovechamos subsidio a la tasa y beneficios inmobiliarios",
        body: "Estructuramos la compra usando subsidio a la tasa, comprar sin pie y arriendos asegurados cuando aplica. Tu desembolso inicial es el menor posible.",
      },
      {
        n: "03",
        title: "Te entregamos la propiedad arrendada",
        body: "No firmamos y desaparecemos: nos encargamos de selección del arrendatario y entrega del contrato.",
      },
    ],
  },
  {
    slug: "semi-nuevos",
    label: "Semi Nuevos",
    shortDescription:
      "Departamentos remodelados en diferentes sectores de Santiago, con precios más bajos que uno nuevo. Apuntan a un mejor cap rate y tienen facilidades para pagar el pie.",
    icon: "auto_fix_high",
    hero: {
      eyebrow: "Formato · Semi nuevos",
      headline: "Departamentos remodelados con mejor cap rate y facilidades para el pie.",
      sub: "Departamentos remodelados en diferentes sectores de Santiago, con precios más bajos que uno nuevo. Apuntan a un mejor cap rate y tienen facilidades para pagar el pie.",
    },
    description:
      "Departamentos remodelados en diferentes sectores de Santiago, con precios más bajos que uno nuevo. Apuntan a un mejor cap rate y tienen facilidades para pagar el pie. Son propiedades ya existentes, con comunidad funcionando e historial de arriendo en el edificio.",
    paraQuien: [
      "Buscas un mejor cap rate que el que entrega un departamento nuevo equivalente.",
      "Quieres facilidades para pagar el pie sin descapitalizarte.",
      "Prefieres entrega inmediata sin riesgo de obra ni espera de 18 a 24 meses.",
    ],
    comoFunciona: [
      {
        n: "01",
        title: "Buscamos descuento real sobre el nuevo",
        body: "Solo entran propiedades remodeladas con precio menor que el equivalente nuevo en el mismo sector.",
      },
      {
        n: "02",
        title: "Estructuramos facilidades para el pie",
        body: "Negociamos pie diferido o cuotas con el vendedor cuando aplica, para que tu desembolso inicial sea manejable.",
      },
      {
        n: "03",
        title: "Compras y arriendas en semanas, no meses",
        body: "Entrega inmediata, sin promesas largas. Aceleramos firma, escrituración y publicación para arriendo.",
      },
    ],
  },
];

export const FORMATOS_BY_SLUG: Record<string, Formato> = Object.fromEntries(
  FORMATOS.map((f) => [f.slug, f]),
);

export const FORMATO_SLUGS = FORMATOS.map((f) => f.slug);

/** Devuelve el label legible de un slug, o `undefined` si el slug no existe. */
export function formatoLabel(slug: string | undefined): string | undefined {
  if (!slug) return undefined;
  return FORMATOS_BY_SLUG[slug]?.label;
}
