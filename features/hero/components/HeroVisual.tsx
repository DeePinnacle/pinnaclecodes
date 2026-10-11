"use client"
import { JSX } from "react";
import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"

interface TechBadge {
  label: string
  /** Tailwind positioning classes */
  position: string
  delay: number
}

const TECH_BADGES: TechBadge[] = [
  { label: "React",      position: "-top-4 -left-6",   delay: 0 },
  { label: "Next.js",    position: "top-8 -right-8",   delay: 0.3 },
  { label: "Node.js",    position: "bottom-20 -left-8", delay: 0.6 },
  { label: "TypeScript", position: "-bottom-4 right-4", delay: 0.9 },
  { label: "MongoDB",    position: "top-1/2 -right-10", delay: 1.2 },
]

const floatVariants = {
  animate: (delay: number) => ({
    y: [0, -6, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      delay,
    },
  }),
}

export function HeroVisual(): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative flex items-center justify-center">
      {/* Radial blue glow behind image */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Developer image */}
      <div
        className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-md"
        style={{
          boxShadow: "0 0 40px 8px rgba(37,99,235,0.25), 0 0 0 1px rgba(37,99,235,0.12)",
        }}
      >
        <Image
          src="/code-snapshot.png"
          alt="Lawal Kamaldeen — Full Stack Developer"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 90vw, 448px"
        />
        {/* Subtle overlay to ensure badge readability on any photo */}
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" aria-hidden="true" />
      </div>

      {/* Floating tech badges */}
      {TECH_BADGES.map((badge) => (
        <motion.div
          key={badge.label}
          className={`absolute ${badge.position} z-10`}
          variants={shouldReduceMotion ? {} : floatVariants}
          animate={shouldReduceMotion ? undefined : "animate"}
          custom={badge.delay}
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 text-black-primary px-3 py-1.5 text-xs font-medium shadow-lg backdrop-blur-md dark:text-gray-200">
            {badge.label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
