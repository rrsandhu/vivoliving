"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs, siteConfig } from "@/lib/data";
import CTABanner from "@/components/CTABanner";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section style={{ paddingTop: "10rem", paddingBottom: "4rem", backgroundColor: "#0F1A25" }}>
        <div className="container-vivo">
          <p className="section-label mb-4">Questions</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              fontWeight: 300,
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Frequently Asked
            <br />
            <em style={{ color: "#C9A96E", fontStyle: "normal" }}>Questions.</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", maxWidth: "36rem" }}>
            Find answers to common questions about living at Vivo, our leasing process, and what to
            expect.
          </p>
        </div>
      </section>

      <section style={{ padding: "6rem 0", backgroundColor: "#F7F5F2" }}>
        <div className="container-vivo" style={{ maxWidth: "48rem", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid #E5E1DB",
            }}
          >
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid #E5E1DB",
                  padding: "1.5rem 0",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    textAlign: "left",
                    gap: "1.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1.25rem",
                      color: openIndex === i ? "#C9A96E" : "#0F1A25",
                      transition: "color 0.2s",
                    }}
                  >
                    {faq.question}
                  </h3>
                  <span
                    style={{
                      color: "#C9A96E",
                      fontSize: "1.5rem",
                      fontWeight: 300,
                      flexShrink: 0,
                      marginTop: "0.125rem",
                      lineHeight: 1,
                    }}
                  >
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <p
                    style={{
                      color: "#6B7280",
                      lineHeight: 1.75,
                      marginTop: "1rem",
                      paddingRight: "2.5rem",
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "3rem",
              padding: "2rem",
              backgroundColor: "white",
              border: "1px solid #E5E1DB",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: "1.5rem",
                color: "#0F1A25",
                marginBottom: "0.5rem",
              }}
            >
              Still have questions?
            </p>
            <p style={{ color: "#6B7280", marginBottom: "1.5rem" }}>
              Our leasing team is happy to help with anything not covered above.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="btn-primary"
                style={{ fontSize: "0.75rem" }}
              >
                Contact Leasing
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="btn-outline-dark"
                style={{ fontSize: "0.75rem" }}
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
