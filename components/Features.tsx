import type { FC } from "react";
import Image from "next/image";
import type { ProductFeature } from "@/types/contentful";

interface FeaturesProps { features: ProductFeature[]; }

const ICON_SVG: Record<string, string> = {
  leaf:    "M17 8C8 10 5.9 16.17 3.82 19.34C3.45 19.9 4.15 20.5 4.65 20.07C7.1 18 10.5 17 14 17C18.42 17 22 13.42 22 9V3L17 8Z",
  recycle: "M12 2L8 7H11V13H13V7H16L12 2Z M7.5 14L4 19H9.5L10.5 17H7L8.5 14.5L7.5 14Z M16.5 14L15.5 14.5L17 17H13.5L14.5 19H20L16.5 14Z",
  home:    "M3 12L12 3L21 12V21H15V15H9V21H3V12Z",
  star:    "M12 2L14.4 9.2H22L16 13.8L18.4 21L12 16.4L5.6 21L8 13.8L2 9.2H9.6L12 2Z",
};

const THUMBS = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=64&h=64&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=64&h=64&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=64&h=64&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=64&h=64&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=64&h=64&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=64&h=64&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=64&h=64&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=64&h=64&fit=crop&auto=format",
];

const Features: FC<FeaturesProps> = ({ features }) => (
  <section id="shop" style={{ padding: "64px 0" }}>
    <div className="wrap">
      <h2 style={{
        fontFamily: "var(--font-serif)", fontSize: 32, lineHeight: "40px",
        letterSpacing: "0.04em", color: "#01005B", fontWeight: 400, marginBottom: 48,
      }}>
        Loungewear you can be proud of.
      </h2>

      <div style={{ display: "flex", gap: 64, alignItems: "flex-start" }}>

        {/* Feature list */}
        <div style={{ flex: 1, maxWidth: 560 }}>
          {features.map((f, i) => (
            <div key={i} className="feature-row">
              {/* Icon circle */}
              <div style={{
                width: 42, height: 42, borderRadius: "50%", background: "#F9F0E5",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d={ICON_SVG[f.icon] ?? ICON_SVG.star} fill="#01005B"/>
                </svg>
              </div>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-serif)", fontSize: 22, lineHeight: "24px",
                  letterSpacing: "0.04em", color: "#01005B", marginBottom: 6,
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: "23px",
                  letterSpacing: "0.03em", color: "#6C6C6C",
                }}>
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Product image + thumbnails */}
        <div style={{ flexShrink: 0, width: 429, position: "relative" }}>
          {/* Arrow left */}
          <button className="slider-arrow" style={{ position: "absolute", left: -36, top: "50%", transform: "translateY(-50%)" }} aria-label="prev">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M9 1L1 9L9 17" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div style={{ borderRadius: 8, overflow: "hidden", width: 429, height: 630 }}>
            <Image
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=429&h=630&fit=crop&auto=format"
              alt="White Robe" width={429} height={630}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              unoptimized
            />
          </div>

          {/* Arrow right */}
          <button className="slider-arrow" style={{ position: "absolute", right: -36, top: "50%", transform: "translateY(-50%)" }} aria-label="next">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M1 1L9 9L1 17" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: "22px",
            letterSpacing: "0.03em", color: "#676869", textAlign: "center", marginTop: 12,
          }}>
            White Robe
          </p>

          {/* Thumbnail strip */}
          <div style={{ display: "flex", gap: 4, marginTop: 8, justifyContent: "center", flexWrap: "wrap" }}>
            {THUMBS.map((src, i) => (
              <div key={i} style={{
                width: 32, height: 32, borderRadius: 3, overflow: "hidden",
                outline: i === 0 ? "2px solid #01005B" : "none",
              }}>
                <Image src={src} alt={`thumb ${i}`} width={32} height={32}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Features;