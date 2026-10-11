'use client'

// features/services/components/ServicesHero.tsx
// Signature moment: cycling verb in the headline — one word rotates on a timer.
// Quiet around it. The motion earns attention without decorating.

import { useState, useEffect } from 'react'
import { useReducedMotion, motion, AnimatePresence } from 'framer-motion'

const CYCLING_WORDS = ['ship', 'maintain', 'scale', 'deploy', 'trust'] as const

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
}

export function ServicesHero() {
  const shouldReduceMotion = useReducedMotion()
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    if (shouldReduceMotion) return
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % CYCLING_WORDS.length)
    }, 2200)
    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  const currentWord = CYCLING_WORDS[wordIndex]

  return (
    <motion.div
      className="mx-auto max-w-3xl"
      variants={shouldReduceMotion ? {} : containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Availability pill */}
      <motion.div variants={shouldReduceMotion ? {} : itemVariants} transition={{ease: "easeOut"}} className="mb-10 flex items-center gap-3">
        <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#10B981]" />
        </span>
        <span className="text-sm font-medium tracking-wide text-[#10B981]">
          Available for new projects — remote, worldwide
        </span>
      </motion.div>

      {/* Kinetic headline */}
      <motion.h1
        variants={shouldReduceMotion ? {} : itemVariants}
        className="text-4xl font-bold tracking-tight text-[#F9FAFB] md:text-5xl lg:text-6xl"
      >
        Software you can{' '}
        <span className="relative inline-block">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWord}
              className="inline-block text-[#2563EB]"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? {} : { opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              aria-live="polite"
              aria-atomic="true"
            >
              {currentWord}
            </motion.span>
          </AnimatePresence>
          {/* Underline that persists across word changes */}
          <span
            className="absolute -bottom-1 left-0 h-0.5 w-full bg-[#2563EB]/40"
            aria-hidden="true"
          />
        </span>
        .
      </motion.h1>

      {/* Sub-headline — opinionated, personal */}
      <motion.p
        variants={shouldReduceMotion ? {} : itemVariants}
        className="mt-7 max-w-2xl text-base leading-[1.75] text-[#6B7280] md:text-lg"
      >
        I work with founders, product teams, and technical leaders who need an engineer
        that takes ownership — not just a developer who executes tickets and disappears.
        Below is what I build, how I work, and what I will not do.
      </motion.p>

      {/* Rule + eyebrow */}
      <motion.div
        variants={shouldReduceMotion ? {} : itemVariants}
        className="mt-10 flex items-center gap-4"
        aria-hidden="true"
      >
        <div className="h-px w-10 bg-[#2563EB]" />
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#6B7280]">
          Web · Mobile · API · Consulting
        </span>
      </motion.div>
    </motion.div>
  )
}
