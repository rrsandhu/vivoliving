import Link from "next/link";
import { neighbourhoodItems } from "@/lib/data";
import CTABanner from "@/components/CTABanner";

const iconChar: Record<string, string> = {
  train: "◈",
  "shopping-bag": "◉",
  utensils: "◎",
  tree: "◆",
  "book-open": "◇",
  "shopping-cart": "▣",
};

export default function NeighbourhoodPage() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: "10rem", paddingBottom: "4rem", backgroundColor: "#0F1A25" }}>
        <div className="container-vivo">
          <p className="section-label mb-4">Where You&apos;ll Live</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 3.75rem)",
              fontWeight: 300,
              color: "white",
              marginBottom: "1rem",
            }}
          >
            Surrey City Centre
            <br />
            <em style={{ color: "#C9A96E", fontStyle: "normal" }}>Awaits.</em>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.125rem", maxWidth: "36rem" }}>
            Vivo is at the centre of one of Metro Vancouver&apos;s fastest-growing and most connected
            urban communities. Everything is close — and getting closer.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "6rem 0", backgroundColor: "#F7F5F2" }}>
        <div className="container-vivo grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">The Neighbourhood</p>
            <h2 className="section-title mb-6">
              Urban convenience.
              <br />
              Community warmth.
            </h2>
            <p className="section-subtitle mb-4">
              Surrey City Centre is rapidly evolving into one of Metro Vancouver&apos;s premier urban
              districts — with world-class transit, a growing restaurant scene, and green spaces
              that bring the outdoors in.
            </p>
            <p style={{ color: "#6B7280", lineHeight: 1.75 }}>
              At Vivo, you&apos;re not just choosing an apartment — you&apos;re choosing a lifestyle.
              Walk to the SkyTrain. Spend a Saturday afternoon in Holland Park. Grab coffee on your
              way to work. This is what urban living is supposed to feel like.
            </p>
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
      </section>

      {/* Highlights */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container-vivo">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label mb-4">Nearby</p>
            <h2 className="section-title">Everything within reach.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighbourhoodItems.map((cat) => (
              <div
                key={cat.category}
                style={{ border: "1px solid #E5E1DB", padding: "1.5rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      backgroundColor: "rgba(201,169,110,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#C9A96E",
                    }}
                  >
                    {iconChar[cat.icon] || "○"}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1.25rem",
                      color: "#0F1A25",
                    }}
                  >
                    {cat.category}
                  </h3>
                </div>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        fontSize: "0.875rem",
                        color: "#6B7280",
                      }}
                    >
                      <span
                        style={{
                          width: "0.375rem",
                          height: "0.375rem",
                          borderRadius: "50%",
                          backgroundColor: "#C9A96E",
                          marginTop: "0.5rem",
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transit callout */}
      <section style={{ padding: "6rem 0", backgroundColor: "#1C3144", color: "white" }}>
        <div className="container-vivo grid md:grid-cols-3 gap-12 text-center">
          {[
            { value: "5 min", label: "Walk to Central City SkyTrain" },
            { value: "45 min", label: "to Downtown Vancouver" },
            { value: "Steps", label: "to Holland Park" },
          ].map((item) => (
            <div key={item.label}>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "#C9A96E",
                  marginBottom: "0.75rem",
                }}
              >
                {item.value}
              </p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", letterSpacing: "0.05em" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <CTABanner
        title="Love the neighbourhood?"
        subtitle="You'll love living here even more. Book a tour and see your new home in context."
        primaryLabel="Book a Tour"
        primaryHref="/contact"
        secondaryLabel="View Suites"
        secondaryHref="/floor-plans"
      />
    </>
  );
}
