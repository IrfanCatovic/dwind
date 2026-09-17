import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "onClick"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-green text-text-dark hover:brightness-110 focus-visible:ring-brand-green",
  secondary:
    "border border-white/25 bg-transparent text-text-light hover:border-brand-cyan/60 hover:text-brand-cyan focus-visible:ring-brand-cyan",
  ghost:
    "bg-transparent text-text-muted hover:text-text-light focus-visible:ring-border-dark",
};

const sizeClass: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[0.9375rem]",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background-dark disabled:pointer-events-none disabled:opacity-50",
    variantClass[variant],
    sizeClass[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={classes}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as Omit<ButtonAsButton, "href" | "onClick">;
  return (
    <button
      type="button"
      className={classes}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
