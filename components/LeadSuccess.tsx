"use client";

import LeadCtas from "@/components/LeadCtas";

export type LeadData = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  etapa: string;
  tipoInversion?: string;
  ingresos?: string;
  ahorros?: string;
  meta?: string;
};

export default function LeadSuccess({ lead }: { lead: LeadData }) {
  return (
    <div className="text-center py-4">
      <div className="w-16 h-16 rounded-full bg-[#29C4A9]/15 flex items-center justify-center mx-auto mb-4">
        <span
          className="material-symbols-outlined text-[#29C4A9] text-[34px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
      </div>
      <h3 className="font-heading font-extrabold text-[#2B2B2B] text-[22px] md:text-[24px] mb-2">
        ¡Listo, {lead.nombre}!
      </h3>
      <p className="text-[#4A463E] text-[14px] md:text-[15px] mb-7 max-w-[420px] mx-auto leading-relaxed">
        Recibimos tu información. Elige cómo quieres avanzar:
      </p>

      <LeadCtas variant="stacked" />

      <p className="text-[#6E6E6E] text-[12px] mt-5 max-w-[360px] mx-auto">
        La agenda de Google Calendar se abrirá con tu nombre y correo
        precargados. WhatsApp se abre con un mensaje listo para enviar que
        incluye tu perfil para que el equipo se prepare antes.
      </p>
    </div>
  );
}
