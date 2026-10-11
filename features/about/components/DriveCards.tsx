"use client"
import { JSX } from "react";
import { motion, useReducedMotion } from "framer-motion"
import {
  Puzzle,
  BookOpen,
  Users,
  ShieldCheck,
  type LucideProps,
} from "lucide-react"
import type { DriveCard } from "../data"

/** Map icon name strings from data.ts to Lucide components */
const ICON_MAP: Record<string, React.ComponentType<LucideProps>> = {
  Puzzle,
  BookOpen,
  Users,
  ShieldCheck,
}

interface DriveCardsProps {
  readonly cards: DriveCard[]
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function DriveCards({ cards }: DriveCardsProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="grid grid-cols-1 gap-4 md:grid-cols-2"
      variants={shouldReduceMotion ? {} : containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {cards.map((card) => {
        const Icon = ICON_MAP[card.icon]

        return (
          <motion.div
            key={card.title}
            variants={shouldReduceMotion ? {} : cardVariants}
            className="group rounded-xl border border-[#1F2937] p-5 transition-colors duration-200 hover:border-blue-600/50 dark:bg-[#111111]"
          >
            {Icon && (
              <Icon
                className="mb-3 h-5 w-5 text-blue-500"
                aria-hidden="true"
              />
            )}
            <h3 className="mb-1 text-sm font-semibold text-dark-primary dark:text-white">{card.title}</h3>
            <p className="text-sm leading-[1.7] text-primary dark:text-gray-400">{card.description}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}