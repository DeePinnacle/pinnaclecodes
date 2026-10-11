import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  CalendarCheck,
  Server,
  Code2,
  Kanban,
  ShoppingCart,
  Box,
} from "lucide-react"

export const PROJECT_ICON_MAP: Record<string, LucideIcon> = {
  BarChart3,
  CalendarCheck,
  Server,
  Code2,
  Kanban,
  ShoppingCart,
  Box,
}

export function getProjectIcon(name: string): LucideIcon {
  return PROJECT_ICON_MAP[name] ?? Box
}