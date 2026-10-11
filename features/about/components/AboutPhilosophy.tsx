"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import type { AboutData } from "../data"
import { JSX } from "react/jsx-runtime"

interface AboutPhilosophyProps {
  data: Pick<AboutData, "philosophyHeading" | "philosophyContent" | "philosophyPrinciples">
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

const headVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export function AboutPhilosophy({ data }: AboutPhilosophyProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden bg-blue-950/10 py-24"
      aria-label="Development philosophy"
    >
      {/* Dot-grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #3b82f6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Radial spotlight */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-200 -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="mb-14 flex flex-col items-center gap-4 text-center"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            variants={shouldReduceMotion ? undefined : headVariants}
            className="flex items-center gap-3"
          >
            <div className="h-px w-8 bg-blue-600" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
              Philosophy
            </span>
            <div className="h-px w-8 bg-blue-600" aria-hidden="true" />
          </motion.div>

          <motion.h2
            variants={shouldReduceMotion ? undefined : headVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl"
          >
            {data.philosophyHeading}
          </motion.h2>

          <motion.p
            variants={shouldReduceMotion ? undefined : headVariants}
            className="max-w-xl text-base leading-[1.7] text-gray-400"
          >
            {data.philosophyContent}
          </motion.p>
        </motion.div>

        {/* Principle cards */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {data.philosophyPrinciples.map((principle) => (
            <motion.div
              key={principle.number}
              variants={shouldReduceMotion ? undefined : cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group flex flex-col gap-4 rounded-2xl border border-gray-800 bg-[#111111] p-6 transition-colors duration-200 hover:border-blue-600/40"
            >
              {/* Number */}
              <span className="text-4xl font-bold leading-none text-blue-950 transition-colors duration-200 group-hover:text-blue-900/60">
                {principle.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white">
                {principle.title}
              </h3>

              {/* Body */}
              <p className="flex-1 text-sm leading-[1.75] text-gray-400">
                {principle.body}
              </p>

              {/* Bottom accent line */}
              <div
                className="h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}