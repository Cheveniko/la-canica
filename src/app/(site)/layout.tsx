import type { Metadata } from "next";
import Script from "next/script";

import Radnika from "next/font/local";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import NextAuthProvider from "@/components/providers/NextAuthProvider";

import "../../styles/globals.css";

const radnika = Radnika({
  src: "../../../public/fonts/Radnika-Medium.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | La Canica",
    default: "La Canica",
  },
  description: "Noticias tan falsas que en Ecuador parecen reales 🇪🇨",
  keywords: [
    "Canica",
    "Ecuador",
    "Noticias",
    "Quito",
    "Guayaquil",
    "Cuenca",
    "Politica",
  ],
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6987597403785360"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        ></Script>
      </head>
      <body className={radnika.className}>
        <NextAuthProvider>
          <Navbar variant="color" />
          <main className="bg-cyan-950 py-4">{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
