/**
 * Where every "Book a free discovery call" button goes. Once her Calendly
 * link is in global.json (contact.calendly), straight to it in a new tab;
 * until then, to the contact page. One place to change.
 */
import global from '../content/global.json';

const calendly = global.contact.calendly;
export const discovery = {
  label: global.nav.discovery.label,
  href: calendly || global.nav.discovery.href,
  external: Boolean(calendly),
};
