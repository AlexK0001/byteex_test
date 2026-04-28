"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EAEAEA]">
      <div className="max-w-[1465px] mx-auto px-6 md:px-[96px] h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "24px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#000",
              textTransform: "uppercase",
            }}
          >
            BYTEEX
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Shop", "About", "Sustainability", "Reviews"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                letterSpacing: "0.03em",
                color: "#565656",
              }}
              className="hover:text-[#01005B] transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <button aria-label="Search" className="hover:opacity-70 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6.5" stroke="#01005B" strokeWidth="1.5" />
              <path d="M14 14L18 18" stroke="#01005B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Account */}
          <button aria-label="Account" className="hover:opacity-70 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="3.5" stroke="#01005B" strokeWidth="1.5" />
              <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#01005B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Cart */}
          <button aria-label="Cart" className="relative hover:opacity-70 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2h2.5L6 12h9l2-7H5" stroke="#01005B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="8" cy="16" r="1.5" fill="#01005B" />
              <circle cx="14" cy="16" r="1.5" fill="#01005B" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#01005B] text-white text-[10px] rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}