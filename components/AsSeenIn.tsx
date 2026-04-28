// components/AsSeenIn.tsx

export default function AsSeenIn() {
  const logos = [
    { name: "Eco-Stylist", style: { fontFamily: "var(--font-display)", fontSize: "15px", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#868787" } },
    { name: "Canadian Living", style: { fontFamily: "var(--font-body)", fontSize: "18px", letterSpacing: "0.03em", color: "#868787" } },
    { name: "GILLIAN HARRIS", style: { fontFamily: "var(--font-display)", fontSize: "14px", letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#868787" } },
    { name: "The Eco Hub", style: { fontFamily: "var(--font-display)", fontSize: "16px", letterSpacing: "0.04em", color: "#868787" } },
    { name: "TrendHunter", style: { fontFamily: "var(--font-body)", fontSize: "16px", letterSpacing: "0.02em", color: "#868787", fontWeight: 500 } },
  ];

  return (
    <section className="py-10 px-6 md:px-[96px] border-t border-[#EAEAEA]">
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "20px",
          lineHeight: "23px",
          letterSpacing: "0.03em",
          color: "#868787",
          textAlign: "center",
          marginBottom: "28px",
        }}
      >
        as seen in
      </p>
      <div className="media-logos">
        {logos.map((logo) => (
          <span key={logo.name} style={logo.style}>
            {logo.name}
          </span>
        ))}
      </div>
    </section>
  );
}