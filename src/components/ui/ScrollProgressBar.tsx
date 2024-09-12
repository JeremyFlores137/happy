"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

interface ScrollProgressBarProps {
  position?: string;
}

export const ScrollProgressBar: React.FC<ScrollProgressBarProps> = ({
  position,
}) => {
  const [scrollProgress, setScrollProgress] = useState(40); // Comienza con 30px de ancho

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 40 + 40; // Rango entre 30 y 60px

      // Limita el progreso al rango de 30px a 60px
      const limitedProgress = Math.min(80, Math.max(40, progress));
      setScrollProgress(limitedProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: `${position ?? "center"}`,
        marginBottom: "15px",
      }}
    >
      <motion.div
        className="h-1 bg-primary-50 "
        style={{
          width: `${scrollProgress}px`,
        }}
        animate={{ width: `${scrollProgress}px` }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      />
    </Box>
  );
};
