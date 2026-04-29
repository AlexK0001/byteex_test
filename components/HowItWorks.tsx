function StarsRow() {
  return (
    <div className="stars">
      {Array.from({length:4}).map((_,i)=>(
        <span key={i} className="star"/>
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

const STEPS = [
  {
    bg: "#F0EEEF",
    title: "You save.",
    desc: "Browse our comfort sets and save 15% when you bundle.",
    icon: (
      <svg width="51" height="51" viewBox="0 0 51 51" fill="none">
        <circle cx="25.5" cy="25.5" r="14" stroke="#01005B" strokeWidth="2"/>
        <path d="M25.5 14v11.5l7 7" stroke="#01005B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    bg: "#F9F0E6",
    title: "We ship.",
    desc: "We ship your items within 1-2 days of receiving your order.",
    icon: (
      <svg width="49" height="49" viewBox="0 0 49 49" fill="none">
        <rect x="2" y="15" width="30" height="18" rx="2" stroke="#01005B" strokeWidth="2"/>
        <path d="M32 20h8l6 8v6H32V20Z" stroke="#01005B" strokeWidth="2"/>
        <circle cx="10" cy="37" r="4" stroke="#01005B" strokeWidth="2"/>
        <circle cx="37" cy="37" r="4" stroke="#01005B" strokeWidth="2"/>
        <path d="M2 20h8" stroke="#01005B" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    bg: "#F0EEEF",
    title: "You enjoy!",
    desc: "Wear hernest around the house, out on the town, or in bed.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
        <circle cx="28" cy="28" r="12" stroke="#15005B" strokeWidth="2"/>
        {[[28,4],[28,52],[4,28],[52,28],[10,10],[46,46],[46,10],[10,46]].map(([x1,y1],i)=>{
          const cx=28,cy=28,dx=x1-cx,dy=y1-cy;
          const len=Math.sqrt(dx*dx+dy*dy);
          const nx=dx/len,ny=dy/len;
          return <line key={i} x1={cx+nx*14} y1={cy+ny*14} x2={cx+nx*22} y2={cy+ny*22} stroke="#15005B" strokeWidth="2" strokeLinecap="round"/>;
        })}
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: "80px 0", background: "#fff" }}>
      <div className="wrap">
        <h2 style={{
          fontFamily: "var(--font-serif)", fontSize: 32, lineHeight: "40px",
          letterSpacing: "0.04em", color: "#01005B", textAlign: "center",
          fontWeight: 400, marginBottom: 48,
        }}>
          Comfort made easy
        </h2>

        {/* 3 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 48 }}>
          {STEPS.map((s) => (
            <div key={s.title} style={{
              background: s.bg, border: "1px solid #EDEDED",
              borderRadius: 8, padding: "48px 32px",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center",
              minHeight: 321,
            }}>
              <div style={{ marginBottom: 16 }}>{s.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-serif)", fontSize: 22, lineHeight: "40px",
                letterSpacing: "0.04em", color: "#01005B", marginBottom: 8,
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: "23px",
                letterSpacing: "0.03em", color: "#676869", maxWidth: 240,
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <a href="#shop" className="btn-primary">
            Customize Your Outfit <ArrowRight />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <StarsRow />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#828282", letterSpacing: "0.02em" }}>
              Over 500+ 5 Star Reviews Online
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}