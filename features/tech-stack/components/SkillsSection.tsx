import { JSX } from "react/jsx-runtime"
import type { SkillCategory } from "../types"
import { SkillsGrid } from "./SkillsGrid"

interface SkillsSectionProps {
  categories: SkillCategory[]
}

const STATS = [
  { value: "3+",  label: "Years building" },
  { value: "10+", label: "Technologies" },
  { value: "20+", label: "Projects shipped" },
  { value: "4",   label: "Disciplines" },
]

export function SkillsSection({ categories }: Readonly<SkillsSectionProps>): JSX.Element {
  return (
    <section
      className="relative bg-white py-24 dark:bg-dark-primary"
      aria-label="Tech stack and skills"
      id={"skills"}
    >
      {/* Dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #9ca3af 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Two-column header: left = heading, right = stats */}
        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
                Tech stack
              </span>
            </div>
            <h2 className="mb-3 text-4xl font-bold leading-tight tracking-tight text-dark-primary dark:text-white lg:text-5xl">
              Tools I build with
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-primary dark:text-gray-500">
              A curated set of technologies I use across the full stack — from pixel-perfect
              frontend interfaces to scalable backend systems and production deployment pipelines.
            </p>
          </div>

          {/* Right — mini stat grid */}
          <div className="grid grid-cols-2 gap-4 self-end sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 rounded-xl border border-gray-800 bg-[#111111] px-4 py-3"
              >
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category pill groups */}
        <SkillsGrid categories={categories} />
      </div>
    </section>
  )
}
