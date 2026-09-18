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
    workTitle: string;
    workDescription: string;
    contactTitle: string;
    contactDescription: string;
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
  workPreview: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    hoverCta: string;
    sectionId: string;
    imageAlts: [string, string, string, string, string];
  };
  contactCta: {
    eyebrow: string;
    heading: string;
    body: string;
    primaryCta: string;
    statement: string;
    emailLabel: string;
    phoneLabel: string;
    mobileLabel: string;
    backgroundAlt: string;
  };
  footer: {
    tagline: string;
    navigationLabel: string;
    contactLabel: string;
    impressum: string;
    datenschutz: string;
    rights: string;
    language: string;
  };
  legal: {
    impressumTitle: string;
    datenschutzTitle: string;
    placeholder: string;
  };
  workPage: {
    eyebrow: string;
    heading: string;
    body: string;
    servicesLine: string;
    galleryLabel: string;
    viewsLabel: string;
    viewLabel: string;
    showMore: string;
    prevImage: string;
    nextImage: string;
    closeLightbox: string;
    lightboxLabel: string;
    ctaHeading: string;
    ctaButton: string;
    defaultAlt: string;
  };
  contactPage: {
    eyebrow: string;
    heading: string;
    body: string;
    statement: string;
    emailLabel: string;
    phoneLabel: string;
    mobileLabel: string;
    locationLabel: string;
    sendEmail: string;
    callNow: string;
    loadMap: string;
    loadMapHint: string;
    openMaps: string;
    mapIframeTitle: string;
    europeEyebrow: string;
    europeBody: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  de: {
    meta: {
      siteName: "D-Wind GmbH",
      defaultTitle: "D-Wind GmbH | Fundamentbau für Windenergieanlagen",
      defaultDescription:
        "D-Wind GmbH ist spezialisiert auf Arbeiten im Fundamentbau für Windenergieanlagen. Bewehrung, Schalung und Betonierarbeiten für Windenergieprojekte in Europa.",
      workTitle: "Unsere Arbeiten | D-Wind GmbH",
      workDescription:
        "Einblicke in die Arbeiten von D-Wind im Fundamentbau für Windenergieanlagen – Bewehrung, Schalung und Betonage.",
      contactTitle: "Kontakt | D-Wind GmbH",
      contactDescription:
        "Kontaktieren Sie D-Wind GmbH für Anfragen zu Windenergieprojekten und Arbeiten im Fundamentbau.",
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
    workPreview: {
      eyebrow: "EINBLICKE IN UNSERE ARBEIT",
      heading: "Fundamentbau in der Praxis.",
      body: "Einblicke in unsere Arbeiten im Fundamentbau für Windenergieanlagen.",
      cta: "Alle Arbeiten ansehen",
      hoverCta: "Arbeit ansehen",
      sectionId: "D-WIND / ARBEITEN",
      imageAlts: [
        "Fundamentarbeiten auf einer Windenergie-Baustelle",
        "Bewehrungsarbeiten an einem Windkraftfundament",
        "Betonierarbeiten auf einer Windenergie-Baustelle",
        "Übersicht einer Windenergie-Baustelle",
        "Baustellenarbeiten im Fundamentbau für Windenergieanlagen",
      ],
    },
    contactCta: {
      eyebrow: "KONTAKT",
      heading: "Sie planen ein Windenergieprojekt?",
      body: "Sprechen Sie direkt mit D-Wind über Ihr Vorhaben.",
      primaryCta: "Kontakt aufnehmen",
      statement: "FUNDAMENTE FÜR EINE STARKE ZUKUNFT.",
      emailLabel: "E-Mail",
      phoneLabel: "Telefon",
      mobileLabel: "Mobil",
      backgroundAlt: "Baustellenarbeiten im Fundamentbau für Windenergieanlagen",
    },
    footer: {
      tagline: "Fundamentbau für Windenergieanlagen",
      navigationLabel: "Navigation",
      contactLabel: "Kontakt",
      impressum: "Impressum",
      datenschutz: "Datenschutz",
      rights: "D-Wind GmbH",
      language: "Sprache",
    },
    legal: {
      impressumTitle: "Impressum",
      datenschutzTitle: "Datenschutz",
      placeholder:
        "Rechtliche Angaben werden vor Veröffentlichung ergänzt.",
    },
    workPage: {
      eyebrow: "UNSERE ARBEITEN",
      heading: "Fundamentbau in der Praxis.",
      body: "Einblicke in unsere Arbeiten im Fundamentbau für Windenergieanlagen.",
      servicesLine: "Bewehrung · Schalung · Betonage",
      galleryLabel: "AUSGEFÜHRTE ARBEITEN",
      viewsLabel: "{count} Einblicke",
      viewLabel: "Ansehen",
      showMore: "Mehr Arbeiten anzeigen",
      prevImage: "Vorheriges Bild",
      nextImage: "Nächstes Bild",
      closeLightbox: "Schließen",
      lightboxLabel: "Bildergalerie",
      ctaHeading: "Sie möchten mit D-Wind über ein Projekt sprechen?",
      ctaButton: "Kontakt aufnehmen",
      defaultAlt: "Fundamentarbeiten auf einer Windenergie-Baustelle",
    },
    contactPage: {
      eyebrow: "KONTAKT",
      heading: "Sprechen wir über Ihr Projekt.",
      body: "Für Projektanfragen und weitere Informationen erreichen Sie D-Wind direkt per Telefon oder E-Mail.",
      statement: "Direkter Kontakt. Klare Kommunikation.",
      emailLabel: "E-MAIL",
      phoneLabel: "TELEFON",
      mobileLabel: "MOBIL",
      locationLabel: "STANDORT",
      sendEmail: "E-Mail senden",
      callNow: "Jetzt anrufen",
      loadMap: "Google Maps laden",
      loadMapHint:
        "Beim Laden der Karte werden Inhalte von Google Maps geladen.",
      openMaps: "In Google Maps öffnen",
      mapIframeTitle: "Standort von D-Wind GmbH auf Google Maps",
      europeEyebrow: "EUROPAWEIT IM EINSATZ",
      europeBody:
        "D-Wind begleitet Windenergieprojekte an unterschiedlichen Standorten in Europa.",
    },
  },
  en: {
    meta: {
      siteName: "D-Wind GmbH",
      defaultTitle: "D-Wind GmbH | Wind Turbine Foundation Construction",
      defaultDescription:
        "D-Wind GmbH specializes in reinforcement, formwork and concreting work for wind turbine foundation projects across Europe.",
      workTitle: "Our Work | D-Wind GmbH",
      workDescription:
        "Explore D-Wind's work on wind turbine foundations, including reinforcement, formwork and concreting.",
      contactTitle: "Contact | D-Wind GmbH",
      contactDescription:
        "Contact D-Wind GmbH regarding wind energy projects and wind turbine foundation work.",
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
    workPreview: {
      eyebrow: "A LOOK AT OUR WORK",
      heading: "Foundation work in practice.",
      body: "A look at our work on wind turbine foundation projects.",
      cta: "View all work",
      hoverCta: "View work",
      sectionId: "D-WIND / WORK",
      imageAlts: [
        "Foundation work on a wind energy construction site",
        "Reinforcement work on a wind turbine foundation",
        "Concreting work on a wind energy construction site",
        "Overview of a wind energy construction site",
        "Construction work on a wind turbine foundation project",
      ],
    },
    contactCta: {
      eyebrow: "CONTACT",
      heading: "Planning a wind energy project?",
      body: "Talk directly to D-Wind about your project.",
      primaryCta: "Get in touch",
      statement: "FOUNDATIONS FOR A STRONG FUTURE.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      mobileLabel: "Mobile",
      backgroundAlt: "Construction work on a wind turbine foundation project",
    },
    footer: {
      tagline: "Foundations for wind turbines",
      navigationLabel: "Navigation",
      contactLabel: "Contact",
      impressum: "Imprint",
      datenschutz: "Privacy",
      rights: "D-Wind GmbH",
      language: "Language",
    },
    legal: {
      impressumTitle: "Imprint",
      datenschutzTitle: "Privacy",
      placeholder: "Legal information will be completed before publication.",
    },
    workPage: {
      eyebrow: "OUR WORK",
      heading: "Foundation work in practice.",
      body: "A look at our work on wind turbine foundation projects.",
      servicesLine: "Reinforcement · Formwork · Concreting",
      galleryLabel: "COMPLETED WORK",
      viewsLabel: "{count} views",
      viewLabel: "View",
      showMore: "Show more work",
      prevImage: "Previous image",
      nextImage: "Next image",
      closeLightbox: "Close",
      lightboxLabel: "Image gallery",
      ctaHeading: "Want to discuss a project with D-Wind?",
      ctaButton: "Get in touch",
      defaultAlt: "Foundation work on a wind energy construction site",
    },
    contactPage: {
      eyebrow: "CONTACT",
      heading: "Let’s talk about your project.",
      body: "For project inquiries and further information, contact D-Wind directly by phone or email.",
      statement: "Direct contact. Clear communication.",
      emailLabel: "EMAIL",
      phoneLabel: "PHONE",
      mobileLabel: "MOBILE",
      locationLabel: "LOCATION",
      sendEmail: "Send email",
      callNow: "Call now",
      loadMap: "Load Google Maps",
      loadMapHint: "Loading the map connects to Google Maps.",
      openMaps: "Open in Google Maps",
      mapIframeTitle: "D-Wind GmbH location on Google Maps",
      europeEyebrow: "OPERATING ACROSS EUROPE",
      europeBody:
        "D-Wind supports wind energy projects at various locations across Europe.",
    },
  },
};
