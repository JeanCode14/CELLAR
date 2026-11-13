import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useT } from "@/i18n";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", key: "home" },
  { to: "/solutions", key: "solutions" },
  { to: "/cellar", key: "cellar" },
  { to: "/vision", key: "vision" },
  { to: "/support", key: "support" },
] as const;

export function SiteHeader() {
  const t = useT();
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
        <Link to="/" onClick={close} aria-label={t.nav.homeLabel} className="group">
          <Logo tone="dark" className="[&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:rotate-[120deg]" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label={t.nav.mainNav}>
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className="rounded-full px-4 py-2 text-[15px] font-medium text-white/70 transition-colors hover:text-white"
              activeProps={{ className: "!text-white bg-white/10" }}
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Link to="/contact" className="btn-primary glow-btn hidden h-10 rounded-full px-5 text-sm lg:inline-flex">
            {t.nav.contactCta}
          </Link>

        <button
          type="button"
          className="rounded-full p-2 text-white lg:hidden"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        </div>
      </div>

      {open && (
        <nav className="animate-in fade-in slide-in-from-top-2 lg:hidden" aria-label={t.nav.mobileNav}>
          <div className="wrap flex flex-col pb-5">
            {[...NAV, { to: "/contact", key: "contact" } as const].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: true }}
                onClick={close}
                className="rounded-xl px-3 py-3 text-base font-medium text-white/75"
                activeProps={{ className: "!text-white bg-white/10" }}
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
