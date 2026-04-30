"use client";
import type { FC } from "react";
import { useState } from "react";
import type { TestimonialContent } from "@/types/contentful";

interface TestimonialsProps { testimonials: TestimonialContent[]; }

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  const len = testimonials.length;
  const [cur, setCur] = useState(0);
  const visible = [0,1,2].map(i => testimonials[(cur+i)%len]);

  return (
    <section className="testi" id="reviews">
      <div className="wrap">
        <h2 className="testi__h2">What are our fans saying?</h2>
        <p className="testi__sub">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien
          facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
        </p>

        <div className="testi__row">
          <button className="arrow" onClick={()=>setCur(c=>c===0?len-1:c-1)} aria-label="Previous">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M9 1L1 9L9 17" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          <div className="testi__cards">
            {visible.map((t,i) => (
              <div key={i} className="card testi__card">
                <div className="testi__card-top">
                  <div className="testi__avatar">{t.name.charAt(0)}</div>
                  <div>
                    <p className="testi__name">{t.name}</p>
                    <div className="stars">
                      {Array.from({length:5}).map((_,j)=>(
                        <span key={j} className={`star${j>=t.rating?" star--empty":""}`}/>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="testi__text">{t.text}</p>
              </div>
            ))}
          </div>

          <button className="arrow" onClick={()=>setCur(c=>c===len-1?0:c+1)} aria-label="Next">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none"><path d="M1 1L9 9L1 17" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="testi__cta">
          <a href="#shop" className="btn">
            Customize Your Outfit
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div className="stars">{Array.from({length:4}).map((_,i)=><span key={i} className="star"/>)}</div>
            <span style={{ fontFamily:"var(--font-sans)", fontSize:12, color:"#828282", letterSpacing:"0.02em" }}>Over 500+ 5 Star Reviews Online</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;