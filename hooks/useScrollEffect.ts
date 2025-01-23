import { useEffect } from 'react'
import { useLenis } from 'lenis/react'

export const useScrollEffect = (callback: (scrollProgress: number) => void) => {
    const lenis = useLenis()

    useEffect(() => {
        if (!lenis) return

        function onScroll(e: any) {
            callback(e.progress)
        }

        lenis.on('scroll', onScroll)

        return () => {
            lenis.off('scroll', onScroll)
        }
    }, [lenis, callback])
} 