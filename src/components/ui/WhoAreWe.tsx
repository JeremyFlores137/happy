import Image from "next/image";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export const WhoAreWe: React.FC = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }} // Añadimos blur inicial
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Removemos el blur cuando el componente está en el viewport
      viewport={{ once: true }} // Para que la animación solo ocurra una vez
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="flex lg:flex-col items-center justify-between p-10 lg:p-5 rounded-xl max-w-7xl mx-auto shadow-none"
    >
      {/* Imagen con animación de difuminado */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }} // Blur inicial en la imagen
        whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }} // La imagen aparece clara en el viewport
        viewport={{ once: true }} // Animación solo una vez
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full h-64 lg:h-96 rounded-xl overflow-hidden shadow-lg"
      >
        <Image
          src="/img/landing_1.jpg"
          alt="Carretera"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="rounded-xl"
          loading="lazy" // Carga de la imagen cuando sea necesario
        />
      </motion.div>

      {/* Texto con animación de difuminado */}
      <motion.div
        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }} // Texto difuminado al inicio
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }} // Removemos el blur cuando aparece en el viewport
        viewport={{ once: true }} // Para que la animación solo ocurra una vez
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        className="w-full lg:mt-10 ml-10 lg:ml-0"
      >
        <Typography
          variant="h4"
          className="mb-4 text-primary-50 font-primary text-primary-100 font-bold"
        >
          ¿Quiénes somos?
        </Typography>

        <Typography
          variant="body1"
          className="text-gray-700 mb-6 leading-relaxed font-primary"
        >
          <strong className="text-primary-100">CesVision</strong> es un software
          perteneciente a{" "}
          <strong className="text-primary-100">CESEL Ingenieros</strong>, una
          empresa con más de 50 años de experiencia en Ingeniería, Supervisión y
          Gerenciamiento, reconocida por nuestra capacidad multidisciplinaria.
          Hemos liderado proyectos nacionales e internacionales en sectores
          clave como:
        </Typography>

        {/* Lista de sectores con espaciado optimizado */}
        <Box className="grid grid-cols-2 gap-4 text-primary-100 mb-8">
          <ul className="list-disc ml-5 space-y-2 font-primary">
            <li>Obras viales</li>
            <li>Aeropuertos</li>
            <li>Túneles y Puentes</li>
            <li>Minería</li>
            <li>Edificaciones</li>
          </ul>
          <ul className="list-disc ml-5 space-y-2">
            <li>Industria</li>
            <li>Hidráulica e Irrigaciones</li>
            <li>Saneamiento</li>
            <li>Hidrocarburos</li>
          </ul>
        </Box>

        {/* Botón "Conocer Más" con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(5px)" }} // Difuminado del botón al inicio
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} // Remover difuminado en el viewport
          viewport={{ once: true }} // Animación solo una vez
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        >
          <Link href="https://www.cesel.com.pe/" passHref legacyBehavior>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              className="bg-primary-100 text-white px-6 py-3 rounded-full hover:bg-primary-200 transition duration-300 font-primary"
              target="_blank" // Abrir en nueva pestaña
              rel="noopener noreferrer" // Seguridad adicional
              component="a" // El botón actúa como un enlace <a>
            >
              Conocer Más
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </Box>
  );
};
