"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useReducedMotion, Variants } from "motion/react"
import type { LucideIcon } from "lucide-react"
import type { Project } from "../types"
import { projects } from "../data"
import { JSX } from "react/jsx-runtime"

export interface ResolvedProject extends Project {
  Icon: LucideIcon
}

interface FeaturedProjectCardProps {
  project: ResolvedProject
  variants: Variants
  isFeatured?: boolean
}

export function FeaturedProjectCard({
  project,
  variants,
  isFeatured = false,
}: Readonly<FeaturedProjectCardProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const { Icon } = project

  if (isFeatured) {
    return (
      <motion.div
        variants={shouldReduceMotion ? undefined : variants}
        whileHover={shouldReduceMotion ? undefined : { y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-blue-900/40 bg-blue-950/20 transition-colors duration-200 hover:border-blue-600/50 lg:grid-cols-2"
      >
        {/* Image panel */}
        <div className="relative min-h-96 overflow-hidden border-b border-blue-900/30 bg-[#0d1829] lg:border-b-0 lg:border-r">
          {/* Dot-grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle, #1e3a5f 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
            aria-hidden="true"
          />
          <Image
            src={project.coverImage}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Content panel */}
        <div className="flex flex-col justify-between p-6">
          <div className="flex flex-col gap-3">
            {/* Meta row */}
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-blue-900/50 bg-blue-950/40 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-blue-400">
                Featured
              </span>
              <span className="text-[11px] text-gray-600">{project.year}</span>
            </div>

            <h3 className="text-lg font-semibold leading-tight text-blue-300 transition-colors duration-200 group-hover:text-blue-200">
              {project.title}
            </h3>

            <p className="text-xs leading-relaxed text-gray-500">{project.tagline}</p>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-gray-800 px-2.5 py-1 text-[10px] text-gray-600 transition-colors duration-150 group-hover:border-blue-900/40 group-hover:text-gray-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between">
            <span className="text-3xl font-semibold text-blue-950/60">01</span>
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-800 text-gray-600 transition-colors duration-150 hover:border-gray-600 hover:text-gray-400"
                >
                  {/* <Github className="h-3.5 w-3.5" aria-hidden="true" /> */}
                </Link>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors duration-150 hover:bg-blue-500"
              >
                View project
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Small card
  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : variants}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-800 bg-[#111111] transition-colors duration-200"
    >
      {/* Image strip */}
      <div className="relative h-60 overflow-hidden border-b border-gray-800 bg-[#0d0d0d]">
        <Image
          src={project.coverImage}
          alt={`${project.title} project screenshot`}
          fill
          className="object-cover opacity-100 transition-opacity duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="h-8 w-8 text-gray-800 transition-colors duration-300 group-hover:text-blue-900/60"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-medium tracking-wider text-gray-700">
            {String(projects.indexOf(project) + 1).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-gray-700">{project.year}</span>
        </div>

        <h3 className="mb-1.5 text-sm font-medium text-gray-100 transition-colors duration-200 group-hover:text-white">
          {project.title}
        </h3>

        <p className="flex-1 text-[11px] leading-relaxed text-gray-600">
          {project.tagline}
        </p>

        {/* Tags */}
        <div className="mb-3 mt-3 flex flex-wrap gap-1">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-gray-800 px-2 py-0.5 text-[10px] text-gray-700 transition-colors duration-150 group-hover:border-blue-900/30 group-hover:text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-800/60 pt-3">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-800 text-gray-700 transition-colors duration-150 hover:border-gray-600 hover:text-gray-500"
            >
              {/* <Github className="h-3 w-3" aria-hidden="true" /> */}
            </Link>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="ml-auto inline-flex items-center gap-1 rounded-md border border-gray-800 px-2.5 py-1 text-[10px] text-gray-500 transition-colors duration-150 hover:border-blue-900/40 hover:text-gray-400"
          >
            View
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
