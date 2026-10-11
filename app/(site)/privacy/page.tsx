import type { JSX } from "react"
import type { Metadata } from "next"
import { PRIVACY_SECTIONS } from "@/features/privacy/data"
import { PrivacyHero } from "@/features/privacy/components/PrivacyHero"
import { PrivacyNav } from "@/features/privacy/components/PrivacyNav"
import { PrivacySectionCard } from "@/features/privacy/components/PrivacySectionCard"
import { PrivacyTrustBanner } from "@/features/privacy/components/PrivacyTrustBanner"

export const metadata: Metadata = {
  title: "Privacy Policy | PinnacleCodes",
  description:
    "What information PinnacleCodes collects, how it is used, and the steps taken to keep it safe.",
}

// Navbar and <main> are assumed to come from the (site) layout.
export default function PrivacyPolicyPage(): JSX.Element {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <PrivacyHero />
      <div className="grid gap-8 lg:grid-cols-4">
        <PrivacyNav sections={PRIVACY_SECTIONS} />
        <div className="grid gap-4 md:grid-cols-2 lg:col-span-3">
          {PRIVACY_SECTIONS.map((section) => (
            <PrivacySectionCard key={section.id} section={section} />
          ))}
        </div>
      </div>
      <PrivacyTrustBanner />
    </div>
  )
}