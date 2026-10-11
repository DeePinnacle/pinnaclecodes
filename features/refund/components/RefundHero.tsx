import type { JSX } from "react"
import {
  REFUND_EYEBROW,
  REFUND_INTRO,
  REFUND_KEY_TERMS,
  REFUND_LAST_UPDATED,
} from "@/features/refund/data/data"
import { RefundIcon } from "./RefundIcon"


export function RefundHero(): JSX.Element {
  return (
    <header className="grid items-center gap-10 border-b border-border pb-12 lg:grid-cols-2">
      <div>
        <p className="text-sm text-gray-500 font-medium tracking-widest text-brand-text uppercase">
          {REFUND_EYEBROW}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-blue-600 md:text-5xl">
          Clear Terms,
          <span className="block text-brand-text">Fair Refunds</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
          {REFUND_INTRO}
        </p>
        <p className="mt-4 text-sm text-subtle">
          Last updated:{" "}
          <time dateTime={REFUND_LAST_UPDATED.iso}>
            {REFUND_LAST_UPDATED.label}
          </time>
        </p>
      </div>

      <ul
        aria-label="Refund policy at a glance"
        className="grid gap-3 lg:ml-auto lg:w-full lg:max-w-md"
      >
        {REFUND_KEY_TERMS.map((term) => (
          <li
            key={term.id}
            className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5"
          >
            <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-text">
              <RefundIcon name={term.icon} className="size-6 text-blue-600" />
            </span>
            <div>
              <p className="text-base font-medium text-blue-600">
                {term.title}
              </p>
              <p className="mt-1 text-sm text-subtle text-gray-500">{term.caption}</p>
            </div>
          </li>
        ))}
      </ul>
    </header>
  )
}
