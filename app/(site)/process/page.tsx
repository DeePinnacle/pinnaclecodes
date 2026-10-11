import type { JSX } from 'react'
import { ProcessHero } from '@/features/process/components/ProcessHero'
import { ProcessInfo } from '@/features/process/components/ProcessInfo'
import { ProcessSection, processSteps } from "@/features/process";


export default function ProcessPage(): JSX.Element {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <ProcessHero />
      <ProcessSection steps={processSteps} />
      <ProcessInfo />
    </div>
  )
}