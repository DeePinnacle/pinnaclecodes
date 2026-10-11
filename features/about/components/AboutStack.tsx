"use client"

import { motion, useReducedMotion, Variants } from "motion/react"
import { SkillsGrid } from "@/features/tech-stack/components/SkillsGrid"
import type { SkillCategory } from "@/features/tech-stack/types"
import { JSX } from "react/jsx-runtime"

interface StackContextNote {
  categoryId: string
  note: string
}

const CONTEXT_NOTES: StackContextNote[] = [
  { categoryId: "frontend",  note: "Day-to-day stack for building production UIs" },
  { categoryId: "backend",   note: "Server-side tools I reach for on every project" },
  { categoryId: "tooling",   note: "The workflow tools that keep everything running smoothly" },
  { categoryId: "design",    note: "Where design meets engineering in my process" },
]

interface AboutStackProps {
  categories: SkillCategory[]
}

const headVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export function AboutStack({ categories }: AboutStackProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="relative bg-blue-950/5 py-24"
      aria-label="Tech stack with context"
    >
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
              Tech stack
            </span>
          </motion.div>

          <motion.h2
            variants={shouldReduceMotion ? undefined : headVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl"
          >
            Tools I build with
          </motion.h2>

          <motion.p
            variants={shouldReduceMotion ? undefined : headVariants}
            className="max-w-xl text-sm leading-relaxed text-gray-500"
          >
            Every tool earns its place. Here&apos;s what I use, and why I reach for it.
          </motion.p>
        </motion.div>

        {/* Categories with context notes */}
        <div className="flex flex-col gap-10">
          {categories.map((cat) => {
            const note = CONTEXT_NOTES.find((n) => n.categoryId === cat.id)?.note
            return (
              <div key={cat.id}>
                {note && (
                  <p className="mb-3 text-xs italic text-gray-600">{note}</p>
                )}
                <SkillsGrid categories={[cat]} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}