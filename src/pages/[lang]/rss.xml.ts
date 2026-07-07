import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { locales, ui, type Locale } from '../../i18n/ui';
import { formatDate, getPostLocale, getPostSlug } from '../../lib/posts';

export async function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

export async function GET({ params, site }: { params: { lang: string }; site?: URL }) {
  const lang = params.lang as Locale;
  const posts = await getCollection('blog', ({ id, data }) => !data.draft && id.startsWith(`${lang}/`));
  const siteUrl = site ?? new URL('https://morialkar.com');

  return rss({
    title: ui[lang].rssTitle,
    description: ui[lang].rssDescription,
    site: siteUrl,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      link: `/${getPostLocale(post)}/blog/${getPostSlug(post)}/`,
      pubDate: post.data.pubDate,
      categories: [post.data.category],
      content: `<p>${formatDate(post.data.pubDate, lang)}</p>`,
    })),
  });
}
