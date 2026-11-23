/** robots.txt: everything may be crawled; points to the sitemap at the site's own address. */
export function GET({ site }) {
  return new Response(`User-agent: *\nDisallow:\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
