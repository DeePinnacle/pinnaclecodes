"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import type { ProcessStep } from "../types"
import { JSX } from "react/jsx-runtime"

export interface ResolvedProcessStep extends ProcessStep {
  Icon: LucideIcon
}

interface ProcessStepCardProps {
  step: ResolvedProcessStep
  isLast: boolean
  variants: Variants
}

export function ProcessStepCard({
  step,
  isLast,
  variants,
}: Readonly<ProcessStepCardProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const { Icon } = step

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : variants}
      className="grid grid-cols-[48px_1fr] gap-0"
    >
      {/* Left: node + connector */}
      <div className="flex flex-col items-center">
        {/* Icon node */}
        <div
          className={[
            "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300",
            step.highlight
              ? "border-blue-600 bg-blue-600 dark:border-blue-600 dark:bg-blue-600"
              : "border-blue-600 bg-white dark:border-blue-600 dark:bg-[#0a0a0a]",
          ].join(" ")}
          aria-hidden="true"
        >
          <Icon
            className={[
              "h-4 w-4",
              step.highlight
                ? "text-white"
                : "text-blue-600 dark:text-blue-500",
            ].join(" ")}
          />
        </div>

        {/* Connector spine */}
        {!isLast && (
          <div
            className="mt-1 w-px flex-1 bg-gray-200 dark:bg-gray-800"
            style={{ minHeight: "24px" }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Right: content card */}
      <div className={["pl-5", !isLast ? "pb-10" : "pb-0"].join(" ")}>
        <motion.div
          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={[
            "group overflow-hidden rounded-2xl border transition-colors duration-200",
            step.highlight
              ? "border-blue-900/50 bg-blue-950/20 hover:border-blue-600/60 dark:border-blue-900/50 dark:bg-blue-950/20 dark:hover:border-blue-600/60"
              : "border-gray-200 bg-white hover:border-blue-300 dark:border-gray-800 dark:bg-[#111111] dark:hover:border-blue-600/30",
          ].join(" ")}
        >
          {/* Top accent bar */}
          <div
            className={[
              "h-0.5 w-full transition-colors duration-300",
              step.highlight
                ? "bg-blue-600"
                : "bg-gray-100 group-hover:bg-blue-200 dark:bg-gray-800/80 dark:group-hover:bg-blue-900/60",
            ].join(" ")}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-4 p-5">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-col gap-0.5">
                <h3
                  className={[
                    "text-sm font-semibold leading-snug",
                    step.highlight
                      ? "text-blue-300 dark:text-blue-300"
                      : "text-gray-900 dark:text-gray-100",
                  ].join(" ")}
                >
                  {step.title}
                </h3>
              </div>
              <span className="flex-shrink-0 text-[11px] font-medium tracking-wider text-gray-300 dark:text-gray-700">
                {step.index}
              </span>
            </div>

            {/* Description */}
            <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-500">
              {step.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 border-t border-gray-100 pt-3 dark:border-gray-800/60">
              {step.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 px-2.5 py-0.5 text-[10px] text-gray-500 transition-colors duration-150 group-hover:border-blue-200 group-hover:text-gray-600 dark:border-gray-800 dark:text-gray-600 dark:group-hover:border-blue-900/40 dark:group-hover:text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}