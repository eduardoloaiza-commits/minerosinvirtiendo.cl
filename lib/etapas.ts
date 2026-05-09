/**
 * Contenido por etapa de la carrera médica.
 * Cada landing /etapa/[slug] se arma con esta data, replicando la estructura
 * de las infografías entregadas por el cliente en documentos/modificaciones.docx.
 */

export type EtapaStep = {
  icon: string;
  title: string;
  body: string;
  bullets: string[];
};

export type Etapa = {
  slug: string;
  number: number;
  label: string;
  shortLabel: string;
  tagline: string;
  heroIntro: string;
  steps: [EtapaStep, EtapaStep, EtapaStep, EtapaStep];
  nadieDice: {
    titulo: string;
    punchline: string;
  };
  preguntaCorrecta: string;
  objetivo: string;
  participacion: string[];
};

/** Headline y bajada compartidos por las 4 landings de etapa. */
export const ETAPAS_HERO = {
  eyebrow: "Guía por etapa profesional",
  title: "Inversión inmobiliaria paso a paso para mineros",
  intro:
    "La inversión inmobiliaria para mineros no debería partir eligiendo un departamento. Debería partir entendiendo en qué etapa estás, qué errores no puedes cometer y cuál es el siguiente paso correcto para construir patrimonio sin desordenarte.",
  nota: "Esta guía resume el camino según tu etapa médica. No busca resolver tu caso completo, sino mostrarte por qué una misma oportunidad puede ser buena para un médico y mala para otro.",
} as const;

/** Frase fija del bloque "Nuestro enfoque". */
export const ETAPAS_ENFOQUE = {
  titulo: "Nuestro enfoque",
  body: "No te vendemos propiedades. Creamos estrategia, ordenamos la ejecución y te acompañamos en cada decisión crítica.",
} as const;

/** Fases transversales mostradas al pie de cada landing. */
export const ETAPAS_FASES = [
  "Diagnóstico",
  "Estrategia",
  "Implementación",
  "Acompañamiento",
] as const;

export const ETAPAS: Etapa[] = [
  {
    slug: "medico-general",
    number: 1,
    label: "Médico General",
    shortLabel: "Med. General",
    tagline:
      "Estás en una etapa donde todavía no conviene moverte por entusiasmo, sino por estructura.",
    heroIntro:
      "Las decisiones que tomes hoy definirán tu capacidad de crecer mañana. Muchos mineros generales creen que basta con tener ingresos y acceso a crédito para partir: ese es justamente el error que queremos evitar desde el principio.",
    steps: [
      {
        icon: "analytics",
        title: "Entender tu punto de partida",
        body: "Antes de pensar en una propiedad, necesitas saber si tu situación actual realmente soporta una estrategia de inversión.",
        bullets: [
          "Ingresos y estabilidad",
          "Capacidad de ahorro real",
          "Carga financiera actual",
          "Proyección profesional",
        ],
      },
      {
        icon: "vpn_key",
        title: "No desperdiciar tus 2 primeras oportunidades",
        body: "En esta etapa, usar correctamente tus 2 beneficios tributarios (DFL2) puede marcar una diferencia importante.",
        bullets: [
          "Beneficios que pocos usan bien",
          "Timing y estrategia importan",
          "Error hoy = oportunidad perdida",
        ],
      },
      {
        icon: "apartment",
        title: "Elegir bien el tipo de activo",
        body: "No todas las propiedades sirven para empezar. Una mala elección puede consumir capacidad crediticia y frenarte por años.",
        bullets: [
          "Ubicación y demanda real",
          "Tipo de propiedad adecuado",
          "Rentabilidad vs. flujo",
          "Liquidez futura",
        ],
      },
      {
        icon: "trending_up",
        title: "Ordenar la ejecución",
        body: "Aquí no basta con comprar. Hay que estructurar bien el crédito, el flujo y la lógica de crecimiento.",
        bullets: [
          "Estructura de financiamiento",
          "Plazo y capacidad de sostener",
          "Plan de crecimiento patrimonial",
          "Protección ante imprevistos",
        ],
      },
    ],
    nadieDice: {
      titulo: "Lo que casi nadie te dice",
      punchline:
        "En médico general, el problema no suele ser partir tarde. El problema suele ser partir mal.",
    },
    preguntaCorrecta:
      "¿Tu etapa actual realmente soporta una estrategia de inversión inteligente o sólo una compra aislada?",
    objetivo:
      "Sentar las bases correctas para construir patrimonio sin descapitalizarte ni comprometer tu futuro profesional.",
    participacion: [
      "Entrega de antecedentes",
      "Validación de estrategia",
      "Firma y decisiones críticas",
      "Recepción y arriendo",
    ],
  },
  {
    slug: "medico-general-zona",
    number: 2,
    label: "Médico General de Zona (EDF / MGZ)",
    shortLabel: "MGZ · EDF",
    tagline:
      "Estás en una etapa de altos ingresos y alta capacidad de ahorro. Eso hay que aprovecharlo con estructura, no con impulsos.",
    heroIntro:
      "Como MGZ estás destinado a lugares extremos, lo que puede generarte muy buena renta y una gran capacidad de ahorro. Esa ventaja se transforma en patrimonio solo si las primeras decisiones se toman con un plan. De lo contrario, consumes la mejor oportunidad de tu carrera en un activo que no rinde.",
    steps: [
      {
        icon: "analytics",
        title: "Entender tu punto de partida",
        body: "Antes de pensar en una propiedad, necesitas saber si tu situación actual realmente soporta una estrategia de inversión.",
        bullets: [
          "Ingresos y estabilidad",
          "Capacidad de ahorro real",
          "Carga financiera actual",
          "Proyección profesional",
        ],
      },
      {
        icon: "vpn_key",
        title: "No desperdiciar tus 2 primeras oportunidades",
        body: "En esta etapa, usar correctamente tus 2 DFL2 puede marcar una diferencia importante. Muchos mineros se dejan llevar por ofertas mal calzadas con su momento financiero.",
        bullets: [
          "Beneficios que pocos usan bien",
          "Timing y estrategia importan",
          "Error hoy = oportunidad perdida",
        ],
      },
      {
        icon: "apartment",
        title: "Elegir bien el tipo de activo",
        body: "No todas las propiedades sirven para EDF. Una mala elección puede consumir tu capacidad crediticia y frenarte por años.",
        bullets: [
          "Ubicación y demanda real",
          "Tipo de propiedad adecuado",
          "Rentabilidad vs. flujo",
          "Liquidez futura",
        ],
      },
      {
        icon: "trending_up",
        title: "Ordenar la ejecución",
        body: "Aquí no basta con comprar. Hay que estructurar bien el crédito, el flujo y la lógica de crecimiento.",
        bullets: [
          "Estructura de financiamiento",
          "Plazo y capacidad de sostener",
          "Plan de crecimiento patrimonial",
          "Protección ante imprevistos",
        ],
      },
    ],
    nadieDice: {
      titulo: "Lo que casi nadie te dice",
      punchline:
        "En EDF, el problema no suele ser partir tarde. El problema suele ser partir mal.",
    },
    preguntaCorrecta:
      "¿Tu etapa actual realmente soporta una estrategia de inversión inteligente o sólo una compra aislada?",
    objetivo:
      "Convertir tu alta capacidad de ahorro EDF en una base patrimonial sólida, no en un activo mal elegido que te acompañará por décadas.",
    participacion: [
      "Entrega de antecedentes",
      "Validación de estrategia",
      "Firma y decisiones críticas",
      "Recepción y arriendo",
    ],
  },
  {
    slug: "medico-becado",
    number: 3,
    label: "Médico Becado",
    shortLabel: "Becado",
    tagline:
      "Tu mayor riesgo no siempre está en tu ingreso actual, sino en las decisiones que tomas justo antes de cambiar de etapa.",
    heroIntro:
      "Muchos becados entran a una inversión mirando sólo el acceso al crédito. Pocos evalúan si esa estructura será sostenible mientras mantienen la carga y el ritmo de la residencia, y menos aún piensan en cómo esa decisión condiciona la vida financiera post-beca.",
    steps: [
      {
        icon: "visibility",
        title: "Mirar más allá de la beca",
        body: "Invertir durante la beca no es 'comprar si alcanzas'. Requiere entender qué puedes hacer hoy sin comprometer lo que construirás después.",
        bullets: [
          "Visión de mediano y largo plazo",
          "Impacto en tu capacidad futura",
          "Flexibilidad financiera futura",
        ],
      },
      {
        icon: "shield",
        title: "Proteger tus 2 DFL2",
        body: "Los DFL2 son una ventaja limitada. Gastarlos mal hoy es perder en silencio el mejor acelerador patrimonial de tu carrera.",
        bullets: [
          "Orden y timing para usarlos",
          "Activos que maximicen el beneficio",
          "Estrategia antes que urgencia",
        ],
      },
      {
        icon: "balance",
        title: "Evitar una decisión que te estrese financieramente",
        body: "Muchos becados evalúan una inversión solo por el acceso al crédito. Muy pocos revisan si su flujo real resiste la carga durante toda la beca.",
        bullets: [
          "Ingresos reales vs. carga crediticia",
          "Evaluar carga actual y futura",
          "Tranquilidad financiera como variable",
        ],
      },
      {
        icon: "switch_access_shortcut",
        title: "Preparar la transición",
        body: "La inversión correcta hoy no debería dejarte parado, sino posicionado para lo que viene. Este paso define si sales de la beca con una base patrimonial o con un lastre.",
        bullets: [
          "Estrategia post-beca",
          "Alinear inversión con objetivos",
          "Construir base, no techo",
        ],
      },
    ],
    nadieDice: {
      titulo: "Lo que casi nadie te dice",
      punchline:
        "Hay mineros becados que deberían invertir y otros que deberían esperar o hacerlo de otra forma. El problema es que desde afuera se ven iguales.",
    },
    preguntaCorrecta:
      "¿Estás tomando una buena decisión de inversión o sólo una decisión que parece posible hoy?",
    objetivo:
      "Tomar decisiones inteligentes hoy para no limitar tu libertad de movimiento, tu tranquilidad financiera ni tu crecimiento futuro.",
    participacion: [
      "Entrega de antecedentes",
      "Validación de estrategia",
      "Firma y decisiones críticas",
      "Recepción y arriendo",
    ],
  },
  {
    slug: "medico-especialista",
    number: 4,
    label: "Médico Especialista",
    shortLabel: "Especialista",
    tagline:
      "Llegar a una etapa de mayores ingresos no garantiza una buena estrategia patrimonial.",
    heroIntro:
      "Muchos especialistas ganan bien, pero invierten mal, pagan de más y se ordenan tarde. La estructura correcta puede multiplicar tu patrimonio, no sólo tus ingresos: eso exige pensar la inversión dentro de un plan, no como una compra aislada.",
    steps: [
      {
        icon: "architecture",
        title: "Revisar cómo estás estructurado",
        body: "Antes de pensar en crecer, necesitas entender si tu estructura actual te permite hacerlo. Una mala base cuesta flujo, eficiencia tributaria y capacidad de expansión.",
        bullets: [
          "Estructura de ingresos",
          "Gastos deducibles y planificación",
          "Eficiencia tributaria",
          "Capacidad de expansión",
        ],
      },
      {
        icon: "vpn_key",
        title: "Ocupar correctamente tus 2 DFL2",
        body: "Los DFL2 no pierden valor porque ganes más. Siguen siendo parte del punto de partida, pero aquí deben incorporarse dentro de una estrategia más amplia, no como un movimiento aislado.",
        bullets: [
          "Usarlos como base, no como fin",
          "Integrarlos a una estrategia mayor",
          "Evaluar cuál es la 2ª propiedad",
          "Diversificar con propósito",
        ],
      },
      {
        icon: "trending_up",
        title: "Definir cuándo escalar",
        body: "El especialista no sólo debe pensar en comprar. Debe pensar cuándo comprar, con qué estructura y bajo qué lógica. Ese es el punto donde se separa una inversión puntual de una estrategia patrimonial.",
        bullets: [
          "Timing estratégico",
          "Flujo y capacidad de endeudamiento",
          "Análisis de retorno y riesgo",
          "Decisiones con visión de conjunto",
        ],
      },
      {
        icon: "stacked_bar_chart",
        title: "Evitar el desorden patrimonial",
        body: "Muchos especialistas ya tienen ingresos, capacidad e intención de invertir, pero avanzan sin método. Y cuando eso ocurre, aparecen errores que no siempre se ven al principio.",
        bullets: [
          "Falta de planificación global",
          "Endeudamiento sin estructura",
          "Activos que no se complementan",
          "Decisiones con visión de conjunto",
        ],
      },
    ],
    nadieDice: {
      titulo: "Lo que casi nadie te dice",
      punchline:
        "Podrías invertir a través de tu sociedad médica con una buena estructuración. La estructura correcta puede multiplicar tu patrimonio, no sólo tus ingresos.",
    },
    preguntaCorrecta:
      "¿Estás construyendo patrimonio o sólo acumulando decisiones desconectadas?",
    objetivo:
      "Construir una estrategia patrimonial sólida, escalable y eficiente, que aproveche tu capacidad actual sin sacrificar tu libertad futura.",
    participacion: [
      "Entrega de antecedentes",
      "Validación de estrategia",
      "Firma y decisiones críticas",
      "Recepción y arriendo",
    ],
  },
];

export const ETAPAS_BY_SLUG: Record<string, Etapa> = Object.fromEntries(
  ETAPAS.map((e) => [e.slug, e]),
);

export const ETAPA_SLUGS = ETAPAS.map((e) => e.slug);
