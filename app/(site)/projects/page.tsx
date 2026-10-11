import { JSX } from "react/jsx-runtime"
import { projects } from "@/features/projects/data"
import { ProjectsShowcase } from "@/features/projects/components/ProjectsShowcase"

export default function ProjectsPage(): JSX.Element {
  return <ProjectsShowcase projects={projects} />
}
