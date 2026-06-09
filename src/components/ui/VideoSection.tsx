"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { VIDEOS } from "@/data/videos";
import { VideoPlayer } from "@/components/ui/video/VideoPlayer";
import { VideoPlaylist } from "@/components/ui/video/VideoPlaylist";

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 bg-gradient-to-b from-brand-50/50 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 font-semibold text-sm tracking-wide uppercase mb-4 shadow-sm border border-brand-200/50">
            Featured Media
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-950 mb-6 drop-shadow-sm">
            Watch & Learn
          </h2>
          <p className="text-lg text-brand-700 max-w-2xl mx-auto leading-relaxed">
            Explore insights on culture, leadership, and musical excellence from
            clinics and performances.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start max-w-7xl mx-auto">
          <VideoPlayer
            activeVideo={activeVideo}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
          <VideoPlaylist
            activeVideo={activeVideo}
            isPlaying={isPlaying}
            setActiveVideo={setActiveVideo}
            setIsPlaying={setIsPlaying}
          />
        </div>
      </div>
    </section>
  );
}
