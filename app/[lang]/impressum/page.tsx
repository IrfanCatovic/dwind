import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { FoundationRing } from "@/components/ui/FoundationRing";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";

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

  return buildPageMetadata({
    locale: lang,
    title: `${dictionary.legal.impressumTitle} | ${dictionary.meta.siteName}`,
    description: dictionary.meta.defaultDescription,
    path: `/${lang}/impressum`,
  });
}

export default async function ImpressumPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    // FINAL LEGAL CONTENT IS REQUIRED BEFORE PRODUCTION LAUNCH.
    <section className="relative min-h-[50vh] overflow-hidden border-b border-white/10 bg-background-dark text-text-light">
      <FoundationRing
        anchor="top-right"
        intensity="subtle"
        className="-right-[28%] -top-[32%] opacity-40"
      />
      <Container className="relative z-10 max-w-3xl pt-[calc(var(--site-header-height)+2.5rem)] pb-16 sm:pb-20 lg:pb-24">
        <p className="text-eyebrow text-brand-cyan/90">
          {dictionary.meta.siteName}
        </p>
        <h1 className="text-h1 mt-4">{dictionary.legal.impressumTitle}</h1>
        <p className="text-body mt-5 text-text-muted">
          {dictionary.legal.placeholder}
        </p>
      </Container>
    </section>
  );
}
