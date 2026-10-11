import type { JSX } from 'react'
import { BookOpen, CodeXml, LifeBuoy, RefreshCw } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PROCESS_INFO_HEADING, PROCESS_INFO_POINTS } from '../data'
import type { ProcessInfoIconName } from '../types'



// Static, module-level map. Never build this inside a component body.
const ICON_MAP: Record<ProcessInfoIconName, LucideIcon> = {
  updates: RefreshCw,
  quality: CodeXml,
  docs: BookOpen,
  support: LifeBuoy,
}

export function ProcessInfo(): JSX.Element {
  return (
    <section aria-labelledby="process-info-heading">
      <h2
        id="process-info-heading"
        className="text-2xl font-bold tracking-tight text-foreground"
      >
        {PROCESS_INFO_HEADING}
      </h2>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_INFO_POINTS.map((point) => {
          const Icon = ICON_MAP[point.icon]

          return (
            <li
              key={point.id}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <span className="flex size-10 items-center justify-center rounded-full border border-brand/40 text-brand-text">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-medium text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-subtle">
                {point.description}
              </p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}