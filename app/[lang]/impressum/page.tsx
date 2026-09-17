import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { isLocale } from "@/lib/i18n/config";
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
    title: dictionary.legal.impressumTitle,
    alternates: {
      languages: {
        de: "/de/impressum",
        en: "/en/impressum",
        "x-default": "/de/impressum",
      },
    },
  };
}

export default async function ImpressumPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <Section
      tone="dark"
      className="min-h-[50vh] pt-[calc(var(--site-header-height)+2.5rem)]"
    >
      <Container className="max-w-3xl">
        <p className="text-eyebrow text-brand-cyan">{dictionary.meta.siteName}</p>
        <h1 className="text-h1 mt-3">{dictionary.legal.impressumTitle}</h1>
        <p className="text-body mt-5 text-text-muted">
          {dictionary.legal.placeholder}
        </p>
      </Container>
    </Section>
  );
}
