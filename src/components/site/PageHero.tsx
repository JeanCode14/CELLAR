import type { ReactNode } from "react";

/** Bandeau d'en-tête des pages intérieures, sur fond bleu nuit. */
export function PageHero({ kicker, title, children }: { kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-night">
      <div className="dot-grid absolute inset-0" aria-hidden="true" />
      <div className="wrap relative py-20 md:py-24">
        <p className="text-sm font-semibold text-teal">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.08] text-white md:text-[3.4rem]">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{children}</p>}
      </div>
    </section>
  );
}
