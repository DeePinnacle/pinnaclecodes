import type { JSX } from "react"
import { ShieldCheckIcon } from "lucide-react"
/**
 * Static, decorative hero illustration. Built from token-coloured SVG shapes
 * (no images, no animation) so it stays crisp and themes with the site.
 */
export function PrivacyShield(): JSX.Element {
  return (
    <ShieldCheckIcon className='w-52 h-52 font-light text-blue-600' />
  )
}