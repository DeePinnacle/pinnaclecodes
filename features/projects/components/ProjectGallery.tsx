import type { Project } from "../types"
import { ProjectImage } from "./ProjectImage"
import { ProjectReveal } from "./ProjectReveal"
import { ProjectSectionHeading } from "./ProjectSectionHeading"
import { JSX } from "react/jsx-runtime"

interface ProjectGalleryProps {
  project: Project
}

const FRAME_CLASS =
  "relative aspect-video overflow-hidden rounded-2xl border border-gray-800 bg-[#0d1117]"

/** Cover image leads; any extra `gallery` screenshots follow in a two-column grid. */
export function ProjectGallery({ project }: Readonly<ProjectGalleryProps>): JSX.Element {
  const { coverImage, gallery = [], title } = project
  const extraImages = gallery.filter((src) => src !== coverImage)

  return (
    <section aria-labelledby="gallery-heading">
      <ProjectSectionHeading id="gallery-heading" eyebrow="Preview" title="Screenshots" />

      <div className="flex flex-col gap-4">
        <ProjectReveal className={FRAME_CLASS}>
          <ProjectImage
            src={coverImage}
            alt={`${title} main screenshot`}
            title={title}
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </ProjectReveal>

        {extraImages.length > 0 && (
          <ul className="grid gap-4 sm:grid-cols-2">
            {extraImages.map((src, index) => (
              <li key={src}>
                <ProjectReveal className={FRAME_CLASS}>
                  <ProjectImage
                    src={src}
                    alt={`${title} screenshot ${index + 2}`}
                    title={title}
                    sizes="(max-width: 640px) 100vw, 512px"
                  />
                </ProjectReveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}