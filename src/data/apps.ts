import cellarIconUrl from "@/assets/cellar_icon.png";

export type AppStatus = "test" | "disponible" | "bientot";

export interface SuiteApp {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  status: AppStatus;
  icon: string;
  /** Internal page presenting the app. */
  to: "/presentation" | "/atouts";
}

/**
 * Registry of the applications presented on the site.
 * To add a future application, append an entry here: it appears automatically
 * on the home page and in the footer.
 */
export const suiteApps: SuiteApp[] = [
  {
    id: "cellar",
    name: "CELLAR",
    fullName: "Cell Entry, Location and Archive Register",
    tagline:
      "Gestion de stock pour la cryoconservation : cellules, échantillons et réactifs, en cuves d'azote ou congélateurs.",
    status: "test",
    icon: cellarIconUrl,
    to: "/presentation",
  },
];

export const statusLabel: Record<AppStatus, string> = {
  test: "Phase test",
  disponible: "Disponible",
  bientot: "Bientôt",
};
