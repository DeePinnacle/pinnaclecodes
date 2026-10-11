"use client"
import { JSX } from "react";
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { Button } from "@/components/ui/button"

interface PhilosophyBlockProps {
  readonly heading: string
  readonly content: string
  readonly tags: string[]
  readonly ctaText: string
  readonly ctaHref: string
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function PhilosophyBlock({
  heading,
  content,
  tags,
  ctaText,
  ctaHref,
}: PhilosophyBlockProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="flex flex-col gap-6"
      variants={shouldReduceMotion ? {} : containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Philosophy subheading */}
      <motion.h3
        variants={shouldReduceMotion ? {} : itemVariants}
        className="text-2xl font-semibold text-dark-primary dark:text-gray-400"
      >
        {heading}
      </motion.h3>

      {/* Philosophy paragraph */}
      <motion.p
        variants={shouldReduceMotion ? {} : itemVariants}
        className="text-base leading-[1.7] text-primary dark:text-gray-400"
      >
        {content}
      </motion.p>

      {/* Identity tags */}
      <motion.div
        variants={shouldReduceMotion ? {} : itemVariants}
        className="flex flex-wrap gap-2"
        aria-label="Professional identity tags"
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#1F2937] px-3 py-1 text-sm text-gray-400"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={shouldReduceMotion ? {} : itemVariants}
        className="flex justify-end"
      >
        <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500">
          <Link href={ctaHref}>
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}