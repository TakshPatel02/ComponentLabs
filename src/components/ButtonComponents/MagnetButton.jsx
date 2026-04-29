import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipText = ({ children, isHovered }) => {
  return (
    <div className="relative block overflow-hidden whitespace-nowrap font-bold tracking-wide">
      <div className="flex">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            initial="initial"
            animate={isHovered ? "hovered" : "initial"}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            initial="initial"
            animate={isHovered ? "hovered" : "initial"}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

const MagnetButton = ({ text = "Hover Me", onClick }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouse = (e) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } =
      containerRef.current.getBoundingClientRect();

    // Calculate the distance from mouse to the center of the element
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    // Adjust the multiplier to control the magnet strength
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    // Outer container provides a larger hit area for the magnetic effect to start early
    <div
      ref={containerRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onMouseEnter={handleMouseEnter}
      className="relative p-6 cursor-pointer group items-center justify-center flex"
    >
      <div className="relative inline-block w-full h-full">
        {/* Solid Shadow Base - This stays anchored and doesn't move with the magnet */}
        <div className="absolute inset-0 bg-primary group-hover:bg-error-warm transition-colors duration-500 rounded-lg translate-y-1.5 translate-x-1.5" />

        {/* Top Magnetic Button Layer */}
        <motion.button
          animate={{ x: position.x, y: position.y }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            mass: 0.1,
          }}
          onClick={onClick}
          className="relative px-8 py-4 bg-surface text-primary border-2 border-primary rounded-lg text-lg uppercase font-['Space_Grotesk'] focus:outline-none transition-colors duration-300 w-full"
        >
          <FlipText isHovered={isHovered}>{text}</FlipText>
        </motion.button>
      </div>
    </div>
  );
};

export default MagnetButton;
