"use client";

import { motion } from "framer-motion";
import { ArrowRight, Link as LinkIcon, BookOpen } from "lucide-react";
import Link from "next/link";

import { NEWS_ARTICLES } from "@/data/news";

export default function NewsPage() {
  return (
    <div className="py-24 bg-brand-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium tracking-wide mb-6">
                Media & Updates
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-950 mb-6 tracking-tight">
                In The News
              </h1>
              <p className="text-lg text-brand-800/80 leading-relaxed font-light">
                Catch a glimpse at what Jarrett & Bandworx have been up to
                recently.
              </p>
            </motion.div>

            <div className="flex flex-col gap-8 text-black">
              {NEWS_ARTICLES.map((article, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={article.slug}
                >
                  <Link
                    href={`/in-the-news/${article.slug}`}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-900/5 group flex flex-col md:flex-row h-full transition-transform hover:-translate-y-1"
                  >
                    <div className="md:w-2/5 aspect-video md:aspect-auto relative overflow-hidden shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-brand-950/10 group-hover:bg-transparent transition-colors z-10" />
                    </div>
                    <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                      <div className="flex justify-between items-start mb-4">
                        <span className="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full uppercase tracking-wider">
                          {article.category}
                        </span>
                        <span className="text-sm font-medium text-brand-400 shrink-0 ml-4 pt-1">
                          {article.date}
                        </span>
                      </div>
                      <h2 className="text-2xl font-display font-bold text-brand-950 mb-4 group-hover:text-brand-600 transition-colors leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-brand-800/80 leading-relaxed mb-6 font-light">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 group-hover:text-accent-700 uppercase tracking-wider mt-auto">
                        Read More{" "}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Simple Pagination CTA */}
            <div className="mt-16 text-center">
              <button className="px-8 py-4 bg-brand-900 hover:bg-brand-950 text-white font-medium rounded-xl transition-colors shadow-lg">
                Load Older Articles
              </button>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="sticky top-28 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-brand-950 rounded-3xl p-8 shadow-xl border border-brand-900 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500 rounded-full opacity-10 blur-2xl -translate-y-1/2 translate-x-1/3" />
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-accent-400" /> About Me
                </h3>
                <p className="text-brand-200/90 leading-relaxed font-light text-sm mb-6">
                  Jarrett is the current Director of Bands at Vandegrift High
                  School in Austin, TX. He is also the Brass Caption Manager of
                  the 2025 DCI World Champion Boston Crusaders. Prior to
                  Vandegrift, Jarrett was the Head Director at Claudia Taylor
                  Johnson High School in San Antonio, TX. He also travels around
                  Texas instructing student leadership clinics and consulting
                  with other band directors wishing to improve their
                  organizations.
                </p>
                <Link
                  href="/about"
                  className="text-accent-400 hover:text-accent-300 text-sm font-medium flex items-center gap-1 group"
                >
                  Read Full Bio{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl shadow-brand-900/5 border border-brand-100"
              >
                <h3 className="text-xl font-display font-bold text-brand-950 mb-6 flex items-center gap-2">
                  Jarrett in Print
                </h3>
                <a
                  href="https://www.jwpepper.com/Rehearsing+the+Marching+Band/11381497.item"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-4 group items-start"
                >
                  <div className="w-16 h-20 bg-brand-50 border border-brand-100 rounded-lg flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-brand-400 group-hover:text-brand-600 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-950 group-hover:text-brand-600 transition-colors leading-tight mb-2">
                      Rehearsing the Marching Band
                    </h4>
                    <p className="text-brand-600 text-sm font-medium mb-1">
                      by Stephen Meyer
                    </p>
                    <p className="text-brand-800/80 text-xs flex items-center gap-1">
                      Featured Chapter <LinkIcon className="w-3 h-3" />
                    </p>
                  </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
