export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Route paths without locale prefix */
export const routes = {
  home: "",
  arbeiten: "arbeiten",
  kontakt: "kontakt",
  impressum: "impressum",
  datenschutz: "datenschutz",
} as const;

export type RouteKey = keyof typeof routes;

export function localePath(locale: Locale, route: RouteKey = "home"): string {
  const segment = routes[route];
  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

/** Swap locale while keeping the equivalent path segment */
export function switchLocalePath(
  pathname: string,
  nextLocale: Locale,
): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) {
    return `/${nextLocale}`;
  }

  if (isLocale(parts[0])) {
    parts[0] = nextLocale;
    return `/${parts.join("/")}`;
  }

  return `/${nextLocale}/${parts.join("/")}`;
}
