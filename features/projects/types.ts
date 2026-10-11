export type ProjectCategory = "full-stack" | "backend" | "frontend" | "open-source" | "experiment"

export type ProjectView = "grid" | "timeline" | "architecture"

export interface Project {
  slug: string
  title: string
  tagline: string
  role?: string
  clientType?: "Client" | "Personal"
  problem: string
  solution: string
  stack: string[]
  features: string[]
  architectureNote?: string
  liveUrl?: string
  githubUrl?: string
  coverImage: string
  /** Extra screenshots shown on the detail page, after the cover image */
  gallery?: string[]
  featured: boolean
  year: number
  category: ProjectCategory
  /** Icon name string resolved client-side — used on cards */
  icon: string
}