// src/app/components/ui/PhotosGrid.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimation } from "../ui/TextAnimation";

export const PhotosGrid = () => {
  const photos = [
    {
      src: "/img/kaydi2.jpg",
      alt: "Kaydi apreciando el arte",
      description: "El arte siempre ha sido una parte especial de tu vida.",
    },
    {
      src: "/img/kaydi3.jpg",
      alt: "Kaydi con su encantadora sonrisa",
      description: "Tu sonrisa ilumina cualquier lugar al que vayas.",
    },
    {
      src: "/img/kaydi4.jpg",
      alt: "Kaydi conectando con la naturaleza y su caballo",
      description:
        "Tu amor por los animales refleja tu espíritu bondadoso y puro.",
    },
    {
      src: "/img/kaydi5.jpg",
      alt: "Kaydi con su encantadora sonrisa",
      description: "Tu sonrisa tímida siempre ilumina los corazones cercanos.",
    },
  ];

  return (
    <section className="my-16">
      {/* Animación del título con el emoji 📸 */}
      <div className="flex justify-center lg:flex-col items-center text-center my-4">
        <TextAnimation
          text="Algunos de tus momentos favoritos"
          variant="h4"
          component="h2"
          className="text-2xl font-primary inline-block lg:text-xl"
        />
        <motion.span
          role="img"
          aria-label="camera"
          className="ml-2 lg:ml-0 inline-block text-4xl"
          whileHover={{ scale: 1.5 }} // Escala el emoji al hacer hover
          transition={{ duration: 0.3 }} // Duración de la animación
        >
          📸
        </motion.span>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-1 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
            whileHover={{ scale: 1.05 }} // Escalado en hover
            transition={{ duration: 0.3 }}
          >
            {/* Imagen */}
            <div className="relative w-full h-72">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-lg"
              />
            </div>

            {/* Borde animado */}
            <motion.div className="absolute inset-0 border-4 border-transparent group-hover:border-pink-500 rounded-lg transition-all duration-300" />

            {/* Descripción solo en la parte inferior */}
            <motion.div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg">
              <p className="text-white text-center font-primary">
                {photo.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
