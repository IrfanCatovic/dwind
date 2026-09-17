import type { Locale } from "./config";

export type Dictionary = {
  meta: {
    siteName: string;
    defaultTitle: string;
    defaultDescription: string;
  };
  nav: {
    home: string;
    work: string;
    contact: string;
    cta: string;
    de: string;
    en: string;
  };
  pages: {
    homeTitle: string;
    workTitle: string;
    contactTitle: string;
    placeholder: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  de: {
    meta: {
      siteName: "D-Wind GmbH",
      defaultTitle: "D-Wind GmbH | Fundamentbau für Windenergieanlagen",
      defaultDescription:
        "D-Wind GmbH – Ihr zuverlässiger Partner im Fundamentbau für Windenergieanlagen. Spezialisierung auf Windenergie in Europa.",
    },
    nav: {
      home: "Startseite",
      work: "Unsere Arbeiten",
      contact: "Kontakt",
      cta: "Kontakt aufnehmen",
      de: "DE",
      en: "EN",
    },
    pages: {
      homeTitle: "Startseite",
      workTitle: "Unsere Arbeiten",
      contactTitle: "Kontakt",
      placeholder:
        "Seitengrundlage – Inhalte folgen in einem späteren Schritt.",
    },
  },
  en: {
    meta: {
      siteName: "D-Wind GmbH",
      defaultTitle: "D-Wind GmbH | Foundations for wind turbines",
      defaultDescription:
        "D-Wind GmbH – your reliable partner for wind turbine foundations. Specialized in wind energy across Europe.",
    },
    nav: {
      home: "Home",
      work: "Our Work",
      contact: "Contact",
      cta: "Get in touch",
      de: "DE",
      en: "EN",
    },
    pages: {
      homeTitle: "Home",
      workTitle: "Our Work",
      contactTitle: "Contact",
      placeholder: "Page foundation – content will follow in a later step.",
    },
  },
};
