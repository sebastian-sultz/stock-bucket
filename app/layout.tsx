import type { Metadata } from "next";
import { Inter, Playfair_Display, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/shared/AmbientBackground";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stockbuckets.in"),
  title: {
    default: "Stock Buckets Research Company | Clarity Before Every Call",
    template: "%s | Stock Buckets Research",
  },
  description:
    "Structured market research advisory across equity, futures, options, and commodity segments. Every call delivered with defined entry, targets, and stop-loss.",
  keywords: [
    "stock market research India",
    "equity research calls",
    "intraday research",
    "futures trading calls",
    "options research advisory",
    "MCX commodity research",
    "stock buckets research",
  ],
  authors: [{ name: "Stock Buckets Research Company" }],
  creator: "Stock Buckets Research Company",
  publisher: "Stock Buckets Research Company",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://stockbuckets.in",
    title: "Stock Buckets Research Company | Clarity Before Every Call",
    description:
      "Structured, risk-defined research across equity, futures, options, and commodity markets. Defined entry, target, and stop-loss on every call.",
    siteName: "Stock Buckets Research Company",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stock Buckets Research Company",
    description: "Clarity Before Every Call — Structured market research across all segments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: COMPANY.name,
    description: COMPANY.subTagline,
    url: "https://stockbuckets.in",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 B/1 Colvin Road, Civil Lines",
      addressLocality: "Prayagraj",
      addressRegion: "Uttar Pradesh",
      postalCode: "211001",
      addressCountry: "IN",
    },
    openingHours: "Mo-Sa 09:00-18:00",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-cloud-white text-ink-navy selection:bg-sage-green selection:text-white relative">
        <AmbientBackground />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
