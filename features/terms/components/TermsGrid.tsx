'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { getEntranceVariants, staggerContainer } from '@/lib/motion'
import { TERM_SECTIONS } from '../data'
import { TermCard } from './TermsCard'

export function TermsGrid() {
  const ref = useRef<HTMLUListElement>(null)
  // Cards stay hidden until the grid scrolls into view, then reveal once.
  const isInView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const shouldReduceMotion = useReducedMotion()
  const itemVariants = getEntranceVariants(shouldReduceMotion)

  return (
    <motion.ul
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      aria-label="Terms of Service sections"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      {TERM_SECTIONS.map((section) => (
        <TermCard key={section.id} section={section} variants={itemVariants} />
      ))}
    </motion.ul>
  )
}