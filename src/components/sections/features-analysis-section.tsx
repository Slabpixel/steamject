"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedText } from "@/components/ui/animated-text";
import { useSectionReveal } from "@/hooks/use-section-reveal";

export default function FeaturesAnalysisSection() {
  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section id="analysis" ref={sectionRef} className="relative bg-primary text-background">
      <div className="relative z-1 max-w-8xl px-7.5 pt-12 pb-28 mx-auto w-full flex flex-col gap-24 max-md:px-4 max-md:py-8 max-md:gap-12">
        <div className="flex gap-25 items-end max-md:flex-col max-md:items-start max-md:gap-6">
          <div className="w-full max-w-150 font-medium tracking-[-0.03em] text-[4.5rem] leading-[1.16] max-md:max-w-full max-md:text-[2.5rem]">
            <h2 data-reveal="split">
              Analyzing <br /> <span className="text-background/40">Genetic Sequence</span>
            </h2>
          </div>
          <div className="max-w-104 flex flex-col gap-7 h-full justify-between max-md:max-w-full max-md:gap-4">
            <p
              data-reveal="split"
              className="text-background text-xl leading-[1.4] tracking-tight max-md:text-base"
            >
              Real-time DNA analysis advances science, allowing observation of changes in genetic engineering.
            </p>
            <Link href="#cta" className="relative flex gap-2 w-fit text-foreground">
              <Image src="/union-nav-cta.svg" alt="Union" fill />
              <AnimatedText className="relative px-2.5 py-2">Contact Us</AnimatedText>
              <div className="relative px-2.5 py-2 flex items-center justify-center">
                <Image src="/chevron-right.svg" alt="Chevron Right" width={10} height={16} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-12 mx-auto w-full flex flex-col gap-24 max-md:gap-12">
        <div className="flex justify-end items-center max-lg:items-end w-full min-h-175 max-md:min-h-0 max-md:flex-col-reverse max-md:justify-between max-md:gap-6">
          <div data-reveal className="absolute left-0 bottom-0 max-md:relative max-md:w-full">
            <Image src="/analyze.png" alt="DNA Analysis" width={1000} height={1000} className="max-md:w-full max-md:h-auto" />
          </div>
          <div data-reveal className="max-md:relative md:mr-6.5 max-md:mx-auto max-md:w-full max-sm:px-4 max-md:px-16 md:mb-6.5">
            <Image src="/stat.svg" alt="Stat" width={350} height={252} className="max-md:w-full max-md:h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
