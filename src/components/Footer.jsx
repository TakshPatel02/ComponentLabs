import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="hidden md:flex w-full border-t border-black/10 bg-cursor-cream">
      <div className="max-w-container-max w-full mx-auto py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-lg font-black text-primary font-['Space_Grotesk']">
          ComponentLab
        </div>
        <div className="flex gap-8 font-['Space_Grotesk'] text-[13px] uppercase tracking-widest">
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
        <div className="font-['Space_Grotesk'] text-[13px] uppercase tracking-widest text-primary/40">
          © 2026 ComponentLab. Built for the era of AI.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
