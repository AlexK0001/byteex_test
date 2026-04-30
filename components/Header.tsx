"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [cartCount] = useState(0);

  return (
    <header className="hdr">
      <div className="hdr__inner">

        {/* Mobile: hamburger */}
        <button className="hdr__burger" aria-label="Menu">
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <path d="M1 1h20M1 8h20M1 15h20" stroke="#01005B" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Desktop nav links */}
        <nav className="hdr__nav">
          {["Shop","About","Sustainability","Reviews"].map(item => (
            <Link key={item} href={`#${item.toLowerCase()}`}>{item}</Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="hdr__icons">
          <button aria-label="Search">
            <svg width="19" height="19" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6.5" stroke="#01005B" strokeWidth="1.5"/>
              <path d="M14 14L18 18" stroke="#01005B" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button aria-label="Account">
            <svg width="19" height="19" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="7" r="3.5" stroke="#01005B" strokeWidth="1.5"/>
              <path d="M3 18c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="#01005B" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button aria-label="Cart" style={{ position:"relative" }}>
            <svg width="19" height="19" viewBox="0 0 20 20" fill="none">
              <path d="M2 2h2.5L6 12h9l2-7H5" stroke="#01005B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8"  cy="16" r="1.5" fill="#01005B"/>
              <circle cx="14" cy="16" r="1.5" fill="#01005B"/>
            </svg>
            {cartCount > 0 && (
              <span style={{ position:"absolute",top:-4,right:-4,width:16,height:16,background:"#01005B",color:"#fff",fontSize:9,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center" }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}