import { useEffect } from "react";
import { createRootRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PageHero } from "@/components/site/PageHero";
import { useReveal } from "@/components/site/useReveal";
import { useI18n, useT } from "@/i18n";

function NotFound() {
  const t = useT();
  return (
    <>
      <PageHero kicker={t.notFound.kicker} title={t.notFound.title}>
        {t.notFound.text}
      </PageHero>
      <div className="wrap py-16">
        <Link to="/" className="btn-primary glow-btn rounded-full">
          {t.notFound.back}
        </Link>
      </div>
    </>
  );
}

export const Route = createRootRoute({ component: Root, notFoundComponent: NotFound });

function Root() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { t, lang } = useI18n();
  useReveal(`${pathname}|${lang}`);

  useEffect(() => {
    const titles = t.meta as Record<string, string>;
    document.title = titles[pathname] ?? titles["/"]!;
  }, [pathname, t]);

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
