import Image from "next/image";
import { ArrowRight, Mail, Phone, Smartphone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FoundationRing } from "@/components/ui/FoundationRing";
import {
  companyContact,
  contactCtaBackground,
} from "@/lib/data/contact";
import { localePath, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type ContactCtaSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ContactCtaSection({
  locale,
  dictionary,
}: ContactCtaSectionProps) {
  const content = dictionary.contactCta;

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-background-dark text-text-light">
      <div className="absolute inset-0">
        <Image
          src={contactCtaBackground.src}
          alt=""
          fill
          sizes="100vw"
          quality={75}
          className="object-cover object-center opacity-40"
          aria-hidden
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/88 to-background-dark/70"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-background-dark/55"
        />
      </div>

      <FoundationRing
        anchor="bottom-right"
        intensity="subtle"
        className="-bottom-[45%] -right-[30%] opacity-35"
      />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="text-eyebrow text-brand-cyan/90">{content.eyebrow}</p>
            <h2 className="text-h2 mt-4 max-w-2xl text-balance text-text-light lg:text-display lg:leading-[1.1]">
              {content.heading}
            </h2>
            <p className="text-body mt-5 max-w-lg text-text-muted">
              {content.body}
            </p>

            <Button
              href={localePath(locale, "kontakt")}
              size="lg"
              className="group mt-8"
            >
              {content.primaryCta}
              <ArrowRight
                aria-hidden
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Button>

            <p className="mt-10 text-[0.65rem] font-medium tracking-[0.22em] text-text-muted/70">
              {content.statement}
            </p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <ul className="flex flex-col gap-5 sm:gap-6">
              <li>
                <a
                  href={companyContact.emailHref}
                  className="group flex items-start gap-3 rounded-sm py-1 transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
                >
                  <Mail
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-brand-green transition-colors group-hover:text-brand-cyan"
                  />
                  <span>
                    <span className="block text-[0.65rem] tracking-[0.18em] text-text-muted uppercase">
                      {content.emailLabel}
                    </span>
                    <span className="mt-1 block text-base text-text-light sm:text-lg">
                      {companyContact.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={companyContact.phoneHref}
                  className="group flex items-start gap-3 rounded-sm py-1 transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
                >
                  <Phone
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-brand-green transition-colors group-hover:text-brand-cyan"
                  />
                  <span>
                    <span className="block text-[0.65rem] tracking-[0.18em] text-text-muted uppercase">
                      {content.phoneLabel}
                    </span>
                    <span className="mt-1 block text-base text-text-light sm:text-lg">
                      {companyContact.phoneDisplay}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={companyContact.mobileHref}
                  className="group flex items-start gap-3 rounded-sm py-1 transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
                >
                  <Smartphone
                    aria-hidden
                    className="mt-0.5 size-4 shrink-0 text-brand-green transition-colors group-hover:text-brand-cyan"
                  />
                  <span>
                    <span className="block text-[0.65rem] tracking-[0.18em] text-text-muted uppercase">
                      {content.mobileLabel}
                    </span>
                    <span className="mt-1 block text-base text-text-light sm:text-lg">
                      {companyContact.mobileDisplay}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
