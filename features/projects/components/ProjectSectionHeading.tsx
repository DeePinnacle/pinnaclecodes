import { JSX } from "react/jsx-runtime"

interface ProjectSectionHeadingProps {
  id: string
  eyebrow: string
  title: string
}

export function ProjectSectionHeading({
  id,
  eyebrow,
  title,
}: Readonly<ProjectSectionHeadingProps>): JSX.Element {
  return (
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-3">
        <div className="h-px w-7 bg-blue-600" aria-hidden="true" />
        <span className="text-[11px] font-medium uppercase tracking-widest text-blue-400">{eyebrow}</span>
      </div>
      <h2 id={id} className="text-2xl font-semibold tracking-tight text-white">
        {title}
      </h2>
    </div>
  )
}