import Link from "next/link";

export default function Footer() {
  const links = {
    Shop: ["All Products", "Comfort Sets", "Robes", "Joggers", "Tops", "Gift Cards"],
    Help: ["FAQ", "Shipping & Returns", "Size Guide", "Contact Us", "Track Order"],
    Company: ["About Us", "Sustainability", "Press", "Careers", "Affiliate Program"],
  };

  const socials = [
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" stroke="#676869" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="4" stroke="#676869" strokeWidth="1.5"/>
          <circle cx="17.5" cy="6.5" r="1" fill="#676869"/>
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M18 2H15C13.67 2 12.4 2.53 11.46 3.46C10.53 4.4 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73 14.11 6.48 14.29 6.29C14.48 6.11 14.73 6 15 6H18V2Z" stroke="#676869" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      label: "Pinterest",
      href: "#",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 16.24 4.63 19.87 8.35 21.39C8.27 20.7 8.2 19.6 8.37 18.83L9.53 13.8C9.53 13.8 9.19 13.09 9.19 12.03C9.19 10.33 10.17 9.06 11.39 9.06C12.42 9.06 12.91 9.83 12.91 10.77C12.91 11.82 12.24 13.4 11.89 14.87C11.6 16.09 12.49 17.09 13.7 17.09C15.87 17.09 17.04 14.62 17.04 11.72C17.04 9.16 15.16 7.37 12.5 7.37C9.41 7.37 7.58 9.69 7.58 12.1C7.58 13.14 7.97 14.26 8.45 14.85L8.28 15.56C8.1 16.36 7.66 18.01 7.59 18.3C7.5 18.68 7.26 18.77 6.94 18.63C5.18 17.75 4 15.87 4 12.72C4 7.55 7.82 3.5 12.5 3.5C16.27 3.5 19.25 6.22 19.25 10C19.25 13.38 17.1 16.22 14.06 16.22C12.82 16.22 11.65 15.57 11.25 14.78L10.69 16.98C10.47 17.82 9.87 18.93 9.44 19.59C10.25 19.84 11.11 20 12 20C17.52 20 22 15.52 22 10C22 4.48 17.52 0 12 0C6.48 0 2 4.48 2 10" stroke="#676869" strokeWidth="0.5"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-white border-t border-[#EAEAEA]">
      <div className="max-w-[1465px] mx-auto px-6 md:px-[96px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="md:col-span-2">
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#000",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "16px",
              }}
            >
              BYTEEX
            </span>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                lineHeight: "22px",
                letterSpacing: "0.03em",
                color: "#676869",
                maxWidth: "280px",
                marginBottom: "24px",
              }}
            >
              Consciously made butter soft staples for every day (or night).
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="hover:opacity-70 transition-opacity"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "14px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#01005B",
                  marginBottom: "16px",
                }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0.03em",
                        color: "#676869",
                      }}
                      className="hover:text-[#01005B] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid #EAEAEA" }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              letterSpacing: "0.03em",
              color: "#868787",
            }}
          >
            © {new Date().getFullYear()} BYTEEX. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  letterSpacing: "0.03em",
                  color: "#868787",
                }}
                className="hover:text-[#01005B] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}