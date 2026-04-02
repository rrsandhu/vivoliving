import Link from "next/link";
import type { floorPlans } from "@/lib/data";

type Unit = (typeof floorPlans)[number];

export default function UnitCard({ unit }: { unit: Unit }) {
  const bedroomLabel =
    unit.bedrooms === 0 ? "Studio" : `${unit.bedrooms} Bed`;

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #E5E1DB",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C9A96E")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E5E1DB")}
    >
      {/* Floor plan area */}
      <div
        style={{
          position: "relative",
          aspectRatio: "4/3",
          backgroundColor: "#F7F5F2",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "2rem",
              color: "#1C3144",
            }}
          >
            {unit.sqft}
            <span style={{ fontSize: "1rem", color: "#6B7280" }}> sq ft</span>
          </p>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#6B7280",
              marginTop: "0.25rem",
            }}
          >
            {unit.sqftInterior} interior · {unit.sqftExterior} exterior
          </p>
        </div>

        {/* PDF download button */}
        <a
          href={unit.pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "absolute",
            bottom: "0.75rem",
            right: "0.75rem",
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            padding: "0.375rem 0.75rem",
            backgroundColor: "#1C3144",
            color: "white",
            textDecoration: "none",
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C9A96E")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1C3144")}
        >
          View Plan ↓
        </a>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.25rem",
                color: "#0F1A25",
              }}
            >
              {unit.name}
            </p>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#6B7280",
                marginTop: "0.125rem",
              }}
            >
              {unit.type}
            </p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#C9A96E",
                fontWeight: 600,
              }}
            >
              Contact for Pricing
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            fontSize: "0.875rem",
            color: "#6B7280",
            marginBottom: "1rem",
            borderTop: "1px solid #E5E1DB",
            borderBottom: "1px solid #E5E1DB",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem",
          }}
        >
          <span>{bedroomLabel}</span>
          <span style={{ color: "#E5E1DB" }}>|</span>
          <span>{unit.bathrooms} bath</span>
          <span style={{ color: "#E5E1DB" }}>|</span>
          <span>{unit.sqft} sq ft</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
          {unit.features.map((f) => (
            <span
              key={f}
              style={{
                fontSize: "0.75rem",
                backgroundColor: "#F7F5F2",
                color: "#6B7280",
                padding: "0.25rem 0.625rem",
                border: "1px solid #E5E1DB",
              }}
            >
              {f}
            </span>
          ))}
        </div>

        <div style={{ marginTop: "auto", display: "flex", gap: "0.75rem" }}>
          <Link
            href={`/contact?unit=${unit.id}&type=${encodeURIComponent(unit.type)}`}
            className="btn-primary"
            style={{ flex: 1, fontSize: "0.75rem", padding: "0.75rem 1rem", justifyContent: "center" }}
          >
            Inquire
          </Link>
          <Link
            href="/register"
            className="btn-outline-dark"
            style={{ flex: 1, fontSize: "0.75rem", padding: "0.75rem 1rem", justifyContent: "center" }}
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
