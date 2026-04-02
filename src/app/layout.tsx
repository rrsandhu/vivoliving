import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegisterPopup from "@/components/RegisterPopup";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vivoliving.ca"),
  title: {
    default: siteConfig.meta.title,
    template: "%s | Vivo — Surrey City Centre Rentals",
  },
  description: siteConfig.meta.description,
  keywords: [
    "Surrey rental apartments",
    "Surrey City Centre rentals",
    "Surrey BC apartments for rent",
    "1 bedroom apartment Surrey",
    "2 bedroom apartment Surrey",
    "3 bedroom apartment Surrey",
    "purpose built rental Surrey",
    "Vivo living Surrey",
    "13255 104 Ave Surrey",
    "new rental apartments Surrey BC",
  ],
  authors: [{ name: "Vivo — A West Fraser Property" }],
  creator: "Vivo Living",
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: [{ url: "/images/hero1.png", width: 1200, height: 630, alt: "Vivo — Surrey City Centre Rental Homes" }],
    type: "website",
    url: "https://vivoliving.ca",
    siteName: "Vivo Living",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: ["/images/hero1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://vivoliving.ca",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          backgroundColor: "white",
          color: "#0F1A25",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ApartmentComplex",
              name: "Vivo",
              description: siteConfig.meta.description,
              url: "https://vivoliving.ca",
              telephone: siteConfig.phone,
              email: siteConfig.email,
              address: {
                "@type": "PostalAddress",
                streetAddress: "13255 104 Ave",
                addressLocality: "Surrey",
                addressRegion: "BC",
                postalCode: "V3T 0H6",
                addressCountry: "CA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 49.1876,
                longitude: -122.8468,
              },
              numberOfRooms: 115,
              petsAllowed: true,
              image: "https://vivoliving.ca/images/hero1.png",
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "10:00", closes: "17:00" },
              ],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <RegisterPopup />
      </body>
    </html>
  );
}
