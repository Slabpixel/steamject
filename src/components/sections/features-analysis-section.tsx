import Image from "next/image";
import Link from "next/link";

export default function FeaturesAnalysisSection() {
  return (
    <section id="features" className="relative bg-primary text-background overflow-hidden">
      <div className="relative max-w-8xl px-7.5 py-12 mx-auto w-full flex flex-col gap-24">
        <div className="flex gap-25 items-end ">
          <div className="w-full max-w-150 font-medium tracking-[-0.03em] text-[4.5rem] leading-[1.16]">
            <h2>
              Analyzing <br /> <span className="text-background/40">Genetic Sequence</span>
            </h2>
          </div>
          <div className="max-w-104 flex flex-col gap-7 h-full justify-between">
            <p className="text-background text-xl leading-[1.4] tracking-tight">
              Real-time DNA analysis advances science, allowing observation of changes in genetic engineering.
            </p>
            <Link href="#" className="relative flex gap-2 w-fit text-foreground">
              <Image src="/union-nav-cta.svg" alt="Union" fill />
              <div className="relative px-2.5 py-2">Contact Us</div>
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
  );
}
