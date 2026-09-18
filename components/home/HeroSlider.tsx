"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FoundationRing } from "@/components/ui/FoundationRing";
import { cn } from "@/lib/cn";
import { HERO_INTERVAL_MS, heroImages } from "@/lib/data/hero";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type HeroSliderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function HeroSlider({ locale, dictionary }: HeroSliderProps) {
  const { hero } = dictionary;
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [zoomKey, setZoomKey] = useState(0);
  const [cycleId, setCycleId] = useState(0);
  const startedAtRef = useRef(0);

  const total = heroImages.length;
  const current = ((index % total) + total) % total;

  const restartCycle = useCallback((nextIndex: number) => {
    setIndex(((nextIndex % total) + total) % total);
    setZoomKey((key) => key + 1);
    setProgress(0);
    startedAtRef.current = Date.now();
    setCycleId((id) => id + 1);
  }, [total]);

  const goNext = useCallback(() => {
    restartCycle(current + 1);
  }, [current, restartCycle]);

  const goPrev = useCallback(() => {
    restartCycle(current - 1);
  }, [current, restartCycle]);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    startedAtRef.current = Date.now();

    const slideTimer = setInterval(() => {
      setIndex((value) => {
        const next = (value + 1) % total;
        return next;
      });
      setZoomKey((key) => key + 1);
      startedAtRef.current = Date.now();
      setProgress(0);
      setCycleId((id) => id + 1);
    }, HERO_INTERVAL_MS);

    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startedAtRef.current;
      setProgress(Math.min(100, (elapsed / HERO_INTERVAL_MS) * 100));
    }, 50);

    return () => {
      clearInterval(slideTimer);
      clearInterval(progressTimer);
    };
  }, [cycleId, reducedMotion, total]);

  const displayProgress = reducedMotion ? 100 : progress;
  const counter = `${String(current + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <section
      className="relative isolate flex min-h-[85svh] flex-col justify-end overflow-hidden bg-background-dark md:min-h-[92svh] lg:min-h-[100svh] lg:max-h-[100svh]"
      aria-roledescription="carousel"
      aria-label={hero.slideshowLabel}
    >
      <div className="absolute inset-0">
        {heroImages.map((image, imageIndex) => {
          const active = imageIndex === current;
          const adjacent =
            imageIndex === (current + 1) % total ||
            imageIndex === (current - 1 + total) % total;
          const shouldMount = active || adjacent;

          return (
            <div
              key={image.id}
              className={cn(
                "absolute inset-0 transition-opacity duration-1000 ease-out",
                reducedMotion && "duration-0",
                active ? "opacity-100" : "opacity-0",
              )}
              aria-hidden={!active}
            >
              {shouldMount ? (
                <div
                  key={active ? `zoom-${zoomKey}` : image.id}
                  className={cn(
                    "absolute inset-0 will-change-transform",
                    active && !reducedMotion && "animate-hero-kenburns",
                  )}
                >
                  <Image
                    src={image.src}
                    alt={active ? hero.imageAlts[imageIndex] : ""}
                    fill
                    priority={imageIndex === 0}
                    sizes="100vw"
                    className="object-cover object-[center_30%] sm:object-center"
                  />
                </div>
              ) : null}
            </div>
          );
        })}

        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-background-dark/92 via-background-dark/55 to-background-dark/20 sm:from-background-dark/88 sm:via-background-dark/45 sm:to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/35 to-background-dark/20"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background-dark to-transparent"
        />
      </div>

      <FoundationRing
        anchor="top-right"
        intensity="subtle"
        spin
        className="-right-[40%] -top-[20%] text-text-light opacity-80 sm:-right-[28%] lg:-right-[18%]"
      />
      <FoundationRing
        anchor="bottom-left"
        intensity="subtle"
        className="-bottom-[45%] -left-[35%] opacity-70 sm:-left-[22%]"
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-end pb-32 pt-[calc(var(--site-header-height)+1.25rem)] sm:pb-28 lg:justify-center lg:pb-32 lg:pt-[calc(var(--site-header-height)+2rem)]">
        <div className="max-w-xl lg:max-w-[32rem] xl:max-w-[34rem]">
          <p className="text-eyebrow text-brand-cyan">{hero.eyebrow}</p>

          <h1 className="text-display mt-4 text-balance text-text-light sm:mt-5">
            {hero.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="text-body mt-5 max-w-md text-text-muted sm:mt-6 sm:max-w-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-4">
            <Button
              href={localePath(locale, "arbeiten")}
              size="lg"
              className="group"
            >
              {hero.primaryCta}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Button>
            <Button
              href={localePath(locale, "kontakt")}
              variant="secondary"
              size="lg"
            >
              {hero.secondaryCta}
            </Button>
          </div>

          <p className="mt-6 text-sm tracking-wide text-text-muted/80">
            {hero.trustLine}
          </p>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <Container className="pointer-events-auto flex items-end justify-between gap-4 pb-5 sm:pb-6 lg:justify-end lg:pb-8">
          <div className="flex w-full max-w-[14rem] flex-col gap-3 sm:max-w-[16rem] lg:ml-auto">
            <div className="flex items-center justify-between gap-3">
              <p
                className="font-mono text-xs tracking-[0.18em] text-text-muted"
                aria-live="polite"
              >
                {counter}
              </p>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label={hero.prevSlide}
                  className="inline-flex size-10 items-center justify-center rounded-sm border border-white/15 text-text-light transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
                >
                  <ArrowLeft className="size-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label={hero.nextSlide}
                  className="inline-flex size-10 items-center justify-center rounded-sm border border-white/15 text-text-light transition-colors hover:border-brand-cyan/50 hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
                >
                  <ArrowRight className="size-4" aria-hidden />
                </button>
              </div>
            </div>

            <div
              className="h-px w-full overflow-hidden bg-white/15"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(displayProgress)}
              aria-label={hero.slideshowLabel}
            >
              <div
                className="h-full bg-brand-green transition-[width] duration-75 ease-linear"
                style={{ width: `${displayProgress}%` }}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
