"use client"
import { JSX } from "react/jsx-runtime"
import { motion, useReducedMotion, Variants } from "motion/react"
import type { ExperienceItem } from "../types"

interface ExperienceCardProps {
  experience: ExperienceItem
  variants: Variants
}

export function ExperienceCard({ experience, variants }: Readonly<ExperienceCardProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : variants}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={[
        "group h-full overflow-hidden rounded-2xl border transition-colors duration-200",
        experience.current
          ? "border-blue-900/50 bg-blue-950/20 hover:border-blue-600/60 dark:border-blue-900/50 dark:bg-blue-950/20 dark:hover:border-blue-600/60"
          : "border-gray-200 bg-white hover:border-blue-300 dark:border-gray-800 dark:bg-[#111111] dark:hover:border-blue-600/30",
      ].join(" ")}
    >
      {/* Top accent bar */}
      <div
        className={[
          "h-0.5 w-full transition-colors duration-300",
          experience.current
            ? "bg-blue-600"
            : "bg-gray-200 group-hover:bg-blue-300 dark:bg-gray-800 dark:group-hover:bg-blue-900/60",
        ].join(" ")}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4 p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <h3
              className={[
                "text-sm font-semibold leading-snug",
                experience.current
                  ? "text-blue-300 dark:text-blue-300"
                  : "text-gray-900 dark:text-gray-100",
              ].join(" ")}
            >
              {experience.role}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              {experience.company}
            </p>
          </div>

          {/* Right: current badge or period */}
          <div className="flex shrink-0 flex-col items-end gap-1">
            {experience.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/10 px-2 py-0.5 text-[10px] font-medium text-green-400">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden="true" />
                Current
              </span>
            )}
            <span className="text-[10px] text-gray-400 dark:text-gray-600">
              {experience.period}
            </span>
          </div>
        </div>

        {/* Employment type + location */}
        <div className="flex items-center gap-2">
          <span className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[10px] text-gray-500 dark:border-gray-800 dark:text-gray-600">
            {experience.type}
          </span>
          <span className="text-[10px] text-gray-400 dark:text-gray-700">·</span>
          <span className="text-[10px] text-gray-500 dark:text-gray-600">
            {experience.location}
          </span>
        </div>

        {/* Highlights */}
        <ul className="flex flex-col gap-2" aria-label={`Key highlights for ${experience.role}`}>
          {experience.highlights.map((highlight, i) => (
            <li
              key={i}
              className="flex items-baseline gap-2 text-xs leading-relaxed text-gray-500 dark:text-gray-500"
            >
              <span className="shrink-0 text-blue-600 dark:text-blue-600" aria-hidden="true">
                →
              </span>
              {highlight}
            </li>
          ))}
        </ul>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 border-t border-gray-100 pt-3 dark:border-gray-800/60">
          {experience.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[10px] text-gray-500 transition-colors duration-150 group-hover:border-blue-200 group-hover:text-gray-600 dark:border-gray-800 dark:text-gray-600 dark:group-hover:border-blue-900/40 dark:group-hover:text-gray-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}