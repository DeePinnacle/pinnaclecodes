"use client"
import { JSX } from "react";
import { motion, useReducedMotion } from "motion/react"

export function HeroBadge(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  }

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : variants}
      transition={{ease: "easeOut"}}
      className="max-w-fit inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 backdrop-blur-sm"
    >
      <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_2px_rgba(74,222,128,0.5)]" aria-hidden="true" />
      <span className="text-sm font-light tracking-wide text-green-400 uppercase dark:text-gray-300">
        Available for Freelance projects
      </span>
    </motion.div>
  )
}
