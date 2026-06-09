"use client";

import { motion } from "framer-motion";
import { Award, Users, Star } from "lucide-react";

export function AboutWidgets() {
  return (
    <section className="py-20 bg-brand-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="columns-1 lg:columns-2 gap-8 space-y-8 lg:space-y-0">
          {/* Accolades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="break-inside-avoid bg-white rounded-2xl p-8 shadow-xl shadow-brand-900/5 border border-brand-100 mb-8 inline-block w-full"
          >
            <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center text-accent-600 mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-950 mb-6 text-balance">
              Accolades
            </h3>
            <ul className="space-y-4 text-brand-800/80">
              <li className="flex gap-3">
                <span className="text-accent-500 shrink-0">•</span> 2022 CMA
                Foundation Excellence in Music Education Award Recipient
              </li>
              <li className="flex gap-3">
                <span className="text-accent-500 shrink-0">•</span> 2021 Yamaha
                "40 under 40" Music Educator
              </li>
              <li className="flex gap-3">
                <span className="text-accent-500 shrink-0">•</span> 2015 HEB
                Excellence in Education Awards Finalist "Rising Young Star"
              </li>
              <li className="flex gap-3">
                <span className="text-accent-500 shrink-0">•</span> 2015 GRAMMY
                Music Educator Awards Quarterfinalist
              </li>
              <li className="flex gap-3">
                <span className="text-accent-500 shrink-0">•</span> 2014
                "Outstanding Young Bandmaster" Awarded by Texas Chapter of Phi
                Beta Mu
              </li>
              <li className="flex gap-3">
                <span className="text-accent-500 shrink-0">•</span> Featured in
                Dr. Stephen Meyer's <i>Rehearsing the Marching Band</i> Book
              </li>
            </ul>
          </motion.div>

          {/* Professional Affiliations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="break-inside-avoid bg-white rounded-2xl p-8 shadow-xl shadow-brand-900/5 border border-brand-100 mb-8 inline-block w-full"
          >
            <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-950 mb-6 text-balance">
              Professional Affiliations
            </h3>
            <ul className="space-y-4 text-brand-800/80">
              <li className="flex gap-3">
                <span className="text-brand-500 shrink-0">•</span> Texas Music
                Educators Association
              </li>
              <li className="flex gap-3">
                <span className="text-brand-500 shrink-0">•</span> Texas
                Bandmasters Association
              </li>
              <li className="flex gap-3">
                <span className="text-brand-500 shrink-0">•</span> Author for
                Yamaha Educator Suite
              </li>
            </ul>
          </motion.div>

          {/* Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="break-inside-avoid bg-white rounded-2xl p-8 shadow-xl shadow-brand-900/5 border border-brand-100 mb-8 inline-block w-full"
          >
            <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center text-brand-600 mb-6">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-display font-bold text-brand-950 mb-6 text-balance">
              Service
            </h3>
            <ul className="space-y-4 text-brand-800/80">
              <li className="flex flex-col sm:flex-row sm:justify-between border-b border-brand-100 pb-3 gap-1">
                <span>Music For All Summer Symposium Faculty</span>
                <span className="text-brand-500 font-medium text-sm border-l-0 sm:border-l border-brand-200 pl-0 sm:pl-4">
                  2015-19, '23
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between border-b border-brand-100 pb-3 gap-1">
                <span>UIL State Marching Ad Hoc Committee</span>
                <span className="text-brand-500 font-medium text-sm border-l-0 sm:border-l border-brand-200 pl-0 sm:pl-4">
                  2016–2020
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between border-b border-brand-100 pb-3 gap-1">
                <span>TMEA Honor Band Committee</span>
                <span className="text-brand-500 font-medium text-sm border-l-0 sm:border-l border-brand-200 pl-0 sm:pl-4">
                  June 2019
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between border-b border-brand-100 pb-3 gap-1">
                <span>PBM Reception Committee</span>
                <span className="text-brand-500 font-medium text-sm border-l-0 sm:border-l border-brand-200 pl-0 sm:pl-4">
                  2021–2023
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1 pt-1">
                <span>TMEA All-State Band Euphonium Sectional Coach</span>
                <span className="text-brand-500 font-medium text-sm border-l-0 sm:border-l border-brand-200 pl-0 sm:pl-4">
                  2023
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
