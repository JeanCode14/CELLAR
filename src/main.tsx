import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashHistory, createMemoryHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

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

// Titre de l'onglet repris de la déclaration head() de chaque page.
router.subscribe("onResolved", () => {
  const titles = router.state.matches
    .flatMap((m) => (m.meta ?? []) as Array<{ title?: string } | undefined>)
    .map((m) => m?.title)
    .filter(Boolean);
  if (titles.length) document.title = titles[titles.length - 1]!;
});

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
