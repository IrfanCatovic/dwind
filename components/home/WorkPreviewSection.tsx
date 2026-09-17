import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FoundationRing } from "@/components/ui/FoundationRing";
import { cn } from "@/lib/cn";
import {
  getHomepagePreviewImages,
  type GalleryImage,
} from "@/lib/data/gallery";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type WorkPreviewSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

type PreviewTileProps = {
  image: GalleryImage;
  alt: string;
  href: string;
  hoverLabel: string;
  className?: string;
  sizes: string;
  priority?: boolean;
};

function PreviewTile({
  image,
  alt,
  href,
  hoverLabel,
  className,
  sizes,
  priority = false,
}: PreviewTileProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden bg-concrete/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-background-light",
        className,
      )}
      aria-label={`${hoverLabel}: ${alt}`}
    >
      <Image
        src={image.src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-background-dark/0 transition-colors duration-300 group-hover:bg-background-dark/45 motion-reduce:transition-none"
      />
      <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none sm:p-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-text-light">
          {hoverLabel}
          <ArrowRight
            aria-hidden
            className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </span>
      </span>
    </Link>
  );
}

export function WorkPreviewSection({
  locale,
  dictionary,
}: WorkPreviewSectionProps) {
  const content = dictionary.workPreview;
  const images = getHomepagePreviewImages();
  const [feature, ...supporting] = images;
  const href = localePath(locale, "arbeiten");

  return (
    <section className="relative overflow-hidden border-t border-border-light bg-background-light text-text-dark">
      <FoundationRing
        anchor="bottom-right"
        intensity="subtle"
        className="-bottom-[42%] -right-[26%] text-text-dark opacity-[0.28]"
      />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-eyebrow text-brand-green">{content.eyebrow}</p>
            <h2 className="text-h2 mt-4 text-balance text-text-dark">
              {content.heading}
            </h2>
            <p className="text-body mt-4 max-w-xl text-concrete-dark">
              {content.body}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-end lg:gap-5">
            <p className="font-mono text-[0.65rem] tracking-[0.22em] text-concrete-dark/70">
              {content.sectionId}
            </p>
            <Button href={href} size="lg" className="group shrink-0">
              {content.cta}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Button>
          </div>
        </div>

        {/* Desktop asymmetric mosaic */}
        <div className="mt-12 hidden gap-4 lg:mt-16 lg:grid lg:grid-cols-12">
          <PreviewTile
            image={feature}
            alt={content.imageAlts[0]}
            href={href}
            hoverLabel={content.hoverCta}
            className="col-span-7 min-h-[36rem] xl:min-h-[40rem]"
            sizes="(max-width: 1280px) 55vw, 640px"
            priority
          />
          <div className="col-span-5 grid grid-cols-2 grid-rows-2 gap-4">
            {supporting.map((image, index) => (
              <PreviewTile
                key={image.id}
                image={image}
                alt={content.imageAlts[index + 1]}
                href={href}
                hoverLabel={content.hoverCta}
                className="min-h-[17.5rem] xl:min-h-[19.25rem]"
                sizes="(max-width: 1280px) 22vw, 240px"
              />
            ))}
          </div>
        </div>

        {/* Mobile / tablet */}
        <div className="mt-10 grid gap-3 sm:mt-12 sm:grid-cols-2 lg:hidden">
          <PreviewTile
            image={feature}
            alt={content.imageAlts[0]}
            href={href}
            hoverLabel={content.hoverCta}
            className="col-span-full aspect-[4/3] min-h-[14rem] sm:aspect-[16/10] sm:min-h-[18rem]"
            sizes="100vw"
            priority
          />
          {supporting.map((image, index) => (
            <PreviewTile
              key={image.id}
              image={image}
              alt={content.imageAlts[index + 1]}
              href={href}
              hoverLabel={content.hoverCta}
              className="aspect-[4/5] min-h-[12rem] sm:aspect-[3/4] sm:min-h-[14rem]"
              sizes="(max-width: 640px) 50vw, 50vw"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
