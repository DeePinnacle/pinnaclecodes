import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ViewAllArticles() {
  return (
    <div className="mt-12 flex justify-end">
      <Link
        href="/blog"
        className="group inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-colors hover:text-blue-400"
      >
        View All Articles

        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
}