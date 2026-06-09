import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bandworx",
  description:
    "Get in touch with Jarrett Lipman and Bandworx LLC for band clinics, virtual consultations, and professional development speaking opportunities.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
