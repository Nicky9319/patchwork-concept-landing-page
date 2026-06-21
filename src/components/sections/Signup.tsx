import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FrameCounter } from "@/components/brand/FrameCounter";
import { FilmStrip } from "@/components/brand/FilmStrip";
import { GrainOverlay } from "@/components/brand/GrainOverlay";

export function Signup() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-t border-line">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(245,183,0,0.10) 0%, transparent 60%), linear-gradient(180deg, #0b0908 0%, #131110 100%)",
        }}
        aria-hidden
      />
      <GrainOverlay opacity={0.06} />

      {/* Top film strip */}
      <FilmStrip className="absolute top-0 left-0 w-full h-6 opacity-60" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-3 mb-8">
            <span className="inline-block h-2 w-2 rounded-full bg-amber animate-pulseSoft" />
            <span className="font-mono text-[10px] uppercase tracking-widish text-paper/60">
              Reel 024 · Now recording
            </span>
            <FrameCounter />
          </div>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tightest text-paper text-balance">
            Ready to ship{" "}
            <span className="italic font-light text-amber">the story</span>?
          </h2>

          <p className="mt-8 text-paper/60 text-lg md:text-xl leading-relaxed max-w-xl mx-auto text-pretty">
            We're onboarding teams in small batches so we can shape the product
            around your release workflow. Join 412 teams on the waitlist.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 max-w-lg mx-auto"
          >
            <Label htmlFor="email-final" className="sr-only">
              Work email
            </Label>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                id="email-final"
                type="email"
                placeholder="you@yourcompany.dev"
                required
                className="flex-1"
              />
              <Button type="submit" size="lg" className="group">
                Request invite
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
            </div>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-widish text-paper/40">
              No credit card · ~3 day review · Cancel anytime
            </p>
          </form>

          <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
            {[
              "GitHub-native setup",
              "Self-serve, or we help",
              "Bring your own brand voice",
            ].map((perk) => (
              <div
                key={perk}
                className="flex items-center gap-3 border border-line bg-charcoal/30 p-4"
              >
                <CheckCircle2 size={16} className="text-amber shrink-0" />
                <span className="font-sans text-sm text-paper/80">{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}