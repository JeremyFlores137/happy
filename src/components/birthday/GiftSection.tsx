// src/app/components/ui/GiftSection.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import giftImage from "/public/img/gift.gif";
import Confetti from "react-confetti";
import { TextAnimation } from "../ui/TextAnimation";
import { useWindowSize } from "react-use"; // Para obtener el tamaño de la ventana

export const GiftSection = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize(); // Obtener el tamaño de la ventana para el confeti

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Confeti se muestra por 5 segundos
  };

  return (
    <section className="text-center mb-8 relative">
      {/* Confetti cubriendo la pantalla sin afectar el contenido */}
      {showConfetti && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={500}
          />
        </div>
      )}

      {/* Título con animación y emoji animado */}
      <div className="flex justify-center">
        <TextAnimation
          text="Mira lo feliz que estoy por ti"
          variant="h4"
          component="h2"
          className="text-2xl mb-4 font-primary inline-block"
        />
        <motion.span
          role="img"
          aria-label="gift"
          className="ml-2 inline-block text-4xl"
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.3 }}
        >
          🎁
        </motion.span>
      </div>

      {/* Descripción con animación */}
      <TextAnimation
        text="(Dale clic al regalo)"
        variant="body1"
        className="mb-2 text-gray-600 font-primary inline-block"
      />

      {/* Imagen del regalo con animación */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }} // Escala y rotación en hover
        className="cursor-pointer flex justify-center"
        onClick={handleClick} // Manejador del clic para activar el confeti
      >
        <Image src={giftImage} alt="Gift" width={200} height={200} />
      </motion.div>
    </section>
  );
};
