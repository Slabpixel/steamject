import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import type { SplitText as SplitTextInstance } from "gsap/SplitText";
import { EASE_IN_OUT } from "./presets";

const HIDDEN_ABOVE = -115;
const HIDDEN_BELOW = 115;

export interface SplitTextLinkSetup {
  originalSplit: SplitTextInstance;
  cloneSplit: SplitTextInstance;
  onEnter: () => void;
  onLeave: () => void;
  cleanup: () => void;
}

export function setupSplitTextLink(
  originalEl: HTMLElement,
  cloneEl: HTMLElement,
  contextSafe: (fn: () => void) => () => void,
): SplitTextLinkSetup | null {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  const splitConfig = {
    type: "chars" as const,
    mask: "chars" as const,
    charsClass: "split-link-char",
    maskClass: "split-link-char-mask",
  };

  const originalSplit = SplitText.create(originalEl, {
    ...splitConfig,
    aria: "auto",
  });

  const cloneSplit = SplitText.create(cloneEl, {
    ...splitConfig,
    aria: "hidden",
  });

  gsap.set(originalSplit.chars, { yPercent: 0 });
  gsap.set(cloneSplit.chars, { yPercent: HIDDEN_BELOW });

  let hoverTween: gsap.core.Timeline | null = null;

  const animateTo = (originalY: number, cloneY: number, stagger: number) => {
    hoverTween?.kill();
    hoverTween = gsap.timeline({ defaults: { ease: EASE_IN_OUT, duration: 0.4 } });
    hoverTween
      .to(
        originalSplit.chars,
        {
          yPercent: originalY,
          stagger: { each: stagger, from: "start" },
          overwrite: "auto",
        },
        0,
      )
      .to(
        cloneSplit.chars,
        {
          yPercent: cloneY,
          stagger: { each: stagger, from: "start" },
          overwrite: "auto",
        },
        0,
      );
  };

  const onEnter = contextSafe(() => animateTo(HIDDEN_ABOVE, 0, 0.015));
  const onLeave = contextSafe(() => animateTo(0, HIDDEN_BELOW, 0.01));

  return {
    originalSplit,
    cloneSplit,
    onEnter,
    onLeave,
    cleanup: () => {
      hoverTween?.kill();
      originalSplit.revert();
      cloneSplit.revert();
    },
  };
}
