import { cn } from "@/lib/cn";

type TurbineLoaderProps = {
  className?: string;
  /** Accessible description of what is loading */
  label?: string;
};

const bladeAngles = [0, 120, 240];

const windGusts = [
  { d: "M6 64 C26 58 44 58 66 64", delay: "" },
  { d: "M14 128 C32 122 50 122 72 128", delay: "anim-delay-600" },
  { d: "M170 166 C190 160 208 160 232 166", delay: "anim-delay-300" },
];

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
      <g className="animate-survey-orbit origin-[120px_96px] [transform-box:view-box]">
        <path
          d="M120 8 v12"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="stroke-brand-green"
        />
      </g>

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

      {windGusts.map((gust) => (
        <path
          key={gust.d}
          d={gust.d}
          pathLength={100}
          strokeDasharray="30 170"
          strokeLinecap="round"
          strokeWidth="1.5"
          className={cn("animate-wind-drift stroke-brand-cyan/60", gust.delay)}
        />
      ))}

      <rect
        x="114"
        y="89"
        width="26"
        height="14"
        rx="4"
        className="fill-background-dark-secondary stroke-text-light/60"
        strokeWidth="1.5"
      />
      <g className="animate-beacon-blink">
        <circle cx="134" cy="86" r="6" className="fill-red-500/25" />
        <circle cx="134" cy="86" r="2.5" className="fill-red-500" />
      </g>

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
      <circle
        cx="120"
        cy="96"
        r="18"
        strokeWidth="1"
        className="animate-hub-pulse origin-[120px_96px] [transform-box:view-box] stroke-brand-green/70"
      />
    </svg>
  );
}
