import Link from "next/link"
import { Mail } from "lucide-react"
import type { FooterData } from "../types"
import { FooterBrand } from "./FooterBrand"
import { FooterNav } from "./FooterNav"
import { FooterFeedback } from "./FooterFeedBack"
import { JSX } from "react/jsx-runtime"

interface SiteFooterProps {
  data: FooterData
}

export function SiteFooter({ data }: Readonly<SiteFooterProps>): JSX.Element {
  return (
    <footer
      className="relative border-t border-gray-100 bg-white dark:border-gray-800/60 dark:bg-dark-primary"
      aria-label="Site footer"
    >
      {/* ── Top accent strip ── */}
      <div className="border-b border-blue-900/30 bg-blue-950/10 dark:border-blue-900/30 dark:bg-blue-950/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Left: availability status */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 fleshrink-0 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.35)] animate-pulse"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-green-400">
                Open to new projects
              </span>
            </div>
            <span className="hidden text-gray-700 sm:block" aria-hidden="true">·</span>
            <span className="hidden text-xs text-gray-500 dark:text-gray-600 sm:block">
              Replies within 24 hrs · Remote worldwide
            </span>
          </div>

          {/* Right: start a conversation CTA */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-medium text-white transition-colors duration-150 hover:bg-blue-500"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Start a conversation
          </Link>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Two-column: brand left, nav right */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-10">
          <FooterBrand
            brand={data.brand}
            socials={data.socials}
            stackTags={data.stackTags}
          />
          <FooterNav columns={data.navColumns} />
        </div>

        {/* Feedback strip */}
        <div className="mt-10">
          <FooterFeedback feedback={data.feedback} />
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-gray-100 pt-6 dark:border-gray-800 sm:flex-row sm:items-center">
          <span className="text-xs text-gray-400 dark:text-gray-600">
            {data.bottom.copyright}
          </span>

          <div className="flex items-center gap-5">
            <span className="text-xs text-gray-400 dark:text-gray-600">
              {data.bottom.techCredit}
            </span>
            <div className="flex items-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full bg-green-400"
                aria-hidden="true"
              />
              <span className="text-xs text-green-400">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}