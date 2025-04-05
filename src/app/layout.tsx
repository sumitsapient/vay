import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeaderV2 from "@/components/HeaderV2/HeaderV2";
import SocialFloating from "@/components/SocialFloating/SocialFloating";
import Footer from "@/components/Footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "EximVay - Quality Indian Exports Worldwide",
  description: "Explore top-quality Indian export products, including Agriculture & Processed Food, Handicrafts & Decor, Textiles & Fabrics, Organic & Herbal Products, and Gems & Jewellery.",
  openGraph: {
    title: "EximVay - Quality Indian Exports Worldwide",
    description: "Explore top-quality Indian export products...",
    url: "https://www.eximvay.com",
    siteName: "EximVay",
    images: [
      {
        url: "https://www.eximvay.com/path-to-image.jpg",
        width: 1200,
        height: 630,
        alt: "EximVay - Quality Indian Exports",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EximVay - Quality Indian Exports Worldwide",
    description: "Explore top-quality Indian export products...",
    images: ["https://www.eximvay.com/path-to-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SocialFloating />
        <HeaderV2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
