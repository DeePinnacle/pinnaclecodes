import { JSX } from "react/jsx-runtime"
import type { ExperienceItem } from "../types"
import { ExperienceTimeline } from "./ExperienceTimeline"

interface ExperienceSectionProps {
  experiences: ExperienceItem[]
}

const STATS = [
  { value: "3+", label: "Years experience" },
  { value: "3",  label: "Roles held" },
  { value: "20+", label: "Projects shipped" },
  { value: "10+", label: "Clients served" },
]

export function ExperienceSection({ experiences }: Readonly<ExperienceSectionProps>): JSX.Element {
  return (
    <section
      className="relative bg-white py-24 dark:bg-dark-primary"
      aria-label="Professional experience"
    >
      {/* Dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #6b7280 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Left: heading */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
                Experience
              </span>
            </div>
            <h2 className="mb-3 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              Where I&apos;ve worked &amp; grown
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-500">
              A record of professional roles, freelance engagements, and the impact delivered
              at each — most recent first.
            </p>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-3 self-end sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-800 dark:bg-[#111111]"
              >
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-600">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  )
}