import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 w-full z-50 bg-surface/90 backdrop-blur-xl oklab-border-b transition-colors duration-300">
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
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="bg-primary text-on-primary px-5 py-2 rounded-lg text-sm font-medium font-['Space_Grotesk'] hover:bg-error-warm transition-all active:scale-[0.98] flex items-center gap-2">
            <a href="https://github.com/TakshPatel02/ComponentLabs" target="_blank" rel="noopener noreferrer">Star on Github</a>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-5 h-16 relative z-50 bg-surface transition-colors duration-300">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="active:scale-95 duration-200 text-primary w-8 h-8 flex justify-center items-center rounded-md hover:bg-on-surface/5"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="text-xl font-black tracking-widest text-primary font-['Space_Grotesk'] uppercase">
            ComponentLab
          </span>
        </div>
        <ThemeToggle />
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 w-full bg-surface border-b oklab-border shadow-lg flex flex-col items-center py-6 gap-6 z-40 font-['Space_Grotesk'] tracking-tight transition-colors duration-300"
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
            <div className="w-full px-6 pt-4 border-t oklab-border flex flex-col gap-4">
              <button className="w-full bg-primary text-on-primary py-3 rounded-lg text-base font-medium font-['Space_Grotesk'] hover:bg-error-warm transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                <GithubIcon size={20} />
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
