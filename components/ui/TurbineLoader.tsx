import { cn } from "@/lib/cn";

type TurbineLoaderProps = {
  className?: string;
  /** Accessible description of what is loading */
  label?: string;
};

const bladeAngles = [0, 120, 240];

/**
 * Wind turbine loading mark — the rotor spins, tower and foundation stay put.
 * Rotation origin matches the hub coordinates of the 240x240 viewBox.
 */
export function TurbineLoader({ className, label }: TurbineLoaderProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      role="img"
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      className={cn("size-32 text-text-light", className)}
    >
      <circle
        cx="120"
        cy="96"
        r="84"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 12"
        className="text-brand-cyan/40"
      />

      <path
        d="M113 96 L116.5 224 L123.5 224 L127 96 Z"
        className="fill-white/[0.06] stroke-text-light/60"
        strokeWidth="1.5"
      />
      <path
        d="M92 230 H148"
        className="stroke-text-light/40"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M78 236 H162"
        className="stroke-brand-green/60"
        strokeWidth="1"
        strokeDasharray="4 6"
      />

      <g
        className="animate-rotor-spin origin-[120px_96px] [transform-box:view-box]"
        stroke="currentColor"
      >
        {bladeAngles.map((angle) => (
          <path
            key={angle}
            d="M114 96 C111 66 114 44 118 26 C119 22 121 22 122 27 C126 50 129 72 126 96 Z"
            transform={`rotate(${angle} 120 96)`}
            className="fill-brand-cyan/10 stroke-text-light/75"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        ))}
      </g>

      <circle cx="120" cy="96" r="8" className="fill-brand-green" />
      <circle
        cx="120"
        cy="96"
        r="13"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-text-light/50"
      />
    </svg>
  );
}
