import Link from "next/link"
import type { FooterNavColumn } from "../types"
import { JSX } from "react/jsx-runtime"

interface FooterNavProps {
  columns: FooterNavColumn[]
}

export function FooterNav({ columns }: Readonly<FooterNavProps>): JSX.Element {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {columns.map((col) => (
        <div key={col.id} className="flex flex-col gap-3">
          <span className="text-[10px] font-medium uppercase tracking-widest text-gray-600 dark:text-gray-600">
            {col.heading}
          </span>
          <ul className="flex flex-col gap-2">
            {col.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={[
                    "inline-flex items-center gap-1.5 text-xs transition-colors duration-150",
                    link.accent
                      ? "text-blue-500 hover:text-blue-400"
                      : "text-gray-500 hover:text-gray-300 dark:text-gray-500 dark:hover:text-gray-300",
                  ].join(" ")}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                  {link.badge && (
                    <span className="rounded-full border border-blue-900/40 bg-blue-950/30 px-1.5 py-0.5 text-[9px] font-medium text-blue-400">
                      {link.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}