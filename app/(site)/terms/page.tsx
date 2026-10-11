import type { Metadata } from 'next'
import { TermsAgreementBanner } from '@/features/terms/components/TermsAgreementBanner'
import { TermsGrid } from '@/features/terms/components/TermsGrid'
import { TermsHero } from '@/features/terms/components/TermsHero'

export const metadata: Metadata = {
  title: 'Terms of Service | PinnacleCodes',
  description:
    'The terms that govern your use of the PinnacleCodes website and services: your rights, responsibilities, and what to expect.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <>
      <TermsHero />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <TermsGrid />
        <TermsAgreementBanner />
      </div>
    </>
  )
}