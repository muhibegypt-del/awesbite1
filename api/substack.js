/**
 * Her latest Substack posts, for the Content page (owner's request,
 * November 2026). Substack's feed cannot be read from a visitor's browser
 * (no CORS), so this Vercel Function reads it on the server and Vercel's
 * cache keeps the answer for 30 minutes: a new post appears on the site
 * within half an hour, with no rebuild. Any failure returns an empty list,
 * and the page then simply shows its 'Read on Substack' link. `ok` says
 * whether the feed was read, so the function can be checked from outside.
 */
const FEED = 'https://atexturedword.substack.com/feed';
const LIMIT = 3;

const decode = (s) => s
  .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'")
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&amp;/g, '&');
const text = (s) => decode(s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const field = (item, tag) => {
  const m = item.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`));
  return m ? text(m[1]) : '';
};

export function parseFeed(xml) {
  return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, LIMIT).map(([, item]) => {
    const link = field(item, 'link');
    const date = new Date(field(item, 'pubDate'));
    return {
      title: field(item, 'title'),
      link: /^https:\/\//.test(link) ? link : '',
      date: Number.isNaN(date.getTime()) ? '' : date.toISOString(),
      summary: field(item, 'description').slice(0, 220),
    };
  }).filter((post) => post.title && post.link);
}

export default async function handler(req, res) {
  try {
    const response = await fetch(FEED, { headers: { Accept: 'application/rss+xml, application/xml' } });
    if (!response.ok) throw new Error(`feed ${response.status}`);
    res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
    res.status(200).json({ ok: true, items: parseFeed(await response.text()) });
  } catch {
    res.setHeader('Cache-Control', 'public, s-maxage=300');
    res.status(200).json({ ok: false, items: [] });
  }
}
