import { useState } from "react";
import { Button } from "@/components/ui/button";
import { captureEvent } from "@/lib/analytics";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How it works", href: "#how" },
  { label: "The reel", href: "#reel" },
  { label: "Pipeline", href: "#pipeline" },
  { label: "Use cases", href: "#audience" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  const trackNavLink = (label: string, href: string, location: string) => () => {
    captureEvent("nav_link_clicked", { link_label: label, link_href: href, location });
  };

  const trackCTA = (location: string) => () => {
    captureEvent("cta_clicked", { cta_name: "Request invite", location });
  };

  const toggleMenu = () => {
    const next = !open;
    setOpen(next);
    captureEvent("mobile_menu_toggled", { state: next ? "opened" : "closed" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[11px] uppercase tracking-widish text-muted hover:text-foreground transition-colors"
              onClick={trackNavLink(l.label, l.href, "nav_desktop")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm" onClick={trackCTA("nav_desktop")}>
            <a href="#signup">Request invite</a>
          </Button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] uppercase tracking-widish text-muted py-2"
                onClick={() => {
                  setOpen(false);
                  trackNavLink(l.label, l.href, "nav_mobile")();
                }}
              >
                {l.label}
              </a>
            ))}
            <Button asChild className="mt-2" onClick={trackCTA("nav_mobile")}>
              <a href="#signup">Request invite</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
