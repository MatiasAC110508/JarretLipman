import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutBiography } from "@/components/sections/about/AboutBiography";
import { AboutWidgets } from "@/components/sections/about/AboutWidgets";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutBiography />
      <AboutWidgets />
    </div>
  );
}
