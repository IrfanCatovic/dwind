import Image from "next/image";
import { cn } from "@/lib/cn";
import { europeImage } from "@/lib/data/brand";

type EuropeTechnicalMapProps = {
  className?: string;
  label: string;
  statement: [string, string, string];
};

/**
 * Europe visual using the provided company graphic.
 * No location pins or fabricated project markers.
 */
export function EuropeTechnicalMap({
  className,
  label,
  statement,
}: EuropeTechnicalMapProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="relative aspect-[4/3] w-full lg:aspect-[5/4] xl:aspect-[4/3]">
        <Image
          src={europeImage.src}
          alt={label}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-contain object-center brightness-[1.35] contrast-[1.08] saturate-[1.05]"
          priority={false}
        />
      </div>

      <div className="pointer-events-none absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
        <p className="text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.22em] text-text-muted">
          {statement.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <span aria-hidden className="mt-2 block h-px w-10 bg-brand-green/70" />
      </div>
    </div>
  );
}
