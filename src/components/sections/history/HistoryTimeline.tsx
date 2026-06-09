"use client";

import { motion } from "framer-motion";
import type { TimelineItem } from "@/data/history";

export function HistoryTimeline({
  title,
  data,
}: {
  title: string;
  data: TimelineItem[];
}) {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-display font-bold text-brand-950 mb-12 text-balance">
        {title}
      </h2>
      <div className="space-y-12">
        {data.map((block, idx) => (
          <motion.div
            key={block.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.05 }}
            className="flex flex-col md:flex-row gap-6 md:gap-12 group"
          >
            <div className="w-32 shrink-0 border-l-4 border-accent-400 pl-4 py-2">
              <h3 className="text-4xl font-display font-light text-brand-400 group-hover:text-accent-500 transition-colors">
                {block.year}
              </h3>
            </div>
            <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-brand-900/5 border border-brand-100/50">
              <ul className="space-y-4">
                {block.items.map((item, i) => {
                  const parts = item.split(" | ");
                  return (
                    <li
                      key={i}
                      className="flex gap-3 text-brand-800/80 items-start"
                    >
                      <span className="text-accent-400 shrink-0 mt-2 h-1.5 w-1.5 rounded-full bg-accent-400"></span>
                      <div className="leading-relaxed">
                        <span className="font-semibold text-brand-900">
                          {parts[0]}
                        </span>
                        {parts.length > 1 && (
                          <span className="text-sm ml-0 mt-2 sm:ml-2 sm:mt-0 px-2 py-0.5 rounded-full bg-brand-50 text-brand-600 block sm:inline-block">
                            {parts.slice(1).join(" • ")}
                          </span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
