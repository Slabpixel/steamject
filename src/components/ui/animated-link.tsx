"use client";

import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { registerGsap } from "@/lib/gsap/register";
import { setupSplitTextLink } from "@/lib/gsap/split-text-link";

type AnimatedLinkProps = {
  href: string;
  children: string;
  className?: string;
};

export default function AnimatedLink({ href, children, className }: AnimatedLinkProps) {
  const rootRef = useRef<HTMLAnchorElement>(null);
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
    <Link ref={rootRef} href={href} className={cn("inline-block overflow-hidden leading-none", className)}>
      <span className="relative inline-block overflow-hidden leading-none">
        <span ref={originalRef} className="inline-block leading-none whitespace-nowrap">
          {children}
        </span>
        <span ref={cloneRef} aria-hidden="true" className="absolute inset-0 inline-block leading-none whitespace-nowrap">
          {children}
        </span>
      </span>
    </Link>
  );
}
