import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Lock } from "lucide-react";

const TemplatesPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="min-h-screen bg-surface font-ui-body pt-24 md:pt-32 pb-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-24">
          <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-4 block">
            TEMPLATES
          </span>
          <h1 className="font-section-heading text-[40px] md:text-[56px] text-primary tracking-tight leading-tight mb-4">
            Full Pages. Ready to Ship.
          </h1>
          <p className="font-editorial-standard text-[16px] md:text-[18px] text-on-surface-variant italic max-w-2xl">
            Complete page templates built with ComponentLab primitives. Copy the code, own the design.
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-[600px] mx-auto mb-24">
          <div className={`p-8 md:p-10 rounded-[12px] border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-[#e8e6e1] border-black/10'} relative overflow-hidden`}>
            
            {/* In Progress Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8567A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8567A]"></span>
              </span>
              <span className="font-mono-code text-[10px] uppercase tracking-widest text-on-surface-variant/70">
                IN PROGRESS
              </span>
            </div>

            <h2 className="font-section-heading text-[28px] md:text-[32px] text-primary mb-4 leading-tight">
              Templates are coming.
            </h2>
            <p className="font-editorial-body text-[16px] text-on-surface-variant leading-relaxed mb-8">
              We're building full page templates using ComponentLab primitives — SaaS landing pages, portfolios, dashboards, and more. Follow along to get notified when they launch.
            </p>

            {/* Notification Options */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              {/* Option 1: GitHub */}
              <div className="flex-1 flex flex-col gap-2">
                <a href="https://github.com/TakshPatel02/ComponentLabs" target="_blank" rel="noreferrer" className="w-full">
                  <button className={`w-full bg-transparent py-3.5 rounded-lg font-mono-code text-sm uppercase tracking-widest transition-all hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center gap-2 border cursor-pointer ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'}`}>
                    WATCH ON GITHUB <span>→</span>
                  </button>
                </a>
                <p className="font-editorial-standard text-[12px] italic text-on-surface-variant/50 text-center">
                  Star the repo to get notified of new releases
                </p>
              </div>

              {/* Option 2: Twitter/X */}
              <div className="flex-1 flex flex-col gap-2">
                <a href="https://x.com/TakshPatel02" target="_blank" rel="noreferrer" className="w-full">
                  <button className={`w-full bg-transparent py-3.5 rounded-lg font-mono-code text-sm uppercase tracking-widest transition-all hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center gap-2 border cursor-pointer ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'}`}>
                    FOLLOW ON X <span>→</span>
                  </button>
                </a>
                <p className="font-editorial-standard text-[12px] italic text-on-surface-variant/50 text-center">
                  Updates announced on X first
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Template Previews Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-60 pointer-events-none">
          {[
            { name: "SaaS Landing" },
            { name: "Portfolio" },
            { name: "Dashboard" }
          ].map((template) => (
            <div key={template.name} className={`relative rounded-[12px] border ${isDark ? 'bg-[#1a1a1a] border-white/10' : 'bg-[#e8e6e1] border-black/10'} overflow-hidden p-4 flex flex-col`}>
              
              {/* Coming Soon Pill */}
              <div className="absolute top-6 right-6 z-20">
                <span className={`px-3 py-1 rounded-full font-mono-code text-[9px] uppercase tracking-widest backdrop-blur-md ${isDark ? 'bg-white/10 text-white border border-white/20' : 'bg-black/5 text-black border border-black/10'}`}>
                  COMING SOON
                </span>
              </div>

              {/* Blurred Placeholder */}
              <div className="relative w-full h-[200px] rounded-lg overflow-hidden mb-6 flex items-center justify-center">
                <div className={`absolute inset-0 bg-linear-to-br ${isDark ? 'from-white/5 to-white/10' : 'from-black/5 to-black/10'} blur-xl scale-150`} />
                <div className={`relative z-10 p-3 rounded-full ${isDark ? 'bg-black/50 text-white/50' : 'bg-white/50 text-black/50'} backdrop-blur-sm border ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                  <Lock size={20} />
                </div>
              </div>

              {/* Name */}
              <div className="px-2 pb-2">
                <h3 className="font-section-heading text-[20px] text-primary">
                  {template.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default TemplatesPage;
