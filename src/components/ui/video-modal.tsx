import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { captureEvent } from "@/lib/analytics";

type Chapter = {
  label: string;
  /** Start time in seconds */
  at: number;
};

type Props = {
  src: string;
  poster?: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  subtitle?: string;
  chapters?: Chapter[];
};

const DEFAULT_CHAPTERS: Chapter[] = [
  { label: "Git Push", at: 0 },
  { label: "CI / CD", at: 4 },
  { label: "Patchwork", at: 9 },
  { label: "Generating", at: 13 },
  { label: "Reel", at: 18 },
  { label: "Distribution", at: 23 },
  { label: "CTA", at: 29 },
];

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function VideoModal({
  src,
  poster,
  open,
  onOpenChange,
  title = "Patchwork — Release Reel",
  subtitle = "Watch the full workflow · 32s",
  chapters = DEFAULT_CHAPTERS,
}: Props) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrubberRef = React.useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [volume, setVolume] = React.useState(0.8);
  const [muted, setMuted] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [hasStarted, setHasStarted] = React.useState(false);

  // Reset state when modal closes
  React.useEffect(() => {
    if (!open) {
      const v = videoRef.current;
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
      setIsPlaying(false);
      setCurrentTime(0);
      setHasStarted(false);
    }
  }, [open]);

  // Apply volume to video
  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = muted;
    }
  }, [volume, muted, open]);

  // Keyboard handlers
  React.useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      const v = videoRef.current;
      if (!v) return;
      switch (e.key) {
        case "Escape":
          e.preventDefault();
          closeModal();
          break;
        case " ":
        case "k":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowLeft":
          e.preventDefault();
          v.currentTime = Math.max(0, v.currentTime - 5);
          break;
        case "ArrowRight":
          e.preventDefault();
          v.currentTime = Math.min(v.duration || 0, v.currentTime + 5);
          break;
        case "m":
          e.preventDefault();
          setMuted((m) => !m);
          break;
        case "f":
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, duration]);

  // Lock body scroll when open
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Fullscreen change detection
  React.useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  const trackVideo = (event: string, props: Record<string, string | number | boolean | undefined> = {}) => {
    captureEvent(event, { video_title: title, duration, ...props });
  };

  const closeModal = () => {
    onOpenChange(false);
    trackVideo("video_closed", { current_time: currentTime });
  };

  const togglePlay = React.useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setHasStarted(true);
      trackVideo("video_played", { current_time: v.currentTime });
    } else {
      v.pause();
      trackVideo("video_paused", { current_time: v.currentTime });
    }
  }, [title, duration]);

  const toggleFullscreen = React.useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    const entering = !document.fullscreenElement;
    if (entering) {
      el.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
    trackVideo("video_fullscreen_toggled", { state: entering ? "entered" : "exited" });
  }, [title, duration]);

  const seekTo = (seconds: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(duration || 0, seconds));
  };

  const onScrubberPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrubberRef.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    seekFromEvent(e);
  };

  const onScrubberPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrubberRef.current;
    if (!el || !el.hasPointerCapture(e.pointerId)) return;
    seekFromEvent(e);
  };

  const seekFromEvent = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrubberRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seekTo(pct * (duration || 0));
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;
  const activeChapterIdx = React.useMemo(() => {
    let idx = 0;
    for (let i = 0; i < chapters.length; i++) {
      if (currentTime >= chapters[i].at) idx = i;
    }
    return idx;
  }, [currentTime, chapters]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            onClick={closeModal}
            className="absolute inset-0 bg-foreground/40 backdrop-blur-md"
            aria-hidden
          />

          {/* Container */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-6 mb-4 px-1">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widish text-accent">
                  <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulseSoft" />
                  Now Playing · Reel 024
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-black text-foreground tracking-tightest leading-none">
                  {title}
                </h2>
                <p className="font-mono text-[11px] text-muted tracking-widish">
                  {subtitle}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="group flex items-center gap-2 border border-border bg-white hover:border-accent hover:text-accent text-muted px-4 py-2 font-mono text-[10px] uppercase tracking-widish transition-colors shadow-sm"
                aria-label="Close video"
              >
                Close
                <X size={14} className="transition-transform group-hover:rotate-90" />
              </button>
            </div>

            {/* Video frame */}
            <div className="pro-frame relative overflow-hidden bg-white">
              {/* Top metadata bar */}
              <div className="flex items-center justify-between border-b border-border px-5 py-2.5 bg-surface">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widish text-muted uppercase">
                    patchwork-promo.mp4 · 1280×720 · 30fps
                  </span>
                </div>
                <div className="flex items-center gap-4 font-mono text-[10px] tracking-widish text-muted">
                  <span className="hidden sm:inline text-accent">AUTO-GENERATED</span>
                  <span className="text-subtle">
                    {formatTime(duration)} TOTAL
                  </span>
                </div>
              </div>

              {/* Player */}
              <div className="relative aspect-video bg-surface overflow-hidden">
                <video
                  ref={videoRef}
                  src={src}
                  poster={poster}
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-label="Patchwork release reel — workflow demo"
                  onLoadedMetadata={(e) => {
                    setDuration(e.currentTarget.duration);
                  }}
                  onTimeUpdate={(e) => {
                    setCurrentTime(e.currentTarget.currentTime);
                  }}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    setIsPlaying(false);
                    trackVideo("video_finished", { duration });
                  }}
                />

                {/* Center play button overlay — visible only before play */}
                <AnimatePresence>
                  {!hasStarted && !isPlaying && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={togglePlay}
                      className="absolute inset-0 flex items-center justify-center bg-foreground/10 group"
                      aria-label="Play video"
                    >
                      <span className="flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-full bg-accent text-accent-text shadow-2xl group-hover:scale-110 transition-transform">
                        <Play size={32} fill="currentColor" className="ml-1" />
                      </span>
                    </motion.button>
                  )}
                </AnimatePresence>

                {/* Subtle "PAUSED" badge when paused mid-playback */}
                {!isPlaying && hasStarted && currentTime > 0 && currentTime < duration && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-foreground/10 group"
                    aria-label="Resume video"
                  >
                    <span className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-white text-foreground shadow-2xl group-hover:scale-110 transition-transform">
                      <Play size={28} fill="currentColor" className="ml-1" />
                    </span>
                  </button>
                )}
              </div>

              {/* Controls */}
              <div className="border-t border-border bg-surface px-4 md:px-5 py-3 flex flex-col gap-3">
                {/* Chapter markers row */}
                <div className="hidden md:flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widish text-muted">
                  {chapters.map((c, i) => (
                    <button
                      key={c.label}
                      onClick={() => {
                        seekTo(c.at);
                        trackVideo("video_chapter_clicked", {
                          chapter_label: c.label,
                          chapter_time: c.at,
                        });
                      }}
                      className={cn(
                        "flex items-center gap-1.5 px-1.5 py-1 hover:text-accent transition-colors",
                        i === activeChapterIdx && "text-accent"
                      )}
                      title={`Jump to ${c.label} (${formatTime(c.at)})`}
                    >
                      <span
                        className={cn(
                          "inline-block h-1 w-1 rounded-full",
                          i === activeChapterIdx
                            ? "bg-accent"
                            : i < activeChapterIdx
                            ? "bg-muted"
                            : "bg-border-strong"
                        )}
                      />
                      {c.label}
                    </button>
                  ))}
                </div>

                {/* Scrubber */}
                <div
                  ref={scrubberRef}
                  onPointerDown={onScrubberPointerDown}
                  onPointerMove={onScrubberPointerMove}
                  onPointerUp={(e) => {
                    const el = scrubberRef.current;
                    if (el && el.hasPointerCapture(e.pointerId)) {
                      el.releasePointerCapture(e.pointerId);
                    }
                    trackVideo("video_seeked", { to_time: currentTime });
                  }}
                  className="relative h-1.5 w-full cursor-pointer group bg-border"
                >
                  {/* Hover/buffer track */}
                  <div className="absolute inset-0 bg-border" />
                  {/* Progress */}
                  <div
                    className="absolute inset-y-0 left-0 bg-accent"
                    style={{ width: `${progressPct}%` }}
                  />
                  {/* Chapter ticks */}
                  {chapters.map((c) => {
                    const left = duration > 0 ? (c.at / duration) * 100 : 0;
                    return (
                      <div
                        key={c.label}
                        className="absolute top-0 bottom-0 w-px bg-muted"
                        style={{ left: `${left}%` }}
                        aria-hidden
                      />
                    );
                  })}
                  {/* Thumb */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ left: `${progressPct}%` }}
                  />
                </div>

                {/* Control row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="flex items-center justify-center h-9 w-9 rounded-full border border-accent bg-accent text-accent-text hover:bg-accent-glow transition-colors"
                      aria-label={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" className="ml-0.5" />}
                    </button>
                    <button
                      onClick={() => seekTo(0)}
                      className="text-muted hover:text-accent transition-colors"
                      aria-label="Restart"
                      title="Restart"
                    >
                      <RotateCcw size={14} />
                    </button>
                    <div className="font-mono text-[11px] text-muted tabular-nums">
                      <span className="text-foreground">{formatTime(currentTime)}</span>
                      <span className="text-subtle mx-1">/</span>
                      <span className="text-muted">{formatTime(duration)}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setMuted((m) => !m)}
                      className="text-muted hover:text-accent transition-colors"
                      aria-label={muted ? "Unmute" : "Mute"}
                    >
                      {muted || volume === 0 ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    </button>
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={muted ? 0 : volume}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        setVolume(v);
                        if (v > 0) setMuted(false);
                      }}
                      className="w-20 md:w-24 accent-accent cursor-pointer"
                      aria-label="Volume"
                    />
                    <button
                      onClick={toggleFullscreen}
                      className="ml-2 text-muted hover:text-accent transition-colors"
                      aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                    >
                      <Maximize size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom hint */}
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1 font-mono text-[10px] text-muted tracking-widish">
              <span>
                <kbd className="border border-border bg-white px-1.5 py-0.5 text-muted">SPACE</kbd>{" "}
                play/pause ·{" "}
                <kbd className="border border-border bg-white px-1.5 py-0.5 text-muted">←</kbd>{" "}
                <kbd className="border border-border bg-white px-1.5 py-0.5 text-muted">→</kbd>{" "}
                skip 5s ·{" "}
                <kbd className="border border-border bg-white px-1.5 py-0.5 text-muted">M</kbd>{" "}
                mute ·{" "}
                <kbd className="border border-border bg-white px-1.5 py-0.5 text-muted">F</kbd>{" "}
                fullscreen
              </span>
              <span className="text-subtle">ESC to close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
