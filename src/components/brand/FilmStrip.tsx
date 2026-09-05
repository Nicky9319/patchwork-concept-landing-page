import { cn } from "@/lib/utils";

interface FilmStripProps {
  className?: string;
  variant?: "amber" | "subtle";
  frames?: number;
  showContent?: boolean;
}

export function FilmStrip({
  className,
  variant = "subtle",
  frames = 12,
  showContent = true,
}: FilmStripProps) {
  const stroke = variant === "amber" ? "#F5B700" : "#A8A29E";
  const fill =
    variant === "amber"
      ? "rgba(245,183,0,0.03)"
      : "rgba(28,25,23,0.02)";

  return (
    <div className={cn("relative overflow-hidden", className)} aria-hidden>
      <svg
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
        viewBox={`0 0 ${frames * 100} 80`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill={fill} />
        {Array.from({ length: frames }).map((_, i) => (
          <g key={i} transform={`translate(${i * 100}, 0)`}>
            <rect x="0" y="0" width="100" height="80" fill="none" stroke={stroke} strokeOpacity="0.12" strokeWidth="1" />
            <rect x="0" y="6" width="14" height="14" rx="1" fill="none" stroke={stroke} strokeOpacity="0.35" strokeWidth="1.2" />
            <rect x="0" y="60" width="14" height="14" rx="1" fill="none" stroke={stroke} strokeOpacity="0.35" strokeWidth="1.2" />
            <rect x="86" y="6" width="14" height="14" rx="1" fill="none" stroke={stroke} strokeOpacity="0.35" strokeWidth="1.2" />
            <rect x="86" y="60" width="14" height="14" rx="1" fill="none" stroke={stroke} strokeOpacity="0.35" strokeWidth="1.2" />
            {showContent && (
              <text
                x="50"
                y="46"
                textAnchor="middle"
                fontFamily="JetBrains Mono, monospace"
                fontSize="9"
                fill={stroke}
                fillOpacity="0.5"
                letterSpacing="1"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
