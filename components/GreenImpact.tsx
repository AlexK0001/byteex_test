import type { FC } from "react";
import type { GreenImpact } from "@/types/contentful";

interface GreenImpactProps { data: GreenImpact; }

const GreenImpactSection: FC<GreenImpactProps> = ({ data }) => {
  const stats = [
    { value: data.co2Saved,    label: "of CO2 saved" },
    { value: data.waterSaved,  label: "of drinking water saved" },
    { value: data.energySaved, label: "of energy saved" },
  ];
  const icons = [
    /* CO2 recycle */
    <svg key="co2" width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8" stroke="#2A2996" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16 4l3 3-3 3" stroke="#2A2996" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    /* Water drop */
    <svg key="water" width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M12 3C12 3 5 11 5 15.5C5 19.1 8.13 22 12 22C15.87 22 19 19.1 19 15.5C19 11 12 3 12 3Z" fill="#2A2996"/>
      <path d="M8 16C8.5 14 10 13 12 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>,
    /* Lightning */
    <svg key="energy" width="28" height="28" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4.5 13.5H11.5L11 22L19.5 10.5H12.5L13 2Z" fill="#2A2996"/>
    </svg>,
  ];

  return (
    <section id="sustainability" style={{ background: "#F0EEEF", padding: "40px 0" }}>
      <div className="wrap">
        <h2 style={{
          fontFamily:"var(--font-serif)", fontSize:25, lineHeight:"40px",
          letterSpacing:"0.04em", color:"#15005B", textAlign:"center",
          fontWeight:400, marginBottom:32,
        }}>
          Our total green impact
        </h2>

        <div className="impact-grid">
          {stats.map((s, i) => (
            <>
              {i > 0 && <div key={`div-${i}`} className="impact-divider" />}
              <div key={i} className="impact-item">
                <div style={{
                  width:42, height:42, borderRadius:"50%", background:"#E4E4E4",
                  display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12,
                }}>
                  {icons[i]}
                </div>
                <p style={{
                  fontFamily:"var(--font-serif)", fontSize:22, lineHeight:"20px",
                  letterSpacing:"0.02em", color:"#15005B", fontWeight:600, marginBottom:4,
                }}>
                  {s.value}
                </p>
                <p style={{
                  fontFamily:"var(--font-sans)", fontSize:14, lineHeight:"20px",
                  letterSpacing:"0.03em", color:"#15005B",
                }}>
                  {s.label}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GreenImpactSection;