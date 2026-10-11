"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion, Variants } from "motion/react"
import type { Project } from "@/features/projects/types"
import { JSX } from "react/jsx-runtime"

interface AboutProjectTeasersProps {
  projects: Project[]
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

const headVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
}

export function AboutProjectTeasers({ projects }: AboutProjectTeasersProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-dark-primary py-24" aria-label="Featured project teasers">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-14 flex flex-col gap-4"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={shouldReduceMotion ? undefined : { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
        >
          <motion.div
            variants={shouldReduceMotion ? undefined : headVariants}
            className="flex items-center gap-3"
          >
            <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
              Selected work
            </span>
          </motion.div>

          <motion.h2
            variants={shouldReduceMotion ? undefined : headVariants}
            className="text-4xl font-bold leading-tight tracking-tight text-white lg:text-5xl"
          >
            Things I&apos;ve shipped
          </motion.h2>

          <motion.p
            variants={shouldReduceMotion ? undefined : headVariants}
            className="max-w-xl text-sm leading-relaxed text-gray-500"
          >
            Real problems, real solutions. Each project ships with a documented problem statement,
            technical decisions, and a live demo or repo.
          </motion.p>
        </motion.div>

        {/* Project teasers */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.slug}
              variants={shouldReduceMotion ? undefined : cardVariants}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group flex flex-col rounded-2xl border border-gray-800 bg-[#111111] p-6 transition-colors duration-200 hover:border-blue-600/40"
            >
              {/* Top: index + year */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-medium tracking-wider text-gray-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] text-gray-700">{project.year}</span>
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-gray-100 transition-colors duration-200 group-hover:text-white">
                {project.title}
              </h3>

              {/* Tagline */}
              <p className="flex-1 text-sm leading-[1.65] text-gray-500">
                {project.tagline}
              </p>

              {/* Stack tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-800 px-2.5 py-0.5 text-[10px] text-gray-600 transition-colors duration-150 group-hover:border-blue-900/40 group-hover:text-gray-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5 flex items-center justify-between border-t border-gray-800/60 pt-4">
                <span className="text-xs text-gray-600 transition-colors duration-150 group-hover:text-gray-500">
                  View full case study
                </span>
                <Link
                  href={`/projects/${project.slug}`}
                  aria-label={`View ${project.title} project details`}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-800 text-gray-600 transition-colors duration-150 hover:border-blue-600/50 hover:text-blue-400"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          variants={shouldReduceMotion ? undefined : headVariants}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-gray-800 px-5 py-2.5 text-sm text-gray-400 transition-colors duration-150 hover:border-blue-600/40 hover:bg-blue-950/20 hover:text-gray-300"
          >
            Explore all projects
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}