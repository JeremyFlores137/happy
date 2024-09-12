import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function LoadingComponent({ label }: { label?: string }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box textAlign="center">
        <CircularProgress color="secondary" />
        {label && (
          <Typography variant="subtitle1" color="textSecondary" mt={2}>
            {label}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
