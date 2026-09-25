"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { FoundationRing } from "@/components/ui/FoundationRing";
import { TurbineLoader } from "@/components/ui/TurbineLoader";
import { defaultLocale, isLocale } from "@/lib/i18n/config";

export default function LangLoading() {
  const segment = usePathname().split("/").filter(Boolean)[0] ?? "";
  const locale = isLocale(segment) ? segment : defaultLocale;
  const label = locale === "de" ? "Wird geladen" : "Loading";

  return (
    <div
      role="status"
      aria-live="polite"
      className="relative flex min-h-[calc(100svh-var(--site-header-height))] items-center justify-center overflow-hidden bg-background-dark"
    >
      <FoundationRing
        anchor="center"
        intensity="subtle"
        spin
        className="opacity-40"
      />

      <Container className="relative z-10 flex flex-col items-center py-16 text-center">
        <TurbineLoader className="size-28 sm:size-36" />

        <p className="text-eyebrow mt-8 text-brand-cyan/90">D-Wind GmbH</p>
        <p className="text-body mt-2 text-text-muted">{label}…</p>

        <span
          aria-hidden
          className="relative mt-8 block h-px w-40 overflow-hidden bg-white/10 sm:w-56"
        >
          <span className="animate-loader-sweep absolute inset-y-0 left-0 block w-1/3 bg-brand-cyan" />
        </span>
      </Container>
    </div>
  );
}
