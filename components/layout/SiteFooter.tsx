import { Container } from "@/components/layout/Container";
import type { Dictionary } from "@/lib/i18n/dictionaries";

type SiteFooterProps = {
  dictionary: Dictionary;
};

export function SiteFooter({ dictionary }: SiteFooterProps) {
  return (
    <footer className="mt-auto border-t border-border-dark bg-background-dark-secondary">
      <Container className="flex flex-col gap-2 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-text-muted">{dictionary.meta.siteName}</p>
        <p className="text-sm text-text-muted">
          Fundamentbau für Windenergieanlagen
        </p>
      </Container>
    </footer>
  );
}
