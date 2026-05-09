"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LEAD_FORM_URL, LEAD_STORAGE_KEY } from "@/lib/constants";

/**
 * Recordatorio periódico: cada cierto tiempo en el sitio muestra un toast
 * invitando a completar el diagnóstico (puerta de entrada al WhatsApp).
 *
 * - No aparece en /diagnostico (la propia landing de formulario)
 * - No aparece si el usuario ya completó el formulario (localStorage)
 * - Se puede descartar y reaparece más tarde en la misma sesión
 */
const FIRST_DELAY_MS = 45_000;     // primera aparición: 45s
const REPEAT_DELAY_MS = 180_000;   // cada 3 min después
const DISMISS_COOLDOWN_MS = 240_000; // si se descarta, esperar 4 min

export default function LeadReminder() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(typeof window !== "undefined" && localStorage.getItem(LEAD_STORAGE_KEY) === "1");
  }, [pathname]);

  useEffect(() => {
    if (completed || pathname === LEAD_FORM_URL) return;

    let timer: ReturnType<typeof setTimeout>;
    let cycle: ReturnType<typeof setInterval>;

    timer = setTimeout(() => {
      setOpen(true);
      cycle = setInterval(() => setOpen(true), REPEAT_DELAY_MS);
    }, FIRST_DELAY_MS);

    return () => {
      clearTimeout(timer);
      if (cycle) clearInterval(cycle);
    };
  }, [pathname, completed]);

  const dismiss = () => {
    setOpen(false);
    // al descartar, damos más aire antes del próximo recordatorio
    setTimeout(() => {
      if (!completed && pathname !== LEAD_FORM_URL) setOpen(true);
    }, DISMISS_COOLDOWN_MS);
  };

  if (!open || completed || pathname === LEAD_FORM_URL) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed bottom-24 right-5 z-[55] max-w-[320px] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 p-5 animate-[fadeInUp_.4s_ease-out]"
    >
      <button
        aria-label="Cerrar recordatorio"
        onClick={dismiss}
        className="absolute top-2 right-2 w-7 h-7 rounded-full hover:bg-[#F5F0E8] grid place-items-center text-[#6E6E6E] cursor-pointer"
      >
        <span className="material-symbols-outlined text-[18px]">close</span>
      </button>

      <div className="flex items-start gap-3 mb-3">
        <span
          className="material-symbols-outlined text-[#B67A2D] text-[28px] shrink-0"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          engineering
        </span>
        <div>
          <p className="font-heading font-bold text-[15px] text-[#2B2B2B] leading-snug">
            ¿Listo para hablar con un asesor?
          </p>
          <p className="font-body text-[13px] text-[#4A463E] leading-relaxed mt-1">
            Completa tu diagnóstico (2 min) y te conectamos por WhatsApp con un miembro del equipo.
          </p>
        </div>
      </div>

      <Link
        href={LEAD_FORM_URL}
        onClick={() => setOpen(false)}
        className="block text-center w-full bg-[#B67A2D] hover:bg-[#9A6624] text-white font-heading font-bold text-[13px] tracking-[1px] uppercase py-3 rounded-lg transition-colors"
      >
        Comenzar diagnóstico
      </Link>
    </div>
  );
}
