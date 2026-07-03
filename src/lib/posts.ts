import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '../i18n/ui';

export type BlogPost = CollectionEntry<'blog'>;

export type PostSummary = {
  slug: string;
  href: string;
  title: string;
  description: string;
  category: string;
  dateLabel: string;
  heroImage?: string;
  tags: string[];
};

const localeFormats: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en-US',
};

export function getPostLocale(post: BlogPost) {
  return post.id.startsWith('en/') ? 'en' : 'fr';
}

export function getPostSlug(post: BlogPost) {
  return post.id.replace(/^(fr|en)\//, '');
}

export function formatDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(localeFormats[locale], {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function toPostSummary(post: BlogPost, locale: Locale): PostSummary {
  const slug = getPostSlug(post);

  return {
    slug,
    href: `/${locale}/blog/${slug}/`,
    title: post.data.title,
    description: post.data.description,
    category: post.data.category,
    dateLabel: formatDate(post.data.pubDate, locale),
    heroImage: post.data.heroImage,
    tags: post.data.tags,
  };
}

export async function getLocalePosts(locale: Locale) {
  const posts = await getCollection('blog', ({ id, data }) => !data.draft && id.startsWith(`${locale}/`));

  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function getLocalePostSummaries(locale: Locale) {
  return (await getLocalePosts(locale)).map((post) => toPostSummary(post, locale));
}

export async function getRecentLocalePosts(locale: Locale, limit = 3) {
  return (await getLocalePostSummaries(locale)).slice(0, limit);
}
