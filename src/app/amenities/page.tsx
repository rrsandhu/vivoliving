"use client";

import { amenities } from "@/lib/data";
import CTABanner from "@/components/CTABanner";

const iconMap: Record<string, string> = {
  dumbbell: "◈",
  sofa: "◉",
  sun: "◎",
  shield: "◆",
  bicycle: "◇",
  car: "▣",
  heart: "♡",
  package: "▤",
  "washing-machine": "◈",
  "chef-hat": "◎",
  sparkles: "✦",
  wind: "◌",
  thermometer: "◉",
};

export default function AmenitiesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "clamp(6rem, 12vw, 10rem)", paddingBottom: "clamp(2rem, 5vw, 4rem)", backgroundColor: "#0F1A25" }}>
        <div className="container-vivo">
          <p className="section-label mb-4">Life at Vivo</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              fontWeight: 300,
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Amenities Built for
            <br />
            <em style={{ color: "#C9A96E", fontStyle: "normal" }}>Modern Living.</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", maxWidth: "36rem" }}>
            From the rooftop to your suite, every detail has been designed to elevate your everyday
            experience at Vivo.
          </p>
        </div>
      </section>

      {/* Building Amenities */}
      <section style={{ padding: "clamp(3rem, 8vw, 6rem) 0" }}>
        <div className="container-vivo">
          <div style={{ marginBottom: "4rem" }}>
            <p className="section-label mb-4">Building Features</p>
            <h2 className="section-title" style={{ maxWidth: "32rem" }}>
              Shared spaces where community comes to life.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.building.map((a) => (
              <div
                key={a.id}
                style={{
                  border: "1px solid #E5E1DB",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#C9A96E";
                  const icon = e.currentTarget.querySelector(".amenity-icon") as HTMLElement;
                  if (icon) {
                    icon.style.backgroundColor = "#C9A96E";
                    icon.style.color = "white";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E5E1DB";
                  const icon = e.currentTarget.querySelector(".amenity-icon") as HTMLElement;
                  if (icon) {
                    icon.style.backgroundColor = "#1C3144";
                    icon.style.color = "#C9A96E";
                  }
                }}
              >
                <div
                  className="amenity-icon"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#1C3144",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#C9A96E",
                    fontSize: "1.25rem",
                    transition: "all 0.3s",
                  }}
                >
                  {iconMap[a.icon] || "○"}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.25rem",
                    color: "#0F1A25",
                  }}
                >
                  {a.title}
                </h3>
                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    flex: 1,
                  }}
                >
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Suite Features */}
      <section style={{ padding: "clamp(3rem, 8vw, 6rem) 0", backgroundColor: "#F7F5F2" }}>
        <div className="container-vivo">
          <div style={{ marginBottom: "4rem" }}>
            <p className="section-label mb-4">In Your Suite</p>
            <h2 className="section-title" style={{ maxWidth: "32rem" }}>
              Premium finishes. Thoughtful details.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.inSuite.map((a) => (
              <div
                key={a.id}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #E5E1DB",
                  padding: "2rem",
                  display: "flex",
                  gap: "1.25rem",
                }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "rgba(201,169,110,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#C9A96E",
                    flexShrink: 0,
                  }}
                >
                  {iconMap[a.icon] || "○"}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1.25rem",
                      color: "#0F1A25",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {a.title}
                  </h3>
                  <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.75 }}>
                    {a.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle section */}
      <section style={{ padding: "clamp(3rem, 8vw, 6rem) 0", backgroundColor: "#1C3144", color: "white" }}>
        <div className="container-vivo" style={{ maxWidth: "48rem", textAlign: "center", margin: "0 auto" }}>
          <p className="section-label mb-6">The Vivo Standard</p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 300,
              marginBottom: "1.5rem",
              lineHeight: 1.2,
            }}
          >
            Every amenity.
            <br />
            <em style={{ color: "#C9A96E", fontStyle: "normal" }}>Every convenience.</em>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", lineHeight: 1.75 }}>
            We designed Vivo with real residents in mind — people who want their home to support the
            way they live, work, and connect. From your morning workout to your evening unwind, Vivo
            has what you need.
          </p>
        </div>
      </section>

      <CTABanner
        title="Opening Summer 2026."
        subtitle="Register your interest today and be first to access suites when we open."
        primaryLabel="Register Now"
        primaryHref="/register"
        secondaryLabel="View Floor Plans"
        secondaryHref="/floor-plans"
      />
    </>
  );
}
