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
    title: dictionary.pages.workTitle,
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

  return (
    <Section tone="dark" className="min-h-[50vh]">
      <Container>
        <p className="text-eyebrow text-brand-green">{dictionary.meta.siteName}</p>
        <h1 className="text-h1 mt-3">{dictionary.pages.workTitle}</h1>
        <p className="text-body mt-4 max-w-xl text-text-muted">
          {dictionary.pages.placeholder}
        </p>
      </Container>
    </Section>
  );
}
