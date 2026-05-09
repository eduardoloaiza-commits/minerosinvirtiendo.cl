"use client";

import { useRef, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

type Props = {
  videoId: string;
  title: string;
};

export default function YouTubeLite({ videoId, title }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const iframe = wrapperRef.current?.querySelector("iframe");
    if (!iframe?.contentWindow) return;
    const func = muted ? "unMute" : "mute";
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func, args: [] }),
      "*",
    );
    setMuted(!muted);
  };

  return (
    <div
      ref={wrapperRef}
      className="absolute inset-0 w-full h-full"
      onClick={() => setActivated(true)}
    >
      <LiteYouTubeEmbed
        id={videoId}
        title={title}
        poster="maxresdefault"
        muted
        params="controls=0&rel=0&modestbranding=1&enablejsapi=1"
        webp
        wrapperClass="yt-lite mi-yt-fill"
        playerClass="lty-playbtn"
      />
      {activated && (
        <>
          <div className="absolute top-0 left-0 right-0 h-[70px] md:h-[80px] z-20 pointer-events-auto" aria-hidden />
          <div className="absolute bottom-0 right-0 w-[110px] h-[50px] z-20 pointer-events-auto" aria-hidden />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleSound();
            }}
            className="absolute bottom-4 left-4 md:bottom-5 md:left-5 z-30 inline-flex items-center gap-2 bg-[#B67A2D] hover:bg-[#9A6624] active:scale-95 text-white pl-3 pr-4 py-2.5 md:pl-4 md:pr-5 md:py-3 rounded-full font-heading font-bold text-[12px] md:text-[14px] shadow-lg shadow-black/40 transition-all"
            aria-label={muted ? "Activar sonido" : "Silenciar"}
          >
            <span
              className="material-symbols-outlined text-[20px] md:text-[22px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {muted ? "volume_off" : "volume_up"}
            </span>
            {muted && <span>Activar sonido</span>}
          </button>
        </>
      )}
    </div>
  );
}
