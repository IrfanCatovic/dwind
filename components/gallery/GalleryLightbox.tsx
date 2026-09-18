"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/cn";
import type { GalleryImage } from "@/lib/data/gallery";

type GalleryLightboxProps = {
  images: GalleryImage[];
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  getAlt: (image: GalleryImage, index: number) => string;
  labels: {
    prev: string;
    next: string;
    close: string;
    dialog: string;
  };
};

export function GalleryLightbox({
  images,
  index,
  open,
  onClose,
  onIndexChange,
  getAlt,
  labels,
}: GalleryLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);
  const titleId = useId();
  const [reducedMotion, setReducedMotion] = useState(false);

  const total = images.length;
  const safeIndex = total > 0 ? ((index % total) + total) % total : 0;
  const current = images[safeIndex];
  const counter = `${String(safeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  const goPrev = useCallback(() => {
    if (total === 0) {
      return;
    }
    onIndexChange((safeIndex - 1 + total) % total);
  }, [onIndexChange, safeIndex, total]);

  const goNext = useCallback(() => {
    if (total === 0) {
      return;
    }
    onIndexChange((safeIndex + 1) % total);
  }, [onIndexChange, safeIndex, total]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    document.body.classList.add("lightbox-open");
    closeRef.current?.focus();

    return () => {
      document.body.classList.remove("lightbox-open");
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, onClose, open]);

  useEffect(() => {
    if (!open || total < 2) {
      return;
    }

    const neighbors = [
      images[(safeIndex - 1 + total) % total],
      images[(safeIndex + 1) % total],
    ];

    neighbors.forEach((image) => {
      const img = new window.Image();
      img.src = image.src;
    });
  }, [images, open, safeIndex, total]);

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 48) {
      return;
    }
    if (delta > 0) {
      goPrev();
    } else {
      goNext();
    }
  };

  if (!open || !current) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[80] flex flex-col bg-black/95 animate-lightbox-in motion-reduce:animate-none"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <p id={titleId} className="sr-only">
        {labels.dialog}
      </p>

      <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <p
          className="font-mono text-xs tracking-[0.18em] text-white/70"
          aria-live="polite"
        >
          {counter}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="inline-flex size-11 items-center justify-center rounded-sm text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
        >
          <X className="size-5" aria-hidden />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-3 pb-6 sm:px-10 sm:pb-8"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          type="button"
          onClick={goPrev}
          aria-label={labels.prev}
          className="absolute left-2 z-10 hidden size-12 items-center justify-center rounded-sm border border-white/15 text-white transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green sm:inline-flex md:left-4"
        >
          <ChevronLeft className="size-6" aria-hidden />
        </button>

        <div
          key={current.id}
          className={cn(
            "relative mx-auto h-[min(72vh,52rem)] w-full max-w-6xl",
            !reducedMotion && "animate-lightbox-in",
          )}
        >
          <Image
            src={current.src}
            alt={getAlt(current, safeIndex)}
            fill
            sizes="(max-width: 1024px) 100vw, 90vw"
            quality={85}
            className="object-contain"
          />
        </div>

        <button
          type="button"
          onClick={goNext}
          aria-label={labels.next}
          className="absolute right-2 z-10 hidden size-12 items-center justify-center rounded-sm border border-white/15 text-white transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green sm:inline-flex md:right-4"
        >
          <ChevronRight className="size-6" aria-hidden />
        </button>
      </div>

      <div className="flex items-center justify-center gap-3 px-4 pb-5 sm:hidden">
        <button
          type="button"
          onClick={goPrev}
          aria-label={labels.prev}
          className="inline-flex size-12 items-center justify-center rounded-sm border border-white/15 text-white"
        >
          <ChevronLeft className="size-6" aria-hidden />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label={labels.next}
          className="inline-flex size-12 items-center justify-center rounded-sm border border-white/15 text-white"
        >
          <ChevronRight className="size-6" aria-hidden />
        </button>
      </div>
    </div>
  );
}
