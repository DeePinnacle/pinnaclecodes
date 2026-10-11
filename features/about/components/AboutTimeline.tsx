"use client"

import { motion, useReducedMotion, Variants } from "motion/react"
import { ExperienceTimeline } from "@/features/experience/components/ExperienceTimeline"
import type { ExperienceItem } from "@/features/experience/types"
import { JSX } from "react/jsx-runtime"

interface AboutTimelineProps {
  experiences: ExperienceItem[]
}

const headVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export function AboutTimeline({ experiences }: AboutTimelineProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-dark-primary py-24" aria-label="Career timeline">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-14 flex flex-col gap-4"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={shouldReduceMotion ? undefined : { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          <motion.div
            variants={shouldReduceMotion ? undefined : headVariants}
            className="flex items-center gap-3"
          >
            <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
              Career
            </span>
          </motion.div>

          <motion.h2
            variants={shouldReduceMotion ? undefined : headVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl"
          >
            Where I&apos;ve worked &amp; grown
          </motion.h2>

          <motion.p
            variants={shouldReduceMotion ? undefined : headVariants}
            className="max-w-xl text-sm leading-relaxed text-gray-500"
          >
            A detailed record of professional roles, freelance engagements, and the impact
            delivered at each — with the tools used and the lessons learned.
          </motion.p>
        </motion.div>

        {/* Reuse the ExperienceTimeline component */}
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  )
}