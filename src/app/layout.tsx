import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import BackToTop from "@/components/landing/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://krovos.ca";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Krovos Inc. | Global Enterprise Technology Holdings",
    template: "%s | Krovos Inc.",
  },
  description:
    "Krovos Inc. is a premier enterprise technology holding company delivering transformative AI automation, custom software, digital marketing, managed IT, talent solutions, and logistics technology.",
  keywords: [
    "enterprise technology",
    "AI automation",
    "custom software",
    "digital marketing",
    "managed IT",
    "talent solutions",
    "logistics technology",
    "global enterprise",
    "corporate holdings",
  ],
  authors: [{ name: "Krovos Inc.", url: SITE_URL }],
  creator: "Krovos Inc.",
  publisher: "Krovos Inc.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Krovos Inc. | Global Enterprise Technology Holdings",
    description:
      "Transforming enterprises through innovative technology solutions worldwide.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Krovos Inc.",
    images: [
      {
        url: "/images/hero-enterprise.png",
        width: 1200,
        height: 630,
        alt: "Krovos Inc. — Global Enterprise Technology Holdings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krovos Inc. | Global Enterprise Technology Holdings",
    description:
      "Transforming enterprises through innovative technology solutions worldwide.",
    images: ["/images/hero-enterprise.png"],
    creator: "@krovosinc",
    site: "@krovosinc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    // google: "your-google-site-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
