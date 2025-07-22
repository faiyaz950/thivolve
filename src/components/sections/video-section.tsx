"use client";

import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { cn } from '@/lib/utils';

// Note: For true background video behavior with YouTube (especially looping and autplaying reliably across all browsers),
// you might need to use the YouTube Iframe Player API for more control.
// This basic iframe embed attempts to achieve a similar effect with URL parameters.

export function VideoSection() {
  const { ref, isVisible } = useScrollAnimation();
  
  // Replace 'YOUR_YOUTUBE_VIDEO_ID' with the actual ID of your YouTube video
  // For example, if your video URL is https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
  const youtubeVideoId = "QsY8fnvMn6c"; 

  // Parameters for YouTube embed:
  // autoplay=1: Attempt to autoplay (requires mute=1 in most modern browsers)
  // mute=1: Mute the video
  // loop=1&playlist=${youtubeVideoId}: Loop the video (playlist parameter is needed for single video loop)
  // controls=0: Hide player controls
  // showinfo=0: Hide video title and uploader (deprecated, but good for robustness)
  // modestbranding=1: Reduce YouTube logo
  // rel=0: Do not show related videos at the end
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3`;

  return (
    <section 
      ref={ref}
      className={cn(
        "relative w-full h-[30rem] md:h-[40rem] lg:h-[50rem] overflow-hidden group animate-on-scroll",
        isVisible && "is-visible"
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          src={youtubeEmbedUrl}
          title="Btruss Services Showcase"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-4">
        {/* Heading removed as per request */}
      </div>
      <style jsx>{`
        .shadow-text {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
}
