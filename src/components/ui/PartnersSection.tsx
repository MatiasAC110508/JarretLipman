"use client";

import { motion } from "framer-motion";

const PARTNER_LOGOS = [
  "/partner_1.png",
  "/partner_2.png",
  "/partner_3.png",
  "/partner_4.png",
  "/partner_5.png",
  "/partner_6.png",
  "/partner_7.png",
];

const ENDORSEMENT_LOGOS = [
  "/endorses_1.png",
  "/endorses_2.png",
  "/endorses_3.png",
];

function LogoMarquee({
  logos,
  reverse = false,
  title,
}: {
  logos: string[];
  reverse?: boolean;
  title: string;
}) {
  // Use 4 copies for smaller arrays to ensure they fill the screen, and 2 for larger ones.
  // It MUST be an even number of copies so that translating by -50% shifts exactly half the sequence.
  const copies = logos.length < 5 ? 6 : 2;
  const sequence = Array(copies).fill(logos).flat();

  return (
    <div className="relative w-full py-8 overflow-hidden border-y border-brand-100/50 bg-white">
      <div className="container mx-auto px-4 mb-10">
        <h3 className="text-center font-display font-semibold text-brand-400 tracking-widest uppercase text-sm">
          {title}
        </h3>
      </div>

      {/* Absolute overlays for smooth edge fading */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {sequence.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 px-8 md:px-12">
              <img
                src={src}
                alt="Partner logo"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export function PartnersSection() {
  return (
    <section className="py-10 bg-white">
      <LogoMarquee
        title="TEXAS BANDWORX OFFICIAL PARTNERS"
        logos={PARTNER_LOGOS}
      />
      <div className="h-0.5 bg-brand-50" />
      <LogoMarquee
        title="TEXAS BANDWORX PROUDLY ENDORSES"
        logos={ENDORSEMENT_LOGOS}
        reverse
      />
    </section>
  );
}
