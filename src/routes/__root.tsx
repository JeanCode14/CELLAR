import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-sm font-semibold text-science">Erreur 404</p>
      <h1 className="mt-3 text-4xl font-semibold">Cette page n'existe pas.</h1>
      <p className="lead mt-4">Elle a peut-être été déplacée. Revenez à l'accueil pour continuer.</p>
      <Link to="/" className="btn-primary mt-8">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export const Route = createRootRoute({ component: Root, notFoundComponent: NotFound });

function Root() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
