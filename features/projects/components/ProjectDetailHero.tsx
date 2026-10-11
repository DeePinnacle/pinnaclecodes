import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projectCategoryLabels } from "../data"
import type { Project } from "../types"
import { ProjectReveal } from "./ProjectReveal"
import { JSX } from "react/jsx-runtime"

interface ProjectDetailHeroProps {
  project: Project
}

export function ProjectDetailHero({ project }: Readonly<ProjectDetailHeroProps>): JSX.Element {
  const chips = [projectCategoryLabels[project.category], String(project.year)]

  return (
    <header className="border-b border-gray-800/80 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_38%)]">
      <div className="mx-auto max-w-5xl px-4 pb-12 pt-32 sm:px-6 lg:px-8 lg:pt-40">
        <ProjectReveal className="flex flex-col gap-6">
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All projects
          </Link>

          <ul className="flex flex-wrap gap-2" aria-label="Project category and year">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-blue-900/40 bg-blue-950/40 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-blue-300"
              >
                {chip}
              </li>
            ))}
          </ul>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">{project.title}</h1>
          <p className="max-w-3xl text-base leading-7 text-gray-400">{project.tagline}</p>

          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild className="bg-blue-600 hover:bg-blue-500">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View live site
                    <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 bg-transparent text-gray-300 hover:bg-gray-800"
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Code2 className="mr-2 h-4 w-4" aria-hidden="true" />
                    Source code
                  </a>
                </Button>
              )}
            </div>
          )}
        </ProjectReveal>
      </div>
    </header>
  )
}