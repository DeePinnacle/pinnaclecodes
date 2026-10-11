"use client"

import { JSX, useEffect, useRef } from "react"
import { motion, useReducedMotion } from "motion/react"

interface TerminalLine {
  type: "cmd" | "out" | "spacer" | "prompt-only"
  text?: string
}

const LEFT_LINES: TerminalLine[] = [
  { type: "cmd", text: "const developer = {" },
  { type: "out", text: '<span class="key">name</span><span class="val">:</span>      <span class="str">"Lawal Kamaldeen"</span><span class="val">,</span>' },
  { type: "out", text: '<span class="key">role</span><span class="val">:</span>      <span class="str">"Full Stack Developer"</span><span class="val">,</span>' },
  { type: "out", text: '<span class="key">based</span><span class="val">:</span>     <span class="str">"Nigeria"</span><span class="val">,</span>' },
  { type: "out", text: '<span class="key">available</span><span class="val">:</span> <span class="bool">true</span><span class="val">,</span>' },
  { type: "spacer" },
  { type: "out", text: '<span class="key">stack</span><span class="val">:</span> [' },
  { type: "out", text: '&nbsp;&nbsp;<span class="str">"Next.js"</span><span class="val">,</span> <span class="str">"React"</span><span class="val">,</span>' },
  { type: "out", text: '&nbsp;&nbsp;<span class="str">"TypeScript"</span><span class="val">,</span> <span class="str">"Node.js"</span><span class="val">,</span>' },
  { type: "out", text: '&nbsp;&nbsp;<span class="str">"MongoDB"</span><span class="val">,</span> <span class="str">"Tailwind"</span>' },
  { type: "out", text: ']<span class="val">,</span>' },
  { type: "spacer" },
  { type: "out", text: '<span class="key">yearsExp</span><span class="val">:</span> <span class="num">3</span><span class="val">,</span>' },
  { type: "out", text: '<span class="key">projects</span><span class="val">:</span> <span class="num">20</span><span class="val">,</span>' },
  { type: "cmd", text: "}" },
]

const RIGHT_LINES: TerminalLine[] = [
  { type: "cmd", text: "const values = {" },
  { type: "out", text: '<span class="comment">// what drives me</span>' },
  { type: "out", text: '<span class="key">mission</span><span class="val">:</span>' },
  { type: "out", text: '&nbsp;&nbsp;<span class="str">"Build products that matter"</span><span class="val">,</span>' },
  { type: "spacer" },
  { type: "out", text: '<span class="key">approach</span><span class="val">:</span> [' },
  { type: "out", text: '&nbsp;&nbsp;<span class="str">"Problem-first thinking"</span><span class="val">,</span>' },
  { type: "out", text: '&nbsp;&nbsp;<span class="str">"Clean architecture"</span><span class="val">,</span>' },
  { type: "out", text: '&nbsp;&nbsp;<span class="str">"Continuous learning"</span><span class="val">,</span>' },
  { type: "out", text: '&nbsp;&nbsp;<span class="str">"Ship &amp; iterate"</span>' },
  { type: "out", text: ']<span class="val">,</span>' },
  { type: "spacer" },
  { type: "out", text: '<span class="key">goal</span><span class="val">:</span>' },
  { type: "out", text: '&nbsp;&nbsp;<span class="str">"Senior role or dream client"</span>' },
  { type: "cmd", text: "}" },
  { type: "prompt-only" },
]

/** Delay in ms per line type */
const DELAY: Record<TerminalLine["type"], number> = {
  cmd: 300,
  out: 90,
  spacer: 60,
  "prompt-only": 90,
}

function appendLine(line: TerminalLine, container: HTMLElement): void {
  if (line.type === "spacer") {
    const el = document.createElement("div")
    el.style.height = "6px"
    container.appendChild(el)
    return
  }
  if (line.type === "prompt-only") {
    const el = document.createElement("div")
    el.className = "terminal-line"
    el.innerHTML = '<span class="terminal-prompt">❯</span><span class="terminal-cursor"></span>'
    container.appendChild(el)
    return
  }
  const el = document.createElement("div")
  if (line.type === "cmd") {
    el.className = "terminal-line"
    el.innerHTML = `<span class="terminal-prompt">❯</span><span class="terminal-cmd">${line.text ?? ""}</span>`
  } else {
    el.className = "terminal-out"
    el.innerHTML = line.text ?? ""
  }
  container.appendChild(el)
}

/**
 * Types a column of lines one at a time. Returns a stop function that clears the
 * pending timeout, so a re-run of the effect (Strict Mode, navigating back) can
 * never leave an old loop appending into the same container.
 */
function animateCol(
  lines: TerminalLine[],
  container: HTMLElement,
  startDelay: number,
): () => void {
  let index = 0
  let timeoutId: ReturnType<typeof setTimeout>

  const tick = (): void => {
    const line = lines[index]
    if (!line) return

    appendLine(line, container)
    index++
    timeoutId = setTimeout(tick, DELAY[line.type])
  }

  timeoutId = setTimeout(tick, startDelay)

  return () => clearTimeout(timeoutId)
}

/** No props needed — all content is static */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface AboutVisualProps {}

export function AboutVisual(_props: AboutVisualProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion()
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const left = leftRef.current
    const right = rightRef.current
    if (!left || !right) return

    // Start clean so a re-run never stacks new lines on top of old ones
    left.replaceChildren()
    right.replaceChildren()

    if (shouldReduceMotion) {
      /** Skip animation — render all lines immediately */
      LEFT_LINES.forEach((line) => appendLine(line, left))
      RIGHT_LINES.forEach((line) => appendLine(line, right))
      return
    }

    const stopLeft = animateCol(LEFT_LINES, left, 400)
    const stopRight = animateCol(RIGHT_LINES, right, 600)

    return () => {
      stopLeft()
      stopRight()
    }
  }, [shouldReduceMotion])

  const wrapperVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <>
      {/* Scoped styles injected once alongside the component */}
      <style>{`
        .terminal-line  { display: flex; align-items: baseline; font-size: 13px; line-height: 1.85; }
        .terminal-out   { padding-left: 20px; font-size: 13px; line-height: 1.85; color: #4b5563; }
        .terminal-prompt { color: #2563eb; margin-right: 8px; flex-shrink: 0; }
        .terminal-cmd   { color: #60a5fa; }
        .terminal-out .val  { color: #e5e7eb; }
        .terminal-out .str  { color: #34d399; }
        .terminal-out .key  { color: #93c5fd; }
        .terminal-out .num  { color: #f59e0b; }
        .terminal-out .bool { color: #a78bfa; }
        .terminal-out .comment { color: #2d3d52; }
        .terminal-cursor {
          display: inline-block; width: 7px; height: 13px;
          background: #2563eb; vertical-align: middle; margin-left: 2px;
          animation: terminal-blink 1s step-end infinite;
        }
        @keyframes terminal-blink { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>

      <motion.div
        variants={shouldReduceMotion ? {} : wrapperVariants}
        initial={shouldReduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        transition={{ ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full"
      >
        {/* Terminal window */}
        <div
          className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#0d0d0d]"
          style={{ boxShadow: "0 0 40px rgba(37,99,235,0.08), 0 0 0 1px rgba(37,99,235,0.06)" }}
          role="img"
          aria-label="Animated terminal showing Lawal Kamaldeen's developer profile"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-gray-800 bg-[#141414] px-4 py-3">
            <span className="h-2.75 w-2.75 rounded-full bg-[#ff5f57]" aria-hidden="true" />
            <span className="h-2.75 w-2.75 rounded-full bg-[#febc2e]" aria-hidden="true" />
            <span className="h-2.75 w-2.75 rounded-full bg-[#28c840]" aria-hidden="true" />
            <span className="ml-2 font-mono text-xs text-gray-600">about-lawal.ts</span>
          </div>

          {/* Body — single column on mobile, two columns on md+ */}
          <div className="grid grid-cols-1 gap-x-10 px-5 py-5 font-mono md:grid-cols-2 md:px-7 md:py-6">
            <div ref={leftRef} className="flex flex-col" />
            <div
              ref={rightRef}
              className="mt-4 flex flex-col border-t border-gray-800/60 pt-4 md:mt-0 md:border-l md:border-t-0 md:pl-10 md:pt-0"
            />
          </div>
        </div>
      </motion.div>
    </>
  )
}