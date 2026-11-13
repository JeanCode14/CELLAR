import { createRootRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/components/site/useReveal";

function NotFound() {
  return (
    <>
      <PageHero kicker="Erreur 404" title="Cette page n'existe pas.">
        Elle a peut-être été déplacée. Revenez à l'accueil pour continuer.
      </PageHero>
      <div className="wrap py-16">
        <Link to="/" className="btn-primary glow-btn">
          Retour à l'accueil
        </Link>
      </div>
    </>
  );
}

export const Route = createRootRoute({ component: Root, notFoundComponent: NotFound });

function Root() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useReveal(pathname);

  return (
    <>
      <SiteHeader />
      <main key={pathname} className="page-in min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
