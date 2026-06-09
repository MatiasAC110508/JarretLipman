import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Judging & Clinician History",
  description:
    "A comprehensive history of Jarrett Lipman's adjudication, clinician, and conductor experience across the United States spanning over a decade.",
};

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
