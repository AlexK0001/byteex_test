import Link from "next/link";

export default function Footer() {
  const cols: Record<string, string[]> = {
    Shop:    ["All Products","Comfort Sets","Robes","Joggers","Tops","Gift Cards"],
    Help:    ["FAQ","Shipping & Returns","Size Guide","Contact Us","Track Order"],
    Company: ["About Us","Sustainability","Press","Careers","Affiliate Program"],
  };

  return (
    <footer style={{ background:"#fff", borderTop:"1px solid #EAEAEA" }}>
      <div className="wrap" style={{ paddingTop:64, paddingBottom:48 }}>
        <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:40 }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily:"var(--font-serif)", fontSize:22, fontWeight:700, letterSpacing:"0.12em", color:"#000", textTransform:"uppercase", marginBottom:16 }}>
              BYTEEX
            </div>
            <p style={{ fontFamily:"var(--font-sans)", fontSize:14, lineHeight:"22px", letterSpacing:"0.03em", color:"#676869", maxWidth:260, marginBottom:24 }}>
              Consciously made butter soft staples for every day (or night).
            </p>
            <div style={{ display:"flex", gap:16 }}>
              {["Instagram","Facebook","Pinterest"].map(s => (
                <a key={s} href="#" aria-label={s} style={{ opacity:1, transition:"opacity 0.15s", color:"#676869", textDecoration:"none", fontFamily:"var(--font-sans)", fontSize:12 }}>
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([cat, items]) => (
            <div key={cat}>
              <h4 style={{
                fontFamily:"var(--font-sans)", fontSize:11, letterSpacing:"0.08em",
                textTransform:"uppercase", color:"#01005B", marginBottom:16, fontWeight:600,
              }}>
                {cat}
              </h4>
              <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:10 }}>
                {items.map(item => (
                  <li key={item}>
                    <Link href="#" style={{ fontFamily:"var(--font-sans)", fontSize:14, lineHeight:"20px", letterSpacing:"0.03em", color:"#676869", textDecoration:"none" }}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop:"1px solid #EAEAEA", marginTop:48, paddingTop:24, display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <p style={{ fontFamily:"var(--font-sans)", fontSize:12, letterSpacing:"0.03em", color:"#868787" }}>
            © {new Date().getFullYear()} BYTEEX. All rights reserved.
          </p>
          <div style={{ display:"flex", gap:24 }}>
            {["Privacy Policy","Terms of Service","Cookie Policy"].map(item => (
              <Link key={item} href="#" style={{ fontFamily:"var(--font-sans)", fontSize:12, letterSpacing:"0.03em", color:"#868787", textDecoration:"none" }}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}