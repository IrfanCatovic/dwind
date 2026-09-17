import { cn } from "@/lib/cn";

type FoundationRingProps = {
  className?: string;
  /** Visual weight of the technical outline */
  intensity?: "subtle" | "medium";
  /** Which corner/edge the oversized arc anchors toward */
  anchor?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "center";
};

const anchorClass: Record<NonNullable<FoundationRingProps["anchor"]>, string> =
  {
    "top-right": "-top-[35%] -right-[25%]",
    "top-left": "-top-[35%] -left-[25%]",
    "bottom-right": "-bottom-[40%] -right-[20%]",
    "bottom-left": "-bottom-[40%] -left-[20%]",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  };

/**
 * Oversized circular outline motif inspired by foundation reinforcement rings.
 * Keep usage sparse — technical drawing, not decoration.
 */
export function FoundationRing({
  className,
  intensity = "subtle",
  anchor = "top-right",
}: FoundationRingProps) {
  const opacity = intensity === "subtle" ? "opacity-[0.12]" : "opacity-[0.2]";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute z-0 size-[min(90vw,42rem)] sm:size-[min(80vw,52rem)]",
        anchorClass[anchor],
        className,
      )}
    >
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className={cn("size-full", opacity)}
      >
        <circle
          cx="200"
          cy="200"
          r="188"
          stroke="currentColor"
          strokeWidth="1"
          className="text-text-light"
        />
        <circle
          cx="200"
          cy="200"
          r="156"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 10"
          className="text-brand-cyan"
        />
        <circle
          cx="200"
          cy="200"
          r="118"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-brand-green"
        />
        <circle
          cx="200"
          cy="200"
          r="72"
          stroke="currentColor"
          strokeWidth="1"
          className="text-text-muted"
        />
      </svg>
    </div>
  );
}
