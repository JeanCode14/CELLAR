import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashHistory, createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { LanguageProvider } from "./i18n";

// Navigation par « # » : fonctionne sur n'importe quel hébergement statique (GitHub Pages, etc.).
// VITE_MEMORY_HISTORY=1 : navigation sans modifier l'adresse (pour un aperçu intégré dans une autre page).
const history = import.meta.env.VITE_MEMORY_HISTORY ? createMemoryHistory() : createHashHistory();
const router = createRouter({ routeTree, history, scrollRestoration: true });
router.subscribe("onResolved", ({ pathChanged }) => {
  if (pathChanged) window.scrollTo(0, 0);
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Le titre de l'onglet est géré par la mise en page (src/routes/__root.tsx), dans la langue choisie.

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);
