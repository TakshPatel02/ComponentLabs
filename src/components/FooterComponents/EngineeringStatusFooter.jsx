import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const EngineeringStatusFooter = () => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isWordmarkHovered, setIsWordmarkHovered] = useState(false);
  const [localThemeOverride, setLocalThemeOverride] = useState(null);

  // Safe context check to prevent runtime crashes if rendered outside ThemeProvider
  let globalTheme = "light";
  try {
    const context = useTheme();
    if (context) {
      globalTheme = context.theme;
    }
  } catch (e) {
    // Fallback silently if ThemeProvider is not in parent tree
  }

  const activeTheme = localThemeOverride || globalTheme || "dark";

  const navLinks = [
    { label: "Gallery", href: "#", isPill: false },
    { label: "Documentation", href: "#", isPill: false },
    { label: "API Reference", href: "#", isPill: false },
    { label: "Book a Demo", href: "#", isPill: true },
    { label: "Changelog", href: "#", isPill: false },
    { label: "Security", href: "#", isPill: false },
    { label: "Community", href: "#", isPill: false },
  ];

  const handleWordmarkMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const wordmarkLetters = "COMPONENTLAB".split("");

  // Premium container spring staggered animation
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const toggleLocalTheme = () => {
    setLocalThemeOverride((prev) => (prev === "dark" || (prev === null && globalTheme === "dark") ? "light" : "dark"));
  };

  return (
    <div className={activeTheme === "dark" ? "dark" : ""}>
      <footer className={`w-full font-sans overflow-hidden border-t transition-colors duration-500 relative flex flex-col justify-between ${
        activeTheme === "dark"
          ? "bg-[#191915] border-white/[0.08] text-[#faf9f5]"
          : "bg-[#faf9f5] border-neutral-200 text-neutral-900"
      }`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="w-full p-6 sm:p-10 md:p-14 flex flex-col justify-between"
        >
          {/* Ambient Top Light Reflection Edge Line */}
          <div className={`absolute top-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent to-transparent ${
            activeTheme === "dark" ? "via-white/10" : "via-neutral-300/40"
          }`} />

          {/* ── 1. Top Status Grid Row (4 Columns in Desktop) ── */}
          <motion.div
            variants={itemVariants}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-6 border-b text-[11px] sm:text-xs max-w-6xl mx-auto w-full items-center ${
              activeTheme === "dark" ? "border-white/[0.08]" : "border-neutral-200"
            }`}
          >
            {/* System Registry */}
            <div className="flex items-center gap-3 justify-start">
              <div className={`rounded-xs w-6.5 h-6.5 flex items-center justify-center font-mono font-medium text-xs shadow-xs select-none border ${
                activeTheme === "dark"
                  ? "border-[#3d3d37] text-neutral-300 bg-[#22221c]/40"
                  : "border-neutral-300 text-neutral-800 bg-neutral-100/50"
              }`}>
                2
              </div>
              <div>
                <div className={`font-mono text-[9px] uppercase tracking-[0.2em] font-semibold leading-none ${
                  activeTheme === "dark" ? "text-[#8e8d82]" : "text-neutral-400"
                }`}>
                  System Registry
                </div>
                <div className={`font-mono font-bold mt-1 text-[11px] sm:text-xs ${
                  activeTheme === "dark" ? "text-[#faf9f5]" : "text-neutral-900"
                }`}>
                  v2.0.4 - <span className="opacity-90">STABLE_BUILD</span>
                </div>
              </div>
            </div>

            {/* Dynamic Theme Registry Switch Control */}
            <div className="flex items-center gap-3 justify-start">
              <motion.button
                onClick={toggleLocalTheme}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`rounded-xs w-6.5 h-6.5 flex items-center justify-center font-mono font-medium text-xs shadow-xs select-none cursor-pointer overflow-hidden transition-colors border ${
                  activeTheme === "dark"
                    ? "border-[#3d3d37] hover:border-neutral-500 text-neutral-300 bg-[#22221c]/40"
                    : "border-neutral-300 hover:border-neutral-400 text-neutral-800 bg-neutral-100/50"
                }`}
                title={`Switch theme`}
              >
                <AnimatePresence mode="wait">
                  {activeTheme === "dark" ? (
                    <motion.div
                      key="moon"
                      initial={{ y: 6, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -6, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-blue-400"
                    >
                      <Moon className="w-3 h-3" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ y: 6, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -6, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="text-amber-500"
                    >
                      <Sun className="w-3 h-3" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
              <div>
                <div className={`font-mono text-[9px] uppercase tracking-[0.2em] font-semibold leading-none ${
                  activeTheme === "dark" ? "text-[#8e8d82]" : "text-neutral-400"
                }`}>
                  Theme Registry
                </div>
                <div className={`font-mono font-bold mt-1 text-[11px] sm:text-xs flex items-center gap-1.5 cursor-pointer ${
                  activeTheme === "dark" ? "text-[#faf9f5]" : "text-neutral-900"
                }`} onClick={toggleLocalTheme}>
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      activeTheme === "dark" ? "bg-blue-400" : "bg-amber-400"
                    }`}></span>
                    <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                      activeTheme === "dark" ? "bg-blue-500" : "bg-amber-500"
                    }`}></span>
                  </span>
                  <span className={`transition-colors ${
                    activeTheme === "dark" ? "hover:text-white" : "hover:text-neutral-600"
                  }`}>{activeTheme === "dark" ? "DARK_MODE" : "LIGHT_MODE"}</span>
                </div>
              </div>
            </div>

            {/* Global Presence */}
            <div className="text-left lg:text-center">
              <div className={`font-mono text-[9px] uppercase tracking-[0.2em] font-semibold leading-none ${
                activeTheme === "dark" ? "text-[#8e8d82]" : "text-neutral-400"
              }`}>
                Global Presence
              </div>
              <div className={`font-mono font-bold mt-1 text-[11px] sm:text-xs tracking-wider ${
                activeTheme === "dark" ? "text-[#faf9f5]" : "text-neutral-900"
              }`}>
                SF + LON + TYO
              </div>
            </div>

            {/* Operational Status */}
            <div className="flex items-center justify-start lg:justify-end gap-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              </span>
              <div className="text-left">
                <div className={`font-mono text-[9px] uppercase tracking-[0.2em] font-semibold leading-none ${
                  activeTheme === "dark" ? "text-[#8e8d82]" : "text-neutral-400"
                }`}>
                  Operational Status
                </div>
                <div className={`font-mono font-bold mt-1 text-[11px] sm:text-xs underline decoration-emerald-500/20 underline-offset-3 cursor-default transition-colors ${
                  activeTheme === "dark" ? "text-[#9ebc9e] hover:text-emerald-300" : "text-emerald-600 hover:text-emerald-500"
                }`}>
                  ALL SYSTEMS NOMINAL
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── 2. Navigation Row ── */}
          <motion.div
            variants={itemVariants}
            className="py-10 max-w-6xl mx-auto w-full flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-5 gap-y-3.5 text-xs sm:text-[13px] font-medium"
          >
            {navLinks.map((link, idx) => {
              const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;
              
              return (
                <React.Fragment key={idx}>
                  {idx > 0 && (
                    <span className={`select-none text-[10px] sm:text-xs pointer-events-none ${
                      activeTheme === "dark" ? "text-[#3d3d37]" : "text-neutral-300"
                    }`}>·</span>
                  )}
                  
                  {link.isPill ? (
                    <motion.a
                      href={link.href}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      whileHover="hover"
                      whileTap={{ scale: 0.97 }}
                      className={`px-4.5 py-1.5 rounded-full font-semibold transition-colors shadow-xs text-xs sm:text-[13px] tracking-wide flex items-center gap-1.5 cursor-pointer ${
                        activeTheme === "dark"
                          ? "bg-[#faf9f5] text-[#191915] hover:bg-[#f3f2eb]"
                          : "bg-neutral-900 text-white hover:bg-neutral-800"
                      }`}
                    >
                      <span>{link.label}</span>
                      <motion.span
                        variants={{
                          hover: { x: 3, transition: { type: "spring", stiffness: 350, damping: 10 } }
                        }}
                        className="inline-block"
                      >
                        →
                      </motion.span>
                    </motion.a>
                  ) : (
                    <motion.a
                      href={link.href}
                      onMouseEnter={() => setHoveredIdx(idx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      animate={{ opacity: isDimmed ? 0.45 : 1 }}
                      transition={{ duration: 0.25 }}
                      className={`transition-colors py-1 cursor-pointer font-semibold tracking-wide relative group flex items-center ${
                        activeTheme === "dark" ? "text-[#d6d4c7] hover:text-white" : "text-neutral-600 hover:text-neutral-950"
                      }`}
                    >
                      {link.label}
                      {/* Sliding underline */}
                      <span className={`absolute bottom-0.5 left-0 w-0 h-[1.5px] transition-all duration-300 ease-out group-hover:w-full ${
                        activeTheme === "dark" ? "bg-[#faf9f5]" : "bg-neutral-950"
                      }`} />
                    </motion.a>
                  )}
                </React.Fragment>
              );
            })}
          </motion.div>

          {/* ── 3. Giant Wordmark with Interactive Backlight Spotlight & Tactile Letters ── */}
          <motion.div
            variants={itemVariants}
            onMouseMove={handleWordmarkMouseMove}
            onMouseEnter={() => setIsWordmarkHovered(true)}
            onMouseLeave={() => setIsWordmarkHovered(false)}
            className="py-4 md:py-8 select-none relative flex justify-center items-center overflow-visible w-full max-w-6xl mx-auto cursor-default"
          >
            {/* Dynamic Spotlight Glow Backdrop */}
            <div className="absolute inset-0 pointer-events-none overflow-visible flex items-center justify-center">
              {activeTheme === "dark" ? (
                /* Dynamic Spotlight for Dark Mode */
                <motion.div
                  className="absolute rounded-full blur-3xl pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 60%)",
                    width: "400px",
                    height: "220px",
                    left: mousePos.x - 200,
                    top: mousePos.y - 110,
                    position: "absolute",
                  }}
                  animate={{
                    scale: isWordmarkHovered ? 1.25 : 0.8,
                    opacity: isWordmarkHovered ? 0.9 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 80, damping: 22 }}
                />
              ) : (
                /* Dynamic Spotlight for Light Mode */
                <motion.div
                  className="absolute rounded-full blur-3xl pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(25, 25, 21, 0.03) 0%, transparent 60%)",
                    width: "400px",
                    height: "220px",
                    left: mousePos.x - 200,
                    top: mousePos.y - 110,
                    position: "absolute",
                  }}
                  animate={{
                    scale: isWordmarkHovered ? 1.15 : 0.8,
                    opacity: isWordmarkHovered ? 0.75 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 80, damping: 22 }}
                />
              )}
            </div>

            {/* Letter by Letter interactive spring wordmark */}
            <h2 
              className={`font-sans font-[950] tracking-[-0.04em] leading-none text-[11vw] sm:text-[9.5vw] md:text-[8vw] lg:text-[7.2vw] uppercase text-center transition-colors duration-300 relative z-10 select-none flex items-center justify-center overflow-visible ${
                activeTheme === "dark" ? "text-[#faf9f5]" : "text-neutral-900"
              }`}
              style={{
                textShadow: activeTheme === "dark" ? "0 0 35px rgba(255, 255, 255, 0.06)" : "0 0 35px rgba(0, 0, 0, 0.02)",
              }}
            >
              {wordmarkLetters.map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block origin-bottom cursor-default"
                  whileHover={{
                    scaleY: 1.05,
                    scaleX: 0.97,
                    y: -6,
                    textShadow: activeTheme === "dark" ? "0 0 30px rgba(255,255,255,0.4)" : "0 0 30px rgba(0,0,0,0.1)",
                    transition: { type: "spring", stiffness: 450, damping: 10 }
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          {/* ── 4. Monospace & Serif Copyright Bottom Bar ── */}
          <motion.div
            variants={itemVariants}
            className={`pt-6 mt-4 border-t flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between max-w-6xl mx-auto w-full transition-colors duration-500 ${
              activeTheme === "dark" ? "border-[#3d3d37]" : "border-neutral-200"
            }`}
          >
            {/* Left elegant Georgia-style serif copyright */}
            <div className={`text-center sm:text-left font-serif italic text-xs tracking-wide select-none ${
              activeTheme === "dark" ? "text-[#8e8d82]" : "text-neutral-500"
            }`}>
              &copy; 2026 ComponentLab. Engineered with precision. Built for humans.
            </div>

            {/* Right link list (spaced out legal) */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em]">
              {["PRIVACY", "TERMS", "CONTACT"].map((legal, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`transition-colors duration-250 cursor-pointer ${
                    activeTheme === "dark" ? "text-[#8e8d82] hover:text-[#faf9f5]" : "text-neutral-400 hover:text-neutral-950"
                  }`}
                >
                  {legal}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </div>
  );
};

export default EngineeringStatusFooter;
