"use client";

import { useState } from "react";
import { floorPlans } from "@/lib/data";
import UnitCard from "@/components/UnitCard";
import CTABanner from "@/components/CTABanner";

const types = ["All", "1 Bed", "2 Bed", "3 Bed"];

export default function FloorPlansPage() {
  const [activeType, setActiveType] = useState("All");
  const [availableOnly, setAvailableOnly] = useState(false);

  const filtered = floorPlans.filter((u) => {
    if (activeType !== "All" && u.type !== activeType) return false;
    if (availableOnly && !u.available) return false;
    return true;
  });

  return (
    <>
      {/* Page header */}
      <section style={{ paddingTop: "10rem", paddingBottom: "4rem", backgroundColor: "#0F1A25" }}>
        <div className="container-vivo">
          <p className="section-label mb-4">Browse Suites</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              fontWeight: 300,
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Floor Plans &amp;
            <br />
            Availability
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", maxWidth: "36rem" }}>
            Explore our selection of 1, 2, and 3 bedroom rental homes. Every suite is finished to a
            high standard with quality appliances and thoughtful layouts.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section
        style={{
          position: "sticky",
          top: "5rem",
          zIndex: 40,
          backgroundColor: "white",
          borderBottom: "1px solid #E5E1DB",
          boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
        }}
      >
        <div className="container-vivo py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  padding: "0.625rem 1.25rem",
                  border: "1px solid",
                  borderColor: activeType === t ? "#1C3144" : "#E5E1DB",
                  backgroundColor: activeType === t ? "#1C3144" : "white",
                  color: activeType === t ? "white" : "#6B7280",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {t}
              </button>
            ))}
          </div>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              color: "#6B7280",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <input
              type="checkbox"
              checked={availableOnly}
              onChange={(e) => setAvailableOnly(e.target.checked)}
              style={{ width: "1rem", height: "1rem", accentColor: "#C9A96E" }}
            />
            Available now only
          </label>
        </div>
      </section>

      {/* Grid */}
      <section
        style={{
          padding: "4rem 0",
          backgroundColor: "#F7F5F2",
          minHeight: "60vh",
        }}
      >
        <div className="container-vivo">
          {filtered.length > 0 ? (
            <>
              <p style={{ fontSize: "0.875rem", color: "#6B7280", marginBottom: "2rem" }}>
                {filtered.length} suite{filtered.length !== 1 ? "s" : ""} found
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((unit) => (
                  <UnitCard key={unit.id} unit={unit} />
                ))}
              </div>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "6rem 0" }}>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.5rem",
                  color: "#0F1A25",
                  marginBottom: "0.5rem",
                }}
              >
                No suites match your filters.
              </p>
              <p style={{ color: "#6B7280" }}>
                Try adjusting your search or contact leasing for more options.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Not finding the right fit?"
        subtitle="Our leasing team can help you find the perfect suite and answer any questions about availability."
        primaryLabel="Contact Leasing"
        primaryHref="/contact"
        secondaryLabel="Book a Tour"
        secondaryHref="/contact"
      />
    </>
  );
}
