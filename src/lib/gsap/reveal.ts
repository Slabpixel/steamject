import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import type { SplitText as SplitTextInstance } from "gsap/SplitText";
import {
  EASE_OUT,
  REVEAL_DURATION,
  REVEAL_START,
  REVEAL_TOGGLE,
} from "./presets";

export type RevealCleanup = {
  splits: SplitTextInstance[];
  revert: () => void;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollTriggerConfig(trigger: Element) {
  return {
    trigger,
    start: REVEAL_START,
    toggleActions: REVEAL_TOGGLE,
  };
}

export function createBlockReveal(
  el: Element,
  vars?: gsap.TweenVars,
): gsap.core.Tween {
  if (prefersReducedMotion()) {
    gsap.set(el, { autoAlpha: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" });
    return gsap.to(el, { duration: 0 });
  }

  gsap.set(el, {
    autoAlpha: 0,
    y: 48,
    clipPath: "inset(100% 0% 0% 0%)",
  });

  return gsap.to(el, {
    autoAlpha: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    duration: REVEAL_DURATION,
    ease: EASE_OUT,
    scrollTrigger: scrollTriggerConfig(el),
    ...vars,
  });
}

export function createSplitReveal(
  el: Element,
  options?: { type?: "lines" | "words" },
  splits?: SplitTextInstance[],
): gsap.core.Tween {
  const type = options?.type ?? "lines";

  if (prefersReducedMotion()) {
    gsap.set(el, { autoAlpha: 1 });
    return gsap.to(el, { duration: 0 });
  }

  const split = SplitText.create(el, {
    type,
    mask: type === "lines" ? "lines" : undefined,
    aria: "auto",
    linesClass: "overflow-hidden",
  });

  splits?.push(split);

  const targets = type === "words" ? split.words : split.lines;

  gsap.set(targets, { yPercent: 110, autoAlpha: 0 });

  return gsap.to(targets, {
    yPercent: 0,
    autoAlpha: 1,
    duration: REVEAL_DURATION,
    ease: EASE_OUT,
    stagger: 0.08,
    scrollTrigger: scrollTriggerConfig(el),
  });
}

export function initSectionReveals(scope: HTMLElement): RevealCleanup {
  const splits: SplitTextInstance[] = [];

  scope.querySelectorAll('[data-reveal="split"]').forEach((el) => {
    createSplitReveal(el, { type: "lines" }, splits);
  });

  scope.querySelectorAll('[data-reveal="split-words"]').forEach((el) => {
    createSplitReveal(el, { type: "words" }, splits);
  });

  scope.querySelectorAll("[data-reveal]").forEach((el) => {
    const mode = el.getAttribute("data-reveal");
    if (mode === "split" || mode === "split-words") return;
    createBlockReveal(el);
  });

  return {
    splits,
    revert: () => {
      splits.forEach((split) => split.revert());
    },
  };
}

export interface HeroLoadTargets {
  copyright: Element | null;
  heading: Element | null;
  cards: Element[];
}

export function createHeroLoadTimeline(targets: HeroLoadTargets) {
  const splits: SplitTextInstance[] = [];

  if (prefersReducedMotion()) {
    gsap.set(
      [targets.copyright, targets.heading, ...targets.cards].filter(Boolean),
      { autoAlpha: 1, y: 0, scale: 1 },
    );
    return { timeline: gsap.timeline(), revertSplits: () => splits.forEach((s) => s.revert()) };
  }

  const tl = gsap.timeline({ defaults: { ease: EASE_OUT } });

  if (targets.copyright) {
    gsap.set(targets.copyright, { autoAlpha: 0, y: 16 });
    tl.to(
      targets.copyright,
      { autoAlpha: 1, y: 0, duration: 0.6 },
      0.2,
    );
  }

  if (targets.heading) {
    gsap.set(targets.heading, {
      autoAlpha: 0,
      y: 48,
      clipPath: "inset(100% 0% 0% 0%)",
    });
    tl.to(
      targets.heading,
      {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.9,
      },
      0.35,
    );
  }

  if (targets.cards.length) {
    gsap.set(targets.cards, { autoAlpha: 0, y: 32, scale: 0.98 });
    tl.to(
      targets.cards,
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.75,
        stagger: 0.15,
      },
      0.55,
    );
  }

  return {
    timeline: tl,
    revertSplits: () => splits.forEach((split) => split.revert()),
  };
}

export function createHeroParallax(
  section: Element,
  leftImg: Element,
  rightImg: Element,
) {
  if (prefersReducedMotion()) return;

  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    },
    (context) => {
      const distance = context.conditions?.isMobile ? "8vw" : "18vw";

      gsap.to(leftImg, {
        x: `-${distance}`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(rightImg, {
        x: distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
  );

  return () => mm.revert();
}
