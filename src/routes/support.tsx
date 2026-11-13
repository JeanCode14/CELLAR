import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, LifeBuoy, MessageSquare } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — CYTOVEX" },
      { name: "description", content: "Documentation, assistance et questions fréquentes sur les logiciels CYTOVEX." },
    ],
  }),
  component: Support,
});

const FAQ = [
  {
    q: "CELLAR est-il déjà disponible ?",
    a: "CELLAR est en phase de test en conditions réelles. Les laboratoires intéressés peuvent nous contacter pour participer aux essais.",
  },
  {
    q: "Quels équipements CELLAR prend-il en charge ?",
    a: "Les cuves d'azote liquide (phase liquide ou vapeur) et les congélateurs −80 °C et −20 °C, avec leurs racks, canisters et boîtes 9×9 ou 10×10.",
  },
  {
    q: "Plusieurs personnes peuvent-elles utiliser CELLAR ?",
    a: "Oui. Chaque utilisateur a son compte et ses droits, définis par un administrateur, et chaque action est enregistrée dans l'historique.",
  },
  {
    q: "Peut-on exporter l'inventaire ?",
    a: "Oui, l'inventaire et les sorties d'ampoules s'exportent en fichier Excel.",
  },
  {
    q: "L'interface existe-t-elle en mode sombre ?",
    a: "Oui, comme toutes les interfaces CYTOVEX, CELLAR propose un mode clair et un mode sombre.",
  },
];

function Support() {
  return (
    <>
      <PageHero kicker="Support" title="Nous vous accompagnons.">
        Documentation, assistance et réponses aux questions les plus fréquentes.
      </PageHero>

      <section data-stagger className="wrap grid gap-6 py-20 md:grid-cols-3 md:py-24">
        <div className="lift group rounded-2xl border border-line bg-white p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-science/10 text-science transition-transform duration-500 group-hover:rotate-12"><BookOpen className="h-5 w-5" /></span>
          <h2 className="mt-4 text-xl font-semibold">Documentation</h2>
          <p className="mt-2 leading-relaxed text-slate">
            Le guide d'utilisation de CELLAR sera publié ici à la fin de la phase de test.
          </p>
          <p className="mt-4 text-sm font-medium text-slate">En préparation</p>
        </div>
        <div className="lift group rounded-2xl border border-line bg-white p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-science/10 text-science transition-transform duration-500 group-hover:rotate-12"><LifeBuoy className="h-5 w-5" /></span>
          <h2 className="mt-4 text-xl font-semibold">Assistance</h2>
          <p className="mt-2 leading-relaxed text-slate">
            Un problème, une question sur votre installation ? Décrivez-le, nous revenons vers vous.
          </p>
          <Link to="/contact" className="mt-4 inline-block font-semibold text-science hover:underline">
            Contacter l'assistance
          </Link>
        </div>
        <div className="lift group rounded-2xl border border-line bg-white p-7">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-science/10 text-science transition-transform duration-500 group-hover:rotate-12"><MessageSquare className="h-5 w-5" /></span>
          <h2 className="mt-4 text-xl font-semibold">Suggestions</h2>
          <p className="mt-2 leading-relaxed text-slate">
            Une idée d'amélioration pour CELLAR ou un besoin pour un futur logiciel ? Elle nous intéresse.
          </p>
          <Link to="/contact" className="mt-4 inline-block font-semibold text-science hover:underline">
            Proposer une idée
          </Link>
        </div>
      </section>

      <section id="faq" className="border-t border-line bg-mist py-20 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <h2 className="text-3xl font-semibold leading-tight md:text-[2.4rem]">Questions fréquentes.</h2>
          <div data-stagger className="divide-y divide-line border-y border-line">
            {FAQ.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-semibold">
                  {f.q}
                  <span className="text-2xl font-normal text-science transition-transform group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate animate-in fade-in slide-in-from-top-1 duration-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
