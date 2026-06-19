'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LenisRef, ReactLenis } from 'lenis/react'
import { useEffect, useRef } from 'react'
import { registerGsap } from '@/lib/gsap/register'

interface ProviderProps {
    children: React.ReactNode
}

export const Provider = ({ children }: ProviderProps) => {
    const lenisRef = useRef<LenisRef | null>(null)

    useEffect(() => {
        registerGsap()

        const onLenisScroll = () => ScrollTrigger.update()

        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000)
        }

        lenisRef.current?.lenis?.on('scroll', onLenisScroll)
        gsap.ticker.add(update)
        gsap.ticker.lagSmoothing(0)

        document.fonts.ready.then(() => ScrollTrigger.refresh())

        return () => {
            lenisRef.current?.lenis?.off('scroll', onLenisScroll)
            gsap.ticker.remove(update)
        }
    }, [])

    return (
        <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
            {children}
        </ReactLenis>
    )
}