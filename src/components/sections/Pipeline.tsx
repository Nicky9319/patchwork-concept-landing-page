import { GitCommit, Hammer, TestTube2, Film, UploadCloud, Check } from "lucide-react";

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
      className="relative py-24 md:py-32 overflow-hidden border-y border-border bg-background"
    >
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <span className="inline-block font-mono text-[10px] uppercase tracking-widish text-accent mb-6">
              · Pipeline
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tightest text-foreground text-balance">
              Drop-in stage.{" "}
              <span className="italic font-light">Zero</span> infra.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted text-lg leading-relaxed text-pretty">
              Patchwork lives between your tests and your release. Your CI
              doesn't change — you just get a richer artifact at the end of the
              run.
            </p>
          </div>
        </div>

        {/* Pipeline visual */}
        <div className="pro-frame relative overflow-hidden">
          <div className="border-b border-border px-5 py-3 bg-surface flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
              </div>
              <span className="font-mono text-[11px] tracking-widish text-muted uppercase">
                .github/workflows/release.yml
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widish text-accent">
              ◉ run #4,218
            </span>
          </div>

          <div className="p-6 md:p-10">
            {/* Pipeline flow */}
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
              {/* Left: CI stages */}
              <div className="space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-widish text-muted mb-3">
                  CI Stages
                </div>
                {stages.map((s, i) => (
                  <div
                    key={s.name}
                    className="flex items-center gap-4 border border-border bg-white p-4 relative shadow-sm"
                  >
                    <span className="absolute -left-px top-0 bottom-0 w-px bg-success" />
                    <span className="font-mono text-[10px] text-subtle w-6">
                      0{i + 1}
                    </span>
                    <s.icon size={18} className="text-muted" strokeWidth={1.5} />
                    <div className="flex-1">
                      <div className="font-mono text-sm text-foreground">
                        {s.name}
                      </div>
                      <div className="font-mono text-[10px] text-muted mt-0.5">
                        {s.sub}
                      </div>
                    </div>
                    <Check size={14} className="text-success" />
                  </div>
                ))}
              </div>

              {/* Arrow + Patchwork stage */}
              <div className="flex flex-col items-center justify-center gap-3 py-4 lg:py-0">
                <div className="hidden lg:block h-px w-12 bg-border-strong" />
                <div className="border-2 border-accent bg-accent-subtle p-5 lg:p-7 text-center min-w-[180px] relative shadow-sm">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 bg-white">
                    <span className="font-mono text-[9px] uppercase tracking-widish text-accent font-bold">
                      ✦ Patchwork ✦
                    </span>
                  </div>
                  <Film
                    size={28}
                    className="text-accent mx-auto mb-2"
                    strokeWidth={1.5}
                  />
                  <div className="font-mono text-sm text-accent-text font-bold uppercase tracking-widish">
                    render
                  </div>
                  <div className="font-mono text-[10px] text-muted mt-1">
                    87s · 14 PRs
                  </div>
                </div>
                <div className="hidden lg:block h-px w-12 bg-border-strong" />
                <div className="lg:hidden rotate-90 w-px h-8 bg-border-strong" />
              </div>

              {/* Right: artifacts */}
              <div className="space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-widish text-muted mb-3 flex items-center justify-between">
                  <span>Release artifacts</span>
                  <span className="text-success">uploaded</span>
                </div>
                {outputs.map((f, i) => (
                  <div
                    key={f}
                    className="flex items-center gap-3 border border-border bg-white p-4 hover:bg-surface transition-colors shadow-sm"
                  >
                    <UploadCloud
                      size={14}
                      className={i === 0 ? "text-accent" : "text-muted"}
                    />
                    <span className="font-mono text-sm text-foreground/80 flex-1 truncate">
                      {f}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widish text-muted">
                      {i === 0 ? "18.4 MB" : i === 3 ? "9 items" : "ready"}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status footer */}
            <div className="mt-8 pt-6 border-t border-border/60 grid sm:grid-cols-3 gap-4">
              {[
                { label: "Pipeline duration", value: "4m 12s", delta: "+87s" },
                { label: "Artifacts produced", value: "14", delta: "vs 0 before" },
                { label: "Manual work", value: "0 min", delta: "vs ~6h before" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="font-mono text-[10px] uppercase tracking-widish text-muted">
                    {m.label}
                  </div>
                  <div className="font-display text-3xl text-foreground mt-1 tracking-tightest">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] text-success mt-0.5">
                    {m.delta}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* YAML snippet */}
        <div className="mt-8 grid lg:grid-cols-[1fr_320px] gap-6">
          <div className="bg-white border border-border shadow-sm">
            <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-surface">
              <div className="flex items-center gap-2">
                <span className="text-foreground font-mono text-[12px]">
                  release.yml
                </span>
                <span className="text-subtle font-mono text-[10px]">·</span>
                <span className="text-accent font-mono text-[10px] uppercase tracking-widish">
                  patch v1
                </span>
              </div>
              <span className="font-mono text-[10px] text-subtle">yaml</span>
            </div>
            <pre className="p-6 font-mono text-[12px] leading-relaxed overflow-x-auto text-foreground/85 bg-surface/30">
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
                className="flex items-center gap-3 border border-border bg-white px-4 py-3 shadow-sm"
              >
                <span className="text-accent font-mono">{p.icon}</span>
                <span className="font-mono text-sm text-foreground/80">{p.name}</span>
                <span className="ml-auto font-mono text-[10px] uppercase tracking-widish text-success">
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
