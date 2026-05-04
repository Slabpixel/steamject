import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="hero" className="relative min-h-180 h-dvh max-h-300 bg-primary overflow-hidden">
        <div className="absolute -top-1/3 w-[208vw] aspect-3000/745 left-1/2 -translate-x-1/2">
          <Image src="/hero-wh.svg" alt="Hero White" fill />
        </div>
        <div className="absolute bottom-0 w-full h-1/2">
          <Image src="/hero-img-1.png" alt="Hero Image 1" width={1000} height={1000} className="absolute -bottom-90 -left-76" />
          <Image src="/hero-img-2.png" alt="Hero Image 2" width={1000} height={1000} className="absolute -bottom-50 -right-120" />
          <div className="absolute bottom-0 h-52.5 w-full bg-linear-to-b from-primary/0 to-primary">
          </div>
        </div>
        <div className="relative max-w-8xl px-7.5 pt-37 mx-auto w-full flex flex-col items-center gap-22">
          <div className="relative">
            <p className="absolute top-15.5 right-16 tracking-tight text-foreground/60">
              © 2026 Steamject Corp. <br /> All Right Reserved
            </p>
            <h1 className="text-[11.25rem] font-medium leading-[0.84] text-transparent bg-clip-text bg-linear-to-b from-foreground to-primary from-50% to-81%">
              DNA <br />
              Injection
            </h1>
          </div>
          <div className="flex items-stretch justify-stretch">
            <div className="bg-background rounded-2xl p-3 border border-slate-300 flex gap-4 min-w-109">
              <Image src="/vid.png" alt="Video" width={114} height={114} className="rounded-lg overflow-hidden cursor-pointer" />
              <div className="flex flex-col gap-2 h-full justify-between">
                <p className="text-2xl leading-[1.16] font-medium tracking-tighter">
                  Redefining <br /> Human Potential
                </p>
                <p className="text-xs h-6.5">
                  Discover personalized science.
                </p>
              </div>
            </div>
            <div className="bg-background rounded-2xl p-3 border border-slate-300 flex flex-col justify-between ">
              <p className="text-2xl leading-[1.16] font-medium tracking-tighter">
                DNA <br /> Injection
              </p>
              <div className="flex gap-3 h-6.5 items-center">
                <div className="animate-spin">
                  <Image src="/spinner.png" alt="Spinner" width={26} height={26} />
                </div>
                <p className="">
                  Scanning Your DNA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="relative bg-primary text-background overflow-hidden" >
        <div className="relative max-w-8xl px-7.5 py-12 mx-auto w-full flex flex-col items-center gap-24">
          <div className="flex w-full flex-col gap-8">
            <hr className="w-full border-slate-300/50 h-px" />
            <div className="flex justify-between gap-4">
              <div className="flex justify-between gap-2 w-full max-w-138 font-medium tracking-[-0.03em] text-[3.5rem] leading-[1.16]">
                <span>01</span>
                <h2>Inject Feature</h2>
              </div>
              <div className="max-w-82.5">
                <p className="text-background/50 leading-[1.6] font-medium tracking-tight">
                  Our core facility at Steamject provides comprehensive DNA/RNA injection services. From construct design to pup weaning, we handle every critical step with precision and scientific rigor.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 w-full h-210">
            <div className="bg-background rounded-2xl border border-slate-300 p-10 flex gap-16">

            </div>
            <div className="row-span-2 bg-background rounded-2xl border border-slate-300 p-10 flex gap-16">

            </div>
            <div className="bg-background rounded-2xl border border-slate-300 p-10 flex gap-16">

            </div>
          </div>
        </div>
      </section>
      <section id="about" className="relative bg-background overflow-hidden">
        <div className="relative max-w-8xl px-7.5 py-24 mx-auto w-full flex flex-col">
          <div className="pb-12 border-b border-x border-slate-300 flex justify-between gap-4">
            <div className="flex justify-between gap-2 w-full max-w-125 font-medium tracking-[-0.03em] text-xl leading-[1.16]">
              <span>02</span>
              <div className="flex h-fit gap-4">
                <Image src="/accent.svg" alt="Accent" width={16} height={16} />
                <p className="uppercase">
                  Genetic Engineering
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-8 max-w-170 w-full">
              <h2 className="text-[3.5rem] leading-[1.1] font-medium tracking-[-0.03em]">
                Precision DNA/RNA Injection <span className="text-foreground/40">by steamject</span>
              </h2>
              <p className="text-foreground/60 leading-[1.6] font-medium tracking-tight">
                Delivering high-precision DNA and RNA injection into embryos using optimized protocols and validated lab processes. 
Designed to support gene editing, transgenic model creation, and advanced biological research with consistent and reliable outcomes.
                              </p>
            </div>
          </div>
          <div className="border-x border-slate-300 h-100 w-full">

          </div>
        </div>
      </section>
      <section id="features" className="relative bg-primary text-background overflow-hidden" >
        <div className="relative max-w-8xl px-7.5 py-12 mx-auto w-full flex flex-col gap-24">
          
            <div className="flex gap-25 items-end ">
              <div className="w-full max-w-150 font-medium tracking-[-0.03em] text-[4.5rem] leading-[1.16]">
                <h2>Analyzing <br /> <span className="text-background/40">Genetic Sequence</span></h2>
              </div>
              <div className="max-w-104 flex flex-col gap-7 h-full justify-between">
                <p className="text-background text-xl leading-[1.4] tracking-tight">
                Real-time DNA analysis advances science, allowing observation of changes in genetic engineering.
                </p>
                <Link href="#" className="relative flex gap-2 w-fit text-foreground">
                    <Image src="/union-nav-cta.svg" alt="Union" fill />
                    <div className="relative px-2.5 py-2">
                        Contact Us
                    </div>
                    <div className="relative px-2.5 py-2 flex items-center justify-center">
                        <Image src="/chevron-right.svg" alt="Chevron Right" width={10} height={16} />
                    </div>
                </Link>
              </div>
            </div>
          <div className="grid grid-cols-2 grid-rows-2 w-full h-100">
           
          </div>
        </div>
      </section>
    </main>
  );
}
