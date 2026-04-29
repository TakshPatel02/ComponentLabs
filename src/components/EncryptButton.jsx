import React, { useRef, useState } from "react";
import { motion } from "motion/react";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({ targetText = "Encrypt data", className = "" }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(targetText);
  const [isHovered, setIsHovered] = useState(false);
  const [isDecrypting, setIsDecrypting] = useState(false);

  const scramble = () => {
    setIsHovered(true);
    setIsDecrypting(true);
    let pos = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const scrambled = targetText
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return char === " " ? " " : randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current);
    setText(targetText);
    setIsDecrypting(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Notice we do NOT call stopScramble() here.
    // This allows the text to naturally finish its decryption cycle instead of snapping instantly.
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-lg border-2 border-primary bg-surface px-6 py-3 font-mono font-bold uppercase text-primary transition-all duration-300 hover:text-surface hover:border-error-warm hover:shadow-[0_0_20px_rgba(255,87,51,0.3)] min-w-50 ${className}`}
    >
      <div className="relative z-10 flex items-center justify-center gap-3">
        <span
          className={`material-symbols-outlined text-[20px] transition-all duration-300 ${
            isHovered ? "text-error-warm" : "text-primary"
          }`}
        >
          {isDecrypting ? "lock" : isHovered ? "lock_open" : "lock"}
        </span>
        <span className={isHovered ? "text-error-warm" : "text-primary"}>
          {text}
        </span>
      </div>

      {/* Aesthetic Touch: Scanning Laser + Glow */}
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 1.5,
          ease: "linear",
        }}
        className="absolute inset-0 z-0 scale-125 bg-linear-to-t from-transparent via-error-warm/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-color-burn"
      />

      {/* Background fill sliding up */}
      <div className="absolute inset-0 z-[-1] bg-primary scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100" />
    </motion.button>
  );
};

export default EncryptButton;
