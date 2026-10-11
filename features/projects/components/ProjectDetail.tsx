import type { Project } from "../types"
import { ProjectDetailHero } from "./ProjectDetailHero"
import { ProjectGallery } from "./ProjectGallery"
import { ProjectPagination } from "./ProjectPagination"
import { ProjectSidebar } from "./ProjectSidebar"
import { ProjectStory } from "./ProjectStory"
import { JSX } from "react/jsx-runtime"

interface ProjectDetailProps {
  project: Project
  previous: Project
  next: Project
}

export function ProjectDetail({ project, previous, next }: Readonly<ProjectDetailProps>): JSX.Element {
  // With a single project, previous/next both point back at it — nothing to navigate to.
  const hasSiblings = previous.slug !== project.slug

  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <ProjectDetailHero project={project} />

      <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-14 sm:px-6 lg:px-8">
        <ProjectGallery project={project} />

        <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <ProjectStory project={project} />
          <ProjectSidebar project={project} />
        </div>

        {hasSiblings && <ProjectPagination previous={previous} next={next} />}
      </div>
    </main>
  )
}