export type PrivacyIconName =
  | "user"
  | "settings"
  | "cookie"
  | "share"
  | "shield"
  | "rights"
  | "refresh"
  | "mail"
  | "lock"

export interface PrivacyLink {
  label: string
  href: string
}

export interface PrivacySection {
  id: string
  /** Zero-padded display number, e.g. "01" */
  index: string
  title: string
  body: string
  icon: PrivacyIconName
  link?: PrivacyLink
}

export interface PrivacyBadge {
  id: string
  label: string
  icon: PrivacyIconName
}

export interface PrivacyTrustContent {
  title: string
  description: string
  signature: string
}