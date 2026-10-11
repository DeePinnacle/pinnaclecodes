import type { JSX } from "react"
import {
  Calculator,
  CalendarClock,
  CircleCheck,
  Handshake,
  Mail,
  RefreshCw,
  RotateCcw,
  Scale,
  Send,
  Wallet,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { RefundIconName } from "../types"


const ICON_MAP: Record<RefundIconName, LucideIcon> = {
  wallet: Wallet,
  undo: RotateCcw,
  calculator: Calculator,
  calendar: CalendarClock,
  send: Send,
  check: CircleCheck,
  refresh: RefreshCw,
  mail: Mail,
  scale: Scale,
  handshake: Handshake,
}

interface RefundIconProps {
  name: RefundIconName
  className?: string
}

/** Decorative icon: always hidden from assistive tech. */
export function RefundIcon({ name, className }: RefundIconProps): JSX.Element {
  const Icon = ICON_MAP[name]
  return <Icon className={className} aria-hidden="true" />
}
