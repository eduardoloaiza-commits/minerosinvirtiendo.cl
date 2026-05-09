"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { VideoTestimonial } from "@/lib/constants";

type Props = {
  videos: VideoTestimonial[];
  /** Título de sección */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

/**
 * Grid de testimonios en video. Usa thumbnails de YouTube (sin iframe) hasta
 * que el usuario hace click, recién ahí se monta el iframe en modal.
 * Esto protege el LCP y evita que 6 iframes de YouTube bloqueen la carga.
 */
export default function VideoTestimonials({
  videos,
  eyebrow = "Testimonios",
  title = "Historias reales de profesionales que confiaron",
  subtitle = "Escucha en primera persona cómo fue la experiencia de quienes dieron el paso de cuidar su patrimonio con la misma disciplina con que cuidan a sus pacientes.",
}: Props) {
  const [playing, setPlaying] = useState<VideoTestimonial | null>(null);

  // Cerrar con ESC
  useEffect(() => {
    if (!playing) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPlaying(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [playing]);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = playing ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [playing]);

  return (
    <section className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <p className="font-heading font-bold text-[11px] tracking-[4px] uppercase text-[#B67A2D] mb-4">
          {eyebrow}
        </p>
        <h2 className="font-heading font-bold text-[22px] sm:text-[30px] md:text-[38px] text-[#2B2B2B] leading-tight tracking-[-0.01em] mb-3">
          {title}
        </h2>
        <p className="font-body text-[16px] text-[#4A463E] leading-relaxed">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((v) => (
          <VideoCard key={v.id} video={v} onPlay={() => setPlaying(v)} />
        ))}
      </div>

      {playing && <VideoModal video={playing} onClose={() => setPlaying(null)} />}
    </section>
  );
}

function VideoCard({
  video,
  onPlay,
}: {
  video: VideoTestimonial;
  onPlay: () => void;
}) {
  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;
  return (
    <article className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-[#B67A2D] hover:shadow-xl transition-all flex flex-col">
      <button
        type="button"
        onClick={onPlay}
        className="relative block w-full aspect-video bg-[#2B2B2B] overflow-hidden cursor-pointer"
        aria-label={`Ver testimonio de ${video.name}`}
      >
        <Image
          src={thumb}
          alt={`Testimonio de ${video.name}, ${video.specialty}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B]/70 via-transparent to-transparent" />
        <div className="absolute inset-0 grid place-items-center">
          <span
            className="grid place-items-center w-16 h-16 rounded-full bg-white/95 shadow-lg group-hover:scale-110 transition-transform"
          >
            <span
              className="material-symbols-outlined text-[#B67A2D] text-[36px] ml-1"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              play_arrow
            </span>
          </span>
        </div>
        {video.short && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur text-[#2B2B2B] text-[10px] font-bold tracking-[0.05em] uppercase px-2 py-1 rounded">
            Short
          </span>
        )}
        <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 text-white text-[12px] font-semibold">
          <span className="material-symbols-outlined text-[16px]">play_circle</span>
          Ver testimonio
        </span>
      </button>
      <div className="p-6 flex flex-col flex-1">
        <p className="font-heading font-bold text-[11px] tracking-[2px] uppercase text-[#B67A2D] mb-2">
          {video.specialty}
        </p>
        <h3 className="font-heading font-bold text-[18px] text-[#2B2B2B] leading-snug mb-1">
          {video.name}
        </h3>
        <p className="font-body text-[14px] text-[#B67A2D] font-semibold mb-3 italic">
          “{video.titulo}”
        </p>
        <p className="font-body text-[14px] text-[#4A463E] leading-relaxed flex-1">
          {video.resena}
        </p>
      </div>
    </article>
  );
}

function VideoModal({
  video,
  onClose,
}: {
  video: VideoTestimonial;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Testimonio de ${video.name}`}
      className="fixed inset-0 z-[70] bg-[#2B2B2B]/85 backdrop-blur-sm grid place-items-center p-4 animate-[fadeIn_.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-[960px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute -top-12 right-0 text-white/80 hover:text-white flex items-center gap-1.5 text-[14px] font-semibold"
        >
          <span className="material-symbols-outlined text-[22px]">close</span>
          Cerrar
        </button>

        <div
          className="relative w-full bg-black rounded-xl overflow-hidden shadow-2xl"
          style={{ aspectRatio: video.short ? "9 / 16" : "16 / 9", maxHeight: "82vh" }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={`Testimonio de ${video.name}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <div className="mt-4 text-white">
          <p className="font-heading font-bold text-[12px] tracking-[2px] uppercase text-[#E8C28A] mb-1">
            {video.specialty}
          </p>
          <p className="font-heading font-bold text-[20px] leading-tight">
            {video.name} · <span className="italic font-normal text-white/80">“{video.titulo}”</span>
          </p>
        </div>
      </div>
    </div>
  );
}
