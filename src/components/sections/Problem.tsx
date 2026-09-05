import { AlertTriangle, CheckCircle2 } from "lucide-react";

export function Problem() {
  return (
    <section className="relative border-y border-border bg-surface/50 py-24 md:py-32 overflow-hidden">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: framing */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="inline-block font-mono text-[10px] uppercase tracking-widish text-danger mb-6">
              · The problem
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-tightest text-foreground text-balance">
              You ship on{" "}
              <span className="italic font-light text-accent">Tuesday</span>.
              <br />
              Your users find out on{" "}
              <span className="italic font-light text-danger">Friday</span>.
            </h2>
            <p className="mt-8 text-muted text-lg leading-relaxed max-w-md text-pretty">
              Every release is a story. Most of them go untold — because telling
              them takes a writer, a video editor, a social manager, and three
              days you don't have.
            </p>
          </div>

          {/* Right: the gap, visualized */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              <div className="border border-border bg-white p-6 md:p-8 relative shadow-sm">
                <div className="absolute top-0 left-0 px-3 py-1 bg-danger-subtle border-r border-b border-danger/20">
                  <span className="font-mono text-[10px] uppercase tracking-widish text-danger">
                    Today
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  <ProblemRow
                    icon={<AlertTriangle size={14} className="text-danger" />}
                    day="Tue"
                    label="Ship v2.4.0"
                    sub="3 breaking changes, 12 new features"
                  />
                  <ProblemRow
                    icon={<AlertTriangle size={14} className="text-danger" />}
                    day="Fri"
                    label="Update CHANGELOG.md"
                    sub="if anyone remembers"
                  />
                  <ProblemRow
                    icon={<AlertTriangle size={14} className="text-danger" />}
                    day="Mon+"
                    label="Record walkthrough video"
                    sub="UI has already changed twice"
                  />
                  <ProblemRow
                    icon={<AlertTriangle size={14} className="text-danger" />}
                    day="??? "
                    label="Post to social"
                    sub="doesn't happen"
                  />
                </div>
              </div>

              <div className="border border-accent/40 bg-accent-subtle/50 p-6 md:p-8 relative">
                <div className="absolute top-0 left-0 px-3 py-1 bg-accent border-r border-b border-accent/50">
                  <span className="font-mono text-[10px] uppercase tracking-widish text-accent-text font-bold">
                    With Patchwork
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  <ProblemRow
                    icon={<CheckCircle2 size={14} className="text-success" />}
                    day="Tue"
                    label="Ship v2.4.0"
                    sub="Patchwork watches the merge"
                  />
                  <ProblemRow
                    icon={<CheckCircle2 size={14} className="text-success" />}
                    day="Tue"
                    label="Release reel generated"
                    sub="CHANGELOG, video, social clips, migration guide"
                  />
                  <ProblemRow
                    icon={<CheckCircle2 size={14} className="text-success" />}
                    day="Tue"
                    label="Published to all channels"
                    sub="ready for review in < 90 seconds"
                  />
                  <ProblemRow
                    icon={<CheckCircle2 size={14} className="text-success" />}
                    day="Tue"
                    label="Users know what's new"
                    sub="while the change is still fresh"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemRow({
  icon,
  day,
  label,
  sub,
}: {
  icon: React.ReactNode;
  day: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="font-mono text-[11px] uppercase tracking-widish text-subtle min-w-[60px] pt-0.5">
        {day}
      </span>
      <span className="pt-0.5">{icon}</span>
      <div className="flex-1 min-w-0">
        <div className="font-sans text-foreground leading-tight">{label}</div>
        <div className="font-mono text-[11px] text-muted mt-0.5">{sub}</div>
      </div>
    </div>
  );
}
