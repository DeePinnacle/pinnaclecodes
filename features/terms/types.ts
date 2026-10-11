import type { LucideIcon } from 'lucide-react'

export interface TermSection {
  id: string
  number: string
  title: string
  body: string
  icon: LucideIcon
  email?: string
}

export interface TermHighlight {
  label: string
  icon: LucideIcon
}