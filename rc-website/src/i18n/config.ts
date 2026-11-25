/**
 * Two languages: German is the default and lives at the root ("/events"),
 * English lives under "/en" ("/en/events"). `middleware.ts` rewrites
 * unprefixed URLs to the internal "/de/..." route, so "/de" never shows up
 * in the address bar.
 */
export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "de";

export const SITE_URL = "https://roboticscollective.org";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Public URL path of a page in a language: "/events" → "/en/events". */
export function localePath(locale: Locale, path: string) {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * The address-bar path. While prerendering, the router sees the internal
 * German route ("/de/events"); in the browser it sees "/events".
 */
export function visiblePath(pathname: string) {
  return pathname.replace(/^\/de(?=\/|$)/, "") || "/";
}

/** The same page in the other language — used by the language switch. */
export function switchLocalePath(pathname: string, to: Locale) {
  const bare = pathname === "/en" ? "/" : pathname.replace(/^\/en(?=\/)/, "");
  return localePath(to, bare);
}

/**
 * Canonical URL plus hreflang links, so Google shows German searchers the
 * German page and everyone else the English one.
 */
export function languageAlternates(locale: Locale, path: string) {
  return {
    canonical: localePath(locale, path),
    languages: {
      de: localePath("de", path),
      en: localePath("en", path),
      "x-default": localePath(defaultLocale, path),
    },
  };
}

/** Intl locale for dates and Open Graph locale per language. */
export const intlLocale: Record<Locale, string> = { de: "de-DE", en: "en-GB" };
export const ogLocale: Record<Locale, string> = { de: "de_DE", en: "en_GB" };
