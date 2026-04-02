import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about renting at Vivo — pets, parking, lease terms, move-in dates, and more. Get answers from the Vivo leasing team in Surrey, BC.",
  alternates: { canonical: "https://vivoliving.ca/faq" },
  openGraph: {
    title: "FAQ | Vivo Surrey Rentals",
    description: "Common questions about renting at Vivo — pets, parking, lease terms, and more.",
    url: "https://vivoliving.ca/faq",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
