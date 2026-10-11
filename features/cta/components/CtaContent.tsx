"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "motion/react"
import type { Variants } from "motion/react"
import { Button } from "@/components/ui/button"
import { Mail, FileText, MapPin, Clock, Briefcase, Box } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { CtaData } from "../types"
import { JSX } from "react/jsx-runtime"

/**
 * Static icon map defined at MODULE level — never inside a component or function.
 * This is the only pattern that avoids "Cannot create components during render".
 */
const ICON_MAP: Record<string, LucideIcon> = {
  Mail,
  FileText,
  MapPin,
  Clock,
  Briefcase,
  Box,
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

interface CtaContentProps {
  data: CtaData
}

export function CtaContent({ data }: Readonly<CtaContentProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  /**
   * Lookup from the module-level ICON_MAP constant — NOT creating a new component.
   * React sees these as stable references because ICON_MAP never changes.
   */
  const PrimaryIcon = ICON_MAP[data.primaryCta.icon] ?? Box
  const SecondaryIcon = ICON_MAP[data.secondaryCta.icon] ?? Box

  return (
    <motion.div
      className="flex flex-col gap-8"
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center gap-5 text-center">

        {/* Availability badge */}
        {data.available && (
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5"
          >
            <span
              className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.4)]"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-green-400">
              {data.availableText}
            </span>
          </motion.div>
        )}

        {/* Eyebrow */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="flex items-center gap-3"
        >
          <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
          <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
            {data.eyebrow}
          </span>
          <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-5xl"
        >
          {data.heading}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-500"
        >
          {data.subheading}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={shouldReduceMotion ? undefined : itemVariants}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            asChild
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
          >
            <Link href={data.primaryCta.href}>
              <PrimaryIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              {data.primaryCta.label}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-gray-200 bg-transparent text-gray-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 dark:border-gray-800 dark:text-gray-400 dark:hover:border-blue-600/40 dark:hover:bg-blue-950/20 dark:hover:text-gray-300"
          >
            <Link href={data.secondaryCta.href} target="_blank" rel="noopener noreferrer">
              <SecondaryIcon className="mr-2 h-4 w-4" aria-hidden="true" />
              {data.secondaryCta.label}
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Info cards */}
      <motion.div
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="grid grid-cols-1 gap-2.5 sm:grid-cols-3"
      >
        {data.infoCards.map((card) => {
          const CardIcon = ICON_MAP[card.icon] ?? Box
          return (
            <div
              key={card.id}
              className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-[#111111]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-900/40 bg-blue-950/20">
                <CardIcon className="h-4 w-4 text-blue-500" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-gray-400 dark:text-gray-600">
                  {card.label}
                </span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  {card.value}
                </span>
              </div>
            </div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}