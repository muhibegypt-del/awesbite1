/**
 * The sitemap, built with the site (performance and SEO audit, November
 * 2026): every page a search engine should list, from the same data the
 * pages are built from, so a new offer appears here without a second edit.
 * Redirects, the 404 and the thank-you page are left out on purpose.
 * Addresses use `site` in astro.config.mjs.
 */
import offerings from '../content/offerings.json';

const pages = ['/', '/teaching/', '/repurposing/', '/narration/', '/about/', '/content/', '/contact/'];
const offers = ['teaching', 'repurposing'].flatMap((service) =>
  offerings[service].options.map((option) => `/${service}/${option.slug}/`)
);

export function GET({ site }) {
  const urls = [...pages, ...offers].map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
