export const companyContact = {
  companyName: "D-Wind GmbH",
  email: "info@d-wind.de",
  emailHref: "mailto:info@d-wind.de",
  phoneDisplay: "+49 6052 9183399",
  phoneHref: "tel:+4960529183399",
  mobileDisplay: "+49 1511 7654508",
  mobileHref: "tel:+4915117654508",
  addressLines: [
    "Raiffeisenstraße 2",
    "63619 Bad Orb",
    "Deutschland",
  ] as const,
  addressQuery: "Raiffeisenstraße 2, 63619 Bad Orb, Deutschland",
} as const;

/** Privacy-friendly Maps: open / embed from address query (no API key) */
export const companyMaps = {
  openUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(companyContact.addressQuery)}`,
  embedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(companyContact.addressQuery)}&z=16&output=embed`,
} as const;

/** Dark cinematic CTA background — real D-Wind gallery photo */
export const contactCtaBackground = {
  id: "gallery-001",
  src: "/images/gallery/123.webp",
} as const;
