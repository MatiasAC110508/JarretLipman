import { HeroSection } from "@/components/ui/HeroSection";
import { FeatureCards } from "@/components/ui/FeatureCards";
import { VideoSection } from "@/components/ui/VideoSection";
import { PartnersSection } from "@/components/ui/PartnersSection";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jarrett Lipman",
    jobTitle: ["Music Educator", "Band Clinician", "Leadership Coach"],
    url: "https://jarrettlipman.com",
    image: "https://jarrettlipman.com/logo_primary.png",
    worksFor: {
      "@type": "Organization",
      name: "Bandworx, LLC",
    },
    description:
      "Texas-based music educator and clinician working with bands and music teachers across the US.",
  };

  return (
    <div className="flex flex-col flex-1 w-full relative">
      <JsonLd data={personSchema} />
      <HeroSection />

      {/* Decorative divider */}
      <div className="w-full h-1 bg-gradient-to-r from-accent-400 via-accent-300 to-accent-500 opacity-60 mix-blend-multiply" />

      <FeatureCards />
      <VideoSection />
      <PartnersSection />
    </div>
  );
}
