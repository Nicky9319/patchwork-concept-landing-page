import { GitCommit, Hammer, TestTube2, Film, UploadCloud, Check } from "lucide-react";
import { GrainOverlay } from "@/components/brand/GrainOverlay";

const stages = [
  { name: "commit", icon: GitCommit, sub: "feat(auth): v2 schema" },
  { name: "build", icon: Hammer, sub: "compiled in 42s" },
  { name: "test", icon: TestTube2, sub: "248 passing" },
];

const outputs = [
  "release-reel.mp4",
  "CHANGELOG.md",
  "MIGRATION.md",
  "social-clips.json",
];

export function Pipeline() {
  return (
    <section
      id="pipeline"
      className="relative py-24 md:py-32 overflow-hidden border-y border-line"
    >
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <span className="inline-block font-mono text-[10px] uppercase tracking-widish text-amber mb-6">
              · Pipeline
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tightest text-paper text-balance">
              Drop-in stage.{" "}
              <span className="italic font-light">Zero</span> infra.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-paper/60 text-lg leading-relaxed text-pretty">
              Patchwork lives between your tests and your release. Your CI
              doesn't change — you just get a richer artifact at the end of the
              run.
            </p>
          </div>
        </div>

        {/* Pipeline visual */}
        <div className="pro-frame relative overflow-hidden">
          <GrainOverlay opacity={0.06} />
          <div className="border-b border-line/80 px-5 py-3 bg-charcoal/60 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rust/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-paper/30" />
              </div>
              <span className="font-mono text-[11px] tracking-widish text-paper/50 uppercase">
                .github/workflows/release.yml
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widish text-amber">
              ◉ run #4,218
            </span>
          </div>

          <div className="p-6 md:p-10">
            {/* Pipeline flow */}
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
              {/* Left: CI stages */}
              <div className="space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-widish text-paper/40 mb-3">
                  CI Stages
                </div>
                {stages.map((s, i) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-4 border border-line bg-charcoal/40 p-4 relative"
                  >
                    <span className="absolute -left-px top-0 bottom-0 w-px bg-amber/40" />
                    <span className="font-mono text-[10px] text-paper/30 w-6">
                      0{i + 1}
                    </span>
                    <s.icon size={18} className="text-paper/70" strokeWidth={1.5} />
                    <div className="flex-1">
                      <div className="font-mono text-sm text-paper">
                        {s.name}
                      </div>
                      <div className="font-mono text-[10px] text-paper/40 mt-0.5">
                        {s.sub}
                      </div>
                    </div>
                    <Check size={14} className="text-paper/30" />
                  </div>
                ))}
              </div>

              {/* Arrow + Patchwork stage */}
              <div className="flex flex-col items-center justify-center gap-3 py-4 lg:py-0">
                <div className="hidden lg:block h-px w-12 bg-amber/40" />
                <div className="border-2 border-amber bg-amber/10 p-5 lg:p-7 text-center min-w-[180px] relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 bg-ink">
                    <span className="font-mono text-[9px] uppercase tracking-widish text-amber font-bold">
                      ✦ Patchwork ✦
                    </span>
                  </div>
                  <Film
                    size={28}
                    className="text-amber mx-auto mb-2"
                    strokeWidth={1.5}
                  />
                  <div className="font-mono text-sm text-amber font-bold uppercase tracking-widish">
                    render
                  </div>
                  <div className="font-mono text-[10px] text-paper/60 mt-1">
                    87s · 14 PRs
                  </div>
                </div>
                <div className="hidden lg:block h-px w-12 bg-amber/40" />
                <div className="lg:hidden rotate-90 w-px h-8 bg-amber/40" />
              </div>

              {/* Right: artifacts */}
              <div className="space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-widish text-paper/40 mb-3 flex items-center justify-between">
                  <span>Release artifacts</span>
                  <span className="text-amber">uploaded</span>
                </div>
                {outputs.map((f, i) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 border border-line bg-charcoal/40 p-4 hover:bg-charcoal/60 transition-colors"
                  >
                    <UploadCloud
                      size={14}
                      className={i === 0 ? "text-amber" : "text-paper/40"}
                    />
                    <span className="font-mono text-sm text-paper/80 flex-1 truncate">
                      {f}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widish text-paper/40">
                      {i === 0 ? "18.4 MB" : i === 3 ? "9 items" : "ready"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status footer */}
            <div className="mt-8 pt-6 border-t border-line/60 grid sm:grid-cols-3 gap-4">
              {[
                { label: "Pipeline duration", value: "4m 12s", delta: "+87s" },
                { label: "Artifacts produced", value: "14", delta: "vs 0 before" },
                { label: "Manual work", value: "0 min", delta: "vs ~6h before" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="font-mono text-[10px] uppercase tracking-widish text-paper/40">
                    {m.label}
                  </div>
                  <div className="font-display text-3xl text-paper mt-1 tracking-tightest">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] text-amber mt-0.5">
                    {m.delta}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* YAML snippet */}
        <div className="mt-8 grid lg:grid-cols-[1fr_320px] gap-6">
          <div className="bg-ink border border-line">
            <div className="flex items-center justify-between border-b border-line px-4 py-3 bg-charcoal/60">
              <div className="flex items-center gap-2">
                <span className="text-paper/40 font-mono text-[12px]">
                  release.yml
                </span>
                <span className="text-paper/30 font-mono text-[10px]">·</span>
                <span className="text-amber font-mono text-[10px] uppercase tracking-widish">
                  patch v1
                </span>
              </div>
              <span className="font-mono text-[10px] text-paper/30">yaml</span>
            </div>
            <pre className="p-6 font-mono text-[12px] leading-relaxed overflow-x-auto text-paper/85">
{`name: release
on:
  push:
    branches: [main]

jobs:
  ship:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm test

      # ← add this one step
      - uses: patchwork-sh/render@v1
        with:
          api-key: \${{ secrets.PATCHWORK_KEY }}
          output: ./release-artifacts/

      - uses: actions/upload-artifact@v4
        with:
          name: release
          path: ./release-artifacts/`}
            </pre>
          </div>

          <div className="space-y-3">
            {[
              { name: "GitHub Actions", icon: "◐" },
              { name: "GitLab CI", icon: "◑" },
              { name: "CircleCI", icon: "◒" },
              { name: "Buildkite", icon: "◓" },
              { name: "Vercel / Deploy hooks", icon: "◔" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 border border-line bg-charcoal/40 px-4 py-3"
              >
                <span className="text-amber font-mono">{p.icon}</span>
                <span className="font-mono text-sm text-paper/80">{p.name}</span>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-widish text-amber">
                  supported
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}