import type { GreenImpact } from "@/types/contentful";

interface GreenImpactProps {
  data: GreenImpact;
}

function CO2Icon() {
  return (
    <div
      className="w-[42px] h-[42px] rounded-full flex items-center justify-center"
      style={{ background: "#E4E4E4" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9" stroke="#2A2996" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 3l3 3-3 3" stroke="#2A2996" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 14l2-4 2 4" stroke="#2A2996" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10.5 13h3" stroke="#2A2996" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function WaterIcon() {
  return (
    <div
      className="w-[42px] h-[42px] rounded-full flex items-center justify-center"
      style={{ background: "#E4E4E4" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 5 10 5 14.5C5 18.09 8.13 21 12 21C15.87 21 19 18.09 19 14.5C19 10 12 2 12 2Z" fill="#2A2996"/>
        <path d="M8 15C8.5 13 10 12 12 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function EnergyIcon() {
  return (
    <div
      className="w-[42px] h-[42px] rounded-full flex items-center justify-center"
      style={{ background: "#E4E4E4" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L4.5 13.5H11.5L11 22L19.5 10.5H12.5L13 2Z" fill="#2A2996"/>
      </svg>
    </div>
  );
}

export default function GreenImpactSection({ data }: GreenImpactProps) {
  const stats = [
    { icon: <CO2Icon />, value: data.co2Saved, label: "of CO2 saved" },
    { icon: <WaterIcon />, value: data.waterSaved, label: "of drinking water saved" },
    { icon: <EnergyIcon />, value: data.energySaved, label: "of energy saved" },
  ];

  return (
    <section
      id="sustainability"
      style={{ background: "#F0EEEF" }}
    >
      <div className="max-w-[1465px] mx-auto px-6 md:px-[96px] py-[40px]">
        <h2
          className="text-center mb-8"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "25px",
            lineHeight: "40px",
            letterSpacing: "0.04em",
            color: "#15005B",
          }}
        >
          Our total green impact
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-10 py-4 relative">
              {/* Vertical divider */}
              {i > 0 && (
                <div
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2"
                  style={{ width: "1px", height: "122px", background: "rgba(196,196,196,0.5)" }}
                />
              )}
              <div className="mb-3">{stat.icon}</div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  lineHeight: "20px",
                  letterSpacing: "0.02em",
                  color: "#15005B",
                  fontWeight: 600,
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: "0.03em",
                  color: "#15005B",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}