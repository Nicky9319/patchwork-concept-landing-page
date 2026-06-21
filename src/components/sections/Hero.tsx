import { ArrowRight, Play, Github, Sparkles, Maximize2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { VideoModal } from "@/components/ui/video-modal";
import { FrameCounter } from "@/components/brand/FrameCounter";
import { FilmStrip } from "@/components/brand/FilmStrip";
import { GrainOverlay } from "@/components/brand/GrainOverlay";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32">
      {/* Decorative film strips */}
      <FilmStrip className="absolute top-32 -left-10 w-[120%] h-8 opacity-50" variant="paper" />
      <FilmStrip className="absolute top-44 -left-10 w-[120%] h-8 opacity-30" variant="amber" frames={14} />

      {/* Background atmosphere */}
      <div className="absolute inset-0 paper-texture pointer-events-none" aria-hidden />
      <div className="absolute inset-0 grid-paper opacity-30 pointer-events-none" aria-hidden />
      <GrainOverlay />

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
            <span className="inline-block h-2 w-2 rounded-full bg-amber animate-pulseSoft" />
            <span className="font-mono text-[10px] uppercase tracking-widish text-paper/60">
              Reel 024 · Now recording · 2026.06
            </span>
          </div>
          <FrameCounter className="hidden sm:inline-flex" />
        </div>

        {/* Headline block */}
        <div className="max-w-[1100px]">
          <div className="reveal reveal-2">
            <span className="inline-flex items-center gap-2 border border-amber/40 bg-amber/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widish text-amber mb-8">
              <Sparkles size={11} />
              Private beta · Invite only
            </span>
          </div>

          <h1 className="font-display text-[44px] sm:text-[72px] md:text-[96px] lg:text-[120px] leading-[0.92] tracking-tightest text-paper text-balance reveal reveal-3">
            Every release deserves a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic font-light">release</span>{" "}
              <span className="relative z-10 text-amber">reel</span>
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

          <p className="mt-10 max-w-2xl text-lg md:text-xl text-paper/70 leading-relaxed text-pretty reveal reveal-4">
            Patchwork hooks into your CI/CD and turns every merged PR into a
            release reel — changelogs, breaking-change walkthroughs, migration
            guides, and short-form clips — generated{" "}
            <span className="text-paper font-medium">while you ship</span>, not
            six weeks after.
          </p>

          {/* Signup form */}
          <form
            id="signup"
            className="mt-10 max-w-xl flex flex-col sm:flex-row gap-3 reveal reveal-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex-1">
              <Label htmlFor="email-hero" className="sr-only">
                Email
              </Label>
              <Input
                id="email-hero"
                type="email"
                placeholder="founder@yourcompany.dev"
                required
              />
            </div>
            <Button type="submit" size="lg" className="group">
              Request invite
              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
          </form>
          <p className="mt-3 font-mono text-[11px] text-paper/40 reveal reveal-6">
            412 teams on the waitlist. ~3 day turnaround. No credit card.
          </p>
        </div>

        {/* Hero player mockup */}
        <div className="mt-20 md:mt-28 reveal reveal-6">
          <HeroPlayer onOpenVideo={() => setVideoOpen(true)} />
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
      <div className="absolute -top-6 left-0 font-mono text-[10px] uppercase tracking-widish text-paper/40 flex items-center gap-2">
        <span className="inline-block h-px w-6 bg-paper/30" />
        FEATURED REEL
      </div>
      <div className="absolute -top-6 right-0 font-mono text-[10px] uppercase tracking-widish text-paper/40 hidden sm:flex items-center gap-2">
        PATCHWORK · AUTO-GENERATED
        <span className="inline-block h-px w-6 bg-paper/30" />
      </div>

      <div className="pro-frame relative overflow-hidden">
        {/* Top metadata bar */}
        <div className="flex items-center justify-between border-b border-line/80 px-5 py-3 bg-charcoal/60">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rust/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
            </div>
            <span className="font-mono text-[11px] tracking-widish text-paper/50 uppercase">
              patchwork-promo.mp4 · 1280×720 · 30fps
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[11px] tracking-widish text-paper/50">
            <span className="hidden sm:inline text-amber">AUTO-GENERATED</span>
            <span className="text-paper/40">00:32 / 00:32</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_280px]">
          {/* Video preview — clickable to open modal */}
          <button
            type="button"
            onClick={onOpenVideo}
            className="relative aspect-video bg-ink overflow-hidden text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
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
            <div className="absolute top-3 left-3 flex items-center gap-2 font-mono text-[10px] tracking-widish text-paper/80 z-10">
              <span className="inline-block h-2 w-2 rounded-full bg-rust animate-pulseSoft" />
              REC · LIVE
            </div>
            {/* Expand-to-modal affordance (always visible) */}
            <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 border border-paper/30 bg-ink/60 backdrop-blur-sm px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-widish text-paper/80 group-hover:border-amber group-hover:text-amber transition-colors">
              <Maximize2 size={10} />
              Expand
            </div>
            {/* Hover play overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/30 transition-colors z-10">
              <span className="flex items-center justify-center h-14 w-14 md:h-16 md:w-16 rounded-full bg-amber text-ink shadow-2xl group-hover:scale-110 transition-transform">
                <Play size={22} fill="currentColor" className="ml-0.5" />
              </span>
            </div>
          </button>

          {/* Side panel: generated artifacts */}
          <div className="border-t lg:border-t-0 lg:border-l border-line/80 bg-charcoal/40 p-5 flex flex-col gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widish text-paper/40 mb-2">
                Generated artifacts
              </div>
              <ul className="space-y-2">
                {[
                  { ext: "MP4", label: "release-reel-v2.4.0", size: "18.4 MB", accent: "amber" },
                  { ext: "MD", label: "CHANGELOG", size: "4.2 KB", accent: "paper" },
                  { ext: "MD", label: "MIGRATION.md", size: "2.1 KB", accent: "rust" },
                  { ext: "JSON", label: "social-clips", size: "9 items", accent: "amber" },
                  { ext: "MDX", label: "blog-post.mdx", size: "1.8 KB", accent: "paper" },
                ].map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center gap-3 py-1.5 border-b border-line/50 last:border-0 group cursor-pointer hover:bg-ink/50 px-1 -mx-1 transition-colors"
                  >
                    <span
                      className={`font-mono text-[10px] font-bold tracking-widish ${
                        f.accent === "amber"
                          ? "text-amber"
                          : f.accent === "rust"
                          ? "text-rust"
                          : "text-paper/60"
                      }`}
                    >
                      {f.ext}
                    </span>
                    <span className="font-mono text-[11px] text-paper/80 flex-1 truncate">
                      {f.label}
                    </span>
                    <span className="font-mono text-[10px] text-paper/30">
                      {f.size}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-4 border-t border-line/60">
              <div className="font-mono text-[10px] uppercase tracking-widish text-paper/40 mb-2">
                PRs in this reel
              </div>
              <div className="space-y-1.5">
                {[
                  { hash: "#1842", title: "auth v2 migration", type: "BREAKING" },
                  { hash: "#1841", title: "add retry middleware", type: "FEAT" },
                  { hash: "#1839", title: "fix stream cancellation", type: "FIX" },
                ].map((p) => (
                  <div key={p.hash} className="flex items-center gap-2 text-[11px]">
                    <Github size={11} className="text-paper/40" />
                    <span className="font-mono text-paper/50">{p.hash}</span>
                    <span className="font-sans text-paper/80 truncate flex-1">
                      {p.title}
                    </span>
                    <span
                      className={`font-mono text-[9px] px-1.5 py-0.5 ${
                        p.type === "BREAKING"
                          ? "bg-rust/20 text-rust"
                          : p.type === "FEAT"
                          ? "bg-amber/15 text-amber"
                          : "bg-paper/10 text-paper/60"
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
      <FilmStrip className="mt-4 h-6 w-full" variant="amber" frames={20} />
    </div>
  );
}