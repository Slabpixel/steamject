import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <section id="footer" className="relative bg-slate-50 overflow-hidden flex justify-center items-center">
      <div className="absolute top-0 h-17.5 max-w-8xl mx-auto w-full">
        <Image src="/title.svg" alt="Footer Title" fill />
      </div>
      <div className="absolute bottom-0 h-17.5 max-w-8xl mx-auto w-full">
        <Image src="/title-b.svg" alt="Footer Title" fill />
      </div>
      <div className="relative max-w-8xl px-7.5 py-17.5 mx-auto w-full flex">
        <div className="flex flex-col w-full border border-slate-300 pt-10 pb-5.5 gap-30 items-end">
          <div className="flex w-full justify-between gap-4">
            <div className="flex h-fit justify-center items-center py-2 px-2.5 bg-slate-100 rounded-sm">
              <p className="font-heading text-lg font-medium">Steámject</p>
            </div>
            <div className="flex max-w-199 w-full gap-2 justify-between">
              <div className="flex gap-6">
                <div className="flex h-fit justify-center items-center py-2 px-2.5 bg-slate-100 rounded-sm">
                  <p className="font-medium">Tech</p>
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
                  <p className="font-medium">About Us</p>
                </div>
                <div className="flex flex-col gap-1">
                  <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">Our Facility</Link>
                  <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">Meet The Team</Link>
                  <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">Mouse Library</Link>
                  <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">Pricing</Link>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-fit justify-center items-center py-2 px-2.5 bg-slate-100 rounded-sm">
                  <p className="font-medium">Publications</p>
                </div>
                <div className="flex flex-col gap-1">
                  <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">Research Papers</Link>
                  <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">Case Studies</Link>
                  <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">News & Updates</Link>
                  <Link className="flex h-8.5 items-center font-medium tracking-[-0.02em] text-foreground/60" href="#">Contact</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-199 w-full flex flex-col gap-3">
            <p>Stay updated on our publication.</p>
            <form className="flex gap-2 h-10.5 items-center w-full border-b border-slate-300 pb-2">
              <input type="email" name="email" id="email" className="block py-2.5 px-0 w-full text-lg text-foreground bg-transparent h-full font-medium border-0 appearance-none focus:outline-none focus:ring-0" placeholder="Email*" required />
              <button type="submit" className="relative flex h-full bg-slate-100 cursor-pointer aspect-square size-8.5 text-foreground justify-center items-center rounded-sm">
                <Image src="/chevron-right.svg" alt="Chevron Right" width={8} height={10} />
              </button>
            </form>
          </div>
          <div className="flex w-full justify-between gap-4">
            <p>© 2026 Steamject Corp. All Right Reserved</p>
            <div className="flex gap-2">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
