"use client";
import { FC, useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
}

export const AnimatedNumber: FC<AnimatedNumberProps> = ({ value }) => {
  const ref = useRef<HTMLSpanElement>(null); // Cambié el tipo a HTMLSpanElement ya que es un span
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 6000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const roundedValue = latest.toFixed(0);
        if (parseInt(roundedValue) <= value) {
          ref.current.textContent = roundedValue;
        }
      }
    });
  }, [springValue, value]);

  return <span ref={ref} className="font-extrabold text-[60px]"></span>;
};
