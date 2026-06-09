"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarPlus } from "lucide-react";

export default function BookSessionPage() {
  return (
    <div className="min-h-[80vh] bg-white flex items-center justify-center py-24">
      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center bg-brand-50 rounded-[3rem] p-12 shadow-xl shadow-brand-900/5 border border-brand-100"
        >
          <div className="w-20 h-20 bg-accent-100 rounded-full flex items-center justify-center text-accent-600 mx-auto mb-8">
            <CalendarPlus className="w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-950 mb-6">
            Book a Session <br /> With Bandworx
          </h1>

          <p className="text-xl text-brand-800/80 mb-10 leading-relaxed font-light">
            We're excited to work with you and your students. Click below to
            securely book your coaching session or clinic online.
          </p>

          <a
            href="https://clinics.etadventures.com/jarrett"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-brand-900 hover:bg-brand-950 text-white rounded-2xl font-bold transition-all shadow-xl hover:shadow-brand-900/20 text-lg w-full sm:w-auto hover:-translate-y-1"
          >
            Continue to Booking Portal <ArrowRight className="w-6 h-6" />
          </a>

          <p className="mt-8 text-brand-500 text-sm">
            You will be redirected to our official booking partner at ETA.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
