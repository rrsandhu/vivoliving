"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitType: "",
    moveIn: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1px solid #E5E1DB",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    outline: "none",
    backgroundColor: "white",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#0F1A25",
    marginBottom: "0.5rem",
  };

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#F7F5F2", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
        <div style={{ textAlign: "center", maxWidth: "480px" }}>
          <div style={{ width: "5rem", height: "5rem", backgroundColor: "rgba(201,169,110,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem", borderRadius: "50%" }}>
            <span style={{ color: "#C9A96E", fontSize: "2rem" }}>✓</span>
          </div>
          <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2.5rem", fontWeight: 300, color: "#0F1A25", marginBottom: "1rem" }}>
            You&apos;re on the list.
          </p>
          <p style={{ color: "#6B7280", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2rem" }}>
            Thank you for registering your interest in Vivo. We&apos;ll be in touch with updates, priority access, and availability information as we approach our summer 2026 opening.
          </p>
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: "clamp(6rem, 12vw, 10rem)", paddingBottom: "clamp(2rem, 5vw, 4rem)", backgroundColor: "#0F1A25" }}>
        <div className="container-vivo">
          <p className="section-label mb-4">Opening Summer 2026</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              fontWeight: 300,
              color: "white",
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            Be the First to<br />
            <em style={{ color: "#C9A96E", fontStyle: "normal" }}>Call Vivo Home.</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", maxWidth: "36rem" }}>
            Register your interest today and receive priority access to suites, floor plans, and leasing updates before we open to the public.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section style={{ padding: "clamp(3rem, 8vw, 6rem) 0", backgroundColor: "#F7F5F2" }}>
        <div className="container-vivo">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }} className="lg:grid-cols-3-1">
            <div style={{ display: "grid", gap: "3rem" }} className="grid lg:grid-cols-[1fr_2fr]">

              {/* Sidebar */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div>
                  <p className="section-label mb-4">Why Register?</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      "Priority access before public launch",
                      "First look at floor plans & pricing",
                      "Exclusive leasing incentives",
                      "Updates as opening approaches",
                    ].map((item) => (
                      <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", fontSize: "0.9rem", color: "#6B7280" }}>
                        <span style={{ width: "1.25rem", height: "1.25rem", backgroundColor: "rgba(201,169,110,0.15)", color: "#C9A96E", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ padding: "1.5rem", backgroundColor: "#1C3144", color: "white" }}>
                  <p style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.5rem", fontWeight: 300, marginBottom: "0.5rem" }}>
                    Summer 2026
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Expected opening
                  </p>
                  <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.1)", margin: "1rem 0" }} />
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                    13255 104 Ave<br />Surrey, BC
                  </p>
                </div>
              </div>

              {/* Form */}
              <div style={{ backgroundColor: "white", border: "1px solid #E5E1DB", padding: "clamp(1.25rem, 4vw, 2.5rem)" }}>
                <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "2rem", color: "#0F1A25", marginBottom: "0.5rem" }}>
                  Register Your Interest
                </h2>
                <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "2rem" }}>
                  Fill out the form below and we&apos;ll keep you informed every step of the way.
                </p>

                {error && (
                  <div style={{ backgroundColor: "#FEF2F2", border: "1px solid #FECACA", color: "#DC2626", padding: "0.75rem 1rem", fontSize: "0.875rem", marginBottom: "1.5rem" }}>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Jane Smith"
                        onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E1DB")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="jane@example.com"
                        onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E1DB")}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="(604) 555-0100"
                        onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E1DB")}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Unit Type Interest</label>
                      <select
                        name="unitType"
                        value={formData.unitType}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E1DB")}
                      >
                        <option value="">Any unit type</option>
                        <option value="1 Bed">1 Bedroom</option>
                        <option value="2 Bed">2 Bedroom</option>
                        <option value="3 Bed">3 Bedroom</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Expected Move-In</label>
                    <select
                      name="moveIn"
                      value={formData.moveIn}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E1DB")}
                    >
                      <option value="">Not sure yet</option>
                      <option value="Summer 2026">Summer 2026 (opening)</option>
                      <option value="Fall 2026">Fall 2026</option>
                      <option value="2027">2027 or later</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Anything else?</label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      style={{ ...inputStyle, resize: "none" }}
                      placeholder="Questions, specific needs, or anything you'd like us to know..."
                      onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E1DB")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full"
                    style={{ opacity: loading ? 0.6 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                  >
                    {loading ? "Registering..." : "Register My Interest"}
                  </button>

                  <p style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                    Your information is kept private and will only be used to contact you about Vivo.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
