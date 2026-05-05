"use client";

import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const INACTIVE_STROKE = "#E2E8F0";
const ACTIVE_STROKE = "#90A1B9";
const MIN_GAP = 8;
const NAV_SCROLL_DELTA = 40;

export default function Navbar() {
    const linesWrapperRef = useRef<HTMLDivElement | null>(null);
    const navRowRef = useRef<HTMLDivElement | null>(null);
    const [lineCount, setLineCount] = useState(2);

    useEffect(() => {
        const target = linesWrapperRef.current;
        if (!target) return;

        const observer = new ResizeObserver(([entry]) => {
            const width = entry.contentRect.width;
            const nextLineCount = Math.max(2, Math.floor(width / MIN_GAP) + 1);
            setLineCount((previous) => (previous === nextLineCount ? previous : nextLineCount));
        });

        observer.observe(target);
        return () => observer.disconnect();
    }, []);

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger);

            const wrapper = linesWrapperRef.current;
            if (!wrapper) return;

            const lines = gsap.utils.toArray<HTMLSpanElement>("[data-nav-line]", wrapper);
            if (!lines.length) return;

            gsap.set(lines, { backgroundColor: INACTIVE_STROKE });

            const colorTween = gsap.to(lines, {
                backgroundColor: ACTIVE_STROKE,
                ease: "none",
                stagger: 1,
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });

            ScrollTrigger.refresh();

            return () => {
                colorTween.kill();
            };
        },
        { scope: linesWrapperRef, dependencies: [lineCount], revertOnUpdate: true }
    );

    useGSAP(
        () => {
            const navRow = navRowRef.current;
            if (!navRow) return;
            let lastToggleScroll = 0;

            gsap.set(navRow, { yPercent: 0, autoAlpha: 1 });

            const hideNav = () =>
                gsap.to(navRow, {
                    yPercent: -100,
                    autoAlpha: 0,
                    duration: 0.3,
                    ease: "power2.out",
                    overwrite: "auto",
                });

            const showNav = () =>
                gsap.to(navRow, {
                    yPercent: 0,
                    autoAlpha: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    overwrite: "auto",
                });

            const directionTrigger = ScrollTrigger.create({
                start: 0,
                end: "max",
                onUpdate: (self) => {
                    const currentScroll = self.scroll();
                    const delta = Math.abs(currentScroll - lastToggleScroll);
                    if (delta < NAV_SCROLL_DELTA) return;

                    if (self.direction === 1 && currentScroll > 80) {
                        hideNav();
                        lastToggleScroll = currentScroll;
                    } else if (self.direction === -1) {
                        showNav();
                        lastToggleScroll = currentScroll;
                    }
                },
                onLeaveBack: () => {
                    showNav();
                    lastToggleScroll = 0;
                },
            });

            return () => {
                directionTrigger.kill();
            };
        },
        { scope: navRowRef }
    );

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 mx-auto flex w-full max-w-8xl flex-col gap-6 px-7.5">
            <div ref={linesWrapperRef} className="flex h-[18px] items-stretch justify-between overflow-hidden">
                {Array.from({ length: lineCount }, (_, index) => (
                    <span
                        key={index}
                        data-nav-line
                        aria-hidden="true"
                        className="block h-full w-px shrink-0"
                        style={{ backgroundColor: INACTIVE_STROKE }}
                    />
                ))}
            </div>
            <div ref={navRowRef} className="flex h-9.5 items-center justify-between font-medium">
                <div className="flex w-full max-w-150 items-center justify-between gap-4">
                    <Link href="/" className="bg-slate-200">
                        <div className="rounded-sm bg-slate-100 px-2.5 py-2 text-lg">Steámject</div>
                    </Link>
                    <div className="relative flex items-center gap-2">
                        <Image src="/union-nav.svg" alt="Union" fill />
                        <Link href="#" className="relative px-2.5 py-2">
                            Tech
                        </Link>
                        <Link href="#" className="relative px-2.5 py-2">
                            About Us
                        </Link>
                        <Link href="#" className="relative px-2.5 py-2">
                            Journal
                        </Link>
                    </div>
                </div>
                <Link href="#" className="relative flex gap-2">
                    <Image src="/union-nav-cta.svg" alt="Union" fill />
                    <div className="relative px-2.5 py-2">Contact Us</div>
                    <div className="relative flex items-center justify-center px-2.5 py-2">
                        <Image src="/chevron-right.svg" alt="Chevron Right" width={10} height={16} />
                    </div>
                </Link>
            </div>
        </nav>
    );
}