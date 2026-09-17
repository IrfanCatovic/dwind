import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { brandAssets } from "@/lib/data/brand";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";
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
    title: {
      absolute: dictionary.meta.defaultTitle,
    },
    description: dictionary.meta.defaultDescription,
    icons: {
      icon: [{ url: brandAssets.logo, type: "image/png" }],
      shortcut: brandAssets.logo,
      apple: [{ url: brandAssets.logo, type: "image/png" }],
    },
    alternates: {
      languages: {
        de: "/de",
        en: "/en",
        "x-default": "/de",
      },
    },
    openGraph: {
      locale: lang === "de" ? "de_DE" : "en_GB",
      title: dictionary.meta.defaultTitle,
      description: dictionary.meta.defaultDescription,
      images: [
        {
          url: brandAssets.shareImage,
          width: 1774,
          height: 887,
          alt: dictionary.meta.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.meta.defaultTitle,
      description: dictionary.meta.defaultDescription,
      images: [brandAssets.shareImage],
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
      <SiteHeader locale={locale} dictionary={dictionary} />
      <main className="flex-1">{children}</main>
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
