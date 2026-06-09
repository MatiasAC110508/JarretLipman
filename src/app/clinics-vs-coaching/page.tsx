import { ClinicsHero } from "@/components/sections/clinics/ClinicsHero";
import { ClinicsPhilosophy } from "@/components/sections/clinics/ClinicsPhilosophy";
import { ClinicsProcess } from "@/components/sections/clinics/ClinicsProcess";

export default function ClinicsVsCoachingPage() {
  return (
    <div className="bg-white">
      <ClinicsHero />
      <ClinicsPhilosophy />
      <ClinicsProcess />
    </div>
  );
}
