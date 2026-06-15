import Image from "next/image";

export default function FeaturesServicesSection() {
  return (
    <section id="features" className="relative bg-primary text-background overflow-hidden">
      <div className="relative max-w-8xl px-7.5 py-12 mx-auto w-full flex flex-col items-center gap-24 max-md:px-4 max-md:py-8 max-md:gap-12">
        <div className="flex w-full flex-col gap-8 max-md:gap-6">
          <hr className="w-full border-slate-300/50 h-px" />
          <div className="flex justify-between gap-4 max-md:flex-col max-md:gap-6">
            <div className="flex justify-between gap-2 w-full max-w-138 font-medium tracking-[-0.03em] text-[3.5rem] leading-[1.16] max-md:max-w-full max-md:text-[2.5rem]">
              <span>01</span>
              <h2>Inject Feature</h2>
            </div>
            <div className="max-w-82.5 max-md:max-w-full">
              <p className="text-background/50 leading-[1.6] font-medium tracking-tight">
                Our core facility at Steamject provides comprehensive DNA/RNA injection services. From construct design to pup weaning, we handle every critical step with precision and scientific rigor.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 w-full h-210 text-foreground max-md:grid-cols-1 max-md:grid-rows-none max-md:h-auto max-md:gap-4">
          <div className="bg-background rounded-2xl border border-slate-300 p-10 flex gap-16 max-md:flex-col max-md:gap-6 max-md:p-6">
            <div className="flex flex-col gap-4 justify-between w-full max-w-32">
              <p className="uppercase text-foreground/60 text-sm font-medium">Injection method</p>
              <button className="cursor-pointer bg-secondary flex justify-center items-center rounded-md size-14">
                <Image src="/arrow-right.svg" alt="Arrow" width={24} height={24} />
              </button>
            </div>
            <div className="flex flex-col justify-between max-md:gap-6">
              <div className="flex flex-col gap-6 max-md:gap-4">
                <h3 className="text-[2rem] font-medium leading-[1.16] tracking-[-0.03em] max-md:text-xl">Plasmid & BAC Injection</h3>
                <p className="text-foreground/60 leading-[1.6] font-medium tracking-tight">We inject plasmid and BAC transgenes for flexible experimental designs. RNA injection is available upon request.</p>
              </div>
              <div className="flex gap-4 max-md:flex-wrap">
                <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                  <Image src="accent.svg" alt="Accent" width={16} height={16} />
                  <p className="font-medium uppercase">Plasmid</p>
                </div>
                <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                  <Image src="accent.svg" alt="Accent" width={16} height={16} />
                  <p className="font-medium uppercase">BAC</p>
                </div>
                <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                  <Image src="accent.svg" alt="Accent" width={16} height={16} />
                  <p className="font-medium uppercase">RNA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative row-span-2 bg-background rounded-2xl border border-slate-300 p-10 flex gap-16 max-md:row-span-1 max-md:flex-col max-md:gap-6 max-md:p-6 max-md:min-h-140">
            <Image src="/embryo.png" alt="Embryo" width={1000} height={1000} className="absolute bottom-0 right-0 max-md:w-48 max-md:h-48 max-md:opacity-80" />
            <div className="flex flex-col gap-4 justify-between w-full max-w-32">
              <p className="uppercase text-foreground/60 text-sm font-medium">Development phase</p>
              <button className="cursor-pointer bg-secondary flex justify-center items-center rounded-md size-14">
                <Image src="/arrow-right.svg" alt="Arrow" width={24} height={24} />
              </button>
            </div>
            <div className="flex flex-col justify-between max-md:gap-6 max-md:relative max-md:z-1">
              <div className="flex flex-col gap-6 max-md:gap-4">
                <h3 className="text-[2rem] font-medium leading-[1.16] tracking-[-0.03em] max-md:text-xl">Embryo Transfer</h3>
                <p className="text-foreground/60 leading-[1.6] font-medium tracking-tight">After injection of 100-150 mouse zygotes, we transfer embryos into pseudopregnant recipient females, ensuring optimal implantation and pup development.</p>
              </div>
              <div className="flex gap-4 max-md:flex-wrap">
                <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                  <Image src="accent.svg" alt="Accent" width={16} height={16} />
                  <p className="font-medium uppercase">Plasmid</p>
                </div>
                <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                  <Image src="accent.svg" alt="Accent" width={16} height={16} />
                  <p className="font-medium uppercase">BAC</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-2xl border border-slate-300 p-10 flex gap-16 max-md:flex-col max-md:gap-6 max-md:p-6">
            <div className="flex flex-col gap-4 justify-between w-full max-w-32">
              <p className="uppercase text-foreground/60 text-sm font-medium">Gene editing system</p>
              <button className="cursor-pointer bg-secondary flex justify-center items-center rounded-md size-14">
                <Image src="/arrow-right.svg" alt="Arrow" width={24} height={24} />
              </button>
            </div>
            <div className="flex flex-col justify-between max-md:gap-6">
              <div className="flex flex-col gap-6 max-md:gap-4">
                <h3 className="text-[2rem] font-medium leading-[1.16] tracking-[-0.03em] max-md:text-xl">CRISPR/Cas9 Integration</h3>
                <p className="text-foreground/60 leading-[1.6] font-medium tracking-tight">Pronuclear injection is widely used in the CRISPR/Cas9 era to introduce guide RNAs and templates that induce precise genetic modifications rapidly and efficiently.</p>
              </div>
              <div className="flex gap-4 max-md:flex-wrap">
                <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                  <Image src="accent.svg" alt="Accent" width={16} height={16} />
                  <p className="font-medium uppercase">Plasmid</p>
                </div>
                <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                  <Image src="accent.svg" alt="Accent" width={16} height={16} />
                  <p className="font-medium uppercase">BAC</p>
                </div>
                <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                  <Image src="accent.svg" alt="Accent" width={16} height={16} />
                  <p className="font-medium uppercase">RNA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
