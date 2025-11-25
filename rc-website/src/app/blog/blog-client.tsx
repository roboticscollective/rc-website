"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { buildImageUrl, type BlogPost } from "@/lib/sanity";
import Image from "next/image";

type BlogCategory = "all" | "robotics" | "ai-ml" | "open-source" | "community" | "events" | "research" | "tutorials";

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
      className={`text-xs px-2 py-1 rounded-full border ${getBadgeClasses()} font-medium`}
    >
      {formatCategory(category)}
    </span>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  const imageUrl = buildImageUrl(post.featuredImage);
  const publishedDate = new Date(post.publishedAt);
  
  return (
    <article className="bg-card rounded-3xl overflow-hidden group transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg flex flex-col h-full">
      <Link href={`/blog/${post.slug.current}`}>
        <div className="h-48 overflow-hidden relative bg-gray-800 flex items-center justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          ) : (
            <div className="text-gray-500 text-lg">📝</div>
          )}
          <div className="absolute top-3 left-3">
            {post.categories && post.categories.length > 0 && (
              <CategoryBadge category={post.categories[0]} />
            )}
          </div>
          {post.readingTime && (
            <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {post.readingTime} min
            </div>
          )}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/blog/${post.slug.current}`}>
          <h2 className="text-xl font-bold mb-2 text-primary hover:text-primary/80 line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-300 mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-secondary px-2 py-1 rounded-full text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
              {buildImageUrl(post.author.image || post.author.imageUrl) ? (
                <Image
                  src={buildImageUrl(post.author.image || post.author.imageUrl)}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-4 h-4 text-gray-400" />
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-200">{post.author.name}</span>
              <div className="flex items-center text-xs text-gray-400">
                <Calendar className="w-3 h-3 mr-1" />
                {publishedDate.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>

          <Link href={`/blog/${post.slug.current}`}>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary p-2 group hover:bg-transparent"
            >
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};

interface BlogClientPageProps {
  posts: BlogPost[];
}

export function BlogClientPage({ posts }: BlogClientPageProps) {
  const [activeFilter, setActiveFilter] = useState<BlogCategory>("all");
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => 
          post.categories && post.categories.includes(activeFilter)
        )
      );
    }
  }, [activeFilter, posts]);

  const categories: { value: BlogCategory; label: string; color: string }[] = [
    { value: "all", label: "All Posts", color: "text-primary border-primary" },
    { value: "robotics", label: "Robotics", color: "text-blue-500 border-blue-500" },
    { value: "ai-ml", label: "AI & ML", color: "text-purple-500 border-purple-500" },
    { value: "tutorials", label: "Tutorials", color: "text-cyan-500 border-cyan-500" },
    { value: "research", label: "Research", color: "text-indigo-500 border-indigo-500" },
    { value: "community", label: "Community", color: "text-yellow-500 border-yellow-500" },
    { value: "open-source", label: "Open Source", color: "text-green-500 border-green-500" },
  ];

  const featuredPost = posts[0]; // Most recent post as featured

  return (
    <div className="min-h-screen bg-background">
      <div className="">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Blog</span>
              </h1>
              <p className="text-lg text-gray-300">
                Insights, tutorials, and updates from the Robotics Collective community.
                Explore the latest in robotics, AI, and open-source development.
              </p>
            </div>

            {/* Featured Post */}
            {featuredPost && (
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  <span className="text-primary">Featured</span> Post
                </h2>
                <div className="bg-card rounded-3xl overflow-hidden group hover:shadow-xl transition-all duration-300 max-w-4xl mx-auto">
                  <div className="md:flex">
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative bg-gray-800 flex items-center justify-center">
                      {buildImageUrl(featuredPost.featuredImage) ? (
                        <Image
                          src={buildImageUrl(featuredPost.featuredImage)}
                          alt={featuredPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="text-gray-500 text-4xl">📝</div>
                      )}
                    </div>
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        {featuredPost.categories && featuredPost.categories[0] && (
                          <CategoryBadge category={featuredPost.categories[0]} />
                        )}
                        {featuredPost.readingTime && (
                          <div className="ml-3 flex items-center text-sm text-gray-400">
                            <Clock className="w-4 h-4 mr-1" />
                            {featuredPost.readingTime} min read
                          </div>
                        )}
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-primary">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-700 flex items-center justify-center">
                            {buildImageUrl(featuredPost.author.image || featuredPost.author.imageUrl) ? (
                              <Image
                                src={buildImageUrl(featuredPost.author.image || featuredPost.author.imageUrl)}
                                alt={featuredPost.author.name}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <User className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-gray-200">{featuredPost.author.name}</p>
                            <p className="text-sm text-gray-400">
                              {new Date(featuredPost.publishedAt).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Link href={`/blog/${featuredPost.slug.current}`}>
                          <Button variant="default" className="rounded-full">
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={activeFilter === category.value ? "outline" : "ghost"}
                  className={`rounded-full ${
                    activeFilter === category.value
                      ? category.color
                      : `hover:${category.color.replace("text-", "text-").replace("border-", "bg-")}/10`
                  }`}
                  onClick={() => setActiveFilter(category.value)}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(featuredPost ? 1 : 0).map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-400">
                  No posts found in this category
                </h3>
                <p className="mt-2 text-gray-500">
                  Try another category or view all posts
                </p>
              </div>
            )}

            {/* CTA Section */}
            <div className="mt-24 bg-card rounded-lg p-8 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Want to Contribute?
              </h2>
              <p className="text-gray-300 mb-6">
                Share your robotics insights and tutorials with our community.
                We're always looking for valuable content from industry experts and researchers.
              </p>
              <Link href="/contact">
                <Button 
                  variant="default" 
                  className="px-8 py-6 text-lg rounded-3xl"
                  size="lg"
                >
                  Submit an Article
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}