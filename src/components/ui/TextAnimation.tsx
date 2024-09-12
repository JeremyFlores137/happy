import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const quote = (totalDuration: number, textLength: number) => ({
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: totalDuration / textLength, // Ajuste del stagger para una duración total fija
    },
  },
});

const singleLetter = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5, // Duración de la animación de cada letra
      ease: "easeOut",
    },
  },
};

interface TextAnimationProps {
  text: string;
  className?: string; // `className` es opcional
  variant?:
    | "body1"
    | "body2"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "caption"
    | "overline"; // Restricción de variantes de Typography
  component?: React.ElementType; // Tipo de elemento HTML o componente a renderizar
  totalDuration?: number; // Duración total de la animación
}

export const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  className = "",
  variant = "body1",
  component = "div",
  totalDuration = 1, // Duración total predeterminada de 0.8 segundos
}) => {
  const textLength = text.replace(/ /g, "").length; // Contar solo las letras, excluyendo los espacios

  return (
    <Typography
      variant={variant}
      className={`${className} tracking-wide`} // Añade más separación entre letras
      component={component}
    >
      <motion.span
        className="inline-block w-full"
        viewport={{ once: true }}
        variants={quote(totalDuration, textLength)}
        initial="initial"
        whileInView="animate" // Controlamos la animación al estar en el viewport
      >
        {text.split(" ").map((word, wordIndex) => (
          <span key={`${word}-${wordIndex}`} className="inline-block">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={`${letter}-${letterIndex}`}
                className="inline-block"
                variants={singleLetter}
              >
                {letter}
              </motion.span>
            ))}
            &nbsp; {/* Añade un espacio entre las palabras */}
          </span>
        ))}
      </motion.span>
    </Typography>
  );
};
