// BlogCategoryFilter.tsx

import Link from "next/link";

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory?: string;
}
export function BlogCategoryFilter({
  categories,
  activeCategory,
}: Readonly<BlogCategoryFilterProps>) {
  const baseStyles =
    "rounded-full border px-4 py-2 text-sm font-medium transition-colors";
  const activeStyles = "border-blue-600 bg-blue-600/10 text-blue-400";
  const inactiveStyles =
    "border-white/10 text-slate-400 hover:border-blue-600/40 hover:text-slate-200";

  return (
    <nav aria-label="Filter articles by category">
      <ul className="flex flex-wrap gap-3">
        <li>
          <Link
            href="/blog"
            aria-current={!activeCategory ? "page" : undefined}
            className={`${baseStyles} ${
              !activeCategory ? activeStyles : inactiveStyles
            }`}
          >
            All Articles
          </Link>
        </li>

        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <li key={category}>
              <Link
                href={`/blog?category=${encodeURIComponent(category)}`}
                aria-current={isActive ? "page" : undefined}
                className={`${baseStyles} ${
                  isActive ? activeStyles : inactiveStyles
                }`}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}