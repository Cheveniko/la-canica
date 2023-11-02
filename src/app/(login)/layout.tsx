import type { Metadata } from "next";

import Radnika from "next/font/local";

import Navbar from "@/components/layout/Navbar";

import "../../styles/globals.css";

const radnika = Radnika({
  src: "../../../public/fonts/Radnika-Medium.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iniciar sesión | La Canica",

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
      <body className={radnika.className}>
        <Navbar variant="transparent" />
        {children}
      </body>
    </html>
  );
}
