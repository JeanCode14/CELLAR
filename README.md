# CELLAR — site de présentation

Site vitrine de **CELLAR** (Cell Entry, Location and Archive Register), l'application de gestion de stock pour la cryoconservation : cellules, échantillons et réactifs en cuves d'azote liquide et congélateurs.

## Pages

- **Accueil** — présentation générale et démo de localisation d'un cryotube
- **Présentation** — le constat, le fonctionnement, le nom C·E·L·A·R
- **Atouts** — points forts de l'application

## Mise en ligne

Le site est publié automatiquement sur GitHub Pages à chaque modification de la branche `main`
(voir `.github/workflows/deploy.yml`).

## Travailler en local

```bash
npm install
npm run dev     # aperçu sur http://localhost:5173
npm run build   # version finale dans le dossier dist/
```

## Modifier le contenu

- Textes des pages : `src/routes/index.tsx`, `presentation.tsx`, `atouts.tsx`
- Applications de la suite : `src/data/apps.ts`
- Couleurs et styles : `src/styles.css`
- Images : `src/assets/`
