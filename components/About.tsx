export default function About() {
  const imgs = [
    { src:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=315&h=440&fit=crop&auto=format", style:{ position:"absolute" as const, left:76, top:48, width:315, height:440, borderRadius:8, overflow:"hidden" as const } },
    { src:"https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=128&h=188&fit=crop&auto=format", style:{ position:"absolute" as const, left:0, top:188, width:128, height:188, borderRadius:6, overflow:"hidden" as const, border:"4px solid #F0EEEF", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" } },
    { src:"https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=128&h=188&fit=crop&auto=format", style:{ position:"absolute" as const, right:0, top:0, width:128, height:188, borderRadius:6, overflow:"hidden" as const, border:"4px solid #F0EEEF", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" } },
    { src:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=128&h=160&fit=crop&auto=format", style:{ position:"absolute" as const, left:0, bottom:0, width:128, height:160, borderRadius:6, overflow:"hidden" as const, border:"4px solid #F0EEEF", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" } },
    { src:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=128&h=188&fit=crop&auto=format", style:{ position:"absolute" as const, right:0, bottom:0, width:128, height:188, borderRadius:6, overflow:"hidden" as const, border:"4px solid #F0EEEF", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" } },
  ];

  return (
    <section className="about" id="about">
      <div className="about__band" />
      <div className="wrap about__inner">

        {/* Collage */}
        <div className="about__collage">
          {imgs.map((img,i) => (
            <div key={i} style={img.style}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt="About" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
            </div>
          ))}
        </div>

        {/* Text */}
        <div className="about__text">
          <h2 className="about__h2">Be your best self.</h2>
          <p className="about__p">
            Hi! My name&apos;s [Insert Name], and I founded [Insert] in ____. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque.
            In eget ipsum et felis finibus consequat. Fusce non nibh luctus, dignissim risus quis,
            bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non.
            Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue,
            faucibus libero nec, placerat ligula.
          </p>
          <a href="#shop" className="btn">
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