import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { projectCategoryLabels } from "../data"
import type { Project } from "../types"
import { ProjectReveal } from "./ProjectReveal"
import { JSX } from "react/jsx-runtime"

interface ProjectPaginationProps {
  previous: Project
  next: Project
}

const LINK_CLASS =
  "group flex min-h-11 flex-col gap-2 rounded-2xl border border-gray-800 bg-[#0d1117] p-5 transition-colors hover:border-blue-700/40 hover:bg-[#10151e] focus-visible:outline-2 focus-visible:outline-blue-500"
const LABEL_CLASS = "flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-gray-400"

export function ProjectPagination({ previous, next }: Readonly<ProjectPaginationProps>): JSX.Element {
  return (
    <nav aria-label="Project navigation">
      <ProjectReveal className="grid gap-4 sm:grid-cols-2">
        <Link href={`/projects/${previous.slug}`} className={LINK_CLASS}>
          <span className={LABEL_CLASS}>
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
            Previous project
          </span>
          <span className="text-lg font-semibold text-white">{previous.title}</span>
          <span className="text-sm text-gray-400">
            {projectCategoryLabels[previous.category]} · {previous.year}
          </span>
        </Link>

        <Link href={`/projects/${next.slug}`} className={`${LINK_CLASS} sm:items-end sm:text-right`}>
          <span className={LABEL_CLASS}>
            Next project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold text-white">{next.title}</span>
          <span className="text-sm text-gray-400">
            {projectCategoryLabels[next.category]} · {next.year}
          </span>
        </Link>
      </ProjectReveal>
    </nav>
  )
}