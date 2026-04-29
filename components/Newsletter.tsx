import type { FC } from "react";

interface NewsletterProps { headline: string; subtext: string; }

const CARDS = [
  { src: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=260&h=373&fit=crop&auto=format", title: "Cozy Set" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=260&h=373&fit=crop&auto=format", title: "White Robe" },
  { src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=260&h=373&fit=crop&auto=format", title: "Jogger Set" },
];

const Newsletter: FC<NewsletterProps> = ({ headline, subtext }) => (
  <section style={{ padding: "80px 0", background: "#fff", position: "relative", overflow: "hidden" }}>
    {/* bottom cream gradient */}
    <div style={{
      position:"absolute", bottom:0, left:0, right:0, height:400, pointerEvents:"none",
      background:"linear-gradient(180deg,rgba(249,240,229,0) 0%,#F9F0E5 100%)",
    }}/>

    <div className="wrap" style={{ position:"relative" }}>
      <h2 style={{
        fontFamily:"var(--font-serif)", fontSize:32, lineHeight:"40px",
        letterSpacing:"0.04em", color:"#01005B", textAlign:"center",
        fontWeight:400, marginBottom:12,
      }}>
        {headline}
      </h2>
      <p style={{
        fontFamily:"var(--font-sans)", fontSize:15, lineHeight:"22px",
        letterSpacing:"0.03em", color:"#676869", textAlign:"center",
        maxWidth:560, margin:"0 auto 40px",
      }}>
        {subtext}
      </p>

      {/* Product cards */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24, maxWidth:815, margin:"0 auto 48px" }}>
        {CARDS.map(c => (
          <div key={c.title} style={{ cursor:"pointer" }}>
            <div style={{ borderRadius:8, overflow:"hidden", boxShadow:"0 3px 10px 1px rgba(0,0,0,0.08)", marginBottom:10 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.title} style={{ width:"100%", display:"block" }} loading="lazy"/>
            </div>
            <div style={{ display:"flex", alignItems:"center", gap:6 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 7L5.5 8.5L10 4" stroke="#1FAD40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="7" r="6" stroke="#1FAD40" strokeWidth="1.2"/>
              </svg>
              <span style={{ fontFamily:"var(--font-sans)", fontSize:10, letterSpacing:"0.04em", color:"#1FAD40" }}>
                Ships in 1-2 Days
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA + trust row */}
      <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:20 }}>
        <a href="#shop" className="btn-primary">
          Customize Your Outfit
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <div style={{ display:"flex", alignItems:"center", gap:24, flexWrap:"wrap", justifyContent:"center" }}>
          {[
            { icon:"🚚", text:"FREE Shipping on Orders over $200" },
            { icon:"⭐", text:"Over 500+ 5 Star Reviews Online" },
            { icon:"🌿", text:"Made ethically and responsibly." },
          ].map((item, i) => (
            <span key={i} style={{
              fontFamily:"var(--font-sans)", fontSize:14,
              letterSpacing:"0.03em", color:"#676869",
              display:"flex", alignItems:"center", gap:6,
            }}>
              <span style={{ fontSize:16 }}>{item.icon}</span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;