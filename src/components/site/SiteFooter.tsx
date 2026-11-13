import { Link } from "@tanstack/react-router";
import { suiteApps, statusLabel } from "@/data/apps";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold">
            CELLAR
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Des applications pensées pour le quotidien des laboratoires de recherche.
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Applications</p>
          <ul className="mt-4 space-y-2 text-sm">
            {suiteApps.map((app) => (
              <li key={app.id}>
                <Link to={app.to} className="flex items-center gap-2 hover:text-primary">
                  <img src={app.icon} alt="" className="h-5 w-5" />
                  {app.name}
                  <span className="text-xs text-muted-foreground">· {statusLabel[app.status]}</span>
                </Link>
              </li>
            ))}
            <li className="text-muted-foreground">D'autres à venir…</li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Accueil</Link></li>
            <li><Link to="/presentation" className="hover:text-primary">Présentation</Link></li>
            <li><Link to="/atouts" className="hover:text-primary">Points forts & atouts</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} CELLAR — Actuellement en phase de test.
        </p>
      </div>
    </footer>
  );
}
