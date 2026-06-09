"use client";

import { motion } from "framer-motion";

export function ClinicsHero() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-950/80" />
        <img
          src="/rooftop_coaching.jpeg"
          alt="Coaching Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-8 leading-tight text-balance">
            The Difference Between <br />{" "}
            <span className="text-accent-400">Clinics and Coaching</span>
          </h1>
          <p className="text-xl md:text-2xl font-light text-brand-100 italic font-display border-l-4 border-accent-400 pl-6 text-left max-w-2xl mx-auto text-balance">
            "I can give you a fish, and you eat for a day. Or, I can teach you
            to fish, and you'll eat for a lifetime."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
