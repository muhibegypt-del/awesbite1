/**
 * Content JSON refers to photographs by their old public path
 * ("/images/aneesa-writing.webp"). This resolves that path to the source
 * file in src/assets/images so Astro can make responsive AVIF and WebP from
 * it. The JSON does not change.
 */
const files = import.meta.glob('../assets/images/*.{webp,jpg,jpeg,png}', { eager: true, import: 'default' });

export function imageFor(path) {
  const name = String(path).split('/').pop();
  const hit = Object.entries(files).find(([key]) => key.endsWith(`/${name}`));
  if (!hit) throw new Error(`No image in src/assets/images for "${path}"`);
  return hit[1];
}
