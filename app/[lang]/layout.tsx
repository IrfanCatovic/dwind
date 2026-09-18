import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { brandAssets } from "@/lib/data/brand";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { generateStaticParams } from "@/lib/i18n/params";

export { generateStaticParams };

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (!isLocale(lang)) {
    return {};
  }

  const dictionary = getDictionary(lang);

  return {
    ...buildPageMetadata({
      locale: lang,
      title: dictionary.meta.defaultTitle,
      description: dictionary.meta.defaultDescription,
      path: `/${lang}`,
    }),
    icons: {
      icon: [{ url: brandAssets.logo, type: "image/png" }],
      shortcut: brandAssets.logo,
      apple: [{ url: brandAssets.logo, type: "image/png" }],
    },
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dictionary = getDictionary(locale);

  return (
    <div className="flex min-h-full flex-col" lang={locale}>
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-nowrap focus:rounded-sm focus:bg-brand-green focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-text-dark focus:outline-none focus:ring-2 focus:ring-brand-cyan"
      >
        {locale === "de" ? "Zum Inhalt springen" : "Skip to content"}
      </a>
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter locale={locale} dictionary={dictionary} />
    </div>
  );
}
