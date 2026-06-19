"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { registerGsap } from "@/lib/gsap/register";
import { setupSplitTextLink } from "@/lib/gsap/split-text-link";

type AnimatedTextProps = {
  children: string;
  className?: string;
  as?: "span" | "div";
};

export function AnimatedText({ children, className, as: Tag = "span" }: AnimatedTextProps) {
  const rootRef = useRef<HTMLElement>(null);
  const originalRef = useRef<HTMLSpanElement>(null);
  const cloneRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    (_context, contextSafe) => {
      registerGsap();
      const root = rootRef.current;
      const original = originalRef.current;
      const clone = cloneRef.current;
      if (!root || !original || !clone || !contextSafe) return;

      const setup = setupSplitTextLink(original, clone, contextSafe);
      if (!setup) return;

      root.addEventListener("mouseenter", setup.onEnter);
      root.addEventListener("mouseleave", setup.onLeave);

      return () => {
        root.removeEventListener("mouseenter", setup.onEnter);
        root.removeEventListener("mouseleave", setup.onLeave);
        setup.cleanup();
      };
    },
    { scope: rootRef, dependencies: [children] },
  );

  return (
    <Tag ref={rootRef as React.RefObject<HTMLSpanElement & HTMLDivElement>} className={cn("inline-block overflow-hidden leading-none", className)}>
      <span className="relative inline-block overflow-hidden leading-none">
        <span ref={originalRef} className="inline-block leading-none whitespace-nowrap">
          {children}
        </span>
        <span ref={cloneRef} aria-hidden="true" className="absolute inset-0 inline-block leading-none whitespace-nowrap">
          {children}
        </span>
      </span>
    </Tag>
  );
}
