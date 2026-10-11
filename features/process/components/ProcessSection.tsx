import { JSX } from "react/jsx-runtime"
import type { ProcessStep } from "../types"
import { ProcessList } from "./ProcessList"

interface ProcessSectionProps {
  steps: ProcessStep[]
}

export function ProcessSection({ steps }: Readonly<ProcessSectionProps>): JSX.Element {
  return (
    <section
      className="relative bg-white py-24 dark:bg-[#0a0a0a]"
      aria-label="Development process"
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
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.6fr] lg:gap-20">

          {/* Left: sticky heading block */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-widest text-blue-500">
                Process
              </span>
            </div>

            <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-5xl">
              How I work
            </h2>

            <p className="mb-8 text-sm leading-relaxed text-gray-500 dark:text-gray-500">
              From first conversation to final deployment — a repeatable process
              that prioritises clarity, quality, and predictable delivery over
              heroic last-minute efforts.
            </p>

            {/* Phase count card */}
            <div className="inline-flex flex-col gap-1 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 dark:border-gray-800 dark:bg-[#111111]">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {steps.length}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-600">
                Defined phases
              </span>
            </div>

            {/* Principle callout */}
            <div className="mt-6 rounded-xl border border-blue-900/30 bg-blue-950/10 p-4 dark:border-blue-900/30 dark:bg-blue-950/10">
              <p className="text-xs leading-relaxed text-blue-400 dark:text-blue-400">
                &ldquo;Code that can&apos;t be maintained by someone else isn&apos;t
                finished — it&apos;s just deferred technical debt.&rdquo;
              </p>
              <p className="text-xs leading-relaxed text-blue-400 text-right dark:text-blue-400">Lawal Kamaldeen</p>
            </div>
          </div>

          {/* Right: steps list */}
          <ProcessList steps={steps} />
        </div>
      </div>
    </section>
  )
}