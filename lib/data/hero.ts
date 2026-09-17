export type HeroImage = {
  id: string;
  src: string;
};

export const heroImages: HeroImage[] = [
  {
    id: "hero-1",
    src: "/images/hero/hero1.webp",
  },
  {
    id: "hero-2",
    src: "/images/hero/hero2.webp",
  },
  {
    id: "hero-3",
    src: "/images/hero/hero3.webp",
  },
];

export const HERO_INTERVAL_MS = 6000;
