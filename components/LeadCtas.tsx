"use client";

import { useSyncExternalStore } from "react";
import {
  ENTRENAMIENTO_STORAGE_KEY,
  GCAL_BOOKING_URL,
  WHATSAPP_NUMBER,
  gcalBookingUrl,
} from "@/lib/constants";
import { formatoLabel } from "@/lib/marketplace";

type Lead = {
  nombre?: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  etapa?: string;
  tipoInversion?: string;
  ingresos?: string;
  ahorros?: string;
  meta?: string;
};

const META_LABELS: Record<string, string> = {
  primera: "Realizar mi primera inversión inmobiliaria",
  diversificar: "Diversificar mi patrimonio existente",
  credito: "Aprovechar mi capacidad crediticia actual",
  todo: "Todo lo anterior, quiero el panorama completo",
};

// Cache para mantener referencia estable entre renders y evitar loops
// con useSyncExternalStore.
let cached: { raw: string | null; lead: Lead | null } | null = null;

function readSnapshot(): Lead | null {
  if (typeof window === "undefined") return null;
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(ENTRENAMIENTO_STORAGE_KEY);
  } catch {
    raw = null;
  }
  if (cached && cached.raw === raw) return cached.lead;
  let lead: Lead | null = null;
  if (raw) {
    try {
      lead = JSON.parse(raw) as Lead;
    } catch {
      lead = null;
    }
  }
  cached = { raw, lead };
  return lead;
}

function subscribe(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = (e: StorageEvent) => {
    if (e.key === ENTRENAMIENTO_STORAGE_KEY || e.key === null) onChange();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

function getServerSnapshot(): Lead | null {
  return null;
}

function bookingUrl(lead: Lead | null): string {
  if (!lead) return GCAL_BOOKING_URL;
  const fullName = `${lead.nombre ?? ""} ${lead.apellido ?? ""}`.trim();
  if (!fullName && !lead.email) return GCAL_BOOKING_URL;
  return gcalBookingUrl({
    nombre: fullName || lead.nombre,
    email: lead.email,
  });
}

function whatsappMessage(lead: Lead | null): string {
  if (!lead) {
    return "Hola, vengo del sitio de Mineros Invirtiendo y quiero conversar sobre mi diagnóstico patrimonial.";
  }
  const fullName = `${lead.nombre ?? ""} ${lead.apellido ?? ""}`.trim();
  const tipo = lead.tipoInversion ? formatoLabel(lead.tipoInversion) : "";
  const metaLabel = lead.meta
    ? META_LABELS[lead.meta] ?? lead.meta
    : "";
  const lines: string[] = [];
  lines.push(
    `Hola, soy ${fullName}${lead.etapa ? `, ${lead.etapa}` : ""}.`,
  );
  const detail: string[] = [];
  if (tipo) detail.push(`Formato de inversión que me interesa: ${tipo}`);
  if (lead.ingresos) detail.push(`Ingresos mensuales: ${lead.ingresos}`);
  if (lead.ahorros) detail.push(`Ahorros disponibles: ${lead.ahorros}`);
  if (metaLabel) detail.push(`Meta: ${metaLabel}`);
  if (detail.length > 0) {
    lines.push("");
    lines.push(...detail);
  }
  lines.push("");
  lines.push("Quiero conversar sobre mi diagnóstico patrimonial.");
  return lines.join("\n");
}

function whatsappUrl(lead: Lead | null): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage(lead))}`;
}

type Variant = "stacked" | "row" | "row-light";

type Props = {
  variant?: Variant;
  /** Override completo del className del botón Agendar. */
  bookingClassName?: string;
  /** Override completo del className del botón WhatsApp. */
  whatsappClassName?: string;
  /** Override del wrapper exterior. */
  containerClassName?: string;
};

const DEFAULT_BOOKING =
  "inline-flex items-center justify-center gap-2.5 font-heading font-bold text-[13px] md:text-[14px] tracking-[1.5px] uppercase bg-[#B67A2D] text-white px-7 py-4 rounded-xl hover:bg-[#9A6624] active:scale-[0.99] transition-all shadow-lg shadow-[#B67A2D]/30";

const DEFAULT_WHATSAPP =
  "inline-flex items-center justify-center gap-2.5 font-heading font-bold text-[13px] md:text-[14px] tracking-[1.5px] uppercase bg-[#25D366] text-white px-7 py-4 rounded-xl hover:bg-[#1db954] active:scale-[0.99] transition-all shadow-lg shadow-[#25D366]/30";

export default function LeadCtas({
  variant = "stacked",
  bookingClassName,
  whatsappClassName,
  containerClassName,
}: Props) {
  const lead = useSyncExternalStore(subscribe, readSnapshot, getServerSnapshot);

  const defaultContainer =
    variant === "row" || variant === "row-light"
      ? "flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center"
      : "flex flex-col gap-3 max-w-[360px] mx-auto";

  return (
    <div className={containerClassName ?? defaultContainer}>
      <a
        href={bookingUrl(lead)}
        target="_blank"
        rel="noopener noreferrer"
        className={bookingClassName ?? DEFAULT_BOOKING}
      >
        <span
          className="material-symbols-outlined text-[20px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          event
        </span>
        Agendar reunión
      </a>
      <a
        href={whatsappUrl(lead)}
        target="_blank"
        rel="noopener noreferrer"
        className={whatsappClassName ?? DEFAULT_WHATSAPP}
      >
        <span
          className="material-symbols-outlined text-[20px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          chat
        </span>
        Conversar por WhatsApp
      </a>
    </div>
  );
}
