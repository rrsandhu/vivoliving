"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/data";

function ContactForm() {
  const searchParams = useSearchParams();
  const isTour = searchParams.get("tour") === "true";
  const typeParam = searchParams.get("type") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    moveIn: "",
    unitType: typeParam || "",
    message: "",
    tourDate: "",
    type: isTour ? "tour" : "inquiry",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Connect to Resend, Formspree, or custom API route
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    border: "1px solid #E5E1DB",
    padding: "0.75rem 1rem",
    fontSize: "0.875rem",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontFamily: "var(--font-inter), system-ui, sans-serif",
    fontWeight: 600,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#0F1A25",
    marginBottom: "0.5rem",
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "4rem 0" }}>
        <div
          style={{
            width: "4rem",
            height: "4rem",
            backgroundColor: "rgba(201,169,110,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <span style={{ color: "#C9A96E", fontSize: "1.875rem" }}>✓</span>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "1.875rem",
            color: "#0F1A25",
            marginBottom: "0.75rem",
          }}
        >
          Message Received
        </h2>
        <p style={{ color: "#6B7280", fontSize: "1.125rem", maxWidth: "28rem", margin: "0 auto" }}>
          Thank you for reaching out. Our leasing team will be in touch within 1 business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-outline-dark"
          style={{ marginTop: "2rem", fontSize: "0.75rem", padding: "0.75rem 1.5rem" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {/* Form type toggle */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {["inquiry", "tour"].map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setFormData((p) => ({ ...p, type: t }))}
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              padding: "0.625rem 1.25rem",
              border: "1px solid",
              borderColor: formData.type === t ? "#1C3144" : "#E5E1DB",
              backgroundColor: formData.type === t ? "#1C3144" : "white",
              color: formData.type === t ? "white" : "#6B7280",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {t === "inquiry" ? "General Inquiry" : "Book a Tour"}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
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

      <div className="grid sm:grid-cols-2 gap-5">
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
          <label style={labelStyle}>Desired Move-In</label>
          <input
            type="date"
            name="moveIn"
            value={formData.moveIn}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E1DB")}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Unit Type Interest</label>
          <select
            name="unitType"
            value={formData.unitType}
            onChange={handleChange}
            style={{ ...inputStyle, backgroundColor: "white" }}
            onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
            onBlur={(e) => (e.target.style.borderColor = "#E5E1DB")}
          >
            <option value="">Any unit type</option>
            <option value="1 Bed">1 Bedroom</option>
            <option value="2 Bed">2 Bedroom</option>
            <option value="3 Bed">3 Bedroom</option>
          </select>
        </div>
        {formData.type === "tour" && (
          <div>
            <label style={labelStyle}>Preferred Tour Date</label>
            <input
              type="date"
              name="tourDate"
              value={formData.tourDate}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
              onBlur={(e) => (e.target.style.borderColor = "#E5E1DB")}
            />
          </div>
        )}
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "none" }}
          placeholder="Tell us about yourself, your timeline, or any questions you have..."
          onFocus={(e) => (e.target.style.borderColor = "#C9A96E")}
          onBlur={(e) => (e.target.style.borderColor = "#E5E1DB")}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary"
        style={{
          alignSelf: "flex-start",
          opacity: loading ? 0.6 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading
          ? "Sending..."
          : formData.type === "tour"
          ? "Request a Tour"
          : "Send Inquiry"}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: "10rem", paddingBottom: "4rem", backgroundColor: "#0F1A25" }}>
        <div className="container-vivo">
          <p className="section-label mb-4">Get in Touch</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              fontWeight: 300,
              color: "white",
              marginBottom: "1rem",
            }}
          >
            We&apos;d Love to
            <br />
            <em style={{ color: "#C9A96E", fontStyle: "normal" }}>Hear From You.</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", maxWidth: "36rem" }}>
            Whether you&apos;re ready to move or just starting your search, our leasing team is here
            to help.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "6rem 0", backgroundColor: "#F7F5F2" }}>
        <div className="container-vivo">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Sidebar */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
              className="lg:col-span-1"
            >
              <div>
                <p className="section-label mb-5">Leasing Office</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem", color: "#6B7280" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1.125rem",
                      color: "#0F1A25",
                    }}
                  >
                    {siteConfig.address}
                  </p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
                  >
                    {siteConfig.phone}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7280")}
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div>
                <p className="section-label mb-5">Hours</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {siteConfig.leasingHours.map((h) => (
                    <div
                      key={h.days}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.875rem",
                      }}
                    >
                      <span style={{ color: "#0F1A25" }}>{h.days}</span>
                      <span style={{ color: "#6B7280" }}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Maps embed */}
              <div style={{ aspectRatio: "1", overflow: "hidden", border: "1px solid #E5E1DB" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2610.4!2d-122.8468!3d49.1876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9b2a3b1e2c1%3A0x0!2s13255+104+Ave%2C+Surrey%2C+BC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca&q=13255+104+Ave,+Surrey,+BC"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vivo location — 13255 104 Ave, Surrey, BC"
                />
              </div>
            </div>

            {/* Form */}
            <div
              className="lg:col-span-2"
              style={{
                backgroundColor: "white",
                border: "1px solid #E5E1DB",
                padding: "2.5rem",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "1.875rem",
                  color: "#0F1A25",
                  marginBottom: "0.5rem",
                }}
              >
                Send a Message
              </h2>
              <p style={{ color: "#6B7280", fontSize: "0.875rem", marginBottom: "2rem" }}>
                Fill out the form below and a member of our leasing team will respond within 1
                business day.
              </p>
              <Suspense fallback={<div style={{ color: "#6B7280" }}>Loading form...</div>}>
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
