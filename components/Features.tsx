import type { FC } from "react";
import Image from "next/image";
import type { ProductFeature } from "@/types/contentful";

interface FeaturesProps {
  features: ProductFeature[];
}

function LeafIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.34C3.45 19.9 4.15 20.5 4.65 20.07C7.1 18 10.5 17 14 17C18.42 17 22 13.42 22 9V3L17 8Z" fill="#01005B" />
    </svg>
  );
}
function RecycleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L8 7H11V13H13V7H16L12 2Z" fill="#01005B"/>
      <path d="M7.5 14L4 19H9.5L10.5 17H7L8.5 14.5L7.5 14Z" fill="#01005B"/>
      <path d="M16.5 14L15.5 14.5L17 17H13.5L14.5 19H20L16.5 14Z" fill="#01005B"/>
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" fill="#01005B"/>
    </svg>
  );
}
function StarIconSvg() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.4 9.2H22L16 13.8L18.4 21L12 16.4L5.6 21L8 13.8L2 9.2H9.6L12 2Z" fill="#01005B"/>
    </svg>
  );
}

const iconMap: Record<string, React.ReactNode> = {
  leaf: <LeafIcon />,
  recycle: <RecycleIcon />,
  home: <HomeIcon />,
  star: <StarIconSvg />,
};

const THUMBNAIL_IMAGES = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=31&h=32&fit=crop",
  "https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=31&h=32&fit=crop",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=31&h=32&fit=crop",
  "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=31&h=32&fit=crop",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=31&h=32&fit=crop",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=31&h=32&fit=crop",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=31&h=32&fit=crop",
  "https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=31&h=32&fit=crop",
];

const Features: FC<FeaturesProps> = ({ features }) => {
  return (
    <section id="shop" className="py-[64px] px-6 md:px-[96px]">
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "0.04em",
          color: "#01005B",
          marginBottom: "48px",
        }}
      >
        Loungewear you can be proud of.
      </h2>

      <div className="flex gap-12 items-start">
        {/* LEFT — feature list */}
        <div className="flex-1 max-w-[560px] flex flex-col">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex gap-4 items-start py-5"
              style={{ borderBottom: i < features.length - 1 ? "1px solid #EAEAEA" : "none" }}
            >
              <div className="flex-shrink-0 w-[42px] h-[42px] rounded-full flex items-center justify-center" style={{ background: "#F9F0E5" }}>
                {iconMap[feature.icon] ?? <StarIconSvg />}
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", lineHeight: "24px", letterSpacing: "0.04em", color: "#01005B", marginBottom: "6px" }}>
                  {feature.title}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: "23px", letterSpacing: "0.03em", color: "#6C6C6C" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT — product image */}
        <div className="hidden lg:block flex-shrink-0 relative" style={{ width: "429px" }}>
          <button className="slider-arrow absolute left-[-32px] top-[50%] -translate-y-1/2 z-10" aria-label="Previous image">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none"><path d="M10 2L2 10L10 18" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div className="rounded-[8px] overflow-hidden" style={{ width: "429px", height: "630px" }}>
            <Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=429&h=630&fit=crop" alt="White Robe product" width={429} height={630} className="w-full h-full object-cover" />
          </div>
          <button className="slider-arrow absolute right-[-32px] top-[50%] -translate-y-1/2 z-10" aria-label="Next image">
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none"><path d="M2 2L10 10L2 18" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <p className="mt-3 text-center" style={{ fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: "22px", letterSpacing: "0.03em", color: "#676869" }}>
            White Robe
          </p>
          <div className="flex gap-1 mt-2 justify-center flex-wrap">
            {THUMBNAIL_IMAGES.map((src, i) => (
              <div key={i} className="rounded-[3px] overflow-hidden" style={{ width: "31px", height: "32px", border: i === 1 ? "2px solid #FFFFFF" : "none", boxShadow: i === 1 ? "0 0 0 1px #01005B" : "none" }}>
                <Image src={src} alt={`Thumbnail ${i + 1}`} width={31} height={32} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;