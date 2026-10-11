'use client'

import { Mail } from 'lucide-react'
import { motion, type Variants } from 'framer-motion'
import type { TermSection } from '../types'
import Link from "next/link"


interface TermCardProps {
  section: TermSection
  variants: Variants
}

export function TermCard({ section, variants }: TermCardProps) {
  const { number, title, body, icon: Icon, email } = section

  return (
    <motion.li variants={variants}>
      <div className="flex h-full flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent hover:shadow-glow-sm">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex size-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-gray-500 shadow-glow-sm"
          >
            {number}
          </span>
          <Icon className="size-8 text-gray-500" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-bold tracking-tight text-blue-500">{title}</h2>
        <p className="text-sm leading-7 text-gray-500">{body}</p>
        {email && (
          <Link
            href={`mailto:${email}`}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-hover"
          >
            <Mail className="size-4" aria-hidden="true" />
            {email}
          </Link>
        )}
      </div>
    </motion.li>
  )
}