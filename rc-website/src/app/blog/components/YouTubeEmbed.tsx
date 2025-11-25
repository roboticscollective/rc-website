"use client";

interface YouTubeEmbedProps {
  url: string;
  title?: string;
}

export function YouTubeEmbed({ url, title }: YouTubeEmbedProps) {
  const getVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  const videoId = getVideoId(url);
  
  if (!videoId) {
    return (
      <div className="bg-card border border-red-500/20 rounded-lg p-6 text-center">
        <p className="text-red-400">Invalid YouTube URL</p>
        <p className="text-sm text-gray-500 mt-2">{url}</p>
      </div>
    );
  }

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <div className="my-8">
      {title && (
        <h3 className="text-lg font-semibold mb-4 text-center text-gray-200">
          {title}
        </h3>
      )}
      <div className="relative w-full overflow-hidden rounded-lg bg-black shadow-lg">
        <div className="relative pb-[56.25%] h-0"> {/* 16:9 aspect ratio */}
          <iframe
            src={embedUrl}
            title={title || "YouTube video"}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}