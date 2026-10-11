"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion, Variants } from "motion/react"
import { ArrowRight, Search, Sparkles, Layers3, Network, Timeline, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Project, ProjectCategory, ProjectView } from "../types"
import { projectCategories } from "../data"
import { JSX } from "react/jsx-runtime"

interface ProjectsShowcaseProps {
  projects: Project[]
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
}

const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All",
  "full-stack": "Full Stack",
  backend: "Backend",
  frontend: "Frontend",
  "open-source": "Open Source",
  experiment: "Experiments",
}

function getCategoryLabel(category: ProjectCategory | "all") {
  return categoryLabels[category]
}

export function ProjectsShowcase({ projects }: Readonly<ProjectsShowcaseProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [view, setView] = useState<ProjectView>("grid")

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase()

    return projects.filter((project) => {
      const matchesCategory = activeCategory === "all" || project.category === activeCategory
      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.stack.some((tech) => tech.toLowerCase().includes(query)) ||
        project.features.some((feature) => feature.toLowerCase().includes(query))

      return matchesCategory && matchesSearch
    })
  }, [activeCategory, projects, searchQuery])

  const featuredProject = filteredProjects.find((project) => project.featured) ?? filteredProjects[0]
  const groupedProjects = useMemo(() => {
    const groups: Record<ProjectCategory, Project[]> = {
      "full-stack": [],
      backend: [],
      frontend: [],
      "open-source": [],
      experiment: [],
    }

    filteredProjects.forEach((project) => {
      groups[project.category].push(project)
    })

    return Object.entries(groups).filter(([, items]) => items.length > 0)
  }, [filteredProjects])

  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <section className="border-b border-gray-800/80 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_38%)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            className="flex flex-col gap-6"
            variants={shouldReduceMotion ? undefined : containerVariants}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-900/40 bg-blue-950/40 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.25em] text-blue-300">
              <Sparkles className="h-3.5 w-3.5" />
              Production-grade software
            </motion.div>

            <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Building software that solves real-world problems, scales efficiently, and delivers measurable impact.
              </h1>
            </motion.div>

            <motion.div variants={shouldReduceMotion ? undefined : itemVariants} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Projects built", value: "6+" },
                { label: "Years of development", value: "3+" },
                { label: "Technologies used", value: "12+" },
                { label: "Production systems", value: "3+" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-gray-800 bg-[#0f1218]/90 p-4">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sticky top-0 z-50 rounded-2xl border border-gray-800/80 bg-[#0b0f15]/95 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-3 py-2 text-sm transition ${activeCategory === category ? "bg-blue-600 text-white" : "bg-transparent text-gray-400 hover:bg-gray-800 hover:text-gray-200"}`}
                >
                  {getCategoryLabel(category)}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <label className="flex items-center gap-2 rounded-full border border-gray-800 bg-[#0f1218] px-3 py-2 text-sm text-gray-400">
                <Search className="h-4 w-4" />
                <input
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search projects..."
                  className="w-full bg-transparent outline-none sm:w-48"
                />
              </label>

              <div className="flex items-center gap-2 rounded-full border border-gray-800 bg-[#0f1218] p-1">
                {[
                  { id: "grid", icon: Grid3X3 },
                  { id: "timeline", icon: Timeline },
                  { id: "architecture", icon: Layers3 },
                ].map((option) => {
                  const Icon = option.icon
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setView(option.id as ProjectView)}
                      className={`rounded-full p-2 ${view === option.id ? "bg-blue-600 text-white" : "text-gray-500 hover:text-gray-300"}`}
                    >
                      <Icon className="h-4 w-4" />
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        {featuredProject && (
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8 overflow-hidden rounded-[28px] border border-blue-900/30 bg-linear-to-br from-blue-950/40 via-[#0e1827] to-[#090c12]"
          >
            <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr] lg:p-8">
              <div className="relative min-h-65 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={featuredProject.coverImage}
                  alt={`${featuredProject.title} project preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em] text-blue-300">
                    <Sparkles className="h-3.5 w-3.5" />
                    Featured project
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{featuredProject.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-gray-400">{featuredProject.tagline}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.stack.slice(0, 6).map((tech) => (
                      <span key={tech} className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="bg-blue-600 hover:bg-blue-500">
                    <Link href={`/projects/${featuredProject.slug}`}>
                      View case study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800">
                    <Link href="#portfolio-body">Explore all work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div id="portfolio-body" className="space-y-8">
          {view === "grid" && (
            <div className="grid gap-4 lg:grid-cols-2">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.slug}
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  initial={shouldReduceMotion ? "visible" : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-[24px] border border-gray-800 bg-[#0d1117] transition hover:border-blue-700/40 hover:bg-[#10151e]"
                >
                  <div className="relative h-48 overflow-hidden border-b border-gray-800">
                    <Image
                      src={project.coverImage}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#06080c] via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-300">
                      {getCategoryLabel(project.category)}
                    </span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-gray-400">{project.problem}</p>
                      </div>
                      <span className="rounded-full border border-gray-700 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-gray-500">{project.year}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="rounded-full border border-gray-800 px-2.5 py-1 text-xs text-gray-500">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-800 pt-4">
                      <span className="max-w-xs text-sm text-gray-500">{project.solution}</span>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-blue-500 transition hover:text-blue-400"
                      >
                        View project
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {view === "timeline" && (
            <div className="rounded-[24px] border border-gray-800 bg-[#0d1117] p-6">
              <div className="space-y-6">
                {filteredProjects
                  .slice()
                  .sort((a, b) => b.year - a.year)
                  .map((project) => (
                    <div key={project.slug} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-blue-500">
                      <div className="flex flex-col gap-2 border-l border-gray-800 pl-4 pb-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-sm font-semibold text-white">{project.title}</span>
                          <span className="text-xs uppercase tracking-[0.25em] text-gray-500">{project.year}</span>
                        </div>
                        <p className="text-sm text-gray-400">{project.tagline}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {view === "architecture" && (
            <div className="grid gap-4 lg:grid-cols-2">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.slug}
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  initial={shouldReduceMotion ? "visible" : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="rounded-[24px] border border-gray-800 bg-[#0d1117] p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="text-xs uppercase tracking-[0.25em] text-gray-500">{getCategoryLabel(project.category)}</span>
                  </div>
                  <div className="mt-4 space-y-3 rounded-2xl border border-gray-800 bg-[#090c12] p-4">
                    <div className="rounded-xl border border-blue-900/40 bg-blue-950/30 p-3">
                      <p className="text-xs uppercase tracking-[0.25em] text-blue-300">Frontend</p>
                      <p className="mt-2 text-sm text-gray-300">{project.stack.slice(0, 3).join(" • ")}</p>
                    </div>
                    <div className="rounded-xl border border-gray-800 bg-[#10151e] p-3">
                      <p className="text-xs uppercase tracking-[0.25em] text-gray-500">Backend / data</p>
                      <p className="mt-2 text-sm text-gray-300">{project.stack.slice(3, 6).join(" • ") || "System design focused"}</p>
                    </div>
                  </div>
                  {project.architectureNote && (
                    <p className="mt-4 text-sm leading-7 text-gray-400">{project.architectureNote}</p>
                  )}
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
