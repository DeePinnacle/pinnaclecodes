"use client"
import { JSX } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion, Variants } from "motion/react"
import { Button } from "@/components/ui/button"
import type { AboutData } from "../data"

/**
 * Homepage summary version of AboutContent.
 * Shows only the first paragraph, 2 drive cards, and a "Read more" CTA.
 * The full detailed version lives at /about.
 */
type AboutContentProps = Pick<
  AboutData,
  "sectionLabel" | "heading" | "paragraphs" | "driveCards"
>

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

const PREVIEW_CARD_COUNT = 2

export function AboutContent({
  sectionLabel,
  heading,
  paragraphs,
  driveCards,
}: AboutContentProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="flex flex-col gap-6"
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section label */}
      <motion.div
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="flex items-center gap-3"
      >
        <div className="h-px w-8 bg-blue-600" aria-hidden="true" />
        <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
          {sectionLabel}
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl"
      >
        {heading}
      </motion.h2>

      {/* Summary — first paragraph only */}
      <motion.p
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="max-w-2xl text-base leading-[1.7] text-gray-400"
      >
        {paragraphs[0]}
      </motion.p>

      {/* 2 preview drive cards */}
      <motion.div
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {driveCards.slice(0, PREVIEW_CARD_COUNT).map((card) => (
          <div
            key={card.title}
            className="rounded-xl border border-gray-800 bg-[#111111] p-4"
          >
            <p className="mb-1 text-sm font-medium text-gray-100">{card.title}</p>
            <p className="text-xs leading-relaxed text-gray-500">{card.description}</p>
          </div>
        ))}
      </motion.div>

      {/* Read more CTA */}
      <motion.div
        variants={shouldReduceMotion ? undefined : itemVariants}
      >
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-gray-800 bg-transparent text-gray-400 hover:border-blue-600/40 hover:bg-blue-950/20 hover:text-gray-300 dark:border-gray-800 dark:bg-transparent dark:text-gray-400 dark:hover:border-blue-600/40 dark:hover:bg-blue-950/20 dark:hover:text-gray-300"
        >
          <Link href="/about">
            Read more about me
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}