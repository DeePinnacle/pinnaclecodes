import { blogPosts } from "../data";
import { BlogCard } from "./BlogCard";
import { FeaturedBlogCard } from "./FeaturedBlogCard";

const featuredPost = blogPosts.find(
  (post) => post.featured
)!;

const secondaryPosts = blogPosts.filter(
  (post) => !post.featured
);

export function BlogGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
      <FeaturedBlogCard post={featuredPost} />

      <div className="space-y-6">
        {secondaryPosts.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
}