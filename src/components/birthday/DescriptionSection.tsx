// src/app/components/ui/DescriptionSection.tsx
import { FaCat, FaMusic, FaCamera, FaUtensils, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import { TextAnimation } from "../ui/TextAnimation";

export const DescriptionSection = () => {
  return (
    <section className="text-center mb-4">
      {/* Texto inicial con animación */}
      <TextAnimation
        text="Si te describiera en palabras serían..."
        variant="h4"
        component="h2"
        className="text-2xl mb-6 font-primary text-pink-600 inline-block lg:text-lg"
      />

      <motion.span
        role="img"
        aria-label="star"
        className="ml-2 inline-block text-4xl"
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.3 }}
      >
        🌟
      </motion.span>

      {/* Iconos animados representando sus cualidades y gustos */}
      <div className="flex justify-center space-x-6 mt-6 lg:flex-col lg:space-y-10 text-pink-500">
        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: [0, 10, -10, 0], // Rotación oscilante
            boxShadow: "0px 0px 15px rgba(255, 192, 203, 0.8)", // Sombra rosa pastel para "Amante de los gatos"
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col items-center"
        >
          <FaCat className="text-4xl" />
          <TextAnimation
            text="Amante de los gatos"
            variant="body2"
            component="p"
            className="text-sm mt-2 font-primary"
          />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: [0, -15, 15, 0],
            boxShadow: "0px 0px 15px rgba(255, 223, 186, 0.8)", // Sombra naranja suave para "Fotogénica y creativa"
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col items-center"
        >
          <FaCamera className="text-4xl" />
          <TextAnimation
            text="Fotogénica y creativa"
            variant="body2"
            component="p"
            className="text-sm mt-2 font-primary"
          />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: [0, 10, -10, 0],
            boxShadow: "0px 0px 15px rgba(173, 216, 230, 0.8)", // Sombra azul para "Melómana del pop y cumbia"
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col items-center"
        >
          <FaMusic className="text-4xl" />
          <TextAnimation
            text="Melómana del pop, reguetón y cumbia"
            variant="body2"
            component="p"
            className="text-sm mt-2 font-primary"
          />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: [0, -15, 15, 0],
            boxShadow: "0px 0px 15px rgba(255, 105, 180, 0.8)", // Sombra rosa fuerte para "Amante de la buena comida"
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col items-center"
        >
          <FaUtensils className="text-4xl" />
          <TextAnimation
            text="Amante de la buena comida"
            variant="body2"
            component="p"
            className="text-sm mt-2 font-primary"
          />
        </motion.div>

        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: [0, 10, -10, 0],
            boxShadow: "0px 0px 15px rgba(144, 238, 144, 0.8)", // Sombra verde claro para "Exploradora de nuevos lugares"
            transition: {
              duration: 0.6,
              ease: "easeInOut",
            },
          }}
          className="flex flex-col items-center"
        >
          <FaGlobe className="text-4xl" />
          <TextAnimation
            text="Exploradora de nuevos lugares"
            variant="body2"
            component="p"
            className="text-sm mt-2 font-primary"
          />
        </motion.div>
      </div>
      <div className="mb-8"></div>
      {/* Texto final con animación */}
      <TextAnimation
        text="¡Eres la más brillante, talentosa y especial!"
        variant="body1"
        component="p"
        className="mt-8 text-gray-600 inline-block font-primary"
      />

      <motion.span
        role="img"
        aria-label="sparkle"
        className="ml-2 inline-block text-3xl"
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.3 }}
      >
        ✨
      </motion.span>
      <div className="mb-8"></div>
    </section>
  );
};
