import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jarrettlipman.com"),
  title: {
    default: "Jarrett Lipman | Clinician, Coach & Music Educator",
    template: "%s | Jarrett Lipman",
  },
  description:
    "Book a clinic or coaching session with Jarrett Lipman. Bandworx works with directors and music teachers throughout Texas and across the US.",
  keywords: [
    "Jarrett Lipman",
    "Bandworx",
    "Music Clinician",
    "Band Director",
    "Texas Music Educator",
    "Leadership Coach",
    "Marching Band Consultant",
    "Music Adjudicator",
  ],
  authors: [{ name: "Jarrett Lipman" }, { name: "Bandworx, LLC" }],
  creator: "Jarrett Lipman",
  openGraph: {
    title: "Jarrett Lipman | Clinician, Coach & Music Educator",
    description:
      "Book a clinic or coaching session with Jarrett Lipman. Bandworx works with directors and music teachers throughout Texas and across the US.",
    url: "https://jarrettlipman.com",
    siteName: "Jarrett Lipman / Bandworx",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo_primary.png", // Replace with a dedicated OG image if available
        width: 1200,
        height: 630,
        alt: "Jarrett Lipman Bandworx Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jarrett Lipman | Clinician, Coach & Music Educator",
    description:
      "Texas-based music educator and clinician. Book your next band clinic or coaching session.",
    creator: "@jarrettlipman",
    images: ["/logo_primary.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
