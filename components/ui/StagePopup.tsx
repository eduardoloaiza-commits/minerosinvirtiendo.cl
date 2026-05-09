"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ETAPAS } from "@/lib/etapas";

const STORAGE_KEY = "mi_stage_popup_dismissed";

/**
 * Pop-up que pregunta al usuario en qué etapa de su carrera profesional se
 * encuentra. Aparece una vez por navegador (localStorage) y permite entrar
 * directo a la landing específica de cada etapa.
 */
export default function StagePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY) === "1") return;
    const t = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(t);
  }, []);

  const dismiss = () => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
    setOpen(false);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="stage-popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#2B2B2B]/70 backdrop-blur-sm animate-[fadeIn_.2s_ease-out]"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-[820px] w-full max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Cerrar"
          className="absolute top-4 right-4 w-9 h-9 rounded-full grid place-items-center text-[#6E6E6E] hover:bg-[#F5F0E8] hover:text-[#2B2B2B] transition-colors z-10"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
        </button>

        <div className="p-6 md:p-10">
          <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-3">
            Guía por etapa profesional
          </p>
          <h2
            id="stage-popup-title"
            className="font-heading font-bold text-[24px] md:text-[32px] text-[#2B2B2B] leading-tight tracking-[-0.01em] mb-3"
          >
            ¿En qué etapa estás?
          </h2>
          <p className="font-body text-[15px] md:text-[16px] text-[#4A463E] mb-7 leading-relaxed max-w-xl">
            Tenemos un plan de inversión específico para cada etapa profesional.
            Elige la tuya y te mostramos la guía que corresponde.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {ETAPAS.map((e) => (
              <Link
                key={e.slug}
                href={`/etapa/${e.slug}`}
                onClick={dismiss}
                className="group bg-white border border-slate-100 hover:border-[#B67A2D] hover:shadow-md rounded-2xl p-5 md:p-6 flex items-start gap-4 transition-all text-left"
              >
                <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#F5E8D0] group-hover:bg-[#B67A2D] grid place-items-center transition-colors">
                  <span
                    className="material-symbols-outlined text-[#B67A2D] group-hover:text-white text-[22px] md:text-[24px] transition-colors"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    engineering
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-heading font-bold text-[11px] tracking-[2px] uppercase text-[#B67A2D]">
                    {e.shortLabel}
                  </p>
                  <p className="font-heading font-bold text-[15px] md:text-[17px] text-[#2B2B2B] mt-1 leading-snug">
                    {e.label}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#B67A2D] font-heading font-bold text-[12px] mt-2 group-hover:gap-2 transition-all">
                    Ver guía
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={dismiss}
            className="mt-6 font-body text-[13px] text-[#6E6E6E] hover:text-[#2B2B2B] underline-offset-2 hover:underline transition-colors"
          >
            Prefiero explorar libremente
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
