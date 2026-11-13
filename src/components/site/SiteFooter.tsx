import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { suiteApps } from "@/data/apps";
import { useT } from "@/i18n";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="bg-night text-white/70">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 font-display text-lg text-white">Science, engineered digitally.</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed">{t.footer.tagline}</p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">{t.footer.solutions}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {suiteApps.map((app) => (
              <li key={app.id}>
                {app.id === "cellar" ? (
                  <Link to="/cellar" className="hover:text-white">
                    {app.name}
                  </Link>
                ) : (
                  <span>
                    {app.name} <span className="text-white/40">· {t.status[app.status].toLowerCase()}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">{t.footer.company}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/vision" className="hover:text-white">{t.nav.vision}</Link></li>
            <li><Link to="/solutions" className="hover:text-white">{t.nav.solutions}</Link></li>
            <li><Link to="/contact" className="hover:text-white">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">{t.footer.help}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/support" className="hover:text-white">{t.nav.support}</Link></li>
            <li><Link to="/support" className="hover:text-white">{t.footer.faq}</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-5 text-xs text-white/50">© {new Date().getFullYear()} CYTOVEX. {t.footer.rights}</p>
      </div>
    </footer>
  );
}
