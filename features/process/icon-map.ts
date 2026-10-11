import type { LucideIcon } from "lucide-react"
import {
  Search,
  Waypoints,
  Code2,
  ClipboardCheck,
  Rocket,
  Box,
} from "lucide-react"

export const PROCESS_ICON_MAP: Record<string, LucideIcon> = {
  Search,
  Waypoints,
  Code2,
  ClipboardCheck,
  Rocket,
  Box,
}

export function getProcessIcon(name: string): LucideIcon {
  return PROCESS_ICON_MAP[name] ?? Box
}