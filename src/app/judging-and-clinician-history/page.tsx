"use client";

import { motion } from "framer-motion";

import { HistoryTimeline } from "@/components/sections/history/HistoryTimeline";
import { ADJUDICATION, CLINICIAN } from "@/data/history";

export default function HistoryPage() {
  return (
    <div className="py-24 bg-brand-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-200/50 text-brand-800 text-sm font-medium tracking-wide mb-6">
            History
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-950 mb-6 tracking-tight">
            Judging & Clinician Experience
          </h1>
          <p className="text-lg md:text-xl text-brand-800/80 leading-relaxed font-light">
            A comprehensive history of Jarrett Lipman's adjudication, clinician,
            and conductor experience across the US spanning over a decade.
          </p>
        </motion.div>

        <div className="space-y-24 max-w-5xl mx-auto">
          <HistoryTimeline
            title="Adjudication Experience"
            data={ADJUDICATION}
          />
          <HistoryTimeline
            title="Clinician & Conductor Experience"
            data={CLINICIAN}
          />
        </div>
      </div>
    </div>
  );
}
