import type { Project } from "../types"
import { ProjectReveal } from "./ProjectReveal"
import { JSX } from "react/jsx-runtime"

interface ProjectSidebarProps {
  project: Project
}

interface ProjectDetailRow {
  label: string
  value: string
}

const CARD_CLASS = "rounded-2xl border border-gray-800 bg-[#0d1117] p-5"
const CARD_HEADING_CLASS = "mb-4 text-xs font-medium uppercase tracking-widest text-gray-400"

export function ProjectSidebar({ project }: Readonly<ProjectSidebarProps>): JSX.Element {
  const details: ProjectDetailRow[] = [
    ...(project.role ? [{ label: "Role", value: project.role }] : []),
    ...(project.clientType ? [{ label: "Project type", value: project.clientType }] : []),
  ]

  return (
    <aside aria-label="Project details" className="flex flex-col gap-4 self-start lg:sticky lg:top-28">
      <ProjectReveal className={CARD_CLASS}>
        <h2 className={CARD_HEADING_CLASS}>Tech stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-gray-700 px-3 py-1 text-xs text-gray-300">
              {tech}
            </li>
          ))}
        </ul>
      </ProjectReveal>

      {details.length > 0 && (
        <ProjectReveal className={CARD_CLASS}>
          <h2 className={CARD_HEADING_CLASS}>Project info</h2>
          <dl className="flex flex-col gap-3">
            {details.map(({ label, value }) => (
              <div key={label} className="flex items-baseline justify-between gap-4">
                <dt className="text-sm text-gray-400">{label}</dt>
                <dd className="text-right text-sm font-medium text-gray-200">{value}</dd>
              </div>
            ))}
          </dl>
        </ProjectReveal>
      )}
    </aside>
  )
}