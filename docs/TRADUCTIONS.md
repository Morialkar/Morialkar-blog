# Inventaire des traductions du site

Ce document recense les textes affichés par le site, leur position et leur état de traduction. Il peut servir de feuille de contenu pour finaliser les versions française et anglaise.

> **Mise à jour éditoriale** : les propositions FR/EN ci-dessous alignent le site sur le positionnement public de Naomi (développeuse full-stack senior, créatrice de la méthodologie AFTER et de YVCDB) en vue du lancement de l'article « AFTER: Your Vibe Code Deserves Better ». Les textes originaux sont conservés tels quels dans les colonnes « Texte actuel » / « actuel ». **Note légale importante** : « ingénieure » et « engineer » sont des titres protégés au Québec (OIQ); aucun texte du site ne doit attribuer ce titre à Naomi, dans aucune des deux langues.

## 0. Décisions en attente (à trancher avec Naomi avant remplacement)

1. ✅ **Tranché — Titre héro de l'accueil** : Option B retenue, le one-liner détourné (« L'IA écrit la majorité du code. Naomi prend chaque décision. »). Le cartouche héro prend le texte de repli pour éviter le doublon, voir section 3.
2. ✅ **Tranché — Carte projet 3** : le Quiz Builder (take-home sanitisé), voir section 6.
3. ✅ **Tranché — Titre FR de l'article AFTER** : « AFTER: ton vibe code mérite mieux ». Note éditoriale : cette phrase française est l'origine du nom YVCDB, l'acronyme anglais est venu après; ce n'est pas une traduction. L'anecdote mérite une mention dans la version FR de l'article.
4. ✅ **Tranché — Articles de démonstration** : conservés temporairement, à remplacer par du vrai contenu au fil du temps.
5. ✅ **Tranché — URL LinkedIn** : `https://www.linkedin.com/in/%F0%9F%92%83-naomi-gilbert-5a099b24/` (URL exacte, emoji encodé inclus), voir section 7.
6. ✅ **Tranché — Page 404** : affichage des deux langues empilées (FR puis EN), approuvé.

## Mode d'emploi

- Les routes localisées sont `/fr/...` et `/en/...`.
- Les textes marqués **centralisés** sont dans `src/i18n/ui.ts`. Ils peuvent être modifiés directement dans les objets `fr` et `en`.
- Les textes marqués **à centraliser** sont actuellement écrits en dur dans une page ou un composant. Ils apparaissent donc dans la même langue sur les routes FR et EN.
- Les mentions `TODO` et `placeholder` sont du contenu provisoire à remplacer, pas seulement à traduire.
- Les noms de marque ou de technologie comme Naomi, AFTER, YVCDB, Astro, MDX, GitHub et LinkedIn peuvent rester identiques dans les deux langues.

## 1. Dictionnaire central existant

Fichier source : `src/i18n/ui.ts`, lignes 5 à 78.

| Clé | Position dans le site | Français actuel | Anglais actuel | Français proposé | Anglais proposé | État / action |
| --- | --- | --- | --- | --- | --- | --- |
| `navHome` | Navigation principale | Accueil | Home | Accueil | Home | Conserver |
| `navBlog` | Navigation et boutons vers le blog | Blog | Blog | Blog | Blog | Conserver |
| `navProjects` | Navigation et en-tête Projets | Projets | Projects | Projets | Projects | Conserver |
| `navAbout` | Navigation, en-tête et boutons À propos | À propos | About | À propos | About | Conserver |
| `recentPosts` | Titre « articles récents » | Articles récents | Recent posts | Articles récents | Recent posts | Conserver |
| `readMore` | Lien vers tous les articles sur l'accueil | Lire la suite | Read more | Voir tous les articles | See all posts | Remplacer, plus précis pour un lien d'archive |
| `postedOn` | Métadonnées en haut d'un article | Publié le | Posted on | Publié le | Posted on | Conserver |
| `by` | Métadonnées en haut d'un article | par | by | par | by | Conserver |
| `footer` | Pied de page et barre latérale | Conçu avec Astro, MDX et beaucoup de rose. | Built with Astro, MDX, and a whole lot of pink energy. | Conçu avec Astro, MDX et beaucoup de rose. | Built with Astro, MDX, and a whole lot of pink energy. | Conserver, signature de la marque |
| `notFoundTitle` | Titre de la page 404 | Page introuvable | Page not found | Page introuvable | Page not found | Conserver; corriger l'usage FR-seulement, voir section 8 |
| `notFoundText` | Description de la page 404 | La page demandée semble avoir disparu dans le brouillard magenta. | The page you requested seems to have vanished into the magenta haze. | La page demandée semble avoir disparu dans le brouillard magenta. | The page you requested seems to have vanished into the magenta haze. | Conserver |
| `homeEyebrow` | Pastille et titre SEO de l'accueil | Portfolio bilingue FR / EN | Bilingual FR / EN portfolio | Développeuse full-stack · FR / EN | Full-stack developer · FR / EN | Remplacer : la pastille doit porter le rôle, pas le format du site |
| `homeIntro` | Introduction de l'accueil et description SEO du blog | Un blog technique statique et un portfolio pensé comme une carte de visite vivante : rapide, accessible et volontairement expressif. | A static technical blog and portfolio treated like a living business card: fast, accessible, and intentionally expressive. | Développeuse full-stack senior. Je conçois des méthodologies et de l'outillage pour développer avec l'IA sans sacrifier la rigueur : les specs d'abord, des tests partout, et chaque décision prise par un humain. | Senior full-stack developer. I build methodologies and tooling for AI-assisted development that doesn't sacrifice rigor: specs first, tests everywhere, every decision made by a human. | Remplacer : le positionnement AFTER remplace la description du site |
| `projectsIntro` | Introduction et description SEO de la page Projets | Quelques idées de projets pour montrer la direction visuelle et la qualité d'exécution du site. | A few placeholder projects that showcase the visual direction and execution quality of the site. | De vrais outils, publics et documentés : une méthodologie, son implémentation de référence, et du code de production. | Real tools, public and documented: a methodology, its reference implementation, and production code. | Remplacer le provisoire |
| `aboutIntro` | Introduction et description SEO de la page À propos | Une courte bio placeholder pour Naomi, orientée front-end, design systems et produits statiques à forte personnalité. | A short placeholder bio for Naomi, focused on front-end craft, design systems, and static products with strong personality. | Développeuse full-stack depuis plus de 15 ans, créatrice de la méthodologie AFTER et de YVCDB. J'aime les systèmes exigeants : la conformité d'entreprise, le multi-tenant, et maintenant l'encadrement rigoureux du code généré par IA. | Full-stack developer for 15+ years, creator of the AFTER methodology and YVCDB. I like demanding systems: enterprise compliance, multi-tenancy, and now putting real guardrails around AI-generated code. | Remplacer le placeholder par la bio réelle |
| `rssLabel` | Prévu pour un lien vers le flux RSS | Flux RSS | RSS feed | Flux RSS | RSS feed | Conserver; brancher le lien dans l'interface serait un plus |
| `switchLanguage` | Sélecteur de langue, menu mobile | Changer de langue | Switch language | Changer de langue | Switch language | Conserver |
| `currentLanguage` | Langue actuelle, menu mobile | Langue actuelle | Current language | Langue actuelle | Current language | Conserver |
| `authorName` | Nom dans l'accueil, la barre latérale et les métadonnées | Naomi | Naomi | Naomi | Naomi | Conserver, nom propre |

## 2. Textes communs à toutes les pages

| Position | Fichier | Texte actuel | Français à fournir | Anglais à fournir | État / action |
| --- | --- | --- | --- | --- | --- |
| Slogan sous le logo, bureau et mobile | `src/components/Sidebar.astro:48,64` | Front-end craft, bilingual stories, and maximalist magenta energy. | Développement full-stack, et de l'IA avec de vrais garde-fous. | Full-stack development, and AI with real guardrails. | À centraliser; slogan resserré, le magenta parle de lui-même à l'écran |
| Label accessible de la navigation principale, bureau | `src/components/Sidebar.astro:73` | Primary | Navigation principale | Primary navigation | À centraliser |
| Bouton de changement de langue, bureau | `src/components/LanguageSwitcher.astro:15` | Switch to English / Passer au français | Passer à l'anglais | Switch to French | Logique inversée selon la langue courante; peut rester spécifique au composant |
| Bouton d'ouverture du menu mobile | `src/components/MobileMenu.tsx:74` | Open menu | Ouvrir le menu | Open menu | À centraliser, label accessible |
| Bouton de fermeture du menu mobile | `src/components/MobileMenu.tsx:74` | Close menu | Fermer le menu | Close menu | À centraliser, label accessible |
| Label accessible de la navigation principale, mobile | `src/components/MobileMenu.tsx:85` | Primary | Navigation principale | Primary navigation | À centraliser |
| Lien d'une carte projet | `src/components/ProjectCard.astro:27` | View project | Voir le projet | View project | À centraliser |
| Nom de marque | `src/components/Sidebar.astro:47,63` et pages | Naomi | Naomi | Naomi | Pas de traduction nécessaire |
| Labels des réseaux sociaux | `src/components/SocialLinks.astro:5,11` | GitHub / LinkedIn | GitHub / LinkedIn | GitHub / LinkedIn | Pas de traduction nécessaire |
| Badges du pied de page | `src/layouts/SiteLayout.astro:60,61` | Astro / FR / EN | Astro / FR / EN | Astro / FR / EN | Pas de traduction nécessaire |

## 3. Accueil

Routes : `/fr/` et `/en/`
Fichier : `src/pages/[lang]/index.astro`

| Position visuelle | Ligne | Texte actuel | Français à fournir | Anglais à fournir | État / action |
| --- | --- | --- | --- | --- | --- |
| Grand titre de la section héro | 30 | Naomi builds bilingual front-end experiences with personality. | L'IA écrit la majorité du code. Naomi prend chaque décision. | The AI writes most of the code. Naomi makes every decision. | À centraliser; one-liner AFTER détourné en pitch personnel (décision 0.1) |
| Cartouche posé sur l'image héro | 54 | TODO: replace this hero copy with the exact tagline after the owner confirms the final positioning. | Architecte d'abord, tests rigoureux partout. | Architect first, test everything rigorously. | Remplacer le placeholder; texte de repli retenu puisque le grand titre porte le one-liner |
| Titre au-dessus des cartes d'articles | 65 | Sharp articles, clean delivery. | Notes de terrain du développement assisté par IA. | Field notes from AI-assisted development. | À centraliser; réaligné sur le contenu réel du blog |
| Pastille, introduction et boutons | 28, 32, 38, 44, 52, 64, 68 | Valeurs du dictionnaire central | Voir section 1 | Voir section 1 | Déjà centralisé |

### Redirection de la racine

Route : `/`
Fichier : `src/pages/index.astro`

| Position | Ligne | Texte actuel | Action proposée |
| --- | --- | --- | --- |
| Titre de l'onglet pendant la redirection | 11 | Naomi — redirection | Rendre neutre : « Naomi · Morialkar » |
| Message de secours si JavaScript est bloqué | 29 | Redirecting to /fr/… | Bilingue : « Redirection vers /fr/… / Redirecting to /fr/… » |

## 4. Blog — page d'index

Routes : `/fr/blog/` et `/en/blog/`
Fichier : `src/pages/[lang]/blog/index.astro`

| Position visuelle | Ligne | Texte actuel | Français à fournir | Anglais à fournir | État / action |
| --- | --- | --- | --- | --- | --- |
| Grand titre | 28 | Technical notes, case studies, and build-time opinions. | Notes techniques, études de cas et opinions assumées. | Technical notes, case studies, and build-time opinions. | À centraliser; l'anglais actuel est bon et peut rester |
| Deuxième phrase de l'introduction | 30 | The archive below is sorted from newest to oldest so the strongest work stays visible. | Les archives vont du plus récent au plus ancien, pour garder le meilleur bien en vue. | The archive below is sorted from newest to oldest so the strongest work stays visible. | À centraliser |
| Pastille, titre SEO et début de l'introduction | 19, 20, 27, 30 | Valeurs `navBlog` et `homeIntro` | Voir section 1 | Voir section 1 | Déjà centralisé |

## 5. Blog — page d'un article

Routes : `/fr/blog/[slug]/` et `/en/blog/[slug]/`
Fichier : `src/pages/[lang]/blog/[...slug].astro`

| Position visuelle | Ligne | Texte actuel | Français à fournir | Anglais à fournir | État / action |
| --- | --- | --- | --- | --- | --- |
| Navigation vers l'article plus récent | 75 | ← Newer post | ← Article plus récent | ← Newer post | À centraliser |
| Navigation vers l'article plus ancien | 83 | Older post → | Article plus ancien → | Older post → | À centraliser |
| Date, auteur et retour au blog | 52, 67 | Valeurs `postedOn`, `by`, `authorName`, `backToBlog` | Voir section 1 | Voir section 1 | Déjà centralisé |
| Titre, description, catégorie, tags et corps | Données de l'article | Proviennent du fichier MDX de la langue | Voir section 9 | Voir section 9 | Déjà séparés par langue |

## 6. Projets

Routes : `/fr/projects/` et `/en/projects/`
Fichier : `src/pages/[lang]/projects/index.astro`

Tous les textes ci-dessous sont actuellement en anglais sur les deux langues et représentent du contenu provisoire. Les trois cartes deviennent YVCDB, AFTER et Quiz Builder (décision 0.2).

| Position visuelle | Ligne | Texte actuel | Français à fournir | Anglais à fournir | État / action |
| --- | --- | --- | --- | --- | --- |
| Grand titre | 28 | Selected concepts and client-ready placeholders. | Des outils construits en public, méthodologie incluse. | Tools built in public, methodology included. | À centraliser |
| Carte 1 — statut | 35 | UI concept | CLI open source | Open source CLI | Remplacer |
| Carte 1 — titre | 36 | Magenta Commerce | YVCDB | YVCDB | Remplacer; nom propre, identique dans les deux langues |
| Carte 1 — description | 37 | A punchy marketing storefront concept with editorial storytelling, high-contrast CTAs, and a static-friendly product grid. | Un CLI en Go qui orchestre des agents IA (Claude Code, Codex, OpenCode) à travers des workflows AFTER complets : des phases spécialisées, des portes d'approbation humaine impossibles à sauter, et une isolation Git par phase. | A Go CLI that drives AI agents (Claude Code, Codex, OpenCode) through complete AFTER workflows: specialized phases, human approval gates you can't skip, and per-phase Git isolation. | Remplacer |
| Carte 1 — tags | 38 | Astro, Commerce, Design system | Go, TUI, Agents IA | Go, TUI, AI agents | Remplacer |
| Carte 2 — statut | 41 | Portfolio | Méthodologie | Methodology | Remplacer |
| Carte 2 — titre | 42 | Creative notes | AFTER | AFTER | Remplacer; nom propre |
| Carte 2 — description | 43 | A content-driven portfolio shell that blends case studies, writing, and a strong visual identity in one static build. | Architect First, Test Everything Rigorously : une méthodologie pour le développement assisté par IA, publiée comme spécification avec un fichier protocole à déposer dans n'importe quel projet. | Architect First, Test Everything Rigorously: a methodology for AI-assisted development, published as a specification with a drop-in protocol file for any project. | Remplacer |
| Carte 2 — tags | 44 | MDX, Content, Accessibility | Méthodologie, Protocole, Agents IA | Methodology, Protocol, AI agents | Remplacer |
| Carte 3 — statut | 47 | TODO | Full-stack | Full-stack | Remplacer (décision 0.2) |
| Carte 3 — titre | 48 | Future collaboration | Quiz Builder | Quiz Builder | Remplacer; nom propre |
| Carte 3 — description | 49 | Placeholder slot for the next real client or personal project. Replace this card once a case study is ready. | Une SPA de niveau production construite avec la méthodologie AFTER : monorepo Turborepo, Fastify typé, TanStack Router, et le triplet de tests par unité de logique. | A production-grade SPA built with the AFTER methodology: Turborepo monorepo, typed Fastify, TanStack Router, and the test triplet on every unit of logic. | Remplacer |
| Carte 3 — tags | 50 | TODO, Case study, Bilingual | TypeScript, React, Fastify | TypeScript, React, Fastify | Remplacer |
| Introduction et lien vers À propos | 20, 27, 29, 58 | Valeurs `projectsIntro`, `navProjects`, `navAbout` | Voir section 1 | Voir section 1 | Déjà centralisé |

## 7. À propos

Routes : `/fr/about/` et `/en/about/`
Fichier : `src/pages/[lang]/about/index.astro`

| Position visuelle | Ligne | Texte actuel | Français à fournir | Anglais à fournir | État / action |
| --- | --- | --- | --- | --- | --- |
| Grand titre | 27 | A tiny bio with a strong front-end bias. | Une courte bio, avec une opinion tranchée sur qui prend les décisions. | A short bio with a strong opinion about who makes the decisions. | À centraliser; clin d'œil au one-liner AFTER |
| Titre du bloc de compétences | 34 | Skills | Compétences | Skills | À centraliser |
| Compétence 1 | 36 | Astro, MDX, i18n routing, and static-first architecture | Développement assisté par IA avec de vrais garde-fous : méthodologie AFTER, workflows spec-first, revue adversariale | AI-assisted development with real guardrails: AFTER methodology, spec-first workflows, adversarial review | Remplacer; la compétence signature en premier |
| Compétence 2 | 37 | React islands with strong separation of concerns | TypeScript full-stack : React, Node, Fastify, typé de bout en bout | Full-stack TypeScript: React, Node, Fastify, typed end to end | Remplacer |
| Compétence 3 | 38 | Design systems, UI polish, and expressive layout work | Outillage CLI et systèmes en Go, avec un faible pour Rust | CLI and systems tooling in Go, with a soft spot for Rust | Remplacer |
| Compétence 4 | 39 | TypeScript strict mode, content collections, and CI hygiene | Backends d'entreprise : permissions multi-tenant, conformité SOC 2 et DCAM, MongoDB et Postgres | Enterprise backends: multi-tenant permissions, SOC 2 and DCAM compliance, MongoDB and Postgres | Remplacer |
| Titre du bloc de liens | 44 | Links | Liens | Links | À centraliser |
| Lien GitHub | 53 | GitHub | GitHub | GitHub | Pas de traduction nécessaire; URL présente |
| Lien LinkedIn | 61 | LinkedIn — TODO: replace with the real profile | LinkedIn | LinkedIn | Remplacer `#` par `https://www.linkedin.com/in/%F0%9F%92%83-naomi-gilbert-5a099b24/` (URL exacte, décision 0.5) |
| Introduction et retour au blog | 19, 26, 28, 68 | Valeurs `aboutIntro`, `navAbout`, `backToBlog` | Voir section 1 | Voir section 1 | Déjà centralisé |

## 8. Page 404 et flux RSS

### Page 404

Route : toute URL inconnue
Fichier : `src/pages/404.astro`

| Position | Ligne | Texte actuel | État / action |
| --- | --- | --- | --- |
| Titre et description | 78, 79 | Valeurs françaises `notFoundTitle` et `notFoundText` | **Approuvé (décision 0.6)** : afficher les deux langues empilées (FR puis EN) sur cette route statique unique; les boutons FR/EN existent déjà |
| Bouton français | 81 | Accueil | Correct |
| Bouton anglais | 82 | Home | Correct |
| Code d'erreur | 77 | 404 | Pas de traduction nécessaire |

### Flux RSS

Routes : `/fr/rss.xml` et `/en/rss.xml`
Fichier : `src/pages/[lang]/rss.xml.ts`

| Champ | Ligne | Français actuel | Anglais actuel | Français proposé | Anglais proposé | État / action |
| --- | --- | --- | --- | --- | --- | --- |
| Titre du flux | 16 | Naomi · Blog FR | Naomi · Blog EN | Naomi · Blog FR | Naomi · Blog EN | Conserver |
| Description du flux | 19–20 | Articles techniques bilingues et notes de front-end. | Bilingual technical articles and front-end notes. | Notes techniques bilingues sur le développement assisté par IA et le développement full-stack. | Bilingual technical notes on AI-assisted development and full-stack work. | Remplacer, aligné sur le positionnement |

### Libellés intégrés aux images SVG

| Fichier | Ligne | Libellé actuel | Français proposé | Anglais proposé |
| --- | --- | --- | --- | --- |
| `public/images/hero-home.svg` | 1 | Home hero illustration | Illustration principale de l'accueil | Home hero illustration |
| `public/images/posts/astro-static-blog.svg` | 1 | Magenta abstract blog illustration | Illustration abstraite magenta sur le thème du blog | Magenta abstract blog illustration |
| `public/images/posts/type-safe-ts.svg` | 1 | Magenta abstract TypeScript illustration | Illustration abstraite magenta sur le thème de TypeScript | Magenta abstract TypeScript illustration |

## 9. Articles de blog

Les articles sont déjà séparés par langue. Pour ajouter ou traduire un article, créer deux fichiers portant le même nom dans :

- `src/content/blog/fr/`
- `src/content/blog/en/`

Chaque fichier contient des métadonnées traduisibles (`title`, `description`, `category`, éventuellement certains `tags`) puis le corps complet en MDX. Les dates, images, noms de technologies et extraits de code n'ont généralement pas besoin d'être traduits.

### Paire 1 — `astro-static-blog.mdx`

**[À TRANCHER, voir section 0.4]** : article de démonstration issu du gabarit; à conserver seulement s'il est assumé comme contenu réel.

| Élément | Français | Anglais | État |
| --- | --- | --- | --- |
| Titre | Construire un blog statique avec Astro | Building a static blog with Astro | Complet |
| Description | Comment j'assemble une base de blog bilingue, rapide et maintenable avec Astro 5, MDX, RSS et des collections de contenu typées. | How I assemble a bilingual, fast, maintainable blog base with Astro 5, MDX, RSS, and typed content collections. | Complet |
| Catégorie | Architecture | Architecture | Complet |
| Tags | Astro, MDX, i18n, RSS | Astro, MDX, i18n, RSS | Complet |
| Corps | `src/content/blog/fr/astro-static-blog.mdx` | `src/content/blog/en/astro-static-blog.mdx` | Deux versions présentes |

### Paire 2 — `type-safe-ui-state.mdx`

**[À TRANCHER, voir section 0.4]** : même statut que la paire 1.

| Élément | Français | Anglais | État |
| --- | --- | --- | --- |
| Titre | TypeScript : éliminer les états impossibles | TypeScript: remove impossible states | Complet |
| Description | Un petit pattern à garder dans sa boîte à outils : les unions discriminées pour rendre un composant React ou Astro beaucoup plus robuste. | A small pattern worth keeping around: discriminated unions make a React or Astro component much more robust. | Complet |
| Catégorie | TypeScript | TypeScript | Complet |
| Tags | TypeScript, React, State, DX | TypeScript, React, State, DX | Recommandation : ne pas localiser les tags techniques |
| Corps | `src/content/blog/fr/type-safe-ui-state.mdx` | `src/content/blog/en/type-safe-ui-state.mdx` | Deux versions présentes |

### Paire 3 — `after-your-vibe-code-deserves-better.mdx` (à créer)

L'article de lancement. La version anglaise est finalisée hors de ce document; la version française est à produire.

| Élément | Français | Anglais | État |
| --- | --- | --- | --- |
| Titre | AFTER: ton vibe code mérite mieux | AFTER: Your Vibe Code Deserves Better | Tranché (décision 0.3); le FR est l'origine du nom YVCDB, pas une traduction |
| Description | La méthodologie AFTER (Architect First, Test Everything Rigorously) : un fichier protocole que les agents suivent, et YVCDB, le CLI qui rend ses portes de validation impossibles à sauter. | AFTER (Architect First, Test Everything Rigorously): a protocol file agents follow on contact, and YVCDB, the CLI that makes its validation gates impossible to skip. | Proposition, sert aussi de description SEO |
| Catégorie | Méthodologie | Methodology | Proposition |
| Tags | AFTER, YVCDB, Agents IA, Go | AFTER, YVCDB, AI agents, Go | Proposition |
| Corps | À traduire depuis la version EN finale | Version EN finalisée | Traduction FR à produire avant lancement |

## 10. Ordre de priorité recommandé

1. Trancher les décisions de la section 0.
2. Remplacer les placeholders explicites de l'accueil, des projets, de la biographie et du lien LinkedIn avec les propositions ci-dessus.
3. Fournir les paires FR/EN pour tous les textes codés en dur des sections 2 à 7.
4. Ajouter ces paires à `src/i18n/ui.ts` et remplacer les chaînes codées en dur par `t('...')`.
5. Créer la paire 3 (article AFTER) dans les deux langues.
6. Appliquer la stratégie bilingue de la page 404.
7. Vérifier chaque route en français et en anglais, sur bureau et mobile.

## 11. Checklist de validation éditoriale

- [ ] Le slogan principal reflète le positionnement final (AFTER / développeuse full-stack).
- [ ] Le grand titre et le cartouche héro de l'accueil sont finalisés en FR et EN (décision 0.1).
- [ ] Les titres de l'accueil, du blog, des projets et de la page À propos sont finalisés en FR et EN.
- [ ] Les trois cartes Projets contiennent YVCDB, AFTER et le troisième projet retenu, avec liens GitHub réels.
- [ ] La biographie et les compétences correspondent au profil réel.
- [ ] L'URL LinkedIn réelle remplace `#`.
- [ ] Tous les labels accessibles du menu sont localisés.
- [ ] La navigation entre articles est localisée.
- [ ] La page 404 suit la stratégie de langue choisie.
- [ ] L'article AFTER existe dans les deux langues avant le lancement.
- [ ] Chaque article existe dans les deux dossiers ou suit une politique explicite de contenu non traduit.
