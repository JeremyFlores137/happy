import type { Metadata } from "next";

import "./globals.css";
import { Footer } from "@/components/Footer";

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
    <html lang="es">
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
