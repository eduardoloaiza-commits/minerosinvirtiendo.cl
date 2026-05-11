/**
 * Artículos del blog "/educacion-financiera-para-mineros".
 *
 * Cada artículo se compone de:
 *   - intro: párrafos iniciales antes del primer H2
 *   - sections: lista de secciones con H2 + párrafos + lista opcional
 *   - conclusion: cierre con párrafos + CTA implícito al /diagnostico
 *
 * El contenido está diseñado para +800 palabras, keywords del copy estratégico
 * (inversión inmobiliaria, sociedad de profesionales, crédito hipotecario,
 * Impuesto Global Complementario, plusvalía, comunas de Santiago) y tono
 * editorial consistente con la marca.
 */

import { STOCK } from "./constants";

export type ArticleSection = {
  h: string;
  p: string[];
  list?: { items: string[]; ordered?: boolean };
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  metaTitle?: string;
  metaDescription: string;
  excerpt: string;
  cover: string;
  readMinutes: number;
  publishedAt: string; // ISO date
  keywords: string[];
  intro: string[];
  sections: ArticleSection[];
  conclusion: string[];
};

export const ARTICLES: Article[] = [
  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "sociedades-profesionales-primer-paso",
    category: "Tributario",
    title:
      "Sociedad de Profesionales para consultores mineros: el primer paso para invertir eficiente",
    metaTitle:
      "Sociedad de Profesionales para consultores mineros en Chile | Guía 2026",
    metaDescription:
      "Si tienes ingresos por asesorías o consultoría minera independiente, una Sociedad de Profesionales puede reducir legalmente tu Global Complementario. Requisitos SII, beneficios concretos y cuándo te conviene constituirla.",
    excerpt:
      "Cuándo el geólogo, ingeniero o consultor minero independiente debe estructurar una Sociedad de Profesionales, y cuándo todavía no.",
    cover: STOCK.blogTributario,
    readMinutes: 7,
    publishedAt: "2026-04-22",
    keywords: [
      "sociedad de profesionales",
      "consultoría minera",
      "Impuesto Global Complementario",
      "SII",
      "boleta de honorarios",
      "operación renta",
      "tributación consultores mineros",
    ],
    intro: [
      "Antes de partir, una aclaración importante: este artículo no es para todos los mineros. Si trabajas en faena con contrato de planta, tu sueldo y bono producción pasan por el Impuesto Único de Segunda Categoría, para ti la palanca tributaria principal es otra, y la cubrimos en el artículo del Global Complementario y APV.",
      "Esto sí te aplica si una parte (o el total) de tus ingresos viene por boletas de honorarios: geólogos consultores, ingenieros senior con asesorías técnicas paralelas, especialistas en geomecánica o metalurgia que prestan servicios a varias compañías, y profesionales que dejaron la planta para trabajar como consultor independiente. Si emites boletas y los ingresos crecieron, este es tu artículo.",
      "Para ese perfil, el Impuesto Global Complementario se vuelve una trampa fiscal silenciosa: tramo tras tramo, se lleva una porción cada vez mayor de lo que podría convertirse en patrimonio. La estructura legal que elijas determina cuánto pagas al SII y cuánto queda para construir patrimonio.",
    ],
    sections: [
      {
        h: "Qué es una Sociedad de Profesionales",
        p: [
          "Una Sociedad de Profesionales es una persona jurídica constituida por dos o más profesionales del mismo rubro o de rubros complementarios, que presta servicios de carácter profesional y cumple ciertos requisitos definidos por el SII para ser considerada como tal. No es lo mismo que una EIRL, una SpA común ni una sociedad comercial: tiene un tratamiento tributario distinto.",
          "Su característica más relevante es que los servicios profesionales prestados bajo esta figura están exentos de IVA, siempre y cuando cumpla las condiciones exigidas por el SII. Esto no solo ahorra el 19% al cliente final: también permite acogerse al régimen Pro-Pyme transparente o al régimen general con tasas corporativas muy por debajo del Global Complementario en tramos altos.",
          "En el contexto minero, la estructura típica es entre 2 o 3 ingenieros o geólogos que prestan servicios de evaluación, modelamiento, planificación o asesoría técnica a compañías productoras o juniors. El servicio se factura desde la sociedad, las utilidades tributan primero a tasa corporativa, y los socios retiran lo necesario para consumo personal.",
        ],
      },
      {
        h: "Beneficios tributarios concretos",
        p: [
          "Estructurarte como Sociedad de Profesionales te habilita al menos cuatro palancas fiscales reales, todas legales y todas en uso hoy por consultores mineros con cartera consolidada:",
        ],
        list: {
          items: [
            "Exención de IVA sobre tus servicios profesionales, siempre que la sociedad califique formalmente (cumpliendo los requisitos de profesionales, giro exclusivo y régimen tributario).",
            "Acceso a regímenes Pro-Pyme con tasas de primera categoría reducidas y contabilidad simplificada, lo que disminuye el costo operativo del contador.",
            "Deducción de gastos necesarios para producir la renta: arriendo de oficina, EPP, software técnico (Vulcan, Datamine, Leapfrog, Surpac), suscripciones a normas y publicaciones técnicas, capacitaciones y diplomados, contador, asesoría legal, equipos de muestreo y herramientas de campo, y traslados a faena no reembolsados por el cliente.",
            "Separación formal entre tu patrimonio personal y el patrimonio de la sociedad, lo que agrega una capa de protección frente a reclamos asociados al ejercicio profesional (responsabilidad por estimaciones de reservas, evaluaciones técnicas, etc.).",
          ],
        },
      },
      {
        h: "Requisitos del SII para calificar",
        p: [
          "No cualquier empresa con profesionales mineros dentro califica como Sociedad de Profesionales. El SII exige condiciones específicas que conviene conocer antes de constituirla:",
        ],
        list: {
          items: [
            "Que al menos dos socios sean profesionales del mismo rubro o de rubros afines, con títulos reconocidos por el Estado (ingeniería de minas, geología, metalurgia, ingeniería civil, etc.).",
            "Que el giro exclusivo de la sociedad sea la prestación de servicios profesionales (no puede mezclar servicios comerciales, comercialización de equipos ni explotación de yacimientos).",
            "Que los socios ejerzan efectivamente la profesión dentro de la sociedad (no ser solo aportantes de capital).",
            "Que la sociedad no explote capital como actividad principal (por ejemplo, no puede ser una sociedad de inversión disfrazada de consultora).",
          ],
        },
      },
      {
        h: "Cuándo conviene constituirla",
        p: [
          "La respuesta depende de cuánto factures hoy por boleta de honorarios y cuánta parte de eso se va en Global Complementario. Una regla práctica para consultores mineros: si tu ingreso anual por honorarios supera las 2.500 UF y tu tramo marginal ya está sobre el 30%, la sociedad empieza a hacer sentido financiero. A niveles mayores, habituales en geólogos senior independientes o ingenieros con cartera de varios mandantes, el ahorro anual puede cubrir cómodamente la entrada de un departamento de inversión cada año.",
          "El momento ideal también depende de tu etapa profesional. Un ingeniero recién independizado, con un solo mandante y flujos aún inestables, tiene menos urgencia que un consultor consolidado con 5 años de cartera diversificada y proyecciones claras de crecimiento. Pero cuanto antes se estructure (sin saltarse el orden cuando todavía conviene boleta simple), antes empiezan a acumularse los beneficios año tras año.",
        ],
      },
      {
        h: "Errores comunes al estructurarse",
        p: [
          "Constituir la sociedad es solo el primer paso. Los errores aparecen en la operación diaria: mezclar gastos personales con los de la sociedad, no llevar contabilidad al día, no emitir documentación tributaria electrónica correctamente o, peor, forzar deducciones que el SII puede cuestionar en una fiscalización (especialmente viáticos a faena, vehículo de uso mixto, y gastos de representación).",
          "El otro error clásico es constituirla sola, sin coordinarla con la estrategia patrimonial. Una Sociedad de Profesionales que no conversa con tu plan inmobiliario termina siendo solo un ahorro fiscal aislado, en vez de ser la palanca que acelera tu construcción patrimonial. El valor real aparece cuando el ahorro tributario se reinvierte directamente en activos que generan plusvalía y renta, ya sea en regiones cercanas a faena (Antofagasta, La Serena, Iquique) o en Santiago como base familiar.",
        ],
      },
      {
        h: "El puente entre tributario e inmobiliario",
        p: [
          "El dinero que dejas de pagar al SII tiene dos destinos posibles: gasto o inversión. La mayoría de los consultores que estructuran su sociedad sin un plan patrimonial terminan viendo ese ahorro diluirse en gasto corriente a los pocos años, vehículos, viajes, mejoras a la oficina. La minoría que sí tiene un plan reinvierte esos recursos en departamentos que crecen históricamente 4% anual en UF y generan renta todos los meses.",
          "Esa diferencia, medida en 10 años, es la distancia entre llegar al retiro con una renta previsional marginal o con un patrimonio inmobiliario que paga dividendos todos los meses, independientes del ciclo del cobre o del litio. La Sociedad de Profesionales es el vehículo, pero la dirección la define tu estrategia de inversión.",
        ],
      },
    ],
    conclusion: [
      "Estructurarte como Sociedad de Profesionales no es un truco contable ni un atajo fiscal. Es una decisión estratégica de largo plazo que se vuelve más valiosa cuanto antes la tomes y cuanto mejor la coordines con tu plan patrimonial global. Pero solo aplica si tienes ingresos por boleta, si eres dependiente de planta, tu palanca es otra y conviene leer primero el artículo del Global Complementario y APV.",
      "Si emites boletas y quieres evaluar si te conviene hoy, un asesor puede revisar tu última Operación Renta, tu mix de mandantes y tu estructura actual para estimar el ahorro anual proyectado y el camino más corto hacia tu meta patrimonial.",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "inmobiliario-refugio-especialistas",
    category: "Inmobiliario",
    title:
      "Por qué el sector inmobiliario es el refugio favorito de los profesionales mineros",
    metaDescription:
      "Plusvalía histórica, rentas estables y una barrera de entrada financiera que favorece a quienes tienen sueldo + bono producción consolidados. Por qué mineros eligen el ladrillo en Chile.",
    excerpt:
      "Plusvalía histórica, rentas estables y una barrera de entrada que favorece al profesional minero con ingresos consolidados entre faena y base familiar.",
    cover: STOCK.blogInmobiliario,
    readMinutes: 6,
    publishedAt: "2026-04-15",
    keywords: [
      "inversión inmobiliaria Chile",
      "plusvalía",
      "invertir en departamentos",
      "propiedades de inversión mineros",
      "patrimonio neto minero",
      "libertad financiera mineros",
    ],
    intro: [
      "Cada vez que un grupo de profesionales mineros se junta a hablar de plata (al cambio de turno, en un casino de campamento o en el almuerzo de regreso), la conversación termina en el mismo lugar: el ladrillo. No es casualidad. En Chile, el sector inmobiliario ha sido, sostenidamente por más de dos décadas, la inversión favorita de quienes tienen sueldos altos en industrias de capital intensivo: minería, energía, banca y forestal.",
      "La razón no es cultural ni emocional. Es estructural. El ladrillo combina cuatro atributos que rara vez coinciden en otro vehículo de inversión: apreciación histórica sobre IPC, flujo constante de renta, apalancamiento bancario accesible y protección contra volatilidad. Para un minero que vive entre faena y base familiar, además, suma una quinta característica clave: cobertura de techo en dos plazas distintas. Revisemos las cinco.",
    ],
    sections: [
      {
        h: "Plusvalía histórica en Chile",
        p: [
          "Los precios de los departamentos en Santiago y principales regiones mineras han crecido en promedio entre un 4% y un 6% anual en UF durante los últimos 10 a 15 años, según datos públicos de corredoras y cámaras sectoriales. En comunas de alta demanda como Ñuñoa, Antofagasta centro, La Serena y Las Condes, ese crecimiento ha superado sostenidamente al retorno bruto de instrumentos conservadores como depósitos a plazo o fondos mutuos de renta fija.",
          "La plusvalía no es garantía y no se comporta linealmente: hay años planos y episodios de corrección, especialmente en plazas mineras cuando el ciclo del cobre se enfría. Pero la tendencia estructural está sostenida por tres fuerzas que no cambian fácilmente: escasez de suelo en zonas consolidadas, déficit habitacional nacional y crecimiento demográfico urbano. Para un horizonte de 10 a 20 años, que es el de la mayoría de los mineros pensando en retiro o en heredar a sus hijos, esas fuerzas siguen jugando a favor.",
        ],
      },
      {
        h: "Activo tangible vs. activo financiero",
        p: [
          "Un departamento es un activo que puedes ver, tocar y arrendar. Un fondo mutuo es una línea en un estado de cuenta que sube y baja según factores que no controlas. Para un profesional minero con turnos exigentes y poco tiempo para monitorear mercados, la tangibilidad no es un lujo: es una forma de estabilidad emocional que permite tomar decisiones de largo plazo sin estar revisando precios cada vez que sale del socavón o vuelve a casa.",
          "Esto también influye en el comportamiento ante crisis. Durante shocks económicos, los precios inmobiliarios tienden a corregir menos y más lentamente que los activos financieros, y los arriendos tienden a mantenerse, porque la demanda de vivienda no desaparece. Eso convierte al inmobiliario en un ancla emocional y financiera dentro de un portafolio diversificado, especialmente útil cuando la propia industria está en un valle del ciclo.",
        ],
      },
      {
        h: "Apalancamiento bancario: el multiplicador",
        p: [
          "Aquí es donde el inmobiliario se vuelve especialmente poderoso para un profesional minero de sueldo alto. Los bancos en Chile financian hasta el 80% del valor del departamento vía crédito hipotecario en UF, a plazos de hasta 30 años. Esto significa que con un pie del 20%, el inversionista controla el 100% del activo, y se beneficia del 100% de la plusvalía sobre ese valor.",
          "Veámoslo en números pensando en un supervisor o ingeniero de planta consolidado. Un departamento de $120 millones con un pie de $24 millones. Si el activo se aprecia 4% anual, el primer año la plusvalía es $4,8 millones. Pero esos $4,8 millones se generan sobre un pie de $24 millones: la rentabilidad efectiva sobre capital propio es del 20% anual, solo por apreciación. Si además el activo arrienda a 5% anual bruto, el retorno total sobre capital propio supera cómodamente el 25% en escenarios conservadores.",
          "Ningún fondo mutuo, APV o depósito a plazo puede competir con eso de forma sostenida. El apalancamiento bancario es un multiplicador que solo está disponible para quienes pueden calificar con buena renta y estabilidad: contrato indefinido, sueldo en UF o pesos consolidado, antigüedad demostrable. El profesional minero de planta es exactamente ese perfil, y los bancos lo saben, lo que abre la puerta a tasas preferenciales por convenio gremial o sindical.",
        ],
      },
      {
        h: "Renta mensual: flujo que no pregunta por el cobre",
        p: [
          "Un departamento arrendado genera ingresos todos los meses, independiente de lo que hagan las bolsas, el peso, el dólar, el precio del cobre o el ánimo del mercado. Para un profesional minero que quiere diversificar ingresos y reducir su dependencia de un solo empleador o de un solo commodity, ese flujo constante es una herramienta única.",
          "En proyectos bien elegidos, la renta cubre el dividendo del crédito hipotecario. El activo se paga solo. El propietario aporta el pie inicial y, con paciencia, recibe a los 25 años un patrimonio completo, libre de deuda, revalorizado y seguido generando renta mensual. Esa es la fórmula del patrimonio pasivo, y para un minero que mira el reloj de su carrera (los turnos pesados no se hacen para siempre), es la fórmula de la salida.",
        ],
      },
      {
        h: "Doble residencia: faena + base familiar",
        p: [
          "Hay un ángulo que solo aplica al perfil minero y que conviene jugar a favor. Muchos profesionales de planta viven dos vidas en paralelo: en faena durante el turno (Antofagasta, Calama, Sierra Gorda, Copiapó, Diego de Almagro, Sewell) y en una base familiar el resto del tiempo (La Serena, Concepción, Santiago, Rancagua). Comprar departamento en ambas plazas, con calendario, deja de ser un gasto duplicado y pasa a ser una jugada patrimonial.",
          "El depto en regiones puede usarse propio durante los turnos y arrendarse a otros mineros en el ciclo opuesto, o convertirse en arriendo full una vez que el dueño cambia de proyecto. El depto en la base familiar normalmente se compra primero (vivienda principal con beneficios DFL2) y termina siendo el activo que más se aprecia en 20 años. La secuencia y el orden importan: ese análisis específico es donde una asesoría patrimonial vale lo que cobra.",
        ],
      },
      {
        h: "Barrera de entrada que premia los altos ingresos",
        p: [
          "Invertir en un departamento exige capital, calificación crediticia y paciencia. Las tres cosas son abundantes en un minero consolidado y escasas en el promedio del país. Esa asimetría convierte al inmobiliario en una categoría donde el minero no compite contra todo el mercado, sino contra una fracción pequeña: otros profesionales de sueldo alto y carrera estable.",
          "En mercados donde todos pueden entrar fácilmente, las oportunidades se agotan rápido y los retornos se comprimen. En el inmobiliario, la barrera natural mantiene los retornos atractivos para quienes sí pueden entrar. Es exactamente la dinámica que un minero inversionista debe buscar: un mercado donde su perfil es una ventaja, no un obstáculo.",
        ],
      },
    ],
    conclusion: [
      "Por plusvalía histórica, tangibilidad, apalancamiento, flujo mensual y la posibilidad de cubrir techo en dos plazas, el ladrillo sigue siendo la inversión favorita del minero chileno. Y no está por casualidad. Es el vehículo que mejor se adapta a un profesional con alta capacidad de ahorro, estabilidad de ingresos, sistema de turnos y poco tiempo para gestionar operaciones complejas.",
      "Por supuesto, invertir bien en inmobiliario requiere elegir bien el proyecto, estructurar bien el crédito y gestionar profesionalmente el arriendo, más todavía si los activos están en regiones distintas a donde vives. Ese es el trabajo operativo que no todos los mineros quieren hacer, y justamente donde una asesoría patrimonial especializada se vuelve rentable.",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "guia-inversion-2026-dueno-de-tu-tiempo",
    category: "Guía 2026",
    title:
      "Guía de Inversión 2026: de minero a dueño de su tiempo",
    metaDescription:
      "El camino paso a paso para construir $300M en patrimonio inmobiliario antes de los 50 años sin sacrificar tu labor diaria. Guía completa 2026 para profesionales de la minería en Chile.",
    excerpt:
      "El camino paso a paso para construir $300M en patrimonio antes de los 50 años sin sacrificar tu labor diaria.",
    cover: STOCK.blogGuia,
    readMinutes: 12,
    publishedAt: "2026-04-08",
    keywords: [
      "libertad financiera mineros",
      "patrimonio neto",
      "inversión inmobiliaria Chile",
      "jubilación Chile",
      "mejores inversiones Chile",
      "invertir en departamentos",
    ],
    intro: [
      "La libertad financiera no es un número abstracto. Para un profesional minero en Chile, es un punto concreto: el momento en que tus activos generan suficiente renta para que el próximo turno sea una elección y no una necesidad. En el marco inmobiliario chileno, ese punto se ubica típicamente cerca de los $300 millones de patrimonio neto.",
      "Con esa cifra, una renta pasiva mensual bruta cercana al millón y medio de pesos se vuelve realista. No es riqueza extrema, sobre todo si la comparas con un sueldo de planta consolidado: es autonomía. Es la posibilidad de elegir el proyecto que quieres, no todos los que ofrezcan, y de heredar a tus hijos algo más que tu liquidación de fin de servicio.",
      "Esta guía es el mapa de ruta para llegar ahí antes de los 50 años, empezando hoy. Funciona igual para el minero de planta con sueldo + bono producción que para el consultor independiente que factura por boleta, la única diferencia importante aparece en el Paso 3.",
    ],
    sections: [
      {
        h: "Paso 1: Diagnóstica tu punto de partida",
        p: [
          "Antes de hablar de dónde invertir, hay que saber desde dónde partes. El diagnóstico patrimonial honesto es la base de toda estrategia seria. Incluye cuatro preguntas que la mayoría de los profesionales mineros evita mirar con calma:",
        ],
        list: {
          items: [
            "¿Cuál es tu ingreso real neto anual, después de cotizaciones, impuestos (Segunda Categoría o Global Complementario), y gastos fijos? Incluye sueldo base, bono producción, asignaciones de zona y horas extra promedio del último año.",
            "¿Cuál es tu capacidad real de ahorro mensual promedio de los últimos 12 meses, no la que te gustaría tener? Mira el extracto del banco, no el presupuesto teórico.",
            "¿Cuál es tu pasivo vigente (créditos de consumo, tarjetas, hipotecarios, leasing, créditos de cooperativa) y a qué tasa promedio está?",
            "¿Qué porcentaje de tu ingreso total depende del ciclo del cobre o del litio? Si más del 70% es bono producción atado a precio, eso cambia el perfil de riesgo.",
          ],
        },
      },
      {
        h: "Paso 2: Define el número que quieres alcanzar",
        p: [
          "La meta de $300 millones no es una convención: es el resultado de un cálculo simple. Suponiendo una renta pasiva anual del 5% bruto, ese patrimonio genera $15 millones al año, equivalentes a $1,25 millones mensuales antes de impuestos. Para un minero acostumbrado a sueldos altos, esa cifra es la banda inferior, pero es lo mínimo para mantener calidad de vida sin depender del próximo turno.",
          "La meta se ajusta a tu realidad. Un minero soltero en regiones con costo de vida menor puede apuntar a $200 millones. Un supervisor con familia numerosa, educación privada y plan de retiro temprano puede necesitar $500-700 millones. La meta es personal, pero el método para llegar es universal.",
        ],
      },
      {
        h: "Paso 3: Estructura tu vehículo legal, depende de cómo cobras",
        p: [
          "Aquí el camino se bifurca según tu fuente de ingresos:",
        ],
        list: {
          items: [
            "Si eres dependiente de planta (contrato indefinido, sueldo + bono): tu impuesto es el Único de Segunda Categoría, retenido mes a mes. La palanca tributaria principal es maximizar APV-A (hasta 50 UF mensuales deducibles) y separar contablemente el bono producción del flujo de gasto corriente. La sociedad de inversión, si llega, es para tenencia de los activos inmobiliarios, no para tu sueldo.",
            "Si emites boletas de honorarios (consultor, geólogo independiente, ingeniero asesor): tu impuesto es Global Complementario y aquí sí evalúa una Sociedad de Profesionales con uno o dos colegas, más una sociedad de inversión separada para los activos. La sociedad permite diferir tributación reinvirtiendo utilidades antes de retirarlas.",
            "Si tienes mix (sueldo + asesorías paralelas): combinas ambos. APV-A para reducir base imponible del sueldo, sociedad para canalizar las asesorías, y una sociedad de inversión para los inmuebles.",
          ],
        },
      },
      {
        h: "Paso 4: Compra tu primer departamento",
        p: [
          "El primer departamento es el más importante, no por rentabilidad sino por inercia. Es el que destraba la psicología del inversionista. Aprendes a leer contratos, a negociar con la inmobiliaria, a coordinar notaría y banco, a lidiar con el arriendo. Esa experiencia vale más que el retorno específico del proyecto.",
          "Para un minero, hay dos rutas razonables según tu situación de turno: (a) si tu base familiar es Santiago u otra ciudad mayor, comprar ahí entre UF 2.500 y UF 4.000 en Ñuñoa, San Miguel, Santiago Centro o Providencia es la jugada estándar; (b) si vives buena parte del año en una plaza minera regional (Antofagasta, La Serena, Iquique, Copiapó), comprar primero en regiones puede ser más barato, tener mejor cap rate de arriendo y servir de techo durante turnos. La regla universal: proyecto en verde o entrega inmediata, inmobiliaria con historial, evitar segundas líneas.",
        ],
      },
      {
        h: "Paso 5: Escala de 2 a 5 departamentos",
        p: [
          "Aquí la estrategia se vuelve financiera pura. El objetivo es acumular entre 2 y 5 departamentos en un horizonte de 8 a 15 años, aprovechando que cada depto adquirido genera plusvalía, renta y capacidad crediticia adicional para el siguiente.",
          "La matemática es clara: con un ahorro mensual promedio de $800.000 a $1.200.000, perfectamente alcanzable con sueldo + bono minero bien gestionado, es posible adquirir un nuevo departamento cada 2 a 3 años. Al cabo de 12 años, un portafolio de 4 a 5 deptos puede superar cómodamente los $300 millones netos, considerando apreciación y amortización de deuda. Es aritmética paciente, no apuesta.",
        ],
      },
      {
        h: "Paso 6: Automatiza la gestión (clave si vives en faena)",
        p: [
          "Un portafolio inmobiliario de 5 deptos administrado por el mismo minero es una carga operativa enorme: arriendos, morosidades, reparaciones, declaración de rentas, contratos. Y si encima pasas la mitad del mes a 200 km de la propiedad, sin señal estable, la operación es inviable. La solución no es administrarlo mejor: es delegarlo profesionalmente.",
          "Hoy existen empresas especializadas en gestión de arriendo para inversionistas de alta renta. Cobran entre 6% y 10% de la renta bruta, pero a cambio se encargan de todo: búsqueda de arrendatario, firma de contratos, cobranza, pagos de gastos comunes, declaraciones tributarias del arriendo, reparaciones menores. Para un minero en sistema de turnos 7x7 o 14x14, donde no puedes responder a una llamada del arrendatario un martes a las 11am porque estás bajo tierra, el ahorro de tiempo y estrés vale cada peso.",
        ],
      },
      {
        h: "Paso 7: Protege lo que construiste",
        p: [
          "Cuando tu patrimonio supere los $150-200 millones, entran en juego dos consideraciones que no existían antes: blindaje patrimonial y planificación sucesoria. Un accidente laboral con secuelas, una demanda asociada al ejercicio profesional o un divorcio mal estructurado pueden erosionar años de esfuerzo en meses.",
          "Las herramientas disponibles en Chile incluyen: seguros de vida y de responsabilidad civil profesional, separación formal entre patrimonio conyugal y propio, uso estratégico de sociedades para tenencia de activos, y pactos sucesorios o testamentos claros. Para minería específicamente, conviene revisar también las coberturas adicionales que muchos contratos colectivos incluyen y que no todos los trabajadores aprovechan. Ninguna es costosa comparada con el patrimonio que protege.",
        ],
      },
    ],
    conclusion: [
      "Llegar a los $300 millones no es una hazaña; es una consecuencia lógica de aplicar este método con disciplina durante 10 a 15 años. El verdadero diferencial entre quien lo logra y quien no, rara vez es el ingreso, los mineros suelen tener exactamente el ingreso necesario. Casi siempre es la estructura, la constancia y el acompañamiento experto en las decisiones clave.",
      "Si quieres trazar tu propio camino con números específicos, el punto de partida es siempre el diagnóstico. Con tu situación actual, sueldo base, bono producción, antigüedad, sistema de turnos, base familiar, un asesor puede proyectar cuánto y cuándo puedes alcanzar tu meta, y qué decisiones deberías tomar este año para acelerarla.",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "credito-hipotecario-mineros-guia",
    category: "Financiero",
    title: "Crédito Hipotecario para Mineros: cómo conseguir la mejor tasa en 2026",
    metaDescription:
      "Guía práctica sobre crédito hipotecario UF en Chile para profesionales de la minería: cómo evalúan los bancos, tasas preferenciales, LTV, seguros y estrategias de apalancamiento.",
    excerpt:
      "Cómo evalúan los bancos a un profesional de la minería, qué tasas preferenciales puedes negociar y cuándo apalancar con mutuaria o banco.",
    cover: STOCK.blogTributario,
    readMinutes: 8,
    publishedAt: "2026-04-01",
    keywords: [
      "crédito hipotecario",
      "simulador hipotecario",
      "tasa de interés",
      "bancos Chile",
      "mineros inversión inmobiliaria",
      "UF",
    ],
    intro: [
      "El crédito hipotecario es el mayor multiplicador que existe legalmente en Chile. Con un pie del 20%, el banco te financia el 80% del activo y tú capturas el 100% de la apreciación. Pero esa misma herramienta, mal negociada, puede encadenarte con una tasa demasiado alta durante 25 años.",
      "Para un profesional minero, negociar bien el crédito hipotecario vale más que elegir bien el departamento. Tu perfil es uno de los más buscados por los bancos, sueldo alto, contrato indefinido, antigüedad demostrable, muchas veces con asignación de zona y sueldo en UF, y eso te da palancas que la mayoría del mercado no tiene. Este artículo es una guía práctica para entender cómo te ven los bancos, qué tienes a tu favor y cómo extraer la mejor tasa.",
    ],
    sections: [
      {
        h: "Cómo evalúan los bancos a un profesional minero",
        p: [
          "Los bancos en Chile evalúan un crédito hipotecario sobre tres pilares: capacidad de pago, estabilidad de ingresos y comportamiento crediticio. Los profesionales mineros, operadores con antigüedad, supervisores, ingenieros de planta y técnicos especializados, suelen destacar en los tres.",
          "En capacidad de pago, los ingresos de planta minera (sueldo base + bono producción + asignaciones) generalmente superan con holgura el múltiplo exigido de dividendo/renta. En estabilidad, el contrato indefinido en gran minería privada o estatal se percibe como una de las actividades laborales más resilientes del país, y la antigüedad se valora explícitamente. Y en comportamiento, un minero con cartola limpia y sin morosidades en cooperativas o casas comerciales se ubica entre los perfiles más deseados por los ejecutivos hipotecarios.",
          "Ese posicionamiento es una palanca real. La mayoría de los bancos tiene canales preferenciales (no siempre publicitados) para convenios con sindicatos mineros, asociaciones gremiales, compañías productoras y empresas contratistas grandes. Ingresar por el canal correcto puede significar entre 50 y 100 puntos base de diferencia en la tasa final: miles de UF en 25 años. Si tu sindicato o empresa tiene convenio, úsalo, la mesa hipotecaria pública casi nunca iguala la mesa con convenio.",
        ],
      },
      {
        h: "UF vs. pesos: por qué los hipotecarios van siempre en UF",
        p: [
          "En Chile, prácticamente todos los créditos hipotecarios se otorgan en Unidades de Fomento (UF), una unidad que se reajusta diariamente según la variación del IPC. Esto protege al banco de la inflación y le permite ofrecer tasas de interés reales más bajas.",
          "Para el deudor, esto significa que el dividendo en pesos se reajusta mes a mes con la inflación. A cambio, el saldo también se reajusta, lo que puede parecer desventaja inicialmente. En la práctica, como los arriendos y los sueldos mineros también se ajustan con inflación en el mediano plazo (varios contratos colectivos incluyen reajuste IPC anual o semestral), el crédito UF tiende a mantenerse neutral. De hecho, si tu sueldo está parcial o totalmente expresado en UF, el calce con un dividendo UF es casi perfecto.",
          "Por eso la tasa que importa negociar es la tasa real anual en UF, no el dividendo inicial en pesos. Un punto porcentual adicional en UF se traduce en decenas de millones de pesos totales en un crédito a 25 años.",
        ],
      },
      {
        h: "LTV y plazo: qué conviene negociar",
        p: [
          "LTV significa Loan-to-Value, el porcentaje del valor del departamento que el banco financia. El estándar en Chile es 80%, pero algunos bancos pueden llegar a 90% para perfiles destacados o con garantías adicionales. Sin embargo, bajar del 80% casi nunca conviene.",
          "La razón es simple: tu pie tiene un costo de oportunidad. Cada peso extra que pones como pie es un peso que no está trabajando en otro activo. Si puedes financiar el 80% a tasa real del 4% UF y esperas que tu patrimonio crezca al 5-6% UF, endeudarte más barato que la rentabilidad de tu activo es aritméticamente correcto.",
          "Sobre el plazo: los bancos ofrecen 20, 25 y 30 años. A mayor plazo, menor dividendo mensual pero mayor interés total pagado. Para un inversionista con capacidad de ahorro, 20 años puede ser óptimo. Para un inversor que prioriza flujo de caja mensual, 25 o 30 años liberan más efectivo para reinversión.",
        ],
      },
      {
        h: "Seguros asociados: el costo que nadie mira",
        p: [
          "Junto con el crédito hipotecario se contratan tres seguros obligatorios: desgravamen, incendio y sismo. Muchos deudores aceptan los que el banco les ofrece sin cotizar. Error caro.",
          "Los seguros son libres de contratación: puedes elegir cualquier aseguradora que cumpla los requisitos legales. La diferencia entre la oferta por defecto del banco y una cotización independiente puede ser entre 20% y 40% más económica, y se mantiene durante toda la vida del crédito. En un hipotecario a 25 años, eso también son millones.",
        ],
      },
      {
        h: "Bancos vs. mutuarias: qué elegir",
        p: [
          "Las mutuarias son instituciones financieras especializadas en créditos hipotecarios, generalmente vinculadas a compañías de seguros. Compiten directamente con los bancos y tienen ventajas específicas: procesos más rápidos, menos trámites burocráticos y a veces tasas más competitivas para plazos largos.",
          "La desventaja es que no ofrecen paquetes integrados (cuenta corriente, tarjetas, otros productos), por lo que si quieres consolidar toda tu vida financiera en una institución, un banco puede ser más cómodo. Pero para el inversionista puro, donde lo que importa es la tasa neta, comparar bancos y mutuarias en paralelo es obligatorio antes de firmar.",
        ],
      },
      {
        h: "Bono producción y asignación de zona: cómo los cuentan",
        p: [
          "Aquí hay un detalle que cambia tu calificación y que la mayoría de los profesionales mineros no negocia: cómo el banco computa el bono producción y las asignaciones variables. Algunos bancos los suman al 100% (lo correcto cuando hay 3+ años de historia), otros al 50% por considerarlos variables, y otros los descartan completamente. Esa decisión cambia tu monto máximo financiable en 20-40%.",
          "Llega a la mesa con: liquidaciones de los últimos 24 meses (no 12), certificado de la empresa que indique antigüedad y carácter del bono, y si es posible una proyección anualizada del bono producción de los últimos 3 años. La asignación de zona, esa que recibes por trabajar en altura, en faena remota o en condiciones particulares, entra al ingreso bruto y suma para calificación si es contractual y permanente. Si te la pagan como reembolso de gastos, no suma. Vale revisar la liquidación con el contador antes de presentarse.",
        ],
      },
      {
        h: "Estrategia de apalancamiento progresivo",
        p: [
          "La diferencia entre un minero con un departamento y uno con cinco, generalmente no está en cuánto ahorran por mes. Está en cómo usan el crédito. La estrategia de apalancamiento progresivo consiste en reutilizar la plusvalía acumulada de una propiedad para financiar el pie de la siguiente.",
          "A los 3-4 años de adquirido el primer depto, su valor de mercado suele haber crecido entre 15% y 25% y la deuda haber bajado por amortización. Esa diferencia (equity) puede respaldar, mediante crédito o refinanciamiento, el pie del segundo departamento. Repetido con disciplina, ese mecanismo permite construir un portafolio de 4-5 deptos sin necesidad de aportar cada pie completo desde ahorro fresco.",
        ],
      },
    ],
    conclusion: [
      "Un crédito hipotecario bien negociado es una herramienta financiera de primera línea. Un crédito mal negociado es una hipoteca literal sobre tus próximos 25 años. La diferencia entre ambos escenarios son unas cuantas horas de trabajo, algunas cotizaciones en paralelo y saber qué pedir, incluyendo el dato concreto de tu convenio gremial o sindical, que muchos profesionales mineros tienen en el bolsillo y nunca usan.",
      "Si vas a comprar tu primer departamento o estás evaluando refinanciar uno existente, el acompañamiento de un asesor que conozca las mesas hipotecarias de múltiples bancos y mutuarias puede marcar una diferencia medible en tasa, seguros y estructura del crédito.",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "impuesto-global-complementario-mineros",
    category: "Tributario",
    title: "Impuesto Global Complementario y Segunda Categoría: cómo pagan menos los mineros",
    metaDescription:
      "Tramos del Impuesto Global Complementario 2026, cómo se grava el sueldo + bono producción del minero de planta, calendario fiscal y palancas legales (APV-A, deducibles, sociedad).",
    excerpt:
      "Cómo se grava tu sueldo + bono si eres dependiente, cómo funciona el Global Complementario si emites boletas, y las palancas legales para pagar menos.",
    cover: STOCK.blogTributario,
    readMinutes: 7,
    publishedAt: "2026-03-25",
    keywords: [
      "Impuesto Global Complementario",
      "SII",
      "operación renta",
      "boleta de honorarios",
      "tributación mineros",
      "APV",
    ],
    intro: [
      "Para un minero en Chile, los impuestos son uno de los gastos anuales más grandes, y casi siempre el menos entendido. La parte que duele depende de cómo cobras: si eres dependiente de planta, te retienen el Impuesto Único de Segunda Categoría mes a mes en la liquidación; si emites boletas como consultor o asesor, el Impuesto Global Complementario aparece de golpe en abril con un monto que puede equivaler a 2 o 3 meses de ingresos netos.",
      "Este artículo cubre los dos casos. Empezamos con cómo se grava el sueldo + bono producción de un minero de planta (que es la situación de la mayoría), luego cubrimos el Global Complementario para quienes emiten boletas, y cerramos con las palancas legales que aplican a cada perfil, APV, deducibles, sociedad de profesionales y calendario fiscal.",
    ],
    sections: [
      {
        h: "Si eres minero de planta: Impuesto Único de Segunda Categoría",
        p: [
          "Si tienes contrato indefinido con una compañía minera, contratista o empresa de servicios, tu sueldo + bono producción + asignaciones tributan vía Impuesto Único de Segunda Categoría. Es progresivo, retenido directamente por el empleador en la liquidación mensual, y se calcula sobre la renta del mes (no del año).",
          "Hay dos consecuencias importantes que pocos revisan. La primera: cuando llega un bono producción grande, ese mes tu retención salta al tramo superior y \"sientes\" un impuesto desproporcionado. La segunda: si tu único ingreso es el sueldo de planta, generalmente no debes hacer Operación Renta, la retención mensual cierra la cuenta. Pero si haces APV-A, tienes asesorías paralelas, arriendas un departamento, o tu cónyuge declara conjuntamente, sí conviene presentar declaración para reliquidar y, en muchos casos, recibir devolución.",
          "Para un supervisor o ingeniero de planta que gana entre $5 y $12 millones brutos mensuales (incluyendo bono), el tramo marginal anualizado se ubica típicamente entre 30% y 40%. Esa es la franja donde cada peso ahorrado a APV-A vale 30-40 centavos en impuesto que no pagas.",
        ],
      },
      {
        h: "Si emites boletas de honorarios: Global Complementario",
        p: [
          "El Impuesto Global Complementario (IGC) es un impuesto progresivo que grava la renta anual total de las personas naturales en Chile. Progresivo significa que tiene tramos: los primeros ingresos tributan a tasa baja (o 0%) y los tramos superiores tributan a tasas cada vez más altas, hasta un máximo del 40%.",
          "En términos prácticos, cuando un consultor minero factura por boleta de honorarios, el SII retiene un porcentaje progresivo al momento de emitir cada boleta (en 2026, alrededor del 17% según el calendario gradual de la reforma tributaria, en camino al 17% definitivo de 2028). Esa retención es un pago a cuenta: en la Operación Renta de abril del año siguiente, se recalcula la cifra real según el tramo final del contribuyente y se ajusta con un pago adicional o, raramente, con una devolución.",
          "Para un consultor minero que factura entre $80 y $200 millones anuales por honorarios, habitual en geólogos senior independientes o ingenieros con cartera de varios mandantes, el tramo marginal termina típicamente entre el 30,4% y el 40%. Sobre cada peso adicional en la franja alta, más de un tercio se va al SII si no hay estructura.",
        ],
      },
      {
        h: "Bono producción y horas extra: cómo se gravan",
        p: [
          "Hay un detalle que aplica solo al perfil minero y que conviene tener claro: el bono producción y las horas extra entran al sueldo bruto del mes en que se pagan, lo que dispara el tramo de retención de Segunda Categoría. Un mes con bono grande puede tributar al 35% mientras los meses normales tributan al 23-27%. No es un error, es la mecánica progresiva mensual.",
          "Lo que sí se puede hacer es coordinar timing y APV. Si sabes que en marzo o diciembre llegará bono, puedes incrementar tu aporte de APV-A esos meses específicos para deducir hasta 50 UF y reducir la base gravable justamente cuando más alto está el tramo. La asignación de zona y los viáticos por turno tienen tratamiento distinto: la asignación contractual de zona es renta gravada, los viáticos en cumplimiento estricto del Reglamento de la Ley de Renta pueden ser no gravados si reembolsan gastos efectivos.",
        ],
      },
      {
        h: "Sociedad de Profesionales: solo si emites boletas",
        p: [
          "Para el consultor minero que factura por boletas, la palanca estructural más grande es la Sociedad de Profesionales. Cobrar a través de ella permite que las utilidades tributen primero en primera categoría (con tasas corporativas, mucho más bajas) y solo lleguen al IGC cuando se retiran efectivamente. Esto crea un diferimiento tributario: puedes mantener utilidades en la sociedad, reinvertirlas en activos inmobiliarios u otros vehículos, y tributar el Global Complementario solo cuando efectivamente retires utilidades para consumo personal.",
          "Para el minero dependiente puro, esta palanca no aplica directamente al sueldo. Pero sí puede aplicar a una sociedad de inversión separada para los inmuebles, lo que ordena el patrimonio y simplifica la sucesión, aunque no reduce el impuesto sobre el sueldo en sí. La regla práctica: la sociedad sirve para canalizar ingresos por servicios profesionales y para tener activos. No sirve para reducir el impuesto del sueldo de planta.",
        ],
      },
      {
        h: "Gastos deducibles: el detalle que cambia todo (consultores)",
        p: [
          "Cuando un consultor minero opera como persona natural con boletas de honorarios, tiene derecho a una rebaja presunta del 30% de sus ingresos brutos (con tope anual) por gastos necesarios para producir la renta. Ese es un buen punto de partida, pero es un tope.",
          "Cuando opera a través de una Sociedad de Profesionales, puede deducir los gastos efectivos y documentados que sean necesarios para su ejercicio. Entre los más relevantes para minería:",
        ],
        list: {
          items: [
            "Arriendo de oficina o coworking en Santiago, Antofagasta, La Serena u otra plaza minera.",
            "EPP, equipos de muestreo, herramientas de campo y vestuario técnico no reembolsado por el mandante.",
            "Software técnico (Vulcan, Datamine, Leapfrog, Surpac, MineSight, Whittle), licencias y suscripciones.",
            "Capacitaciones, diplomados (PMI, certificaciones SME), congresos como Expomin, suscripciones a normas técnicas y publicaciones.",
            "Honorarios de contador, asesor tributario, asesor legal y peritos para informes técnicos.",
            "Vehículo y combustible asociados a traslados a faena no reembolsados por el cliente.",
            "Sueldos y cotizaciones de personal de apoyo (asistente técnica, modelador, dibujante).",
          ],
        },
      },
      {
        h: "APV: la palanca que aplica a TODO minero",
        p: [
          "El Ahorro Previsional Voluntario (APV) es la herramienta más accesible de reducción tributaria, y la única que aplica por igual a dependientes y consultores. Y sin embargo, casi ningún minero la usa hasta el tope. En su modalidad A (régimen general), permite deducir hasta 50 UF mensuales (600 UF anuales) de la base imponible. En la modalidad B (régimen con beneficio estatal), el Estado aporta un 15% del monto depositado anualmente, con tope, pero sin deducción de base.",
          "Para un minero en tramo alto, cada peso ahorrado en APV-A se traduce en una reducción inmediata de entre 30 y 40 centavos en su impuesto (Segunda Categoría o IGC, según el caso). Es una rentabilidad fiscal cierta, garantizada y sin riesgo de mercado. El único costo es la liquidez: esos fondos quedan restringidos hasta la jubilación, salvo situaciones específicas. Para un sueldo minero alto, llegar a las 50 UF mensuales (~$1,9 millones) es perfectamente alcanzable y debería ser la primera línea de cualquier plan tributario serio.",
        ],
      },
      {
        h: "El calendario fiscal del minero",
        p: [
          "La Operación Renta en Chile se hace todos los abriles y cubre el año calendario anterior. Pero las decisiones que impactan esa declaración se toman durante todo el año. Un minero bien asesorado trabaja con tres plazos críticos:",
        ],
        list: {
          items: [
            "Mes a mes: revisar liquidación para que el bono producción no haya generado retención excesiva por error en cálculo del tramo, y que las asignaciones estén correctamente clasificadas.",
            "Diciembre: último momento para hacer aportes a APV del año, pagar cotizaciones previsionales voluntarias, y cerrar gastos deducibles pendientes (relevante para consultores).",
            "Abril: momento de la Operación Renta, donde se consolida todo lo anterior y se paga (o recibe) la diferencia con el SII. Aunque seas dependiente puro, conviene presentar declaración si tuviste APV-A o ingresos por arriendo.",
          ],
        },
      },
      {
        h: "El ahorro real medido en años",
        p: [
          "Consideremos dos casos prácticos. Caso 1, dependiente: un supervisor minero que gana $8 millones brutos mensuales más bono ($120 millones anuales aprox.). Sin APV, paga alrededor de $32-36 millones de Segunda Categoría al año. Maximizando APV-A (50 UF mensuales) y reliquidando vía Operación Renta, puede reducir la cuenta en $7 a $10 millones anuales. A 10 años: $70-100 millones, suficiente para el pie de 3 a 4 departamentos.",
          "Caso 2, consultor: un geólogo independiente que factura $150 millones anuales por boletas. Sin estructura, paga aproximadamente $35-45 millones en Global Complementario. Estructurado en Sociedad de Profesionales con un colega, APV-A maximizado y gastos deducibles bien documentados, puede reducir esa cuenta en un 35-45%. Eso son $13-18 millones anuales. A 10 años: $130-180 millones. La diferencia entre un minero estructurado y uno sin estructura, medida en décadas, es literalmente todo su portafolio inmobiliario.",
        ],
      },
    ],
    conclusion: [
      "El impuesto que pagas no se puede evadir ni reducir con atajos. Pero sí se puede optimizar legalmente con herramientas que el propio SII reconoce: APV-A, Sociedad de Profesionales (si aplica), gastos deducibles documentados, planificación del bono producción y reliquidación vía Operación Renta cuando corresponda.",
      "La diferencia entre un minero que paga todo lo que la liquidación o el primer cálculo indica y uno que usa las palancas disponibles, no es cultural ni de privilegio. Es de asesoría. Un experto tributario con conocimiento específico del gremio puede revisar tus últimas liquidaciones (o tu Operación Renta si emites boletas) y mostrarte exactamente dónde estabas dejando dinero sobre la mesa.",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "donde-invertir-santiago-minero",
    category: "Inmobiliario",
    title: "Dónde invertir: Santiago, regiones mineras y la decisión que casi nadie analiza",
    metaDescription:
      "Ñuñoa, Las Condes, San Miguel, Antofagasta, La Serena, Iquique, Copiapó: análisis de plusvalía, rentabilidad y perfil por comuna para el inversionista minero en 2026.",
    excerpt:
      "Comparativo Santiago vs. plazas mineras regionales: cuándo conviene cada una, cap rates reales y matriz de decisión por etapa profesional.",
    cover: STOCK.blogInmobiliario,
    readMinutes: 9,
    publishedAt: "2026-03-18",
    keywords: [
      "invertir en departamentos Santiago",
      "Ñuñoa inversión",
      "Las Condes departamentos",
      "San Miguel plusvalía",
      "Santiago Centro inversión",
      "departamentos en verde",
    ],
    intro: [
      "La pregunta que todo minero se hace antes de su primera inversión: ¿dónde comprar? Para el perfil minero hay dos universos paralelos. Santiago, donde la mayoría tiene base familiar y donde se concentra la oferta más profunda y consolidada del país, y las plazas mineras regionales (Antofagasta, La Serena, Iquique, Copiapó), donde muchos viven buena parte del año por turno y donde los cap rates suelen ser más altos pero la demanda es más cíclica.",
      "Este artículo cubre ambos. Primero las 5 comunas santiaguinas que concentran la mayor parte del interés inversionista (Ñuñoa, Las Condes, San Miguel, Santiago Centro, Providencia), luego las 4 plazas regionales mineras más activas, y finalmente una matriz de decisión simple para saber cuál te conviene primero según tu etapa profesional y dónde está tu base familiar.",
      "Lo llevamos zona por zona con mirada práctica de inversionista, no de corredor de propiedades.",
    ],
    sections: [
      {
        h: "Ñuñoa: el equilibrio entre plusvalía y arriendo",
        p: [
          "Ñuñoa se consolidó durante la última década como la comuna favorita del inversionista inmobiliario chileno, y con razón. Combina ubicación céntrica, buena conectividad con líneas del Metro, oferta gastronómica y cultural consolidada, y un perfil demográfico que demanda arriendo constantemente: profesionales jóvenes, parejas sin hijos y estudiantes de postgrado.",
          "En términos numéricos: los precios por metro cuadrado han crecido entre 5% y 7% anual en UF durante los últimos 10 años. Los cap rates de arriendo se mueven entre 4,5% y 5,5% bruto. Los plazos de vacancia son típicamente inferiores a 30 días para proyectos bien ubicados cerca del Metro.",
          "Recomendación: es el mejor punto de partida para un primer o segundo departamento. Rango UF 2.500 a UF 3.800. Apuntar a unidades de 1 dormitorio o 2 dormitorios pequeños, muy demandadas en el segmento de arriendo profesional.",
        ],
      },
      {
        h: "Las Condes: el premium con retorno estable",
        p: [
          "Las Condes ofrece lo que Ñuñoa no puede: prestigio de dirección, amenidades premium en los proyectos, y un perfil de arrendatario de altísimo poder adquisitivo (ejecutivos corporativos, expatriados, profesionales senior). La plusvalía histórica es más lenta que Ñuñoa (alrededor de 3% a 4,5% anual) porque parte de una base de precio más alta, pero el flujo de caja es más estable y los arriendos en dólares son más comunes.",
          "El ticket de entrada también es mayor. Un depto pequeño en Las Condes rara vez baja de UF 4.000, y los proyectos más demandados (Nueva Las Condes, El Golf) superan fácilmente UF 6.000. Eso hace que el pie requerido sea significativamente mayor y el punto de entrada para el primer inversionista se corra hacia adelante.",
          "Recomendación: ideal como segundo o tercer depto dentro de un portafolio ya diversificado. Buscar cercanía a estaciones de Metro línea 1 o línea 6, y proyectos con amenidades completas (gimnasio, piscina, cowork, seguridad 24/7).",
        ],
      },
      {
        h: "San Miguel: el crecimiento aún no agotado",
        p: [
          "San Miguel es el caso clásico de renovación urbana en Santiago: una comuna que hasta hace una década tenía precios muy por debajo de su valor estructural y que ha ido cerrando la brecha con comunas vecinas. La llegada de líneas de Metro, la mejora del entorno urbano, y una oferta inmobiliaria nueva de buena calidad la han transformado.",
          "En términos numéricos: plusvalía anual estimada entre 6% y 8% durante los últimos años, cap rates de arriendo de los más altos de Santiago (5% a 6,5% bruto), y un mercado de arriendo activo alimentado por la cercanía al centro y al Metro.",
          "La contracara: heterogeneidad. San Miguel tiene zonas muy buenas y zonas que aún no terminan de consolidarse. Comprar bien en San Miguel exige más discriminación micro-local que en Ñuñoa o Las Condes. Aquí el valor del asesor especializado es máximo.",
          "Recomendación: excelente para inversionistas dispuestos a hacer trabajo de terreno o confiar en una asesoría local. Rango UF 1.600 a UF 2.500. Apuntar a proyectos a menos de 500m de estaciones de Metro línea 2.",
        ],
      },
      {
        h: "Santiago Centro: studios para renta corta",
        p: [
          "El Centro de Santiago tiene un perfil muy específico: alta rotación de arrendatarios, unidades pequeñas (muchas veces studios de 25 a 35 m²) y un cap rate atractivo pero con mayor exigencia de administración. Si tu estrategia es acumular varios deptos chicos de bajo ticket para diversificar riesgo, el Centro puede tener sentido.",
          "Plusvalía histórica baja o plana (alrededor de 1,5% a 3% anual) compensada por un cap rate de arriendo alto (6% a 7% bruto en unidades bien ubicadas). Es más un activo de renta que de apreciación.",
          "Recomendación: evitar para un primer departamento. Considerar solo cuando ya tienes 2-3 deptos de mejor apreciación y quieres agregar un componente de flujo puro al portafolio. Rango UF 1.200 a UF 2.000.",
        ],
      },
      {
        h: "Providencia: la alternativa madura",
        p: [
          "Providencia ofrece un punto intermedio entre Ñuñoa y Las Condes. Menos oferta nueva que Ñuñoa, pero precios comparables a Las Condes. El arrendatario tipo es profesional joven-consolidado, y el perfil de demanda es muy estable.",
          "Plusvalía anual entre 3,5% y 5%, cap rates de arriendo entre 4% y 5% bruto, y tiempos de vacancia muy bajos gracias a la calidad del entorno (Parque Bustamante, Pedro de Valdivia, Los Leones). Ticket típico entre UF 3.500 y UF 5.000.",
          "Recomendación: buena elección para quien busca estabilidad máxima con plusvalía moderada. Favorecer edificios con tradición de buena administración sobre proyectos completamente nuevos sin historial.",
        ],
      },
      {
        h: "Antofagasta: la plaza minera por excelencia",
        p: [
          "Antofagasta concentra la actividad minera más densa del país (Escondida, Spence, Sierra Gorda, Centinela, El Tesoro, Antucoya, Mantos Blancos) y eso se refleja en su mercado inmobiliario. Hay demanda permanente de arriendo de profesionales mineros en turno, ejecutivos de mandantes y contratistas, lo que sostiene cap rates entre 5,5% y 7% bruto, más altos que cualquier comuna santiaguina.",
          "La contracara: la plusvalía es más cíclica. En precios de cobre altos los precios suben rápido; en valles del ciclo se aplanan o bajan moderadamente. La plusvalía real anual histórica está entre 3% y 5% UF, pero con varianza muy mayor que en Santiago.",
          "Recomendación: ideal como segundo depto para quien ya tiene base familiar resuelta y quiere capturar arriendo de colegas mineros. Apuntar a sectores Centro, Coviefi y Jardines del Sur con cercanía a hospitales y comercio. Rango UF 1.800 a UF 3.200.",
        ],
      },
      {
        h: "La Serena y Coquimbo: arriendo minero + estabilidad costera",
        p: [
          "La Serena - Coquimbo es la base familiar favorita de muchos profesionales mineros que trabajan en faenas de la región (Andacollo, El Romeral) o que viajan en turno hacia Atacama y Antofagasta. Combina ventajas: clima estable, costa, oferta educativa privada decente, costo de vida bajo Santiago, y excelente conectividad aérea hacia las faenas del norte.",
          "Plusvalía histórica entre 4% y 6% UF anual. Cap rates de arriendo entre 4,5% y 5,5% bruto, con perfil de arrendatario familiar más estable que Antofagasta. Los proyectos costeros (Av. del Mar, Peñuelas) y del eje Cuatro Esquinas tienen mejor desempeño consistente.",
          "Recomendación: muy buena opción para primer depto si tu base familiar es la región o si planeas retirarte ahí. Rango UF 1.800 a UF 3.000.",
        ],
      },
      {
        h: "Iquique y Alto Hospicio: techo en zona franca",
        p: [
          "Iquique tiene un perfil único: zona franca, costa, casinos y un mercado de arriendo alimentado por turistas y por mineros que trabajan en faenas tarapaqueñas (Collahuasi, Cerro Colorado, Doña Inés de Collahuasi en algunos turnos, Quebrada Blanca). Los cap rates pueden ser muy atractivos, especialmente en alto-Hospicio donde el ticket de entrada es bajo.",
          "Plusvalía mixta: en Iquique centro alta demanda y plusvalía 4-6% UF; en Alto Hospicio más volátil pero ticket de entrada bajo y cap rate elevado. La consolidación urbana avanza desigual y el análisis micro-local es crítico.",
          "Recomendación: complementario, no como único depto. Útil si tu turno te lleva regularmente a Tarapacá o si tienes red de arrendatarios mineros conocidos. Rango UF 1.400 a UF 2.500.",
        ],
      },
      {
        h: "Copiapó: ticket bajo, demanda concentrada",
        p: [
          "Copiapó vive del ciclo de Atacama (Caserones, Candelaria, Mantos Copiapó, Lobo Marte). Es la plaza con ticket de entrada más bajo de las cuatro regiones mineras grandes, y eso atrae a inversionistas que buscan acumular varias unidades chicas con buenos cap rates.",
          "Plusvalía histórica volátil con sesgo bajo cuando el cobre/oro están en valle, y rebote fuerte en peaks. Cap rates de arriendo entre 6% y 8% bruto, los más altos de las cuatro plazas, pero con vacancia más alta también. La regla es clara: en Copiapó solo entras si entiendes el ciclo y aceptas la varianza.",
          "Recomendación: solo para inversionistas avanzados con apetito al ciclo minero o vínculo personal/laboral fuerte con la región. Rango UF 1.000 a UF 1.800.",
        ],
      },
      {
        h: "Matriz de decisión: ¿Santiago primero o tu plaza minera?",
        p: [
          "Para un minero con un solo depto disponible, la regla práctica es esta:",
        ],
        list: {
          items: [
            "Si tu base familiar (donde vive tu pareja/hijos o donde quieres estar tras retiro) es Santiago: comprar en Ñuñoa, Providencia o San Miguel como primera vivienda. Es el activo más seguro, plusvalía consistente y demanda de arriendo robusta si después decides arrendarlo.",
            "Si tu base familiar es regional (La Serena, Concepción, Antofagasta como ciudad): comprar en tu plaza local primero, DFL2, beneficios de primera vivienda, conoces el mercado. Santiago entra como segundo o tercer depto cuando tu portafolio esté diversificado.",
            "Si vives intensivamente en faena y aún no tienes base familiar definida: comprar primero en una plaza minera donde tengas turno regular (Antofagasta o Coquimbo son los mejores compromiso plusvalía/cap rate), úsalo durante turnos y arriéndalo a colegas en ciclo opuesto.",
            "Nunca comprar en Copiapó o Alto Hospicio como primer depto si no tienes vínculo profundo con la región.",
          ],
        },
      },
      {
        h: "Qué comunas/zonas evitar (al menos como primer depto)",
        p: [
          "Hay zonas donde la oferta parece atractiva pero el perfil de inversión no cuadra con lo que busca un minero: baja demanda de arriendo, plusvalía negativa en ciclos de corrección, o alta dependencia de factores coyunturales.",
        ],
        list: {
          items: [
            "Estación Central y cercanías: sobreoferta de departamentos de baja superficie, alta vacancia, plusvalía histórica plana a negativa.",
            "Comunas de la periferia poniente y sur de Santiago sin acceso directo a Metro: baja plusvalía, alta dependencia del ciclo inmobiliario.",
            "Sectores de Antofagasta sur (La Chimba periferia, Renca norte) con calidad urbana baja y demanda concentrada en bajo ticket.",
            "Proyectos en preventa de inmobiliarias con poco historial o sin boleta de garantía bancaria: riesgo de demora de entrega o, en el peor caso, quiebra. Especialmente crítico en regiones, donde varias inmobiliarias menores han quebrado durante valles del ciclo.",
          ],
        },
      },
    ],
    conclusion: [
      "Cada comuna y cada plaza tiene su perfil, y ningún perfil es mejor en abstracto: depende de tu etapa patrimonial, tu aversión al riesgo, tu sistema de turno, tu base familiar y tu capacidad operativa. Lo que sí es universal: el análisis micro-local siempre gana al análisis macro-urbano, y para un minero el factor 'dónde está tu vida realmente' pesa tanto como el cap rate teórico.",
      "Antes de firmar una promesa de compra, vale la pena visitar la cuadra, revisar el entorno a 500m, verificar el historial de la inmobiliaria y analizar los cap rates actuales con arrendatarios reales, no con proyecciones del folleto. Una asesoría con experiencia cerrando operaciones en Santiago Y en plazas mineras regionales puede ahorrarte el costo del error más común del inversionista primerizo: comprar donde no entiendes el mercado o pagar precios de Ñuñoa por ubicaciones de otra cosa.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getOtherArticles(currentSlug: string, max = 3): Article[] {
  return ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, max);
}
