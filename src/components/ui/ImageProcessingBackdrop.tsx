// components/ImageProcessingBackdrop.tsx
import React from "react";
import { Backdrop, Box, LinearProgress, Typography } from "@mui/material";

interface ImageProcessingBackdropProps {
  isLoading: boolean;
  progress: number;
}

export const ImageProcessingBackdrop: React.FC<
  ImageProcessingBackdropProps
> = ({ isLoading, progress }) => {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      open={isLoading}
    >
      <Box sx={{ width: "50%", textAlign: "center" }}>
        <Typography variant="h6" sx={{ mb: 2, color: "#66CCFF" }}>
          Procesando imagen...
        </Typography>
        <Box sx={{ width: "100%", position: "relative" }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 20, // Hacer la barra más gruesa
              borderRadius: 5,
              backgroundColor: "#003366",
              "& .MuiLinearProgress-bar": {
                borderRadius: 5,
                backgroundColor: "#66CCFF",
              },
            }}
          />
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              position: "absolute",
              top: "50%", // Asegurar que el texto esté centrado verticalmente
              left: "50%",
              transform: "translate(-50%, -50%)", // Centrar completamente el texto
              width: "100%",
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold", // Hacer el texto más visible
            }}
          >
            {`${Math.round(progress)}%`}
          </Typography>
        </Box>
      </Box>
    </Backdrop>
  );
};
