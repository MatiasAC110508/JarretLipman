"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-950/80" />
        <img
          src="/section_group_photo.jpeg"
          alt="Band Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="text-accent-400 font-semibold tracking-wider uppercase text-sm mb-4">
            Meet Jarrett Lipman
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 text-balance">
            Director, Coach, & Educator.
          </h1>
          <p className="text-brand-100 text-lg md:text-xl leading-relaxed font-light text-balance max-w-2xl">
            Jarrett Lipman is the Director of Bands at Vandegrift High School in
            Austin, Texas, and the Brass Caption Manager for the Boston
            Crusaders.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
