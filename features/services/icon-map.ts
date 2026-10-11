import type { LucideIcon } from "lucide-react"
import {
  LayoutTemplate,
  Server,
  AppWindow,
  Network,
  Gauge,
  Lightbulb,
  Atom,
  Triangle,
  Wind,
  Play,
  Database,
  Code2,
  Layers,
  ArrowLeftRight,
  Lock,
  Activity,
  Package,
  GitBranch,
  Map,
  Box,
} from "lucide-react"

export const ICON_MAP: Record<string, LucideIcon> = {
  LayoutTemplate,
  Server,
  AppWindow,
  Network,
  Gauge,
  Lightbulb,
  Atom,
  Triangle,
  Wind,
  Play,
  Database,
  Code2,
  Layers,
  ArrowLeftRight,
  Lock,
  Activity,
  Package,
  GitBranch,
  Map,
  Box,
}

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? Box
}