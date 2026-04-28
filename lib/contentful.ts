// lib/contentful.ts
//
// ──────────────────────────────────────────────
//  ЩО ТАКЕ HEADLESS CMS?
// ──────────────────────────────────────────────
//  Headless CMS (Contentful) — це система керування контентом
//  БЕЗ фронтенду ("без голови"). Вона надає тільки API.
//  Менеджер змінює тексти/зображення в адмін-панелі Contentful,
//  а Next.js отримує ці дані через REST/GraphQL API і відображає їх.
//  Результат: контент оновлюється без деплою коду.
// ──────────────────────────────────────────────

import { createClient } from "contentful";
import type {
  HeroContent,
  TestimonialContent,
  FAQItem,
  GreenImpact,
  ProductFeature,
  SiteContent,
} from "@/types/contentful";

// ── Fallback-дані (використовуються якщо Contentful не налаштований) ──
const FALLBACK_DATA: SiteContent = {
  hero: {
    headline: "Don't apologize for being comfortable.",
    subheadline: "Beautiful, comfortable loungewear for day or night.",
    bulletPoints: [
      "No wasteful extras, like tags or plastic packaging.",
      "Our signature fabric is incredibly comfortable — unlike anything you've ever felt.",
    ],
    ctaText: "Customize Your Outfit",
    ctaUrl: "#shop",
    reviewText: "Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level.",
    reviewerName: "Amy P.",
    reviewCount: "One of 500+ 5 Star Reviews Online",
  },
  testimonials: [
    {
      name: "Jane, S.",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
    },
    {
      name: "Jane, S.",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane, S.",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.",
    },
  ],
  faqItems: [
    {
      question: "Lorem ipsum dolor sit amet",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus, dignissim risus quis, bibendum dolor.",
    },
    { question: "lorem ipsum dolor sit amet", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "lorem ipsum dolor sit amet", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "lorem ipsum dolor sit amet", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "lorem ipsum dolor sit amet", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { question: "lorem ipsum dolor sit amet", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ],
  greenImpact: {
    co2Saved: "3,927 kg",
    waterSaved: "2,546,157 days",
    energySaved: "7,321 kWh",
  },
  features: [
    {
      title: "Ethically sourced.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
      icon: "leaf",
    },
    {
      title: "Responsibly made.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
      icon: "recycle",
    },
    {
      title: "Made for living in.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
      icon: "home",
    },
    {
      title: "Unimaginably comfortable.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.",
      icon: "star",
    },
  ],
  newsletterHeadline: "Find something you love.",
  newsletterSubtext:
    "Click below to browse our collection and save 15% on your second order.",
};

// ── Contentful клієнт ──
function getContentfulClient() {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    return null;
  }

  return createClient({ space: spaceId, accessToken });
}

// ── Витягування контенту з Contentful ──
// Якщо Contentful не налаштований — повертає fallback дані
export async function getSiteContent(): Promise<SiteContent> {
  const client = getContentfulClient();

  if (!client) {
    console.info("[CMS] Contentful not configured — using fallback data.");
    return FALLBACK_DATA;
  }

  try {
    // Hero секція
    const heroEntries = await client.getEntries({ content_type: "hero", limit: 1 });
    const testimonialEntries = await client.getEntries({ content_type: "testimonial" });
    const faqEntries = await client.getEntries({ content_type: "faqItem" });
    const greenImpactEntries = await client.getEntries({ content_type: "greenImpact", limit: 1 });
    const featureEntries = await client.getEntries({ content_type: "productFeature" });

    const heroRaw = heroEntries.items[0]?.fields as Record<string, unknown> | undefined;
    const greenRaw = greenImpactEntries.items[0]?.fields as Record<string, unknown> | undefined;

    const hero: HeroContent = heroRaw
      ? {
          headline: (heroRaw.headline as string) ?? FALLBACK_DATA.hero.headline,
          subheadline: (heroRaw.subheadline as string) ?? FALLBACK_DATA.hero.subheadline,
          bulletPoints: (heroRaw.bulletPoints as string[]) ?? FALLBACK_DATA.hero.bulletPoints,
          ctaText: (heroRaw.ctaText as string) ?? FALLBACK_DATA.hero.ctaText,
          ctaUrl: (heroRaw.ctaUrl as string) ?? FALLBACK_DATA.hero.ctaUrl,
          reviewText: (heroRaw.reviewText as string) ?? FALLBACK_DATA.hero.reviewText,
          reviewerName: (heroRaw.reviewerName as string) ?? FALLBACK_DATA.hero.reviewerName,
          reviewCount: (heroRaw.reviewCount as string) ?? FALLBACK_DATA.hero.reviewCount,
        }
      : FALLBACK_DATA.hero;

    const testimonials: TestimonialContent[] =
      testimonialEntries.items.length > 0
        ? testimonialEntries.items.map((item) => {
            const f = item.fields as Record<string, unknown>;
            return {
              name: (f.name as string) ?? "",
              rating: (f.rating as number) ?? 5,
              text: (f.text as string) ?? "",
            };
          })
        : FALLBACK_DATA.testimonials;

    const faqItems: FAQItem[] =
      faqEntries.items.length > 0
        ? faqEntries.items.map((item) => {
            const f = item.fields as Record<string, unknown>;
            return {
              question: (f.question as string) ?? "",
              answer: (f.answer as string) ?? "",
            };
          })
        : FALLBACK_DATA.faqItems;

    const greenImpact: GreenImpact = greenRaw
      ? {
          co2Saved: (greenRaw.co2Saved as string) ?? FALLBACK_DATA.greenImpact.co2Saved,
          waterSaved: (greenRaw.waterSaved as string) ?? FALLBACK_DATA.greenImpact.waterSaved,
          energySaved: (greenRaw.energySaved as string) ?? FALLBACK_DATA.greenImpact.energySaved,
        }
      : FALLBACK_DATA.greenImpact;

    const features: ProductFeature[] =
      featureEntries.items.length > 0
        ? featureEntries.items.map((item) => {
            const f = item.fields as Record<string, unknown>;
            return {
              title: (f.title as string) ?? "",
              description: (f.description as string) ?? "",
              icon: (f.icon as string) ?? "star",
            };
          })
        : FALLBACK_DATA.features;

    return {
      hero,
      testimonials,
      faqItems,
      greenImpact,
      features,
      newsletterHeadline: FALLBACK_DATA.newsletterHeadline,
      newsletterSubtext: FALLBACK_DATA.newsletterSubtext,
    };
  } catch (error) {
    console.error("[CMS] Contentful fetch error:", error);
    return FALLBACK_DATA;
  }
}