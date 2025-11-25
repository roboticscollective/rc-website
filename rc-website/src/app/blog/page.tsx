import { getAllBlogPosts } from "@/lib/sanity-queries";
import { BlogClientPage } from "./blog-client";
import { metadata } from "./metadata";

export { metadata };

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return <BlogClientPage posts={posts} />;
}