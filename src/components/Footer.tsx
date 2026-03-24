"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F1A25", color: "white" }}>
      <div className="container-vivo py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "2.25rem",
                fontWeight: 300,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Vivo
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              Modern rental homes in the heart of Surrey City Centre.
            </p>
            <div className="flex gap-3">
              {[
                { label: "Instagram", href: siteConfig.social.instagram },
                { label: "Facebook", href: siteConfig.social.facebook },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                  }
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="section-label mb-5">Explore</p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/floor-plans", label: "Floor Plans" },
                { href: "/amenities", label: "Amenities" },
                { href: "/gallery", label: "Gallery" },
                { href: "/neighbourhood", label: "Neighbourhood" },
                { href: "/contact", label: "Contact Leasing" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.6)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
                  }
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">Leasing Office</p>
            <address className="not-italic flex flex-col gap-2" style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>
              <p>{siteConfig.address}</p>
              <a
                href={`tel:${siteConfig.phone}`}
                style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {siteConfig.email}
              </a>
            </address>
            <div className="mt-5 flex flex-col gap-1">
              {siteConfig.leasingHours.map((h) => (
                <p key={h.days} style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
                  {h.days}: {h.hours}
                </p>
              ))}
            </div>
          </div>

          {/* Book a Tour */}
          <div>
            <p className="section-label mb-5">Ready to Move?</p>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", marginBottom: "1.25rem" }}>
              Schedule a private tour of your new home today.
            </p>
            <Link
              href="/contact"
              className="btn-outline"
              style={{ fontSize: "0.75rem", padding: "0.75rem 1.5rem", display: "inline-flex" }}
            >
              Book a Tour
            </Link>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            marginTop: "3rem",
            paddingTop: "2rem",
          }}
          className="flex flex-col md:flex-row justify-between gap-4"
        >
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Vivo. A West Fraser Property. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Fair Housing"].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
