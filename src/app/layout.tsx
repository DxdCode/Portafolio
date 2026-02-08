import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../context/LanguageContext";

export const metadata: Metadata = {
  title: "DxdCode Portfolio - Desarrollador Full Stack",
  description: "Portfolio profesional de Stalin. Desarrollador Full Stack especializado en React, Next.js, TypeScript y soluciones web escalables.",
  keywords: ["desarrollador", "portfolio", "react", "next.js", "typescript", "full stack"],
  authors: [{ name: "Stalin" }],
  creator: "Stalin",
  metadataBase: new URL("https://dxdcode.pages.dev"),
  icons: {
    icon: "/imgico.ico",
    shortcut: "/imgico.ico",
    apple: "/imgico.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://dxdcode.pages.dev",
    title: "DxdCode Portfolio - Desarrollador Full Stack",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Stalin",
              "url": "https://dxdcode.pages.dev",
              "jobTitle": "Full Stack Developer",
              "image": "https://dxdcode.pages.dev/assets/profile.jpg",
              "sameAs": [
                "https://github.com/dxdcode",
                "https://linkedin.com/in/stalin",
                "https://twitter.com/dxdcode",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "DxdCode Portfolio",
              "url": "https://dxdcode.pages.dev",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dxdcode.pages.dev/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SiteNavigationElement",
                  "position": 1,
                  "name": "Acerca de mi",
                  "url": "https://dxdcode.pages.dev/#about"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 2,
                  "name": "Proyectos",
                  "url": "https://dxdcode.pages.dev/#projects"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 3,
                  "name": "Habilidades",
                  "url": "https://dxdcode.pages.dev/#skills"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 4,
                  "name": "Contacto",
                  "url": "https://dxdcode.pages.dev/#contact"
                }
              ]
            }
          ])}
        </script>
      </body>
    </html>
  );
}
