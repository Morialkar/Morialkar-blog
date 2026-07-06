export const locales = ['fr', 'en'] as const;

export type Locale = (typeof locales)[number];

type UI = {
  navHome: string;
  navBlog: string;
  navProjects: string;
  navAbout: string;
  recentPosts: string;
  readMore: string;
  postedOn: string;
  by: string;
  footer: string;
  backToBlog: string;
  newerPost: string;
  olderPost: string;
  notFoundTitle: string;
  notFoundText: string;
  homeEyebrow: string;
  homeIntro: string;
  homeHeadingBefore: string;
  homeHeadingHighlight: string;
  homeHeadingAfter: string;
  homeHeroCaption: string;
  homeRecentHeading: string;
  blogHeading: string;
  blogArchiveNote: string;
  projectsIntro: string;
  projectsHeading: string;
  aboutIntro: string;
  aboutHeading: string;
  aboutSkills: string;
  aboutLinks: string;
  aboutSkill1: string;
  aboutSkill2: string;
  aboutSkill3: string;
  aboutSkill4: string;
  projectPlaceholder1Status: string;
  projectPlaceholder1Title: string;
  projectPlaceholder1Description: string;
  projectPlaceholder1Tag1: string;
  projectPlaceholder1Tag2: string;
  projectPlaceholder1Tag3: string;
  projectPlaceholder2Status: string;
  projectPlaceholder2Title: string;
  projectPlaceholder2Description: string;
  projectPlaceholder2Tag1: string;
  projectPlaceholder2Tag2: string;
  projectPlaceholder2Tag3: string;
  projectPlaceholder3Status: string;
  projectPlaceholder3Title: string;
  projectPlaceholder3Description: string;
  projectPlaceholder3Tag1: string;
  projectPlaceholder3Tag2: string;
  projectPlaceholder3Tag3: string;
  rssLabel: string;
  rssTitle: string;
  rssDescription: string;
  redirectingTo: string;
  switchLanguage: string;
  currentLanguage: string;
  authorName: string;
  tagline: string;
  primaryNavigation: string;
  switchToEnglish: string;
  switchToFrench: string;
  openMenu: string;
  closeMenu: string;
  viewProject: string;
};

export const ui: Record<Locale, UI> = {
  fr: {
    navHome: 'Accueil',
    navBlog: 'Blog',
    navProjects: 'Projets',
    navAbout: 'À propos',
    recentPosts: 'Articles récents',
    readMore: 'Voir tous les articles',
    postedOn: 'Publié le',
    by: 'par',
    footer: 'Conçu avec Astro, MDX et beaucoup de rose.',
    backToBlog: 'Retour au blog',
    newerPost: 'Article plus récent',
    olderPost: 'Article plus ancien',
    notFoundTitle: 'Page introuvable',
    notFoundText:
      'La page demandée semble avoir disparu dans le brouillard magenta.',
    homeEyebrow: 'Développeuse full-stack · FR / EN',
    homeIntro:
      "Développeuse full-stack senior. Je conçois des méthodologies et de l'outillage pour développer avec l'IA sans sacrifier la rigueur : les specs d'abord, des tests partout, et chaque décision prise par un humain.",
    homeHeadingBefore: "L'IA écrit la majorité du code.",
    homeHeadingHighlight: 'Naomi',
    homeHeadingAfter: 'prend chaque décision.',
    homeHeroCaption: "Architecte d'abord, tests rigoureux partout.",
    homeRecentHeading: 'Notes de terrain du développement assisté par IA.',
    blogHeading: 'Notes techniques, études de cas et opinions assumées.',
    blogArchiveNote:
      'Les archives vont du plus récent au plus ancien, pour garder le meilleur bien en vue.',
    projectsIntro:
      'De vrais outils, publics et documentés : une méthodologie, son implémentation de référence, et du code de production.',
    projectsHeading: 'Des outils construits en public, méthodologie incluse.',
    aboutIntro:
      "Développeuse full-stack depuis plus de 15 ans, créatrice de la méthodologie AFTER et de YVCDB. J'aime les systèmes exigeants : la conformité d'entreprise, le multi-tenant, et maintenant l'encadrement rigoureux du code généré par IA.",
    aboutHeading:
      'Une courte bio, avec une opinion tranchée sur qui prend les décisions.',
    aboutSkills: 'Compétences',
    aboutLinks: 'Liens',
    aboutSkill1:
      'Développement assisté par IA avec de vrais garde-fous : méthodologie AFTER, workflows spec-first, revue adversariale',
    aboutSkill2:
      'TypeScript full-stack : React, Node, Fastify, typé de bout en bout',
    aboutSkill3: 'Outillage CLI et systèmes en Go, avec un faible pour Rust',
    aboutSkill4:
      "Backends d'entreprise : permissions multi-tenant, conformité SOC 2 et DCAM, MongoDB et Postgres",
    projectPlaceholder1Status: 'CLI open source',
    projectPlaceholder1Title: 'YVCDB',
    projectPlaceholder1Description:
      "Un CLI en Go qui orchestre des agents IA (Claude Code, Codex, OpenCode) à travers des workflows AFTER complets : des phases spécialisées, des portes d'approbation humaine impossibles à sauter, et une isolation Git par phase.",
    projectPlaceholder1Tag1: 'Go',
    projectPlaceholder1Tag2: 'TUI',
    projectPlaceholder1Tag3: 'Agents IA',
    projectPlaceholder2Status: 'Méthodologie',
    projectPlaceholder2Title: 'AFTER',
    projectPlaceholder2Description:
      "Architect First, Test Everything Rigorously : une méthodologie pour le développement assisté par IA, publiée comme spécification avec un fichier protocole à déposer dans n'importe quel projet.",
    projectPlaceholder2Tag1: 'Méthodologie',
    projectPlaceholder2Tag2: 'Protocole',
    projectPlaceholder2Tag3: 'Agents IA',
    projectPlaceholder3Status: 'Full-stack',
    projectPlaceholder3Title: 'Quiz Builder',
    projectPlaceholder3Description:
      'Une SPA de niveau production construite avec la méthodologie AFTER : monorepo Turborepo, Fastify typé, TanStack Router, et le triplet de tests par unité de logique.',
    projectPlaceholder3Tag1: 'TypeScript',
    projectPlaceholder3Tag2: 'React',
    projectPlaceholder3Tag3: 'Fastify',
    rssLabel: 'Flux RSS',
    rssTitle: 'Naomi · Blog FR',
    rssDescription:
      'Notes techniques bilingues sur le développement assisté par IA et le développement full-stack.',
    redirectingTo: 'Redirection vers',
    switchLanguage: 'Changer de langue',
    currentLanguage: 'Langue actuelle',
    authorName: 'Naomi',
    tagline: "Développement full-stack, et de l'IA avec de vrais garde-fous.",
    primaryNavigation: 'Navigation principale',
    switchToEnglish: "Passer à l'anglais",
    switchToFrench: 'Passer au français',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    viewProject: 'Voir le projet',
  },
  en: {
    navHome: 'Home',
    navBlog: 'Blog',
    navProjects: 'Projects',
    navAbout: 'About',
    recentPosts: 'Recent posts',
    readMore: 'See all posts',
    postedOn: 'Posted on',
    by: 'by',
    footer: 'Built with Astro, MDX, and a whole lot of pink energy.',
    backToBlog: 'Back to blog',
    newerPost: 'Newer post',
    olderPost: 'Older post',
    notFoundTitle: 'Page not found',
    notFoundText:
      'The page you requested seems to have vanished into the magenta haze.',
    homeEyebrow: 'Full-stack developer · FR / EN',
    homeIntro:
      "Senior full-stack developer. I build methodologies and tooling for AI-assisted development that doesn't sacrifice rigor: specs first, tests everywhere, every decision made by a human.",
    homeHeadingBefore: 'The AI writes most of the code.',
    homeHeadingHighlight: 'Naomi',
    homeHeadingAfter: 'makes every decision.',
    homeHeroCaption: 'Architect first, test everything rigorously.',
    homeRecentHeading: 'Field notes from AI-assisted development.',
    blogHeading: 'Technical notes, case studies, and build-time opinions.',
    blogArchiveNote:
      'The archive below is sorted from newest to oldest so the strongest work stays visible.',
    projectsIntro:
      'Real tools, public and documented: a methodology, its reference implementation, and production code.',
    projectsHeading: 'Tools built in public, methodology included.',
    aboutIntro:
      'Full-stack developer for 15+ years, creator of the AFTER methodology and YVCDB. I like demanding systems: enterprise compliance, multi-tenancy, and now putting real guardrails around AI-generated code.',
    aboutHeading:
      'A short bio with a strong opinion about who makes the decisions.',
    aboutSkills: 'Skills',
    aboutLinks: 'Links',
    aboutSkill1:
      'AI-assisted development with real guardrails: AFTER methodology, spec-first workflows, adversarial review',
    aboutSkill2:
      'Full-stack TypeScript: React, Node, Fastify, typed end to end',
    aboutSkill3: 'CLI and systems tooling in Go, with a soft spot for Rust',
    aboutSkill4:
      'Enterprise backends: multi-tenant permissions, SOC 2 and DCAM compliance, MongoDB and Postgres',
    projectPlaceholder1Status: 'Open source CLI',
    projectPlaceholder1Title: 'YVCDB',
    projectPlaceholder1Description:
      "A Go CLI that drives AI agents (Claude Code, Codex, OpenCode) through complete AFTER workflows: specialized phases, human approval gates you can't skip, and per-phase Git isolation.",
    projectPlaceholder1Tag1: 'Go',
    projectPlaceholder1Tag2: 'TUI',
    projectPlaceholder1Tag3: 'AI agents',
    projectPlaceholder2Status: 'Methodology',
    projectPlaceholder2Title: 'AFTER',
    projectPlaceholder2Description:
      'Architect First, Test Everything Rigorously: a methodology for AI-assisted development, published as a specification with a drop-in protocol file for any project.',
    projectPlaceholder2Tag1: 'Methodology',
    projectPlaceholder2Tag2: 'Protocol',
    projectPlaceholder2Tag3: 'AI agents',
    projectPlaceholder3Status: 'Full-stack',
    projectPlaceholder3Title: 'Quiz Builder',
    projectPlaceholder3Description:
      'A production-grade SPA built with the AFTER methodology: Turborepo monorepo, typed Fastify, TanStack Router, and the test triplet on every unit of logic.',
    projectPlaceholder3Tag1: 'TypeScript',
    projectPlaceholder3Tag2: 'React',
    projectPlaceholder3Tag3: 'Fastify',
    rssLabel: 'RSS feed',
    rssTitle: 'Naomi · Blog EN',
    rssDescription:
      'Bilingual technical notes on AI-assisted development and full-stack work.',
    redirectingTo: 'Redirecting to',
    switchLanguage: 'Switch language',
    currentLanguage: 'Current language',
    authorName: 'Naomi',
    tagline: 'Full-stack development, and AI with real guardrails.',
    primaryNavigation: 'Primary navigation',
    switchToEnglish: 'Switch to English',
    switchToFrench: 'Switch to French',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    viewProject: 'View project',
  },
};

export function useTranslations(lang: Locale) {
  return function translate<K extends keyof UI>(key: K) {
    return ui[lang][key];
  };
}
