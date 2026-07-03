# Morialkar Blog

Bilingual FR/EN static technical blog and portfolio built with Astro 5, TypeScript strict mode, MDX, React islands, Tailwind CSS v4, and Expressive Code.

## Features

- French and English routes with Astro built-in i18n
- Content collections for typed blog posts
- RSS feeds per locale and sitemap generation
- Fixed editorial-style sidebar inspired by Iceberg, recolored to a bold magenta/plum palette
- React-powered mobile navigation drawer
- Static-first output ready for deployment to cPanel over SSH

## Tech stack

- Astro
- TypeScript
- React islands
- MDX
- Tailwind CSS v4 via `@tailwindcss/vite`
- `astro-expressive-code`
- `@astrojs/rss`
- `@astrojs/sitemap`

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run check
npm run lint
npm run build
```

## Project structure

```txt
src/
  components/
  config/
  content/
  i18n/
  layouts/
  lib/
  pages/
  styles/
public/
  images/
```

## Content

- Blog posts live in `src/content/blog/fr` and `src/content/blog/en`
- Each locale mirrors the same article slugs for easy FR/EN switching
- TODO: add real hero images, projects, and personal bio copy

## Deployment

The repository includes a GitHub Actions deployment scaffold for cPanel over SSH.

- CI: `.github/workflows/ci.yml`
- Deploy: `.github/workflows/deploy.yml`

The deploy workflow expects these secrets to be configured in GitHub:

- `SSH_HOST`
- `SSH_USER`
- `SSH_PORT`
- `SSH_KEY`
- `DEPLOY_PATH`

## Notes

- TODO: confirm the final production domain and update `astro.config.ts`
- TODO: replace placeholder LinkedIn link and any temporary copy
- TODO: capture screenshots and place them in this README

---

# Morialkar Blog

Blog technique et portfolio statiques, bilingues FR/EN, construits avec Astro 5, TypeScript strict, MDX, React islands, Tailwind CSS v4 et Expressive Code.

## Fonctionnalités

- Routes françaises et anglaises avec l’i18n intégrée d’Astro
- Content collections typées pour les articles
- Flux RSS par langue et sitemap généré automatiquement
- Sidebar éditoriale inspirée d’Iceberg, recolorée en magenta/plum maximaliste
- Menu mobile animé via une petite île React
- Sortie statique prête pour un déploiement cPanel via SSH

## Stack technique

- Astro
- TypeScript
- React islands
- MDX
- Tailwind CSS v4 via `@tailwindcss/vite`
- `astro-expressive-code`
- `@astrojs/rss`
- `@astrojs/sitemap`

## Démarrage

```bash
npm install
npm run dev
```

## Build

```bash
npm run check
npm run lint
npm run build
```

## Structure du projet

```txt
src/
  components/
  config/
  content/
  i18n/
  layouts/
  lib/
  pages/
  styles/
public/
  images/
```

## Contenu

- Les articles vivent dans `src/content/blog/fr` et `src/content/blog/en`
- Chaque langue reprend les mêmes slugs pour faciliter le switch FR/EN
- TODO: ajouter de vraies images de couverture, des projets et un bio personnel

## Déploiement

Le dépôt inclut un squelette GitHub Actions pour un déploiement cPanel via SSH.

- CI : `.github/workflows/ci.yml`
- Déploiement : `.github/workflows/deploy.yml`

Le workflow de déploiement attend les secrets GitHub suivants :

- `SSH_HOST`
- `SSH_USER`
- `SSH_PORT`
- `SSH_KEY`
- `DEPLOY_PATH`

## Notes

- TODO: confirmer le domaine final et mettre à jour `astro.config.ts`
- TODO: remplacer le lien LinkedIn factice et les textes temporaires
- TODO: ajouter des captures d’écran dans ce README
