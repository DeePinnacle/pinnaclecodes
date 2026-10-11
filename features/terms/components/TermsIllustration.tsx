interface TermsIllustrationProps {
  className?: string
}

/** Decorative, static illustration. Colors come from design tokens via CSS variables. */
export function TermsIllustration({ className }: TermsIllustrationProps) {
  return (
    <svg
      viewBox="0 0 320 260"
      className={className}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="terms-shield-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--color-accent-hover)" />
          <stop offset="1" stopColor="var(--color-accent)" />
        </linearGradient>
      </defs>

      <ellipse cx="160" cy="226" rx="132" ry="22" className="fill-accent/15 stroke-accent" strokeWidth="2" />
      <ellipse cx="160" cy="226" rx="96" ry="14" className="fill-accent/20 stroke-accent-hover" strokeWidth="1" />

      <g className="drop-shadow-glow">
        <rect x="84" y="20" width="150" height="186" rx="12" className="fill-surface-raised stroke-accent" strokeWidth="2" />
        <rect x="100" y="68" width="112" height="6" rx="3" className="fill-accent-hover/70" />
        <rect x="100" y="86" width="92" height="6" rx="3" className="fill-accent-hover/70" />
        <rect x="100" y="104" width="112" height="6" rx="3" className="fill-accent-hover/70" />
        <rect x="100" y="122" width="72" height="6" rx="3" className="fill-accent-hover/70" />
        <path
          d="M130 178 q10 -22 20 -6 t20 -2 t22 -8"
          fill="none"
          className="stroke-accent-hover"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      <g className="drop-shadow-glow">
        <path
          d="M80 100 L120 114 V152 C120 180 100 196 80 206 C60 196 40 180 40 152 V114 Z"
          fill="url(#terms-shield-gradient)"
          className="stroke-accent-hover"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <path
          d="M62 152 L76 166 L102 136"
          fill="none"
          className="stroke-foreground"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      <g transform="rotate(25 251 100)">
        <rect x="244" y="40" width="14" height="110" rx="4" fill="url(#terms-shield-gradient)" />
        <path d="M244 150 L258 150 L251 172 Z" className="fill-foreground" />
      </g>
    </svg>
  )
}