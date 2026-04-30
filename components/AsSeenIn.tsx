export default function AsSeenIn() {
  const logos = [
    { name:"ECO-STYLIST",     fam:"var(--font-sans)",  sz:13, ls:"0.12em", up:true  },
    { name:"Canadian Living", fam:"var(--font-serif)", sz:18, ls:"0.03em", up:false },
    { name:"GILLIAN HARRIS",  fam:"var(--font-serif)", sz:14, ls:"0.12em", up:true  },
    { name:"The Eco Hub",     fam:"var(--font-serif)", sz:16, ls:"0.04em", up:false },
    { name:"TrendHunter",     fam:"var(--font-sans)",  sz:16, ls:"0.02em", up:false, w:500 },
  ];
  return (
    <section className="seen">
      <p className="seen__label">as seen in</p>
      <div className="seen__logos">
        {logos.map(l=>(
          <span key={l.name} style={{
            fontFamily:l.fam, fontSize:l.sz, letterSpacing:l.ls,
            color:"#868787", fontWeight:l.w??400,
            textTransform:l.up?"uppercase":"none",
          }}>
            {l.name}
          </span>
        ))}
      </div>
    </section>
  );
}