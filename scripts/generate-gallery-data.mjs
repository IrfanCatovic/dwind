import fs from "node:fs";
import path from "node:path";

const galleryDir = path.join("public", "images", "gallery");
const files = fs
  .readdirSync(galleryDir)
  .filter((f) => /\.(webp|jpe?g|png|avif)$/i.test(f))
  .sort((a, b) => a.localeCompare(b));

const entries = files.map((file, i) => {
  const id = `gallery-${String(i + 1).padStart(3, "0")}`;
  const src = `/images/gallery/${file
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;

  return {
    id,
    src,
    filename: file,
    alt: "",
    category: "",
    caption: "",
    featured: false,
  };
});

const galleryOut = `export type GalleryImage = {
  id: string;
  src: string;
  filename: string;
  alt: string;
  category: string;
  caption: string;
  featured: boolean;
};

/**
 * Central registry of construction-site photos.
 * Captions/categories intentionally empty until photos are reviewed.
 */
export const galleryImages: GalleryImage[] = ${JSON.stringify(entries, null, 2)};

export const featuredGalleryImages = galleryImages.filter(
  (image) => image.featured,
);
`;

fs.mkdirSync(path.join("lib", "data"), { recursive: true });
fs.writeFileSync(path.join("lib", "data", "gallery.ts"), galleryOut);

const heroOut = `export type HeroImage = {
  id: string;
  src: string;
  alt: string;
};

export const heroImages: HeroImage[] = [
  {
    id: "hero-1",
    src: "/images/hero/hero1.webp",
    alt: "",
  },
  {
    id: "hero-2",
    src: "/images/hero/hero2.webp",
    alt: "",
  },
  {
    id: "hero-3",
    src: "/images/hero/hero3.webp",
    alt: "",
  },
];
`;

fs.writeFileSync(path.join("lib", "data", "hero.ts"), heroOut);

console.log(`Wrote ${entries.length} gallery entries and hero.ts`);
