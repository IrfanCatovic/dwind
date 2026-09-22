"use client";

import { Container } from "@/components/layout/Container";
import { FoundationRing } from "@/components/ui/FoundationRing";
import { EuropeTechnicalMap } from "@/components/ui/EuropeTechnicalMap";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type EuropeSectionProps = {
  dictionary: Dictionary;
};

export function EuropeSection({ dictionary }: EuropeSectionProps) {
  const content = dictionary.europe;

  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-background-dark text-text-light">
      <FoundationRing
        anchor="top-right"
        intensity="subtle"
        className="-right-[32%] -top-[18%] opacity-40 lg:-right-[20%]"
      />

      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="text-eyebrow text-brand-cyan/90">{content.eyebrow}</p>
            <h2 className="text-h2 mt-4 text-balance text-text-light">
              {content.heading}
            </h2>
            <p className="text-body mt-5 max-w-lg text-text-muted">
              {content.body}
            </p>
            <p className="mt-5 text-sm tracking-wide text-text-muted/75">
              {content.supportStatement}
            </p>

            <ul className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-3 sm:gap-6 lg:mt-10">
              {content.points.map((point) => (
                <li key={point.number} className="min-w-0">
                  <span className="font-mono text-[0.6875rem] tracking-[0.2em] text-brand-green">
                    {point.number}
                  </span>
                  <span
                    aria-hidden
                    className="mt-2 block h-px w-8 bg-white/15"
                  />
                  <p className="mt-3 text-sm leading-snug text-text-light">
                    {point.label}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140} className="relative lg:col-span-7">
            <FoundationRing
              anchor="center"
              intensity="subtle"
              className="left-1/2 top-1/2 size-[min(95%,26rem)] -translate-x-1/2 -translate-y-1/2 opacity-25 sm:size-[min(90%,32rem)]"
            />

            <div className="relative overflow-hidden rounded-sm border border-white/[0.08] bg-background-dark-secondary/25 p-1 sm:p-1.5 lg:p-2">
              <EuropeTechnicalMap
                label={content.mapLabel}
                statement={content.visualStatement}
                className="europe-map-motion w-full max-w-none"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
