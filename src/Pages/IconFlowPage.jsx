import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Check, Loader, Bell, Star, Heart } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const IconFlowPage = () => {
  return (
    <div className="min-h-screen w-full bg-surface text-on-surface font-['Inter'] flex flex-col items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* CSS Animations for Icons */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gentle-shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-2px) rotate(-2deg); }
          75% { transform: translateX(2px) rotate(2deg); }
        }
        .animate-search { animation: gentle-shake 2s ease-in-out infinite; }
        
        @keyframes scale-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
        .animate-bounce-loop { animation: scale-bounce 1.5s cubic-bezier(0.28, 0.84, 0.42, 1) infinite; }
        
        @keyframes continuous-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-loop { animation: continuous-spin 2s linear infinite; }
        
        @keyframes swing-loop {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(15deg); }
          40% { transform: rotate(-10deg); }
          60% { transform: rotate(5deg); }
          80% { transform: rotate(-5deg); }
        }
        .animate-swing { animation: swing-loop 2.5s ease-in-out infinite; origin: top center; transform-origin: top center; }
        
        @keyframes pulse-opacity {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.95); }
        }
        .animate-pulse-loop { animation: pulse-opacity 2s ease-in-out infinite; }
        
        @keyframes heartbeat-loop {
          0% { transform: scale(1); }
          14% { transform: scale(1.3); }
          28% { transform: scale(1); }
          42% { transform: scale(1.3); }
          70% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        .animate-heartbeat { animation: heartbeat-loop 1.5s ease-in-out infinite; }
      `}} />

      <motion.div 
        className="max-w-3xl w-full mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* TOP BADGE */}
        <motion.div variants={itemVariants} className="mb-8 w-full flex justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/10 bg-surface-container/50 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8567A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8567A]"></span>
            </span>
            <span className="text-xs font-medium tracking-wider text-primary/80 uppercase">Coming Soon</span>
          </div>
        </motion.div>

        {/* SECTION LABEL */}
        <motion.div variants={itemVariants} className="mb-4 w-full">
          <p className="text-sm font-mono tracking-widest text-on-surface-variant uppercase">New Package</p>
        </motion.div>

        {/* HEADING */}
        <motion.div variants={itemVariants} className="mb-6 w-full">
          <h1 className="text-5xl md:text-7xl font-['Space_Grotesk'] text-primary tracking-tight leading-tight">
            Lucide Icons,<br />
            Brought to <span className="italic text-[#E8567A]">Life.</span>
          </h1>
        </motion.div>

        {/* TAGLINE */}
        <motion.div variants={itemVariants} className="mb-12 w-full max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
            Every Lucide icon — animated with motion, triggered by interaction. 
            Draw, bounce, pulse, shake. One prop away.
          </p>
        </motion.div>

        {/* PACKAGE INSTALL PREVIEW */}
        <motion.div variants={itemVariants} className="mb-16 w-full max-w-[200px] mx-auto flex flex-col items-center">
          <div className="w-full bg-[#0d0d0d] border border-white/10 rounded-xl p-4 flex items-center justify-center mb-3 shadow-xl">
            <code className="font-mono text-sm text-gray-300 whitespace-nowrap">
              <span className="text-[#E8567A]">npm</span> install iconflow
            </code>
          </div>
          <p className="text-xs font-mono text-on-surface-variant/70">
            Available soon on npmjs.com
          </p>
        </motion.div>

        {/* ICON PREVIEW STRIP */}
        <motion.div variants={itemVariants} className="w-full mb-20 flex flex-col items-center">
          <p className="text-xs font-mono tracking-widest text-on-surface-variant uppercase mb-6">
            Animation Types
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {/* Search - Shake */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-surface-container border border-primary/10 flex items-center justify-center hover:border-[#E8567A]/30 transition-colors shadow-sm">
                <Search className="text-primary w-6 h-6 animate-search" />
              </div>
              <span className="text-[11px] font-mono text-on-surface-variant">shake</span>
            </div>
            
            {/* Check - Bounce */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-surface-container border border-primary/10 flex items-center justify-center hover:border-[#E8567A]/30 transition-colors shadow-sm">
                <Check className="text-primary w-6 h-6 animate-bounce-loop" />
              </div>
              <span className="text-[11px] font-mono text-on-surface-variant">bounce</span>
            </div>

            {/* Loader - Spin */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-surface-container border border-primary/10 flex items-center justify-center hover:border-[#E8567A]/30 transition-colors shadow-sm">
                <Loader className="text-primary w-6 h-6 animate-spin-loop" />
              </div>
              <span className="text-[11px] font-mono text-on-surface-variant">spin</span>
            </div>

            {/* Bell - Swing */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-surface-container border border-primary/10 flex items-center justify-center hover:border-[#E8567A]/30 transition-colors shadow-sm">
                <Bell className="text-primary w-6 h-6 animate-swing" />
              </div>
              <span className="text-[11px] font-mono text-on-surface-variant">swing</span>
            </div>

            {/* Star - Pulse */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-surface-container border border-primary/10 flex items-center justify-center hover:border-[#E8567A]/30 transition-colors shadow-sm">
                <Star className="text-primary w-6 h-6 animate-pulse-loop" />
              </div>
              <span className="text-[11px] font-mono text-on-surface-variant">pulse</span>
            </div>

            {/* Heart - Heartbeat */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-surface-container border border-primary/10 flex items-center justify-center hover:border-[#E8567A]/30 transition-colors shadow-sm">
                <Heart className="text-primary w-6 h-6 animate-heartbeat" />
              </div>
              <span className="text-[11px] font-mono text-on-surface-variant">heartbeat</span>
            </div>
          </div>
        </motion.div>

        {/* FEATURES ROW */}
        <motion.div variants={itemVariants} className="w-full max-w-3xl mb-24 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          <div className="flex items-center gap-2 text-sm font-mono text-on-surface-variant whitespace-nowrap">
            <span className="text-lg">⚡</span>
            <span>Trigger on hover, click, or mount</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-mono text-on-surface-variant whitespace-nowrap">
            <span className="text-lg">🎛</span>
            <span>Speed, color, and size props</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-mono text-on-surface-variant whitespace-nowrap">
            <span className="text-lg">🧩</span>
            <span>Drop-in replacement for lucide-react</span>
          </div>
        </motion.div>

        {/* SOCIAL LINKS SECTION */}
        <motion.div variants={itemVariants} className="w-full flex flex-col items-center mb-24">
          <h3 className="text-lg font-['Space_Grotesk'] text-primary mb-6">Follow the build</h3>
          <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto">
            <a 
              href="https://x.com/TakshPatel02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-primary/20 text-primary font-medium text-sm hover:bg-primary/5 hover:border-[#E8567A]/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              FOLLOW ON X <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a 
              href="https://github.com/TakshPatel02" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg border border-primary/20 text-primary font-medium text-sm hover:bg-primary/5 hover:border-[#E8567A]/50 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group"
            >
              STAR ON GITHUB <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
          <p className="text-sm italic text-on-surface-variant/80 text-center w-full max-w-3xl mx-auto">
            Updates announced on X. Star ComponentLab on GitHub to stay in the loop.
          </p>
        </motion.div>

      </motion.div>
      
      {/* FOOTER NOTE */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="w-full max-w-4xl mt-auto pt-8 border-t border-primary/10 flex flex-col sm:flex-row justify-between items-center gap-4"
      >
        <Link to="/" className="text-xs font-mono text-on-surface-variant hover:text-[#E8567A] transition-colors">
          ← Back to ComponentLab
        </Link>
        <p className="text-xs font-mono text-on-surface-variant text-center sm:text-right">
          IconFlow is a ComponentLab project by Taksh Patel
        </p>
      </motion.div>
    </div>
  );
};

export default IconFlowPage;
