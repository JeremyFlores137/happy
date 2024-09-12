// src/app/components/ui/PhotosGrid.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import { TextAnimation } from "../ui/TextAnimation";

export const PhotosGrid = () => {
  const photos = [
    {
      src: "/img/kaydi2.jpg",
      alt: "Kaydi disfrutando del aire libre con su sombrero",
      description:
        "Tu amor por la naturaleza siempre refleja tu espíritu libre.",
    },
    {
      src: "/img/kaydi3.jpg",
      alt: "Kaydi con su encantadora sonrisa",
      description: "Tu sonrisa ilumina cualquier lugar al que vayas.",
    },
    {
      src: "/img/kaydi4.jpg",
      alt: "Kaydi contemplando el horizonte",
      description:
        "Tu conexión con el mundo siempre trae momentos de reflexión.",
    },
    {
      src: "/img/kaydi5.jpg",
      alt: "Kaydi apreciando el arte",
      description: "El arte siempre ha sido una parte especial de tu vida.",
    },
  ];

  return (
    <section className="mb-16">
      {/* Animación del título con el emoji 📸 */}
      <div className="flex justify-center text-center mb-4">
        <TextAnimation
          text="Algunos de tus momentos favoritos"
          variant="h4"
          component="h2"
          className="text-2xl font-primary inline-block"
        />
        <motion.span
          role="img"
          aria-label="camera"
          className="ml-2 inline-block text-4xl"
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
            className="group relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-72 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill // Actualización de `layout="fill"` a `fill`
                style={{ objectFit: "contain" }} // `objectFit` actualizado
                className="rounded-lg"
              />
            </div>

            {/* Borde animado */}
            <motion.div
              className="absolute inset-0 rounded-lg border-4 border-transparent group-hover:border-pink-500 transition duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            ></motion.div>

            {/* Descripción que aparece al hacer hover */}
            <motion.p
              className="absolute inset-x-0 bottom-0 p-4 text-center text-white bg-black bg-opacity-50 rounded-b-lg opacity-0 group-hover:opacity-100 transition duration-300 font-primary"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {photo.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
