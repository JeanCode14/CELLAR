import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/solutions", label: "Nos solutions" },
  { to: "/cellar", label: "CELLAR" },
  { to: "/vision", label: "Notre vision" },
  { to: "/support", label: "Support" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled || open ? "glass-dark border-white/10" : "border-transparent",
      )}
    >
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link to="/" onClick={close} aria-label="CYTOVEX, accueil" className="group">
          <Logo tone="dark" className="[&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:rotate-[120deg]" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-[15px] font-medium text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "!text-white bg-white/10" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary glow-btn h-10 rounded-full px-5 text-sm">
            Nous contacter
          </Link>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-white lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="animate-in fade-in slide-in-from-top-2 lg:hidden" aria-label="Navigation mobile">
          <div className="wrap flex flex-col pb-5">
            {[...NAV, { to: "/contact", label: "Contact" } as const].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={close}
                className="rounded-xl px-3 py-3 text-base font-medium text-white/75"
                activeProps={{ className: "!text-white bg-white/10" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
