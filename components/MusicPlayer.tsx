"use client";

import { useEffect, useRef, useState } from "react";
import { PLAYLIST } from "@/lib/playlist";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [open, setOpen] = useState(false);

  const track = PLAYLIST[index];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing, index]);

  if (PLAYLIST.length === 0) return null;

  const togglePlay = () => setPlaying((p) => !p);
  const next = () => setIndex((i) => (i + 1) % PLAYLIST.length);
  const prev = () => setIndex((i) => (i - 1 + PLAYLIST.length) % PLAYLIST.length);

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2">
      {open && (
        <div className="w-56 rounded-2xl border border-violet-400/20 bg-[#141414]/95 p-2 shadow-[0_0_24px_rgba(167,139,250,0.25)] backdrop-blur-xl">
          {PLAYLIST.map((t, i) => (
            <button
              key={t.src}
              onClick={() => {
                setIndex(i);
                setPlaying(true);
              }}
              className={`block w-full rounded-lg px-3 py-2 text-left text-xs transition-colors duration-150 ${
                i === index ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5"
              }`}
            >
              <span className="block truncate font-medium">{t.title}</span>
              <span className="block truncate text-white/40">{t.artist}</span>
            </button>
          ))}
        </div>
      )}

      <div className="relative flex items-center gap-1 rounded-full border border-violet-400/30 bg-linear-to-r from-violet-500/20 via-white/5 to-emerald-500/20 px-2 py-2 shadow-[0_0_24px_rgba(167,139,250,0.35)] backdrop-blur-xl">
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
        </span>

        <button
          onClick={prev}
          aria-label="Lagu sebelumnya"
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors duration-150 hover:text-white"
        >
          <PrevIcon />
        </button>
        <button
          onClick={togglePlay}
          aria-label={playing ? "Jeda" : "Putar"}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0a0a0a] shadow-[0_0_12px_rgba(255,255,255,0.4)]"
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>
        <button
          onClick={next}
          aria-label="Lagu berikutnya"
          className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-colors duration-150 hover:text-white"
        >
          <NextIcon />
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          className="ml-1 max-w-[7rem] truncate rounded-full px-2 py-1 text-left text-xs font-medium text-white/80 transition-colors duration-150 hover:text-white"
        >
          🎵 {track.title}
        </button>
      </div>

      <audio ref={audioRef} src={track.src} onEnded={next} />
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  );
}

function PrevIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M6 6h2v12H6zM20 6v12l-10-6z" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M16 6h2v12h-2zM4 6v12l10-6z" />
    </svg>
  );
}
