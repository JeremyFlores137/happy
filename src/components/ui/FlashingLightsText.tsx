// Importaciones necesarias
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Definir los tipos de props
interface FlashingLightsTextProps {
  text: string; // Prop para el texto
}

export const FlashingLightsText: React.FC<FlashingLightsTextProps> = ({
  text,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        flexGrow: 1,
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {/* Animación con framer-motion */}
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {/* Texto animado */}
        <Typography
          variant="h4"
          className="text-center font-extrabold relative lg:hidden"
          sx={{
            color: "#ffffff",
            textShadow:
              "2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 10px rgba(255, 255, 255, 0.7)",
            WebkitTextStroke: "1px #66CCFF", // Borde alrededor de las letras
          }}
        >
          {text}
        </Typography>
      </motion.div>
    </Box>
  );
};
