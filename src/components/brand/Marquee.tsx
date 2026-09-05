import { cn } from "@/lib/utils";

interface MarqueeProps {
  items?: string[];
  className?: string;
  variant?: "ticker" | "marquee";
  separator?: string;
  speed?: number;
}

export function Marquee({
  items = [
    "NOW SHOWING",
    "v2.4.0 — release reel available",
    "breaking change detected: auth.provider",
    "12 commits rendered",
    "3 social clips queued",
    "automatic changelog",
    "instant migration guide",
  ],
  className,
  variant = "marquee",
  separator = "✦",
  speed = 40,
}: MarqueeProps) {
  const content = (
    <div className="flex items-center gap-8 whitespace-nowrap px-4">
      {[...items, ...items, ...items, ...items].map((item, i) => (
        <span
          key={i}
          className="font-mono text-[11px] uppercase tracking-widish text-muted flex items-center gap-8"
        >
          <span>{item}</span>
          <span className="text-accent">{separator}</span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-border bg-surface py-3 marquee-mask",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max",
          variant === "marquee" ? "animate-marquee" : "animate-ticker"
        )}
        style={
          variant === "marquee"
            ? { animationDuration: `${speed}s` }
            : undefined
        }
      >
        {content}
      </div>
    </div>
  );
}
