"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LEAD_FORM_URL, LEAD_STORAGE_KEY, WHATSAPP_URL } from "@/lib/constants";

/**
 * Floating CTA visible en todo el sitio. Antes de completar el formulario
 * empuja al usuario a /diagnostico (para preservar trazabilidad).
 * Una vez que localStorage marca el lead como completado, el mismo botón
 * se convierte en el acceso directo a WhatsApp.
 */
export default function FloatingLeadCTA() {
  const pathname = usePathname();
  const [completed, setCompleted] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [dismissedTip, setDismissedTip] = useState(false);

  useEffect(() => {
    setCompleted(typeof window !== "undefined" && localStorage.getItem(LEAD_STORAGE_KEY) === "1");
  }, [pathname]);

  useEffect(() => {
    const t1 = setTimeout(() => setShowTip(true), 4000);
    const t2 = setTimeout(() => setShowTip(false), 14000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [completed]);

  // No mostrar en la propia página de diagnóstico
  if (pathname === LEAD_FORM_URL) return null;

  const tipText = completed
    ? "Conversa con tu asesor cuando quieras."
    : "¿Tienes dudas? Te preparamos un diagnóstico en 2 minutos.";

  const ctaLabel = completed ? "Abrir WhatsApp" : "Diagnóstico gratis";
  const ctaHref = completed ? WHATSAPP_URL : LEAD_FORM_URL;
  const bubbleColor = completed ? "bg-[#25D366]" : "bg-[#B67A2D]";
  const shadow = completed ? "shadow-[#25D366]/40" : "shadow-[#B67A2D]/40";
  const pingColor = completed ? "bg-[#25D366]" : "bg-[#B67A2D]";
  const icon = completed ? "chat" : "engineering";

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex items-end gap-2">
      {showTip && !dismissedTip && (
        <div className="relative mb-2 max-w-[240px] rounded-xl bg-white px-4 py-3 shadow-xl ring-1 ring-black/5 animate-[fadeInUp_.4s_ease-out]">
          <button
            aria-label="Cerrar"
            onClick={() => setDismissedTip(true)}
            className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#2B2B2B] text-white text-[12px] leading-none grid place-items-center shadow cursor-pointer"
          >
            ×
          </button>
          <p className="font-heading font-bold text-[13px] text-[#2B2B2B] leading-snug">
            {tipText}
          </p>
          <span className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 ring-1 ring-black/5" />
        </div>
      )}

      <Link
        href={ctaHref}
        {...(completed ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={ctaLabel}
        className={`relative grid place-items-center w-14 h-14 rounded-full ${bubbleColor} text-white shadow-xl ${shadow} hover:scale-105 transition-transform`}
      >
        <span className={`absolute inset-0 rounded-full ${pingColor} opacity-60 animate-ping`} />
        <span
          className="material-symbols-outlined relative text-[28px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {icon}
        </span>
      </Link>
    </div>
  );
}
