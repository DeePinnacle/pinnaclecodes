"use client"

import { useMemo } from "react"
import type { JSX } from "react"
import { useActiveSection } from "../hooks/useActiveection"
import type { PrivacySection } from "../types"

interface PrivacyNavProps {
  sections: readonly PrivacySection[]
}

const LINK_BASE =
  "flex min-h-11 items-center gap-4 border-l-2 px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text"
const LINK_ACTIVE = "border-brand font-medium text-blue-600"
const LINK_IDLE = "border-transparent text-gray-500 hover:text-brand-text"

/**
 * Sticky table of contents. Hidden below lg: on small screens the eight cards
 * are a short linear read, so the extra navigation would only add clutter.
 */
export function PrivacyNav({ sections }: PrivacyNavProps): JSX.Element {
  const ids = useMemo(() => sections.map((section) => section.id), [sections])
  const activeId = useActiveSection(ids)

  return (
    <nav
      aria-label="Privacy policy sections"
      className="hidden rounded-2xl border border-border bg-surface p-4 lg:sticky lg:top-24 lg:block lg:self-start"
    >
      <ol>
        {sections.map((section) => {
          const isActive = section.id === activeId
          const linkClass = `${LINK_BASE} ${isActive ? LINK_ACTIVE : LINK_IDLE}`

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className={linkClass}
              >
                <span className="font-medium">{section.index}</span>
                {section.title}
              </a>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}