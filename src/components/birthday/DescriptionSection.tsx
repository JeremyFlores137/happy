// src/app/components/ui/DescriptionSection.tsx
import { FaSmile, FaStar, FaMusic } from "react-icons/fa";
import { motion } from "framer-motion";
import { TextAnimation } from "../ui/TextAnimation";

export const DescriptionSection = () => {
  return (
    <section className="text-center mb-16">
      {/* Animación del texto principal */}
      <TextAnimation
        text="Si te describiera en una palabra sería..."
        variant="h2"
        component="h2"
        className="text-2xl mb-4 font-primary inline-block"
      />

      <motion.span
        role="img"
        aria-label="star"
        className="ml-2 inline-block text-4xl"
        whileHover={{ scale: 1.5 }} // El emoji crecerá al hacer hover
        transition={{ duration: 0.3 }} // Duración de la animación
      >
        🌟
      </motion.span>

      {/* Iconos con animación */}
      <div className="flex justify-center space-x-4 text-pink-500 mt-4">
        <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
          <FaSmile className="text-4xl" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
          <FaStar className="text-4xl" />
        </motion.div>
        <motion.div whileHover={{ scale: 1.5 }} transition={{ duration: 0.3 }}>
          <FaMusic className="text-4xl" />
        </motion.div>
      </div>

      {/* Texto final con animación */}
      <TextAnimation
        text="¡Eres la más brillante y talentosa!"
        variant="body1"
        component="p"
        className="mt-4 text-gray-600 font-primary inline-block"
      />

      <motion.span
        role="img"
        aria-label="music"
        className="ml-2 inline-block text-2xl"
        whileHover={{ scale: 1.5 }} // El emoji crecerá al hacer hover
        transition={{ duration: 0.3 }} // Duración de la animación
      >
        🎶
      </motion.span>
    </section>
  );
};
