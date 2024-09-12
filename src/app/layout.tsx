import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import localFont from "next/font/local";

// Importación de fuentes locales
const myriadRegular = localFont({
  src: "./fonts/Myriad-Regular.otf",
  variable: "--font-myriad-regular",
});

const myriadBold = localFont({
  src: "./fonts/Myriad-Bold.otf",
  variable: "--font-myriad-bold",
});

const openSansRegular = localFont({
  src: "./fonts/OpenSans-Regular.ttf",
  variable: "--font-opensans-regular",
});

const openSansBold = localFont({
  src: "./fonts/OpenSans-Bold.ttf",
  variable: "--font-opensans-bold",
});

export const metadata: Metadata = {
  title: "Feliz Cumpleaños Kaydi",
  description: "Una aplicación dedicada a una persona especial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${myriadRegular.variable} ${myriadBold.variable} ${openSansRegular.variable} ${openSansBold.variable}`}
    >
      <head>
        <link rel="icon" href="/img/favicon.ico" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
