"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  localePath,
  switchLocalePath,
  type Locale,
  type RouteKey,
} from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const navItems: { key: RouteKey; labelKey: keyof Dictionary["nav"] }[] = [
  { key: "home", labelKey: "home" },
  { key: "arbeiten", labelKey: "work" },
  { key: "kontakt", labelKey: "contact" },
];

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <header className="sticky top-0 z-40 border-b border-border-dark bg-background-dark/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-3 sm:py-4">
        <Link
          href={localePath(locale, "home")}
          className="relative block h-10 w-[9.5rem] shrink-0 overflow-hidden rounded-sm bg-background-light px-2 py-1 sm:h-11 sm:w-44"
        >
          <Image
            src="/brand/Logo.jpeg"
            alt="D-Wind GmbH"
            fill
            priority
            sizes="176px"
            className="object-contain object-left"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 md:flex"
        >
          {navItems.map((item) => {
            const href = localePath(locale, item.key);
            const active =
              item.key === "home"
                ? pathname === `/${locale}` || pathname === `/${locale}/`
                : pathname.startsWith(href);

            return (
              <Link
                key={item.key}
                href={href}
                className={
                  active
                    ? "text-sm font-medium text-text-light"
                    : "text-sm text-text-muted transition hover:text-text-light"
                }
              >
                {dictionary.nav[item.labelKey]}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex items-center gap-1 rounded-sm border border-border-dark p-0.5 text-xs font-medium"
            aria-label="Language"
          >
            <Link
              href={switchLocalePath(pathname, "de")}
              className={
                locale === "de"
                  ? "rounded-sm bg-surface-elevated px-2 py-1 text-text-light"
                  : "px-2 py-1 text-text-muted hover:text-text-light"
              }
              hrefLang="de"
              lang="de"
            >
              {dictionary.nav.de}
            </Link>
            <Link
              href={switchLocalePath(pathname, "en")}
              className={
                locale === "en"
                  ? "rounded-sm bg-surface-elevated px-2 py-1 text-text-light"
                  : "px-2 py-1 text-text-muted hover:text-text-light"
              }
              hrefLang="en"
              lang="en"
            >
              {dictionary.nav.en}
            </Link>
          </div>

          <Button
            href={localePath(locale, "kontakt")}
            size="md"
            className="hidden sm:inline-flex"
          >
            {dictionary.nav.cta}
          </Button>
        </div>
      </Container>

      <Container className="flex gap-4 overflow-x-auto pb-3 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.key}
            href={localePath(locale, item.key)}
            className="whitespace-nowrap text-sm text-text-muted hover:text-text-light"
          >
            {dictionary.nav[item.labelKey]}
          </Link>
        ))}
      </Container>
    </header>
  );
}
