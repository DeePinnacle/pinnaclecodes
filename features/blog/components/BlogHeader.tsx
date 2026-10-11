export function BlogHeader() {
  return (
    <div className="max-w-3xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="h-px w-10 bg-blue-600" />

        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
          Insights & Articles
        </span>
      </div>

      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        Engineering Insights, Architecture Decisions & Development Notes.
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-slate-400">
        Thoughts on software architecture, frontend engineering,
        backend systems, performance optimization, and lessons
        learned from building real-world applications.
      </p>
    </div>
  );
}