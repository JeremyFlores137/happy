"use client";

import { useState } from "react";
import Image from "next/image";
import { GiftSection } from "./birthday/GiftSection";
import { PhotosGrid } from "./birthday/PhotoGrid";
import { DescriptionSection } from "./birthday/DescriptionSection";
import { Transition } from "./ui/Transition";
import { TextAnimation } from "./ui/TextAnimation";
import { motion } from "framer-motion";

export default function BirthdayPage() {
  const [imageSrc, setImageSrc] = useState("/img/kaydi.jpg");

  const handleImageClick = () => {
    setImageSrc((prevSrc) =>
      prevSrc === "/img/kaydi.jpg" ? "/img/kaydi_v2.png" : "/img/kaydi.jpg"
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 p-4">
      <Transition />

      <section className="text-center my-8">
        <TextAnimation
          text="¡Hoy es el cumpleaños de Kaydi!"
          variant="h3"
          component="h1"
          className="font-bold text-pink-500  font-secondary lg:text-3xl"
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

        <div className="flex justify-center my-8">
          <motion.div
            className="relative inline-block rounded-full cursor-pointer"
            whileHover={{
              scale: 1.05, // Aumentar un poco la imagen
              boxShadow:
                "0 0 0 6px rgba(255, 102, 178, 0.9), 0 0 0 10px rgba(255, 153, 204, 1), 0 0 0 14px rgba(255, 204, 242, 1)", // Borde con gradiente de rosas
            }}
            transition={{ duration: 0.4 }} // Duración de la animación
            onClick={handleImageClick} // Manejador del clic para cambiar la imagen
          >
            {/* Imagen de perfil */}
            <Image
              src={imageSrc}
              alt="Kaydi Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto" // Imagen redondeada
            />
          </motion.div>
        </div>

        <div className="mt-4 text-pink-500">
          <TextAnimation
            text="24 años"
            variant="h5"
            className="text-2xl lg:text-xl font-bold font-primary"
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
