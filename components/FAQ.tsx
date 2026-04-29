"use client";
import type { FC } from "react";
import { useState } from "react";
import Image from "next/image";
import type { FAQItem } from "@/types/contentful";

interface FAQProps {
  items: FAQItem[];
}

const FAQ: FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section id="faq" className="py-[80px] px-6 md:px-[96px]" style={{ background: "#FFFFFF" }}>
      <div className="flex gap-12 items-start">
        {/* LEFT — FAQ list */}
        <div className="flex-1 max-w-[640px]">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", lineHeight: "40px", letterSpacing: "0.04em", color: "#01005B", marginBottom: "32px" }}>
            Frequently asked questions.
          </h2>
          <div>
            {items.map((item, i) => (
              <div key={i} className="faq-item">
                <button className="faq-toggle" aria-expanded={openIndex === i} onClick={() => toggle(i)}>
                  <span>{item.question}</span>
                  <span className="icon">{openIndex === i ? "−" : "+"}</span>
                </button>
                <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — product image stack */}
        <div className="hidden lg:block flex-shrink-0 relative" style={{ width: "430px", height: "645px" }}>
          <div className="absolute rounded-full" style={{ width: "120px", height: "120px", background: "#F9F0E5", bottom: "61px", left: "105px" }} />
          <div className="absolute rounded-[6px] overflow-hidden" style={{ left: "60px", top: "0", width: "280px", height: "390px", boxShadow: "0px 3px 10px 1px rgba(0,0,0,0.08)" }}>
            <Image src="https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=280&h=390&fit=crop" alt="FAQ product" width={280} height={390} className="w-full h-full object-cover" />
          </div>
          <div className="absolute rounded-[6px] overflow-hidden" style={{ left: "0", bottom: "60px", width: "185px", height: "185px", boxShadow: "0px 3px 10px 1px rgba(0,0,0,0.08)", border: "4px solid #F0EEEF" }}>
            <Image src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=185&h=185&fit=crop" alt="FAQ product 2" width={185} height={185} className="w-full h-full object-cover" />
          </div>
          <div className="absolute rounded-[6px] overflow-hidden" style={{ right: "0", bottom: "0", width: "185px", height: "185px", boxShadow: "0px 3px 10px 1px rgba(0,0,0,0.08)", border: "4px solid #F0EEEF" }}>
            <Image src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=185&h=185&fit=crop" alt="FAQ product 3" width={185} height={185} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;