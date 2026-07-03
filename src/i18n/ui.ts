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
  projectsIntro: string;
  aboutIntro: string;
  rssLabel: string;
  switchLanguage: string;
  currentLanguage: string;
  authorName: string;
};

export const ui: Record<Locale, UI> = {
  fr: {
    navHome: 'Accueil',
    navBlog: 'Blog',
    navProjects: 'Projets',
    navAbout: 'À propos',
    recentPosts: 'Articles récents',
    readMore: 'Lire la suite',
    postedOn: 'Publié le',
    by: 'par',
    footer: 'Conçu avec Astro, MDX et beaucoup de rose.',
    backToBlog: 'Retour au blog',
    newerPost: 'Article plus récent',
    olderPost: 'Article plus ancien',
    notFoundTitle: 'Page introuvable',
    notFoundText: 'La page demandée semble avoir disparu dans le brouillard magenta.',
    homeEyebrow: 'Portfolio bilingue FR / EN',
    homeIntro:
      'Un blog technique statique et un portfolio pensé comme une carte de visite vivante : rapide, accessible et volontairement expressif.',
    projectsIntro:
      'Quelques idées de projets pour montrer la direction visuelle et la qualité d’exécution du site.',
    aboutIntro:
      'Une courte bio placeholder pour Naomi, orientée front-end, design systems et produits statiques à forte personnalité.',
    rssLabel: 'Flux RSS',
    switchLanguage: 'Changer de langue',
    currentLanguage: 'Langue actuelle',
    authorName: 'Naomi',
  },
  en: {
    navHome: 'Home',
    navBlog: 'Blog',
    navProjects: 'Projects',
    navAbout: 'About',
    recentPosts: 'Recent posts',
    readMore: 'Read more',
    postedOn: 'Posted on',
    by: 'by',
    footer: 'Built with Astro, MDX, and a whole lot of pink energy.',
    backToBlog: 'Back to blog',
    newerPost: 'Newer post',
    olderPost: 'Older post',
    notFoundTitle: 'Page not found',
    notFoundText: 'The page you requested seems to have vanished into the magenta haze.',
    homeEyebrow: 'Bilingual FR / EN portfolio',
    homeIntro:
      'A static technical blog and portfolio treated like a living business card: fast, accessible, and intentionally expressive.',
    projectsIntro:
      'A few placeholder projects that showcase the visual direction and execution quality of the site.',
    aboutIntro:
      'A short placeholder bio for Naomi, focused on front-end craft, design systems, and static products with strong personality.',
    rssLabel: 'RSS feed',
    switchLanguage: 'Switch language',
    currentLanguage: 'Current language',
    authorName: 'Naomi',
  },
};

export function useTranslations(lang: Locale) {
  return function translate<K extends keyof UI>(key: K) {
    return ui[lang][key];
  };
}
