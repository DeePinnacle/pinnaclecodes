"use client"

import Image from "next/image"
import { motion, useReducedMotion, Variants } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import type { AboutData } from "../data"
import { JSX } from "react/jsx-runtime"

interface AboutIdentityProps {
  data: Pick<AboutData, "paragraphs" | "stats" | "openTo" | "tags">
}

const FLOAT_BADGES = [
  { label: "React",      position: "-top-3 -left-4",    delay: 0 },
  { label: "Next.js",    position: "top-10 -right-6",   delay: 0.3 },
  { label: "Node.js",    position: "bottom-24 -left-6", delay: 0.6 },
  { label: "TypeScript", position: "-bottom-3 right-4", delay: 0.9 },
]

const floatVariants: Variants = {
  animate: (delay: number) => ({
    y: [0, -6, 0],
    transition: { duration: 3, ease: "easeInOut", repeat: Infinity, delay },
  }),
}

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export function AboutIdentity({ data }: AboutIdentityProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-dark-primary py-24" aria-label="Identity and bio">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">

          {/* ── Left: headshot ── */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            variants={shouldReduceMotion ? undefined : slideLeft}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Spotlight glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            {/* Portrait */}
            <div className="relative w-full max-w-sm">
              <div
                className="relative aspect-3/4 w-full overflow-hidden rounded-2xl bg-[#111111]"
                style={{
                  boxShadow:
                    "0 0 60px rgba(37,99,235,0.18), 0 0 0 1px rgba(37,99,235,0.10)",
                }}
              >
                <Image
                  src="/Kamaldeen.png"
                  alt="Lawal Kamaldeen — Full Stack Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 384px"
                  priority
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Floating tech badges */}
              {!shouldReduceMotion && FLOAT_BADGES.map((badge) => (
                <motion.div
                  key={badge.label}
                  className={`absolute ${badge.position} z-10`}
                  variants={floatVariants}
                  animate="animate"
                  custom={badge.delay}
                >
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-xs font-medium text-gray-200 shadow-lg backdrop-blur-md">
                    {badge.label}
                  </span>
                </motion.div>
              ))}

              {/* "Currently at" work badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-blue-900/40 bg-blue-950/80 px-4 py-2 text-xs font-medium text-blue-300 backdrop-blur-md">
                <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-green-400" aria-hidden="true" />
                Currently · Fullstack Dev @ Synchub creative center
              </div>
            </div>
          </motion.div>

          {/* ── Right: bio + stats + open-to ── */}
          <motion.div
            className="flex flex-col gap-8"
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Bio paragraphs */}
            <motion.div
              variants={shouldReduceMotion ? undefined : slideRight}
              className="flex flex-col gap-4"
            >
              {data.paragraphs.map((para, i) => (
                <p key={i} className="text-base leading-[1.7] text-gray-400">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Stats grid */}
            <motion.div
              variants={shouldReduceMotion ? undefined : fadeUp}
              className="grid grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {data.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-1 rounded-xl border border-gray-800 bg-[#111111] px-4 py-3"
                >
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-gray-600">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Open to */}
            <motion.div
              variants={shouldReduceMotion ? undefined : fadeUp}
              className="flex flex-col gap-3"
            >
              <p className="text-[11px] font-medium uppercase tracking-widest text-gray-600">
                What I&apos;m open to
              </p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {data.openTo.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-500" aria-hidden="true" />
                    <span className="text-sm text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Identity tags */}
            <motion.div
              variants={shouldReduceMotion ? undefined : fadeUp}
              className="flex flex-wrap gap-2"
            >
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-800 px-3 py-1 text-sm text-gray-500"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}