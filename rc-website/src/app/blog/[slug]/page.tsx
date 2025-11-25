import { getBlogPostBySlug, getAllBlogSlugs, getRelatedBlogPosts } from "@/lib/sanity-queries";
import { buildImageUrl, type BlogPost } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogContent } from "../components/BlogContent";
import { BackToBlogButton } from "../components/BackToBlogButton";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: "Post Not Found | Robotics Collective",
    };
  }

  const title = post.seo?.metaTitle || post.title;
  const description = post.seo?.metaDescription || post.excerpt;
  const imageUrl = buildImageUrl(post.seo?.socialImage || post.featuredImage);
  
  return {
    title: `${title} | Robotics Collective Blog`,
    description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: imageUrl ? [{ url: imageUrl, alt: post.title }] : undefined,
      siteName: "Robotics Collective",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
    alternates: {
      canonical: post.seo?.canonicalUrl || `/blog/${post.slug.current}`,
    },
  };
}

const CategoryBadge = ({ category }: { category: string }) => {
  const getBadgeClasses = () => {
    switch (category) {
      case "robotics":
        return "bg-blue-500/20 text-blue-500 border-blue-500";
      case "ai-ml":
        return "bg-purple-500/20 text-purple-500 border-purple-500";
      case "open-source":
        return "bg-green-500/20 text-green-500 border-green-500";
      case "community":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500";
      case "events":
        return "bg-red-500/20 text-red-500 border-red-500";
      case "research":
        return "bg-indigo-500/20 text-indigo-500 border-indigo-500";
      case "tutorials":
        return "bg-cyan-500/20 text-cyan-500 border-cyan-500";
      default:
        return "bg-gray-500/20 text-gray-500 border-gray-500";
    }
  };

  const formatCategory = (cat: string) => {
    switch (cat) {
      case "ai-ml":
        return "AI & ML";
      case "open-source":
        return "Open Source";
      default:
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }
  };

  return (
    <span
      className={`text-sm px-3 py-1 rounded-full border ${getBadgeClasses()} font-medium`}
    >
      {formatCategory(category)}
    </span>
  );
};

const RelatedPostCard = ({ post }: { post: BlogPost }) => {
  const imageUrl = buildImageUrl(post.featuredImage);
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <article className="bg-card rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
        <div className="h-40 overflow-hidden relative bg-gray-800 flex items-center justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="text-gray-500 text-2xl">📝</div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2 mb-3">{post.excerpt}</p>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            {new Date(post.publishedAt).toLocaleDateString()}
            {post.readingTime && (
              <>
                <Clock className="w-3 h-3 ml-3 mr-1" />
                {post.readingTime} min
              </>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedBlogPosts(
    post._id, 
    post.categories || [], 
    3
  );

  const publishedDate = new Date(post.publishedAt);
  const featuredImageUrl = buildImageUrl(post.featuredImage);

  return (
    <div className="min-h-screen bg-background">
      <article>
        {/* Header */}
        <header className="relative">
          <BackToBlogButton />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="max-w-4xl mx-auto">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-6">
                {post.categories?.map((category) => (
                  <CategoryBadge key={category} category={category} />
                ))}
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
                    {buildImageUrl(post.author.image || post.author.imageUrl) ? (
                      <Image
                        src={buildImageUrl(post.author.image || post.author.imageUrl)}
                        alt={post.author.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-6 h-6 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-200">{post.author.name}</p>
                    <p className="text-sm text-gray-400">{post.author.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {publishedDate.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  {post.readingTime && (
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {post.readingTime} min read
                    </div>
                  )}
                </div>
              </div>

              {/* Featured Image */}
              {featuredImageUrl ? (
                <div className="mb-12">
                  <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg">
                    <Image
                      src={featuredImageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              ) : (
                <div className="mb-12">
                  <div className="w-full h-64 md:h-96 bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-gray-500 text-6xl">📝</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <BlogContent content={post.content} />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-800">
                <h3 className="text-sm font-semibold text-gray-400 mb-4">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm bg-secondary px-3 py-1 rounded-full text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-700 flex items-center justify-center">
                  {buildImageUrl(post.author.image || post.author.imageUrl) ? (
                    <Image
                      src={buildImageUrl(post.author.image || post.author.imageUrl)}
                      alt={post.author.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {post.author.name}
                  </h3>
                  <p className="text-gray-400 mb-2">{post.author.role}</p>
                  {post.author.bio && (
                    <p className="text-gray-300 leading-relaxed">{post.author.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-card/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  Related <span className="text-primary">Articles</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <RelatedPostCard key={relatedPost._id} post={relatedPost} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </article>
    </div>
  );
}