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
  projectPlaceholder2Status: string;
  projectPlaceholder2Title: string;
  projectPlaceholder2Description: string;
  projectPlaceholder3Status: string;
  projectPlaceholder3Title: string;
  projectPlaceholder3Description: string;
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
    homeHeadingBefore: 'Naomi construit des expériences front-end',
    homeHeadingHighlight: 'bilingues',
    homeHeadingAfter: 'avec du caractère.',
    homeRecentHeading: 'Des articles nets, une exécution soignée.',
    blogHeading: 'Notes techniques, études de cas et opinions au build.',
    blogArchiveNote:
      'L’archive ci-dessous est triée du plus récent au plus ancien pour garder les meilleurs travaux visibles.',
    projectsHeading: 'Concepts sélectionnés et placeholders prêts pour un client.',
    aboutHeading: 'Une petite bio avec un fort penchant front-end.',
    aboutSkills: 'Compétences',
    aboutLinks: 'Liens',
    aboutSkill1: 'Astro, MDX, routing i18n et architecture statique d’abord',
    aboutSkill2: 'React islands avec une forte séparation des responsabilités',
    aboutSkill3: 'Design systems, finitions UI et mises en page expressives',
    aboutSkill4: 'TypeScript strict, content collections et hygiène CI',
    projectPlaceholder1Status: 'Concept UI',
    projectPlaceholder1Title: 'Magenta Commerce',
    projectPlaceholder1Description:
      'Un concept de boutique marketing percutant avec une narration éditoriale, des CTA très contrastés et une grille produits compatible statique.',
    projectPlaceholder2Status: 'Portfolio',
    projectPlaceholder2Title: 'Notes créatives',
    projectPlaceholder2Description:
      'Une coquille de portfolio orientée contenu qui mêle études de cas, écriture et une identité visuelle forte dans un seul build statique.',
    projectPlaceholder3Status: 'TODO',
    projectPlaceholder3Title: 'Collaboration future',
    projectPlaceholder3Description:
      'Emplacement placeholder pour le prochain vrai client ou projet personnel. Remplace cette carte une fois qu’une étude de cas est prête.',
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
    homeHeadingBefore: 'Naomi builds',
    homeHeadingHighlight: 'bilingual',
    homeHeadingAfter: 'front-end experiences with personality.',
    homeRecentHeading: 'Sharp articles, clean delivery.',
    blogHeading: 'Technical notes, case studies, and build-time opinions.',
    blogArchiveNote:
      'The archive below is sorted from newest to oldest so the strongest work stays visible.',
    projectsHeading: 'Selected concepts and client-ready placeholders.',
    aboutHeading: 'A tiny bio with a strong front-end bias.',
    aboutSkills: 'Skills',
    aboutLinks: 'Links',
    aboutSkill1: 'Astro, MDX, i18n routing, and static-first architecture',
    aboutSkill2: 'React islands with strong separation of concerns',
    aboutSkill3: 'Design systems, UI polish, and expressive layout work',
    aboutSkill4: 'TypeScript strict mode, content collections, and CI hygiene',
    projectPlaceholder1Status: 'UI concept',
    projectPlaceholder1Title: 'Magenta Commerce',
    projectPlaceholder1Description:
      'A punchy marketing storefront concept with editorial storytelling, high-contrast CTAs, and a static-friendly product grid.',
    projectPlaceholder2Status: 'Portfolio',
    projectPlaceholder2Title: 'Creative notes',
    projectPlaceholder2Description:
      'A content-driven portfolio shell that blends case studies, writing, and a strong visual identity in one static build.',
    projectPlaceholder3Status: 'TODO',
    projectPlaceholder3Title: 'Future collaboration',
    projectPlaceholder3Description:
      'Placeholder slot for the next real client or personal project. Replace this card once a case study is ready.',
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
