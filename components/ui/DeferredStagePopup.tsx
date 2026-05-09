"use client";

import dynamic from "next/dynamic";

/** Wrapper client para poder usar dynamic+ssr:false. El popup aparece tras
 *  900ms, no necesita estar en el bundle inicial ni bloquear LCP. */
const StagePopup = dynamic(() => import("./StagePopup"), { ssr: false });

export default function DeferredStagePopup() {
  return <StagePopup />;
}
