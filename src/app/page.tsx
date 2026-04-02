"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, floorPlans, amenities } from "@/lib/data";
import CTABanner from "@/components/CTABanner";

const stats = [
  { value: "115", label: "Rental Homes" },
  { value: "1–3", label: "Bedroom Options" },
  { value: "14", label: "Stories" },
  { value: "Steps", label: "to SkyTrain" },
];

const unitTypes = [
  {
    type: "1 Bedroom",
    sqft: "548–631 sq ft",
    from: "$2,095",
    description:
      "Thoughtfully designed for urban professionals and couples. Efficient, bright, and beautifully finished.",
    href: "/floor-plans",
  },
  {
    type: "2 Bedroom",
    sqft: "842–978 sq ft",
    from: "$2,895",
    description:
      "Spacious two-bedroom layouts with modern kitchens, open living areas, and private balconies.",
    href: "/floor-plans",
  },
  {
    type: "3 Bedroom",
    sqft: "1,178–1,254 sq ft",
    from: "$3,795",
    description:
      "Generous family-sized homes with room to grow, featuring premium finishes and sweeping views.",
    href: "/floor-plans",
  },
];

const featuredAmenities = amenities.building.slice(0, 6);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          height: "82vh",
          maxHeight: "900px",
          minHeight: "600px",
          display: "flex",
          alignItems: "flex-end",
          backgroundColor: "#0F1A25",
          overflow: "hidden",
        }}
      >
        {/* Hero image */}
        <Image
          src="/images/hero1.png"
          alt="Vivo — Surrey City Centre"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(15,26,37,0.25) 0%, rgba(15,26,37,0.5) 55%, rgba(15,26,37,0.88) 100%)",
          }}
        />

        <div
          className="container-vivo"
          style={{ position: "relative", paddingBottom: "6rem", paddingTop: "10rem", width: "100%" }}
        >
          <p className="section-label mb-6">Now Leasing</p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}
          >
            Live at the
            <br />
            <em style={{ color: "#C9A96E", fontStyle: "normal" }}>
              Heart of Surrey
            </em>
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.25rem",
              maxWidth: "32rem",
              marginBottom: "1rem",
              lineHeight: 1.75,
            }}
          >
            Modern 1, 2 &amp; 3 bedroom rental homes at 13255 104 Ave — steps
            from SkyTrain, parks, and everything Surrey City Centre has to
            offer.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.875rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "2.5rem",
            }}
          >
            {siteConfig.address}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/floor-plans" className="btn-primary">
              View Availability
            </Link>
            <Link href="/register" className="btn-outline">
              Register Now
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "2rem",
              backgroundColor: "rgba(255,255,255,0.2)",
            }}
          />
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "#1C3144" }}>
        <div className="container-vivo">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
            className="md:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "2rem 1.5rem",
                  textAlign: "center",
                  borderRight: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.875rem",
                    fontWeight: 300,
                    color: "white",
                    marginBottom: "0.25rem",
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section style={{ padding: "6rem 0", backgroundColor: "#F7F5F2" }}>
        <div className="container-vivo">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Welcome to Vivo</p>
              <h2 className="section-title mb-6">
                A new standard
                <br />
                for Surrey living.
              </h2>
              <p className="section-subtitle mb-4">
                Vivo is a purpose-built rental community designed for the way
                you actually live. From the moment you step inside, you&apos;ll
                notice the difference — in the details, the light, and the quiet
                confidence of a home built to last.
              </p>
              <p
                style={{
                  color: "#6B7280",
                  lineHeight: 1.75,
                  marginBottom: "2rem",
                }}
              >
                Located at 13255 104 Ave in Surrey&apos;s dynamic city centre,
                Vivo places you steps from the Central City SkyTrain, Holland
                Park, restaurants, and retail — all without sacrificing the
                peace and privacy of home.
              </p>
              <Link href="/amenities" className="btn-outline-dark">
                Explore Amenities
              </Link>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/5", position: "relative", overflow: "hidden" }}>
                <Image
                  src="/images/building2.png"
                  alt="Vivo building exterior"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.5rem",
                  left: "-1.5rem",
                  backgroundColor: "#C9A96E",
                  padding: "1.5rem",
                  maxWidth: "200px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), Georgia, serif",
                    fontSize: "1.5rem",
                    color: "white",
                    marginBottom: "0.25rem",
                  }}
                >
                  115
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.8)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Purpose-built rental homes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unit types */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container-vivo">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-label mb-4">Find Your Home</p>
            <h2 className="section-title">
              Thoughtfully designed
              <br />
              rental homes.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {unitTypes.map((u) => (
              <div
                key={u.type}
                style={{
                  border: "1px solid #E5E1DB",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#C9A96E")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#E5E1DB")
                }
              >
                <p className="section-label mb-3">{u.type}</p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6B7280",
                    marginBottom: "1rem",
                  }}
                >
                  {u.sqft}
                </p>
                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    marginBottom: "2rem",
                    flex: 1,
                  }}
                >
                  {u.description}
                </p>
                <Link
                  href={u.href}
                  style={{
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#1C3144",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#C9A96E")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#1C3144")
                  }
                >
                  View Floor Plans <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities preview */}
      <section style={{ padding: "6rem 0", backgroundColor: "#F7F5F2" }}>
        <div className="container-vivo">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              marginBottom: "4rem",
            }}
            className="md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="section-label mb-4">Building Features</p>
              <h2 className="section-title">
                Amenities designed
                <br />
                around your lifestyle.
              </h2>
            </div>
            <Link href="/amenities" className="btn-outline-dark" style={{ flexShrink: 0 }}>
              View All Amenities
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredAmenities.map((a) => (
              <div
                key={a.id}
                style={{
                  backgroundColor: "white",
                  border: "1px solid #E5E1DB",
                  padding: "1.5rem",
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
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      color: "#C9A96E",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {a.icon.slice(0, 2).toUpperCase()}
                  </span>
                </div>
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
                <p
                  style={{
                    color: "#6B7280",
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                  }}
                >
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhood preview */}
      <section
        style={{
          padding: "6rem 0",
          backgroundColor: "#1C3144",
          color: "white",
        }}
      >
        <div className="container-vivo">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-4">Location</p>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  fontWeight: 300,
                  lineHeight: 1.2,
                  marginBottom: "1.5rem",
                }}
              >
                Surrey City Centre
                <br />
                <em style={{ color: "#C9A96E", fontStyle: "normal" }}>
                  at your doorstep.
                </em>
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "1.125rem",
                  lineHeight: 1.75,
                  marginBottom: "1.5rem",
                }}
              >
                Vivo sits at the centre of Surrey&apos;s most vibrant and
                fast-growing urban neighbourhood. Everything you need — transit,
                parks, dining, and daily essentials — is minutes away on foot.
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                {[
                  "5 min walk to Central City SkyTrain",
                  "Steps from Holland Park",
                  "45 min to Downtown Vancouver",
                  "Adjacent to Central City Mall",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "rgba(255,255,255,0.7)",
                      fontSize: "0.875rem",
                    }}
                  >
                    <span
                      style={{
                        width: "0.375rem",
                        height: "0.375rem",
                        borderRadius: "50%",
                        backgroundColor: "#C9A96E",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/neighbourhood"
                className="btn-outline"
                style={{ fontSize: "0.75rem" }}
              >
                Explore the Neighbourhood
              </Link>
            </div>
            {/* Google Maps embed */}
            <div style={{ aspectRatio: "1", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
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
        </div>
      </section>

      {/* Gallery teaser */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container-vivo">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-label mb-4">Gallery</p>
            <h2 className="section-title">See yourself at home.</h2>
          </div>
          {/* Gallery grid placeholder */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
            className="md:grid-cols-3"
          >
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#F7F5F2",
                  border: "1px solid #E5E1DB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  aspectRatio: i === 0 ? "auto" : "1",
                  minHeight: i === 0 ? "300px" : undefined,
                  gridRow: i === 0 ? "span 2" : undefined,
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    color: "rgba(107,114,128,0.4)",
                    padding: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), Georgia, serif",
                      fontSize: "1.125rem",
                    }}
                  >
                    Image {i + 1}
                  </p>
                  <p style={{ fontSize: "0.75rem" }}>Replace with photo</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/gallery" className="btn-outline-dark">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Quote/lifestyle section */}
      <section style={{ padding: "6rem 0", backgroundColor: "#F7F5F2" }}>
        <div
          className="container-vivo"
          style={{ maxWidth: "48rem", textAlign: "center" }}
        >
          <p className="section-label mb-6">The Vivo Difference</p>
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 300,
              color: "#0F1A25",
              lineHeight: 1.3,
              marginBottom: "1.5rem",
            }}
          >
            &ldquo;Not just a place to live —
            <br />
            <em style={{ color: "#C9A96E", fontStyle: "normal" }}>
              a place to thrive.&rdquo;
            </em>
          </blockquote>
          <p
            style={{
              color: "#6B7280",
              fontSize: "1.125rem",
              lineHeight: 1.75,
            }}
          >
            Every detail at Vivo has been considered — from the quality of the
            finishes to the care of the spaces between suites. We built Vivo for
            residents who expect more from their home.
          </p>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to call Vivo home?"
        subtitle="Our leasing team is ready to help you find the right suite. Schedule a private tour and see it for yourself."
        primaryLabel="View Available Suites"
        primaryHref="/floor-plans"
        secondaryLabel="Register Now"
        secondaryHref="/register"
      />
    </>
  );
}
