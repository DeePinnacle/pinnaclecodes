"use client"

import { motion, useReducedMotion, Variants } from "motion/react"
import { JSX } from "react/jsx-runtime"

interface TimelineNodeProps {
  year: string
  current: boolean
  variants: Variants
}

export function TimelineNode({ year, current, variants }: Readonly<TimelineNodeProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : variants}
      className="relative z-10 flex flex-col items-center gap-2"
    >
      {/* Dot */}
      <div
        className={[
          "flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors duration-300 animate-pulse",
          current
            ? "border-blue-600 bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.12)] dark:shadow-[0_0_0_4px_rgba(37,99,235,0.2)]"
            : "border-blue-600 bg-white dark:bg-dark-primary",
        ].join(" ")}
        aria-hidden="true"
      >
        <div
          className={[
            "h-2.5 w-2.5 rounded-full",
            current ? "bg-white" : "bg-gray-300 dark:bg-gray-700",
          ].join(" ")}
        />
      </div>

      {/* Year pill */}
      <span className="whitespace-nowrap rounded-full border border-blue-900/40 bg-blue-950/30 px-2.5 py-0.5 text-[10px] font-medium text-blue-500 dark:border-blue-900/40 dark:bg-blue-950/30">
        {year}
      </span>
    </motion.div>
  )
}