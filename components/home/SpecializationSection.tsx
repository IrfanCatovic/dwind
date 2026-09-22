import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FoundationRing } from "@/components/ui/FoundationRing";
import { Reveal } from "@/components/ui/Reveal";
import { specializationImage } from "@/lib/data/brand";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SpecializationSectionProps = {
  dictionary: Dictionary;
};

export function SpecializationSection({
  dictionary,
}: SpecializationSectionProps) {
  const content = dictionary.specialization;

  return (
    <section className="relative overflow-hidden bg-background-dark text-text-light">
      <FoundationRing
        anchor="bottom-left"
        intensity="subtle"
        className="pointer-events-none -bottom-[40%] -left-[30%] opacity-40 lg:opacity-60"
      />

      <div className="relative grid items-center lg:grid-cols-12 lg:gap-0">
        <div className="relative z-10 px-4 pt-14 pb-8 sm:px-6 sm:pt-16 sm:pb-10 lg:col-span-5 lg:py-28 lg:pl-[max(2rem,calc((100%-80rem)/2+2rem))] lg:pr-10 xl:pr-14">
          <Container className="px-0 lg:mx-0 lg:max-w-none lg:px-0">
            <Reveal>
              <p className="text-eyebrow text-brand-cyan/90">{content.eyebrow}</p>
              <h2 className="text-h2 mt-4 max-w-xl text-balance text-text-light lg:mt-5">
                {content.heading}
              </h2>
              <p className="text-body mt-5 max-w-lg text-text-muted lg:mt-6">
                {content.body}
              </p>
            </Reveal>
          </Container>
        </div>

        <div className="relative z-10 lg:col-span-7">
          <Reveal delay={120} className="h-full">
            <div className="group relative aspect-[4/3] w-full overflow-hidden sm:aspect-[5/3] lg:aspect-auto lg:min-h-[34rem] xl:min-h-[38rem]">
              <Image
                src={specializationImage.src}
                alt={content.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-[center_40%] transition-transform duration-[1.4s] ease-out motion-reduce:transition-none group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                priority={false}
              />

              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 hidden w-28 bg-gradient-to-r from-background-dark via-background-dark/55 to-transparent lg:block xl:w-36"
              />

              <p
                aria-hidden
                className="pointer-events-none absolute bottom-5 right-4 hidden origin-bottom-right rotate-180 text-[0.65rem] tracking-[0.28em] text-white/35 [writing-mode:vertical-rl] lg:block"
              >
                {content.technicalLabel}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
