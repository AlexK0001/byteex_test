"use client";
import Image from "next/image";
import type { HeroContent } from "@/types/contentful";

interface HeroProps {
  content: HeroContent;
}

function StarRating({ count = 4 }: { count?: number }) {
  return (
    <div className="flex gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={i < count ? "#FFB801" : "#D7D7D7"}
        >
          <path d="M6 0.5L7.34 4.18H11.09L8.07 6.47L9.18 10.18L6 7.9L2.82 10.18L3.93 6.47L0.91 4.18H4.66L6 0.5Z" />
        </svg>
      ))}
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
      <path
        d="M1 5H17M17 5L13 1M17 5L13 9"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Unsplash-зображення (публічні, безкоштовні) замість оригінальних з макету
const HERO_IMAGES = [
  { src: "https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=300&h=420&fit=crop", alt: "Loungewear model 1", width: 158, height: 300, className: "rounded-[8px] object-cover" },
  { src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=220&h=316&fit=crop", alt: "Loungewear model 2", width: 220, height: 316, className: "rounded-[8px] object-cover border-4 border-white shadow-card" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=116&h=225&fit=crop", alt: "Loungewear model 3", width: 116, height: 225, className: "rounded-[8px] object-cover" },
  { src: "https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=75&h=87&fit=crop", alt: "Loungewear model 4", width: 75, height: 87, className: "rounded-[8px] object-cover" },
  { src: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=75&h=87&fit=crop", alt: "Loungewear model 5", width: 75, height: 87, className: "rounded-[8px] object-cover" },
];

// Bullet-point іконки (SVG)
function BulletIcon({ type }: { type: "check" | "leaf" | "sparkle" }) {
  if (type === "leaf")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
        <path d="M17 8C8 10 5.9 16.17 3.82 19.34C3.45 19.9 4.15 20.5 4.65 20.07C7.1 18 10.5 17 14 17C18.42 17 22 13.42 22 9V3L17 8Z" fill="#01005B" />
      </svg>
    );
  if (type === "sparkle")
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
        <path d="M12 2L13.09 8.26L19 6L14.74 10.91L21 12L14.74 13.09L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.09L3 12L9.26 10.91L5 6L10.91 8.26L12 2Z" fill="#01005B" />
      </svg>
    );
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
      <path d="M20 6L9 17L4 12" stroke="#01005B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const bulletIcons: Array<"check" | "leaf" | "sparkle"> = ["check", "leaf", "sparkle"];

export default function Hero({ content }: HeroProps) {
  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)&nbsp;&nbsp;|&nbsp;&nbsp;
        FREE SHIPPING on orders &gt; $200&nbsp;&nbsp;|&nbsp;&nbsp;easy 45 day return window.
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        {/* Cream gradient top */}
        <div
          className="absolute top-0 left-[-197px] w-[1691px] h-[530px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #F9F0E5 0%, rgba(249,240,229,0.18) 43.05%, rgba(249,240,229,0) 100%)",
          }}
        />

        <div className="relative max-w-[1465px] mx-auto px-6 md:px-[96px] pt-[48px] pb-[60px]">
          <div className="flex items-start justify-between gap-8">
            {/* LEFT COLUMN */}
            <div className="flex-1 max-w-[580px]">
              {/* Headline */}
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "38px",
                  lineHeight: "45px",
                  letterSpacing: "0.04em",
                  color: "#01005B",
                  fontWeight: 400,
                }}
                className="mb-5"
              >
                {content.headline}
              </h1>

              {/* Bullet points */}
              <ul className="flex flex-col gap-[10px] mb-8">
                {content.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <BulletIcon type={bulletIcons[i % bulletIcons.length]} />
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "15px",
                        lineHeight: "23px",
                        letterSpacing: "0.03em",
                        color: "#676869",
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
                <li className="flex items-start gap-3">
                  <BulletIcon type="sparkle" />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      lineHeight: "23px",
                      letterSpacing: "0.03em",
                      color: "#676869",
                    }}
                  >
                    Our signature fabric is incredibly comfortable — unlike anything you've ever felt.
                  </span>
                </li>
              </ul>

              {/* CTA Button */}
              <div className="mb-8">
                <a href={content.ctaUrl} className="btn-primary">
                  {content.ctaText}
                  <ArrowRight />
                </a>
              </div>

              {/* Review card */}
              <div className="review-card p-5 max-w-[416px]">
                {/* Avatar + name + stars */}
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                    style={{ background: "#1C2E58" }}
                  >
                    {content.reviewerName.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "15px",
                          lineHeight: "23px",
                          letterSpacing: "0.03em",
                          color: "#676869",
                        }}
                      >
                        {content.reviewerName}
                      </span>
                      <StarRating count={4} />
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "11px",
                          lineHeight: "20px",
                          letterSpacing: "0.02em",
                          color: "#828282",
                        }}
                      >
                        {content.reviewCount}
                      </span>
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    lineHeight: "23px",
                    letterSpacing: "0.04em",
                    color: "#676869",
                  }}
                >
                  {content.reviewText}
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN — image collage */}
            <div className="hidden lg:block relative flex-shrink-0" style={{ width: "535px", height: "500px" }}>
              {/* Main large image */}
              <div className="absolute" style={{ left: "122px", top: "0" }}>
                <Image
                  src="https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=391&h=445&fit=crop"
                  alt="Loungewear collection"
                  width={391}
                  height={445}
                  className="rounded-[8px] object-cover"
                  priority
                />
              </div>
              {/* Tall left image */}
              <div className="absolute" style={{ left: "0", top: "40px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=158&h=300&fit=crop"
                  alt="Loungewear model"
                  width={158}
                  height={300}
                  className="rounded-[8px] object-cover"
                />
              </div>
              {/* Center featured image */}
              <div
                className="absolute"
                style={{ left: "75px", top: "56px", border: "4px solid white" }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=220&h=316&fit=crop"
                  alt="Featured loungewear"
                  width={220}
                  height={316}
                  className="rounded-[4px] object-cover shadow-card"
                />
              </div>
              {/* Small bottom images */}
              <div className="absolute flex gap-2" style={{ left: "75px", top: "385px" }}>
                {[
                  "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=75&h=75&fit=crop",
                  "https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=75&h=75&fit=crop",
                  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=75&h=75&fit=crop",
                  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=75&h=75&fit=crop",
                ].map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`Variant ${i + 1}`}
                    width={75}
                    height={75}
                    className="rounded-[4px] object-cover"
                  />
                ))}
              </div>
              {/* Right tall image */}
              <div className="absolute" style={{ right: "0", top: "0" }}>
                <Image
                  src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=116&h=225&fit=crop"
                  alt="Loungewear style"
                  width={116}
                  height={225}
                  className="rounded-[8px] object-cover"
                />
              </div>

              {/* Color swatches label */}
              <div
                className="absolute"
                style={{ right: "0", top: "235px" }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    lineHeight: "22px",
                    letterSpacing: "0.03em",
                    color: "#676869",
                    textAlign: "center",
                  }}
                >
                  White Robe
                </p>
                {/* Color swatch dots */}
                <div className="flex gap-1 justify-center mt-1">
                  <div className="w-5 h-5 rounded-full bg-[#6FB880] border-2 border-black" />
                  <div className="w-5 h-5 rounded-full bg-[#FF8A01] border-2 border-[#D7D7D7]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}