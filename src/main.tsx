import "./styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashHistory, createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

// Navigation par « # » : fonctionne sur n'importe quel hébergement statique (GitHub Pages, etc.).
const router = createRouter({ routeTree, history: createHashHistory(), scrollRestoration: true });

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
