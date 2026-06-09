import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what other band directors, educators, and clients have to say about working with Jarrett Lipman and Bandworx.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
