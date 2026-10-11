import type { JSX } from "react"
import type { RefundSection } from "../types"
import { RefundIcon } from "./RefundIcon"

interface RefundSectionCardProps {
  section: RefundSection
}

export function RefundSectionCard({
  section,
}: RefundSectionCardProps): JSX.Element {
  const headingId = `${section.id}-heading`
  const heading = `${Number(section.index)}. ${section.title}`

  return (
    <section
      id={section.id}
      aria-labelledby={headingId}
      className="flex scroll-mt-28 gap-5 rounded-2xl border border-border bg-surface p-6"
    >
      <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-text">
        <RefundIcon name={section.icon} className="size-6 text-blue-600" />
      </span>
      <div>
        <h2 id={headingId} className="text-lg font-medium text-blue-600">
          {heading}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-subtle text-gray-500">
          {section.body}
        </p>
        {section.link && (
          <a
            href={section.link.href}
            className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text"
          >
            <RefundIcon name="mail" className="size-4" />
            {section.link.label}
          </a>
        )}
      </div>
    </section>
  )
}
