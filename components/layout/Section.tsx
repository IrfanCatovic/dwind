import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "dark" | "dark-secondary" | "light";
};

const toneClass: Record<NonNullable<SectionProps["tone"]>, string> = {
  dark: "bg-background-dark text-text-light",
  "dark-secondary": "bg-background-dark-secondary text-text-light",
  light: "bg-background-light text-text-dark",
};

export function Section({
  children,
  className,
  id,
  tone = "dark",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-16 sm:py-20 lg:py-28",
        toneClass[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}
