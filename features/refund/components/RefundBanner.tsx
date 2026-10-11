import type { JSX } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { REFUND_BANNER } from "@/features/refund/data/data"
import { RefundIcon } from "./RefundIcon"

export function RefundBanner(): JSX.Element {
  const { title, description, ctaLabel, ctaHref } = REFUND_BANNER

  return (
    <section
      aria-labelledby="refund-banner-heading"
      className="flex flex-col gap-6 rounded-2xl border border-brand/30 bg-linear-to-r from-brand/15 to-surface p-6 md:flex-row md:items-center md:justify-between md:p-8"
    >
      <div className="flex items-center gap-6">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-text">
          <RefundIcon name="handshake" className="size-7 text-blue-600" />
        </span>
        <span aria-hidden="true" className="hidden h-12 w-px bg-border md:block" />
        <div>
          <h2
            id="refund-banner-heading"
            className="text-xl font-medium tracking-tight text-blue-600"
          >
            {title}
          </h2>
          <p className="mt-1 max-w-md text-sm leading-relaxed text-subtle text-gray-500">
            {description}
          </p>
        </div>
      </div>

      <Link
        href={ctaHref}
        className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-medium text-blue-500 transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-text"
      >
        {ctaLabel}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </section>
  )
}
