import { HeroSection } from "@/components/ui/HeroSection";
import { FeatureCards } from "@/components/ui/FeatureCards";
import { VideoSection } from "@/components/ui/VideoSection";
import { PartnersSection } from "@/components/ui/PartnersSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full relative">
      <HeroSection />

      {/* Decorative divider */}
      <div className="w-full h-1 bg-gradient-to-r from-accent-400 via-accent-300 to-accent-500 opacity-60 mix-blend-multiply" />

      <FeatureCards />
      <VideoSection />
      <PartnersSection />
    </div>
  );
}
