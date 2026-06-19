"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef, useState } from "react";
import { useSectionReveal } from "@/hooks/use-section-reveal";
import { registerGsap } from "@/lib/gsap/register";

const TEAM_MEMBERS = [
  {
    index: "01",
    name: "Prof. Kla Wu An",
    role: "Senior Researcher",
    image: "/doc1.png",
    alt: "Doctor 1",
  },
  {
    index: "02",
    name: "Prof. Ji An Apik",
    role: "Senior Researcher",
    image: "/doc2.png",
    alt: "Doctor 2",
  },
  {
    index: "03",
    name: "Prof. Wa donan",
    role: "Senior Researcher",
    image: "/doc3.png",
    alt: "Doctor 3",
  },
] as const;

function applyTeamCardState(
  card: HTMLDivElement,
  isActive: boolean,
  instant = false,
) {
  const image = card.querySelector<HTMLElement>("[data-team-image]");
  const overlay = card.querySelector<HTMLElement>("[data-team-overlay]");
  const controls = card.querySelector<HTMLElement>("[data-team-controls]");
  if (!image || !overlay || !controls) return;

  const duration = instant ? 0 : 0.45;

  gsap.to(image, {
    filter: isActive ? "saturate(1)" : "saturate(0)",
    duration,
    ease: "power2.out",
    overwrite: "auto",
  });
  gsap.to(overlay, {
    autoAlpha: isActive ? 1 : 0,
    duration,
    ease: "power2.out",
    overwrite: "auto",
  });
  gsap.to(controls, {
    autoAlpha: isActive ? 1 : 0,
    duration,
    ease: "power2.out",
    overwrite: "auto",
  });
}

export default function TeamSection() {
  const sectionRef = useSectionReveal<HTMLElement>();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktopRef = useRef(true);

  useGSAP(
    () => {
      registerGsap();

      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 768px)",
          isMobile: "(max-width: 767px)",
        },
        (context) => {
          isDesktopRef.current = !!context.conditions?.isDesktop;

          cardRefs.current.forEach((card, i) => {
            if (!card) return;
            const isActive = context.conditions?.isMobile ? true : i === activeIndex;
            applyTeamCardState(card, isActive, true);
          });
        },
      );

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [activeIndex], revertOnUpdate: true },
  );

  useGSAP(
    () => {
      if (!isDesktopRef.current) return;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        applyTeamCardState(card, i === activeIndex);
      });
    },
    { scope: sectionRef, dependencies: [activeIndex] },
  );

  const handleCardEnter = (index: number) => {
    if (!isDesktopRef.current) return;
    setActiveIndex(index);
  };

  return (
    <section id="team" ref={sectionRef} className="relative bg-background overflow-hidden">
      <div className="relative max-w-8xl px-7.5 py-24 mx-auto w-full flex flex-col gap-14 max-md:px-4 max-md:py-12 max-md:gap-8">
        <div className="flex justify-between gap-4 pr-[20%] max-md:flex-col max-md:pr-0 max-md:gap-4">
          <span
            data-reveal
            className="font-medium text-[3.5rem] leading-[1.16] tracking-[-0.03em] max-md:text-[2.5rem]"
          >
            03
          </span>
          <div className="flex flex-col gap-8 max-w-115 w-full max-md:max-w-full max-md:gap-4">
            <h2
              data-reveal="split"
              className="text-[3.5rem] leading-[1.16] font-medium tracking-[-0.03em] max-md:text-[2.5rem]"
            >
              Meet The Team
            </h2>
            <p
              data-reveal="split"
              className="text-foreground/60 text-xl leading-[1.6] font-medium tracking-tight max-md:text-base"
            >
              Meet the minds bridging complex research and human-centric innovation. We turn data into seamless experiences.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-300 grid grid-cols-3 gap-7.5 max-md:grid-cols-1 max-md:gap-0">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={member.index}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              data-active={activeIndex === i}
              onMouseEnter={() => handleCardEnter(i)}
              className="border-x border-slate-300 flex flex-col pt-14 gap-14 max-md:pt-8 max-md:gap-8 max-md:border-x-0 max-md:border-b max-md:pb-8 last:max-md:border-b-0 cursor-default"
            >
              <div data-team-controls className="flex justify-between items-center">
                <div className="flex items-end gap-1.5 text-[3.5rem] leading-[0.9] font-medium tracking-[-0.03em] max-md:text-[2.5rem]">
                  {member.index}
                  <span className="text-base font-semibold text-foreground/60">/06</span>
                </div>
                <div className="relative h-10 flex gap-1.5">
                  <Image src="/card-btn.svg" fill alt="Card Button" />
                  <button type="button" className="relative w-10 flex items-center justify-center cursor-pointer">
                    <Image src="/chevron-right.svg" alt="Chevron Right" width={10} height={16} className="rotate-180" />
                  </button>
                  <button type="button" className="relative w-10 flex items-center justify-center cursor-pointer">
                    <Image src="/chevron-right.svg" alt="Chevron Left" width={10} height={16} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-8 pt-14 max-md:pt-0 max-md:gap-6">
                <div className="relative h-75 max-md:h-64 overflow-hidden">
                  <Image
                    data-team-image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover"
                  />
                  <div
                    data-team-overlay
                    className="absolute bottom-0 left-0 w-full h-35.5 bg-linear-to-t from-secondary/40 to-secondary/0 border-b-2 border-secondary"
                  />
                </div>
                <div className="gap-2 flex flex-col leading-none font-medium">
                  <p className="text-[2rem] max-md:text-xl">{member.name}</p>
                  <p className="uppercase text-foreground/60 text-sm tracking-wide">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
