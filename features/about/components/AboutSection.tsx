import { JSX } from "react"
import type { AboutData } from "../data"
import { AboutVisual } from "./AboutVisual"
import { AboutContent } from "./AboutContent"

interface AboutSectionProps {
  data: AboutData
}

export function AboutSection({ data }: AboutSectionProps): JSX.Element {
  return (
    <section
      className="relative bg-primary-dark py-24"
      aria-label="About Lawal Kamaldeen"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: animated terminal visual */}
          <AboutVisual />

          {/* Right: summary content — full detail lives at /about */}
          <AboutContent
            sectionLabel={data.sectionLabel}
            heading={data.heading}
            paragraphs={data.paragraphs}
            driveCards={data.driveCards}
          />
        </div>
      </div>
    </section>
  )
}