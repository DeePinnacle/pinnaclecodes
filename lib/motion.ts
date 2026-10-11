import type { Variants } from 'framer-motion'

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

// Reduced-motion fallback: opacity only, no movement.
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/** Picks entrance variants based on the user's prefers-reduced-motion setting. */
export function getEntranceVariants(shouldReduceMotion: boolean | null): Variants {
  return shouldReduceMotion ? fadeIn : fadeInUp
}