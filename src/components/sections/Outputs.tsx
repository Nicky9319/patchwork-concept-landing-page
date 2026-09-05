import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { captureEvent } from "@/lib/analytics";
import { Video, FileText, Twitter, BookOpen, Mail } from "lucide-react";

export function Outputs() {
  return (
    <section
      id="reel"
      className="relative py-24 md:py-32 overflow-hidden border-y border-border bg-surface/30"
    >
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <span className="inline-block font-mono text-[10px] uppercase tracking-widish text-accent mb-6">
              · The reel
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tightest text-foreground text-balance">
              One release.{" "}
              <span className="italic font-light text-accent">Five</span>{" "}
              outputs.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted text-lg leading-relaxed text-pretty">
              Same source — your merged PRs. Patchwork formats the story for
              every surface it lives on. You review, not write.
            </p>
          </div>
        </div>

        <Tabs
          defaultValue="video"
          className="w-full"
          onValueChange={(value) => captureEvent("outputs_tab_changed", { tab_name: value })}
        >
          <TabsList className="flex-wrap h-auto">
            <TabsTrigger value="video">
              <Video size={12} />
              Release reel
            </TabsTrigger>
            <TabsTrigger value="changelog">
              <FileText size={12} />
              Changelog
            </TabsTrigger>
            <TabsTrigger value="social">
              <Twitter size={12} />
              Social thread
            </TabsTrigger>
            <TabsTrigger value="migration">
              <BookOpen size={12} />
              Migration guide
            </TabsTrigger>
            <TabsTrigger value="email">
              <Mail size={12} />
              Newsletter
            </TabsTrigger>
          </TabsList>

          {/* Video reel output */}
          <TabsContent value="video">
            <div className="grid lg:grid-cols-[1fr_320px] gap-6">
              <div className="pro-frame relative aspect-video overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 30%, rgba(245,183,0,0.10) 0%, transparent 50%), linear-gradient(135deg, #fafaf9 0%, #ffffff 100%)",
                  }}
                />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widish text-accent">
                      Scene 01 · Title
                    </div>
                    <div className="font-display text-4xl md:text-6xl text-foreground mt-2 leading-[0.95] tracking-tightest">
                      v2.4.0 —{" "}
                      <span className="italic font-light text-accent">
                        auth, reimagined
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-muted mt-3">
                      generated in 87s · 14 PRs · 2 breaking changes
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-mono text-[10px] uppercase tracking-widish text-subtle">
                      <div>RUNTIME 04:38</div>
                      <div className="mt-1">ASPECT 16:9</div>
                      <div className="mt-1">VOICE NARRATED</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[10px] uppercase tracking-widish text-accent/80">
                        A Patchwork production
                      </div>
                      <div className="font-display text-2xl text-foreground mt-1">
                        The Reel ↘
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-border p-5 flex flex-col gap-4 shadow-sm">
                <div className="font-mono text-[10px] uppercase tracking-widish text-muted">
                  Production notes
                </div>
                <div className="space-y-3 text-sm text-muted leading-relaxed">
                  <p>
                    <span className="text-accent">▸ Script</span> drafted from PR
                    descriptions and diffs
                  </p>
                  <p>
                    <span className="text-accent">▸ Voiceover</span> narrated in
                    plain English, not changelog-speak
                  </p>
                  <p>
                    <span className="text-accent">▸ Visuals</span>{" "}
                    auto-generated from your UI (Playwright captures)
                  </p>
                  <p>
                    <span className="text-accent">▸ Captions</span> burned in
                    (vertical + horizontal variants)
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-border/60 space-y-2 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-subtle">16:9 master</span>
                    <span className="text-foreground">release-reel.mp4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-subtle">9:16 vertical</span>
                    <span className="text-foreground">reel-tiktok.mp4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-subtle">1:1 square</span>
                    <span className="text-foreground">reel-square.mp4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-subtle">SRT captions</span>
                    <span className="text-foreground">reel.srt</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Changelog */}
          <TabsContent value="changelog">
            <div className="grid lg:grid-cols-[1fr_280px] gap-6">
              <div className="bg-white border border-border font-mono text-[12px] leading-relaxed overflow-hidden shadow-sm">
                <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-surface">
                  <div className="flex items-center gap-2">
                    <span className="text-muted">📄</span>
                    <span className="text-foreground">CHANGELOG.md</span>
                  </div>
                  <span className="text-muted text-[10px] uppercase tracking-widish">
                    auto-generated · 2026-06-21
                  </span>
                </div>
                <pre className="p-6 text-foreground/85 overflow-x-auto whitespace-pre-wrap">
{`## [2.4.0] — 2026-06-21

### ⚠ BREAKING CHANGES

- **auth**: \`Provider.init({ legacy: true })\` removed.
  Migrate to \`Provider.init({ schema: "2026.06" })\`.
  _Patchwork can run the migration: \`npx @patchwork/migrate auth\`_
- **streams**: \`Stream.on("end")\` no longer fires on
  cancellation. Use \`Stream.on("close")\` instead.

### ✨ Features

- Add retry middleware with exponential backoff (#1841)
- New \`cache.invalidate()\` API with tag-based invalidation
- Support for OpenTelemetry trace export

### 🐛 Fixes

- Fix stream cancellation race condition (#1839)
- Resolve memory leak in long-running subscriptions

_Migration guide: [migration.md](/migration/2.3-to-2.4)_`}
                </pre>
              </div>

              <div className="bg-white border border-border p-5 shadow-sm">
                <div className="font-mono text-[10px] uppercase tracking-widish text-muted mb-4">
                  Detection sources
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    "Conventional commit prefixes",
                    "Manual BREAKING CHANGE notes in PR body",
                    "@deprecated JSDoc tags",
                    "AST diff of public API surface",
                    "Schema migrations (Prisma, Drizzle, SQL)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent font-mono text-[11px]">▸</span>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Social */}
          <TabsContent value="social">
            <div className="grid lg:grid-cols-2 gap-6">
              {[
                {
                  handle: "@yourcompany",
                  platform: "X / Twitter",
                  tone: "Thread",
                  body: `v2.4.0 just shipped 🚢

Two breaking changes you need to know about — both have one-line migrations:

1. auth: Provider.init({ legacy: true }) is gone
   → Provider.init({ schema: "2026.06" })

2. streams: Stream.on("end") no longer fires on cancel
   → use Stream.on("close") instead

Full reel ↓`,
                },
                {
                  handle: "linkedin.com/company/you",
                  platform: "LinkedIn",
                  tone: "Long-form",
                  body: `We just shipped v2.4.0, and it includes the auth rewrite our team has been working toward for most of Q2.

For most users: nothing changes. Your existing tokens still work.

For teams using legacy auth, we built a one-command migration — \`npx @patchwork/migrate auth\` — that rewrites 94% of cases automatically. The remaining 6% get a hand-written migration guide.

The full release reel (with code walkthroughs) is in the comments.`,
                },
              ].map((post) => (
                <div key={post.platform} className="bg-white border border-border shadow-sm">
                  <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-surface">
                    <div className="flex items-center gap-2">
                      <span className="text-muted text-[10px] uppercase tracking-widish">
                        {post.platform}
                      </span>
                      <span className="text-subtle text-[10px]">·</span>
                      <span className="text-accent text-[10px] uppercase tracking-widish">
                        {post.tone}
                      </span>
                    </div>
                    <span className="text-subtle text-[10px]">ready to publish</span>
                  </div>
                  <div className="p-5">
                    <div className="font-mono text-[11px] text-accent mb-3">
                      {post.handle}
                    </div>
                    <p className="text-foreground/85 text-[15px] leading-relaxed whitespace-pre-line">
                      {post.body}
                    </p>
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center gap-4 text-subtle font-mono text-[10px]">
                      <span>♡ 0</span>
                      <span>↻ 0</span>
                      <span>↺ 0</span>
                      <span className="ml-auto text-accent">awaiting review</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Migration */}
          <TabsContent value="migration">
            <div className="grid lg:grid-cols-[1fr_280px] gap-6">
              <div className="bg-white border border-border shadow-sm">
                <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-surface">
                  <div className="flex items-center gap-2">
                    <span className="text-muted">📘</span>
                    <span className="text-foreground font-mono text-[12px]">
                      migration/2.3-to-2.4.md
                    </span>
                  </div>
                  <span className="text-danger text-[10px] uppercase tracking-widish font-mono">
                    ⚠ Breaking
                  </span>
                </div>
                <div className="p-6 md:p-8 space-y-5 text-[15px] text-foreground/85 leading-relaxed">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widish text-accent mb-1">
                      Step 01 · Update imports
                    </div>
                    <code className="block bg-surface border border-border px-4 py-2.5 font-mono text-[13px] text-foreground/90 mt-2">
                      - import {"{ Provider }"} from "@/auth/v1"
                      <br />
                      <span className="text-success">
                        + import {"{ Provider }"} from "@/auth/v2"
                      </span>
                    </code>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widish text-accent mb-1">
                      Step 02 · Update init call
                    </div>
                    <code className="block bg-surface border border-border px-4 py-2.5 font-mono text-[13px] text-foreground/90 mt-2">
                      {`- Provider.init({ legacy: true })`}
                      <br />
                      <span className="text-success">
                        {`+ Provider.init({ schema: `}"2026.06"{`)`}
                      </span>
                    </code>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widish text-accent mb-1">
                      Step 03 · Run the auto-migrator
                    </div>
                    <code className="block bg-surface border border-border px-4 py-2.5 font-mono text-[13px] text-foreground/90 mt-2">
                      <span className="text-subtle">$</span>{" "}
                      <span className="text-accent">npx @patchwork/migrate auth</span>
                    </code>
                    <p className="text-muted text-sm mt-2">
                      Covers 94% of installations automatically. The remaining
                      6% get a custom diff written by Patchwork based on your
                      actual usage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-border p-5 space-y-4 shadow-sm">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widish text-muted">
                    Coverage
                  </div>
                  <div className="font-display text-3xl text-success mt-1">94%</div>
                  <div className="font-mono text-[10px] text-muted mt-1">
                    auto-migrated
                  </div>
                </div>
                <div className="pt-4 border-t border-border/60">
                  <div className="font-mono text-[10px] uppercase tracking-widish text-muted">
                    Avg. time
                  </div>
                  <div className="font-display text-3xl text-foreground mt-1">3m</div>
                  <div className="font-mono text-[10px] text-muted mt-1">
                    per project
                  </div>
                </div>
                <div className="pt-4 border-t border-border/60 text-sm text-muted leading-relaxed">
                  Patchwork analyzes your repo's actual usage before writing
                  the guide — so it never tells you to change code you don't
                  have.
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Newsletter */}
          <TabsContent value="email">
            <div className="grid lg:grid-cols-[1fr_300px] gap-6">
              <div className="bg-white text-foreground border border-border overflow-hidden shadow-sm">
                <div className="px-8 pt-8 pb-2 flex items-center justify-between">
                  <div className="font-display text-2xl font-black">
                    Acme / changelog
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widish text-muted">
                    Vol. 024 · 2026-06-21
                  </div>
                </div>
                <div className="px-8 pt-6 pb-2">
                  <div className="font-mono text-[11px] uppercase tracking-widish text-muted mb-1">
                    This week in Acme
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl leading-tight tracking-tightest">
                    Auth got a rewrite, streams got saner, and a few bugs got
                    squashed.
                  </h3>
                </div>
                <div className="px-8 py-6 space-y-5 text-[15px] leading-relaxed">
                  <p>
                    <strong>v2.4.0</strong> is the most-requested release of
                    the year. The headline change is the new auth provider —
                    faster, schema-validated, and ready for the multi-tenant
                    changes shipping in 2.5.
                  </p>
                  <p>
                    If you're on the legacy auth path, run{" "}
                    <code className="bg-surface border border-border px-1.5 py-0.5 font-mono text-[13px]">
                      npx @patchwork/migrate auth
                    </code>{" "}
                    — it handles 94% of installations in under three minutes.
                  </p>
                  <p className="text-muted text-sm pt-4 border-t border-border">
                    Watch the 4-minute walkthrough{" "}
                    <span className="underline">here</span>, read the full
                    changelog <span className="underline">here</span>, or just
                    upgrade and ship.
                  </p>
                </div>
                <div className="px-8 py-5 border-t border-border bg-surface/50 flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-widish text-muted">
                    Sent 14 min after release · 8,420 subscribers
                  </div>
                  <div className="font-display font-black text-foreground">→</div>
                </div>
              </div>

              <div className="bg-white border border-border p-5 space-y-4 shadow-sm">
                <div className="font-mono text-[10px] uppercase tracking-widish text-muted">
                  Channels
                </div>
                {[
                  { name: "Email", icon: "✉", status: "queued" },
                  { name: "RSS / Atom", icon: "📡", status: "published" },
                  { name: "Status page", icon: "📊", status: "draft" },
                  { name: "In-app banner", icon: "◇", status: "queued" },
                ].map((c) => (
                  <div
                    key={c.name}
                    className="flex items-center gap-3 py-2 border-b border-border/40 last:border-0"
                  >
                    <span className="text-accent">{c.icon}</span>
                    <span className="font-sans text-sm text-foreground/80 flex-1">
                      {c.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widish text-muted">
                      {c.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
