"use client"

import { motion, useReducedMotion, Variants  } from "framer-motion"
 import { MessageSquare, Reply, PhoneCall, FileCheck2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { ProcessStep } from "../types"
import { JSX } from "react/jsx-runtime"

/** Static icon lookup — resolved once, never called during render. */
const ICON_MAP: Record<string, LucideIcon> = {
  MessageSquare,
  Reply,
  PhoneCall,
  FileCheck2,
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

interface ContactProcessProps {
  steps: ProcessStep[]
}

export function ContactProcess({ steps }: Readonly<ContactProcessProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="relative bg-white py-24 dark:bg-dark-primary"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-3">
          <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
            Process
          </span>
        </div>

        <h2
          id="process-heading"
          className="mb-12 max-w-xl text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-4xl"
        >
          What happens after you hit send
        </h2>

        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => {
            const Icon = ICON_MAP[step.icon] ?? MessageSquare
            return (
              <motion.div
                key={step.title}
                variants={shouldReduceMotion ? undefined : itemVariants}
                className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-[#111111]"
              >
                <span className="mb-4 block text-[11px] font-medium text-blue-500">
                  {`0${index + 1}`}
                </span>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-blue-900/40 bg-blue-950/20 dark:border-blue-900/40 dark:bg-blue-950/20">
                  <Icon className="h-4 w-4 text-blue-500" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-500">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}