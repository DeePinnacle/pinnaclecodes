import { Mail, MapPin, Clock } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FaXTwitter, FaHashnode } from "react-icons/fa6"
import type { FooterData } from "../types"
import { JSX } from "react/jsx-runtime"
import Link from "next/link"
import Image from "next/image"

/** Static icon map at module level — never resolved during render */
const SOCIAL_ICON_MAP = {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaHashnode,
} as const

type SocialIconKey = keyof typeof SOCIAL_ICON_MAP

interface FooterBrandProps {
  brand: FooterData["brand"]
  socials: FooterData["socials"]
  stackTags: FooterData["stackTags"]
}

export function FooterBrand({ brand, socials, stackTags }: Readonly<FooterBrandProps>): JSX.Element {
  return (
    <div className="flex flex-col gap-5 border-b border-gray-800 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
      {/* Logo */}
          <Link href="/" aria-label="PinnacleCodes home" className="inline-flex items-center">
            <Image
              src="/logo_1.png"
              alt="PinnacleCodes logo"
              width={136}
              height={136}
              priority
              className="h-28 w-44 object-contain"
            />
          </Link>

      {/* Bio */}
      <p className="text-sm leading-[1.7] text-gray-500">
        {brand.bio}
      </p>

      {/* Developer info card */}
      <div className="flex flex-col gap-3 rounded-xl border border-blue-900/40 bg-blue-950/10 p-4 dark:border-blue-900/40 dark:bg-blue-950/10">
        <span className="text-[10px] font-medium uppercase tracking-widest text-gray-600 dark:text-gray-600">
          Developer info
        </span>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-blue-500" aria-hidden="true" />
            {brand.location}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
            <Mail className="h-3.5 w-3.5 shrink-0 text-blue-500" aria-hidden="true" />
            {brand.email}
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
            <Clock className="h-3.5 w-3.5 shrink-0 text-blue-500" aria-hidden="true" />
            {brand.timezone}
          </div>
        </div>

        {/* Availability */}
        {brand.available && (
          <div className="flex items-center gap-2 border-t border-gray-800 pt-3">
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.35)]"
              aria-hidden="true"
            />
            <span className="text-xs font-medium text-green-400">
              {brand.availableText}
            </span>
          </div>
        )}
      </div>

      {/* Social buttons */}
      <ul className="flex gap-2" aria-label="Social links">
        {socials.map((social) => {
          const Icon = SOCIAL_ICON_MAP[social.icon as SocialIconKey]
          if (!Icon) return null
          return (
            <li key={social.label}>
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-800 bg-white text-gray-500 transition-colors duration-150 hover:border-blue-600/50 hover:text-blue-400 dark:bg-[#111111] dark:text-gray-600 dark:hover:border-blue-600/50 dark:hover:text-blue-400"
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </li>
          )
        })}
      </ul>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-1.5">
        {stackTags.map((tag) => (
          <span
            key={tag.label}
            className="rounded-full border border-gray-800 px-2.5 py-0.5 text-[10px] text-gray-600 dark:border-gray-800 dark:text-gray-600"
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  )
}