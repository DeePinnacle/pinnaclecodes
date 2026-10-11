'use client'


import { useReducedMotion, motion, Variants } from 'framer-motion'
import type { WorkingPrinciple } from '@/features/services/data'

interface WorkingPrinciplesProps {
  principles: WorkingPrinciple[]
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function WorkingPrinciples({ principles }: WorkingPrinciplesProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.ul
      className="space-y-7"
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {principles.map((principle) => (
        <motion.li
          key={principle.title}
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="grid grid-cols-[1px_1fr] gap-5"
        >
          {/* Left accent bar — appears on entry via parent stagger */}
          <div className="w-px self-stretch bg-[#2563EB]/30" aria-hidden="true" />
          <div>
            <h3 className="mb-1.5 text-sm font-bold tracking-tight text-[#F9FAFB]">
              {principle.title}
            </h3>
            <p className="text-sm leading-[1.75] text-[#6B7280]">{principle.description}</p>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  )
}
