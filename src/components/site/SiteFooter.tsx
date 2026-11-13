import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { suiteApps, statusLabel } from "@/data/apps";

export function SiteFooter() {
  return (
    <footer className="bg-night text-white/70">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <Logo tone="dark" />
          <p className="mt-5 font-display text-lg text-white">Science, engineered digitally.</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed">
            Éditeur de solutions logicielles pour les sciences du vivant.
          </p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">Solutions</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {suiteApps.map((app) => (
              <li key={app.id}>
                {app.id === "cellar" ? (
                  <Link to="/cellar" className="hover:text-white">
                    {app.name}
                  </Link>
                ) : (
                  <span>
                    {app.name} <span className="text-white/40">· {statusLabel[app.status].toLowerCase()}</span>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">Entreprise</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/vision" className="hover:text-white">Notre vision</Link></li>
            <li><Link to="/solutions" className="hover:text-white">Nos solutions</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold text-white">Aide</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/support" className="hover:text-white">Support</Link></li>
            <li><Link to="/support" className="hover:text-white">Questions fréquentes</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-5 text-xs text-white/50">© {new Date().getFullYear()} CYTOVEX. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
