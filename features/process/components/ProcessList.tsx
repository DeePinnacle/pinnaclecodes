"use client"

import { motion, useReducedMotion, Variants } from "motion/react"
import { ProcessStepCard, ResolvedProcessStep } from "./ProcessStepCard"
import { getProcessIcon } from "../icon-map"
import type { ProcessStep } from "../types"
import { JSX } from "react/jsx-runtime"

interface ProcessListProps {
  steps: ProcessStep[]
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

/** Resolve icon strings → stable LucideIcon refs outside render */
function resolveStep(step: ProcessStep): ResolvedProcessStep {
  return { ...step, Icon: getProcessIcon(step.icon) }
}

export function ProcessList({ steps }: Readonly<ProcessListProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const resolved = steps.map(resolveStep)

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      className="flex flex-col text-"
    >
      {resolved.map((step, index) => (
        <ProcessStepCard
          key={step.id}
          step={step}
          isLast={index === resolved.length - 1}
          variants={itemVariants}
        />
      ))}
    </motion.div>
  )
}