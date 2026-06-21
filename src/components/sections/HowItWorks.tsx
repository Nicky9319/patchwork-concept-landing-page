import { Plug, ScanSearch, Film, ArrowDown } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Connect",
    sub: "One-line install.",
    body: "Drop the Patchwork GitHub App into your org. We hook into your existing CI/CD — GitHub Actions, GitLab CI, CircleCI, Vercel, anything that ships a release.",
    icon: Plug,
    code: `npm i @patchwork/cli
patchwork init --repo=acme/api`,
  },
  {
    n: "02",
    title: "Detect",
    sub: "We read the diffs.",
    body: "Patchwork watches every merged PR, semver bump, deprecation flag, and schema change. It classifies them — breaking, feat, fix — using your conventions and conventional commits.",
    icon: ScanSearch,
    code: `→ parsing 14 commits
→ 2 BREAKING detected
→ semver: 2.3.4 → 3.0.0
→ deprecations: 1`,
  },
  {
    n: "03",
    title: "Render",
    sub: "Story, cut, and shipped.",
    body: "Patchwork writes the changelog, drafts the social thread, scripts the video, renders the walkthrough, and queues everything for your review — usually before the CI badge goes green.",
    icon: Film,
    code: `→ release-reel.mp4  ✓
→ CHANGELOG.md     ✓
→ 9 social clips   ✓
→ migration.md     ✓
ready for review`,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container relative">
        {/* Heading */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="inline-block font-mono text-[10px] uppercase tracking-widish text-amber mb-6">
            · How it works
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tightest text-paper text-balance">
            Three stages.{" "}
            <span className="italic font-light">Zero</span> writing.
          </h2>
          <p className="mt-6 text-paper/60 text-lg leading-relaxed max-w-xl text-pretty">
            Patchwork runs in your release pipeline — the same place you already
            run tests and build artifacts. Just one more stage that produces the
            story instead of the binary.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={step.n} className="relative">
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 border border-line bg-charcoal/30 hover:bg-charcoal/50 transition-colors p-6 md:p-10">
                {/* Left: number + icon */}
                <div className="lg:col-span-2 flex lg:flex-col items-start gap-4">
                  <span className="font-display text-7xl md:text-8xl font-black text-amber/20 leading-none">
                    {step.n}
                  </span>
                  <step.icon
                    size={28}
                    className="text-amber lg:mt-2"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Middle: copy */}
                <div className="lg:col-span-6">
                  <h3 className="font-display text-3xl md:text-4xl text-paper tracking-tightest leading-tight">
                    {step.title}
                    <span className="block font-mono text-[11px] uppercase tracking-widish text-paper/40 mt-2 font-normal">
                      {step.sub}
                    </span>
                  </h3>
                  <p className="mt-5 text-paper/70 text-base md:text-lg leading-relaxed max-w-xl">
                    {step.body}
                  </p>
                </div>

                {/* Right: code/terminal block */}
                <div className="lg:col-span-4">
                  <div className="bg-ink border border-line font-mono text-[11px] leading-relaxed">
                    <div className="flex items-center gap-2 border-b border-line px-3 py-2">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 rounded-full bg-rust/60" />
                        <span className="h-2 w-2 rounded-full bg-amber/60" />
                        <span className="h-2 w-2 rounded-full bg-paper/20" />
                      </div>
                      <span className="text-paper/40 ml-1 uppercase tracking-widish text-[10px]">
                        {i === 0 ? "terminal" : i === 1 ? "patchwork.log" : "release.log"}
                      </span>
                    </div>
                    <pre className="p-4 text-paper/80 overflow-x-auto whitespace-pre">
                      {step.code}
                    </pre>
                  </div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="flex justify-center -my-1 relative z-10">
                  <ArrowDown
                    size={18}
                    className="text-amber/40 -translate-y-px"
                    strokeWidth={1.5}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}