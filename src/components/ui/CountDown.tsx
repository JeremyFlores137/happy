// src/components/ui/Countdown.tsx
import { useState, useEffect } from "react";
import { AnimatedNumber } from "./AnimatedNumber";

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const birthday = new Date("2025-09-12").getTime(); // Obtenemos el timestamp en milisegundos
    const now = new Date().getTime(); // Obtenemos el timestamp actual en milisegundos
    const diff = birthday - now;
    setTimeLeft(Math.max(0, diff));
  }, []);

  return (
    <div className="countdown">
      <h2 className="text-center text-pink-500">
        Cuenta Regresiva para el próximo cumpleaños
      </h2>
      <AnimatedNumber value={timeLeft} />
    </div>
  );
};
