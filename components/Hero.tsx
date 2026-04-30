import type { FC } from "react";
import type { HeroContent } from "@/types/contentful";

interface HeroProps { content: HeroContent; }

const IMGS = {
  main:   "https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=391&h=445&fit=crop&auto=format",
  tall:   "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=158&h=300&fit=crop&auto=format",
  center: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=220&h=316&fit=crop&auto=format",
  right:  "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=116&h=225&fit=crop&auto=format",
  t1: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=75&h=75&fit=crop&auto=format",
  t2: "https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=75&h=75&fit=crop&auto=format",
  t3: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=75&h=75&fit=crop&auto=format",
  t4: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=75&h=75&fit=crop&auto=format",
};

const BULLET_ICONS = [
  <svg key="c" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="#01005B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="l" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17 8C8 10 5.9 16.17 3.82 19.34C3.45 19.9 4.15 20.5 4.65 20.07C7.1 18 10.5 17 14 17C18.42 17 22 13.42 22 9V3L17 8Z" fill="#01005B"/></svg>,
  <svg key="s" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2L13.09 8.26L19 6L14.74 10.91L21 12L14.74 13.09L19 18L13.09 15.74L12 22L10.91 15.74L5 18L9.26 13.09L3 12L9.26 10.91L5 6L10.91 8.26L12 2Z" fill="#01005B"/></svg>,
];

const Hero: FC<HeroProps> = ({ content }) => {
  const bullets = content.bulletPoints.slice(0, 3).map((text, i) => ({ text, icon: BULLET_ICONS[i] }));

  return (
    <>
      {/* Announcement bar */}
      <div className="bar">
        CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT)&nbsp;&nbsp;|&nbsp;&nbsp;FREE SHIPPING on orders &gt; $200&nbsp;&nbsp;|&nbsp;&nbsp;easy 45 day return window.
      </div>

      <section className="hero">
        <div className="hero__grad" />

        <div className="wrap hero__inner">

          {/* ═══ LEFT ═══ */}
          <div className="hero__left">
            {/* BYTEEX logo — in section, left on desktop */}
            <span className="hero__logo">BYTEEX</span>

            <h1 className="hero__h1">{content.headline}</h1>

            <ul className="hero__bullets">
              {bullets.map(({ text, icon }, i) => (
                <li key={i} className="hero__bullet">
                  <span style={{ marginTop: 3, flexShrink: 0 }}>{icon}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="hero__cta">
              <a href={content.ctaUrl} className="btn">
                {content.ctaText}
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                  <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Review card */}
            <div className="card hero__review">
              <div className="hero__reviewer">
                <div className="hero__avatar">{content.reviewerName.charAt(0)}</div>
                <div style={{ flex: 1 }}>
                  <p className="hero__name">{content.reviewerName}</p>
                  <div className="hero__review-meta">
                    <div className="stars">
                      {Array.from({length:5}).map((_,i)=>(
                        <span key={i} className={`star${i>=4?" star--empty":""}`}/>
                      ))}
                    </div>
                    <span className="hero__review-count">{content.reviewCount}</span>
                  </div>
                </div>
              </div>
              <p className="hero__review-text">{content.reviewText}</p>
            </div>
          </div>

          {/* ═══ RIGHT — Desktop collage ═══ */}
          <div className="hero__collage">
            {/* Main large image */}
            <div className="hero__coll-abs" style={{ position:"absolute", left:100, top:0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMGS.main} alt="Loungewear" width={391} height={445} style={{ borderRadius:8, objectFit:"cover", display:"block" }}/>
            </div>
            {/* Tall left */}
            <div className="hero__coll-abs" style={{ position:"absolute", left:0, top:28 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMGS.tall} alt="Model" width={158} height={300} style={{ borderRadius:8, objectFit:"cover", display:"block" }}/>
            </div>
            {/* Center featured */}
            <div className="hero__coll-abs" style={{ position:"absolute", left:50, top:44, border:"4px solid #fff", borderRadius:6, overflow:"hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMGS.center} alt="Featured" width={220} height={316} style={{ display:"block", objectFit:"cover" }}/>
            </div>
            {/* Right tall */}
            <div className="hero__coll-abs" style={{ position:"absolute", right:0, top:0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMGS.right} alt="Style" width={116} height={225} style={{ borderRadius:8, objectFit:"cover", display:"block" }}/>
            </div>
            {/* Thumbs row */}
            <div className="hero__coll-abs" style={{ position:"absolute", left:50, top:372, display:"flex", gap:4 }}>
              {[IMGS.t1,IMGS.t2,IMGS.t3,IMGS.t4].map((src,i)=>(
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt={`v${i}`} width={75} height={75} style={{ borderRadius:4, objectFit:"cover", display:"block" }}/>
              ))}
            </div>
            {/* Label + swatches */}
            <div className="hero__coll-abs" style={{ position:"absolute", right:0, top:234, textAlign:"center" }}>
              <p style={{ fontFamily:"var(--font-sans)", fontSize:12, color:"#676869", letterSpacing:"0.03em", marginBottom:6 }}>White Robe</p>
              <div style={{ display:"flex", gap:4, justifyContent:"center" }}>
                <div style={{ width:18, height:18, borderRadius:"50%", background:"#6FB880", border:"2px solid #000" }}/>
                <div style={{ width:18, height:18, borderRadius:"50%", background:"#FF8A01", border:"2px solid #D7D7D7" }}/>
              </div>
            </div>

            {/* Mobile collage layout (visible only on mobile via CSS classes) */}
            <div className="hero__collage-main">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMGS.center} alt="Loungewear" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
            </div>
            <div className="hero__collage-side">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMGS.tall} alt="Model" style={{ width:"100%", height:125, objectFit:"cover", borderRadius:6 }}/>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMGS.right} alt="Style" style={{ width:"100%", height:125, objectFit:"cover", borderRadius:6 }}/>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;