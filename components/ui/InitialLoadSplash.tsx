import { TurbineLoader } from "@/components/ui/TurbineLoader";

/**
 * Brand splash covering the first paint. Driven purely by CSS so it also
 * disappears when JavaScript never runs — the animation ends on
 * `visibility: hidden`, which releases pointer events over the page.
 */
export function InitialLoadSplash() {
  return (
    <div
      aria-hidden
      className="animate-splash-out fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-background-dark"
    >
      <TurbineLoader className="size-24 sm:size-28" />
      <p className="text-eyebrow text-brand-cyan/90">D-Wind GmbH</p>
    </div>
  );
}
