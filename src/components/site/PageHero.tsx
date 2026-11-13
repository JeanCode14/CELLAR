import type { ReactNode } from "react";
import { NetworkField } from "./NetworkField";

/** Bandeau d'en-tête des pages intérieures, sur fond bleu nuit animé. */
export function PageHero({ kicker, title, children }: { kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section data-hero className="relative overflow-hidden bg-night">
      <div className="pointer-events-none absolute -right-32 -top-40 h-[30rem] w-[30rem] rounded-full bg-science/25 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-teal/15 blur-3xl" aria-hidden="true" />
      <NetworkField density={0.8} />
      <div className="wrap hero-in relative pb-16 pt-28 md:pb-24 md:pt-40">
        <p className="text-sm font-semibold text-teal">{kicker}</p>
        <h1 className="mt-3 max-w-3xl text-[2.2rem] font-semibold leading-[1.08] text-white sm:text-4xl md:text-[3.4rem]">{title}</h1>
        {children && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">{children}</p>}
      </div>
    </section>
  );
}
