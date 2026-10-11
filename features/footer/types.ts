export interface FooterNavLink {
  label: string
  href: string
  badge?: string         // e.g. "PDF", "New"
  accent?: boolean       // renders in electric blue
}

export interface FooterNavColumn {
  id: string
  heading: string
  links: FooterNavLink[]
}

export interface FooterSocialLink {
  icon: string           // react-icons key
  label: string
  href: string
}

export interface FooterStackTag {
  label: string
}

export interface FooterData {
  brand: {
    name: string
    accentName: string   // the blue-accented part of the name
    bio: string
    email: string
    location: string
    timezone: string
    available: boolean
    availableText: string
  }
  socials: FooterSocialLink[]
  stackTags: FooterStackTag[]
  navColumns: FooterNavColumn[]
  feedback: {
    heading: string
    subtext: string
    ctaLabel: string
    ctaHref: string
  }
  bottom: {
    copyright: string
    techCredit: string
  }
}