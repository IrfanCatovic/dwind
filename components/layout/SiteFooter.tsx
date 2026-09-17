"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { brandAssets } from "@/lib/data/brand";
import { companyContact } from "@/lib/data/contact";
import { cn } from "@/lib/cn";
import {
  localePath,
  switchLocalePath,
  type Locale,
  type RouteKey,
} from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const navItems: { key: RouteKey; labelKey: "home" | "work" | "contact" }[] = [
  { key: "home", labelKey: "home" },
  { key: "arbeiten", labelKey: "work" },
  { key: "kontakt", labelKey: "contact" },
];

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const pathname = usePathname() || `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/10 bg-[#0c100e] text-text-light">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              href={localePath(locale, "home")}
              className="relative block h-11 w-[10rem] sm:h-12 sm:w-[11rem]"
            >
              <Image
                src={brandAssets.logo}
                alt="D-Wind GmbH"
                fill
                sizes="176px"
                className="object-contain object-left"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-muted">
              {dictionary.footer.tagline}
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[0.65rem] font-medium tracking-[0.2em] text-text-muted uppercase">
              {dictionary.footer.navigationLabel}
            </p>
            <nav
              aria-label={dictionary.footer.navigationLabel}
              className="mt-4 flex flex-col gap-2.5"
            >
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={localePath(locale, item.key)}
                  className="text-sm text-text-light/85 transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
                >
                  {dictionary.nav[item.labelKey]}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <p className="text-[0.65rem] font-medium tracking-[0.2em] text-text-muted uppercase">
              {dictionary.footer.contactLabel}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm">
              <li>
                <a
                  href={companyContact.emailHref}
                  className="text-text-light/85 transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
                >
                  {companyContact.email}
                </a>
              </li>
              <li>
                <a
                  href={companyContact.phoneHref}
                  className="text-text-light/85 transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
                >
                  {companyContact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={companyContact.mobileHref}
                  className="text-text-light/85 transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
                >
                  {companyContact.mobileDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-text-muted">
            <Link
              href={localePath(locale, "impressum")}
              className="transition-colors hover:text-text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
            >
              {dictionary.footer.impressum}
            </Link>
            <Link
              href={localePath(locale, "datenschutz")}
              className="transition-colors hover:text-text-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
            >
              {dictionary.footer.datenschutz}
            </Link>
          </div>

          <div
            className="flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.14em]"
            aria-label={dictionary.footer.language}
          >
            <Link
              href={switchLocalePath(pathname, "de")}
              className={cn(
                "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60",
                locale === "de"
                  ? "text-text-light"
                  : "text-text-muted hover:text-text-light",
              )}
              hrefLang="de"
              lang="de"
            >
              {dictionary.nav.de}
            </Link>
            <span aria-hidden className="text-text-muted/50">
              |
            </span>
            <Link
              href={switchLocalePath(pathname, "en")}
              className={cn(
                "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60",
                locale === "en"
                  ? "text-text-light"
                  : "text-text-muted hover:text-text-light",
              )}
              hrefLang="en"
              lang="en"
            >
              {dictionary.nav.en}
            </Link>
          </div>

          <p className="text-sm text-text-muted">
            © {year} {dictionary.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  );
}
