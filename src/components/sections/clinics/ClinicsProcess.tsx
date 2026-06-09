"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, Rocket } from "lucide-react";
import Link from "next/link";

export function ClinicsProcess() {
  return (
    <section className="py-24 bg-brand-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-950 mb-6 text-balance">
            How Coaching Sessions Work
          </h2>
          <p className="text-lg text-brand-800/80 text-balance">
            Coaching is an interactive, long-term process designed to elevate
            both the ensemble and the director. Here's a breakdown of the
            typical journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-brand-900/5 relative border-t-8 border-brand-300"
          >
            <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-950 mb-6 text-balance">
              Visit 1: Diagnostic
            </h3>
            <ul className="space-y-4 text-brand-800/80">
              <li className="flex gap-3">
                <span className="text-brand-400 shrink-0">•</span> I will come
                to observe and take notes without interjecting.
              </li>
              <li className="flex gap-3">
                <span className="text-brand-400 shrink-0">•</span> I will track
                active playing time (e.g. out of 50 min, you played 20 min).
              </li>
              <li className="flex gap-3">
                <span className="text-brand-400 shrink-0">•</span>{" "}
                Post-rehearsal debrief to share observations and map out ideas.
              </li>
            </ul>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-brand-900/5 relative border-t-8 border-brand-500"
          >
            <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center text-brand-600 mb-8">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-950 mb-6 text-balance">
              Visit 2: Foundation
            </h3>
            <ul className="space-y-4 text-brand-800/80">
              <li className="flex gap-3">
                <span className="text-brand-500 shrink-0">•</span> I will
                interject slightly, focusing on fundamentals.
              </li>
              <li className="flex gap-3">
                <span className="text-brand-500 shrink-0">•</span> We rate
                sections to determine appropriate literature based on strengths
                and weaknesses.
              </li>
              <li className="flex gap-3">
                <span className="text-brand-500 shrink-0">•</span> Collaborative
                planning to build skills for the current semester and future.
              </li>
            </ul>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-brand-900/5 relative border-t-8 border-accent-500"
          >
            <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-8">
              <Rocket className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-950 mb-6 text-balance">
              Visit 3+: Action
            </h3>
            <ul className="space-y-4 text-brand-800/80">
              <li className="flex gap-3">
                <span className="text-accent-500 shrink-0">•</span> Highly
                interactive clinic. We work to make things better and assign
                tasks.
              </li>
              <li className="flex gap-3">
                <span className="text-accent-500 shrink-0">•</span> Review
                progress and observe if previous issues persist.
              </li>
              <li className="flex gap-3">
                <span className="text-accent-500 shrink-0">•</span> Specific
                strategies formulated to conquer the programmed music.
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto bg-brand-900 rounded-3xl p-8 lg:p-10 text-center text-white"
        >
          <p className="text-lg md:text-xl font-light leading-relaxed mb-8 lg:mb-10 text-white/90 text-balance">
            I can "conduct" or "clean the band" if you prefer to observe from
            time to time — but{" "}
            <strong className="text-white">YOU should conduct</strong> while I
            am here most often, so you can learn and receive feedback.
          </p>
          <Link
            href="/book-a-session"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-accent-500/25 w-full sm:w-auto"
          >
            Schedule a Diagnostic Visit <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
