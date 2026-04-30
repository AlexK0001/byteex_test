import type { FC } from "react";
import type { ProductFeature } from "@/types/contentful";

interface FeaturesProps { features: ProductFeature[]; }

const PATHS: Record<string,string> = {
  leaf:    "M17 8C8 10 5.9 16.17 3.82 19.34C3.45 19.9 4.15 20.5 4.65 20.07C7.1 18 10.5 17 14 17C18.42 17 22 13.42 22 9V3L17 8Z",
  recycle: "M12 2L8 7H11V13H13V7H16L12 2Z M7.5 14L4 19H9.5L10.5 17H7L8 14.5L7.5 14Z M16.5 14L15.5 14.5L17 17H13.5L14.5 19H20L16.5 14Z",
  home:    "M3 12L12 3L21 12V21H15V15H9V21H3V12Z",
  star:    "M12 2L14.4 9.2H22L16 13.8L18.4 21L12 16.4L5.6 21L8 13.8L2 9.2H9.6L12 2Z",
};

const THUMBS = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=60&h=60&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=60&h=60&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=60&h=60&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=60&h=60&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&h=60&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=60&h=60&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=60&h=60&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=60&h=60&fit=crop&auto=format",
];

const Features: FC<FeaturesProps> = ({ features }) => (
  <section className="feat" id="shop">
    <div className="wrap">
      <h2 className="feat__h2">Loungewear you can be proud of.</h2>

      <div className="feat__grid">
        {/* Feature list */}
        <div className="feat__list">
          {features.map((f,i) => (
            <div key={i} className="feat__row">
              <div className="feat__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d={PATHS[f.icon]??PATHS.star} fill="#01005B"/>
                </svg>
              </div>
              <div>
                <h3 className="feat__title">{f.title}</h3>
                <p className="feat__desc">{f.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product image */}
        <div className="feat__img-col">
          <div style={{ position:"relative" }}>
            <button className="arrow" style={{ position:"absolute", left:-32, top:"50%", transform:"translateY(-50%)", zIndex:2 }} aria-label="prev">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M9 1L1 9L9 17" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div style={{ borderRadius:8, overflow:"hidden", width:"100%", maxWidth:429, height:580 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=429&h=580&fit=crop&auto=format"
                alt="White Robe" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
            </div>
            <button className="arrow" style={{ position:"absolute", right:-32, top:"50%", transform:"translateY(-50%)", zIndex:2 }} aria-label="next">
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M1 1L9 9L1 17" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
          <p style={{ fontFamily:"var(--font-sans)", fontSize:13, color:"#676869", letterSpacing:"0.03em", textAlign:"center", marginTop:10 }}>White Robe</p>
          <div className="feat__thumbs">
            {THUMBS.map((src,i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <div key={i} style={{ width:32, height:32, borderRadius:3, overflow:"hidden", outline:i===0?"2px solid #01005B":"none" }}>
                <img src={src} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;