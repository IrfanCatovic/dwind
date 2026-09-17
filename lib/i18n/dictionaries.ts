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
    openMenu: string;
    closeMenu: string;
    primaryNav: string;
    language: string;
  };
  pages: {
    homeTitle: string;
    workTitle: string;
    contactTitle: string;
    placeholder: string;
  };
  hero: {
    eyebrow: string;
    titleLines: [string, string, string];
    description: string;
    primaryCta: string;
    secondaryCta: string;
    trustLine: string;
    prevSlide: string;
    nextSlide: string;
    slideshowLabel: string;
    imageAlts: [string, string, string];
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
      openMenu: "Menü öffnen",
      closeMenu: "Menü schließen",
      primaryNav: "Hauptnavigation",
      language: "Sprache",
    },
    pages: {
      homeTitle: "Startseite",
      workTitle: "Unsere Arbeiten",
      contactTitle: "Kontakt",
      placeholder:
        "Seitengrundlage – Inhalte folgen in einem späteren Schritt.",
    },
    hero: {
      eyebrow: "D-WIND GMBH · WINDENERGIE",
      titleLines: [
        "Ihr zuverlässiger Partner",
        "im Fundamentbau für",
        "Windenergieanlagen.",
      ],
      description:
        "Fachgerechte Bewehrungs-, Schalungs- und Betonierarbeiten für Windenergieprojekte in Europa.",
      primaryCta: "Unsere Arbeiten",
      secondaryCta: "Kontakt aufnehmen",
      trustLine: "Europaweit im Einsatz",
      prevSlide: "Vorheriges Bild",
      nextSlide: "Nächstes Bild",
      slideshowLabel: "Baustellenbilder",
      imageAlts: [
        "Bewehrungsarbeiten auf einer Windenergie-Baustelle",
        "Schalungs- und Fundamentarbeiten für eine Windenergieanlage",
        "Betonierarbeiten am Fundament einer Windenergieanlage",
      ],
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
      openMenu: "Open menu",
      closeMenu: "Close menu",
      primaryNav: "Primary navigation",
      language: "Language",
    },
    pages: {
      homeTitle: "Home",
      workTitle: "Our Work",
      contactTitle: "Contact",
      placeholder: "Page foundation – content will follow in a later step.",
    },
    hero: {
      eyebrow: "D-WIND GMBH · WIND ENERGY",
      titleLines: [
        "Your reliable partner",
        "for wind turbine",
        "foundation construction.",
      ],
      description:
        "Professional reinforcement, formwork and concreting work for wind energy projects across Europe.",
      primaryCta: "Our Work",
      secondaryCta: "Get in touch",
      trustLine: "Operating across Europe",
      prevSlide: "Previous slide",
      nextSlide: "Next slide",
      slideshowLabel: "Construction site images",
      imageAlts: [
        "Reinforcement work on a wind energy construction site",
        "Formwork and foundation work for a wind turbine",
        "Concreting work on a wind turbine foundation",
      ],
    },
  },
};
