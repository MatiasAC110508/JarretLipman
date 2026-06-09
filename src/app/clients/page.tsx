"use client";

import { motion } from "framer-motion";
import { Music, GraduationCap, School, MapPin, Users } from "lucide-react";
import Link from "next/link";

const EUPHONIUM_CLIENTS = [
  "Claudia Taylor Johnson High School (North East ISD)",
  "Ronald Reagan High School (North East ISD)",
  "LEE High School (North East ISD)",
];

const HS_CLIENTS = [
  "Amon Carter-Riverside High School (Fort Worth ISD)",
  "Chester W. Nimitz Senior High School (Aldine ISD)",
  "Del Rio High School (San Felipe-Del Rio CISD)",
  "Hightower High School (Fort Bend ISD)",
  "LEE High School (North East ISD)",
  "Lockhart High School (Lockhart ISD)",
  "McAllen Memorial High School (McAllen ISD)",
  "Nikki Rowe High School (McAllen ISD)",
  "Pflugerville High School (Pflugerville ISD)",
  "Pflugerville ISD Fine Department",
  "Roosevelt High School (North East ISD)",
  "Weiss High School (Pflugerville ISD)",
];

const MS_CLIENTS = [
  "Barbara Bush Middle School (North East ISD)",
  "Jose M. Lopez Middle School (North East ISD)",
  "W.P. McLean Middle School (Fort Worth ISD)",
  "Ed Rawlinson Middle School (Northside ISD)",
  "David Lee “Tex” Hill Middle School (North East ISD)",
];

const HONOR_BANDS = [
  "Region 12 ATSSB Wind Ensemble – December 2025",
  "Region 29 Middle School Conductor | San Antonio, TX – January 2024",
  "Williamson County Honor Band Conductor | Brentwood, TN – January 2024",
];

function ClientCard({
  title,
  icon: Icon,
  items,
  index,
  children,
}: {
  title: string;
  icon: any;
  items: string[];
  index: number;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-xl shadow-brand-900/5 p-8 border border-brand-100 break-inside-avoid mb-8 inline-block w-full"
    >
      <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brand-50">
        <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-display font-semibold text-brand-950">
          {title}
        </h2>
      </div>
      <ul className="space-y-4 flex-1">
        {items.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-brand-800/80">
            <span className="text-accent-500 shrink-0 mt-1">•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      {children && (
        <div className="mt-8 pt-6 border-t border-brand-50">{children}</div>
      )}
    </motion.div>
  );
}

export default function ClientsPage() {
  return (
    <div className="py-24 bg-brand-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium tracking-wide mb-6">
            Our Network
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-950 mb-6">
            Clients & Ensembles
          </h1>
          <p className="text-lg md:text-xl text-brand-800/80 leading-relaxed text-balance">
            Bandworx is proud to partner with high school and middle school
            bands across Texas, as well as honor bands and regions.
          </p>
        </motion.div>

        <div className="columns-1 lg:columns-2 gap-8">
          <ClientCard
            title="High School Clients"
            icon={School}
            items={HS_CLIENTS}
            index={0}
          />

          <ClientCard
            title="Middle School Clients"
            icon={GraduationCap}
            items={MS_CLIENTS}
            index={1}
          />

          <ClientCard
            title="Euphonium Instructor"
            icon={Music}
            items={EUPHONIUM_CLIENTS}
            index={2}
          />

          <ClientCard
            title="Region & Honor Band"
            icon={MapPin}
            items={HONOR_BANDS}
            index={3}
          />

          <ClientCard
            title="Professional Development"
            icon={Users}
            items={[
              "These sessions are available upon request for faculty and district inservices.",
            ]}
            index={4}
          >
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full py-3 bg-brand-50 hover:bg-brand-100 text-brand-900 border border-brand-200 text-sm font-semibold rounded-xl text-center transition-colors"
              >
                Contact to Schedule
              </Link>
              <Link
                href="/judging-and-clinician-history"
                className="w-full py-3 bg-brand-900 hover:bg-brand-950 text-white text-sm font-semibold rounded-xl text-center transition-colors"
              >
                View Clinician History
              </Link>
            </div>
          </ClientCard>
        </div>
      </div>
    </div>
  );
}
