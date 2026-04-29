export default function HowItWorks() {
  const steps = [
    {
      icon: (
        <svg width="51" height="51" viewBox="0 0 51 51" fill="none">
          <path d="M25.5 8C16.4 8 9 15.4 9 24.5S16.4 41 25.5 41 42 33.6 42 24.5 34.6 8 25.5 8Z" stroke="#01005B" strokeWidth="2" fill="none"/>
          <path d="M25.5 16v8.5l5.5 5.5" stroke="#01005B" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="25.5" cy="24.5" r="3" fill="#01005B"/>
        </svg>
      ),
      title: "You save.",
      description: "Browse our comfort sets and save 15% when you bundle.",
    },
    {
      icon: (
        <svg width="49" height="49" viewBox="0 0 49 49" fill="none">
          <rect x="2" y="15" width="30" height="18" rx="2" stroke="#01005B" strokeWidth="2" fill="none"/>
          <path d="M32 20h8l6 8v6h-14V20Z" stroke="#01005B" strokeWidth="2" fill="none"/>
          <circle cx="10" cy="37" r="4" stroke="#01005B" strokeWidth="2" fill="none"/>
          <circle cx="37" cy="37" r="4" stroke="#01005B" strokeWidth="2" fill="none"/>
          <path d="M2 20.5h10" stroke="#01005B" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "We ship.",
      description: "We ship your items within 1-2 days of receiving your order.",
    },
    {
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="30" cy="30" r="12" stroke="#15005B" strokeWidth="2" fill="none"/>
          <line x1="30" y1="6" x2="30" y2="12" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/>
          <line x1="30" y1="48" x2="30" y2="54" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/>
          <line x1="6" y1="30" x2="12" y2="30" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/>
          <line x1="48" y1="30" x2="54" y2="30" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/>
          <line x1="12.7" y1="12.7" x2="17" y2="17" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/>
          <line x1="43" y1="43" x2="47.3" y2="47.3" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/>
          <line x1="47.3" y1="12.7" x2="43" y2="17" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/>
          <line x1="17" y1="43" x2="12.7" y2="47.3" stroke="#15005B" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "You enjoy!",
      description: "Wear hernest around the house, out on the town, or in bed.",
    },
  ];

  return (
    <section className="py-[80px] px-6 md:px-[96px]">
      <h2
        className="text-center mb-12"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "0.04em",
          color: "#01005B",
        }}
      >
        Comfort made easy
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {steps.map((step) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center p-8 rounded-[8px]"
            style={{
              background: step.title === "You save." || step.title === "You enjoy!" ? "#F0EEEF" : "#F9F0E6",
              border: "1px solid #EDEDED",
              minHeight: "321px",
            }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                lineHeight: "40px",
                letterSpacing: "0.04em",
                color: "#01005B",
                marginBottom: "8px",
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: "23px",
                letterSpacing: "0.03em",
                color: "#676869",
                maxWidth: "260px",
              }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-4">
        <a href="#shop" className="btn-primary">
          Customize Your Outfit
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
        {/* Stars + review count */}
        <div className="flex items-center gap-2">
          <div className="flex gap-[2px]">
            {Array.from({ length: 4 }).map((_, i) => (
              <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="#FFB801">
                <path d="M6 0.5L7.34 4.18H11.09L8.07 6.47L9.18 10.18L6 7.9L2.82 10.18L3.93 6.47L0.91 4.18H4.66L6 0.5Z" />
              </svg>
            ))}
          </div>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "12px", color: "#828282", letterSpacing: "0.02em" }}>
            Over 500+ 5 Star Reviews Online
          </span>
        </div>
      </div>
    </section>
  );
}