import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactMap } from "@/components/contact/ContactMap";
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
    title: dictionary.meta.contactTitle,
    description: dictionary.meta.contactDescription,
    path: `/${lang}/kontakt`,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);
  const content = dictionary.contactPage;

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10 bg-background-dark text-text-light">
        <FoundationRing
          anchor="top-right"
          intensity="subtle"
          className="-right-[28%] -top-[32%] opacity-40"
        />
        <Container className="relative z-10 pt-[calc(var(--site-header-height)+2.5rem)] pb-14 sm:pb-16 lg:pb-20">
          <p className="text-eyebrow text-brand-cyan/90">{content.eyebrow}</p>
          <h1 className="text-h1 mt-4 max-w-3xl text-balance">{content.heading}</h1>
          <p className="text-body mt-4 max-w-2xl text-text-muted">
            {content.body}
          </p>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-background-dark text-text-light">
        <Container className="relative z-10 py-14 sm:py-16 lg:py-20">
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-14">
            <div className="lg:col-span-5">
              <ContactDetails dictionary={dictionary} />
            </div>
            <div className="lg:col-span-7">
              <ContactMap dictionary={dictionary} />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/10 bg-background-dark-secondary text-text-light">
        <Container className="flex flex-col gap-3 py-10 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:py-12">
          <p className="text-eyebrow text-brand-green">{content.europeEyebrow}</p>
          <p className="max-w-xl text-sm leading-relaxed text-text-muted sm:text-right">
            {content.europeBody}
          </p>
        </Container>
      </section>
    </>
  );
}
