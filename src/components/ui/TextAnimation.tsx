import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const quote = (totalDuration: number, textLength: number) => ({
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: totalDuration / textLength,
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
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface TextAnimationProps {
  text: string;
  className?: string;
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
    | "overline";
  component?: React.ElementType;
  totalDuration?: number;
}

export const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  className = "",
  variant = "body1",
  component = "div",
  totalDuration = 1,
}) => {
  const textLength = text.replace(/ /g, "").length;
  const [hydrated, setHydrated] = useState(false);

  // Usar useEffect para habilitar la animación en el lado del cliente
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <Typography variant={variant}>{text}</Typography>;
  }

  return (
    <Typography
      variant={variant}
      className={`${className} tracking-wide`}
      component={component}
    >
      <motion.span
        className="inline-block w-full"
        viewport={{ once: true }}
        variants={quote(totalDuration, textLength)}
        initial="initial"
        whileInView="animate"
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
            &nbsp;
          </span>
        ))}
      </motion.span>
    </Typography>
  );
};
