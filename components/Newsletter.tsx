import type { FC } from "react";

interface Props { headline: string; subtext: string; }

const CARDS = [
  { src:"https://images.unsplash.com/photo-1554568218-0f1715e72254?w=260&h=360&fit=crop&auto=format", title:"Cozy Set" },
  { src:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=260&h=360&fit=crop&auto=format", title:"White Robe" },
  { src:"https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=260&h=360&fit=crop&auto=format", title:"Jogger Set" },
];

const Newsletter: FC<Props> = ({ headline, subtext }) => (
  <section className="news">
    <div className="news__grad-bot"/>
    <div className="wrap" style={{ position:"relative", zIndex:1 }}>
      <h2 className="news__h2">{headline}</h2>
      <p className="news__sub">{subtext}</p>

      <div className="news__cards">
        {CARDS.map(c => (
          <div key={c.title} style={{ cursor:"pointer" }}>
            <div className="news__card-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.src} alt={c.title} style={{ width:"100%", display:"block" }} loading="lazy"/>
            </div>
            <div className="news__ship">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M4 7L5.5 8.5L10 4" stroke="#1FAD40" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="7" r="6" stroke="#1FAD40" strokeWidth="1.2"/>
              </svg>
              Ships in 1-2 Days
            </div>
          </div>
        ))}
      </div>

      <div className="news__cta">
        <a href="#shop" className="btn">
          Customize Your Outfit
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        <div className="news__trust">
          <span className="news__trust-item">🚚 FREE Shipping on Orders over $200</span>
          <div className="news__divider"/>
          <span className="news__trust-item">⭐ Over 500+ 5 Star Reviews Online</span>
          <div className="news__divider"/>
          <span className="news__trust-item">🌿 Made ethically and responsibly.</span>
        </div>
      </div>
    </div>
  </section>
);

export default Newsletter;