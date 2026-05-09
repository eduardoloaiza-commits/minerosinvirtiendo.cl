"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type HeroSlide = {
  src: string;
  alt: string;
};

type Props = {
  slides: HeroSlide[];
  /** Aspect ratio del contenedor. */
  aspect?: string;
  /** ms entre slides */
  intervalMs?: number;
  /** overlay a mostrar sobre la imagen (ej: card de stats) */
  children?: React.ReactNode;
};

/**
 * Slider responsivo para el hero. Usa transición suave de opacidad entre slides,
 * auto-advance y dots manuales. Se pausa al hacer hover o al tocar en mobile.
 */
export default function HeroSlider({
  slides,
  aspect = "5 / 4",
  intervalMs = 6000,
  children,
}: Props) {
  const [index, setIndex] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      if (!pausedRef.current) {
        setIndex((i) => (i + 1) % slides.length);
      }
    }, intervalMs);
    return () => clearInterval(t);
  }, [slides.length, intervalMs]);

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl"
      style={{ aspectRatio: aspect }}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
      }}
      onTouchStart={() => {
        pausedRef.current = true;
      }}
      onTouchEnd={() => {
        pausedRef.current = false;
      }}
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlay (card de stats) */}
      {children && <div className="absolute inset-0 z-20 pointer-events-none">{children}</div>}

      {/* Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir al slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-7 bg-white shadow-md"
                  : "w-2 bg-white/60 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
