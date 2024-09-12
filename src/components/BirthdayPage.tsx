// src/app/page.tsx
"use client";

import Image from "next/image";
import { GiftSection } from "./birthday/GiftSection";
import { PhotosGrid } from "./birthday/PhotoGrid";
import { DescriptionSection } from "./birthday/DescriptionSection";
import { Transition } from "./ui/Transition";
import { TextAnimation } from "./ui/TextAnimation";
import { motion } from "framer-motion";

export default function BirthdayPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 p-4">
      <Transition />

      <section className="text-center mb-8">
        <TextAnimation
          text="¡Hoy es el cumpleaños de Kaydi!"
          variant="h3"
          component="h1"
          className="font-bold text-pink-500 mb-2 font-secondary inline-block"
        />

        <motion.span
          role="img"
          aria-label="celebration"
          className="ml-2 inline-block text-4xl"
          whileHover={{ scale: 1.5 }} // El emoji crecerá al hacer hover
          transition={{ duration: 0.3 }} // Duración de la animación
        >
          🎉
        </motion.span>

        <Image
          src="/img/kaydi.jpg"
          alt="Kaydi Profile"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
        <div className="mt-4 text-pink-500">
          <TextAnimation
            text="24 años"
            variant="h5"
            className="text-2xl font-semibold font-primary"
          />
          <TextAnimation
            text="12.09.2024"
            variant="caption"
            className="text-sm font-primary"
          />
        </div>
      </section>

      {/* Sección del regalo interactivo */}
      <GiftSection />

      {/* Sección de fotos */}
      <PhotosGrid />

      {/* Sección de Descripción */}
      <DescriptionSection />
    </main>
  );
}
