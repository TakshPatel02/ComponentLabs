import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t border-black/10 bg-cursor-cream dark:bg-surface dark:border-white/10">
      <div className="max-w-container-max w-full mx-auto py-8 md:py-12 px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-6">
        {/* Logo */}
        <div className="text-lg font-black text-primary font-['Space_Grotesk']">
          ComponentLab
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 md:gap-8 font-['Space_Grotesk'] text-[11px] md:text-[13px] uppercase tracking-widest order-3 md:order-2 w-full md:w-auto">
          <Link
            className="text-primary/40 hover:text-error-warm transition-colors"
            to="/terms"
          >
            Terms
          </Link>
          <a
            className="text-primary/40 hover:text-error-warm transition-colors"
            href="#"
          >
            GitHub
          </a>
          <a
            className="text-primary/40 hover:text-error-warm transition-colors"
            href="#"
          >
            Twitter
          </a>
          <a
            className="text-primary/40 hover:text-error-warm transition-colors"
            href="#"
          >
            Discord
          </a>
        </div>

        {/* Copyright */}
        <div className="font-['Space_Grotesk'] text-[11px] md:text-[13px] uppercase tracking-widest text-primary/40 order-2 md:order-3 w-full md:w-auto">
          © 2026 ComponentLab. Built for the era of AI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
