import zh from "../data/i18n/zh";
import en from "../data/i18n/en";
import ja from "../data/i18n/ja";
import type { Locale } from "./config";

const dictionaries = {
  zh,
  en,
  ja,
} as const;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function t(locale: Locale, key: string) {
  const dictionary = dictionaries[locale] as Record<string, unknown>;
  const value = key.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, dictionary);

  return typeof value === "string" ? value : key;
}
