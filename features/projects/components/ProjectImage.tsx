"use client"

import { useState } from "react"
import Image from "next/image"
import { JSX } from "react/jsx-runtime"

interface ProjectImageProps {
  src: string
  alt: string
  title: string
  sizes: string
  priority?: boolean
}

/** Fills its relatively-positioned parent; shows a dot-grid placeholder if the file is missing. */
export function ProjectImage({
  src,
  alt,
  title,
  sizes,
  priority = false,
}: Readonly<ProjectImageProps>): JSX.Element {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 flex items-center justify-center bg-[#0d1829]"
        style={{
          backgroundImage: "radial-gradient(circle, #1e3a5f 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <span className="px-4 text-center text-lg font-semibold text-blue-300/70">{title}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover"
      onError={() => setHasError(true)}
    />
  )
}