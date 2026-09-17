import type { Locale } from "./config";

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
};

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
  specialization: {
    eyebrow: string;
    heading: string;
    body: string;
    imageAlt: string;
    technicalLabel: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: [ServiceItem, ServiceItem, ServiceItem];
  };
  europe: {
    eyebrow: string;
    heading: string;
    body: string;
    supportStatement: string;
    visualStatement: [string, string, string];
    mapLabel: string;
    points: [
      { number: string; label: string },
      { number: string; label: string },
      { number: string; label: string },
    ];
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
    specialization: {
      eyebrow: "SPEZIALISIERUNG AUF WINDENERGIE",
      heading:
        "Unser Schwerpunkt liegt im Fundamentbau für Windenergieanlagen.",
      body: "D-Wind GmbH unterstützt Windenergieprojekte mit fachgerechten Arbeiten im Bereich Bewehrung, Schalung und Betonage. Dabei stehen eine zuverlässige Ausführung, klare Abläufe und die Anforderungen des jeweiligen Projekts im Mittelpunkt.",
      imageAlt:
        "Ankerring und Bewehrung eines Windenergieanlagen-Fundaments auf der Baustelle",
      technicalLabel: "FUNDAMENTBAU · WINDENERGIE",
    },
    services: {
      eyebrow: "UNSERE LEISTUNGEN",
      heading: "Leistungen für den Fundamentbau",
      intro:
        "Unsere Arbeiten konzentrieren sich auf zentrale Bauabschnitte im Fundamentbau für Windenergieanlagen.",
      items: [
        {
          number: "01",
          title: "Bewehrungsarbeiten",
          description:
            "Fachgerechte Verarbeitung und Montage der Bewehrung nach den jeweiligen Plan- und Projektvorgaben.",
        },
        {
          number: "02",
          title: "Schalungsarbeiten",
          description:
            "Präzise Schalungsarbeiten als Bestandteil der Fundamentausführung für Windenergieanlagen.",
        },
        {
          number: "03",
          title: "Betonierarbeiten",
          description:
            "Ausführung und Unterstützung bei Arbeiten im Zusammenhang mit der Betonage von Fundamenten für Windenergieanlagen.",
        },
      ],
    },
    europe: {
      eyebrow: "EUROPAWEIT IM EINSATZ",
      heading: "Europaweit im Einsatz.",
      body: "D-Wind GmbH ist für Windenergieprojekte an unterschiedlichen Standorten in Europa im Einsatz. Unsere Arbeiten richten sich dabei nach den Anforderungen, Planungen und Abläufen des jeweiligen Projekts.",
      supportStatement: "Windenergie verbindet Europa.",
      visualStatement: ["WINDENERGIE", "VERBINDET", "EUROPA."],
      mapLabel: "Technische Darstellung Europas",
      points: [
        { number: "01", label: "Flexibel einsetzbar" },
        { number: "02", label: "Projektorientierte Ausführung" },
        { number: "03", label: "Europaweite Projekte" },
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
    specialization: {
      eyebrow: "SPECIALIZED IN WIND ENERGY",
      heading: "Our focus is on foundation construction for wind turbines.",
      body: "D-Wind GmbH supports wind energy projects with professional reinforcement, formwork and concreting work. Reliable execution, clear processes and the requirements of each individual project are at the center of our work.",
      imageAlt:
        "Anchor ring and reinforcement of a wind turbine foundation on site",
      technicalLabel: "FOUNDATION · WIND ENERGY",
    },
    services: {
      eyebrow: "OUR SERVICES",
      heading: "Services for wind turbine foundations",
      intro:
        "Our work focuses on key construction stages within wind turbine foundation projects.",
      items: [
        {
          number: "01",
          title: "Reinforcement Works",
          description:
            "Professional processing and installation of reinforcement in accordance with the relevant plans and project specifications.",
        },
        {
          number: "02",
          title: "Formwork Works",
          description:
            "Precise formwork works as part of wind turbine foundation construction.",
        },
        {
          number: "03",
          title: "Concreting Works",
          description:
            "Execution and support of work related to the concreting of wind turbine foundations.",
        },
      ],
    },
    europe: {
      eyebrow: "OPERATING ACROSS EUROPE",
      heading: "Operating across Europe.",
      body: "D-Wind GmbH works on wind energy projects at various locations across Europe. Our work is carried out in accordance with the requirements, plans and processes of each individual project.",
      supportStatement: "Wind energy connects Europe.",
      visualStatement: ["WIND ENERGY", "CONNECTS", "EUROPE."],
      mapLabel: "Technical illustration of Europe",
      points: [
        { number: "01", label: "Flexible deployment" },
        { number: "02", label: "Project-oriented execution" },
        { number: "03", label: "Projects across Europe" },
      ],
    },
  },
};
