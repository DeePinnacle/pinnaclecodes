import type { JSX } from "react"
import { PRIVACY_TRUST } from "../data"
import { PrivacyIcon } from "./PrivacyIcon"

export function PrivacyTrustBanner(): JSX.Element {
  const { title, description, signature } = PRIVACY_TRUST

  return (
    <section
      aria-labelledby="privacy-trust-heading"
      className="flex items-center gap-6 rounded-2xl border border-brand/30 bg-linear-to-r from-brand/15 to-surface p-6 md:p-8"
    >
      <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-text">
        <PrivacyIcon name="shield" className="size-7" />
      </span>
      <span aria-hidden="true" className="hidden h-12 w-px bg-border md:block" />
      <div className="flex-1">
        <h2
          id="privacy-trust-heading"
          className="text-xl font-medium tracking-tight text-blue-500 md:text-2xl"
        >
          {title}
        </h2>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
      <p
        aria-hidden="true"
        className="hidden font-serif text-3xl text-gray-500 italic md:block"
      >
        {signature}
      </p>
    </section>
  )
}