import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section id="hero" className="relative min-h-180 h-dvh max-h-300 bg-primary overflow-hidden">
        <div className="absolute -top-1/3 w-[208vw] aspect-3000/745 left-1/2 -translate-x-1/2">
          <Image src="/hero-wh.svg" alt="Hero White" fill />
        </div>
        <div className="absolute bottom-0 w-full h-1/2 z-2">
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
          <div className="flex items-stretch justify-stretch z-3 relative">
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
          <div className="grid grid-cols-2 grid-rows-2 w-full h-210 text-foreground">
            <div className="bg-background rounded-2xl border border-slate-300 p-10 flex gap-16">
              <div className="flex flex-col justify-between w-full max-w-32">
                <p className="uppercase text-foreground/60 text-sm font-medium">Injection method</p>
                <button className="cursor-pointer bg-secondary flex justify-center items-center rounded-md size-14">
                  <Image src="/arrow-right.svg" alt="Arrow" width={24} height={24} />
                </button>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-medium leading-[1.16] tracking-[-0.03em]">Plasmid & BAC Injection</h3>
                  <p className="text-foreground/60 leading-[1.6] font-medium tracking-tight">We inject plasmid and BAC transgenes for flexible experimental designs. RNA injection is available upon request.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                    <Image src="accent.svg" alt="Accent" width={16} height={16} />
                    <p className="font-medium uppercase">
                      Plasmid
                    </p>
                  </div>
                  <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                    <Image src="accent.svg" alt="Accent" width={16} height={16} />
                    <p className="font-medium uppercase">
                      BAC
                    </p>
                  </div>
                  <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                    <Image src="accent.svg" alt="Accent" width={16} height={16} />
                    <p className="font-medium uppercase">
                      RNA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative row-span-2 bg-background rounded-2xl border border-slate-300 p-10 flex gap-16">
            <Image src="/embryo.png" alt="Embryo" width={1000} height={1000} className="absolute bottom-0 right-0" />
              <div className="flex flex-col justify-between w-full max-w-32">
                <p className="uppercase text-foreground/60 text-sm font-medium">Development phase</p>
                <button className="cursor-pointer bg-secondary flex justify-center items-center rounded-md size-14">
                  <Image src="/arrow-right.svg" alt="Arrow" width={24} height={24} />
                </button>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-medium leading-[1.16] tracking-[-0.03em]">Embryo Transfer</h3>
                  <p className="text-foreground/60 leading-[1.6] font-medium tracking-tight">After injection of 100-150 mouse zygotes, we transfer embryos into pseudopregnant recipient females, ensuring optimal implantation and pup development.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                    <Image src="accent.svg" alt="Accent" width={16} height={16} />
                    <p className="font-medium uppercase">
                      Plasmid
                    </p>
                  </div>
                  <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                    <Image src="accent.svg" alt="Accent" width={16} height={16} />
                    <p className="font-medium uppercase">
                      BAC
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-2xl border border-slate-300 p-10 flex gap-16">
              <div className="flex flex-col justify-between w-full max-w-32">
                <p className="uppercase text-foreground/60 text-sm font-medium">Gene editing system</p>
                <button className="cursor-pointer bg-secondary flex justify-center items-center rounded-md size-14">
                  <Image src="/arrow-right.svg" alt="Arrow" width={24} height={24} />
                </button>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col gap-6">
                  <h3 className="text-[2rem] font-medium leading-[1.16] tracking-[-0.03em]">CRISPR/Cas9 Integration</h3>
                  <p className="text-foreground/60 leading-[1.6] font-medium tracking-tight">Pronuclear injection is widely used in the CRISPR/Cas9 era to introduce guide RNAs and templates that induce precise genetic modifications rapidly and efficiently.</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                    <Image src="accent.svg" alt="Accent" width={16} height={16} />
                    <p className="font-medium uppercase">
                      Plasmid
                    </p>
                  </div>
                  <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                    <Image src="accent.svg" alt="Accent" width={16} height={16} />
                    <p className="font-medium uppercase">
                      BAC
                    </p>
                  </div>
                  <div className="flex gap-3 h-9 justify-center items-center p-2 bg-slate-100 rounded-sm">
                    <Image src="accent.svg" alt="Accent" width={16} height={16} />
                    <p className="font-medium uppercase">
                      RNA
                    </p>
                  </div>
                </div>
              </div>
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
          <div className="border-x border-slate-300 h-125 w-full flex justify-center items-center">
            <div className="w-full max-w-178 rounded-lg backdrop-blur-[2px] p-4 bg-[#62748E1A] shadow-[824px_648px_250px_0px_rgba(0,0,0,0.00),527px_415px_250px_0px_rgba(0,0,0,0.01),297px_233px_226px_0px_rgba(0,0,0,0.04),132px_104px_168px_0px_rgba(0,0,0,0.07),33px_26px_92px_0px_rgba(0,0,0,0.08)]" >
              <div className="flex flex-col justify-between gap-29 w-full p-4 bg-background rounded-sm">
                <input type="textarea" placeholder="Search anything you want..." />
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <button className="flex justify-center gap-2.5 items-center rounded-sm size-10 p-2.5 bg-slate-200 cursor-pointer">
                      <Image src="/paperclip.svg" alt="Attach" width={16} height={16} />
                    </button>
                    <button className="flex text-foreground/70 justify-center gap-2.5 items-center rounded-sm h-10 py-2.5 px-3.5 bg-slate-200 cursor-pointer">
                      <Image src="/paperclip.svg" alt="Attach" width={16} height={16} />
                      Create an Image
                    </button>
                    <button className="flex text-foreground/70 justify-center gap-2.5 items-center rounded-sm h-10 py-2.5 px-3.5 bg-slate-200 cursor-pointer">
                      <Image src="/paperclip.svg" alt="Attach" width={16} height={16} />
                      Global Search
                    </button>
                  </div>
                  <button className="flex justify-center gap-2.5 items-center rounded-sm size-10 p-1 bg-secondary cursor-pointer">
                      <Image src="/arrow-right.svg" alt="Arrow Right" width={16} height={16} />
                    </button>
                </div>
              </div>
            </div>
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
          <div className="flex justify-end items-center w-full min-h-175">
            <Image src="/analyze.png" alt="DNA Analysis" width={1000} height={1000} className="absolute left-0 bottom-0" />
            <Image src="/stat.svg" alt="Stat" width={350} height={252} />
          </div>
        </div>
      </section>
      <section id="team" className="relative bg-background overflow-hidden">
        <div className="relative max-w-8xl px-7.5 py-24 mx-auto w-full flex flex-col gap-14">
          <div className="flex justify-between gap-4 pr-[20%]">
            <span className="font-medium text-[3.5rem] leading-[1.16] tracking-[-0.03em]">
              03
            </span>
            <div className="flex flex-col gap-8 max-w-115 w-full">
              <h2 className="text-[3.5rem] leading-[1.16] font-medium tracking-[-0.03em]">
                Meet The Team
              </h2>
              <p className="text-foreground/60 text-xl leading-[1.6] font-medium tracking-tight">
                Meet the minds bridging complex research and human-centric innovation. We turn data into seamless experiences.</p>
            </div>
          </div>
          <div className="border-t border-slate-300 grid grid-cols-3 gap-7.5">
            <div className="group border-x border-slate-300 flex flex-col pt-14 gap-14">
              <div className="group-hover:opacity-100 opacity-0 flex justify-between items-center">
                <div className="flex items-end gap-1.5 text-[3.5rem] leading-[0.9] font-medium tracking-[-0.03em]">
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
              <div className="flex flex-col gap-8 pt-14">
                <div className="relative h-75">
                  <Image src="/doc1.png" alt="Doctor 1" fill className="group-hover:saturate-100 saturate-0 transition-all" />
                  <div className="group-hover:opacity-100 opacity-0 transition-all absolute bottom-0 left-0 w-full h-35.5 bg-linear-to-t from-secondary/40 to-secondary/0 border-b-2 border-secondary"></div>
                </div>
                <div className="gap-2 flex flex-col leading-none font-medium">
                  <p className="text-[2rem]">Prof. Kla Wu An</p>
                  <p className="uppercase text-foreground/60 text-sm tracking-wide">Senior Researcher</p>
                </div>
              </div>
            </div>
            <div className="group border-x border-slate-300 flex flex-col pt-14 gap-14">
              <div className="group-hover:opacity-100 opacity-0 flex justify-between items-center">
                <div className="flex items-end gap-1.5 text-[3.5rem] leading-[0.9] font-medium tracking-[-0.03em]">
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
              <div className="flex flex-col gap-8 pt-14">
                <div className="relative h-75">
                  <Image src="/doc2.png" alt="Doctor 2" fill className="group-hover:saturate-100 saturate-0 transition-all" />
                  <div className="group-hover:opacity-100 opacity-0 transition-all absolute bottom-0 left-0 w-full h-35.5 bg-linear-to-t from-secondary/40 to-secondary/0 border-b-2 border-secondary"></div>
                </div>
                <div className="gap-2 flex flex-col leading-none font-medium">
                  <p className="text-[2rem]">Prof. Ji An Apik</p>
                  <p className="uppercase text-foreground/60 text-sm tracking-wide">Senior Researcher</p>
                </div>
              </div>
            </div>
            <div className="group border-x border-slate-300 flex flex-col pt-14 gap-14">
              <div className="group-hover:opacity-100 opacity-0 flex justify-between items-center">
                <div className="flex items-end gap-1.5 text-[3.5rem] leading-[0.9] font-medium tracking-[-0.03em]">
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
              <div className="flex flex-col gap-8 pt-14">
                <div className="relative h-75">
                  <Image src="/doc3.png" alt="Doctor 3" fill className="group-hover:saturate-100 saturate-0 transition-all" />
                  <div className="group-hover:opacity-100 opacity-0 transition-all absolute bottom-0 left-0 w-full h-35.5 bg-linear-to-t from-secondary/40 to-secondary/0 border-b-2 border-secondary"></div>
                </div>
                <div className="gap-2 flex flex-col leading-none font-medium">
                  <p className="text-[2rem]">Prof. Wa donan</p>
                  <p className="uppercase text-foreground/60 text-sm tracking-wide">Senior Researcher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cta" className="relative bg-background overflow-hidden">
        <div className="relative max-w-8xl px-7.5 py-7.5 mx-auto w-full flex">
          <div className="grid grid-cols-2 w-full">
            <div className="pt-6 pr-6 gap-44 flex flex-col border border-slate-300">
              <div className="flex h-fit gap-4">
                <Image src="/accent.svg" alt="Accent" width={16} height={16} />
                <p className="uppercase text-xl leading-[1.16] font-medium">
                  Information
                </p>
              </div>
              <div className="flex flex-col">
                <div className="border-b border-slate-100 py-5 flex gap-8 text-2xl font-medium leading-none">
                  <span className="text-foreground/40">O</span>
                  <a href="#">
                    Nørregade 10, 1165 København K, Denmark
                  </a>
                </div>
                <div className="border-b border-slate-100 py-5 flex gap-8 text-2xl font-medium leading-none">
                  <span className="text-foreground/40">E</span>
                  <a href="#">
                    info@steaminject.com
                  </a>
                </div>
                <div className="border-b border-slate-100 py-5 flex gap-8 text-2xl font-medium leading-none">
                  <span className="text-foreground/40">P</span>
                  <a href="#">
                    +45 353 20395
                  </a>
                </div>
              </div>
            </div>
            <div className="p-6 gap-44 flex flex-col border border-slate-300">
              <div className="flex h-fit gap-4">
                <Image src="/accent.svg" alt="Accent" width={16} height={16} />
                <p className="uppercase text-xl leading-[1.16] font-medium">
                  Let's Build it Together
                </p>
              </div>
              <div className="flex flex-col">
                <div className="border-b border-slate-100 py-5 flex gap-8 text-2xl font-medium leading-none">
                  <span className="text-foreground/40">O</span>
                  <a href="#">
                    Nørregade 10, 1165 København K, Denmark
                  </a>
                </div>
                <div className="border-b border-slate-100 py-5 flex gap-8 text-2xl font-medium leading-none">
                  <span className="text-foreground/40">E</span>
                  <a href="#">
                    info@steaminject.com
                  </a>
                </div>
                <div className="border-b border-slate-100 py-5 flex gap-8 text-2xl font-medium leading-none">
                  <span className="text-foreground/40">P</span>
                  <a href="#">
                    +45 353 20395
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="footer" className="relative bg-slate-50 overflow-hidden">
        <div className="relative max-w-8xl px-7.5 py-17.5 mx-auto w-full flex">
          <div className="flex flex-col w-full border border-slate-300 pt-10 pb-5.5 gap-30 items-end">
            <div className="flex w-full justify-between gap-4">
              <div className="flex h-fit justify-center items-center py-2 px-2.5 bg-slate-100 rounded-sm">
                <p className="font-heading text-lg font-medium">
                  Steámject
                </p>
              </div>
              <div className="flex max-w-199 w-full gap-2 justify-between">
                <div className="flex gap-6">
                  <div className="flex h-fit justify-center items-center py-2 px-2.5 bg-slate-100 rounded-sm">
                    <p className="font-medium">
                      Tech
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">DNA Injection</Link>
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">RNA Injection</Link>
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">CRISPR/Cas9</Link>
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">BAC Transgenes</Link>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-fit justify-center items-center py-2 px-2.5 bg-slate-100 rounded-sm">
                    <p className="font-medium">
                      Tech
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">DNA Injection</Link>
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">RNA Injection</Link>
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">CRISPR/Cas9</Link>
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">BAC Transgenes</Link>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-fit justify-center items-center py-2 px-2.5 bg-slate-100 rounded-sm">
                    <p className="font-medium">
                      Tech
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">DNA Injection</Link>
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">RNA Injection</Link>
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">CRISPR/Cas9</Link>
                    <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">BAC Transgenes</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-199 w-full flex flex-col gap-3">
              <p>
                Stay updated on our publication.
              </p>
              <form className="flex gap-2 w-full">
                <input type="email" placeholder="Enter your email" className="w-full" />
                <button type="submit" className="relative flex gap-2 w-fit text-foreground">
                  <Image src="/chevron-right.svg" alt="Chevron Right" width={10} height={16} />
                </button>
              </form>
            </div>
            <div className="flex w-full justify-between gap-4">
              <p className="">
                © 2026 Steamject Corp. All Right Reserved
              </p>
              <div className="flex gap-2">
                <Link href="#">
                  Privacy Policy
                </Link>
                <Link href="#">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
