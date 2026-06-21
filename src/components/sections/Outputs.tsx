import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, FileText, Twitter, BookOpen, Mail } from "lucide-react";
import { GrainOverlay } from "@/components/brand/GrainOverlay";

export function Outputs() {
  return (
    <section
      id="reel"
      className="relative py-24 md:py-32 overflow-hidden border-y border-line"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #0b0908 0%, #131110 50%, #0b0908 100%)",
        }}
        aria-hidden
      />
      <GrainOverlay opacity={0.06} />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-12 md:mb-16">
          <div className="lg:col-span-7">
            <span className="inline-block font-mono text-[10px] uppercase tracking-widish text-amber mb-6">
              · The reel
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tightest text-paper text-balance">
              One release.{" "}
              <span className="italic font-light text-amber">Five</span>{" "}
              outputs.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-paper/60 text-lg leading-relaxed text-pretty">
              Same source — your merged PRs. Patchwork formats the story for
              every surface it lives on. You review, not write.
            </p>
          </div>
        </div>

        <Tabs defaultValue="video" className="w-full">
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
                      "radial-gradient(circle at 70% 30%, rgba(245,183,0,0.15) 0%, transparent 50%), linear-gradient(135deg, #1a1714 0%, #0b0908 100%)",
                  }}
                />
                <GrainOverlay opacity={0.1} />
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widish text-amber">
                      Scene 01 · Title
                    </div>
                    <div className="font-display text-4xl md:text-6xl text-paper mt-2 leading-[0.95] tracking-tightest">
                      v2.4.0 —{" "}
                      <span className="italic font-light text-amber">
                        auth, reimagined
                      </span>
                    </div>
                    <div className="font-mono text-[11px] text-paper/40 mt-3">
                      generated in 87s · 14 PRs · 2 breaking changes
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="font-mono text-[10px] uppercase tracking-widish text-paper/30">
                      <div>RUNTIME 04:38</div>
                      <div className="mt-1">ASPECT 16:9</div>
                      <div className="mt-1">VOICE NARRATED</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[10px] uppercase tracking-widish text-amber/80">
                        A Patchwork production
                      </div>
                      <div className="font-display text-2xl text-paper mt-1">
                        The Reel ↘
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal/60 border border-line p-5 flex flex-col gap-4">
                <div className="font-mono text-[10px] uppercase tracking-widish text-paper/40">
                  Production notes
                </div>
                <div className="space-y-3 text-sm text-paper/70 leading-relaxed">
                  <p>
                    <span className="text-amber">▸ Script</span> drafted from PR
                    descriptions and diffs
                  </p>
                  <p>
                    <span className="text-amber">▸ Voiceover</span> narrated in
                    plain English, not changelog-speak
                  </p>
                  <p>
                    <span className="text-amber">▸ Visuals</span>{" "}
                    auto-generated from your UI (Playwright captures)
                  </p>
                  <p>
                    <span className="text-amber">▸ Captions</span> burned in
                    (vertical + horizontal variants)
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-line/60 space-y-2 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-paper/40">16:9 master</span>
                    <span className="text-paper">release-reel.mp4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-paper/40">9:16 vertical</span>
                    <span className="text-paper">reel-tiktok.mp4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-paper/40">1:1 square</span>
                    <span className="text-paper">reel-square.mp4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-paper/40">SRT captions</span>
                    <span className="text-paper">reel.srt</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Changelog */}
          <TabsContent value="changelog">
            <div className="grid lg:grid-cols-[1fr_280px] gap-6">
              <div className="bg-ink border border-line font-mono text-[12px] leading-relaxed overflow-hidden">
                <div className="flex items-center justify-between border-b border-line px-4 py-3 bg-charcoal/60">
                  <div className="flex items-center gap-2">
                    <span className="text-paper/40">📄</span>
                    <span className="text-paper/80">CHANGELOG.md</span>
                  </div>
                  <span className="text-paper/40 text-[10px] uppercase tracking-widish">
                    auto-generated · 2026-06-21
                  </span>
                </div>
                <pre className="p-6 text-paper/85 overflow-x-auto whitespace-pre-wrap">
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

              <div className="bg-charcoal/60 border border-line p-5">
                <div className="font-mono text-[10px] uppercase tracking-widish text-paper/40 mb-4">
                  Detection sources
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-amber font-mono text-[11px]">▸</span>
                    <span className="text-paper/70">
                      Conventional commit prefixes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber font-mono text-[11px]">▸</span>
                    <span className="text-paper/70">
                      Manual BREAKING CHANGE notes in PR body
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber font-mono text-[11px]">▸</span>
                    <span className="text-paper/70">
                      @deprecated JSDoc tags
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber font-mono text-[11px]">▸</span>
                    <span className="text-paper/70">
                      AST diff of public API surface
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber font-mono text-[11px]">▸</span>
                    <span className="text-paper/70">
                      Schema migrations (Prisma, Drizzle, SQL)
                    </span>
                  </li>
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
                <div key={post.platform} className="bg-ink border border-line">
                  <div className="flex items-center justify-between border-b border-line px-4 py-3 bg-charcoal/60">
                    <div className="flex items-center gap-2">
                      <span className="text-paper/40 text-[10px] uppercase tracking-widish">
                        {post.platform}
                      </span>
                      <span className="text-paper/30 text-[10px]">·</span>
                      <span className="text-amber text-[10px] uppercase tracking-widish">
                        {post.tone}
                      </span>
                    </div>
                    <span className="text-paper/30 text-[10px]">ready to publish</span>
                  </div>
                  <div className="p-5">
                    <div className="font-mono text-[11px] text-amber mb-3">
                      {post.handle}
                    </div>
                    <p className="text-paper/85 text-[15px] leading-relaxed whitespace-pre-line">
                      {post.body}
                    </p>
                    <div className="mt-4 pt-3 border-t border-line/40 flex items-center gap-4 text-paper/30 font-mono text-[10px]">
                      <span>♡ 0</span>
                      <span>↻ 0</span>
                      <span>↺ 0</span>
                      <span className="ml-auto text-amber">awaiting review</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Migration */}
          <TabsContent value="migration">
            <div className="grid lg:grid-cols-[1fr_280px] gap-6">
              <div className="bg-ink border border-line">
                <div className="flex items-center justify-between border-b border-line px-4 py-3 bg-charcoal/60">
                  <div className="flex items-center gap-2">
                    <span className="text-paper/40">📘</span>
                    <span className="text-paper/80 font-mono text-[12px]">
                      migration/2.3-to-2.4.md
                    </span>
                  </div>
                  <span className="text-rust text-[10px] uppercase tracking-widish font-mono">
                    ⚠ Breaking
                  </span>
                </div>
                <div className="p-6 md:p-8 space-y-5 text-[15px] text-paper/85 leading-relaxed">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widish text-amber mb-1">
                      Step 01 · Update imports
                    </div>
                    <code className="block bg-charcoal border border-line px-4 py-2.5 font-mono text-[13px] text-paper/90 mt-2">
                      - import {"{ Provider }"} from "@/auth/v1"
                      <br />
                      <span className="text-amber">
                        + import {"{ Provider }"} from "@/auth/v2"
                      </span>
                    </code>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widish text-amber mb-1">
                      Step 02 · Update init call
                    </div>
                    <code className="block bg-charcoal border border-line px-4 py-2.5 font-mono text-[13px] text-paper/90 mt-2">
                      {`- Provider.init({ legacy: true })`}
                      <br />
                      <span className="text-amber">
                        {`+ Provider.init({ schema: `}<span className="text-amber-glow">"2026.06"</span>{`)`}
                      </span>
                    </code>
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-widish text-amber mb-1">
                      Step 03 · Run the auto-migrator
                    </div>
                    <code className="block bg-charcoal border border-line px-4 py-2.5 font-mono text-[13px] text-paper/90 mt-2">
                      <span className="text-paper/50">$</span>{" "}
                      <span className="text-amber">npx @patchwork/migrate auth</span>
                    </code>
                    <p className="text-paper/50 text-sm mt-2">
                      Covers 94% of installations automatically. The remaining
                      6% get a custom diff written by Patchwork based on your
                      actual usage.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal/60 border border-line p-5 space-y-4">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widish text-paper/40">
                    Coverage
                  </div>
                  <div className="font-display text-3xl text-amber mt-1">94%</div>
                  <div className="font-mono text-[10px] text-paper/40 mt-1">
                    auto-migrated
                  </div>
                </div>
                <div className="pt-4 border-t border-line/60">
                  <div className="font-mono text-[10px] uppercase tracking-widish text-paper/40">
                    Avg. time
                  </div>
                  <div className="font-display text-3xl text-paper mt-1">3m</div>
                  <div className="font-mono text-[10px] text-paper/40 mt-1">
                    per project
                  </div>
                </div>
                <div className="pt-4 border-t border-line/60 text-sm text-paper/60 leading-relaxed">
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
              <div className="bg-paper text-ink border border-paper overflow-hidden">
                <div className="px-8 pt-8 pb-2 flex items-center justify-between">
                  <div className="font-display text-2xl font-black">
                    Acme / changelog
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widish text-ink/50">
                    Vol. 024 · 2026-06-21
                  </div>
                </div>
                <div className="px-8 pt-6 pb-2">
                  <div className="font-mono text-[11px] uppercase tracking-widish text-ink/50 mb-1">
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
                    <code className="bg-ink/10 px-1.5 py-0.5 font-mono text-[13px]">
                      npx @patchwork/migrate auth
                    </code>{" "}
                    — it handles 94% of installations in under three minutes.
                  </p>
                  <p className="text-ink/60 text-sm pt-4 border-t border-ink/20">
                    Watch the 4-minute walkthrough{" "}
                    <span className="underline">here</span>, read the full
                    changelog <span className="underline">here</span>, or just
                    upgrade and ship.
                  </p>
                </div>
                <div className="px-8 py-5 border-t border-ink/15 bg-cream/50 flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-widish text-ink/50">
                    Sent 14 min after release · 8,420 subscribers
                  </div>
                  <div className="font-display font-black text-ink">→</div>
                </div>
              </div>

              <div className="bg-charcoal/60 border border-line p-5 space-y-4">
                <div className="font-mono text-[10px] uppercase tracking-widish text-paper/40">
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
                    className="flex items-center gap-3 py-2 border-b border-line/40 last:border-0"
                  >
                    <span className="text-amber">{c.icon}</span>
                    <span className="font-sans text-sm text-paper/80 flex-1">
                      {c.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widish text-paper/40">
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