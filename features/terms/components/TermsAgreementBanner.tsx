import Link from 'next/link'
import { ArrowRight, Handshake } from 'lucide-react'

export function TermsAgreementBanner() {
  return (
    <section
      aria-label="Agreement"
      className="flex flex-col gap-6 rounded-xl border border-accent/40 bg-accent/10 p-6 md:flex-row md:items-center"
    >
      <span
        aria-hidden="true"
        className="flex size-14 shrink-0 items-center justify-center rounded-full border border-accent bg-accent/20 shadow-glow-sm"
      >
        <Handshake className="size-7 text-blue-600" />
      </span>
      <div className="flex-1 md:border-l md:border-border md:pl-6">
        <p className="text-lg font-bold text-blue-600">
          By using PinnacleCodes, you agree to these Terms of Service.
        </p>
        <p className="mt-1 text-sm text-gray-600">
          Thank you for being part of our journey. We&apos;re excited to have you here.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-medium text-gray-500 transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-hover"
      >
        I Agree &amp; Continue
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </section>
  )
}