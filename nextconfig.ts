import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // unoptimized = true дозволяє завантажувати зображення напряму
    // без Next.js Image Optimization API (потрібно для Unsplash на Vercel free)
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.ctfassets.net" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;