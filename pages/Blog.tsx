import { PageTransition } from "@/components/PageTransition";
import { BlogCard } from "@/components/BlogCard";
import { blogPosts } from "@/data/dummy";

export default function Blog() {
  return (
    <PageTransition className="pt-24 pb-12 bg-background">
      <div className="bg-muted/30 py-16 border-b border-border mb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">The Journal</h1>
          <p className="text-muted-foreground max-w-3xl text-lg md:text-xl leading-relaxed">
            Market insights, architectural trends, and perspectives on luxury living from the experts at Luxe Estates.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-24">
        {/* Featured Post (First one) */}
        {blogPosts.length > 0 && (
          <div className="mb-16">
            <BlogCard post={blogPosts[0]} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
