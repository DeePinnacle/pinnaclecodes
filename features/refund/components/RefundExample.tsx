import type { JSX } from "react"
import { REFUND_EXAMPLE } from "@/features/refund/data/data"


export function RefundExample(): JSX.Element {
  const { title, description, rows, note } = REFUND_EXAMPLE
  const lastIndex = rows.length - 1

  return (
    <section
      aria-labelledby="refund-example-heading"
      className="rounded-2xl border border-border bg-surface p-6 md:p-8"
    >
      <h2
        id="refund-example-heading"
        className="text-2xl font-bold tracking-tight text-blue-600"
      >
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-subtle text-gray-500">
        {description}
      </p>

      <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
        {rows.map((row, index) => {
          const isResult = index === lastIndex
          const tileClass = isResult
            ? "border-brand/40 bg-brand/15"
            : "border-border bg-background"
          const operator = index === lastIndex - 1 ? "=" : "\u2212"

          return (
            <div key={row.id} className="contents">
              <div
                className={`flex-1 rounded-xl border p-5 text-center ${tileClass}`}
              >
                <p className="text-sm text-subtle text-gray-500">{row.label}</p>
                <p
                  className={`mt-2 text-4xl font-bold tracking-tight ${
                    isResult ? "text-blue-500" : "text-blue-500"
                  }`}
                >
                  {row.value}
                </p>
              </div>
              {index < lastIndex && (
                <span
                  aria-hidden="true"
                  className="text-center text-2xl font-medium text-subtle text-gray-500"
                >
                  {operator}
                </span>
              )}
            </div>
          )
        })}
      </div>

      <p className="mt-6 text-xs text-subtle text-gray-500">{note}</p>
    </section>
  )
}
