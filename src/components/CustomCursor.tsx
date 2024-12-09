"use client"

import { useEffect, useState } from 'react'
import { motion, TargetAndTransition } from 'framer-motion'
import { useCursor } from '@/context/CursorContext'

type CursorVariant = 'default' | 'work'

type CursorStyles = {
    width: string;
    height: string;
    backgroundColor: string;
    mixBlendMode?: string;
}

type CursorVariants = {
    [K in CursorVariant]: CursorStyles
}

const cursorVariants = {
    default: {
        width: '16px',
        height: '16px',
        backgroundColor: 'rgba(255, 255, 255, 255)'
    },
    work: {
        width: '80px',
        height: '80px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(4px)',
        mixBlendMode: 'difference'
    }
}
const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [mounted, setMounted] = useState(false)
    const { cursorVariant } = useCursor()

    useEffect(() => {
        setMounted(true)
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', updateMousePosition)
        return () => window.removeEventListener('mousemove', updateMousePosition)
    }, [])

    if (!mounted) return null

    const animateProps: TargetAndTransition = {
        x: mousePosition.x - (cursorVariant === 'work' ? 30 : 8),
        y: mousePosition.y - (cursorVariant === 'work' ? 30 : 8),
        ...cursorVariants[cursorVariant as CursorVariant],
        mixBlendMode: cursorVariant === 'work' ? 'difference' as const : undefined
    }

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 999999,
                    pointerEvents: 'none',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                animate={animateProps}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5
                }}
            >
                {cursorVariant === 'work' && (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="rgba(255, 255, 255, 1)" // Changed to full white
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </motion.div>
        </>
    )
}
export default CustomCursor
