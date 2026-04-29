import { getSiteContent } from "@/lib/contentful";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AsSeenIn from "@/components/AsSeenIn";
import Features from "@/components/Features";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import InstagramGrid from "@/components/InstagramGrid";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import GreenImpact from "@/components/GreenImpact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

// Revalidate every 60 seconds — ISR (Incremental Static Regeneration)
// Contentful webhook може тригерити швидший ревалід
export const revalidate = 60;

export default async function HomePage() {
  // Дані витягуються з Contentful CMS (або fallback якщо не налаштований)
  const content = await getSiteContent();

  return (
    <main>
      <Header />

      {/* 1. Hero + Announcement bar */}
      <Hero content={content.hero} />

      {/* 2. As seen in — media logos */}
      <AsSeenIn />

      {/* 3. Features — Loungewear you can be proud of */}
      <Features features={content.features} />

      {/* 4. About — Be your best self */}
      <About />

      {/* 5. How It Works — Comfort made easy */}
      <HowItWorks />

      {/* 6. Instagram / Photo grid */}
      <InstagramGrid />

      {/* 7. Testimonials slider */}
      <Testimonials testimonials={content.testimonials} />

      {/* 8. FAQ accordion */}
      <FAQ items={content.faqItems} />

      {/* 9. Green Impact bar */}
      <GreenImpact data={content.greenImpact} />

      {/* 10. Newsletter / Find something you love */}
      <Newsletter
        headline={content.newsletterHeadline}
        subtext={content.newsletterSubtext}
      />

      {/* 11. Footer */}
      <Footer />
    </main>
  );
}