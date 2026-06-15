import Image from "next/image";

export default function TeamSection() {
  return (
    <section id="team" className="relative bg-background overflow-hidden">
      <div className="relative max-w-8xl px-7.5 py-24 mx-auto w-full flex flex-col gap-14 max-md:px-4 max-md:py-12 max-md:gap-8">
        <div className="flex justify-between gap-4 pr-[20%] max-md:flex-col max-md:pr-0 max-md:gap-4">
          <span className="font-medium text-[3.5rem] leading-[1.16] tracking-[-0.03em] max-md:text-[2.5rem]">03</span>
          <div className="flex flex-col gap-8 max-w-115 w-full max-md:max-w-full max-md:gap-4">
            <h2 className="text-[3.5rem] leading-[1.16] font-medium tracking-[-0.03em] max-md:text-[2.5rem]">Meet The Team</h2>
            <p className="text-foreground/60 text-xl leading-[1.6] font-medium tracking-tight max-md:text-base">
              Meet the minds bridging complex research and human-centric innovation. We turn data into seamless experiences.
            </p>
          </div>
        </div>
        <div className="border-t border-slate-300 grid grid-cols-3 gap-7.5 max-md:grid-cols-1 max-md:gap-0">
          <div className="group border-x border-slate-300 flex flex-col pt-14 gap-14 max-md:pt-8 max-md:gap-8 max-md:border-x-0 max-md:border-b max-md:pb-8">
            <div className="group-hover:opacity-100 opacity-0 flex justify-between items-center max-md:opacity-100">
              <div className="flex items-end gap-1.5 text-[3.5rem] leading-[0.9] font-medium tracking-[-0.03em] max-md:text-[2.5rem]">
                01
                <span className="text-base font-semibold text-foreground/60">/06</span>
              </div>
              <div className="relative h-10 flex gap-1.5">
                <Image src="/card-btn.svg" fill alt="Card Button" />
                <button className="relative w-10 flex items-center justify-center cursor-pointer">
                  <Image src="/chevron-right.svg" alt="Chevron Right" width={10} height={16} className="rotate-180" />
                </button>
                <button className="relative w-10 flex items-center justify-center cursor-pointer">
                  <Image src="/chevron-right.svg" alt="Chevron Left" width={10} height={16} />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-8 pt-14 max-md:pt-0 max-md:gap-6">
              <div className="relative h-75 max-md:h-64">
                <Image src="/doc1.png" alt="Doctor 1" fill className="group-hover:saturate-100 saturate-0 transition-all object-cover max-md:saturate-100" />
                <div className="group-hover:opacity-100 opacity-0 transition-all absolute bottom-0 left-0 w-full h-35.5 bg-linear-to-t from-secondary/40 to-secondary/0 border-b-2 border-secondary max-md:opacity-100"></div>
              </div>
              <div className="gap-2 flex flex-col leading-none font-medium">
                <p className="text-[2rem] max-md:text-xl">Prof. Kla Wu An</p>
                <p className="uppercase text-foreground/60 text-sm tracking-wide">Senior Researcher</p>
              </div>
            </div>
          </div>
          <div className="group border-x border-slate-300 flex flex-col pt-14 gap-14 max-md:pt-8 max-md:gap-8 max-md:border-x-0 max-md:border-b max-md:pb-8">
            <div className="group-hover:opacity-100 opacity-0 flex justify-between items-center max-md:opacity-100">
              <div className="flex items-end gap-1.5 text-[3.5rem] leading-[0.9] font-medium tracking-[-0.03em] max-md:text-[2.5rem]">
                02
                <span className="text-base font-semibold text-foreground/60">/06</span>
              </div>
              <div className="relative h-10 flex gap-1.5">
                <Image src="/card-btn.svg" fill alt="Card Button" />
                <button className="relative w-10 flex items-center justify-center cursor-pointer">
                  <Image src="/chevron-right.svg" alt="Chevron Right" width={10} height={16} className="rotate-180" />
                </button>
                <button className="relative w-10 flex items-center justify-center cursor-pointer">
                  <Image src="/chevron-right.svg" alt="Chevron Left" width={10} height={16} />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-8 pt-14 max-md:pt-0 max-md:gap-6">
              <div className="relative h-75 max-md:h-64">
                <Image src="/doc2.png" alt="Doctor 2" fill className="group-hover:saturate-100 saturate-0 transition-all object-cover max-md:saturate-100" />
                <div className="group-hover:opacity-100 opacity-0 transition-all absolute bottom-0 left-0 w-full h-35.5 bg-linear-to-t from-secondary/40 to-secondary/0 border-b-2 border-secondary max-md:opacity-100"></div>
              </div>
              <div className="gap-2 flex flex-col leading-none font-medium">
                <p className="text-[2rem] max-md:text-xl">Prof. Ji An Apik</p>
                <p className="uppercase text-foreground/60 text-sm tracking-wide">Senior Researcher</p>
              </div>
            </div>
          </div>
          <div className="group border-x border-slate-300 flex flex-col pt-14 gap-14 max-md:pt-8 max-md:gap-8 max-md:border-x-0 max-md:pb-8">
            <div className="group-hover:opacity-100 opacity-0 flex justify-between items-center max-md:opacity-100">
              <div className="flex items-end gap-1.5 text-[3.5rem] leading-[0.9] font-medium tracking-[-0.03em] max-md:text-[2.5rem]">
                03
                <span className="text-base font-semibold text-foreground/60">/06</span>
              </div>
              <div className="relative h-10 flex gap-1.5">
                <Image src="/card-btn.svg" fill alt="Card Button" />
                <button className="relative w-10 flex items-center justify-center cursor-pointer">
                  <Image src="/chevron-right.svg" alt="Chevron Right" width={10} height={16} className="rotate-180" />
                </button>
                <button className="relative w-10 flex items-center justify-center cursor-pointer">
                  <Image src="/chevron-right.svg" alt="Chevron Left" width={10} height={16} />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-8 pt-14 max-md:pt-0 max-md:gap-6">
              <div className="relative h-75 max-md:h-64">
                <Image src="/doc3.png" alt="Doctor 3" fill className="group-hover:saturate-100 saturate-0 transition-all object-cover max-md:saturate-100" />
                <div className="group-hover:opacity-100 opacity-0 transition-all absolute bottom-0 left-0 w-full h-35.5 bg-linear-to-t from-secondary/40 to-secondary/0 border-b-2 border-secondary max-md:opacity-100"></div>
              </div>
              <div className="gap-2 flex flex-col leading-none font-medium">
                <p className="text-[2rem] max-md:text-xl">Prof. Wa donan</p>
                <p className="uppercase text-foreground/60 text-sm tracking-wide">Senior Researcher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
