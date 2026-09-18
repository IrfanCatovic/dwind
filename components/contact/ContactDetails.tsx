import { Mail, MapPin, Phone, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { companyContact, companyMaps } from "@/lib/data/contact";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type ContactDetailsProps = {
  dictionary: Dictionary;
};

export function ContactDetails({ dictionary }: ContactDetailsProps) {
  const content = dictionary.contactPage;

  return (
    <div>
      <p className="text-h3 text-text-light">{companyContact.companyName}</p>
      <p className="mt-3 text-sm tracking-wide text-text-muted">
        {content.statement}
      </p>

      <ul className="mt-10 flex flex-col gap-7">
        <li>
          <a
            href={companyContact.emailHref}
            className="group flex items-start gap-4 rounded-sm py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
          >
            <Mail
              aria-hidden
              className="mt-1 size-5 shrink-0 text-brand-green transition-colors group-hover:text-brand-cyan"
            />
            <span className="min-w-0">
              <span className="block text-[0.65rem] tracking-[0.2em] text-text-muted">
                {content.emailLabel}
              </span>
              <span className="mt-1 block break-all text-lg text-text-light transition-colors group-hover:text-brand-cyan sm:text-xl">
                {companyContact.email}
              </span>
            </span>
          </a>
        </li>

        <li>
          <a
            href={companyContact.phoneHref}
            className="group flex items-start gap-4 rounded-sm py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
          >
            <Phone
              aria-hidden
              className="mt-1 size-5 shrink-0 text-brand-green transition-colors group-hover:text-brand-cyan"
            />
            <span className="min-w-0">
              <span className="block text-[0.65rem] tracking-[0.2em] text-text-muted">
                {content.phoneLabel}
              </span>
              <span className="mt-1 block text-lg text-text-light transition-colors group-hover:text-brand-cyan sm:text-xl">
                {companyContact.phoneDisplay}
              </span>
            </span>
          </a>
        </li>

        <li>
          <a
            href={companyContact.mobileHref}
            className="group flex items-start gap-4 rounded-sm py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
          >
            <Smartphone
              aria-hidden
              className="mt-1 size-5 shrink-0 text-brand-green transition-colors group-hover:text-brand-cyan"
            />
            <span className="min-w-0">
              <span className="block text-[0.65rem] tracking-[0.2em] text-text-muted">
                {content.mobileLabel}
              </span>
              <span className="mt-1 block text-lg text-text-light transition-colors group-hover:text-brand-cyan sm:text-xl">
                {companyContact.mobileDisplay}
              </span>
            </span>
          </a>
        </li>

        <li>
          <a
            href={companyMaps.openUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-sm py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
          >
            <MapPin
              aria-hidden
              className="mt-1 size-5 shrink-0 text-brand-green transition-colors group-hover:text-brand-cyan"
            />
            <span className="min-w-0">
              <span className="block text-[0.65rem] tracking-[0.2em] text-text-muted">
                {content.locationLabel}
              </span>
              <address className="mt-1 not-italic text-base leading-relaxed text-text-light transition-colors group-hover:text-brand-cyan sm:text-lg">
                {companyContact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </span>
          </a>
        </li>
      </ul>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button
          href={companyContact.emailHref}
          size="lg"
          className="group w-full sm:w-auto"
        >
          {content.sendEmail}
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </Button>
        <Button
          href={companyContact.phoneHref}
          variant="secondary"
          size="lg"
          className="w-full sm:w-auto"
        >
          {content.callNow}
        </Button>
      </div>
    </div>
  );
}
