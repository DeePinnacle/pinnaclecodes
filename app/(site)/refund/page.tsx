import type { JSX } from "react"
import { REFUND_SECTIONS } from "@/features/refund/data/data"
import { RefundBanner } from "@/features/refund/components/RefundBanner"
import { RefundExample } from "@/features/refund/components/RefundExample"
import { RefundHero } from "@/features/refund/components/RefundHero"
import { RefundSectionCard } from "@/features/refund/components/RefundSectionCard"

export default function RefundPolicyPage(): JSX.Element {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <RefundHero />
      <div className="grid gap-4 md:grid-cols-2">
        {REFUND_SECTIONS.map((section) => (
          <RefundSectionCard key={section.id} section={section} />
        ))}
      </div>
      <RefundExample />
      <RefundBanner />
    </div>
  )
}