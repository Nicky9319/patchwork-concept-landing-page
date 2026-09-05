/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F8F8F7",
        "surface-hover": "#F0F0EE",
        border: "#E7E5E4",
        "border-strong": "#D7D5D4",
        foreground: "#1C1917",
        muted: "#57534E",
        subtle: "#A8A29E",
        accent: {
          DEFAULT: "#F5B700",
          glow: "#FFC93C",
          subtle: "#FEF3C7",
        },
        "accent-text": "#1C1917",
        success: "#16A34A",
        "success-subtle": "#F0FDF4",
        warning: "#D97706",
        "warning-subtle": "#FFFBEB",
        danger: "#DC2626",
        "danger-subtle": "#FEF2F2",
        // Legacy warm palette kept for reference during migration.
        // Prefer the semantic tokens above for all new work.
        ink: "#0B0908",
        paper: "#F4ECD8",
        amber: {
          DEFAULT: "#F5B700",
          glow: "#FFC93C",
        },
        rust: "#D9480F",
        mute: "#8B7E6B",
        cream: "#EDE3CC",
        charcoal: "#1A1714",
        line: "#2A241E",
      },
      fontFamily: {
        display: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Bricolage Grotesque"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.05em",
        widish: "0.04em",
      },
      borderRadius: {
        xl: "0.875rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.92" },
          "52%": { opacity: "0.4" },
          "54%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        frame: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        ticker: "ticker 22s linear infinite",
        flicker: "flicker 6s linear infinite",
        slideUp: "slideUp 0.8s cubic-bezier(0.16,1,0.3,1) both",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
        frame: "frame 18s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
