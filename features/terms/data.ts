import {
  Copyright,
  ExternalLink,
  Handshake,
  Lock,
  Mail,
  Monitor,
  RefreshCw,
  ShieldAlert,
  ShieldBan,
  ShieldCheck,
  UserCheck,
} from 'lucide-react'
import type { TermHighlight, TermSection } from './types'

export const TERMS_LAST_UPDATED = { iso: '2026-10-04', label: 'October 4, 2026' } as const

export const TERM_HIGHLIGHTS: TermHighlight[] = [
  { label: 'Fair Use', icon: ShieldCheck },
  { label: 'Mutual Respect', icon: Handshake },
  { label: 'Secure Experience', icon: Lock },
]

export const TERM_SECTIONS: TermSection[] = [
  {
    id: 'acceptance',
    number: '01',
    title: 'Acceptance of Terms',
    body: 'By accessing, browsing, or using PinnacleCodes, you agree to be bound by these Terms of Service. If you do not agree, please do not use the website or its services.',
    icon: UserCheck,
  },
  {
    id: 'use-of-website',
    number: '02',
    title: 'Use of Our Website',
    body: 'You agree to use the website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the site.',
    icon: Monitor,
  },
  {
    id: 'intellectual-property',
    number: '03',
    title: 'Intellectual Property',
    body: 'All content on PinnacleCodes, including text, images, design, code, and logos, is owned by us or our licensors. You may not copy, reproduce, distribute, or use our content without permission.',
    icon: Copyright,
  },
  {
    id: 'user-accounts',
    number: '04',
    title: 'User Accounts',
    body: 'If you create an account, you are responsible for keeping your login details secure and for all activities that happen under your account. Notify us immediately if you suspect any unauthorized access.',
    icon: Lock,
  },
  {
    id: 'external-links',
    number: '05',
    title: 'External Links',
    body: 'Our website may contain links to third-party websites or services. We are not responsible for the content, privacy practices, or accuracy of those sites. Use them at your own risk.',
    icon: ExternalLink,
  },
  {
    id: 'limitation-of-liability',
    number: '06',
    title: 'Limitation of Liability',
    body: 'PinnacleCodes is not liable for any indirect, incidental, special, or consequential damages arising from your use of the website or services, even if we have been advised of the possibility of such damages.',
    icon: ShieldAlert,
  },
  {
    id: 'changes',
    number: '07',
    title: 'Changes to These Terms',
    body: 'We may update these Terms of Service from time to time. Any changes will be posted on this page with the updated date. Your continued use of the website means you accept the changes.',
    icon: RefreshCw,
  },
  {
    id: 'termination',
    number: '08',
    title: 'Termination',
    body: 'We reserve the right to suspend or terminate your access to the website at any time, without notice, if you violate these terms or engage in any harmful activity.',
    icon: ShieldBan,
  },
  {
    id: 'contact',
    number: '09',
    title: 'Contact Us',
    body: 'If you have any questions about these Terms of Service, please reach out to us at:',
    icon: Mail,
    email: 'hello@pinnaclecodes.dev',
  },
]