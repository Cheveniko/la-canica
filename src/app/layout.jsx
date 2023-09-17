import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import Radnika from "next/font/local";

const radnika = Radnika({
  src: "../../public/fonts/Radnika-Medium.otf",
  display: "swap",
});

export const metadata = {
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

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={radnika.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
