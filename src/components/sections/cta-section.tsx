import Image from "next/image";

export default function CtaSection() {
  return (
    <section id="cta" className="relative bg-background overflow-hidden">
      <div className="relative max-w-8xl px-7.5 py-7.5 mx-auto w-full flex max-md:px-4 max-md:py-4">
        <div className="grid grid-cols-2 w-full max-md:grid-cols-1">
          <div className="pt-6 pr-6 gap-44 flex flex-col border border-slate-300 max-md:pt-4 max-md:pr-4 max-md:gap-8 max-md:border-b-0">
            <div className="flex h-fit gap-4">
              <Image src="/accent.svg" alt="Accent" width={16} height={16} />
              <p className="uppercase text-xl leading-[1.16] font-medium max-md:text-base">Information</p>
            </div>
            <div className="flex flex-col">
              <div className="border-b border-slate-100 py-5 flex gap-8 text-2xl font-medium leading-none max-md:flex-col max-md:gap-2 max-md:py-4 max-md:text-lg">
                <span className="text-foreground/40">O</span>
                <a href="#">Nørregade 10, 1165 København K, Denmark</a>
              </div>
              <div className="border-b border-slate-100 py-5 flex gap-8 text-2xl font-medium leading-none max-md:flex-col max-md:gap-2 max-md:py-4 max-md:text-lg">
                <span className="text-foreground/40">E</span>
                <a href="#">info@steaminject.com</a>
              </div>
              <div className="border-b border-slate-100 py-5 flex gap-8 text-2xl font-medium leading-none max-md:flex-col max-md:gap-2 max-md:py-4 max-md:text-lg">
                <span className="text-foreground/40">P</span>
                <a href="#">+45 353 20395</a>
              </div>
            </div>
          </div>
          <div className="p-6 gap-44 flex flex-col border border-slate-300 max-md:gap-8 max-md:p-4">
            <div className="flex h-fit gap-4">
              <Image src="/accent.svg" alt="Accent" width={16} height={16} />
              <p className="uppercase text-xl leading-[1.16] font-medium max-md:text-base">{"Let's Build it Together"}</p>
            </div>
            <form className="flex flex-col w-full">
              <input type="name" name="name" id="name" className="block font-medium py-4 px-0 w-full text-xl text-foreground bg-transparent h-full border-0 appearance-none focus:outline-none focus:ring-0 border-b border-slate-100 focus:border-slate-300 max-h-14 max-md:text-lg" placeholder="Name*" required />
              <textarea name="message" id="message" rows={4} className="block font-medium min-h-28 w-full resize-none border-0 border-b border-slate-100 bg-transparent px-0 py-4 text-xl text-foreground appearance-none focus:border-slate-300 focus:outline-none focus:ring-0 max-md:text-lg" placeholder="Message*" required />
              <button type="submit" className="mt-6 cursor-pointer flex w-full gap-2">
                <div className="rounded-sm bg-slate-100 w-full py-2 px-2.5 flex items-center">Contact Us</div>
                <div className="relative flex h-full bg-slate-100 aspect-square text-foreground justify-center items-center rounded-sm">
                  <Image src="/chevron-right.svg" alt="Chevron Right" width={8} height={10} />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
