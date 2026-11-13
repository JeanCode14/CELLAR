import cellarIcon from "@/assets/cellar_icon.png";

export type AppStatus = "test" | "disponible" | "preparation";

export interface SuiteApp {
  id: string;
  name: string;
  domain: string;
  description: string;
  status: AppStatus;
  /** Couleur secondaire propre au logiciel (charte CYTOVEX). */
  color: string;
  icon?: string;
}

/**
 * Logiciels CYTOVEX. Pour ajouter un logiciel, ajoutez une entrée ici :
 * il apparaît automatiquement sur l'accueil, la page Nos solutions et le pied de page.
 * STOCK, EQUIP et DATA sont des noms de travail, à valider avant leur adoption.
 */
export const suiteApps: SuiteApp[] = [
  {
    id: "cellar",
    name: "CELLAR",
    domain: "Cryoconservation et lignées cellulaires",
    description:
      "Le registre des cuves d'azote et congélateurs : chaque cellule, échantillon ou réactif localisé à la position près, avec son historique.",
    status: "test",
    color: "#6aa8de",
    icon: cellarIcon,
  },
  {
    id: "stock",
    name: "STOCK",
    domain: "Stocks et consommables",
    description: "Suivre les quantités, les lots et les dates de péremption, et anticiper les commandes.",
    status: "preparation",
    color: "#25b7a5",
  },
  {
    id: "equip",
    name: "EQUIP",
    domain: "Équipements et maintenance",
    description: "Recenser les appareils du laboratoire, planifier les maintenances et garder leur historique.",
    status: "preparation",
    color: "#7a8fd6",
  },
  {
    id: "data",
    name: "DATA",
    domain: "Données scientifiques",
    description: "Réunir, suivre et valoriser les données produites par le laboratoire.",
    status: "preparation",
    color: "#e08a2e",
  },
];

export const statusLabel: Record<AppStatus, string> = {
  test: "En phase de test",
  disponible: "Disponible",
  preparation: "En préparation",
};
