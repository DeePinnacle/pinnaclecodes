import { BlogHeader } from "./BlogHeader";
import { BlogGrid } from "./BlogGrid";
import { ViewAllArticles } from "./ViewAllArticles";

export function BlogSection() {
  return (
    <section
      id="blog"
      className="py-24"
    >
      <div className="container mx-auto max-w-7xl px-6">
        <BlogHeader />

        <div className="mt-14">
          <BlogGrid />
        </div>

        <ViewAllArticles />
      </div>
    </section>
  );
}