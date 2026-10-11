import type { JSX } from "react"
import {
  PRIVACY_BADGES,
  PRIVACY_EYEBROW,
  PRIVACY_INTRO,
  PRIVACY_LAST_UPDATED,
} from "../data"
import { PrivacyIcon } from "./PrivacyIcon"
import { PrivacyShield } from "./PrivacyShield"


/**
 * Intentionally static (no entrance animation): the h1 is the LCP element,
 * and hiding it behind an opacity transition would cost LCP for no gain.
 */
export function PrivacyHero(): JSX.Element {
  return (
    <header className="grid items-center gap-10 border-b border-border pb-12 lg:grid-cols-2">
      <div>
        <p className="text-sm font-medium tracking-widest text-gray-500 uppercase">
          {PRIVACY_EYEBROW}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-blue-600 md:text-5xl">
          Your Privacy
          <span className="block text-brand-text">Matters</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500">
          {PRIVACY_INTRO}
        </p>
        <p className="mt-4 text-sm text-gray-500">
          Last updated:{" "}
          <time dateTime={PRIVACY_LAST_UPDATED.iso}>
            {PRIVACY_LAST_UPDATED.label}
          </time>
        </p>
      </div>

      <div className="flex items-center gap-8 lg:justify-end">
        <ul className="grid w-full gap-3 sm:grid-cols-3 lg:w-auto lg:grid-cols-1">
          {PRIVACY_BADGES.map((badge) => (
            <li
              key={badge.id}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface px-5 py-4"
            >
              <PrivacyIcon
                name={badge.icon}
                className="size-8 shrink-0 text-blue-600"
              />
              <span className="max-w-28 text-sm font-medium text-gray-500">
                {badge.label}
              </span>
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <PrivacyShield />
        </div>
      </div>
    </header>
  )
}