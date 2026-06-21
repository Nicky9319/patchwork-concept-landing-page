import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, showWordmark = true, size = "md" }: LogoProps) {
  const dims = {
    sm: { box: 28, font: "text-base", gap: "gap-2" },
    md: { box: 36, font: "text-xl", gap: "gap-3" },
    lg: { box: 48, font: "text-3xl", gap: "gap-4" },
  }[size];

  return (
    <div className={cn("inline-flex items-center", dims.gap, className)}>
      <svg
        width={dims.box}
        height={dims.box}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden
      >
        <rect x="2" y="2" width="44" height="44" rx="6" fill="#F5B700" />
        <rect x="2" y="2" width="44" height="44" rx="6" stroke="#0B0908" strokeWidth="2" />
        <circle cx="9" cy="9" r="1.6" fill="#0B0908" />
        <circle cx="9" cy="24" r="1.6" fill="#0B0908" />
        <circle cx="9" cy="39" r="1.6" fill="#0B0908" />
        <circle cx="39" cy="9" r="1.6" fill="#0B0908" />
        <circle cx="39" cy="24" r="1.6" fill="#0B0908" />
        <circle cx="39" cy="39" r="1.6" fill="#0B0908" />
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fontFamily="Fraunces, serif"
          fontWeight="900"
          fontSize="24"
          fill="#0B0908"
        >
          P
        </text>
      </svg>
      {showWordmark && (
        <span
          className={cn(
            "font-display font-black tracking-tightest text-paper leading-none",
            dims.font
          )}
        >
          Patchwork
        </span>
      )}
    </div>
  );
}