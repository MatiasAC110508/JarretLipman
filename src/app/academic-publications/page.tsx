"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, Download } from "lucide-react";

export default function AcademicPublicationsPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium tracking-wide mb-6">
            Research & Scholarship
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-950 mb-6 tracking-tight">
            Academic Publications
          </h1>
          <p className="text-lg text-brand-800/80 leading-relaxed font-light">
            Jarrett Lipman's research in Education Leadership, Planning, and
            Policy.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.a
            href="https://journals.sagepub.com/doi/10.1177/15554589251352449"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group block bg-brand-50 hover:bg-brand-100 rounded-3xl p-8 md:p-10 transition-colors border border-brand-100 shadow-xl shadow-brand-900/5 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-400 shrink-0 shadow-sm group-hover:text-brand-600 transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-brand-950 mb-3 group-hover:text-brand-700 transition-colors">
                  Beyond Symbolism: A Community's Journey to Transform Robert E.
                  Lee High School
                </h3>
                <p className="text-brand-600 font-medium mb-4">
                  by Jarrett Lipman (2025)
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-900 bg-white px-4 py-2 rounded-lg group-hover:shadow-md transition-all">
                  Read on Sage Journals <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://files.eric.ed.gov/fulltext/EJ1463736.pdf"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group block bg-brand-50 hover:bg-brand-100 rounded-3xl p-8 md:p-10 transition-colors border border-brand-100 shadow-xl shadow-brand-900/5"
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-400 shrink-0 shadow-sm group-hover:text-brand-600 transition-colors">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-brand-950 mb-3 group-hover:text-brand-700 transition-colors">
                  Transparency Under Takeover: Financial Ramifications of the
                  TEA Takeover of Houston ISD
                </h3>
                <p className="text-brand-600 font-medium mb-4">
                  by Brooke Fousek, Alyssa Chessari, & Jarrett Lipman (2025)
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-brand-900 bg-white px-4 py-2 rounded-lg group-hover:shadow-md transition-all">
                  Read PDF on ERIC <Download className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto mt-20 text-center border-t border-brand-100 pt-10"
        >
          <a
            href="https://jarrettlipman.com/wp-content/uploads/2025/10/CV-UT-Austin-JL-9-30-25-1.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-900 hover:bg-brand-950 text-white rounded-xl font-medium transition-colors shadow-lg mb-10"
          >
            <Download className="w-5 h-5" /> Download Full Curriculum Vitae
          </a>
          <p className="text-sm text-brand-800/60 font-light italic leading-relaxed">
            Disclaimer: The views and opinions expressed on this website and in
            these publications are my own and do not necessarily reflect the
            official policies, positions, or views of any of my current or past
            employers.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
