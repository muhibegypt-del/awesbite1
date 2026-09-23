/**
 * Typesetting, not editing: swaps typewriter apostrophes and quotes for
 * the typographic ones at render time. The words in the JSON are
 * untouched; only the glyphs change.
 */
export function smartQuotes(text) {
  return text
    .replace(/(\w)'(\w)/g, '$1’$2')
    .replace(/(^|[\s(\[—–])'/g, '$1‘')
    .replace(/'/g, '’')
    .replace(/(^|[\s(\[—–])"/g, '$1“')
    .replace(/"/g, '”');
}
