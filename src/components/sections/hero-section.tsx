"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import { registerGsap } from "@/lib/gsap/register";
import { createHeroLoadTimeline, createHeroParallax } from "@/lib/gsap/reveal";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLParagraphElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGsap();

      const section = sectionRef.current;
      const leftImg = leftImgRef.current;
      const rightImg = rightImgRef.current;
      const copyright = copyrightRef.current;
      const heading = headingRef.current;
      const cardsContainer = cardsRef.current;

      const cards = cardsContainer
        ? Array.from(cardsContainer.children)
        : [];

      const { timeline: loadTimeline, revertSplits } = createHeroLoadTimeline({
        copyright,
        heading,
        cards,
      });

      let revertParallax: (() => void) | undefined;

      if (section && leftImg && rightImg) {
        revertParallax = createHeroParallax(section, leftImg, rightImg);
      }

      return () => {
        loadTimeline.kill();
        revertSplits();
        revertParallax?.();
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-170 h-[70vh] max-h-300 bg-primary overflow-hidden max-md:min-h-0 max-md:h-auto max-md:pb-10"
    >
      <div className="absolute -top-24 lg:-top-64 xl:-top-1/3 w-[clamp(2000px,208vw,3500px)] aspect-3000/745 left-1/2 -translate-x-1/2 max-md:-top-12">
        <Image src="/hero-wh.svg" alt="Hero White" fill />
      </div>
      <div className="absolute bottom-0 w-full h-1/2 z-2 max-md:h-2/5">
        <div ref={leftImgRef} className="absolute -bottom-120 -left-76 max-md:-bottom-20 max-md:-left-10 will-change-transform">
          <Image
            src="/hero-img-1.png"
            alt="Hero Image 1"
            width={1000}
            height={1000}
            className="max-md:w-48 max-md:h-48"
          />
        </div>
        <div ref={rightImgRef} className="absolute -bottom-60 -right-120 max-md:-bottom-10 max-md:-right-8 will-change-transform">
          <Image
            src="/hero-img-2.png"
            alt="Hero Image 2"
            width={1000}
            height={1000}
            className="max-md:w-40 max-md:h-40"
          />
        </div>
        <div className="absolute bottom-0 h-52.5 w-full bg-linear-to-b from-primary/0 to-primary max-md:h-24"></div>
      </div>
      <div className="relative max-w-8xl px-7.5 pt-37 mx-auto w-full flex flex-col items-center gap-22 max-md:px-4 max-md:pt-28 max-md:gap-10">
        <div className="relative max-md:flex max-md:flex-col max-md:items-center max-md:gap-4">
          <p
            ref={copyrightRef}
            className="absolute text-xs sm:text-sm md:text-base top-8 right-2 md:top-15.5 md:right-16 tracking-tight text-foreground/60 max-md:static max-md:text-center"
          >
            © 2026 Steamject Corp. <br /> All Right Reserved
          </p>
          <h1
            ref={headingRef}
            className="text-[6rem] md:text-[10rem] xl:text-[11.25rem] font-medium leading-[0.84] text-transparent bg-clip-text bg-linear-to-b from-foreground to-primary from-50% to-81% max-md:text-[3.25rem] max-md:text-center"
          >
            DNA <br />
            Injection
          </h1>
        </div>
        <div
          ref={cardsRef}
          className="flex max-md:flex-col items-stretch justify-stretch z-3 relative max-md:w-full max-md:gap-3"
        >
          <div className="bg-background rounded-2xl p-3 border border-slate-300 flex gap-4 md:min-w-109 max-md:w-full">
            <Image
              src="/vid.png"
              alt="Video"
              width={114}
              height={114}
              className="rounded-lg overflow-hidden cursor-pointer max-md:size-20 max-md:shrink-0"
            />
            <div className="flex flex-col gap-2 h-full justify-between">
              <p className="text-2xl leading-[1.16] font-medium tracking-tighter max-md:text-xl">
                Redefining <br /> Human Potential
              </p>
              <p className="text-xs h-6.5">Discover personalized science.</p>
            </div>
          </div>
          <div className="bg-background rounded-2xl p-3 border border-slate-300 flex flex-col justify-between max-md:w-full max-md:gap-4">
            <p className="text-2xl leading-[1.16] font-medium tracking-tighter max-md:text-xl">
              DNA <br /> Injection
            </p>
            <div className="flex gap-3 h-6.5 items-center">
              <div className="animate-spin">
                <Image src="/spinner.png" alt="Spinner" width={26} height={26} />
              </div>
              <p>Scanning Your DNA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
