import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FoundationRing } from "@/components/ui/FoundationRing";
import { getPublicGalleryImages } from "@/lib/data/gallery";
import { isLocale, localePath } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) {
    return {};
  }

  const dictionary = getDictionary(lang);

  return {
    title: dictionary.pages.workTitle,
    description: dictionary.workPage.body,
    alternates: {
      languages: {
        de: "/de/arbeiten",
        en: "/en/arbeiten",
        "x-default": "/de/arbeiten",
      },
    },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const images = getPublicGalleryImages();
  const content = dictionary.workPage;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-background-dark text-text-light">
        <FoundationRing
          anchor="top-right"
          intensity="subtle"
          className="-right-[28%] -top-[30%] opacity-40"
        />
        <Container className="relative z-10 pt-[calc(var(--site-header-height)+2.5rem)] pb-14 sm:pb-16 lg:pb-20">
          <p className="text-eyebrow text-brand-cyan/90">{content.eyebrow}</p>
          <h1 className="text-h1 mt-4 max-w-3xl text-balance">{content.heading}</h1>
          <p className="text-body mt-4 max-w-2xl text-text-muted">
            {content.body}
          </p>
          <p className="mt-6 text-sm tracking-wide text-text-muted/75">
            {content.servicesLine}
          </p>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-background-light text-text-dark">
        <Container className="relative z-10 py-12 sm:py-16 lg:py-20">
          <GalleryGrid images={images} dictionary={dictionary} />
        </Container>
      </section>

      <section className="border-t border-white/10 bg-background-dark text-text-light">
        <Container className="flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center sm:py-14">
          <h2 className="text-h3 max-w-xl text-balance">{content.ctaHeading}</h2>
          <Button
            href={localePath(lang, "kontakt")}
            size="lg"
            className="group shrink-0"
          >
            {content.ctaButton}
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
        </Container>
      </section>
    </>
  );
}
