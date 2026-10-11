'use client'

// features/services/components/WontDoList.tsx
// "What I won't do" section — an honest filter that signals seniority.
// This is where most portfolios are completely silent. Saying it out loud
// builds more trust than any list of credentials.

import { useReducedMotion, motion } from 'framer-motion'
import type { WontDo } from '@/features/services/data'

interface WontDoListProps {
  items: WontDo[]
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function WontDoList({ items }: WontDoListProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.ul
      className="grid grid-cols-1 gap-4 sm:grid-cols-2"
      variants={shouldReduceMotion ? {} : containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {items.map((item) => (
        <motion.li
          key={item.label}
          variants={shouldReduceMotion ? {} : itemVariants}
          className="rounded-xl border border-[#1F2937] bg-[#111111] p-5"
        >
          {/* Header row */}
          <div className="mb-3 flex items-start gap-3">
            {/* The ✕ mark — intentional, not decorative */}
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#EF4444]/30 bg-[#EF4444]/10 text-xs font-bold text-[#EF4444]"
              aria-hidden="true"
            >
              ✕
            </span>
            <h3 className="text-sm font-bold tracking-tight text-[#F9FAFB]">{item.label}</h3>
          </div>
          <p className="pl-8 text-sm leading-[1.75] text-[#6B7280]">{item.reason}</p>
        </motion.li>
      ))}
    </motion.ul>
  )
}
