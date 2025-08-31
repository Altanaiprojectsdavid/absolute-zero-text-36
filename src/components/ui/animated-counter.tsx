import { motion, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

export const AnimatedCounter = ({ value, className = "" }: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayNumber, setDisplayNumber] = useState(0);
  
  // Extract number and suffix from value (e.g., "19+" -> 19 and "+")
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const targetNumber = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";
  
  // Special handling for 5M+ - we'll animate to 5 and add M+ suffix
  const animationTarget = suffix === "M+" ? 5 : targetNumber;
  
  const spring = useSpring(0, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (suffix === "M+") {
        setDisplayNumber(parseFloat(latest.toFixed(1)));
      } else {
        setDisplayNumber(Math.floor(latest));
      }
    });

    return unsubscribe;
  }, [spring, suffix]);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        spring.set(animationTarget);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, animationTarget, spring]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      <span>{displayNumber}{suffix}</span>
    </motion.div>
  );
};