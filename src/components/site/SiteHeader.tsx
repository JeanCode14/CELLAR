import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/solutions", label: "Nos solutions" },
  { to: "/cellar", label: "CELLAR" },
  { to: "/vision", label: "Notre vision" },
  { to: "/support", label: "Support" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-6">
        <Link to="/" onClick={close} aria-label="CYTOVEX, accueil">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3.5 py-2 text-[15px] font-medium text-slate transition-colors hover:text-night"
              activeProps={{ className: "!text-science" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-primary h-10 px-5 text-sm">
            Nous contacter
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-night lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <nav className={cn("border-t border-line bg-white lg:hidden", !open && "hidden")} aria-label="Navigation mobile">
        <div className="wrap flex flex-col py-3">
          {[...NAV, { to: "/contact", label: "Contact" } as const].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={close}
              className="rounded-md px-2 py-3 text-base font-medium text-ink"
              activeProps={{ className: "!text-science" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
