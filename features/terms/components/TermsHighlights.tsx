import { TERM_HIGHLIGHTS } from '../data'

export function TermsHighlights() {
  return (
    <ul className="flex flex-wrap gap-3 md:flex-col" aria-label="Our commitments">
      {TERM_HIGHLIGHTS.map(({ label, icon: Icon }) => (
        <li
          key={label}
          className="flex min-h-12 items-center gap-3 rounded-lg border border-border bg-surface px-4 text-sm font-medium text-gray-500"
        >
          <Icon className="size-5 text-accent-hover" aria-hidden="true" />
          {label}
        </li>
      ))}
    </ul>
  )
}