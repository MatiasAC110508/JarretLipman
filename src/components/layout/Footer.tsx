import { FooterBrand } from "@/components/layout/footer/FooterBrand";
import {
  FooterLinksBlock,
  FooterLink,
} from "@/components/layout/footer/FooterLinksBlock";

const EXPLORE_LINKS: FooterLink[] = [
  { label: "About Jarrett", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Judging History", href: "/judging-and-clinician-history" },
  { label: "Testimonials", href: "/testimonials" },
];

const RESOURCES_LINKS: FooterLink[] = [
  { label: "Clinics vs Coaching", href: "/clinics-vs-coaching" },
  { label: "In the News", href: "/in-the-news" },
  { label: "Academic Publications", href: "/academic-publications" },
  { label: "Book a Session", href: "/book-a-session", isButton: true },
];

const PARTNERS_LINKS: FooterLink[] = [
  {
    label: "Educational Travel Adventures",
    href: "https://pages.etadventures.com/band-trips",
    isExternal: true,
  },
  {
    label: "Peer-Based Leadership",
    href: "https://www.instagram.com/pbsl.usa/",
    isExternal: true,
  },
  {
    label: "The Chitta Sound",
    href: "https://thechittasound.com/",
    isExternal: true,
  },
];

export function Footer() {
  return (
    <footer className="relative bg-brand-950 text-white pt-16 md:pt-24 pb-12 mt-auto overflow-hidden">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-950 via-brand-500/50 to-brand-950" />

      {/* Ambient glowing background element */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16">
          <FooterBrand />
          <FooterLinksBlock title="Explore" links={EXPLORE_LINKS} />
          <FooterLinksBlock title="Resources" links={RESOURCES_LINKS} />
          <FooterLinksBlock title="Partners" links={PARTNERS_LINKS} />
        </div>

        <div className="pt-8 border-t border-brand-800/80 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 text-sm text-brand-100/90 text-center lg:text-left font-light leading-relaxed md:text-balance">
          <p>
            BANDWORX LLC is a Texas Domestic Limited-Liability Company (LLC).
            <br className="hidden lg:block" />
            &copy; {new Date().getFullYear()} Jarrett Lipman. All rights
            reserved.
          </p>
          <p>
            Original Site Design by J. Garcia Creative Co.
            <br className="hidden lg:block" />
            Rebuilt with Next.js by Matias Aguirre Correa.
          </p>
        </div>
      </div>
    </footer>
  );
}
