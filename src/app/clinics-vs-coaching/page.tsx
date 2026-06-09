import { ClinicsHero } from "@/components/sections/clinics/ClinicsHero";
import { ClinicsPhilosophy } from "@/components/sections/clinics/ClinicsPhilosophy";
import { ClinicsProcess } from "@/components/sections/clinics/ClinicsProcess";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinics vs Coaching",
  description:
    "Explore the difference between Jarrett Lipman's band clinics and leadership coaching programs for students and educators.",
};

export default function ClinicsVsCoachingPage() {
  return (
    <div className="bg-white">
      <ClinicsHero />
      <ClinicsPhilosophy />
      <ClinicsProcess />
    </div>
  );
}
