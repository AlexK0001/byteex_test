import type { FC } from "react";
import Image from "next/image";
import type { HeroContent } from "@/types/contentful";

interface HeroProps { content: HeroContent; }

function ArrowRight() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
      <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function StarRow({ count }: { count: number }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`star${i >= count ? " star-empty" : ""}`} />
      ))}
    </div>
  );
}

function BulletItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
      <span style={{ marginTop: 3, flexShrink: 0 }}>{icon}</span>
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: "23px", letterSpacing: "0.03em", color: "#676869" }}>
        {text}
      </span>
    </li>
  );
}

const COLLAGE = {
  main:    "https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=391&h=445&fit=crop&auto=format",
  tall:    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=158&h=300&fit=crop&auto=format",
  center:  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=220&h=316&fit=crop&auto=format",
  right:   "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=116&h=225&fit=crop&auto=format",
  thumb1:  "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=75&h=75&fit=crop&auto=format",
  thumb2:  "https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=75&h=75&fit=crop&auto=format",
  thumb3:  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=75&h=75&fit=crop&auto=format",
  thumb4:  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=75&h=75&fit=crop&auto=format",
};

const icons = {
  check: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17L4 12" stroke="#01005B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  leaf: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.34C3.45 19.9 4.15 20.5 4.65 20.07C7.1 18 10.5 17 14 17C18.42 17 22 13.42 22 9V3L17 8Z" fill="#01005B"/>
    </svg>
  ),
  sparkle: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L13.09 8.26L19 6L14.74 10.91L21 12L14.74 13.09L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.09L3 12L9.26 10.91L5 6L10.91 8.26L12 2Z" fill="#01005B"/>
    </svg>
  ),
};

const Hero: FC<HeroProps> = ({ content }) => {
  const bullets = [
    { icon: icons.check,   text: content.bulletPoints[0] ?? "Beautiful, comfortable loungewear for day or night." },
    { icon: icons.leaf,    text: content.bulletPoints[1] ?? "No wasteful extras, like tags or plastic packaging." },
    { icon: icons.sparkle, text: "Our signature fabric is incredibly comfortable — unlike anything you've ever felt." },
  ];

  return (
    <>
      {/* ── Announcement bar ── */}
      <div className="announcement-bar">
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)&nbsp;&nbsp;|&nbsp;&nbsp;
        FREE SHIPPING on orders &gt; $200&nbsp;&nbsp;|&nbsp;&nbsp;easy 45 day return window.
      </div>

      {/* ── Hero ── */}
      <section style={{ background: "#fff", position: "relative", overflow: "hidden" }}>
        {/* cream gradient top-left */}
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: 530, pointerEvents: "none",
          background: "linear-gradient(180deg,#F9F0E5 0%,rgba(249,240,229,0.18) 43%,rgba(249,240,229,0) 100%)",
        }} />

        <div className="wrap" style={{ display: "flex", alignItems: "flex-start", gap: 40, paddingTop: 48, paddingBottom: 64, position: "relative" }}>

          {/* ══ LEFT ══ */}
          <div style={{ flex: 1, maxWidth: 560 }}>

            {/* Headline */}
            <h1 style={{
              fontFamily: "var(--font-serif)",
              fontSize: 38, lineHeight: "45px",
              letterSpacing: "0.04em", color: "#01005B",
              fontWeight: 400, marginBottom: 20,
            }}>
              {content.headline}
            </h1>

            {/* Bullet list */}
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {bullets.map((b, i) => <BulletItem key={i} {...b} />)}
            </ul>

            {/* CTA */}
            <div style={{ marginBottom: 32 }}>
              <a href={content.ctaUrl} className="btn-primary">
                {content.ctaText}
                <ArrowRight />
              </a>
            </div>

            {/* Review card */}
            <div className="review-card" style={{ padding: 20, maxWidth: 416 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
                {/* Avatar */}
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: "#1C2E58", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-sans)", color: "#fff", fontSize: 14, fontWeight: 500,
                }}>
                  {content.reviewerName.charAt(0)}
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 4 }}>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: 15, letterSpacing: "0.03em", color: "#676869" }}>
                      {content.reviewerName}
                    </span>
                    <StarRow count={4} />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "0.02em", color: "#828282" }}>
                      {content.reviewCount}
                    </span>
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: "23px", letterSpacing: "0.04em", color: "#676869" }}>
                {content.reviewText}
              </p>
            </div>
          </div>

          {/* ══ RIGHT — Image Collage ══ */}
          <div className="hero-collage">
            {/* Main large image */}
            <div style={{ position: "absolute", left: 100, top: 0 }}>
              <Image src={COLLAGE.main} alt="Loungewear collection" width={391} height={445}
                style={{ borderRadius: 8, objectFit: "cover", display: "block" }} unoptimized priority />
            </div>
            {/* Tall left image */}
            <div style={{ position: "absolute", left: 0, top: 30 }}>
              <Image src={COLLAGE.tall} alt="Loungewear model" width={158} height={300}
                style={{ borderRadius: 8, objectFit: "cover", display: "block" }} unoptimized />
            </div>
            {/* Center featured (with white border) */}
            <div style={{ position: "absolute", left: 55, top: 50, border: "4px solid #fff", borderRadius: 6 }}>
              <Image src={COLLAGE.center} alt="Featured" width={220} height={316}
                style={{ display: "block", objectFit: "cover" }} unoptimized />
            </div>
            {/* Tall right image */}
            <div style={{ position: "absolute", right: 0, top: 0 }}>
              <Image src={COLLAGE.right} alt="Style" width={116} height={225}
                style={{ borderRadius: 8, objectFit: "cover", display: "block" }} unoptimized />
            </div>
            {/* Thumbnails row */}
            <div style={{ position: "absolute", left: 55, top: 380, display: "flex", gap: 4 }}>
              {[COLLAGE.thumb1, COLLAGE.thumb2, COLLAGE.thumb3, COLLAGE.thumb4].map((src, i) => (
                <Image key={i} src={src} alt={`Variant ${i + 1}`} width={75} height={75}
                  style={{ borderRadius: 4, objectFit: "cover", display: "block" }} unoptimized />
              ))}
            </div>
            {/* Label */}
            <div style={{ position: "absolute", right: 0, top: 238, textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: "22px", letterSpacing: "0.03em", color: "#676869" }}>
                White Robe
              </p>
              <div style={{ display: "flex", gap: 4, justifyContent: "center", marginTop: 4 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#6FB880", border: "2px solid #000" }} />
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#FF8A01", border: "2px solid #D7D7D7" }} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;