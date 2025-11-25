"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { buildImageUrl } from "@/lib/sanity";
import { YouTubeEmbed } from "./YouTubeEmbed";
import { VideoPlayer } from "./VideoPlayer";

interface BlogContentProps {
  content: any[];
}

const components = {
  types: {
    image: ({ value }: { value: any }) => {
      const imageUrl = buildImageUrl(value);
      if (!imageUrl) {
        return (
          <div className="my-8">
            <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-4xl">🖼️</div>
            </div>
            {value.caption && (
              <p className="text-sm text-gray-400 text-center mt-3 italic">
                {value.caption}
              </p>
            )}
          </div>
        );
      }
      return (
        <div className="my-8">
          <div className="relative w-full overflow-hidden rounded-lg">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog image"}
              width={800}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
          {value.caption && (
            <p className="text-sm text-gray-400 text-center mt-3 italic">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
    youtube: ({ value }: { value: { url: string; title?: string } }) => (
      <YouTubeEmbed url={value.url} title={value.title} />
    ),
    video: ({ value }: { value: { file: any; caption?: string; poster?: any } }) => (
      <VideoPlayer file={value.file} caption={value.caption} poster={value.poster} />
    ),
  },
  block: {
    normal: ({ children }: { children: any }) => (
      <p className="mb-6 text-gray-300 leading-relaxed">{children}</p>
    ),
    h1: ({ children }: { children: any }) => (
      <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-12 text-primary">
        {children}
      </h1>
    ),
    h2: ({ children }: { children: any }) => (
      <h2 className="text-2xl md:text-3xl font-bold mb-5 mt-10 text-gray-100">
        {children}
      </h2>
    ),
    h3: ({ children }: { children: any }) => (
      <h3 className="text-xl md:text-2xl font-bold mb-4 mt-8 text-gray-100">
        {children}
      </h3>
    ),
    h4: ({ children }: { children: any }) => (
      <h4 className="text-lg md:text-xl font-bold mb-3 mt-6 text-gray-100">
        {children}
      </h4>
    ),
    blockquote: ({ children }: { children: any }) => (
      <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-card/50 italic text-gray-300 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children: any }) => (
      <strong className="font-bold text-gray-100">{children}</strong>
    ),
    em: ({ children }: { children: any }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children: any }) => (
      <code className="bg-gray-800 px-2 py-1 rounded text-sm font-mono text-primary">
        {children}
      </code>
    ),
    accent: ({ children }: { children: any }) => (
      <span className="text-primary font-medium">{children}</span>
    ),
    link: ({ children, value }: { children: any; value?: { href: string; blank?: boolean } }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : "_self"}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children: any }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-gray-300 ml-4">
        {children}
      </ul>
    ),
    number: ({ children }: { children: any }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-300 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: any }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children: any }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
};

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none prose-invert">
      <PortableText value={content} components={components} />
    </div>
  );
}