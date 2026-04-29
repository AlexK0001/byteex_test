import Image from "next/image";

const IMGS = {
  main:   "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=315&h=440&fit=crop&auto=format",
  tl:     "https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=128&h=188&fit=crop&auto=format",
  tr:     "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=128&h=188&fit=crop&auto=format",
  bl:     "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=128&h=160&fit=crop&auto=format",
  br:     "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=128&h=188&fit=crop&auto=format",
};

function Thumb({ src, alt, w, h, style }: { src:string; alt:string; w:number; h:number; style:React.CSSProperties }) {
  return (
    <div style={{ ...style, borderRadius: 6, overflow: "hidden", border: "4px solid #F0EEEF", boxShadow: "0 3px 10px 1px rgba(0,0,0,0.08)" }}>
      <Image src={src} alt={alt} width={w} height={h}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        unoptimized />
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ background: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Grey right band */}
      <div style={{ position: "absolute", right: 0, top: 220, bottom: 0, width: "50%", background: "#F0EEEF", zIndex: 0 }} />

      <div className="wrap" style={{ position: "relative", zIndex: 1, display: "flex", gap: 64, alignItems: "flex-start", paddingTop: 80, paddingBottom: 80 }}>

        {/* Image collage */}
        <div style={{ flexShrink: 0, position: "relative", width: 520, height: 620 }}>
          {/* main */}
          <div style={{ position: "absolute", left: 80, top: 50, borderRadius: 8, overflow: "hidden", width: 315, height: 440 }}>
            <Image src={IMGS.main} alt="Loungewear lifestyle" width={315} height={440}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} unoptimized />
          </div>
          <Thumb src={IMGS.tl} alt="Detail" w={128} h={188} style={{ position: "absolute", left: 0, top: 188, width: 128, height: 188 }} />
          <Thumb src={IMGS.tr} alt="Style" w={128} h={188} style={{ position: "absolute", right: 0, top: 0, width: 128, height: 188 }} />
          <Thumb src={IMGS.bl} alt="Comfort" w={128} h={160} style={{ position: "absolute", left: 0, bottom: 0, width: 128, height: 160 }} />
          <Thumb src={IMGS.br} alt="Model" w={128} h={188} style={{ position: "absolute", right: 0, bottom: 0, width: 128, height: 188 }} />
        </div>

        {/* Text */}
        <div style={{ flex: 1, paddingTop: 40 }}>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontSize: 32, lineHeight: "40px",
            letterSpacing: "0.04em", color: "#2A2996", fontWeight: 400, marginBottom: 20,
          }}>
            Be your best self.
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 15, lineHeight: "23px",
            letterSpacing: "0.03em", color: "#6C6C6C", marginBottom: 32, maxWidth: 520,
          }}>
            Hi! My name&apos;s [Insert Name], and I founded [Insert] in ____. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.
            In eget ipsum et felis finibus consequat. Fusce non nibh luctus, dignissim risus quis,
            bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non.
            Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue,
            faucibus libero nec, placerat ligula.
          </p>
          <a href="#shop" className="btn-primary">
            Customize Your Outfit
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}