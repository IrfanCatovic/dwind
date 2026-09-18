import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { brandAssets } from "@/lib/data/brand";
import { companyContact } from "@/lib/data/contact";
import { localePath, type Locale, type RouteKey } from "@/lib/i18n/config";
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

          <LocaleSwitcher
            locale={locale}
            labels={{
              de: dictionary.nav.de,
              en: dictionary.nav.en,
              language: dictionary.footer.language,
            }}
          />

          <div className="flex flex-col items-start gap-1 sm:items-end">
            <p className="text-sm text-text-muted">
              © {year} {dictionary.footer.rights}
            </p>
            <p className="text-[0.65rem] tracking-wide text-white/25">
              <a
                href="https://irfancatovic.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
              >
                Developer: Irfan Ćatović
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
