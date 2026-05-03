import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors duration-300 ease-in-out group outline-none"
      style={{ backgroundColor: "var(--toggle-bg)" }}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-primary"
            >
              <Sun size={16} strokeWidth={1.5} />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-primary"
            >
              <Moon size={16} strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <span className="font-mono text-[10px] font-medium tracking-wider text-primary/70 uppercase select-none">
        {theme === "light" ? "Light" : "Dark"}
      </span>
      
      {/* Subtle hover effect */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-primary/5 pointer-events-none" />
    </button>
  );
};

export default ThemeToggle;
