import { Heart, Rocket, Building2 } from "lucide-react";

const cases = [
  {
    tag: "Open source",
    icon: Heart,
    title: "Maintainers who care about community.",
    body: "Your users run your code. They deserve to know what changed and why — without spelunking through commit history. Patchwork gives every release a story your community can actually watch.",
    quote: "\"We went from 3 changelogs a year to 3 a week.\"",
    cite: "Maintainer, 14k★ framework",
  },
  {
    tag: "Startup",
    icon: Rocket,
    title: "Early teams shipping fast.",
    body: "You're 4 people. You're shipping every week. Nobody has time to write release notes — but every release is a chance to grow. Patchwork turns your velocity into distribution.",
    quote: "\"Our X following doubled in a quarter without us posting manually.\"",
    cite: "Founder, Series A devtools",
  },
  {
    tag: "Scaling SaaS",
    icon: Building2,
    title: "Companies that can't go stale.",
    body: "When you have 50 features shipping a month, documentation rots fast. Patchwork keeps your release notes, walkthroughs, and migration guides as fresh as the code — because they're generated from the code.",
    quote: "\"Our support tickets about 'what changed' dropped 40%.\"",
    cite: "Head of DX, 800-person SaaS",
  },
];

export function UseCases() {
  return (
    <section id="audience" className="relative py-24 md:py-32 overflow-hidden bg-surface/30">
      <div className="container relative">
        <div className="max-w-3xl mb-16">
          <span className="inline-block font-mono text-[10px] uppercase tracking-widish text-accent mb-6">
            · Who's it for
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tightest text-foreground text-balance">
            Built for teams that{" "}
            <span className="italic font-light text-accent">ship</span>.
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-border">
          {cases.map((c) => (
            <article
              key={c.tag}
              className="bg-white p-8 md:p-10 flex flex-col h-full group hover:bg-surface transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <c.icon
                  size={22}
                  className="text-accent"
                  strokeWidth={1.5}
                />
                <span className="font-mono text-[10px] uppercase tracking-widish text-muted">
                  {c.tag}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground tracking-tightest leading-tight mb-4 text-balance">
                {c.title}
              </h3>
              <p className="text-muted leading-relaxed text-[15px] flex-1 text-pretty">
                {c.body}
              </p>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="font-display italic font-light text-foreground/90 text-lg leading-snug text-balance">
                  {c.quote}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widish text-muted mt-3">
                  — {c.cite}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Logos strip */}
        <div className="mt-20 border-t border-border pt-10">
          <div className="font-mono text-[10px] uppercase tracking-widish text-muted mb-6 text-center">
            Trusted by teams shipping · private beta
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {["ACME", "MERIDIAN", "FORGE", "PARALLEL", "OBELISK", "HALCYON"].map(
              (logo) => (
                <span
                  key={logo}
                  className="font-display text-xl tracking-tightest text-muted hover:text-accent transition-colors"
                >
                  {logo}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
