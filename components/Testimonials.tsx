"use client";
import { useState } from "react";
import type { FC } from "react";
import type { TestimonialContent } from "@/types/contentful";

interface TestimonialsProps {
  testimonials: TestimonialContent[];
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-[2px] mb-2">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i < count ? "#FFB801" : "#D7D7D7"}>
          <path d="M6 0.5L7.34 4.18H11.09L8.07 6.47L9.18 10.18L6 7.9L2.82 10.18L3.93 6.47L0.91 4.18H4.66L6 0.5Z" />
        </svg>
      ))}
    </div>
  );
}

const Testimonials: FC<TestimonialsProps> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  // Show 3 cards at once, centered on current
  const getVisible = () => {
    const len = testimonials.length;
    return [
      testimonials[(current) % len],
      testimonials[(current + 1) % len],
      testimonials[(current + 2) % len],
    ];
  };

  const visible = getVisible();

  return (
    <section id="reviews" className="py-[80px] px-6 md:px-[96px] bg-white">
      <h2
        className="text-center mb-4"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "0.04em",
          color: "#01005B",
        }}
      >
        What are our fans saying?
      </h2>
      <p
        className="text-center mb-12"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "15px",
          lineHeight: "23px",
          letterSpacing: "0.03em",
          color: "#676869",
          maxWidth: "640px",
          margin: "0 auto 48px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis
        tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh.
      </p>

      {/* Slider */}
      <div className="relative flex items-center gap-4">
        {/* Left arrow */}
        <button
          className="slider-arrow flex-shrink-0"
          onClick={prev}
          aria-label="Previous testimonial"
        >
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path d="M9 1L1 9L9 17" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-5">
          {visible.map((t, i) => (
            <div
              key={i}
              className="review-card p-6 flex flex-col gap-3"
              style={{ minHeight: i === 1 ? "252px" : "194px" }}
            >
              {/* Avatar + name + stars */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                  style={{ background: "#1C2E58" }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "15px",
                      lineHeight: "23px",
                      letterSpacing: "0.03em",
                      color: "#676869",
                    }}
                  >
                    {t.name}
                  </p>
                  <StarRating count={t.rating} />
                </div>
              </div>
              {/* Review text */}
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "12px",
                  lineHeight: "23px",
                  letterSpacing: "0.04em",
                  color: "#676869",
                }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          className="slider-arrow flex-shrink-0"
          onClick={next}
          aria-label="Next testimonial"
        >
          <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
            <path d="M1 1L9 9L1 17" stroke="#676869" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-4 mt-12">
        <a href="#shop" className="btn-primary">
          Customize Your Outfit
          <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
            <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
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
};

export default Testimonials;