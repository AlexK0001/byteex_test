export default function HowItWorks() {
  const steps = [
    { bg:"#F0EEEF", title:"You save.", desc:"Browse our comfort sets and save 15% when you bundle.",
      icon:<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="14" stroke="#01005B" strokeWidth="2"/><path d="M24 13v11.5l7 7" stroke="#01005B" strokeWidth="2" strokeLinecap="round"/></svg> },
    { bg:"#F9F0E6", title:"We ship.", desc:"We ship your items within 1-2 days of receiving your order.",
      icon:<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="2" y="14" width="28" height="18" rx="2" stroke="#01005B" strokeWidth="2"/><path d="M30 19h8l6 8v6H30V19Z" stroke="#01005B" strokeWidth="2"/><circle cx="10" cy="36" r="4" stroke="#01005B" strokeWidth="2"/><circle cx="36" cy="36" r="4" stroke="#01005B" strokeWidth="2"/><path d="M2 19h8" stroke="#01005B" strokeWidth="1.5" strokeLinecap="round"/></svg> },
    { bg:"#F0EEEF", title:"You enjoy!", desc:"Wear hernest around the house, out on the town, or in bed.",
      icon:<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="12" stroke="#15005B" strokeWidth="2"/><line x1="26" y1="4" x2="26" y2="12" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/><line x1="26" y1="40" x2="26" y2="48" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/><line x1="4" y1="26" x2="12" y2="26" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/><line x1="40" y1="26" x2="48" y2="26" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/><line x1="9.51" y1="9.51" x2="15.58" y2="15.58" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/><line x1="36.42" y1="36.42" x2="42.49" y2="42.49" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/><line x1="42.49" y1="9.51" x2="36.42" y2="15.58" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/><line x1="15.58" y1="36.42" x2="9.51" y2="42.49" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/></svg> },
  ];

  return (
    <section className="hiw">
      <div className="wrap">
        <h2 className="hiw__h2">Comfort made easy</h2>

        <div className="hiw__grid">
          {steps.map(s => (
            <div key={s.title} className="hiw__card" style={{ background: s.bg }}>
              <div style={{ marginBottom:20 }}>{s.icon}</div>
              <h3 className="hiw__card-title">{s.title}</h3>
              <p className="hiw__card-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="hiw__cta">
          <a href="#shop" className="btn">
            Customize Your Outfit
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
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
}