"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function RegisterPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show if already dismissed this session
    const dismissed = sessionStorage.getItem("vivo-popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setVisible(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("vivo-popup-dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backgroundColor: "rgba(15,26,37,0.7)",
        backdropFilter: "blur(4px)",
        animation: "fadeIn 0.3s ease-out",
        overflowY: "auto",
      }}
      onClick={dismiss}
    >
      <div
        style={{
          backgroundColor: "white",
          maxWidth: "520px",
          width: "100%",
          position: "relative",
          animation: "fadeUp 0.4s ease-out",
          maxHeight: "calc(100dvh - 2rem)",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top bar */}
        <div style={{ height: "4px", backgroundColor: "#C9A96E" }} />

        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#9CA3AF",
            fontSize: "1.5rem",
            lineHeight: 1,
            padding: "0.25rem",
          }}
        >
          ×
        </button>

        <div style={{ padding: "clamp(1.25rem, 5vw, 2.5rem)" }}>
          {/* Label */}
          <p
            style={{
              fontSize: "0.7rem",
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A96E",
              marginBottom: "1rem",
            }}
          >
            Now Accepting Registrations
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.5rem, 5vw, 2rem)",
              fontWeight: 300,
              color: "#0F1A25",
              lineHeight: 1.15,
              marginBottom: "1rem",
            }}
          >
            Vivo opens<br />
            <em style={{ color: "#C9A96E", fontStyle: "normal" }}>Summer 2026.</em>
          </h2>

          {/* Body */}
          <p
            style={{
              color: "#6B7280",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              marginBottom: "1.75rem",
            }}
          >
            Be first in line. Register your interest today and get priority access to suites, floor plans, and exclusive leasing updates before we open to the public.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/register" onClick={dismiss} className="btn-primary" style={{ fontSize: "0.75rem" }}>
              Register Now
            </Link>
            <button
              onClick={dismiss}
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                color: "#9CA3AF",
                cursor: "pointer",
                padding: "0.875rem 0",
              }}
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
