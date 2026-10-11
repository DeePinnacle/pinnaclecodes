"use client"
import { JSX } from "react/jsx-runtime"
import { motion, useReducedMotion, Variants } from "motion/react"
import { ExperienceCard } from "./ExperienceCard"
import { TimelineNode } from "./TimelineNode"
import type { ExperienceItem } from "../types"

interface ExperienceTimelineProps {
  experiences: ExperienceItem[]
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
}

const spineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.8, ease: "easeOut" } },
}

export function ExperienceTimeline({ experiences }: Readonly<ExperienceTimelineProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="relative"
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* ── DESKTOP: alternating timeline ── */}
      <div className="hidden lg:block">
        {/* Center spine */}
        <motion.div
          variants={shouldReduceMotion ? undefined : spineVariants}
          className="absolute left-1/2 top-4 h-full w-px origin-top -translate-x-1/2 bg-gray-200 dark:bg-gray-800"
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-0">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={exp.id}
                className="grid grid-cols-[1fr_80px_1fr] items-start pb-10 last:pb-0"
              >
                {/* Left slot */}
                {isLeft ? (
                  <div className="pr-6">
                    <ExperienceCard experience={exp} variants={cardVariants} />
                  </div>
                ) : (
                  <div aria-hidden="true" />
                )}

                {/* Center node */}
                <TimelineNode
                  year={exp.year}
                  current={exp.current}
                  variants={nodeVariants}
                />

                {/* Right slot */}
                {!isLeft ? (
                  <div className="pl-6">
                    <ExperienceCard experience={exp} variants={cardVariants} />
                  </div>
                ) : (
                  <div aria-hidden="true" />
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* ── MOBILE: single column left-spine timeline ── */}
      <div className="relative pl-8 lg:hidden">
        {/* Left spine */}
        <motion.div
          variants={shouldReduceMotion ? undefined : spineVariants}
          className="absolute left-3 top-4 h-full w-px origin-top bg-gray-200 dark:bg-gray-800"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Mobile dot */}
              <div
                className={[
                  "absolute -left-5.5 top-5 flex h-6 w-6 items-center justify-center rounded-full border-2",
                  exp.current
                    ? "border-blue-600 bg-blue-600"
                    : "border-blue-600 bg-white dark:bg-dark-primary",
                ].join(" ")}
                aria-hidden="true"
              >
                <div
                  className={[
                    "h-2 w-2 rounded-full",
                    exp.current ? "bg-white" : "bg-gray-300 dark:bg-gray-700",
                  ].join(" ")}
                />
              </div>

              {/* Mobile year label */}
              <span className="mb-2 inline-block rounded-full border border-blue-900/40 bg-blue-950/20 px-2.5 py-0.5 text-[10px] font-medium text-blue-500 dark:border-blue-900/40 dark:bg-blue-950/20">
                {exp.year}
              </span>

              <ExperienceCard experience={exp} variants={cardVariants} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}