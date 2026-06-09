"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
  { src: "/hero_vandegrift.jpg", alt: "Vandegrift High School" },
  { src: "/hero_bac_low_brass.jpg", alt: "Boston Crusaders Low Brass" },
  {
    src: "/hero_gino_jim_ott_award.jpg",
    alt: "Jarrett and Gino Jim Ott Award",
  },
];

export function HeroSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // 6s rotation
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Slider */}
      {HERO_IMAGES.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIdx ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <div className="absolute inset-0 bg-brand-950/70 z-10" />{" "}
          {/* Dark Overlay */}
          <motion.img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.05 }}
            animate={{ scale: idx === currentIdx ? 1 : 1.05 }}
            transition={{ duration: 6, ease: "linear" }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass-panel-dark text-brand-200 text-sm font-medium tracking-wide mb-6">
            Clinician & Instructional Coach
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-[1.1]">
            Elevating <span className="text-accent-400">Excellence</span> <br />{" "}
            in Music Education.
          </h1>
          <p className="text-lg md:text-xl text-brand-100/90 max-w-2xl mb-10 leading-relaxed font-light">
            Working with directors and music teachers throughout Texas and
            across the US to build a culture of success on the concert stage and
            marching field.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book-a-session"
              className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-accent-500/25 flex items-center justify-center gap-2"
            >
              Book a Session <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 glass-panel-dark hover:bg-white/10 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2"
            >
              Learn More <BookOpen className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slider Controls (Dots) */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`transition-all duration-300 rounded-full h-1.5 ${
              idx === currentIdx
                ? "w-8 bg-accent-400"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
