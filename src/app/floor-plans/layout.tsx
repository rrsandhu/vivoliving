import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Floor Plans & Availability",
  description: "Browse studio, 1, 2, and 3 bedroom floor plans at Vivo in Surrey City Centre. View layouts, square footage, and request pricing. Now leasing at 13255 104 Ave, Surrey, BC.",
  alternates: { canonical: "https://vivoliving.ca/floor-plans" },
  openGraph: {
    title: "Floor Plans & Availability | Vivo Surrey",
    description: "Browse studio, 1, 2, and 3 bedroom floor plans at Vivo in Surrey City Centre.",
    url: "https://vivoliving.ca/floor-plans",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
