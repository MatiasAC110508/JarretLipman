"use client";

import { Play } from "lucide-react";
import { motion } from "framer-motion";
import type { VideoItem } from "@/data/videos";

export function VideoPlayer({
  activeVideo,
  isPlaying,
  setIsPlaying,
}: {
  activeVideo: VideoItem;
  isPlaying: boolean;
  setIsPlaying: (state: boolean) => void;
}) {
  return (
    <motion.div
      id="video-player"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="w-full lg:w-[65%] flex-shrink-0 scroll-mt-24"
    >
      <div className="group relative rounded-3xl overflow-hidden bg-brand-950 shadow-2xl shadow-brand-900/15 ring-1 ring-brand-900/5 transition-all duration-500 hover:shadow-brand-900/25">
        <div className="aspect-video relative flex flex-col">
          {isPlaying ? (
            <iframe
              src={activeVideo.embed}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="w-full h-full absolute inset-0 border-0"
            />
          ) : (
            <div
              className="w-full h-full relative cursor-pointer"
              onClick={() => setIsPlaying(true)}
            >
              <img
                src={activeVideo.thumb}
                alt={activeVideo.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-transparent flex flex-col justify-end p-8 transition-opacity duration-500">
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center ring-1 ring-white/30 group-hover:bg-brand-600/90 group-hover:ring-brand-400 group-hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                    <Play
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white -translate-x-0.6 transition-transform duration-300 group-hover:scale-105"
                      fill="currentColor"
                    />
                  </div>
                </div>

                <h3 className="text-white font-display text-2xl sm:text-3xl font-bold tracking-tight drop-shadow-md relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {activeVideo.title}
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
