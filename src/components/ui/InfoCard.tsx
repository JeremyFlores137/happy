import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";
import { AnimatedNumber } from "./AnimatedNumber"; // Asegúrate de importar AnimatedNumber correctamente

interface InfoCardProps {
  icono: ReactNode; // Esto permite que el ícono sea cualquier componente de React
  texto: string;
  numero: number;
}

export const InfoCard: FC<InfoCardProps> = ({ icono, texto, numero }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="p-6 bg-primary-100 text-white rounded-lg shadow-xl flex justify-center items-center lg:justify-between"
    >
      {/* Columna de icono */}
      <Box className="mr-3 lg:mr-0">
        {icono} {/* Ícono ajustado */}
      </Box>

      {/* Columna de texto */}
      <Box className="flex flex-col justify-between items-center lg:items-end h-full lg:h-auto text-left">
        <Typography
          variant="h5"
          component="p"
          className="font-bold font-secondary"
        >
          <AnimatedNumber value={numero} />
        </Typography>
        <Typography
          variant="body1"
          className="font-thin text-slate-100 text-center font-primary h-1/2 lg:h-auto flex items-start"
        >
          {texto}
        </Typography>
      </Box>
    </motion.div>
  );
};
