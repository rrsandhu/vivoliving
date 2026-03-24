import Link from "next/link";
import type { floorPlans } from "@/lib/data";

type Unit = (typeof floorPlans)[number];

export default function UnitCard({ unit }: { unit: Unit }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid #E5E1DB",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "#C9A96E")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "#E5E1DB")
      }
    >
      {/* Floor plan image placeholder */}
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
              fontSize: "1.5rem",
              color: "#6B7280",
            }}
          >
            {unit.sqft} sq ft
          </p>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(107,114,128,0.6)",
              marginTop: "0.25rem",
            }}
          >
            Floor Plan
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            left: "0.75rem",
            fontSize: "0.75rem",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "0.375rem 0.75rem",
            backgroundColor: unit.available ? "#f0fdf4" : "#F7F5F2",
            color: unit.available ? "#15803d" : "#6B7280",
            border: `1px solid ${unit.available ? "#bbf7d0" : "#E5E1DB"}`,
          }}
        >
          {unit.available ? `Available ${unit.availableDate}` : `Available ${unit.availableDate}`}
        </div>
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
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.25rem",
                color: "#1C3144",
              }}
            >
              From ${unit.startingRent.toLocaleString()}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#6B7280" }}>/month</p>
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
          <span>{unit.bedrooms} bed</span>
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
