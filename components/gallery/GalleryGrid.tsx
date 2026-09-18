"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { Expand } from "lucide-react";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { cn } from "@/lib/cn";
import {
  getGalleryItemLayout,
  type GalleryImage,
} from "@/lib/data/gallery";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type GalleryGridProps = {
  images: GalleryImage[];
  dictionary: Dictionary;
};

export function GalleryGrid({ images, dictionary }: GalleryGridProps) {
  const content = dictionary.workPage;
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const triggerRefs = useRef<Map<number, HTMLButtonElement>>(new Map());
  const lastTriggerIndex = useRef<number | null>(null);

  const viewsLabel = content.viewsLabel.replace(
    "{count}",
    String(images.length),
  );

  const getAlt = useCallback(
    (image: GalleryImage) => image.alt.trim() || content.defaultAlt,
    [content.defaultAlt],
  );

  const openLightbox = (index: number) => {
    lastTriggerIndex.current = index;
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    const preferred = lastTriggerIndex.current ?? lightboxIndex;
    const focusIndex = Math.min(preferred, Math.max(images.length - 1, 0));
    window.requestAnimationFrame(() => {
      triggerRefs.current.get(focusIndex)?.focus();
    });
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-eyebrow text-brand-green">{content.galleryLabel}</p>
        <p className="font-mono text-xs tracking-[0.16em] text-concrete-dark">
          {viewsLabel}
        </p>
      </div>

      <ul className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
        {images.map((image, index) => {
          const layout = getGalleryItemLayout(index);

          return (
            <li
              key={image.id}
              className={cn(layout.spanClass, "min-w-0 list-none")}
            >
              <button
                type="button"
                ref={(node) => {
                  if (node) {
                    triggerRefs.current.set(index, node);
                  } else {
                    triggerRefs.current.delete(index);
                  }
                }}
                onClick={() => openLightbox(index)}
                className={cn(
                  "group relative block w-full overflow-hidden bg-concrete/25 text-left",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background-light",
                  layout.aspectClass,
                )}
                aria-label={`${content.viewLabel}: ${getAlt(image)}`}
              >
                <Image
                  src={image.src}
                  alt={getAlt(image)}
                  fill
                  sizes={layout.sizes}
                  priority={index < 2}
                  className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.035] motion-reduce:group-hover:scale-100"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-background-dark/0 transition-colors duration-300 group-hover:bg-background-dark/40 motion-reduce:transition-none"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-text-light">
                    <Expand className="size-3.5" aria-hidden />
                    {content.viewLabel}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <GalleryLightbox
        images={images}
        index={lightboxIndex}
        open={lightboxOpen}
        onClose={closeLightbox}
        onIndexChange={setLightboxIndex}
        getAlt={(image) => getAlt(image)}
        labels={{
          prev: content.prevImage,
          next: content.nextImage,
          close: content.closeLightbox,
          dialog: content.lightboxLabel,
        }}
      />
    </div>
  );
}
