import cellarIcon from "@/assets/cellar_icon.png";

export type AppStatus = "test" | "disponible" | "preparation";
export type AppId = "cellar" | "stock" | "equip" | "data";

export interface SuiteApp {
  id: AppId;
  name: string;
  status: AppStatus;
  /** Couleur secondaire propre au logiciel (charte CYTOVEX). */
  color: string;
  icon?: string;
}

/**
 * Logiciels CYTOVEX. Les textes (domaine, description) sont traduits dans src/i18n/*.ts, rubrique « apps ».
 * STOCK, EQUIP et DATA sont des noms de travail, à valider avant leur adoption.
 */
export const suiteApps: SuiteApp[] = [
  { id: "cellar", name: "CELLAR", status: "test", color: "#6aa8de", icon: cellarIcon },
  { id: "stock", name: "STOCK", status: "preparation", color: "#25b7a5" },
  { id: "equip", name: "EQUIP", status: "preparation", color: "#7a8fd6" },
  { id: "data", name: "DATA", status: "preparation", color: "#e08a2e" },
];
