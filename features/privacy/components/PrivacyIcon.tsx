import type { JSX } from "react"
import {
  Cookie,
  Lock,
  Mail,
  RefreshCw,
  Settings,
  Share2,
  ShieldCheck,
  User,
  UserCog,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { PrivacyIconName } from "../types"

// Static, module-level map. Never build this inside a component body, or React
// reports "Cannot create components during render".
const ICON_MAP: Record<PrivacyIconName, LucideIcon> = {
  user: User,
  settings: Settings,
  cookie: Cookie,
  share: Share2,
  shield: ShieldCheck,
  rights: UserCog,
  refresh: RefreshCw,
  mail: Mail,
  lock: Lock,
}

interface PrivacyIconProps {
  name: PrivacyIconName
  className?: string
}

/** Decorative icon: always hidden from assistive tech. */
export function PrivacyIcon({ name, className }: PrivacyIconProps): JSX.Element {
  const Icon = ICON_MAP[name]
  return <Icon className={className} aria-hidden="true" />
}