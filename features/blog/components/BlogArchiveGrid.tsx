// BlogArchiveGrid.tsx

import { BlogPost } from "../types";
import { BlogCard } from "./BlogCard";
import { FeaturedBlogCard } from "./FeaturedBlogCard";

interface BlogArchiveGridProps {
  posts: BlogPost[];
}
export function BlogArchiveGrid({ posts }: Readonly<BlogArchiveGridProps>) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-white/10 bg-white/2 px-8 py-16 text-center">
        <p className="text-lg font-semibold text-white">
          No articles in this category yet
        </p>
        <p className="mt-2 text-sm text-slate-400">
          Choose a different category above, or check back soon — new posts
          are added regularly.
        </p>
      </div>
    );
  }

  const featuredPost = posts.find((post) => post.featured);
  const remainingPosts = featuredPost
    ? posts.filter((post) => post.id !== featuredPost.id)
    : posts;

  return (
    <div className="space-y-10">
      {featuredPost && <FeaturedBlogCard post={featuredPost} />}

      {remainingPosts.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remainingPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}