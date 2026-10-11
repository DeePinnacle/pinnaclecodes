export type RefundIconName =
  | "wallet"
  | "undo"
  | "calculator"
  | "calendar"
  | "send"
  | "check"
  | "refresh"
  | "mail"
  | "scale"
  | "handshake"

export interface RefundLink {
  label: string
  href: string
}

export interface RefundSection {
  id: string
  /** Zero-padded display number, e.g. "01" */
  index: string
  title: string
  body: string
  icon: RefundIconName
  link?: RefundLink
}

export interface RefundKeyTerm {
  id: string
  title: string
  caption: string
  icon: RefundIconName
}

export interface RefundExampleRow {
  id: string
  label: string
  value: string
}

export interface RefundExampleContent {
  title: string
  description: string
  rows: readonly RefundExampleRow[]
  note: string
}

export interface RefundBannerContent {
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
}
