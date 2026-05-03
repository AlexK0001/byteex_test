export default function About() {
  // Desktop collage images (absolute positioned)
  const desktopImgs = [
    { src:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=315&h=440&fit=crop&auto=format",
      s:{ left:76, top:48, width:315, height:440, borderRadius:8 } },
    { src:"https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=128&h=188&fit=crop&auto=format",
      s:{ left:0, top:188, width:128, height:188, borderRadius:6, border:"4px solid #F0EEEF", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" } },
    { src:"https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=128&h=188&fit=crop&auto=format",
      s:{ right:0, top:0, width:128, height:188, borderRadius:6, border:"4px solid #F0EEEF", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" } },
    { src:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=128&h=160&fit=crop&auto=format",
      s:{ left:0, bottom:0, width:128, height:160, borderRadius:6, border:"4px solid #F0EEEF", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" } },
    { src:"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=128&h=188&fit=crop&auto=format",
      s:{ right:0, bottom:0, width:128, height:188, borderRadius:6, border:"4px solid #F0EEEF", boxShadow:"0 3px 10px 1px rgba(0,0,0,.08)" } },
  ];

  return (
    <section className="about" id="about">
      {/* Grey band — desktop only */}
      <div className="about__band" />

      <div className="wrap">

        {/* ═══ MOBILE layout ═══ */}
        <div className="about__mobile">
          <div className="about__mobile-imgs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=280&fit=crop&auto=format"
              alt="Loungewear" className="about__mob-img1"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=140&h=200&fit=crop&auto=format"
              alt="Detail" className="about__mob-img2"
            />
          </div>
          <div className="about__text">
            <h2 className="about__h2">Be your best self.</h2>
            <p className="about__p">
              Hi! My name&apos;s [Insert Name], and I founded [Insert] in ____. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt
              pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus,
              dignissim risus quis, bibendum dolor.
            </p>
            <a href="#shop" className="btn">
              Customize Your Outfit
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ═══ DESKTOP layout ═══ */}
        <div className="about__desktop">
          {/* Collage */}
          <div className="about__collage">
            {desktopImgs.map((img, i) => (
              <div key={i} style={{ position:"absolute", overflow:"hidden", ...img.s }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}/>
              </div>
            ))}
          </div>
          {/* Text */}
          <div className="about__text">
            <h2 className="about__h2">Be your best self.</h2>
            <p className="about__p">
              Hi! My name&apos;s [Insert Name], and I founded [Insert] in ____. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt
              pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus,
              dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur
              felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est.
              Vivamus id arcu congue, faucibus libero nec, placerat ligula.
            </p>
            <a href="#shop" className="btn">
              Customize Your Outfit
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                <path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}