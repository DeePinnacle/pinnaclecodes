"use client"

import { motion, useReducedMotion, Variants } from "motion/react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeaturedProjectCard } from "./FeaturedProjectCard"
import type { ResolvedProject } from "./FeaturedProjectCard"
import { getProjectIcon } from "../icon-map"
import type { Project } from "../types"
import { JSX } from "react/jsx-runtime"

interface FeaturedProjectsGridProps {
  projects: Project[]
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

/** Resolve icon strings → stable LucideIcon refs outside of render */
function resolveProject(project: Project): ResolvedProject {
  return { ...project, Icon: getProjectIcon(project.icon) }
}

export function FeaturedProjectsGrid({ projects }: Readonly<FeaturedProjectsGridProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  const resolved = projects.map(resolveProject)
  const [featured, ...rest] = resolved

  return (
    <motion.div
      className="flex flex-col gap-2.5 max-w-5xl mx-auto"
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Row 1 — featured hero card (full width) */}
      {featured && (
        <FeaturedProjectCard
          project={featured}
          variants={itemVariants}
          isFeatured
        />
      )}

      {/* Row 2 — up to 5 small cards in a responsive grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-2">
          {rest.map((project) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              variants={itemVariants}
            />
          ))}
        </div>
      )}

      {/* Explore more CTA */}
      <motion.div
        variants={shouldReduceMotion ? undefined : itemVariants}
        className="flex justify-center pt-4"
      >
        <Button
          asChild
          variant="outline"
          size="lg"
          className="border-gray-800 bg-transparent text-gray-400 hover:border-blue-600/40 hover:bg-blue-950/20 hover:text-gray-300"
        >
          <Link href="/projects">
            Explore all projects
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}