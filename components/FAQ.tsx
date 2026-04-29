"use client";
import type { FC } from "react";
import { useState } from "react";
import type { FAQItem } from "@/types/contentful";

interface FAQProps { items: FAQItem[]; }

const FAQ: FC<FAQProps> = ({ items }) => {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="faq" style={{ padding: "80px 0", background: "#fff" }}>
      <div className="wrap">
        <div style={{ display:"flex", gap:64, alignItems:"flex-start" }}>

          {/* FAQ list */}
          <div style={{ flex:1, maxWidth:640 }}>
            <h2 style={{
              fontFamily:"var(--font-serif)", fontSize:32, lineHeight:"40px",
              letterSpacing:"0.04em", color:"#01005B", fontWeight:400, marginBottom:32,
            }}>
              Frequently asked questions.
            </h2>
            {items.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-toggle"
                  aria-expanded={open === i}
                  onClick={() => setOpen(p => p === i ? -1 : i)}
                >
                  <span>{item.question}</span>
                  <span className="faq-icon">{open === i ? "−" : "+"}</span>
                </button>
                <div className={`faq-answer${open === i ? " open" : ""}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>

          {/* Image stack */}
          <div style={{ flexShrink:0, width:430, height:645, position:"relative" }}>
            {/* bg circle */}
            <div style={{ position:"absolute", width:120, height:120, borderRadius:"50%", background:"#F9F0E5", bottom:60, left:100 }} />
            {/* main */}
            <div style={{ position:"absolute", left:60, top:0, width:280, height:390, borderRadius:6, overflow:"hidden", boxShadow:"0 3px 10px 1px rgba(0,0,0,0.08)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=280&h=390&fit=crop&auto=format" alt="FAQ product" style={{ width:"100%", height:"100%", objectFit:"cover" }} loading="lazy"/>
            </div>
            {/* bottom left */}
            <div style={{ position:"absolute", left:0, bottom:60, width:185, height:185, borderRadius:6, overflow:"hidden", boxShadow:"0 3px 10px 1px rgba(0,0,0,0.08)", border:"4px solid #F0EEEF" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=185&h=185&fit=crop&auto=format" alt="FAQ product 2" style={{ width:"100%", height:"100%", objectFit:"cover" }} loading="lazy"/>
            </div>
            {/* bottom right */}
            <div style={{ position:"absolute", right:0, bottom:0, width:185, height:185, borderRadius:6, overflow:"hidden", boxShadow:"0 3px 10px 1px rgba(0,0,0,0.08)", border:"4px solid #F0EEEF" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=185&h=185&fit=crop&auto=format" alt="FAQ product 3" style={{ width:"100%", height:"100%", objectFit:"cover" }} loading="lazy"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;