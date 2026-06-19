"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { registerGsap } from "@/lib/gsap/register";
import { initSectionReveals } from "@/lib/gsap/reveal";

export function useSectionReveal<T extends HTMLElement = HTMLElement>() {
  const sectionRef = useRef<T>(null);

  useGSAP(
    () => {
      registerGsap();
      const scope = sectionRef.current;
      if (!scope) return;

      const { revert } = initSectionReveals(scope);
      return () => revert();
    },
    { scope: sectionRef },
  );

  return sectionRef;
}
