import type { JSX } from "react"
import type { PrivacySection } from "../types"
import { PrivacyIcon } from "./PrivacyIcon"
import Link from "next/link"


interface PrivacySectionCardProps {
  section: PrivacySection
}

export function PrivacySectionCard({
  section,
}: PrivacySectionCardProps): JSX.Element {
  const headingId = `${section.id}-heading`
  const heading = `${Number(section.index)}. ${section.title}`

  return (
    <section
      id={section.id}
      aria-labelledby={headingId}
      className="flex scroll-mt-28 gap-5 rounded-2xl border border-border bg-surface p-6"
    >
      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-text">
        <PrivacyIcon name={section.icon} className="size-6 text-blue-600" />
      </span>
      <div>
        <h2 id={headingId} className="text-lg font-medium text-blue-600">
          {heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          {section.body}
        </p>
        {section.link && (
          <Link
            href={section.link.href}
            className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text"
          >
            <PrivacyIcon name="mail" className="size-4 text-blue-600" />
            {section.link.label}
          </Link>
        )}
      </div>
    </section>
  )
}