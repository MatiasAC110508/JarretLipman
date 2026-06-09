import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clients & Ensembles",
  description:
    "Discover the high school bands, middle school programs, and honor ensembles that partner with Bandworx and Jarrett Lipman.",
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
