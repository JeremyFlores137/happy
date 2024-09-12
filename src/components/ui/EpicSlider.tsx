import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { ScrollProgressBar } from "./ScrollProgressBar";

interface SlideContent {
  title: string;
  image: string;
  description: string;
}

interface SliderProps {
  slides: SlideContent[];
}

export const EpicSlider: React.FC<SliderProps> = ({ slides }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-primary-100 text-white py-16 p-10 lg:p-5  shadow-lg"
    >
      <div className="flex lg:flex-col justify-center items-center max-w-7xl mx-auto">
        <Box className="max-w-md mr-12 lg:mb-16 lg:mr-0">
          <ScrollProgressBar position="flex-start" />
          <Typography
            variant="h4"
            className="mb-4 text-primary-50 font-secondary text-secondary-100"
          >
            TIPOS DE SERVICIOS
          </Typography>
          <Typography className="mb-10 font-primary">
            La aplicación cubre una variedad de servicios, desde la
            reconstrucción de imágenes, detección y segmentación de fisuras en
            pavimento rígido y flexible, como la automatización de reportes en
            formato pdf.
          </Typography>
          {/* Puntos de paginación justo debajo del texto */}
          <Box className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <motion.span
                key={index}
                className="w-3 h-3 rounded-full"
                animate={{
                  backgroundColor:
                    activeIndex === index ? "#51AF5F" : "#6B7280",
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </Box>
        </Box>
        <Box className="relative w-full h-full overflow-hidden">
          <Swiper
            modules={[Autoplay]} // Registramos solo el módulo Autoplay
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Manejamos el índice activo manualmente
            autoplay={{ delay: 5000, disableOnInteraction: false }} // Cambia cada 3 segundos
            speed={350}
            loop={slides.length > 1}
            className="w-full h-[500px]" // Ajuste responsivo para que se adapte al contenedor
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Box className="relative w-full h-[500px]">
                  <Image
                    src={slide.image}
                    alt={`slide-${index}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                    className="rounded-lg shadow-lg"
                  />
                  <Box className="absolute bottom-0 text-center text-white w-full bg-black bg-opacity-80 p-4 rounded-b-[10px]">
                    <Typography
                      variant="h6"
                      className="font-bold mb-2 font-primary"
                    >
                      {slide.title}
                    </Typography>
                    <Typography variant="body2" className="font-secondary">
                      {slide.description}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Botones de navegación personalizados */}
          <IconButton
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-white"
          >
            <ArrowBackIos fontSize="large" className="text-secondary-100" />
          </IconButton>
          <IconButton
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-white"
          >
            <ArrowForwardIos fontSize="large" className="text-secondary-100" />
          </IconButton>
        </Box>
      </div>
    </motion.div>
  );
};
