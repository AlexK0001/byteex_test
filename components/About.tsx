import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Gray background band — right half only */}
      <div
        className="absolute right-0 top-[224px] bottom-0 hidden lg:block"
        style={{
          width: "50%",
          background: "#F0EEEF",
          transform: "scaleY(-1)",
        }}
      />

      <div className="relative max-w-[1465px] mx-auto px-6 md:px-[96px] py-[80px]">
        <div className="flex gap-12 items-start">
          {/* LEFT — stacked product photos collage */}
          <div
            className="hidden lg:block flex-shrink-0 relative"
            style={{ width: "531px", height: "625px" }}
          >
            {/* Top-left small image */}
            <div
              className="absolute rounded-[6px] overflow-hidden"
              style={{
                left: "0",
                top: "188px",
                width: "128px",
                height: "188px",
                border: "4px solid #F0EEEF",
                boxShadow: "0px 3px 10px 1px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=128&h=188&fit=crop"
                alt="Product detail"
                width={128}
                height={188}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Main center large image */}
            <div
              className="absolute rounded-[6px] overflow-hidden"
              style={{
                left: "78px",
                top: "47px",
                width: "315px",
                height: "440px",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=315&h=440&fit=crop"
                alt="Loungewear lifestyle"
                width={315}
                height={440}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-right small image */}
            <div
              className="absolute rounded-[6px] overflow-hidden"
              style={{
                right: "0",
                top: "0",
                width: "128px",
                height: "188px",
                border: "4px solid #F0EEEF",
                boxShadow: "0px 3px 10px 1px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=128&h=188&fit=crop"
                alt="Product style"
                width={128}
                height={188}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-right small image */}
            <div
              className="absolute rounded-[6px] overflow-hidden"
              style={{
                right: "0",
                bottom: "0",
                width: "128px",
                height: "188px",
                border: "4px solid #F0EEEF",
                boxShadow: "0px 3px 10px 1px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=128&h=188&fit=crop"
                alt="Model wearing loungewear"
                width={128}
                height={188}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-left image */}
            <div
              className="absolute rounded-[6px] overflow-hidden"
              style={{
                left: "0",
                bottom: "0",
                width: "128px",
                height: "160px",
                border: "4px solid #F0EEEF",
                boxShadow: "0px 3px 10px 1px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=128&h=160&fit=crop"
                alt="Loungewear comfort"
                width={128}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT — text content */}
          <div className="flex-1 pt-[60px]">
            {/* Gray bg block (desktop) */}
            <div
              className="hidden lg:block absolute right-0 w-1/2 h-[320px] top-[224px]"
              style={{ background: "#F0EEEF", zIndex: 0 }}
            />

            <div className="relative z-10">
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "32px",
                  lineHeight: "40px",
                  letterSpacing: "0.04em",
                  color: "#2A2996",
                  marginBottom: "16px",
                }}
              >
                Be your best self.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  lineHeight: "23px",
                  letterSpacing: "0.03em",
                  color: "#6C6C6C",
                  marginBottom: "32px",
                  maxWidth: "520px",
                }}
              >
                Hi! My name&apos;s [Insert Name], and I founded [Insert] in ____. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt
                pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus,
                dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur
                felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est.
                Vivamus id arcu congue, faucibus libero nec, placerat ligula. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              </p>

              <a href="#shop" className="btn-primary">
                Customize Your Outfit
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                  <path
                    d="M1 5H17M17 5L13 1M17 5L13 9"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}