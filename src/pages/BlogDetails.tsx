import { useParams, Link } from "wouter";
import { PageTransition } from "@/components/PageTransition";
import { blogPosts, agents } from "@/data/dummy";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const author = post ? agents.find(a => a.id === post.authorId) : null;
  const recentPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <PageTransition className="pt-32 pb-24 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-8">The article you are looking for does not exist.</p>
        <Button asChild><Link href="/blog">Back to Journal</Link></Button>
      </PageTransition>
    );
  }

  return (
    <PageTransition className="pt-24 pb-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Journal
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider rounded-sm mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-serif text-foreground leading-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm border-y border-border py-4 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                {author && (
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>By {author.name}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-12">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/80 font-serif leading-loose">
              {/* Simulated long-form content */}
              <p className="text-xl text-foreground mb-8">
                {post.excerpt}
              </p>
              <p>{post.content}</p>
              <p>
                In the upper echelons of the real estate market, buyers are no longer simply looking for square footage and premium finishes. They are seeking curated experiences, absolute privacy, and architectural significance. The definition of a trophy asset has fundamentally shifted.
              </p>
              <h3 className="text-2xl font-serif text-foreground mt-12 mb-6">The New Standard of Privacy</h3>
              <p>
                As public profiles grow, so does the need for absolute sanctuary. Properties with dedicated motor courts, private elevator landings, and sophisticated security infrastructures are seeing unprecedented demand. It is not merely about keeping people out; it is about creating an environment where the resident can truly decompress.
              </p>
              <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 italic text-xl text-foreground">
                "The ultimate luxury is peace of mind. A home must serve as an impenetrable retreat from the demands of public life."
              </blockquote>
              <p>
                Furthermore, the integration of wellness facilities has moved from a luxury to a necessity. State-of-the-art spas, dedicated recovery rooms, and advanced air and water purification systems are now standard requests among our clientele.
              </p>
            </div>
            
            {/* Author Bio Box */}
            {author && (
              <div className="mt-16 bg-muted/30 border border-border p-8 rounded-xl flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img src={author.image} alt={author.name} className="w-24 h-24 rounded-full object-cover border-2 border-border" />
                <div>
                  <h4 className="text-lg font-serif font-medium mb-1">About {author.name}</h4>
                  <p className="text-accent text-sm mb-3">{author.title}</p>
                  <p className="text-muted-foreground text-sm">{author.bio}</p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <h3 className="text-xl font-serif mb-6 border-b border-border pb-4">Recent Articles</h3>
              <div className="space-y-6">
                {recentPosts.map((rp) => (
                  <Link key={rp.id} href={`/blog/${rp.slug}`} className="group block">
                    <div className="aspect-[16/9] rounded-lg overflow-hidden mb-3">
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">{rp.category}</div>
                    <h4 className="font-serif text-foreground group-hover:text-accent transition-colors line-clamp-2 leading-snug">{rp.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
