"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Stagger delay in ms once visible */
  delay?: number;
  as?: "div" | "li" | "article";
  /** How far the element sits before revealing */
  distance?: "sm" | "md";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  distance = "md",
}: RevealProps) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      const prefersReduced = media.matches;
      setReducedMotion(prefersReduced);
      if (prefersReduced) {
        setVisible(true);
      }
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const offset =
    distance === "sm" ? "translate-y-3" : "translate-y-5 sm:translate-y-6";

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none",
        visible || reducedMotion
          ? "translate-y-0 opacity-100"
          : cn(offset, "opacity-0"),
        className,
      )}
      style={
        visible && !reducedMotion && delay > 0
          ? { transitionDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
