'use client'

import { motion, useReducedMotion } from 'motion/react'
import { getEntranceVariants, staggerContainer } from '@/lib/motion'
import { TERMS_LAST_UPDATED } from '../data'
import { TermsHighlights } from './TermsHighlights'
import { TermsIllustration } from './TermsIllustration'

export function TermsHero() {
  const shouldReduceMotion = useReducedMotion()
  const item = getEntranceVariants(shouldReduceMotion)

  return (
    <section
      aria-labelledby="terms-heading"
      className="border-b border-border bg-linear-to-b from-accent/10 to-transparent"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16"
      >
        <div className="flex flex-col gap-4">
          <motion.p
            variants={item}
            aria-hidden="true"
            className="text-sm font-medium uppercase tracking-widest text-gray-500"
          >
            Terms of Service
          </motion.p>
          <motion.h1
            id="terms-heading"
            variants={item}
            className="text-4xl font-bold tracking-tight text-blue-600 md:text-5xl"
          >
            Terms of <span className="block text-gray-500">Service</span>
          </motion.h1>
          <motion.p variants={item} className="max-w-xl text-base leading-7 text-gray-500">
            By accessing and using PinnacleCodes, you agree to these Terms of Service. Please read
            them carefully. They explain your rights, responsibilities, and what you can expect when
            using our website and services.
          </motion.p>
          <motion.p variants={item} className="text-sm text-blue-600">
            Last updated: <time dateTime={TERMS_LAST_UPDATED.iso}>{TERMS_LAST_UPDATED.label}</time>
          </motion.p>
        </div>

        <motion.div
          variants={item}
          className="flex flex-col items-center gap-6 md:flex-row lg:justify-end"
        >
          <TermsIllustration className="w-full max-w-xs drop-shadow-glow" />
          <TermsHighlights />
        </motion.div>
      </motion.div>
    </section>
  )
}