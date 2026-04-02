import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amenities",
  description: "Discover Vivo's building amenities and in-suite features — fitness centre, rooftop terrace, resident lounge, in-suite laundry, premium appliances, and more. Surrey City Centre living at its finest.",
  alternates: { canonical: "https://vivoliving.ca/amenities" },
  openGraph: {
    title: "Amenities | Vivo Surrey",
    description: "Fitness centre, rooftop terrace, resident lounge, and premium in-suite finishes at Vivo Surrey City Centre.",
    url: "https://vivoliving.ca/amenities",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
