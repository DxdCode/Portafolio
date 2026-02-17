import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DxdCode | Portfolio — Full Stack Developer",
  description:
    "Portfolio profesional de Stalin. Desarrollador Full Stack especializado en React, Next.js, TypeScript y soluciones web escalables.",
  keywords: [
    "desarrollador",
    "portfolio",
    "react",
    "next.js",
    "typescript",
    "full stack",
  ],
  authors: [{ name: "Stalin" }],
  creator: "Stalin",
  metadataBase: new URL("https://dxdcode.pages.dev"),
  icons: {
    icon: "/imgico.ico",
    shortcut: "/imgico.ico",
    apple: "/imgico.ico",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning className="flex flex-col min-h-screen">
        <LanguageProvider>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
