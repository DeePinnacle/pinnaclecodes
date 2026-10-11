"use client"

import { motion, useReducedMotion, Variants } from "motion/react"
import type { LucideIcon } from "lucide-react"
import type { CtaInfoCard } from "../types"
import { JSX } from "react/jsx-runtime"

export interface ResolvedCtaInfoCard extends CtaInfoCard {
  Icon: LucideIcon
}

interface CtaInfoCardsProps {
  cards: ResolvedCtaInfoCard[]
  variants: Variants
}

export function CtaInfoCards({ cards, variants }: Readonly<CtaInfoCardsProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : variants}
      className="grid grid-cols-1 gap-2.5 sm:grid-cols-3"
    >
      {cards.map(({ id, Icon, label, value }) => (
        <div
          key={id}
          className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-[#111111]"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-900/40 bg-blue-950/20 dark:border-blue-900/40 dark:bg-blue-950/20">
            <Icon className="h-4 w-4 text-blue-500" aria-hidden="true" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] text-gray-400 dark:text-gray-600">
              {label}
            </span>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
              {value}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  )
}