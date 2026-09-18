import type { Metadata } from "next";
import { brandAssets } from "@/lib/data/brand";
import type { Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/get-dictionary";

type PageMetaInput = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  /** When true, title is used as-is (already includes site name) */
  absoluteTitle?: boolean;
};

/** Build localized page metadata with canonical + hreflang alternates */
export function buildPageMetadata({
  locale,
  title,
  description,
  path,
  absoluteTitle = true,
}: PageMetaInput): Metadata {
  const dictionary = getDictionary(locale);
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const dePath = canonicalPath.replace(/^\/(de|en)/, "/de");
  const enPath = canonicalPath.replace(/^\/(de|en)/, "/en");

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        de: dePath,
        en: enPath,
        "x-default": dePath,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "de" ? "de_DE" : "en_GB",
      siteName: dictionary.meta.siteName,
      title,
      description,
      url: canonicalPath,
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
      title,
      description,
      images: [brandAssets.shareImage],
    },
  };
}
