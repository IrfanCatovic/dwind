import { dictionaries, type Dictionary } from "./dictionaries";
import { isLocale, type Locale } from "./config";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function getDictionarySafe(locale: string): Dictionary | null {
  if (!isLocale(locale)) {
    return null;
  }

  return dictionaries[locale];
}
