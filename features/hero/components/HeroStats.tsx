"use client"
import { JSX } from "react"
import { motion, useReducedMotion } from "framer-motion"

interface Stat {
  value: string
  label: string
}

const STATS: Stat[] = [
  { value: "3+", label: "years building digital solutions" },
  { value: "10+", label: "Successful projects delivered" },
  { value: "10+", label: "Technologies" },
]

export function HeroStats(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <motion.div
      variants={shouldReduceMotion ? {} : variants}
      transition={{ease: "easeOut"}}
      className="flex items-center gap-6"
      aria-label="Quick stats"
    >
      {STATS.map((stat, index) => (
        <div key={stat.label} className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-dark-primary dark:text-white">{stat.value}</span>
            <span className="text-xs text-gray-500">{stat.label}</span>
          </div>
          {index < STATS.length - 1 && (
            <div className="h-8 w-px bg-gray-700" aria-hidden="true" />
          )}
        </div>
      ))}
    </motion.div>
  )
}
