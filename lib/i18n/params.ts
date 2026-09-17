import { type Locale, locales } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export type LangParams = Promise<{ lang: Locale }>;
