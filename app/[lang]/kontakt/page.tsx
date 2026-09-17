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
    title: dictionary.pages.contactTitle,
    alternates: {
      languages: {
        de: "/de/kontakt",
        en: "/en/kontakt",
        "x-default": "/de/kontakt",
      },
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
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
      <Container>
        <p className="text-eyebrow text-brand-cyan">{dictionary.meta.siteName}</p>
        <h1 className="text-h1 mt-3">{dictionary.pages.contactTitle}</h1>
        <p className="text-body mt-4 max-w-xl text-text-muted">
          {dictionary.pages.placeholder}
        </p>
      </Container>
    </Section>
  );
}
