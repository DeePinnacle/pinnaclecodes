import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { JSX } from "react/jsx-runtime"
import { projects, getProjectBySlug, getAdjacentProjects } from "@/features/projects/data"
import { ProjectDetail } from "@/features/projects/components/ProjectDetail"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams(): { slug: string }[] {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Readonly<ProjectPageProps>): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) return {}

  const title = `${project.title} | PinnacleCodes`

  return {
    title,
    description: project.tagline,
    openGraph: { title, description: project.tagline, images: [project.coverImage] },
  }
}

export default async function ProjectPage({ params }: Readonly<ProjectPageProps>): Promise<JSX.Element> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  const adjacent = getAdjacentProjects(slug)

  if (!project || !adjacent) notFound()

  return <ProjectDetail project={project} previous={adjacent.previous} next={adjacent.next} />
}