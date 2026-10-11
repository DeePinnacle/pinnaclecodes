"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion, Variants } from "motion/react"
import { JSX } from "react/jsx-runtime"

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

interface ProjectRevealProps {
  children: ReactNode
  className?: string
}

/** Scroll-reveal wrapper — keeps the rest of the detail page server-rendered. */
export function ProjectReveal({ children, className }: Readonly<ProjectRevealProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={shouldReduceMotion ? undefined : revealVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  )
}