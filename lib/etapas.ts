/**
 * Contenido por etapa dentro de la carrera minera.
 * Cada landing /etapa/[slug] se arma con esta data, con la misma estructura
 * que la versión médica original, ahora adaptada al mundo minero.
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
  title: "Inversión inmobiliaria paso a paso para profesionales mineros",
  intro:
    "La inversión inmobiliaria para mineros no debería partir eligiendo un departamento. Debería partir entendiendo en qué nivel estás dentro de la organización, qué errores no puedes cometer y cuál es el siguiente paso correcto para construir patrimonio sin desordenarte.",
  nota: "Esta guía resume el camino según tu rol y experiencia. No busca resolver tu caso completo, sino mostrarte por qué una misma oportunidad puede ser buena para un operador y mala para un supervisor — o al revés.",
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
    slug: "operacion",
    number: 1,
    label: "Personal de Operación",
    shortLabel: "Operación",
    tagline:
      "Estás en una etapa donde todavía no conviene moverte por entusiasmo, sino por estructura.",
    heroIntro:
      "Las decisiones que tomes hoy definirán tu capacidad de crecer mañana. Muchos operadores creen que basta con tener ingresos estables, bonos y acceso a crédito para partir: ese es justamente el error que queremos evitar desde el principio.",
    steps: [
      {
        icon: "analytics",
        title: "Entender tu punto de partida",
        body: "Antes de pensar en una propiedad, necesitas saber si tu situación actual realmente soporta una estrategia de inversión.",
        bullets: [
          "Sueldo base, bonos y estabilidad",
          "Capacidad de ahorro real",
          "Carga financiera actual",
          "Proyección dentro de la operación",
        ],
      },
      {
        icon: "vpn_key",
        title: "No desperdiciar tus 2 primeras oportunidades",
        body: "En esta etapa, usar correctamente tus 2 beneficios tributarios (DFL2) puede marcar una diferencia importante en tu vida patrimonial.",
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
          "Tipo de propiedad adecuado al sistema de turnos",
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
        "En personal de operación, el problema no suele ser partir tarde. El problema suele ser partir mal.",
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
    slug: "faena-extrema",
    number: 2,
    label: "Operador en Faena Extrema (Zona Norte / Altura)",
    shortLabel: "Faena Extrema",
    tagline:
      "Estás en una etapa de altos ingresos y alta capacidad de ahorro. Eso hay que aprovecharlo con estructura, no con impulsos.",
    heroIntro:
      "Cuando trabajas en faena extrema (gran minería del cobre, zona norte, altura geográfica) tu renta y tus bonos por zona pueden generarte una capacidad de ahorro fuera de lo común. Esa ventaja se transforma en patrimonio sólido sólo si las primeras decisiones se toman con un plan. De lo contrario, consumes la mejor oportunidad de tu carrera en un activo que no rinde.",
    steps: [
      {
        icon: "analytics",
        title: "Entender tu punto de partida",
        body: "Antes de pensar en una propiedad, necesitas saber si tu situación actual realmente soporta una estrategia de inversión escalable.",
        bullets: [
          "Sueldo + bono de zona + utilidades",
          "Capacidad de ahorro real",
          "Carga financiera actual",
          "Proyección de tu contrato y operación",
        ],
      },
      {
        icon: "vpn_key",
        title: "No desperdiciar tus 2 primeras oportunidades",
        body: "En esta etapa, usar correctamente tus 2 DFL2 puede marcar una diferencia importante. Muchos profesionales en faena se dejan llevar por ofertas mal calzadas con su momento financiero.",
        bullets: [
          "Beneficios que pocos usan bien",
          "Timing y estrategia importan",
          "Error hoy = oportunidad perdida",
        ],
      },
      {
        icon: "apartment",
        title: "Elegir bien el tipo de activo",
        body: "No todas las propiedades sirven para alguien con sistema 7x7 o 14x14. Una mala elección puede consumir tu capacidad crediticia y frenarte por años.",
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
        "En faena extrema, el problema no suele ser partir tarde. El problema suele ser partir mal — y dejar el bono de zona en un activo que no rinde.",
    },
    preguntaCorrecta:
      "¿Tu etapa actual realmente soporta una estrategia de inversión inteligente o sólo una compra aislada?",
    objetivo:
      "Convertir tu alta capacidad de ahorro de zona extrema en una base patrimonial sólida, no en un activo mal elegido que te acompañará por décadas.",
    participacion: [
      "Entrega de antecedentes",
      "Validación de estrategia",
      "Firma y decisiones críticas",
      "Recepción y arriendo",
    ],
  },
  {
    slug: "tecnico-formacion",
    number: 3,
    label: "Técnico en Formación / Mantenimiento Junior",
    shortLabel: "Técnico Junior",
    tagline:
      "Tu mayor riesgo no siempre está en tu ingreso actual, sino en las decisiones que tomas justo antes de cambiar de etapa.",
    heroIntro:
      "Muchos técnicos en formación entran a una inversión mirando sólo el acceso al crédito. Pocos evalúan si esa estructura será sostenible mientras se forman y certifican, y menos aún piensan en cómo esa decisión condiciona la vida financiera cuando suban a operador o supervisor.",
    steps: [
      {
        icon: "visibility",
        title: "Mirar más allá del primer contrato",
        body: "Invertir en formación no es 'comprar si alcanzas'. Requiere entender qué puedes hacer hoy sin comprometer lo que construirás cuando subas de cargo.",
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
        body: "Muchos técnicos jóvenes evalúan una inversión solo por el acceso al crédito. Muy pocos revisan si su flujo real resiste la carga durante todo el período de formación.",
        bullets: [
          "Ingresos reales vs. carga crediticia",
          "Evaluar carga actual y futura",
          "Tranquilidad financiera como variable",
        ],
      },
      {
        icon: "switch_access_shortcut",
        title: "Preparar la transición",
        body: "La inversión correcta hoy no debería dejarte parado, sino posicionado para lo que viene. Este paso define si sales de la formación con una base patrimonial o con un lastre.",
        bullets: [
          "Estrategia post-formación",
          "Alinear inversión con objetivos",
          "Construir base, no techo",
        ],
      },
    ],
    nadieDice: {
      titulo: "Lo que casi nadie te dice",
      punchline:
        "Hay técnicos en formación que deberían invertir y otros que deberían esperar o hacerlo de otra forma. El problema es que desde afuera se ven iguales.",
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
    slug: "supervisor-jefatura",
    number: 4,
    label: "Supervisor, Ingeniero o Jefatura",
    shortLabel: "Supervisor / Jefatura",
    tagline:
      "Llegar a una etapa de mayores ingresos no garantiza una buena estrategia patrimonial.",
    heroIntro:
      "Muchos supervisores e ingenieros ganan bien, pero invierten mal, pagan de más y se ordenan tarde. La estructura correcta puede multiplicar tu patrimonio, no sólo tus ingresos: eso exige pensar la inversión dentro de un plan, no como una compra aislada.",
    steps: [
      {
        icon: "architecture",
        title: "Revisar cómo estás estructurado",
        body: "Antes de pensar en crecer, necesitas entender si tu estructura actual te permite hacerlo. Una mala base cuesta flujo, eficiencia tributaria y capacidad de expansión.",
        bullets: [
          "Estructura de ingresos (sueldo + honorarios + sociedad)",
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
        body: "El supervisor no sólo debe pensar en comprar. Debe pensar cuándo comprar, con qué estructura y bajo qué lógica. Ese es el punto donde se separa una inversión puntual de una estrategia patrimonial.",
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
        body: "Muchos profesionales ya tienen ingresos, capacidad e intención de invertir, pero avanzan sin método. Y cuando eso ocurre, aparecen errores que no siempre se ven al principio.",
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
        "Si tienes una sociedad de consultoría minera, podrías invertir desde ella con una buena estructuración. La estructura correcta puede multiplicar tu patrimonio, no sólo tus ingresos.",
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
