"use client"
import { JSX } from "react";
import Link from "next/link"
import { FileText, Mail } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import type { Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { ServicesData } from "../data"

interface ServicesCtaProps {
  cta: ServicesData["cta"]
  variants: Variants
}

export function ServicesCta({ cta, variants }: Readonly<ServicesCtaProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? undefined : variants}
      className="col-span-2 flex flex-col justify-between rounded-2xl border border-blue-900/40 bg-blue-950/20 p-6 transition-colors duration-200 hover:border-blue-600/60"
    >
      {/* Top: availability + copy */}
      <div className="flex flex-col gap-2">
        {/* Availability indicator */}
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(74,222,128,0.4)]"
            aria-hidden="true"
          />
          <span className="text-xs text-gray-500">
            <span className="font-medium text-green-400">Available</span> for new projects
          </span>
        </div>

        <h3 className="text-sm font-medium text-blue-300">
          {cta.heading}
        </h3>
        <p className="text-xs leading-relaxed text-gray-600">
          {cta.subheading}
        </p>
      </div>

      {/* Bottom: CTA buttons */}
      <div className="mt-5 lg:flex lg:flex-row lg:gap-2">
        <Button
          asChild
          size="sm"
          className="w-full h-14 justify-center bg-blue-600 text-white hover:bg-blue-500 lg:w-3/5"
        >
          <Link href={cta.primaryHref}>
            <Mail className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
            {cta.primaryLabel}
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full h-14 justify-center border-gray-800 bg-transparent text-gray-500 hover:border-blue-900/40 hover:bg-transparent hover:text-gray-400 lg:w-2/5"
        >
          <Link href={cta.secondaryHref} target="_blank" rel="noopener noreferrer">
            <FileText className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
            {cta.secondaryLabel}
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}