// types/contentful.ts
// Типи для Contentful CMS контент-моделей

export interface HeroContent {
  headline: string;
  subheadline: string;
  bulletPoints: string[];
  ctaText: string;
  ctaUrl: string;
  reviewText: string;
  reviewerName: string;
  reviewCount: string;
}

export interface TestimonialContent {
  name: string;
  rating: number;
  text: string;
  avatarColor?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GreenImpact {
  co2Saved: string;
  waterSaved: string;
  energySaved: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface SiteContent {
  hero: HeroContent;
  testimonials: TestimonialContent[];
  faqItems: FAQItem[];
  greenImpact: GreenImpact;
  features: ProductFeature[];
  newsletterHeadline: string;
  newsletterSubtext: string;
}