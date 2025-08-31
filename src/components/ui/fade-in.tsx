import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  as?: "div" | "section" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const FadeIn = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 20,
  as = "div"
}: FadeInProps) => {
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
      default:
        return {};
    }
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...getInitialTransform(),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};