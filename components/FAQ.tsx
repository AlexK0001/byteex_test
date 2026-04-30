"use client";
import type { FC } from "react";
import { useState } from "react";
import type { FAQItem } from "@/types/contentful";

interface FAQProps { items: FAQItem[]; }

const FAQ: FC<FAQProps> = ({ items }) => {
  const [open, setOpen] = useState(0);
  const imgs = [
    "https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=270&h=370&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=180&h=180&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=180&h=180&fit=crop&auto=format",
  ];

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="faq__inner">
          <div className="faq__col">
            <h2 className="faq__h2">Frequently asked questions.</h2>
            {items.map((item,i) => (
              <div key={i} className="faq__item">
                <button
                  className="faq__toggle"
                  aria-expanded={open===i}
                  onClick={()=>setOpen(p=>p===i?-1:i)}
                >
                  <span>{item.question}</span>
                  <span className="faq__plus">{open===i?"−":"+"}</span>
                </button>
                <div className={`faq__answer${open===i?" open":""}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>

          <div className="faq__imgs">
            {/* bg circle */}
            <div style={{ position:"absolute", width:110, height:110, borderRadius:"50%", background:"#F9F0E5", bottom:56, left:96 }}/>
            {/* main */}
            <div style={{ position:"absolute", left:56, top:0, width:270, height:370, borderRadius:6, overflow:"hidden", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgs[0]} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
            </div>
            {/* bottom left */}
            <div style={{ position:"absolute", left:0, bottom:56, width:180, height:180, borderRadius:6, overflow:"hidden", border:"4px solid #F0EEEF", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgs[1]} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
            </div>
            {/* bottom right */}
            <div style={{ position:"absolute", right:0, bottom:0, width:180, height:180, borderRadius:6, overflow:"hidden", border:"4px solid #F0EEEF", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgs[2]} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;