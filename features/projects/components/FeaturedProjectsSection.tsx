import type { Project } from "../types"
import { FeaturedProjectsGrid } from "./FeaturedProjectsGrid"
import { JSX } from "react/jsx-runtime"

interface FeaturedProjectsSectionProps {
  projects: Project[]
}

export function FeaturedProjectsSection({ projects }: Readonly<FeaturedProjectsSectionProps>): JSX.Element {
  return (
    <section
      className="relative py-24 bg-white dark:bg-dark-primary"
      aria-label="Featured projects by Lawal Kamaldeen"
    >
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #9ca3af 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
              Featured projects
            </span>
          </div>
          <h2 className="mb-2 text-4xl font-bold leading-tight tracking-tight text-dark-primary lg:text-5xl dark:text-white">
            Things I&apos;ve shipped
          </h2>
          <p className="max-w-xl text-sm text-primary dark:text-gray-500">
            A selection of projects built from scratch to production — each one solving a real problem.
          </p>
        </div>
        {/* Grid */}
        <FeaturedProjectsGrid projects={projects} />
      </div>
    </section>
  )
}