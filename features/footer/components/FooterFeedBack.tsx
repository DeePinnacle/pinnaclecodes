import Link from "next/link"
import { MessageSquare, Send } from "lucide-react"
import type { FooterData } from "../types"
import { JSX } from "react/jsx-runtime"

interface FooterFeedbackProps {
  feedback: FooterData["feedback"]
}

export function FooterFeedback({ feedback }: Readonly<FooterFeedbackProps>): JSX.Element {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-gray-800 bg-white px-5 py-4 dark:border-gray-800 dark:bg-[#111111]">
      {/* Icon */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-900/40 bg-blue-950/20 dark:border-blue-900/40 dark:bg-blue-950/20">
        <MessageSquare className="h-4 w-4 text-blue-500" aria-hidden="true" />
      </div>

      {/* Copy */}
      <div className="min-w-0">
        <p className="mb-0.5 text-xs font-medium text-gray-900 dark:text-white">
          {feedback.heading}
        </p>
        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-500">
          {feedback.subtext}
        </p>
      </div>

      {/* CTA */}
      <Link
        href={feedback.ctaHref}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-blue-900/40 bg-transparent px-3.5 py-2 text-xs font-medium text-blue-400 transition-colors duration-150 hover:border-blue-600/60 hover:text-blue-300 dark:border-blue-900/40 dark:text-blue-400 dark:hover:border-blue-600/60 dark:hover:text-blue-300"
      >
        <Send className="h-3.5 w-3.5" aria-hidden="true" />
        {feedback.ctaLabel}
      </Link>
    </div>
  )
}