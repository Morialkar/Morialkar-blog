import { URL } from 'node:url';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = new URL('../dist/', import.meta.url);
const locales = ['fr', 'en'];

for (const locale of locales) {
  const rssDir = join(root.pathname, locale, 'rss.xml');
  const rssIndex = join(rssDir, 'index.html');
  const rssFile = join(root.pathname, locale, 'rss.xml');

  try {
    const contents = await readFile(rssIndex, 'utf8');
    await rm(rssDir, { recursive: true, force: true });
    await mkdir(dirname(rssFile), { recursive: true });
    await writeFile(rssFile, contents);
  } catch {
    // The build may change output layout in the future; skip if the feed is absent.
  }
}
