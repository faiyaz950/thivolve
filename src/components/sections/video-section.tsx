
"use client";

// Note: For true background video behavior with YouTube (especially looping and autplaying reliably across all browsers),
// you might need to use the YouTube Iframe Player API for more control.
// This basic iframe embed attempts to achieve a similar effect with URL parameters.

export function VideoSection() {
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
    <section className="relative w-full h-[30rem] md:h-[40rem] lg:h-[50rem] overflow-hidden group">
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
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight shadow-text">
          Btruss: Your Partner in <span className="text-primary">Digital Transformation</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 shadow-text">
          Leveraging cutting-edge technology to build innovative solutions for a smarter future.
        </p>
      </div>
      <style jsx>{`
        .shadow-text {
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
      `}</style>
    </section>
  );
}
