# CYTOVEX — site internet

Site de **CYTOVEX**, éditeur de solutions logicielles pour les sciences du vivant (*Science, engineered digitally.*),
et de son premier logiciel **CELLAR** (Cell Entry, Location and Archive Register).

## Pages

- **Accueil** — présentation de CYTOVEX et de sa gamme
- **Nos solutions** — CELLAR, puis STOCK, EQUIP et DATA (noms de travail)
- **CELLAR** — page produit, extraits vidéo accélérés, écran de démarrage animé
- **Notre vision** — mission, ambition, engagements
- **Support** — documentation, assistance, questions fréquentes
- **Contact** — formulaire (adresse de réception à définir dans `src/data/site.ts`)

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

- Textes des pages : `src/routes/` (un fichier par page)
- Logiciels de la gamme : `src/data/apps.ts`
- Couleurs et styles : `src/styles.css`
- Images : `src/assets/` — vidéos et écran de démarrage : `public/`
