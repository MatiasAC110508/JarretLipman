"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import type { VideoItem } from "@/data/videos";
import { VIDEOS } from "@/data/videos";

export function VideoPlaylist({
  activeVideo,
  isPlaying,
  setActiveVideo,
  setIsPlaying,
}: {
  activeVideo: VideoItem;
  isPlaying: boolean;
  setActiveVideo: (video: VideoItem) => void;
  setIsPlaying: (state: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="w-full lg:w-[35%] flex flex-col h-full"
    >
      <div className="bg-white rounded-3xl p-5 shadow-xl shadow-brand-900/5 ring-1 ring-brand-100 flex flex-col h-[500px] overflow-hidden">
        <div className="flex items-center justify-between mb-4 px-2">
          <h3 className="font-display font-bold text-xl text-brand-950">
            Up Next
          </h3>
          <span className="text-sm font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
            {VIDEOS.length} videos
          </span>
        </div>

        <div className="flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar flex-1 pb-4">
          {VIDEOS.map((video) => {
            const isActive = activeVideo.title === video.title;
            return (
              <button
                key={video.title}
                onClick={() => {
                  setActiveVideo(video);
                  setIsPlaying(true);
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth < 1024
                  ) {
                    document
                      .getElementById("video-player")
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`group relative flex gap-4 p-3 rounded-2xl transition-all duration-300 text-left items-center ${
                  isActive
                    ? "bg-brand-50 shadow-sm ring-1 ring-brand-200"
                    : "hover:bg-brand-50 hover:ring-1 hover:ring-brand-100"
                }`}
              >
                <div className="relative w-28 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm">
                  <div className="absolute inset-0 bg-brand-900/10 z-10 group-hover:bg-transparent transition-colors" />
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {isActive && isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-brand-900/60 backdrop-blur-[2px]">
                      <div className="flex items-end gap-1 h-4">
                        <div className="w-1.5 bg-brand-400 animate-[bounce_1s_infinite_0ms] rounded-full h-full" />
                        <div className="w-1.5 bg-brand-400 animate-[bounce_1s_infinite_200ms] rounded-full h-2/3" />
                        <div className="w-1.5 bg-brand-400 animate-[bounce_1s_infinite_400ms] rounded-full h-4/5" />
                      </div>
                    </div>
                  )}
                  {!isActive && (
                    <div className="absolute bottom-1.5 right-1.5 w-6 h-6 rounded-full bg-brand-950/70 backdrop-blur-md flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                      <Play
                        className="w-3 h-3 text-white ml-0.5"
                        fill="currentColor"
                      />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0 pr-2">
                  <h4
                    className={`text-sm font-semibold line-clamp-2 leading-snug transition-colors ${
                      isActive
                        ? "text-brand-700"
                        : "text-brand-900 group-hover:text-brand-700"
                    }`}
                  >
                    {video.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
