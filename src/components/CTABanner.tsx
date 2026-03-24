import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title = "Your New Home is Waiting",
  subtitle = "Register your interest today and get priority access to suites and leasing updates.",
  primaryLabel = "View Availability",
  primaryHref = "/floor-plans",
  secondaryLabel = "Register Now",
  secondaryHref = "/register",
}: CTABannerProps) {
  return (
    <section style={{ backgroundColor: "#1C3144", paddingTop: "5rem", paddingBottom: "5rem" }}>
      <div className="container-vivo text-center">
        <p className="section-label mb-4">Get Started</p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 300,
            color: "white",
            marginBottom: "1rem",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: "1.125rem",
            marginBottom: "2.5rem",
            maxWidth: "36rem",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="btn-outline">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
