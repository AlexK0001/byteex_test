import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BYTEEX — Consciously Made Loungewear",
  description:
    "Beautiful, comfortable loungewear for day or night. Ethically sourced, responsibly made.",
  openGraph: {
    title: "BYTEEX — Consciously Made Loungewear",
    description: "Beautiful, comfortable loungewear for day or night.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}