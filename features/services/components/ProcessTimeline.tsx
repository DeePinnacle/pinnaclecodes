'use client'


import { useReducedMotion, motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { ProcessStep } from '@/features/services/data'

interface ProcessTimelineProps {
  steps: ProcessStep[]
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.ol
      className="grid grid-cols-1 gap-0 md:grid-cols-4"
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      aria-label="Project engagement process"
    >
      {steps.map((step, index) => (
        <motion.li
          key={step.phase}
          variants={shouldReduceMotion ? undefined : stepVariants}
          className="group relative flex flex-col"
        >
          {/* Desktop connector line between steps */}
          {index < steps.length - 1 && (
            <div
              className="absolute left-5 top-5 hidden h-px w-[calc(100%-1.25rem)] bg-[#1F2937] md:block"
              aria-hidden="true"
            />
          )}
          {/* Mobile vertical connector */}
          {index < steps.length - 1 && (
            <div
              className="absolute left-5 top-11 h-[calc(100%-2.75rem)] w-px bg-[#1F2937] md:hidden"
              aria-hidden="true"
            />
          )}

          {/* Step node — filled circle with number */}
          <div
            className="relative z-10 mb-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#2563EB] bg-[#0a0a0a] font-mono text-sm font-bold text-[#2563EB]"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Step content */}
          <div className="pb-10 pr-6 md:pb-0">
            <p className="mb-1 font-mono text-xs font-bold uppercase tracking-widest text-[#2563EB]">
              {step.phase}
            </p>
            <h3 className="mb-2.5 text-base font-bold tracking-tight text-[#F9FAFB]">
              {step.title}
            </h3>
            <p className="text-sm leading-[1.75] text-[#6B7280]">{step.description}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}
