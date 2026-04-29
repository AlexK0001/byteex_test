import type { FC } from "react";
import Image from "next/image";

interface NewsletterProps {
  headline: string;
  subtext: string;
}

const PRODUCT_CARDS = [
  { src: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=260&h=373&fit=crop", title: "Cozy Set" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=260&h=373&fit=crop", title: "White Robe" },
  { src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=260&h=373&fit=crop", title: "Jogger Set" },
];

const Newsletter: FC<NewsletterProps> = ({ headline, subtext }) => {
  return (
    <section className="py-[80px] px-6 md:px-[96px] bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-[1px] pointer-events-none" style={{ width: "1676px", height: "508px", background: "linear-gradient(180deg, #F9F0E5 0%, rgba(249,240,229,0.18) 43.05%, rgba(249,240,229,0) 100%)", transform: "rotate(180deg)" }} />
      <div className="relative">
        <h2 className="text-center mb-3" style={{ fontFamily: "var(--font-display)", fontSize: "32px", lineHeight: "40px", letterSpacing: "0.04em", color: "#01005B" }}>
          {headline}
        </h2>
        <p className="text-center" style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: "22px", letterSpacing: "0.03em", color: "#676869", maxWidth: "600px", margin: "0 auto 40px" }}>
          {subtext}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-[815px] mx-auto">
          {PRODUCT_CARDS.map((card) => (
            <div key={card.title} className="relative group cursor-pointer">
              <div className="rounded-[8px] overflow-hidden mb-3" style={{ boxShadow: "0px 3px 10px 1px rgba(0,0,0,0.08)" }}>
                <Image src={card.src} alt={card.title} width={260} height={373} className="w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-1 mt-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 7L6.5 8.5L9.5 5.5" stroke="#1FAD40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="7" r="6" stroke="#1FAD40" strokeWidth="1.2"/>
                </svg>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "10px", lineHeight: "17px", letterSpacing: "0.04em", color: "#1FAD40" }}>
                  Ships in 1-2 Days
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <a href="#shop" className="btn-primary">
            Customize Your Outfit
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-[33px] h-[33px] rounded-full flex items-center justify-center" style={{ background: "rgba(102,102,102,0.1)" }}>
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
                  <rect x="0" y="2" width="10" height="8" rx="1" stroke="#676869" strokeWidth="1.2"/>
                  <path d="M10 4h3.5l2 4v3H10V4Z" stroke="#676869" strokeWidth="1.2"/>
                  <circle cx="3.5" cy="12" r="1.5" stroke="#676869" strokeWidth="1.2"/>
                  <circle cx="12" cy="12" r="1.5" stroke="#676869" strokeWidth="1.2"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", letterSpacing: "0.03em", color: "#676869" }}>FREE Shipping on Orders over $200</span>
            </div>
            <div className="w-px h-[51px] hidden md:block" style={{ background: "rgba(196,196,196,0.4)" }} />
            <div className="flex items-center gap-2">
              <div className="w-[33px] h-[33px] rounded-full flex items-center justify-center" style={{ background: "rgba(102,102,102,0.1)" }}>
                <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
                  <path d="M8 1L9.79 5.76L15 6.18L11.09 9.54L12.36 14.5L8 11.77L3.64 14.5L4.91 9.54L1 6.18L6.21 5.76L8 1Z" fill="#676869"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", letterSpacing: "0.03em", color: "#676869" }}>Over 500+ 5 Star Reviews Online</span>
            </div>
            <div className="w-px h-[51px] hidden md:block" style={{ background: "rgba(196,196,196,0.4)" }} />
            <div className="flex items-center gap-2">
              <div className="w-[33px] h-[33px] rounded-full flex items-center justify-center" style={{ background: "rgba(102,102,102,0.1)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7Z" stroke="#676869" strokeWidth="1.2"/>
                  <path d="M5 8.5C5.8 6.5 7.5 6 9 6" stroke="#676869" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--font-body)", fontSize: "14px", letterSpacing: "0.03em", color: "#676869" }}>Made ethically and responsibly.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;