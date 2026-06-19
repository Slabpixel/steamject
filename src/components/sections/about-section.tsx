"use client";

import Image from "next/image";
import { useSectionReveal } from "@/hooks/use-section-reveal";

interface AboutSectionProps {
  marqueeRows: string[][];
}

export default function AboutSection({ marqueeRows }: AboutSectionProps) {
  const sectionRef = useSectionReveal<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="relative bg-background overflow-hidden">
      <div className="relative max-w-8xl px-7.5 py-24 mx-auto w-full flex flex-col max-md:px-4 max-md:py-12">
        <div className="pb-12 border-b border-x border-slate-300 flex justify-between gap-4 max-md:flex-col max-md:gap-8 max-md:pb-8 max-md:p-4">
          <div
            data-reveal
            className="flex justify-between gap-2 w-full max-w-125 font-medium tracking-[-0.03em] text-xl leading-[1.16] max-md:max-w-full"
          >
            <span>02</span>
            <div className="flex h-fit gap-4">
              <Image src="/accent.svg" alt="Accent" width={16} height={16} />
              <p className="uppercase">Genetic Engineering</p>
            </div>
          </div>
          <div className="flex flex-col gap-8 max-w-170 w-full max-md:max-w-full max-md:gap-4">
            <h2
              data-reveal="split"
              className="text-[3.5rem] leading-[1.1] font-medium tracking-[-0.03em] max-md:text-[2.25rem]"
            >
              Precision DNA/RNA Injection <span className="text-foreground/40">by steamject</span>
            </h2>
            <p
              data-reveal="split"
              className="text-foreground/60 leading-[1.6] font-medium tracking-tight"
            >
              Delivering high-precision DNA and RNA injection into embryos using optimized protocols and validated lab processes.
              Designed to support gene editing, transgenic model creation, and advanced biological research with consistent and reliable outcomes.
            </p>
          </div>
        </div>
        <div className="relative border-x border-slate-300 h-125 w-full flex justify-center items-center max-md:h-80 max-md:px-4">
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden mask-[radial-gradient(50%_44.72%_at_50.1%_50%,rgba(217,217,217,0.00)_0%,rgba(192,192,192,0.60)_25%,#A6A6A6_49.96%,rgba(141,141,141,0.60)_71.48%,rgba(115,115,115,0.00)_100%)] mask-no-repeat">
            <div className="pointer-events-none flex w-full flex-col items-center gap-5 opacity-85 max-md:gap-3">
              {marqueeRows.map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className={`marquee-row ${rowIndex % 2 === 0 ? "marquee-row-left" : "marquee-row-right"}`}
                  style={{ animationDuration: `${28 + (rowIndex % 3) * 4}s` }}
                >
                  {[0, 1, 2].map((copyIndex) => (
                    <div key={`${rowIndex}-copy-${copyIndex}`} className="marquee-row-group">
                      {row.map((item, itemIndex) => (
                        <div key={`${rowIndex}-${copyIndex}-${item}-${itemIndex}`} className="flex shrink-0 items-center rounded-[4px] bg-slate-100 px-4 py-2 max-md:px-3 max-md:py-1.5">
                          <span className="whitespace-nowrap text-lg font-normal text-slate-400 max-md:text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div
            data-reveal
            className="w-full max-w-178 rounded-lg backdrop-blur-[2px] p-4 bg-[#62748E1A] shadow-[824px_648px_250px_0px_rgba(0,0,0,0.00),527px_415px_250px_0px_rgba(0,0,0,0.01),297px_233px_226px_0px_rgba(0,0,0,0.04),132px_104px_168px_0px_rgba(0,0,0,0.07),33px_26px_92px_0px_rgba(0,0,0,0.08)] max-md:max-w-full max-md:relative max-md:z-1"
          >
            <div className="flex flex-col justify-between gap-29 w-full p-4 bg-background rounded-sm max-md:gap-6 max-md:p-3">
              <input type="textarea" placeholder="Search anything you want..." className="max-md:text-sm border-0 focus:outline-none" />
              <div className="flex justify-between items-center max-md:flex-col max-md:items-stretch max-md:gap-3">
                <div className="flex gap-2 max-md:flex-wrap">
                  <button className="flex justify-center gap-2.5 items-center rounded-sm size-10 p-2.5 bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer shrink-0">
                    <Image src="/paperclip.svg" alt="" width={16} height={16} />
                  </button>
                  <button className="flex text-foreground/70 justify-center gap-2.5 items-center rounded-sm h-10 py-2.5 px-3.5 bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer max-md:text-sm max-md:px-2.5">
                    <Image src="/image.svg" alt="" width={16} height={16} />
                    Create an Image
                  </button>
                  <button className="flex text-foreground/70 justify-center gap-2.5 items-center rounded-sm h-10 py-2.5 px-3.5 bg-slate-200 hover:bg-slate-300 transition-colors cursor-pointer max-md:text-sm max-md:px-2.5">
                    <Image src="/globe.svg" alt="" width={16} height={16} />
                    Global Search
                  </button>
                </div>
                <button className="flex justify-center gap-2.5 items-center rounded-sm size-10 p-1 bg-secondary transition-colors hover:bg-secondary/80 cursor-pointer max-md:self-end">
                  <Image src="/arrow-right.svg" alt="Arrow Right" width={16} height={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
