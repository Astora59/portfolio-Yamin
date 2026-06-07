# ACPortfolio (Portfolio ISCOD)

Projet Angular généré initialement avec [Angular CLI](https://github.com/angular/angular-cli) v15.2.0 et géré via Nx.

## Prérequis

- Node.js (version 18 ou supérieure recommandée)
- npm
- git

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/ArnaudClaire/portfolioISCOD.git
cd portfolioISCOD
```

2. Installer les dépendances :

```bash
npm install
```

3. Lancer le serveur de développement :

```bash
npm run start
```

4. Ouvrir l’application :

- `http://localhost:4200/`

> Remarque : si `nx` n’est pas trouvé, utiliser `npx nx serve` (ou installer Nx globalement : `npm i -g nx`).

## Scripts disponibles

- `npm run start` : lance l’application en mode développement
- `npm run build` : construit l’application pour production dans `dist/`
- `npm run test` : exécute les tests unitaires (Karma/Jasmine)
- `npm run lint` : analyse le code pour les erreurs de style et de qualité

## Structure du projet

- `src/app/` : code principal de l’application
- `src/app/components/` : tous les composants Angular
- `src/app/services/` : services métier (API, données, etc.)
- `src/assets/` : ressources statiques (images, médias)

## Développement

- Ajouter un nouveau composant :
  `ng generate component <nom-du-composant>`
- Ajouter un service :
  `ng generate service <nom-du-service>`

## Déploiement

1. Compiler en production :

```bash
npm run build
```

2. Déployer le contenu de `dist/` sur un serveur web (Netlify, Vercel, GitHub Pages, IIS, etc.).

## Notes

- Le projet est un portfolio personnel avec des routes : Accueil, À propos, Compétences, Réalisations, Contact.
- Assurer que `environment.ts` est configuré pour les URLs d’API si besoin.

## Support

Pour toute question, ouvre une issue sur le dépôt ou contacte l’auteur via la page Contact de l’application.

