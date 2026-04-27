import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-cursor-cream/90 backdrop-blur-xl border-b border-black/5 shadow-[0_20px_50px_rgba(38,37,30,0.05)]">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center w-full px-8 h-16 max-w-container-max mx-auto">
        <div className="text-xl font-bold tracking-tighter text-primary font-['Space_Grotesk']">
          ComponentLab
        </div>
        <div className="flex items-center gap-8 font-['Space_Grotesk'] tracking-tight font-medium">
          <Link
            className="text-primary/50 transition-colors duration-200 hover:text-error-warm"
            to="/"
          >
            ShowCase
          </Link>
          <Link
            className="text-primary/50 transition-colors duration-200 hover:text-error-warm"
            to="/components"
          >
            Components
          </Link>
          <Link
            className="text-primary/50 transition-colors duration-200 hover:text-error-warm"
            to="/docs"
          >
            Docs
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-primary text-cursor-cream px-5 py-2 rounded-lg text-sm font-medium font-['Space_Grotesk'] hover:bg-error-warm transition-all active:scale-[0.98]">
            GitHub
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-5 h-16 relative z-50 bg-cursor-cream">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="active:scale-95 duration-200 text-primary w-8 h-8 flex justify-center items-center rounded-md hover:bg-black/5"
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
          <span className="text-xl font-black tracking-widest text-primary font-['Space_Grotesk'] uppercase">
            ComponentLab
          </span>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 w-full bg-cursor-cream border-b border-black/5 shadow-lg flex flex-col items-center py-6 gap-6 z-40 font-['Space_Grotesk'] tracking-tight"
          >
            <Link
              onClick={() => setIsOpen(false)}
              className="text-primary/70 font-medium text-lg hover:text-error-warm transition-colors w-full text-center"
              to="/"
            >
              ShowCase
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-primary/70 font-medium text-lg hover:text-error-warm transition-colors w-full text-center"
              to="/components"
            >
              Components
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              className="text-primary/70 font-medium text-lg hover:text-error-warm transition-colors w-full text-center"
              to="/docs"
            >
              Docs
            </Link>
            <div className="w-full px-6 pt-4 border-t border-black/5">
              <button className="w-full bg-primary text-cursor-cream py-3 rounded-lg text-base font-medium font-['Space_Grotesk'] hover:bg-error-warm transition-all active:scale-[0.98]">
                GitHub
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
