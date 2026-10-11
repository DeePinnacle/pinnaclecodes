"use client"
import { JSX } from "react";
import { motion, useReducedMotion, Variants } from "motion/react"
import { ServiceCard } from "./ServiceCard"
import type { ResolvedServiceItem } from "./ServiceCard"
import { ServicesCta } from "./ServicesCta"
import { ICON_MAP } from "../icon-map"
import type { ServicesData } from "../data"
import { Box } from "lucide-react"

interface ServicesBentoProps {
  services: ServicesData["services"]
  cta: ServicesData["cta"]
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}
function resolveService(service: ServicesData["services"][number]): ResolvedServiceItem {
  return {
    ...service,
    Icon: ICON_MAP[service.icon] ?? Box,
    tags: service.tags.map((tag) => ({
      label: tag.label,
      Icon: ICON_MAP[tag.icon] ?? Box,
    })),
  }
}

export function ServicesBento({ services, cta }: Readonly<ServicesBentoProps>): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  // Resolve all icons once — stable references, never inside JSX render path
  const resolved = services.map(resolveService)
  const [frontend, backend, fullstack, api, performance, consulting] = resolved

  return (
    <motion.div
      className="grid grid-cols-1 gap-2.5 lg:grid-cols-3"
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Row 1 */}
      <div className="lg:col-span-2">
        <ServiceCard service={frontend}  variants={itemVariants} forceFullWidth />
      </div>
      <ServiceCard service={backend}     variants={itemVariants} />

      {/* Row 2 */}
      <ServiceCard service={fullstack}   variants={itemVariants} />
      <ServiceCard service={api}         variants={itemVariants} />
      <ServiceCard service={performance} variants={itemVariants} />

      {/* Row 3 */}
      <ServiceCard service={consulting}  variants={itemVariants} />
      <div className="lg:col-span-2">
        <ServicesCta cta={cta} variants={itemVariants} />
      </div>
    </motion.div>
  )
}