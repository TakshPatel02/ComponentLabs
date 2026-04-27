import React from "react";
import { Link } from "react-router";

const NavBar = () => {
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
          <button className="bg-primary text-cursor-cream px-5 py-2 rounded-lg text-sm font-medium hover:bg-error-warm transition-all active:scale-[0.98]">
            GitHub
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-5 h-16">
        <div className="flex items-center gap-4">
          <button className="active:scale-95 duration-200 text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <span className="text-xl font-black tracking-widest text-primary font-['Space_Grotesk'] uppercase">
            GALLERY
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
