import { ArrowRight, Play, Github, Sparkles, Maximize2, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VideoModal } from "@/components/ui/video-modal";
import { FrameCounter } from "@/components/brand/FrameCounter";
import { FilmStrip } from "@/components/brand/FilmStrip";
import { captureEvent } from "@/lib/analytics";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");

    captureEvent("request_invite_submitted", {
      location: "hero",
      email: email.trim().toLowerCase(),
    });

    // Simulate async submission. Replace this with your real API call.
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  };

  const openVideo = () => {
    setVideoOpen(true);
    captureEvent("video_opened", { location: "hero_player" });
  };

  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 bg-background">
      {/* Decorative film strips — very subtle on light */}
      <FilmStrip className="absolute top-32 -left-10 w-[120%] h-8 opacity-30" variant="subtle" />
      <FilmStrip className="absolute top-44 -left-10 w-[120%] h-8 opacity-20" variant="amber" frames={14} />

      {/* Background atmosphere */}
      <div className="absolute inset-0 paper-texture pointer-events-none" aria-hidden />
      <div className="absolute inset-0 grid-paper opacity-[0.03] pointer-events-none" aria-hidden />

      {/* Spotlight */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(245,183,0,0.10) 0%, transparent 60%)",
        }}
        aria-hidden
      />

      <div className="container relative">
        {/* Top status row */}
        <div className="flex items-center justify-between mb-12 reveal reveal-1">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulseSoft" />
            <span className="font-mono text-[10px] uppercase tracking-widish text-muted">
              Reel 024 · Now recording · 2026.06
            </span>
          </div>
          <FrameCounter className="hidden sm:inline-flex" />
        </div>

        {/* Headline block */}
        <div className="max-w-[1100px]">
          <div className="reveal reveal-2">
            <span className="inline-flex items-center gap-2 border border-accent/50 bg-accent-subtle px-3 py-1.5 font-mono text-[10px] uppercase tracking-widish text-accent-text mb-8">
              <Sparkles size={11} />
              Private beta · Invite only
            </span>
          </div>

          <h1 className="font-display text-[44px] sm:text-[72px] md:text-[96px] lg:text-[120px] leading-[0.92] tracking-tightest text-foreground text-balance reveal reveal-3">
            Every release deserves a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic font-light">release</span>{" "}
              <span className="relative z-10 text-accent">reel</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M0 6 Q 50 0, 100 6 T 200 6"
                  stroke="#F5B700"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-muted leading-relaxed text-pretty reveal reveal-4">
            Patchwork hooks into your CI/CD and turns every merged PR into a
            release reel — changelogs, breaking-change walkthroughs, migration
            guides, and short-form clips — generated{" "}
            <span className="text-foreground font-medium">while you ship</span>, not
            six weeks after.
          </p>

          {/* Signup form */}
          <form
            id="signup"
            className="mt-10 max-w-xl flex flex-col sm:flex-row gap-3 reveal reveal-5"
            onSubmit={handleSubmit}
          >
            <div className="flex-1">
              <Label htmlFor="email-hero" className="sr-only">
                Email
              </Label>
              <Input
                id="email-hero"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "success") setStatus("idle");
                }}
                placeholder="founder@yourcompany.dev"
                required
                disabled={status === "submitting"}
              />
            </div>
            {status === "success" ? (
              <div className="inline-flex h-14 items-center justify-center gap-2 px-6 font-mono text-xs uppercase tracking-widish font-bold bg-success text-white whitespace-nowrap">
                <Check size={14} />
                You're on the list
              </div>
            ) : (
              <Button
                type="submit"
                size="lg"
                className="group"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? (
                  "Requesting..."
                ) : (
                  <>
                    Request invite
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </Button>
            )}
          </form>
          <p className="mt-3 font-mono text-[11px] text-subtle reveal reveal-6">
            {status === "success"
              ? "We'll be in touch within 3 days."
              : "412 teams on the waitlist. ~3 day turnaround. No credit card."}
          </p>
        </div>

        {/* Hero player mockup */}
        <div className="mt-20 md:mt-28 reveal reveal-6">
          <HeroPlayer onOpenVideo={openVideo} />
        </div>
      </div>

      <VideoModal
        src="/patchwork-promo.mp4"
        poster="/patchwork-promo-poster.png"
        open={videoOpen}
        onOpenChange={setVideoOpen}
      />
    </section>
  );
}

function HeroPlayer({ onOpenVideo }: { onOpenVideo: () => void }) {
  return (
    <div className="relative">
      {/* Corner labels */}
      <div className="absolute -top-6 left-0 font-mono text-[10px] uppercase tracking-widish text-subtle flex items-center gap-2">
        <span className="inline-block h-px w-6 bg-border-strong" />
        FEATURED REEL
      </div>
      <div className="absolute -top-6 right-0 font-mono text-[10px] uppercase tracking-widish text-subtle hidden sm:flex items-center gap-2">
        PATCHWORK · AUTO-GENERATED
        <span className="inline-block h-px w-6 bg-border-strong" />
      </div>

      <div className="pro-frame relative overflow-hidden">
        {/* Top metadata bar */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3 bg-surface">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-subtle/60" />
            </div>
            <span className="font-mono text-[11px] tracking-widish text-muted uppercase">
              patchwork-promo.mp4 · 1280×720 · 30fps
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px] tracking-widish text-muted">
            <span className="hidden sm:inline text-accent">AUTO-GENERATED</span>
            <span className="text-subtle">00:32 / 00:32</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px]">
          {/* Video preview — clickable to open modal */}
          <button
            type="button"
            onClick={onOpenVideo}
            className="relative aspect-video bg-surface overflow-hidden text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Open release reel video player"
          >
            <video
              src="/patchwork-promo.mp4"
              poster="/patchwork-promo-poster.png"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              aria-label="Patchwork release reel — auto-generated explainer"
            />
            {/* REC indicator overlay */}
            <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px] tracking-widish text-foreground/80 z-10">
              <span className="inline-block h-2 w-2 rounded-full bg-danger animate-pulseSoft" />
              REC · LIVE
            </div>
            {/* Expand-to-modal affordance (always visible) */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 border border-border bg-white/80 backdrop-blur-sm px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-widish text-muted group-hover:border-accent group-hover:text-accent transition-colors">
              <Maximize2 size={10} />
              Expand
            </div>
            {/* Hover play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-background/0 group-hover:bg-background/30 transition-colors z-10">
              <span className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-accent text-accent-text shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={22} fill="currentColor" className="ml-0.5" />
              </span>
            </div>
          </button>

          {/* Side panel: generated artifacts */}
          <div className="border-t lg:border-t-0 lg:border-l border-border bg-surface/60 p-5 flex flex-col gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widish text-muted mb-2">
                Generated artifacts
              </div>
              <ul className="space-y-2">
                {[
                  { ext: "MP4", label: "release-reel-v2.4.0", size: "18.4 MB", accent: "accent" },
                  { ext: "MD", label: "CHANGELOG", size: "4.2 KB", accent: "foreground" },
                  { ext: "MD", label: "MIGRATION.md", size: "2.1 KB", accent: "danger" },
                  { ext: "JSON", label: "social-clips", size: "9 items", accent: "accent" },
                  { ext: "MDX", label: "blog-post.mdx", size: "1.8 KB", accent: "foreground" },
                ].map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-3 py-1.5 border-b border-border/60 last:border-0 group cursor-pointer hover:bg-surface-hover px-1 -mx-1 transition-colors"
                  >
                    <span
                      className={`font-mono text-[10px] font-bold tracking-widish ${
                        f.accent === "accent"
                          ? "text-accent"
                          : f.accent === "danger"
                          ? "text-danger"
                          : "text-muted"
                      }`}
                    >
                      {f.ext}
                    </span>
                    <span className="font-mono text-[11px] text-foreground/80 flex-1 truncate">
                      {f.label}
                    </span>
                    <span className="font-mono text-[10px] text-subtle">
                      {f.size}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-border/60">
              <div className="font-mono text-[10px] uppercase tracking-widish text-muted mb-2">
                PRs in this reel
              </div>
              <div className="space-y-1.5">
                {[
                  { hash: "#1842", title: "auth v2 migration", type: "BREAKING" },
                  { hash: "#1841", title: "add retry middleware", type: "FEAT" },
                  { hash: "#1839", title: "fix stream cancellation", type: "FIX" },
                ].map((p) => (
                  <div key={p.hash} className="flex items-center gap-2 text-[11px]">
                    <Github size={11} className="text-subtle" />
                    <span className="font-mono text-muted">{p.hash}</span>
                    <span className="font-sans text-foreground/80 truncate flex-1">
                      {p.title}
                    </span>
                    <span
                      className={`font-mono text-[9px] px-1.5 py-0.5 ${
                        p.type === "BREAKING"
                          ? "bg-danger-subtle text-danger"
                          : p.type === "FEAT"
                          ? "bg-accent-subtle text-accent-text"
                          : "bg-surface text-muted"
                      }`}
                    >
                      {p.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer of player: bottom film strip */}
      <FilmStrip className="mt-4 h-6 w-full" variant="subtle" frames={20} />
    </div>
  );
}
