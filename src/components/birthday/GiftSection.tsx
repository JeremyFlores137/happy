import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import giftImage from "/public/img/gift.gif";
import Confetti from "react-confetti";
import { TextAnimation } from "../ui/TextAnimation";
import { useWindowSize } from "react-use"; // Para obtener el tamaño de la ventana

export const GiftSection = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isClickable, setIsClickable] = useState(true); // Controlar si se puede hacer clic
  const [confettiPieces, setConfettiPieces] = useState(200); // Comenzar con 200 piezas
  const { width, height } = useWindowSize(); // Obtener el tamaño de la ventana

  const handleClick = () => {
    if (!isClickable) return; // Evitar acción si no es clicable
    setIsClickable(false); // Desactivar el clic mientras se reproduce

    setShowConfetti(true);
    setConfettiPieces(1000); // Aumentar la cantidad de piezas iniciales

    // Reproducir el audio cuando se hace clic
    const audio = new Audio("/audio/feli_cumple.mp3");
    audio.play();

    // Control para cuando el audio termina
    audio.onended = () => {
      if (!showConfetti) {
        setIsClickable(true);
      }
    };

    // Desactivar confeti después de 57 segundos (independientemente del audio)
    setTimeout(() => {
      setShowConfetti(false);
      setIsClickable(true); // Reactivar el clic después de 57 segundos
    }, 57000);
  };

  useEffect(() => {
    // Inyectar más piezas de confeti de manera gradual
    let interval: NodeJS.Timeout;
    if (showConfetti) {
      interval = setInterval(() => {
        setConfettiPieces((prev) => (prev < 5000 ? prev + 50 : prev)); // Agregar 50 piezas cada 500 ms, hasta un máximo de 5000
      }, 500);
    }
    return () => clearInterval(interval); // Limpiar el intervalo cuando se desmonta
  }, [showConfetti]);

  return (
    <section className="text-center my-4 relative">
      {/* Confetti cubriendo la pantalla sin afectar el contenido */}
      {showConfetti && (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
          <Confetti
            width={width}
            height={height}
            numberOfPieces={confettiPieces} // Usamos el estado para controlar las piezas
            recycle={false}
          />
        </div>
      )}

      {/* Título con animación y emoji animado */}
      <div className="flex lg:flex-col items-center justify-center my-4">
        <TextAnimation
          text="Mira lo feliz que estoy por ti"
          variant="h4"
          component="h2"
          className="text-2xl mb-4 font-primary inline-block lg:text-xl"
        />
        <motion.span
          role="img"
          aria-label="gift"
          className="ml-2 lg:ml-0 inline-block text-4xl"
          whileHover={{ scale: 1.5 }}
          transition={{ duration: 0.3 }}
        >
          🎁
        </motion.span>
      </div>

      {/* Descripción con animación */}
      <TextAnimation
        text="(Dale clic al gif de abajo)"
        variant="body1"
        className="mb-2 text-gray-600 font-primary inline-block"
      />

      {/* Imagen del regalo con animación */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 10 }} // Escala y rotación en hover
        className="cursor-pointer flex justify-center"
        onClick={handleClick} // Manejador del clic para activar el confeti y reproducir el audio
      >
        <Image
          src={giftImage}
          alt="Gift"
          width={300} // Aumentar el ancho del GIF
          height={300} // Aumentar la altura del GIF
          className="rounded-xl" // Borde redondeado
        />
      </motion.div>
    </section>
  );
};
