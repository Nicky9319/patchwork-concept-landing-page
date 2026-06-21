import { Logo } from "@/components/brand/Logo";
import { FilmStrip } from "@/components/brand/FilmStrip";

const cols = [
  {
    title: "Product",
    links: ["How it works", "The reel", "Pipeline", "Changelog"],
  },
  {
    title: "Resources",
    links: ["Docs", "API reference", "Examples", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink overflow-hidden">
      <FilmStrip className="w-full h-6 opacity-50" variant="paper" frames={24} />

      <div className="container py-16">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5">
            <Logo size="md" />
            <p className="mt-6 max-w-sm text-paper/60 leading-relaxed text-pretty">
              Patchwork turns every release into a story worth telling. Built
              for teams who ship.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widish text-paper/40">
              <span className="inline-block h-2 w-2 rounded-full bg-amber animate-pulseSoft" />
              All systems reel-ing
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-3 gap-6">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono text-[10px] uppercase tracking-widish text-paper/40 mb-4">
                  {c.title}
                </h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="font-sans text-sm text-paper/70 hover:text-amber transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="font-mono text-[11px] uppercase tracking-widish text-paper/40">
            © 2026 Patchwork Labs · Made for people who ship
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widish text-paper/40">
            <a href="#" className="hover:text-paper">
              Privacy
            </a>
            <a href="#" className="hover:text-paper">
              Terms
            </a>
            <a href="#" className="hover:text-paper">
              Security
            </a>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative overflow-hidden border-t border-line">
        <div className="font-display font-black text-[18vw] leading-none text-paper/[0.04] text-center select-none py-2">
          PATCHWORK
        </div>
      </div>
    </footer>
  );
}