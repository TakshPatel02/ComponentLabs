import { useState, useEffect } from "react";
import { motion } from "motion/react";

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|:;<>,.?/~";

export default function EncryptedText({
  text,
  interval = 50,
  duration = 3000,
  className = "",
  animateOnHover = false,
  isHovered = false,
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (animateOnHover && !isHovered) {
      setDisplayText(text);
      return;
    }

    let currentIteration = 0;
    const stepsPerLetter = duration / interval / text.length;

    const scrambleInterval = setInterval(() => {
      setDisplayText((prev) => {
        return text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";

            // If the current iteration has passed this character's reveal threshold, show the actual character
            if (currentIteration >= index * stepsPerLetter) {
              return text[index];
            }

            // Otherwise, show a random character
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("");
      });

      if (currentIteration >= text.length * stepsPerLetter) {
        clearInterval(scrambleInterval);
        setIsAnimating(false);
      }

      currentIteration += 1;
    }, interval);

    return () => clearInterval(scrambleInterval);
  }, [text, interval, duration, animateOnHover, isHovered]);

  return (
    <motion.span
      className={`font-mono-code inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
    </motion.span>
  );
}
