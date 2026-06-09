import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutBiography } from "@/components/sections/about/AboutBiography";
import { AboutWidgets } from "@/components/sections/about/AboutWidgets";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Jarrett Lipman's background as a music educator, band director, and clinician working with bands across Texas.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutBiography />
      <AboutWidgets />
    </div>
  );
}
