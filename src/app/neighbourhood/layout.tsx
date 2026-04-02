import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neighbourhood",
  description: "Vivo is steps from King George SkyTrain, Holland Park, and Surrey City Centre's best dining, shopping, and transit. Explore the neighbourhood at 13255 104 Ave, Surrey, BC.",
  alternates: { canonical: "https://vivoliving.ca/neighbourhood" },
  openGraph: {
    title: "Neighbourhood | Vivo Surrey City Centre",
    description: "Steps from SkyTrain, parks, dining, and shopping in Surrey City Centre.",
    url: "https://vivoliving.ca/neighbourhood",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
