import {
  BlogHeader,
  BlogCategoryFilter,
  BlogArchiveGrid,
} from "@/features/blog";
import { blogPosts } from "@/features/blog/data";

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({
  searchParams,
}: Readonly<BlogPageProps>) {
  const { category } = await searchParams;

  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  ).sort((a, b) => a.localeCompare(b));

  const isValidCategory = category ? categories.includes(category) : false;
  const activeCategory = isValidCategory ? category : undefined;

  const filteredPosts = activeCategory
    ? blogPosts.filter((post) => post.category === activeCategory)
    : blogPosts;

  return (
    <main className="bg-dark-primary py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <BlogHeader />

        <div className="mt-12 flex flex-col gap-6 border-b border-white/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <BlogCategoryFilter
            categories={categories}
            activeCategory={activeCategory}
          />

          <p className="text-sm text-slate-500">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "article" : "articles"}
          </p>
        </div>

        <div className="mt-14">
          <BlogArchiveGrid posts={filteredPosts} />
        </div>
      </div>
    </main>
  );
}