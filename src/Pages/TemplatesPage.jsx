import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useTheme } from "../context/ThemeContext";
import { Lock, Eye, Smartphone, ArrowRight, Github, Twitter } from "lucide-react";
import { templatesData } from "../config/templatesData";

const TemplatesPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen bg-surface font-ui-body pt-24 md:pt-32 pb-24 px-4 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center mb-16 md:mb-24"
        >
          <span className="font-mono-code text-[11px] uppercase tracking-[0.2em] text-on-surface-variant/60 mb-6 block">
            PREMIUM TEMPLATES
          </span>
          <h1 className="font-display-hero text-5xl md:text-7xl lg:text-[80px] text-primary tracking-tighter leading-[1.1] mb-6">
            Full Pages.<br className="md:hidden" /> Ready to Ship.
          </h1>
          <p className="font-editorial-standard text-[18px] md:text-[20px] text-on-surface-variant italic max-w-2xl leading-relaxed">
            Complete page templates built with ComponentLab primitives. Copy the code, own the design.
          </p>
        </motion.div>

        {/* Coming Soon Waitlist Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[700px] mx-auto mb-24 md:mb-32"
        >
          <div className={`p-8 md:p-12 rounded-2xl border ${isDark ? 'bg-[#151515] border-white/5' : 'bg-white border-black/5'} relative overflow-hidden atmospheric-shadow`}>
            
            {/* Subtle Gradient Glow */}
            <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full blur-[100px] opacity-30 pointer-events-none ${isDark ? 'bg-[#E8567A]' : 'bg-[#E8567A]'}`} />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="max-w-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8567A] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8567A]"></span>
                  </span>
                  <span className="font-mono-code text-[11px] uppercase tracking-widest text-[#E8567A] font-semibold">
                    IN ACTIVE DEVELOPMENT
                  </span>
                </div>
                <h2 className="font-section-heading text-3xl md:text-4xl text-primary mb-4 leading-tight tracking-tight">
                  Templates are arriving soon.
                </h2>
                <p className="font-editorial-standard text-[15px] text-on-surface-variant/80 leading-relaxed">
                  We're crafting full SaaS landing pages, portfolios, and dashboards using the exact components you see here. 
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full md:w-auto min-w-[200px]">
                <a href="https://github.com/TakshPatel02/ComponentLabs" target="_blank" rel="noreferrer" className="w-full no-underline">
                  <button className={`w-full group relative overflow-hidden py-3 px-5 rounded-lg font-mono-code text-[11px] uppercase tracking-widest transition-all duration-300 flex items-center justify-between gap-4 border cursor-pointer ${isDark ? 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20' : 'bg-black/5 border-black/10 text-black hover:bg-black/10 hover:border-black/20'}`}>
                    <span className="flex items-center gap-2"><Github size={14} /> Star on GitHub</span>
                    <ArrowRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                </a>
                <a href="https://x.com/TakshPatel02" target="_blank" rel="noreferrer" className="w-full no-underline">
                  <button className={`w-full group relative overflow-hidden py-3 px-5 rounded-lg font-mono-code text-[11px] uppercase tracking-widest transition-all duration-300 flex items-center justify-between gap-4 border cursor-pointer ${isDark ? 'bg-transparent border-white/10 text-white hover:bg-white/5 hover:border-white/20' : 'bg-transparent border-black/10 text-black hover:bg-black/5 hover:border-black/20'}`}>
                    <span className="flex items-center gap-2"><Twitter size={14} /> Follow on X</span>
                    <ArrowRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Template Previews Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {templatesData.map((template, idx) => {
            const isLive = template.status === "live";

            const cardContent = (
              <div className={`relative h-full flex flex-col group ${!isLive ? 'opacity-60 grayscale-50' : ''}`}>
                
                {/* Visual Placeholder */}
                <div className={`relative w-full aspect-4/3 rounded-xl overflow-hidden mb-6 flex items-center justify-center transition-all duration-500 ${isLive ? 'hover-card' : ''} ${isDark ? 'bg-[#151515] border border-white/5' : 'bg-white border border-black/5'} shadow-sm`}>
                  
                  {/* Status Pill */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1.5 rounded-full font-mono-code text-[9px] uppercase tracking-widest backdrop-blur-md flex items-center gap-1.5 shadow-sm ${
                      isLive
                        ? 'bg-primary text-on-primary border border-white/10'
                        : isDark ? 'bg-black/60 text-white/70 border border-white/10' : 'bg-white/80 text-black/70 border border-black/10'
                    }`}>
                      {!isLive && <Lock size={10} />}
                      {isLive ? 'ACTIVE PREVIEW' : 'LOCKED'}
                    </span>
                  </div>

                  {isLive ? (
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 flex flex-col items-center justify-center gap-4 transition-transform duration-500 group-hover:scale-105">
                      <div className={`relative z-10 w-12 h-12 rounded-full ${isDark ? 'bg-white/10 text-white' : 'bg-black/5 text-black'} backdrop-blur-md border ${isDark ? 'border-white/10' : 'border-black/5'} flex items-center justify-center`}>
                        <Smartphone size={20} strokeWidth={1.5} />
                      </div>
                    </div>
                  ) : (
                    <div className={`absolute inset-0 bg-linear-to-br ${isDark ? 'from-white/5 to-white/10' : 'from-black/5 to-black/10'} blur-xl scale-150`} />
                  )}
                </div>

                {/* Name & Details */}
                <div className="px-1 flex flex-col grow">
                  <h3 className="font-section-heading text-2xl tracking-tight text-primary mb-2">
                    {template.name}
                  </h3>
                  <p className="font-editorial-standard text-[15px] text-on-surface-variant/80 leading-relaxed mb-4">
                    {template.desc}
                  </p>
                  
                  {isLive && (
                    <div className="mt-auto pt-2">
                      <span className="font-mono-code text-[11px] uppercase tracking-widest text-primary hover:text-[#E8567A] transition-colors flex items-center gap-2 w-max">
                        View Template <ArrowRight size={12} />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );

            if (isLive) {
              return (
                <Link key={template.name} to={template.href} className="no-underline block">
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={template.name} className="block cursor-not-allowed">
                {cardContent}
              </div>
            );
          })}
        </motion.div>

      </div>
    </div>
  );
};

export default TemplatesPage;
