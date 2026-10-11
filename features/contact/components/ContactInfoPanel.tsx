import Link from "next/link"
import {
  Mail, MapPin, Clock, Briefcase,
  MessageSquareQuote, CheckCircle2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import type { IconType } from "react-icons"
import type { ContactData } from "../types"
import { JSX } from "react/jsx-runtime"

type AnyIcon = LucideIcon | IconType

const ICON_MAP: Record<string, AnyIcon> = {
  // Lucide — used for contact detail items
  Mail,
  MapPin,
  Clock,
  Briefcase,
  // react-icons — used for social links
  FaGithub,
  FaLinkedin,
  FaXTwitter,
}

interface ContactInfoPanelProps {
  data: ContactData
}

export function ContactInfoPanel({ data }: Readonly<ContactInfoPanelProps>): JSX.Element {
  return (
    <div className="flex h-full flex-col gap-6">

      {/* Availability badge */}
      {data.available && (
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5">
          <span
            className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.4)]"
            aria-hidden="true"
          />
          <span className="text-xs font-medium text-green-400">{data.availableText}</span>
        </div>
      )}

      {/* Heading */}
      <div>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white lg:text-4xl">
          {data.heading}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-gray-500">
          {data.subheading}
        </p>
      </div>

      {/* Quote card */}
      <div className="rounded-xl border border-blue-900/30 bg-blue-950/10 p-4 dark:border-blue-900/30 dark:bg-blue-950/10">
        <MessageSquareQuote className="mb-2 h-5 w-5 text-blue-500" aria-hidden="true" />
        <p className="text-xs leading-relaxed text-blue-400 italic dark:text-blue-400">
          &ldquo;{data.quoteText}&rdquo;
        </p>
      </div>

      {/* Contact details */}
      <div className="flex flex-col gap-3">
        {data.contacts.map((item) => {
          const Icon = ICON_MAP[item.icon] ?? Mail
          const content = (
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-900/40 bg-blue-950/20 dark:border-blue-900/40 dark:bg-blue-950/20">
                <Icon className="h-4 w-4 text-blue-500" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-gray-400 dark:text-gray-600">
                  {item.label}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {item.value}
                </span>
              </div>
            </div>
          )

          return item.href ? (
            <Link
              key={item.label}
              href={item.href}
              className="group transition-opacity duration-150 hover:opacity-80"
              aria-label={item.label}
            >
              {content}
            </Link>
          ) : (
            <div key={item.label}>{content}</div>
          )
        })}
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 dark:bg-gray-800" aria-hidden="true" />

      {/* What I'm open to */}
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400 dark:text-gray-600">
          What I&apos;m open to
        </p>
        <div className="flex flex-col gap-1.5">
          {[
            "Freelance projects",
            "Remote full-time roles",
            "Contract engagements",
            "Technical consulting",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CheckCircle2
                className="h-3.5 w-3.5 shrink-0 text-blue-500"
                aria-hidden="true"
              />
              <span className="text-xs text-gray-500 dark:text-gray-500">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-100 dark:bg-gray-800" aria-hidden="true" />

      {/* Social links */}
      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400 dark:text-gray-600">
          Find me online
        </p>
        <div className="flex gap-2">
          {data.socials.map((social) => {
            const Icon = ICON_MAP[social.icon] ?? FaGithub
            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 transition-colors duration-150 hover:border-blue-300 hover:text-blue-600 dark:border-gray-800 dark:bg-[#111111] dark:text-gray-500 dark:hover:border-blue-600/50 dark:hover:text-blue-400"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </Link>
            )
          })}
        </div>
        <p className="text-[10px] text-gray-400 dark:text-gray-700">{data.responseTime}</p>
      </div>
    </div>
  )
}