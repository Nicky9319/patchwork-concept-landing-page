import { Logo } from "@/components/brand/Logo";
import { FilmStrip } from "@/components/brand/FilmStrip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, Check } from "lucide-react";
import { useState } from "react";

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
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "submitting") return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 900);
  };

  return (
    <footer className="relative border-t border-border bg-white overflow-hidden">
      <FilmStrip className="w-full h-6 opacity-30" variant="subtle" frames={24} />

      <div className="container py-16">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5">
            <Logo size="md" />
            <p className="mt-6 max-w-sm text-muted leading-relaxed text-pretty">
              Patchwork turns every release into a story worth telling. Built
              for teams who ship.
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-widish text-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulseSoft" />
              All systems reel-ing
            </div>

            {/* Email updates */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 max-w-sm"
            >
              <Label htmlFor="footer-email" className="sr-only">
                Email for updates
              </Label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Mail
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-subtle"
                  />
                  <Input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === "success") setStatus("idle");
                    }}
                    placeholder="updates@yourcompany.dev"
                    required
                    className="pl-9"
                    disabled={status === "submitting"}
                  />
                </div>
                {status === "success" ? (
                  <div className="inline-flex h-9 w-9 items-center justify-center bg-success text-white">
                    <Check size={14} />
                  </div>
                ) : (
                  <Button
                    type="submit"
                    size="sm"
                    className="group"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      "..."
                    ) : (
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    )}
                  </Button>
                )}
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widish text-subtle">
                {status === "success"
                  ? "Thanks — you're subscribed."
                  : "Release tips, no spam."}
              </p>
            </form>
          </div>

          <div className="lg:col-span-7 grid grid-cols-3 gap-6">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono text-[10px] uppercase tracking-widish text-muted mb-4">
                  {c.title}
                </h4>
                <ul className="space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="font-sans text-sm text-muted hover:text-accent transition-colors"
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

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="font-mono text-[11px] uppercase tracking-widish text-muted">
            © 2026 Patchwork Labs · Made for people who ship
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-widish text-muted">
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground">
              Terms
            </a>
            <a href="#" className="hover:text-foreground">
              Security
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wordmark — dark and sized to fit the viewport width */}
      <div className="relative overflow-hidden border-t border-border bg-surface/30">
        <div className="font-display font-black text-[10vw] md:text-[8vw] leading-none text-foreground/25 text-center select-none py-4 md:py-6 whitespace-nowrap">
          PATCHWORK
        </div>
      </div>
    </footer>
  );
}
