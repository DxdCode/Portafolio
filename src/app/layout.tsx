import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata: Metadata = {
  title: "DxdCode | Portfolio - Desarrollador Full Stack",
  description: "Portfolio profesional de Stalin. Desarrollador Full Stack especializado en React, Next.js, TypeScript y soluciones web escalables.",
  keywords: ["desarrollador", "portfolio", "react", "next.js", "typescript", "full stack"],
  authors: [{ name: "Stalin" }],
  creator: "Stalin",
  metadataBase: new URL("https://dxdcode.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dxdcode.com",
    title: "DxdCode | Portfolio - Desarrollador Full Stack",
    description: "Portfolio profesional de Stalin. Desarrollador Full Stack especializado en React, Next.js, TypeScript",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DxdCode Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DxdCode | Portfolio",
    description: "Desarrollador Full Stack - React, Next.js, TypeScript",
    images: ["/assets/twitter-image.jpg"],
  },
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://dxdcode.com" />
        <link rel="icon" href="/imgico.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Stalin",
            "url": "https://dxdcode.com",
            "jobTitle": "Full Stack Developer",
            "image": "/assets/profile.jpg",
            "sameAs": [
              "https://github.com",
              "https://linkedin.com",
              "https://twitter.com",
            ],
          })}
        </script>
      </body>
    </html>
  );
}
