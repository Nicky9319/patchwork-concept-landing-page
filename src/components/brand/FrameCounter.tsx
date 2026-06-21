import { useEffect, useState } from "react";

interface FrameCounterProps {
  className?: string;
  fps?: number;
  prefix?: string;
}

export function FrameCounter({ className, fps = 24, prefix = "TC" }: FrameCounterProps) {
  const [time, setTime] = useState({ h: 0, m: 0, s: 0, f: 0 });

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000;
      const totalFrames = Math.floor(elapsed * fps);
      const h = Math.floor(totalFrames / (fps * 3600)) % 24;
      const m = Math.floor(totalFrames / (fps * 60)) % 60;
      const s = Math.floor(totalFrames / fps) % 60;
      const f = totalFrames % fps;
      setTime({ h, m, s, f });
    }, 1000 / 12);
    return () => clearInterval(interval);
  }, [fps]);

  const pad = (n: number) => String(n).padStart(2, "0");
  const blink = Math.floor(Date.now() / 500) % 2 === 0;

  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-widish text-amber ${className || ""}`}
    >
      <span className="text-paper/50">{prefix}</span>
      <span suppressHydrationWarning>
        {pad(time.h)}
        <span className={blink ? "opacity-100" : "opacity-30"}>:</span>
        {pad(time.m)}
        <span className={blink ? "opacity-100" : "opacity-30"}>:</span>
        {pad(time.s)}
        <span className="opacity-50">:</span>
        {pad(time.f)}
      </span>
    </div>
  );
}