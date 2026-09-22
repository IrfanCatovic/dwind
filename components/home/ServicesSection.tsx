import { Container } from "@/components/layout/Container";
import { FoundationRing } from "@/components/ui/FoundationRing";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type ServicesSectionProps = {
  dictionary: Dictionary;
};

type ServiceIconProps = {
  className?: string;
};

function ReinforcementIcon({ className }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M8 14h32M8 24h32M8 34h32M14 8v32M24 8v32M34 8v32"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="14" cy="14" r="1.6" fill="currentColor" />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" />
      <circle cx="34" cy="34" r="1.6" fill="currentColor" />
    </svg>
  );
}

function FormworkIcon({ className }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <rect
        x="9"
        y="10"
        width="30"
        height="28"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M9 18h30M9 30h30M17 10v28M31 10v28"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function ConcretingIcon({ className }: ServiceIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      className={className}
    >
      <path
        d="M12 14h16l8 8v14H12V14Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M28 14v8h8"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M18 28c2 3 4 5 6 5s4-2 6-5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = [ReinforcementIcon, FormworkIcon, ConcretingIcon] as const;

export function ServicesSection({ dictionary }: ServicesSectionProps) {
  const content = dictionary.services;

  return (
    <section className="relative overflow-hidden bg-background-light text-text-dark">
      <FoundationRing
        anchor="bottom-right"
        intensity="subtle"
        className="-bottom-[45%] -right-[28%] text-text-dark opacity-[0.35]"
      />

      <Container className="relative z-10 py-14 sm:py-16 lg:py-[5.5rem]">
        <Reveal className="max-w-2xl">
          <p className="text-eyebrow text-brand-green">{content.eyebrow}</p>
          <h2 className="text-h2 mt-4 text-balance text-text-dark">
            {content.heading}
          </h2>
          <p className="text-body mt-4 max-w-xl text-concrete-dark sm:mt-5">
            {content.intro}
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-0 border-t border-border-light sm:mt-12 lg:mt-14 lg:grid-cols-3 lg:border-t-0">
          {content.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <Reveal
                key={item.number}
                as="li"
                delay={index * 100}
                className={cn(
                  "group border-b border-border-light py-7 last:border-b-0 sm:py-8",
                  "lg:border-b-0 lg:border-l lg:border-border-light lg:px-8 lg:py-1 lg:first:border-l-0 lg:first:pl-0 lg:last:pr-0",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.2em] text-concrete-dark transition-colors duration-300 group-hover:text-brand-green motion-reduce:transition-none">
                    {item.number}
                  </span>
                  <Icon className="size-10 text-concrete-dark transition-colors duration-300 group-hover:text-brand-green motion-reduce:transition-none" />
                </div>

                <div className="mt-5 h-px w-10 origin-left bg-brand-green/50 transition-all duration-300 group-hover:w-16 group-hover:bg-brand-green motion-reduce:transition-none" />

                <h3 className="text-h3 mt-4 text-text-dark">{item.title}</h3>
                <p className="mt-3 max-w-sm text-[0.9375rem] leading-relaxed text-concrete-dark">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
