import { Metadata } from "next";

export const metadata: Metadata = {
  title: "In The News | Media & Updates",
  description:
    "Catch a glimpse at what Jarrett Lipman and Bandworx have been up to recently, including news articles, media mentions, and program updates.",
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
