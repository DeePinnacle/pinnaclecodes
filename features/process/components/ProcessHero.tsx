import type { JSX } from 'react'
import {
  PROCESS_EYEBROW,
  PROCESS_INTRO,
  PROCESS_PHASES,
} from '../data'

/**
 * Intentionally static (no entrance animation): the h1 is the LCP element,
 * and hiding it behind an opacity transition would cost LCP for no gain.
 */
export function ProcessHero(): JSX.Element {
  return (
    <header className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-widest text-brand-text uppercase">
          {PROCESS_EYEBROW}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-blue-400 md:text-5xl">
          From Idea to <span className="text-brand-text">Impact</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
          {PROCESS_INTRO}
        </p>
      </div>

      <ul
        aria-label="Phases of the process"
        className="flex flex-wrap gap-x-3 gap-y-2 border-l-2 border-brand pl-4 text-xs font-medium tracking-widest text-gray-500 uppercase"
      >
        {PROCESS_PHASES.map((phase, index) => (
          <li key={phase} className="flex items-center gap-3">
            {phase}
            {index < PROCESS_PHASES.length - 1 && (
              <span aria-hidden="true" className="text-subtle">
                /
              </span>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}