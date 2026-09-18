"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { switchLocalePath, type Locale } from "@/lib/i18n/config";

type LocaleSwitcherProps = {
  locale: Locale;
  labels: { de: string; en: string; language: string };
  className?: string;
};

export function LocaleSwitcher({
  locale,
  labels,
  className,
}: LocaleSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;

  return (
    <div
      className={cn(
        "flex items-center gap-2 text-[0.6875rem] font-medium tracking-[0.14em]",
        className,
      )}
      aria-label={labels.language}
    >
      <Link
        href={switchLocalePath(pathname, "de")}
        className={cn(
          "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60",
          locale === "de"
            ? "text-text-light"
            : "text-text-muted hover:text-text-light",
        )}
        hrefLang="de"
        lang="de"
        aria-current={locale === "de" ? "true" : undefined}
      >
        {labels.de}
      </Link>
      <span aria-hidden className="text-text-muted/50">
        |
      </span>
      <Link
        href={switchLocalePath(pathname, "en")}
        className={cn(
          "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60",
          locale === "en"
            ? "text-text-light"
            : "text-text-muted hover:text-text-light",
        )}
        hrefLang="en"
        lang="en"
        aria-current={locale === "en" ? "true" : undefined}
      >
        {labels.en}
      </Link>
    </div>
  );
}
