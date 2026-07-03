import type { Locale } from './ui';
import { locales } from './ui';

export function getLangFromUrl(url: URL) {
  const [firstSegment] = url.pathname.split('/').filter(Boolean);

  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }

  return 'fr';
}

export function stripLocaleFromPath(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);

  if (parts[0] && locales.includes(parts[0] as Locale)) {
    parts.shift();
  }

  return parts.length > 0 ? `/${parts.join('/')}/` : '/';
}

export function normalizeLocalePath(pathname: string) {
  return stripLocaleFromPath(pathname).replace(/^\/|\/$/g, '');
}
