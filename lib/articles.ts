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
    slug: "sociedades-medicas-primer-paso",
    category: "Tributario",
    title:
      "Sociedades Profesionales: el primer paso para una inversión eficiente",
    metaTitle:
      "Sociedad de Profesionales para Mineros en Chile | Guía 2026",
    metaDescription:
      "Cómo una Sociedad de Profesionales reduce legalmente tu Impuesto Global Complementario y libera capital para invertir. Requisitos SII, beneficios concretos y cuándo te conviene constituirla.",
    excerpt:
      "Por qué la estructura legal que elijas determina cuánto pagas al SII y cuánto te queda para invertir en ladrillo.",
    cover: STOCK.blogTributario,
    readMinutes: 7,
    publishedAt: "2026-04-22",
    keywords: [
      "sociedad de profesionales",
      "Impuesto Global Complementario",
      "SII",
      "boleta de honorarios",
      "operación renta",
      "tributación mineros Chile",
    ],
    intro: [
      "La mayoría de los mineros en Chile comienza su vida profesional emitiendo boletas de honorarios. Es el camino por defecto: rápido, simple, sin burocracia inicial. Pero cuando los ingresos crecen, ese mismo camino se vuelve una trampa fiscal. Tramo tras tramo, el Impuesto Global Complementario se lleva una porción cada vez mayor de lo que podría convertirse en patrimonio.",
      "La pregunta no es si vale la pena estructurarse, sino cuándo. Para la mayoría de los especialistas en ejercicio, la respuesta está en una figura legal específica que el SII reconoce y que fue diseñada justamente para quienes ejercen una profesión liberal: la Sociedad de Profesionales.",
      "En este artículo desarmamos qué es, por qué importa y cómo se convierte en el primer paso real hacia una inversión eficiente.",
    ],
    sections: [
      {
        h: "Qué es una Sociedad de Profesionales",
        p: [
          "Una Sociedad de Profesionales es una persona jurídica constituida por dos o más profesionales del mismo rubro o complementarios, que presta servicios de carácter profesional y cumple ciertos requisitos definidos por el SII para ser considerada como tal. No es lo mismo que una EIRL, una SpA común ni una sociedad comercial: tiene un tratamiento tributario distinto.",
          "Su característica más relevante es que los servicios profesionales prestados bajo esta figura están exentos de IVA, siempre y cuando cumpla las condiciones exigidas por el SII. Esto no solo ahorra el 19% a quienes la usan: también permite acogerse al régimen Pro-Pyme transparente o al régimen general con tasas corporativas muy por debajo del Global Complementario en tramos altos.",
        ],
      },
      {
        h: "Beneficios tributarios concretos",
        p: [
          "Estructurarte como Sociedad de Profesionales te habilita al menos tres palancas fiscales reales, todas legales y todas usadas hoy por miles de mineros en Chile:",
        ],
        list: {
          items: [
            "Exención de IVA sobre tus servicios profesionales, siempre que la sociedad califique formalmente (cumpliendo los requisitos de profesionales, giro exclusivo y régimen tributario).",
            "Acceso a regímenes Pro-Pyme con tasas de primera categoría reducidas y contabilidad simplificada, lo que disminuye el costo operativo del contador.",
            "Deducción de gastos necesarios para producir la renta: arriendo de consulta, insumos, equipos, capacitaciones, contador, asesoría legal, transporte asociado al ejercicio profesional y más.",
            "Separación formal entre tu patrimonio personal y el patrimonio de la sociedad, lo que agrega una capa de protección frente a litigios profesionales.",
          ],
        },
      },
      {
        h: "Requisitos del SII para calificar",
        p: [
          "No cualquier empresa con mineros dentro califica como Sociedad de Profesionales. El SII exige condiciones específicas que conviene conocer antes de constituirla:",
        ],
        list: {
          items: [
            "Que al menos dos de los socios sean profesionales del mismo rubro o de rubros afines, con títulos reconocidos por el Estado.",
            "Que el giro exclusivo de la sociedad sea la prestación de servicios profesionales (no puede mezclar servicios comerciales o producción).",
            "Que los socios ejerzan efectivamente la profesión dentro de la sociedad (no ser solo capitalistas).",
            "Que la sociedad no explote capital como actividad principal (por ejemplo, no puede ser una sociedad de inversión disfrazada).",
          ],
        },
      },
      {
        h: "Cuándo conviene constituirla",
        p: [
          "La respuesta depende de cuánto factures hoy por boleta de honorarios y cuánta parte de eso se va en Global Complementario. Una regla práctica: si tu ingreso anual por honorarios supera los 1.500 UF y tu tramo marginal ya está sobre el 30%, la sociedad empieza a hacer sentido financiero. A niveles mayores, el ahorro anual puede perfectamente cubrir la entrada de un departamento.",
          "El momento ideal también depende de tu etapa de vida profesional. Un profesional en formación que recién termina su período de formación tiene menos urgencia que un supervisor consolidado con 5 años de ejercicio. Pero cuanto antes se estructure, antes empiezan a acumularse los beneficios año tras año.",
        ],
      },
      {
        h: "Errores comunes al estructurarse",
        p: [
          "Constituir la sociedad es solo el primer paso. Los errores aparecen en la operación diaria: mezclar gastos personales con los de la sociedad, no llevar contabilidad al día, no timbrar documentos electrónicos o, peor, tratar de forzar deducciones que el SII puede cuestionar en una eventual fiscalización.",
          "El otro error clásico es constituirla sola, sin coordinarla con la estrategia patrimonial. Una Sociedad de Profesionales que no conversa con tu plan inmobiliario termina siendo solo un ahorro fiscal aislado, en vez de ser la palanca que acelera tu construcción patrimonial. El valor real aparece cuando el ahorro tributario se reinvierte directamente en activos que generan plusvalía y renta.",
        ],
      },
      {
        h: "El puente entre tributario e inmobiliario",
        p: [
          "El dinero que dejas de pagar al SII tiene dos destinos posibles: gasto o inversión. La mayoría de los mineros que estructuran su sociedad sin un plan patrimonial terminan viendo ese ahorro diluirse en gasto corriente a los pocos años. La minoría que sí tiene un plan reinvierte esos recursos en departamentos que crecen 4% anual en plusvalía histórica y generan renta todos los meses.",
          "Esa diferencia, medida en 10 años, es la distancia entre llegar al retiro con una renta previsional marginal o con un patrimonio inmobiliario que paga dividendos todos los meses. La Sociedad de Profesionales es el vehículo, pero la dirección la define tu estrategia de inversión.",
        ],
      },
    ],
    conclusion: [
      "Estructurarte como Sociedad de Profesionales no es un truco contable ni un atajo fiscal. Es una decisión estratégica de largo plazo que se vuelve más valiosa cuanto antes la tomes y cuanto mejor la coordines con tu plan patrimonial global.",
      "Si quieres evaluar si te conviene hoy, un asesor puede revisar tu última Operación Renta, tu nivel de ingresos y tu estructura actual para estimar el ahorro anual proyectado y el camino más corto hacia tu meta patrimonial.",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "inmobiliario-refugio-especialistas",
    category: "Inmobiliario",
    title:
      "Por qué el sector inmobiliario es el refugio favorito de los especialistas",
    metaDescription:
      "Plusvalía histórica, rentas estables y una barrera de entrada financiera que favorece a los profesionales de alta renta. Por qué mineros eligen el ladrillo en Chile.",
    excerpt:
      "Plusvalía histórica, rentas estables y una barrera de entrada que favorece a quienes tienen ingresos profesionales estables.",
    cover: STOCK.blogInmobiliario,
    readMinutes: 6,
    publishedAt: "2026-04-15",
    keywords: [
      "inversión inmobiliaria Chile",
      "plusvalía",
      "invertir en departamentos",
      "propiedades de inversión",
      "patrimonio neto",
      "libertad financiera",
    ],
    intro: [
      "Cada vez que un grupo de especialistas se reúne a hablar de finanzas personales, la conversación termina en el mismo lugar: el ladrillo. No es casualidad. En Chile, el sector inmobiliario ha sido, sostenidamente por más de dos décadas, la inversión favorita de quienes ejercen una profesión liberal de alta renta.",
      "La razón no es cultural ni emocional. Es estructural. El ladrillo combina cuatro atributos que rara vez coinciden en otro vehículo de inversión: apreciación histórica sobre IPC, flujo constante de renta, apalancamiento bancario accesible y protección contra volatilidad. Revisemos cada uno.",
    ],
    sections: [
      {
        h: "Plusvalía histórica en Chile",
        p: [
          "Los precios de los departamentos en Santiago y principales regiones han crecido en promedio entre un 4% y un 6% anual en UF durante los últimos 10 a 15 años, según datos públicos de corredoras y cámaras sectoriales. En comunas de alta demanda como Ñuñoa, Las Condes o Santiago Centro, ese crecimiento ha superado sostenidamente al retorno bruto de instrumentos conservadores como depósitos a plazo o fondos mutuos de renta fija.",
          "La plusvalía no es garantía y no se comporta linealmente: hay años planos y episodios de corrección. Pero la tendencia estructural está sostenida por tres fuerzas que no cambian fácilmente: escasez de suelo en zonas consolidadas, déficit habitacional nacional y crecimiento demográfico urbano. Para un horizonte de 10 a 20 años, que es el de la mayoría de los mineros invirtiendo, esas fuerzas siguen jugando a favor.",
        ],
      },
      {
        h: "Activo tangible vs. activo financiero",
        p: [
          "Un departamento es un activo que puedes ver, tocar y arrendar. Un fondo mutuo es una línea en un estado de cuenta que sube y baja según factores que no controlas. Para un profesional con poco tiempo para monitorear mercados, la tangibilidad no es un lujo: es una forma de estabilidad emocional que permite tomar decisiones de largo plazo sin estar revisando precios todos los días.",
          "Esto también influye en el comportamiento ante crisis. Durante shocks económicos, los precios inmobiliarios tienden a corregir menos y más lentamente que los activos financieros, y los arriendos tienden a mantenerse, porque la demanda de vivienda no desaparece. Eso convierte al inmobiliario en un ancla emocional y financiera dentro de un portafolio diversificado.",
        ],
      },
      {
        h: "Apalancamiento bancario: el multiplicador",
        p: [
          "Aquí es donde el inmobiliario se vuelve especialmente poderoso para un profesional de alta renta. Los bancos en Chile financian hasta el 80% del valor del departamento vía crédito hipotecario en UF, a plazos de hasta 30 años. Esto significa que con un pie del 20%, el inversionista controla el 100% del activo, y se beneficia del 100% de la plusvalía sobre ese valor.",
          "Veámoslo en números. Un departamento de $90 millones con un pie de $18 millones. Si el activo se aprecia 4% anual, el primer año la plusvalía es $3,6 millones. Pero esos $3,6 millones se generan sobre un pie de $18 millones: la rentabilidad efectiva sobre capital propio es del 20% anual, solo por apreciación. Si además el activo arrienda a 5% anual bruto, el retorno total sobre capital propio supera cómodamente el 25% en escenarios conservadores.",
          "Ningún fondo mutuo, APV o depósito a plazo puede competir con eso de forma sostenida. El apalancamiento bancario es un multiplicador que solo está disponible para quienes pueden calificar con buena renta y estabilidad, y los mineros son exactamente ese perfil.",
        ],
      },
      {
        h: "Renta mensual: flujo que no pregunta",
        p: [
          "Un departamento arrendado genera ingresos todos los meses, independiente de lo que hagan las bolsas, el peso, el dólar o el ánimo del mercado. Para un profesional que quiere diversificar ingresos y construir independencia financiera, ese flujo constante es una herramienta única.",
          "En proyectos bien elegidos, la renta cubre el dividendo del crédito hipotecario. El activo se paga solo. El propietario aporta el pie inicial y, con paciencia, recibe a los 25 años un patrimonio completo, libre de deuda, revalorizado y seguido generando renta mensual. Esa es la fórmula del patrimonio pasivo.",
        ],
      },
      {
        h: "Barrera de entrada que premia a los altos ingresos",
        p: [
          "Invertir en un departamento exige capital, calificación crediticia y paciencia. Las tres cosas son abundantes en un profesional de la minería consolidado, y escasas en el promedio. Esa asimetría convierte al inmobiliario en una categoría donde el minero no compite contra todo el mercado, sino contra una fracción pequeña: otros profesionales de alta renta.",
          "En mercados donde todos pueden entrar fácilmente, las oportunidades se agotan rápido y los retornos se comprimen. En el inmobiliario, la barrera natural mantiene los retornos atractivos para quienes sí pueden entrar. Es exactamente la dinámica que un minero inversionista debe buscar: un mercado donde su perfil es una ventaja, no un obstáculo.",
        ],
      },
    ],
    conclusion: [
      "Por plusvalía histórica, tangibilidad, apalancamiento y flujo mensual, el ladrillo sigue siendo la inversión favorita del especialista chileno. Y no está por casualidad. Es el vehículo que mejor se adapta a un profesional con alta capacidad de ahorro, estabilidad de ingresos y poco tiempo para gestionar operaciones complejas.",
      "Por supuesto, invertir bien en inmobiliario requiere elegir bien el proyecto, estructurar bien el crédito y gestionar profesionalmente el arriendo. Ese es el trabajo operativo que no todos los mineros quieren hacer, y justamente donde una asesoría patrimonial especializada se vuelve rentable.",
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
      "La libertad financiera no es un número abstracto. Para un especialista en Chile, es un punto concreto: el momento en que tus activos generan suficiente renta para que ejercer sea una elección y no una necesidad. En el marco inmobiliario chileno, ese punto se ubica típicamente cerca de los $300 millones de patrimonio neto.",
      "Con esa cifra, una renta pasiva mensual bruta cercana al millón y medio de pesos se vuelve realista. No es riqueza extrema: es autonomía. Es la posibilidad de trabajar los labor que quieres, no todos los que puedes, y de heredar a tus hijos algo más que tu credencial.",
      "Esta guía es el mapa de ruta para llegar ahí antes de los 50 años, empezando hoy.",
    ],
    sections: [
      {
        h: "Paso 1: Diagnóstica tu punto de partida",
        p: [
          "Antes de hablar de dónde invertir, hay que saber desde dónde partes. El diagnóstico patrimonial honesto es la base de toda estrategia seria. Incluye tres preguntas que la mayoría de los profesionales evita mirar con calma:",
        ],
        list: {
          items: [
            "¿Cuál es tu ingreso real neto anual, después de cotizaciones, Global Complementario y gastos fijos?",
            "¿Cuál es tu capacidad real de ahorro mensual promedio de los últimos 12 meses, no la que te gustaría tener?",
            "¿Cuál es tu pasivo vigente (créditos de consumo, tarjetas, hipotecarios, leasing) y a qué tasa promedio está?",
          ],
        },
      },
      {
        h: "Paso 2: Define el número que quieres alcanzar",
        p: [
          "La meta de $300 millones no es una convención: es el resultado de un cálculo simple. Suponiendo una renta pasiva anual del 5% bruto, ese patrimonio genera $15 millones al año, equivalentes a $1,25 millones mensuales antes de impuestos. Es la banda mínima para que un especialista mantenga su calidad de vida sin depender del ejercicio activo.",
          "Por supuesto, la meta se puede ajustar a tu realidad. Un minero en regiones con costo de vida menor puede apuntar a $200 millones. Un especialista con familia numerosa y educación privada puede necesitar $500 millones. La meta es personal, pero el método para llegar es universal.",
        ],
      },
      {
        h: "Paso 3: Estructura tu vehículo legal",
        p: [
          "Invertir como persona natural es caro fiscalmente. Cada peso que ganes tributa en tu tramo de Global Complementario y cada utilidad realizada suma a tu base imponible. Antes de comprar el primer activo, estructura una Sociedad de Profesionales si ejerces clínicamente, y considera una sociedad de inversión separada para tener los activos inmobiliarios.",
          "Esta arquitectura legal separa claramente tres flujos: tu ingreso profesional, tu patrimonio inmobiliario y tu patrimonio personal. Simplifica sucesiones, optimiza impuestos y protege cada capa en caso de litigio profesional. Es la infraestructura invisible que sostiene la estrategia visible.",
        ],
      },
      {
        h: "Paso 4: Compra tu primer departamento",
        p: [
          "El primer departamento es el más importante, no por rentabilidad sino por inercia. Es el que destrabá la psicología del inversionista. Aprende a leer contratos, a negociar con la inmobiliaria, a coordinar notaría y banco, a lidiar con el arriendo. Esa experiencia vale más que el retorno específico del proyecto.",
          "Para un primer depto, la recomendación estándar es un proyecto en verde o entrega inmediata entre UF 2.000 y UF 3.500, en comunas con alta demanda de arriendo: Ñuñoa, Santiago Centro, San Miguel. Evita especular con segundas líneas o proyectos sin historial de la inmobiliaria. El primer depto es para aprender, no para maximizar.",
        ],
      },
      {
        h: "Paso 5: Escala de 2 a 5 departamentos",
        p: [
          "Aquí la estrategia se vuelve financiera pura. El objetivo es acumular entre 2 y 5 departamentos en un horizonte de 8 a 15 años, aprovechando que cada depto adquirido genera plusvalía, renta y capacidad crediticia adicional para el siguiente.",
          "La matemática es clara: con un ahorro mensual promedio de $600.000 y aportes iniciales razonables, es posible adquirir un nuevo departamento cada 2 a 3 años. Al cabo de 12 años, un portafolio de 4 a 5 deptos puede superar cómodamente los $300 millones netos, considerando apreciación y amortización de deuda. Es aritmética paciente, no apuesta.",
        ],
      },
      {
        h: "Paso 6: Automatiza la gestión",
        p: [
          "Un portafolio inmobiliario de 5 deptos administrado por el mismo minero es una carga operativa enorme: arriendos, morosidades, reparaciones, declaración de rentas, contratos. Eso consume el tiempo que originalmente querías liberar. La solución no es administrarlo mejor: es delegarlo profesionalmente.",
          "Hoy existen empresas especializadas en gestión de arriendo para inversionistas de alta renta. Cobran entre 6% y 10% de la renta bruta, pero a cambio se encargan de todo: búsqueda de arrendatario, firma de contratos, cobranza, pagos de gastos comunes, declaraciones tributarias del arriendo, reparaciones menores. El ahorro de tiempo y energía vale cada peso.",
        ],
      },
      {
        h: "Paso 7: Protege lo que construiste",
        p: [
          "Cuando tu patrimonio supere los $150-200 millones, entran en juego dos consideraciones que no existían antes: blindaje patrimonial y planificación sucesoria. Un litigio profesional o un divorcio mal estructurado pueden erosionar años de esfuerzo en meses.",
          "Las herramientas disponibles en Chile incluyen: seguros de responsabilidad civil profesional, separación formal entre patrimonio conyugal y propio, uso estratégico de sociedades para tenencia de activos, y pactos sucesorios o testamentos claros. Ninguna es costosa comparada con el patrimonio que protege.",
        ],
      },
    ],
    conclusion: [
      "Llegar a los $300 millones no es una hazaña; es una consecuencia lógica de aplicar este método con disciplina durante 10 a 15 años. El verdadero diferencial entre quien lo logra y quien no, rara vez es el ingreso. Casi siempre es la estructura, la constancia y el acompañamiento experto en las decisiones clave.",
      "Si quieres trazar tu propio camino con números específicos, el punto de partida es siempre el diagnóstico. Con tu situación actual, un asesor puede proyectar cuánto y cuándo puedes alcanzar tu meta, y qué decisiones deberías tomar este año para acelerarla.",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "credito-hipotecario-medicos-guia",
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
      "Para un minero, negociar bien el crédito hipotecario vale más que elegir bien el departamento. Este artículo es una guía práctica para entender cómo te ven los bancos, qué palancas tienes a tu favor y cómo extraer la mejor tasa del mercado.",
    ],
    sections: [
      {
        h: "Cómo evalúan los bancos a un profesional de la minería",
        p: [
          "Los bancos en Chile evalúan un crédito hipotecario sobre tres pilares: capacidad de pago, estabilidad de ingresos y comportamiento crediticio. Los mineros y tecnólogos mineros suelen destacar en los tres.",
          "En capacidad de pago, los ingresos profesionales de la minería generalmente superan con holgura el múltiplo exigido de dividendo/renta. En estabilidad, el ejercicio clínico se percibe como una actividad resiliente frente a ciclos económicos. Y en comportamiento, un minero joven rara vez arrastra morosidades, lo que lo ubica entre los perfiles más deseados por los ejecutivos hipotecarios.",
          "Ese posicionamiento es una palanca real. La mayoría de los bancos tiene canales preferenciales (no siempre publicitados) para convenios con asociaciones mineras, clínicas y universidades. Ingresar por el canal correcto puede significar entre 50 y 100 puntos base de diferencia en la tasa final: miles de UF en 25 años.",
        ],
      },
      {
        h: "UF vs. pesos: por qué los hipotecarios van siempre en UF",
        p: [
          "En Chile, prácticamente todos los créditos hipotecarios se otorgan en Unidades de Fomento (UF), una unidad que se reajusta diariamente según la variación del IPC. Esto protege al banco de la inflación y le permite ofrecer tasas de interés reales más bajas.",
          "Para el deudor, esto significa que el dividendo en pesos se reajusta mes a mes con la inflación. A cambio, el saldo también se reajusta, lo que puede parecer desventaja inicialmente. En la práctica, como los arriendos y los ingresos profesionales también se ajustan con inflación en el mediano plazo, el crédito UF tiende a mantenerse neutral.",
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
        h: "Estrategia de apalancamiento progresivo",
        p: [
          "La diferencia entre un minero con un departamento y uno con cinco, generalmente no está en cuánto ahorran por mes. Está en cómo usan el crédito. La estrategia de apalancamiento progresivo consiste en reutilizar la plusvalía acumulada de una propiedad para financiar el pie de la siguiente.",
          "A los 3-4 años de adquirido el primer depto, su valor de mercado suele haber crecido entre 15% y 25% y la deuda haber bajado por amortización. Esa diferencia (equity) puede respaldar, mediante crédito o refinanciamiento, el pie del segundo departamento. Repetido con disciplina, ese mecanismo permite construir un portafolio de 4-5 deptos sin necesidad de aportar cada pie completo desde ahorro fresco.",
        ],
      },
    ],
    conclusion: [
      "Un crédito hipotecario bien negociado es una herramienta financiera de primera línea. Un crédito mal negociado es una hipoteca literal sobre tus próximos 25 años. La diferencia entre ambos escenarios son unas cuantas horas de trabajo, algunas cotizaciones en paralelo y saber qué pedir.",
      "Si vas a comprar tu primer departamento o estás evaluando refinanciar uno existente, el acompañamiento de un asesor que conozca las mesas hipotecarias de múltiples bancos y mutuarias puede marcar una diferencia medible en tasa, seguros y estructura del crédito.",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "impuesto-global-complementario-medicos",
    category: "Tributario",
    title: "Impuesto Global Complementario: cómo pagan menos los especialistas",
    metaDescription:
      "Tramos del Impuesto Global Complementario 2026, estrategias legales para reducir la base imponible del minero y calendario fiscal del año.",
    excerpt:
      "Cómo funciona el Global Complementario, cuánto pierdes realmente con boletas de honorarios y las palancas legales para pagar menos.",
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
      "El Impuesto Global Complementario (IGC) es, para la mayoría de los mineros en Chile, el mayor gasto anual después de la vivienda. Y también el menos visible: no aparece como un débito mensual, no se siente en el flujo de caja, pero aparece de golpe en abril con un monto que puede equivaler a 2 o 3 meses de ingresos netos.",
      "Entender cómo funciona y qué palancas legales existen para reducirlo es, probablemente, la mejor inversión de tiempo que un minero joven puede hacer en materia financiera. En este artículo revisamos los tramos vigentes, cómo te golpea cuando facturas por boleta de honorarios, y qué estructuras y movimientos concretos pueden bajarte legalmente la cuenta.",
    ],
    sections: [
      {
        h: "Cómo funciona el Global Complementario",
        p: [
          "El IGC es un impuesto progresivo que grava la renta anual total de las personas naturales en Chile. Progresivo significa que tiene tramos: los primeros ingresos tributan a tasa baja (o 0%) y los tramos superiores tributan a tasas cada vez más altas, hasta un máximo del 40%.",
          "En términos prácticos, cuando un minero factura por boleta de honorarios, el SII le retiene inicialmente un 13% al momento de emitir cada boleta. Esa retención es un pago a cuenta: en la Operación Renta de abril del año siguiente, se recalcula la cifra real según el tramo final del minero y se ajusta con un pago adicional (casi siempre) o, raramente, con una devolución.",
          "Para un especialista que factura entre $60 y $120 millones anuales por honorarios, el tramo marginal termina típicamente entre el 30,4% y el 35%. Eso significa que, sobre cada peso adicional ganado en la franja alta, más de un tercio se va al SII.",
        ],
      },
      {
        h: "Boleta de honorarios vs. Sociedad de Profesionales",
        p: [
          "La mayor diferencia estructural para un minero está en el vehículo con que cobra sus servicios. Emitir boletas de honorarios envía cada peso directamente al tramo marginal del Global Complementario. Cobrar a través de una Sociedad de Profesionales permite que las utilidades tributen primero en primera categoría (con tasas corporativas, mucho más bajas) y solo lleguen al IGC cuando se retiran efectivamente.",
          "Esto crea un diferimiento tributario: puedes mantener utilidades en la sociedad, reinvertirlas en activos inmobiliarios u otros vehículos, y tributar el Global Complementario solo cuando efectivamente retires utilidades para consumo personal. En términos financieros, es como tener un crédito fiscal sin intereses.",
        ],
      },
      {
        h: "Gastos deducibles: el detalle que cambia todo",
        p: [
          "Cuando un minero opera como persona natural con boletas de honorarios, tiene derecho a una rebaja presunta del 30% de sus ingresos brutos (con tope anual) por gastos necesarios para producir la renta. Ese es un buen punto de partida, pero es un tope.",
          "Cuando opera a través de una Sociedad de Profesionales, puede deducir los gastos efectivos y documentados que sean necesarios para su ejercicio. Entre los más relevantes están:",
        ],
        list: {
          items: [
            "Arriendo o gastos asociados al espacio de consulta u oficina.",
            "Equipamiento minero, insumos clínicos y material técnico.",
            "Capacitaciones, congresos, cursos de especialización y suscripciones académicas.",
            "Honorarios de contador, asesor tributario y asesor legal.",
            "Vehículo y combustible asociados al ejercicio profesional.",
            "Sueldos y cotizaciones de personal de apoyo (secretaria, asistente).",
          ],
        },
      },
      {
        h: "APV: la palanca que casi nadie usa al máximo",
        p: [
          "El Ahorro Previsional Voluntario (APV) es la herramienta más accesible de reducción de IGC, y sin embargo, casi ningún minero la usa hasta el tope. En su modalidad A (régimen general), permite deducir hasta 50 UF mensuales de la base imponible. En la modalidad B (régimen con beneficio estatal), el Estado aporta un 15% del monto depositado anualmente, con tope.",
          "Para un minero en tramo alto, cada peso ahorrado en APV A se traduce en una reducción inmediata de entre 30 y 35 centavos en su IGC. Es una rentabilidad fiscal cierta, garantizada y sin riesgo de mercado. El único costo es la liquidez: esos fondos quedan restringidos hasta la jubilación, salvo situaciones específicas.",
        ],
      },
      {
        h: "El calendario fiscal del minero",
        p: [
          "La Operación Renta en Chile se hace todos los abriles y cubre el año calendario anterior. Pero las decisiones que impactan esa declaración se toman durante todo el año. Un minero bien asesorado trabaja con dos plazos críticos:",
        ],
        list: {
          items: [
            "Diciembre: último momento para hacer aportes a APV del año, pagar cotizaciones previsionales voluntarias, y cerrar gastos deducibles pendientes.",
            "Abril: momento de la Operación Renta, donde se consolida todo lo anterior y se paga (o recibe) la diferencia con el SII.",
          ],
        },
      },
      {
        h: "El ahorro real medido en años",
        p: [
          "Consideremos un caso práctico concreto. Un minero que factura $100 millones brutos al año por boleta de honorarios, sin estructura adicional, paga aproximadamente $20 a $25 millones en Global Complementario. Ese mismo minero, estructurado en Sociedad de Profesionales, con APV maximizado y gastos deducibles bien documentados, puede reducir esa cuenta en un 30% a 40%.",
          "Eso son $7 a $10 millones anuales de ahorro fiscal legal. A 10 años, sin considerar efectos compuestos, son entre $70 y $100 millones. Suficiente para el pie de 4 a 5 departamentos. La diferencia entre un minero estructurado y uno sin estructura, medida en décadas, es literalmente todo su portafolio inmobiliario.",
        ],
      },
    ],
    conclusion: [
      "El Global Complementario no se puede evadir ni reducir con atajos. Pero sí se puede optimizar legalmente con herramientas que el propio SII reconoce: Sociedad de Profesionales, APV, gastos deducibles documentados y planificación del calendario fiscal.",
      "La diferencia entre un minero que paga todo lo que el primer cálculo indica y uno que usa las palancas disponibles, no es cultural ni de privilegio. Es de asesoría. Un experto tributario con conocimiento específico del gremio puede revisar tu Operación Renta del último año y mostrarte exactamente dónde estabas dejando dinero sobre la mesa.",
    ],
  },

  /* ─────────────────────────────────────────────────────────── */
  {
    slug: "donde-invertir-santiago-medico",
    category: "Inmobiliario",
    title: "Dónde invertir en Santiago: guía por comuna para profesionales de alta renta",
    metaDescription:
      "Ñuñoa, Las Condes, San Miguel, Santiago Centro: análisis de plusvalía, rentabilidad y perfil de cada comuna para inversión inmobiliaria minera en 2026.",
    excerpt:
      "Ñuñoa, Las Condes, San Miguel, Santiago Centro: análisis comparativo de plusvalía, rentabilidad y perfil de arrendatario por comuna.",
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
      "La pregunta que todo minero se hace antes de su primera inversión: ¿dónde comprar? En Santiago hay más de 30 comunas con oferta de departamentos nuevos, pero solo 4 a 5 concentran la mayor parte del interés inversionista: Ñuñoa, Las Condes, San Miguel, Santiago Centro y Providencia.",
      "Cada una tiene un perfil distinto de plusvalía esperada, cap rate de arriendo, tipo de arrendatario y rango de precio. Elegir la comuna correcta para tu etapa y perfil financiero puede significar la diferencia entre un activo que crece 3% o que crece 6% anual durante la próxima década.",
      "En este artículo te llevamos zona por zona con una mirada práctica de inversionista, no de corredor de propiedades.",
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
        h: "Qué comunas evitar (al menos como primer depto)",
        p: [
          "Hay zonas donde la oferta parece atractiva pero el perfil de inversión no cuadra con lo que busca un minero: baja demanda de arriendo, plusvalía negativa en ciclos de corrección, o alta dependencia de factores coyunturales.",
        ],
        list: {
          items: [
            "Estación Central y cercanías: sobreoferta de departamentos de baja superficie, alta vacancia, plusvalía histórica plana a negativa.",
            "Comunas de la periferia poniente y sur sin acceso directo a Metro: baja plusvalía, alta dependencia del ciclo inmobiliario.",
            "Proyectos en preventa de inmobiliarias con poco historial o sin boleta de garantía bancaria: riesgo de demora de entrega o, en el peor caso, quiebra.",
          ],
        },
      },
    ],
    conclusion: [
      "Cada comuna tiene su perfil, y ningún perfil es mejor en abstracto: depende de tu etapa patrimonial, tu aversión al riesgo, tu horizonte y tu capacidad operativa. Lo que sí es universal: el análisis micro-local siempre gana al análisis macro-urbano.",
      "Antes de firmar una promesa de compra, vale la pena visitar la cuadra, revisar el entorno a 500m, verificar el historial de la inmobiliaria y analizar los cap rates actuales con arrendatarios reales, no con proyecciones del folleto. Una asesoría local con experiencia cerrando operaciones en Santiago puede ahorrarte el costo del error más común del inversionista primerizo: pagar precios de Ñuñoa por ubicaciones de otra cosa.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getOtherArticles(currentSlug: string, max = 3): Article[] {
  return ARTICLES.filter((a) => a.slug !== currentSlug).slice(0, max);
}
