import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Your Interest",
  description: "Register your interest in Vivo — Surrey City Centre's newest purpose-built rental community. Be the first to hear about availability, pricing, and move-in dates.",
  alternates: { canonical: "https://vivoliving.ca/register" },
  openGraph: {
    title: "Register Your Interest | Vivo Surrey",
    description: "Be first in line for Vivo's new rental homes in Surrey City Centre. Register now.",
    url: "https://vivoliving.ca/register",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
