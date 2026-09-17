import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FoundationRing } from "@/components/ui/FoundationRing";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <Section tone="dark" className="min-h-[50vh]">
      <FoundationRing anchor="top-right" intensity="subtle" />
      <Container className="relative z-10">
        <p className="text-eyebrow text-brand-cyan">{dictionary.meta.siteName}</p>
        <h1 className="text-h1 mt-3 max-w-3xl">{dictionary.pages.homeTitle}</h1>
        <p className="text-body mt-4 max-w-xl text-text-muted">
          {dictionary.pages.placeholder}
        </p>
      </Container>
    </Section>
  );
}
