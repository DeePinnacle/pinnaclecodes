"use client"

import { motion, useReducedMotion, Variants } from "motion/react"
import { JSX } from "react/jsx-runtime"

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export function AboutHero(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="relative overflow-hidden bg-dark-primary pb-16 pt-24"
      aria-label="About hero"
    >
      {/* Dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #9ca3af 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* Radial spotlight behind heading */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(37,99,235,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center gap-5 text-center"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex items-center gap-3"
          >
            <div className="h-px w-8 bg-blue-600" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
              About me
            </span>
            <div className="h-px w-8 bg-blue-600" aria-hidden="true" />
          </motion.div>

          {/* Availability badge */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5"
          >
            <span
              className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.4)]"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-green-400">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white lg:text-7xl"
          >
            Building software that{" "}
            <span className="text-blue-500">actually matters</span>
            {" "}— one thoughtful decision at a time.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="max-w-2xl text-base leading-[1.7] text-gray-400"
          >
            Hi, I&apos;m Lawal Kamaldeen — a full stack developer based in Nigeria with 3+ years
            of experience building production-ready web applications for founders, teams,
            and businesses worldwide.
          </motion.p>

          {/* Role badge */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <span className="rounded-full border border-blue-900/40 bg-blue-950/20 px-4 py-1.5 text-sm font-medium text-blue-300">
              Full Stack Developer
            </span>
            <span className="text-gray-700" aria-hidden="true">·</span>
            <span className="text-sm text-gray-500">Nigeria · Remote worldwide</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}