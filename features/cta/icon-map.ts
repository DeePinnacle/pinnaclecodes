import type { LucideIcon } from "lucide-react"
import {
  Mail,
  FileText,
  MapPin,
  Clock,
  Briefcase,
  Box,
} from "lucide-react"

export const CTA_ICON_MAP: Record<string, LucideIcon> = {
  Mail,
  FileText,
  MapPin,
  Clock,
  Briefcase,
  Box,
}

export function getCtaIcon(name: string): LucideIcon {
  return CTA_ICON_MAP[name] ?? Box
}