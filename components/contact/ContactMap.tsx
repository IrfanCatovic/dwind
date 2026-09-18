"use client";

import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FoundationRing } from "@/components/ui/FoundationRing";
import { companyContact, companyMaps } from "@/lib/data/contact";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type ContactMapProps = {
  dictionary: Dictionary;
};

export function ContactMap({ dictionary }: ContactMapProps) {
  const content = dictionary.contactPage;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative overflow-hidden border border-white/10 bg-background-dark-secondary">
      <div className="relative aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-auto lg:min-h-[32rem] xl:min-h-[36rem]">
        {!loaded ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-10 text-center">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <FoundationRing
              anchor="center"
              intensity="subtle"
              className="left-1/2 top-1/2 size-[min(90%,22rem)] -translate-x-1/2 -translate-y-1/2 opacity-40"
            />

            <MapPin
              aria-hidden
              className="relative z-10 size-8 text-brand-green"
            />
            <p className="relative z-10 mt-4 text-base font-medium text-text-light">
              {companyContact.companyName}
            </p>
            <p className="relative z-10 mt-2 text-sm leading-relaxed text-text-muted">
              {companyContact.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>

            <Button
              type="button"
              size="lg"
              className="relative z-10 mt-8"
              onClick={() => setLoaded(true)}
            >
              {content.loadMap}
            </Button>
            <p className="relative z-10 mt-4 max-w-xs text-xs leading-relaxed text-text-muted/80">
              {content.loadMapHint}
            </p>
          </div>
        ) : (
          <iframe
            title={content.mapIframeTitle}
            src={companyMaps.embedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        )}
      </div>

      <div className="border-t border-white/10 px-4 py-3 sm:px-5">
        <a
          href={companyMaps.openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-brand-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60"
        >
          {content.openMaps}
          <ArrowRight
            aria-hidden
            className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </div>
  );
}
