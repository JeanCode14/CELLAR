import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Notre vision — CYTOVEX" },
      { name: "description", content: "Mission, vision et engagements de CYTOVEX, éditeur de logiciels pour les sciences du vivant." },
    ],
  }),
  component: Vision,
});

const VALUES = [
  { name: "Rigueur scientifique", text: "Nos logiciels partent des pratiques réelles des laboratoires et respectent leur vocabulaire." },
  { name: "Fiabilité", text: "Une donnée enregistrée doit rester exacte, datée et retrouvable, des années plus tard." },
  { name: "Simplicité", text: "Un outil utile est un outil qu'on adopte : l'interface doit se comprendre d'elle-même." },
  { name: "Innovation", text: "Nous utilisons le numérique là où il fait gagner du temps ou de la sécurité, pas pour lui-même." },
  { name: "Sécurité", text: "Droits par utilisateur, historique de chaque action, protection des données du laboratoire." },
];

const TONE = [
  "Professionnels, sans être froids.",
  "Scientifiques, sans être inutilement complexes.",
  "Innovants, sans promesses exagérées.",
  "Accessibles aux chercheurs, aux techniciens et aux responsables de laboratoire.",
];

function Vision() {
  return (
    <>
      <PageHero kicker="Notre vision" title="Les bons outils numériques pour mieux maîtriser la science.">
        CYTOVEX est un éditeur de solutions logicielles dédié aux sciences du vivant.
      </PageHero>

      <section className="wrap grid gap-12 py-20 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="text-sm font-semibold text-science">Notre mission</h2>
          <p className="mt-3 font-display text-2xl font-medium leading-snug md:text-[1.9rem]">
            Rendre les activités scientifiques plus simples, plus fiables et mieux maîtrisées grâce au numérique.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-science">Notre ambition</h2>
          <p className="mt-3 font-display text-2xl font-medium leading-snug md:text-[1.9rem]">
            Devenir un éditeur de référence pour les outils numériques des laboratoires.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-mist py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">Nos engagements.</h2>
          <dl className="divide-y divide-line border-y border-line">
            {VALUES.map((v) => (
              <div key={v.name} className="grid gap-2 py-6 sm:grid-cols-[13rem_1fr]">
                <dt className="font-display text-lg font-semibold">{v.name}</dt>
                <dd className="leading-relaxed text-slate">{v.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="wrap grid gap-12 py-20 md:py-24 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">De CELLAR à la gamme complète.</h2>
        </div>
        <div className="space-y-5 text-lg leading-relaxed text-slate">
          <p>
            CELLAR est notre premier logiciel, pas notre définition. De la gestion des lignées cellulaires à la maîtrise
            des stocks, des équipements et des données scientifiques, notre ambition est de simplifier les processus,
            de renforcer la traçabilité et de faciliter le travail des équipes.
          </p>
          <p className="font-medium text-ink">Comment nous parlons aux laboratoires :</p>
          <ul className="space-y-2">
            {TONE.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
