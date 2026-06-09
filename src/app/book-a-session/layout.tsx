import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Schedule a band clinic, leadership coaching, or consulting session with Jarrett Lipman via our official ETA booking portal.",
};

export default function BookSessionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
