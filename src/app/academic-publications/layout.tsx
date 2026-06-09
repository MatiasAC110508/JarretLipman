import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academic Publications & Research",
  description:
    "Explore Jarrett Lipman's academic publications, research in Education Leadership, Planning, and Policy, and his Curriculum Vitae.",
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
