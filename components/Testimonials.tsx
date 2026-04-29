"use client";
import type { FC } from "react";
import { useState } from "react";
import type { TestimonialContent } from "@/types/contentful";

interface TestimonialsProps { testimonials: TestimonialContent[]; }

function Stars({ count }: { count: number }) {
  return (
    <div className="stars">
      {Array.from({length:5}).map((_,i)=>(
        <span key={i} className={`star${i>=count?" star-empty":""}`}/>
      ))}
    </div>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
      <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  const len = testimonials.length;
  const [cur, setCur] = useState(0);
  const prev = () => setCur(c => (c === 0 ? len - 1 : c - 1));
  const next = () => setCur(c => (c === len - 1 ? 0 : c + 1));
  const visible = [0,1,2].map(i => testimonials[(cur + i) % len]);

  return (
    <section id="reviews" style={{ padding: "80px 0", background: "#fff" }}>
      <div className="wrap">
        <h2 style={{
          fontFamily:"var(--font-serif)", fontSize:32, lineHeight:"40px",
          letterSpacing:"0.04em", color:"#01005B", textAlign:"center",
          fontWeight:400, marginBottom:16,
        }}>
          What are our fans saying?
        </h2>
        <p style={{
          fontFamily:"var(--font-sans)", fontSize:15, lineHeight:"23px",
          letterSpacing:"0.03em", color:"#676869", textAlign:"center",
          maxWidth:640, margin:"0 auto 48px",
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien
          facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
        </p>

        {/* Slider row */}
        <div style={{ display:"flex", alignItems:"center", gap:16 }}>
          <button className="slider-arrow" onClick={prev} aria-label="Previous">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M9 1L1 9L9 17" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="testimonials-grid">
            {visible.map((t, i) => (
              <div key={i} className="review-card" style={{ padding:24, display:"flex", flexDirection:"column", gap:12, minHeight: i===1 ? 252 : 194 }}>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{
                    width:40, height:40, borderRadius:"50%", background:"#1C2E58",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    color:"#fff", fontSize:14, fontFamily:"var(--font-sans)", flexShrink:0,
                  }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontFamily:"var(--font-serif)", fontSize:15, letterSpacing:"0.03em", color:"#676869", marginBottom:4 }}>
                      {t.name}
                    </p>
                    <Stars count={t.rating} />
                  </div>
                </div>
                <p style={{ fontFamily:"var(--font-sans)", fontSize:12, lineHeight:"23px", letterSpacing:"0.04em", color:"#676869" }}>
                  {t.text}
                </p>
              </div>
            ))}
          </div>

          <button className="slider-arrow" onClick={next} aria-label="Next">
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M1 1L9 9L1 17" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:16, marginTop:48 }}>
          <a href="#shop" className="btn-primary">Customize Your Outfit <ArrowRight /></a>
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <div className="stars">{Array.from({length:4}).map((_,i)=><span key={i} className="star"/>)}</div>
            <span style={{ fontFamily:"var(--font-sans)", fontSize:12, color:"#828282", letterSpacing:"0.02em" }}>
              Over 500+ 5 Star Reviews Online
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;