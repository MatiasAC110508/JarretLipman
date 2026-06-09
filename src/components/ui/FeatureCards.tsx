"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CARDS = [
  {
    title: "FOLLOW ME",
    description:
      "Learn more about Jarrett's teaching career, consulting opportunities, and philanthropic outreach.",
    image: "/followme.jpg",
    link: "/contact",
  },
  {
    title: "BOOK A SESSION",
    description:
      "Jarrett serves as a clinician for middle school and high school bands across the United States.",
    image: "/rooftop_coaching.jpeg",
    link: "https://clinics.etadventures.com/jarrett",
    external: true,
  },
  {
    title: "THE LATEST",
    description:
      "Stay in the know with the latest articles, news clips, and more.",
    image: "/jarrett_conducting.jpg",
    link: "/in-the-news",
  },
];

export function FeatureCards() {
  return (
    <section className="py-12 bg-brand-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {CARDS.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full"
            >
              <Link
                href={card.link}
                target={card.external ? "_blank" : "_self"}
                className="group flex flex-col relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-brand-900/5 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="h-64 overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-brand-950/10 group-hover:bg-transparent transition-colors z-10" />
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-display font-semibold text-brand-950 mb-3 group-hover:text-brand-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-brand-800/80 mb-6">{card.description}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-accent-600 group-hover:text-accent-700 uppercase tracking-wider mt-auto">
                    Explore{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
