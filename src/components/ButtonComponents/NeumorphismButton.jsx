import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const NeumorphismButton = ({ text = "Initialize AI" }) => {
  const [isInteracting, setIsInteracting] = useState(false);
  const touchFeedbackTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (touchFeedbackTimeoutRef.current) {
        clearTimeout(touchFeedbackTimeoutRef.current);
      }
    };
  }, []);

  const clearTouchFeedbackTimeout = () => {
    if (touchFeedbackTimeoutRef.current) {
      clearTimeout(touchFeedbackTimeoutRef.current);
      touchFeedbackTimeoutRef.current = null;
    }
  };

  const handlePointerEnter = (event) => {
    if (event.pointerType === "mouse") {
      setIsInteracting(true);
    }
  };

  const handlePointerLeave = (event) => {
    if (event.pointerType === "mouse") {
      setIsInteracting(false);
    }
  };

  const handlePointerDown = (event) => {
    setIsInteracting(true);

    // Touch devices do not have hover, so show a short interaction burst.
    if (event.pointerType !== "mouse") {
      clearTouchFeedbackTimeout();
      touchFeedbackTimeoutRef.current = setTimeout(() => {
        setIsInteracting(false);
        touchFeedbackTimeoutRef.current = null;
      }, 650);
    }
  };

  const handlePointerUp = (event) => {
    if (event.pointerType === "mouse") {
      setIsInteracting(false);
    }
  };

  const handlePointerCancel = () => {
    clearTouchFeedbackTimeout();
    setIsInteracting(false);
  };

  return (
    <motion.button
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onBlur={handlePointerCancel}
      whileTap={{ scale: 0.98 }}
      // For neumorphism to work, the button background must match its container.
      // We use a light cream gray similar to the layout surface.
      className={`
        relative px-5 py-3 md:px-8 md:py-4 rounded-full
        flex items-center justify-center gap-2 md:gap-3
        min-h-12 md:min-h-14 w-full max-w-fit whitespace-nowrap
        text-primary bg-surface-300
        font-medium uppercase tracking-[0.12em] text-xs md:text-sm font-['Space_Grotesk']
        ${
          isInteracting
            ? "text-error-warm shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.9),inset_3px_3px_7px_rgba(0,0,0,0.15),-2px_-2px_4px_rgba(255,255,255,0.5),2px_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_-3px_-3px_7px_rgba(255,255,255,0.03),inset_3px_3px_7px_rgba(0,0,0,0.5),-2px_-2px_4px_rgba(255,255,255,0.05),2px_2px_4px_rgba(0,0,0,0.2)]"
            : "shadow-[-6px_-6px_14px_rgba(255,255,255,0.9),6px_6px_14px_rgba(0,0,0,0.1)] dark:shadow-[-6px_-6px_14px_rgba(255,255,255,0.05),6px_6px_14px_rgba(0,0,0,0.4)]"
        }
        transition-all duration-300
        overflow-hidden group
      `}
    >
      {/* AI Pulse Ring Effect */}
      {isInteracting && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
          className="absolute z-0 w-12 h-12 rounded-full border border-error-warm/50"
        />
      )}

      {/* Futuristic sweeping particle (the "AI touch") */}
      <motion.div
        initial={{ x: "-100%", y: "-100%", opacity: 0 }}
        animate={{
          x: isInteracting ? ["-100%", "200%"] : "-100%",
          y: isInteracting ? ["-100%", "200%"] : "-100%",
          opacity: isInteracting ? [0, 1, 0] : 0,
        }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute z-0 w-10 h-10 rounded-full blur-md bg-error-warm/40 pointer-events-none mix-blend-overlay"
      />

      <div className="relative z-10 flex items-center justify-center gap-3">
        {/* Dynamic Material Icon */}
        <motion.span
          animate={{ rotate: isInteracting ? 180 : 0 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className={`material-symbols-outlined text-[20px] transition-colors duration-300 ${
            isInteracting ? "text-error-warm" : "text-primary"
          }`}
        >
          {isInteracting ? "auto_awesome" : "smart_toy"}
        </motion.span>
        <span>{text}</span>
      </div>
    </motion.button>
  );
};

export default NeumorphismButton;
