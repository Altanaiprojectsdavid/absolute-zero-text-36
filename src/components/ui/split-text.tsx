import { motion, Variants } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitBy?: "characters" | "words";
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
}

export const SplitText = ({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  splitBy = "characters",
  staggerDelay = 0.03,
  as = "div"
}: SplitTextProps) => {
  const text = children;
  const splits = splitBy === "characters" 
    ? text.split("") 
    : text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
      style={{ perspective: "1000px" }}
    >
      {splits.map((split, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{
            display: "inline-block",
            transformOrigin: "50% 100%",
          }}
        >
          {split === " " ? "\u00A0" : split}
          {splitBy === "words" && index < splits.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </MotionComponent>
  );
};