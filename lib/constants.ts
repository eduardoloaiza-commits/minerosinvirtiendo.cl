/**
 * Número oficial de WhatsApp. Configurable via env:
 * `NEXT_PUBLIC_WHATSAPP_NUMBER` (formato E.164 sin `+`, ej. 56988181924).
 * Si la env no está seteada se usa el fallback hardcoded — el deploy
 * nunca se rompe por una variable faltante. NEXT_PUBLIC_ es necesario
 * porque el número se inlinea en links del cliente (wa.me/...).
 */
const WHATSAPP_DEFAULT = "56988181924";
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || WHATSAPP_DEFAULT;
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// Todos los CTAs del sitio van primero a la landing de pre-calificación
export const LEAD_FORM_URL = "/diagnostico";
export const LEAD_STORAGE_KEY = "mi_lead_completed";

export const FACEBOOK_PIXEL_ID = "";

export const SITE_URL = "https://minerosinvirtiendo.cl";

/**
 * Entrenamiento inmobiliario / VSL.
 * Todos los CTA hacia el entrenamiento van primero a /entrenamiento
 * (captura de lead), que luego redirige a /entrenamiento/vsl.
 */
export const ENTRENAMIENTO_URL = "/entrenamiento";
export const VSL_URL = "/entrenamiento/vsl";
export const ENTRENAMIENTO_STORAGE_KEY = "mi_entrenamiento_lead";

/**
 * Link público de Google Calendar Appointment Schedules para agendar la
 * sesión estratégica desde /entrenamiento/vsl y los success states.
 *
 * Configurable via env: `NEXT_PUBLIC_GCAL_BOOKING_URL` (debe llevar el
 * prefijo NEXT_PUBLIC_ porque se inlinea en los bundles cliente). Si la
 * env no está seteada se usa un fallback genérico — recordá setear la
 * env real para Mineros antes del deploy productivo.
 */
const GCAL_DEFAULT =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1w4gmiYSsaiN23H7xqAvecHaq-u-iWarvkGaYsPwlHFbUJhOjzCnsSpx_4vr5G4fbUF7Lhq_pT";
export const GCAL_BOOKING_URL =
  process.env.NEXT_PUBLIC_GCAL_BOOKING_URL || GCAL_DEFAULT;

/**
 * Construye la URL final de reserva con los datos del lead pre-cargados.
 * Google Calendar Appointment Schedules acepta `name` y `email` como query
 * params; si el endpoint cambia o ignora alguno, el usuario simplemente
 * tendrá que tipearlo de nuevo, no rompe el flujo.
 */
export function gcalBookingUrl(lead?: {
  nombre?: string;
  email?: string;
} | null): string {
  if (!lead) return GCAL_BOOKING_URL;
  const params = new URLSearchParams();
  if (lead.nombre) params.set("name", lead.nombre);
  if (lead.email) params.set("email", lead.email);
  const qs = params.toString();
  if (!qs) return GCAL_BOOKING_URL;
  return GCAL_BOOKING_URL.includes("?")
    ? `${GCAL_BOOKING_URL}&${qs}`
    : `${GCAL_BOOKING_URL}?${qs}`;
}

/**
 * Niveles dentro de la organización minera, usados como dropdown del
 * formulario de captura. Se persisten en la columna `etapa` del lead.
 */
export const NIVELES_MINEROS = [
  "Personal de operación",
  "Personal técnico / mantenimiento",
  "Supervisor / Capataz",
  "Ingeniero / Especialista técnico",
  "Jefatura / Gerencia",
  "Otro profesional de la minería",
];

/**
 * Video VSL principal. Cuando tengas la URL real:
 *   1. Cambia `ready` a true
 *   2. Ajusta `provider` ("youtube" | "vimeo" | "custom")
 *   3. Pon el `id`:
 *      - youtube → solo el ID (p.ej. "dQw4w9WgXcQ")
 *      - vimeo → solo el ID numérico (p.ej. "123456789")
 *      - custom → URL completa del iframe (p.ej. Wistia, VTurb)
 *
 * Mientras `ready: false`, la página /entrenamiento/vsl muestra un
 * placeholder branded en vez de un iframe vacío.
 */
export const VSL_VIDEO = {
  ready: false,
  provider: "youtube" as "youtube" | "vimeo" | "custom",
  id: "",
  title: "Centro de Diagnóstico y Estrategia Patrimonial para Mineros",
  posterText: "El video del entrenamiento se está preparando",
};

/** Logo oficial de la marca (hosteado localmente en /public/brand/). */
export const LOGO_URL = "/brand/logo.png";
/** Isotipo (solo casco minero, sin wordmark). */
export const ISOTIPO_URL = "/brand/isotipo.png";

/**
 * Imágenes stock: fotos reales de la marca viven en /public/brand/;
 * el resto son stock de Unsplash (pendiente reemplazar por fotografías
 * propias del entorno minero / equipo de trabajo).
 */
const unsplash = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const STOCK = {
  // Hero slider: Unsplash, ambiente inmobiliario / industrial
  // (pendiente reemplazar por fotos propias del equipo y operaciones mineras)
  heroApartment:      unsplash("photo-1623854767648-e7bb8009f0db", 1200),
  heroBuilding:       unsplash("photo-1502672260266-1c1ef2d93688", 1200),
  heroBanner2:        unsplash("photo-1622253694238-3b22139576c6", 1200),
  // heroMiner: fallback temporal apuntando al edificio mientras llega
  // la fotografía real del entorno minero (faena, casco, operario).
  // Cuando el cliente entregue la foto: subirla a /public/brand/ o usar
  // un Unsplash ID verificado y reactivar el 4to slide en app/page.tsx.
  heroMiner:          unsplash("photo-1502672260266-1c1ef2d93688", 1200),

  // ── Placeholder brand assets — reemplazar por fotos reales del equipo ──
  heroTeam:           "/brand/logo.png",

  // ── Unsplash (fallback para páginas donde no tenemos asset propio) ──
  heroTributario:     unsplash("photo-1554224155-6726b3ff858f"),
  heroCalcLaptop:     unsplash("photo-1460925895917-afdab827c52f"),
  heroLibrary:        unsplash("photo-1481627834876-b7833e8f5570"),
  portfolioLoft:      unsplash("photo-1522708323590-d24dbb6b0267", 800),
  portfolioGarden:    unsplash("photo-1560448204-e02f11c3d0e2", 800),
  portfolioStudio:    unsplash("photo-1556912173-3bb406ef7e77", 800),
  blogTributario:     unsplash("photo-1554224155-6726b3ff858f", 800),
  blogInmobiliario:   unsplash("photo-1512453979798-5ea266f8880c", 800),
  blogGuia:           unsplash("photo-1434626881859-194d67b2b86f", 800),
};

export type NavItem = {
  label: string;
  href: string;
  /** Si el item tiene submenú */
  children?: { label: string; href: string; description?: string }[];
};

export const NAV_LINKS: NavItem[] = [
  {
    label: "Servicios",
    href: "/servicios/inversion-departamentos-alta-plusvalia",
    children: [
      {
        label: "Inversión Inmobiliaria",
        href: "/servicios/inversion-departamentos-alta-plusvalia",
        description: "Departamentos de alta plusvalía con gestión 360°",
      },
      {
        label: "Transfórmate en Inversionista",
        href: "/servicios/transformate-en-inversionista",
        description: "Para profesionales de la minería que quieren generar ingresos pasivos",
      },
    ],
  },
  { label: "Marketplace",  href: "/marketplace" },
  { label: "El Método",    href: "/metodo" },
  { label: "Testimonios",  href: "/testimonios" },
  { label: "Noticias",     href: "/educacion-financiera-para-mineros" },
  { label: "El Equipo",    href: "/quienes-somos" },
];

export const FOOTER_LINKS = [
  {
    title: "Servicios",
    links: [
      { label: "Marketplace de Inversiones", href: "/marketplace" },
      { label: "Inversión Inmobiliaria", href: "/servicios/inversion-departamentos-alta-plusvalia" },
      { label: "Transfórmate en Inversionista", href: "/servicios/transformate-en-inversionista" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "El Método", href: "/metodo" },
      { label: "Testimonios", href: "/testimonios" },
      { label: "Noticias", href: "/educacion-financiera-para-mineros" },
      { label: "Entrenamiento", href: "/entrenamiento" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "El Equipo", href: "/quienes-somos" },
      { label: "Agendar Diagnóstico", href: "/diagnostico" },
      { label: "Políticas de Privacidad", href: "/politicas-de-privacidad" },
    ],
  },
];

/**
 * Testimonios en video. Reemplazar con cards reales de mineros que
 * hayan trabajado con el equipo. Por ahora vacío para que la sección
 * se renderice como "próximamente".
 */
export type VideoTestimonial = {
  id: string;
  name: string;
  specialty: string;
  short: boolean;
  titulo: string;
  resena: string;
};

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [];

/**
 * Equipo. Por ahora vacío: las páginas que iteran TEAM deben manejar
 * el caso de array vacío (renderizan un estado "próximamente"). Cuando
 * el cliente provea fotos + bios reales, completar acá.
 */
export const TEAM: Array<{
  role: string;
  name: string;
  photo: string;
  tagline: string;
  credentials: string[];
  color: "primary" | "teal";
}> = [];

/**
 * Convenios y membresías institucionales del sitio. Por ahora vacío;
 * cuando cerremos un convenio gremial/industrial para Mineros (Sonami,
 * gremio minero, etc.) se agrega acá.
 */
export const CONVENIOS: Array<{
  name: string;
  detail: string;
  icon: string;
  logo: string;
  logoAlt: string;
}> = [];
