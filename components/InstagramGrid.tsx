const IMGS = [
  "https://images.unsplash.com/photo-1617952739396-2e6a0a9c1a32?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1603344204980-4edb0ea63148?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1520012218364-3dbe62c99bee?w=130&h=130&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=130&h=130&fit=crop&auto=format",
];

export default function InstagramGrid() {
  return (
    <section style={{ width:"100%", overflow:"hidden" }}>
      <div className="ig-grid">
        {IMGS.map((src,i) => (
          <div key={i}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" loading="lazy"/>
          </div>
        ))}
      </div>
    </section>
  );
}