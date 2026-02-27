import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import MegaMenu from "@/components/landing/MegaMenu";
import Footer from "@/components/landing/Footer";

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

export const metadata: Metadata = {
  title: "Krovos Inc. | Global Enterprise Technology Holdings",
  description:
    "Krovos Inc. is a premier global enterprise technology holding company headquartered in Vancouver, with operations spanning Dubai and Mumbai. We deliver transformative AI automation, custom software, digital marketing, managed IT, talent solutions, and logistics technology.",
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
  authors: [{ name: "Krovos Inc." }],
  openGraph: {
    title: "Krovos Inc. | Global Enterprise Technology Holdings",
    description: "Transforming enterprises through innovative technology solutions worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "Krovos Inc.",
  },
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
        <MegaMenu />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
