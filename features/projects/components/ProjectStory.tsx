import { Check } from "lucide-react"
import type { Project } from "../types"
import { ProjectReveal } from "./ProjectReveal"
import { ProjectSectionHeading } from "./ProjectSectionHeading"
import { JSX } from "react/jsx-runtime"

interface ProjectStoryProps {
  project: Project
}

export function ProjectStory({ project }: Readonly<ProjectStoryProps>): JSX.Element {
  return (
    <div className="flex flex-col gap-12">
      <section aria-labelledby="problem-heading">
        <ProjectSectionHeading id="problem-heading" eyebrow="The challenge" title="Problem" />
        <ProjectReveal>
          <p className="text-base leading-7 text-gray-400">{project.problem}</p>
        </ProjectReveal>
      </section>

      <section aria-labelledby="solution-heading">
        <ProjectSectionHeading id="solution-heading" eyebrow="The approach" title="Solution" />
        <ProjectReveal>
          <p className="text-base leading-7 text-gray-400">{project.solution}</p>
        </ProjectReveal>
      </section>

      <section aria-labelledby="features-heading">
        <ProjectSectionHeading id="features-heading" eyebrow="What it does" title="Key features" />
        <ProjectReveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl border border-gray-800 bg-[#0d1117] p-4 text-sm leading-6 text-gray-300"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </ProjectReveal>
      </section>

      {project.architectureNote && (
        <section aria-labelledby="architecture-heading">
          <ProjectSectionHeading id="architecture-heading" eyebrow="Under the hood" title="Architecture" />
          <ProjectReveal className="rounded-2xl border border-blue-900/40 bg-blue-950/20 p-5">
            <p className="text-sm leading-7 text-gray-300">{project.architectureNote}</p>
          </ProjectReveal>
        </section>
      )}
    </div>
  )
}