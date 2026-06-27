import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const display = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adv3d-product-dev.vercel.app"),
  title: "Adv3D Product Development & Prototyping | From CAD File to Functional Prototype in 3–7 Business Days",
  description:
    "Engineering-reviewed additive manufacturing for medical device startups, inventors, and engineering teams. Quote in 24 hours. DFM feedback on every upload. NDA-ready. US-based.",
  openGraph: {
    title: "Adv3D Product Development & Prototyping | From CAD File to Functional Prototype",
    description:
      "Quote in 24 hours. Functional prototypes in 3–7 business days. NDA-ready. US-based.",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-brand-bg text-brand-text font-body antialiased">
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
