type ClassValue =
  | string
  | false
  | null
  | undefined
  | ClassValue[]
  | { [key: string]: boolean | null | undefined };

function toClass(value: ClassValue): string {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(toClass).filter(Boolean).join(" ");
  }

  return Object.entries(value)
    .filter(([, enabled]) => Boolean(enabled))
    .map(([key]) => key)
    .join(" ");
}

/** Tiny className helper — no external dependency */
export function cn(...inputs: ClassValue[]): string {
  return inputs.map(toClass).filter(Boolean).join(" ");
}
