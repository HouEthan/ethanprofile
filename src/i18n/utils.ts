import { locales, type Locale } from "./config";

export const defaultLocale: Locale = "zh";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalizedPath(locale: Locale, pathname = "") {
  return pathname ? `/${locale}${pathname}` : `/${locale}/`;
}

export function getLangTag(locale: Locale) {
  if (locale === "zh") return "zh-Hant";
  if (locale === "ja") return "ja";
  return "en";
}

export function withDefaultLocale(pathname = "") {
  return getLocalizedPath(defaultLocale, pathname);
}
