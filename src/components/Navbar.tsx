"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks: { href: string; label: string; highlight?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/floor-plans", label: "Floor Plans" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/neighbourhood", label: "Neighbourhood" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navBg = isHome
    ? scrolled
      ? "bg-white shadow-sm"
      : "bg-transparent"
    : "bg-white border-b border-[#E5E1DB]";

  const textColor = isHome && !scrolled ? "#ffffff" : "#0F1A25";
  const logoColor = isHome && !scrolled ? "#ffffff" : "#1C3144";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="container-vivo">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            style={{
              color: logoColor,
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "1.875rem",
              fontWeight: 300,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            Vivo
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.highlight ? (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.7rem",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    backgroundColor: "#C9A96E",
                    color: "white",
                    padding: "0.5rem 1rem",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1C3144")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C9A96E")}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: pathname === link.href ? "#C9A96E" : textColor,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color =
                      pathname === link.href ? "#C9A96E" : textColor)
                  }
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/register"
              className="btn-primary"
              style={{ fontSize: "0.75rem", padding: "0.75rem 1.5rem" }}
            >
              Register Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            style={{ color: textColor }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className="block h-px bg-current"
                style={{
                  transition: "transform 0.2s",
                  transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
                }}
              />
              <span
                className="block h-px bg-current"
                style={{
                  transition: "opacity 0.2s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                className="block h-px bg-current"
                style={{
                  transition: "transform 0.2s",
                  transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "#0F1A25", color: "white" }}>
          <nav className="container-vivo py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.8)",
                  transition: "color 0.2s",
                }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.8)")
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="btn-primary self-start mt-2"
              style={{ fontSize: "0.75rem", padding: "0.75rem 1.5rem" }}
              onClick={() => setMenuOpen(false)}
            >
              Register Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
