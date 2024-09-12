"use client";
import { FC } from "react";
import { motion } from "framer-motion";

interface TransitionProps {}

export const Transition: FC<TransitionProps> = () => {
  return (
    <>
      {/* Franja 1 - Color pastel suave */}
      <motion.div
        className="fixed bottom-0 right-full top-0 z-40 h-screen w-screen bg-primary-100"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Franja 2 - Color pastel intermedio */}
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-primary-80"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
      />

      {/* Franja 3 - Color pastel claro */}
      <motion.div
        className="fixed bottom-0 right-full top-0 z-20 h-screen w-screen bg-primary-60"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
      />

      {/* Franja 4 - Color pastel más claro */}
      <motion.div
        className="fixed bottom-0 right-full top-0 z-10 h-screen w-screen bg-primary-40"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
      />
    </>
  );
};
