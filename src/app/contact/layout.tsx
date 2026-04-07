import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Leasing",
  description: "Get in touch with the Vivo leasing team. Send an inquiry, book a tour, or call us at 604-817-5540. Leasing office at 13255 104 Ave, Surrey, BC.",
  alternates: { canonical: "https://vivoliving.ca/contact" },
  openGraph: {
    title: "Contact Leasing | Vivo Surrey",
    description: "Reach the Vivo leasing team — inquire about suites, book a tour, or visit our office at 13255 104 Ave, Surrey, BC.",
    url: "https://vivoliving.ca/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
