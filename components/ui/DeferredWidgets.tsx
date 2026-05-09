"use client";

import dynamic from "next/dynamic";

/**
 * Modales/CTAs flotantes globales: no son críticos para LCP/FCP y usan APIs
 * del navegador (localStorage, window). Se cargan con dynamic+ssr:false
 * desde este wrapper cliente para que no pesen en el bundle inicial.
 */

const FloatingLeadCTA = dynamic(() => import("./FloatingLeadCTA"), {
  ssr: false,
});
const LeadReminder = dynamic(() => import("./LeadReminder"), {
  ssr: false,
});
const LeadCaptureModal = dynamic(() => import("./LeadCaptureModal"), {
  ssr: false,
});

export default function DeferredWidgets() {
  return (
    <>
      <FloatingLeadCTA />
      <LeadReminder />
      <LeadCaptureModal />
    </>
  );
}
