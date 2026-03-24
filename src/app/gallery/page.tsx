"use client";

import { useState } from "react";
import { galleryItems } from "@/lib/data";

const categories = ["All", "Exterior", "Lobby", "Suites", "Amenities", "Neighbourhood"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: "10rem", paddingBottom: "4rem", backgroundColor: "#0F1A25" }}>
        <div className="container-vivo">
          <p className="section-label mb-4">Visual Tour</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              fontWeight: 300,
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Gallery
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", maxWidth: "36rem" }}>
            Take a visual tour of Vivo — from the building exterior to beautifully finished suites
            and shared amenity spaces.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ backgroundColor: "white", borderBottom: "1px solid #E5E1DB" }}>
        <div className="container-vivo py-4" style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                padding: "0.625rem 1.25rem",
                border: "1px solid",
                borderColor: activeCategory === c ? "#1C3144" : "#E5E1DB",
                backgroundColor: activeCategory === c ? "#1C3144" : "white",
                color: activeCategory === c ? "white" : "#6B7280",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: "3rem 0", backgroundColor: "#F7F5F2", minHeight: "60vh" }}>
        <div className="container-vivo">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.75rem",
            }}
            className="md:grid-cols-3 lg:grid-cols-4"
          >
            {filtered.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setLightbox(idx)}
                style={{
                  position: "relative",
                  aspectRatio: "1",
                  backgroundColor: "#E5E1DB",
                  overflow: "hidden",
                  outline: "none",
                  cursor: "pointer",
                  border: "none",
                  padding: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#1C3144",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "#0F1A25")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "#1C3144")
                  }
                >
                  <div style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", padding: "1rem" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: "0.875rem",
                      }}
                    >
                      {item.category}
                    </p>
                    <p style={{ fontSize: "0.75rem", marginTop: "0.25rem" }}>{item.alt}</p>
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: "0.75rem",
                    left: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "white",
                      backgroundColor: "rgba(15,26,37,0.8)",
                      padding: "0.25rem 0.5rem",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setLightbox(null)}
        >
          <button
            style={{
              position: "absolute",
              top: "1.5rem",
              right: "1.5rem",
              color: "rgba(255,255,255,0.7)",
              fontSize: "2.5rem",
              fontWeight: 300,
              background: "none",
              border: "none",
              cursor: "pointer",
              lineHeight: 1,
            }}
            onClick={() => setLightbox(null)}
          >
            ×
          </button>
          <button
            style={{
              position: "absolute",
              left: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "rgba(255,255,255,0.7)",
              fontSize: "2.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) =>
                prev === null ? null : prev === 0 ? filtered.length - 1 : prev - 1
              );
            }}
          >
            ‹
          </button>
          <button
            style={{
              position: "absolute",
              right: "1.5rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "rgba(255,255,255,0.7)",
              fontSize: "2.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) =>
                prev === null ? null : prev === filtered.length - 1 ? 0 : prev + 1
              );
            }}
          >
            ›
          </button>
          <div
            style={{
              maxWidth: "56rem",
              width: "100%",
              aspectRatio: "16/9",
              backgroundColor: "#0F1A25",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ textAlign: "center", color: "rgba(255,255,255,0.3)" }}>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.5rem",
                }}
              >
                {filtered[lightbox]?.category}
              </p>
              <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
                {filtered[lightbox]?.alt}
              </p>
              <p style={{ fontSize: "0.75rem", marginTop: "1rem", opacity: 0.5 }}>
                {lightbox + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
