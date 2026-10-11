import { Clock, Users, Globe2, ThumbsUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { StatItem } from "../types"
import { JSX } from "react/jsx-runtime"
const ICON_MAP: Record<string, LucideIcon> = {
  Clock,
  Users,
  Globe2,
  ThumbsUp,
}

interface ContactStatsProps {
  stats: StatItem[]
}
export function ContactStats({ stats }: Readonly<ContactStatsProps>): JSX.Element {
  return (
    <div
      className="border-y border-gray-100 bg-gray-50/50 dark:border-gray-800 dark:bg-white/2"
      aria-label="Quick facts"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => {
          const Icon = ICON_MAP[stat.icon] ?? Clock
          return (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-900/40 bg-blue-950/20 dark:border-blue-900/40 dark:bg-blue-950/20">
                <Icon className="h-4 w-4 text-blue-500" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {stat.label}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}