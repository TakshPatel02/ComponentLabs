import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import GhostForm from "../components/HomePageComponents/GhostForm";
import LinkNavigation from "../components/HomePageComponents/LinkNavigation";
import NeuralTrace from "../components/HomePageComponents/NeuralTrace";
import TiltHoverCard from "../components/HomePageComponents/TiltHoverCard";
import EncryptedText from "../components/TextComponents/EncryptedText";
import MacKeyboard from "../components/KeyBoardComponents/MacKeyboard";
import { Link } from "react-router-dom";
import { Check, Copy, ChevronDown } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/* ── npm install copy button ── */
const NpmCopyButton = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install component-labs");
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center justify-center gap-2.5 px-[28px] py-[14px] rounded-lg
        font-mono-code text-[13px] tracking-widest uppercase
        border border-border-fallback-10 bg-transparent
        text-on-surface-variant
        hover:border-error-warm/40 hover:text-error-warm
        transition-all duration-300 active:scale-95
        cursor-pointer select-none w-full sm:w-auto
      `}
    >
      {copied ? (
        <>
          <Check size={16} className="text-green-500" />
          <span>Copied ✓</span>
        </>
      ) : (
        <>
          <Copy size={16} className="opacity-40" />
          <span className="lowercase">npm install component-labs</span>
        </>
      )}
    </button>
  );
};

/* ── Inline code copy block for CTA card ── */
const InlineCopyBlock = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install component-labs");
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between bg-[#111111] border border-white/10 rounded-md p-3">
      <code className="font-mono-code text-[12px] md:text-[13px] text-white/90 select-all">
        npm install component-labs
      </code>
      <button 
        onClick={handleCopy}
        className="text-white/50 hover:text-white transition-colors cursor-pointer"
        aria-label="Copy to clipboard"
      >
        {copied ? <Check size={16} className="text-[#E8567A]" /> : <Copy size={16} />}
      </button>
    </div>
  );
};

const FLIP_WORDS = ["Motion.", "Precision.", "Purpose.", "React."];

const HomePage = () => {
  const { theme } = useTheme();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    // Start animation loop after entrance (1500ms entrance + 2500ms delay)
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentWordIndex((prev) => (prev + 1) % FLIP_WORDS.length);
      }, 2500);
      return () => clearInterval(interval);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  const isDark = theme === "dark";

  return (
    <div className="min-h-screen bg-surface font-ui-body">
      
      {/* ── Full Viewport Hero Section ── */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Radial Glow (Dark Mode Only) */}
          {isDark && (
            <div 
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at center, rgba(147, 51, 234, 0.08) 0%, rgba(0,0,0,0) 50%)"
              }}
            />
          )}
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4 sm:px-8">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`mb-8 px-4 py-1.5 rounded-full border backdrop-blur-md flex items-center justify-center font-mono-code text-[11px] uppercase tracking-widest ${
              isDark 
                ? "bg-white/5 border-white/15 text-white/80" 
                : "bg-black/3 border-black/15 text-black/80"
            }`}
          >
            ✦ 43 Production-Ready React Primitives
          </motion.div>

          {/* Heading */}
          <div className="flex flex-col items-center justify-center text-center mb-6 md:mb-8 w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-hero text-[48px] sm:text-[64px] md:text-[96px] leading-[1.1] text-primary tracking-tighter flex flex-wrap justify-center items-center gap-x-4"
            >
              <span>Crafted by</span>
              <span className="italic text-error-warm">Intelligence</span>
            </motion.h1>
            
            {/* Flipping 3rd Line */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display-hero text-[48px] sm:text-[64px] md:text-[96px] leading-[1.1] text-primary tracking-tighter flex items-center justify-center gap-3 sm:gap-4 w-full overflow-hidden h-[1.3em]"
            >
              <span>with</span>
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="whitespace-nowrap text-primary inline-block"
                >
                  {FLIP_WORDS[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-editorial-body text-[18px] md:text-[20px] text-on-surface-variant max-w-[600px] mx-auto text-center italic mb-10 leading-relaxed"
          >
            A premium collection of high-density UI primitives, engineered with
            the precision of a code editor and the soul of a classic
            publication.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0"
          >
            <Link
              to="/components"
              className={`w-full sm:w-auto px-[28px] py-[14px] rounded-lg font-mono-code text-[13px] uppercase tracking-widest transition-all duration-300 active:scale-95 no-underline flex items-center justify-center ${
                isDark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              BROWSE COMPONENTS
            </Link>
            <NpmCopyButton />
          </motion.div>

          {/* Bottom Stat Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mt-10 flex-wrap"
          >
            {["43 COMPONENTS", "13 CATEGORIES", "OPEN SOURCE"].map((stat) => (
              <span
                key={stat}
                className="font-mono-code text-[10px] uppercase tracking-[0.15em] text-on-surface-variant/60 border border-border-fallback-10 rounded-full px-4 py-1.5 select-none bg-transparent"
              >
                {stat}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom Edge Indicator */}
        <div className="absolute bottom-6 left-0 w-full flex flex-col items-center z-10">
          <motion.div 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-on-surface-variant/40"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
      </section>

      {/* ── Component Name Marquee ── */}
      <section className="relative w-full border-y border-border-fallback-10 overflow-hidden select-none">
          {/* Edge fade masks */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              background: "inherit",
            }}
          />

          <div
            className="group flex py-8 md:py-10"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            }}
          >
            {/* Two identical strips for seamless loop */}
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex shrink-0 items-center gap-0 animate-marquee group-hover:[animation-play-state:paused]"
              >
                {[
                  "Encrypted Text",
                  "Kinetic 3D Card",
                  "Neural Trace",
                  "Velocity Text",
                  "Flip Links",
                  "Ghost Forms",
                  "Mac Keyboard",
                  "Bento Stats",
                  "Prompt Bar",
                  "Takeover Links",
                  "Terminal Typing",
                  "Creative Highlight",
                ].map((name) => (
                  <span key={name} className="flex items-center shrink-0">
                    <span className="font-mono-code text-[16px] md:text-[18px] uppercase tracking-[0.15em] text-on-surface-variant/35 whitespace-nowrap px-8 md:px-12">
                      {name}
                    </span>
                    <span className="text-on-surface-variant/20 text-[10px] md:text-[12px] shrink-0">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── Main Content Area ── */}
        <main className="max-w-[1200px] mx-auto sm:px-8">

          {/* ── Selected Primitives ── */}
          <section className="py-16 md:py-32 px-4 md:px-0">
            
            {/* Section heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="flex flex-col">
                <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-3">
                  SHOWCASE
                </span>
                <h2 className="font-section-heading text-[32px] md:text-[40px] text-primary tracking-tight leading-tight">
                  Selected Primitives
                </h2>
                <p className="font-editorial-standard text-[15px] text-on-surface-variant italic mt-3 max-w-4xl">
                  A few of the components waiting inside. Hover to interact.
                </p>
              </div>
              <Link to="/components" className="group flex items-center gap-2 text-sm font-mono-code uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
                View all 43 <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* ── Grid Layout ── */}
            <div className="flex flex-col gap-5 md:gap-6">
              
              {/* Row 1: Two columns (65/35) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
                
                {/* Left (65%): Kinetic 3D Card */}
                <div className="md:col-span-8 group relative rounded-[12px] overflow-hidden p-6 md:p-8 flex flex-col transition-all duration-200 ease-in-out hover:translate-y-[-2px] bg-cursor-light border border-transparent oklab-border hover:border-primary/20 min-h-[380px]">
                  <div className="mb-6 relative z-10">
                    <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                      Spatial Depth
                    </span>
                    <h3 className="font-section-heading text-[22px] md:text-[26px] text-primary transition-colors leading-tight">
                      Kinetic 3D Card
                    </h3>
                  </div>
                  <div className="grow flex items-center justify-center rounded-lg transition-colors duration-500">
                    <TiltHoverCard />
                  </div>
                  <p className="font-editorial-standard text-[13px] md:text-[14px] text-on-surface-variant italic mt-6 relative z-10">
                    Interactive tilting surface with dynamic ambient lighting.
                  </p>
                </div>

                {/* Right (35%): Stacked Flip Links & Encrypted Text */}
                <div className="md:col-span-4 flex flex-col gap-5 md:gap-6">
                  
                  {/* Top: Flip Links */}
                  <div className="grow group relative rounded-[12px] overflow-hidden p-6 md:p-8 flex flex-col transition-all duration-200 ease-in-out hover:translate-y-[-2px] bg-cursor-light border border-transparent oklab-border hover:border-primary/20 min-h-[220px]">
                    <div className="mb-6 relative z-10">
                      <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                        Navigation
                      </span>
                      <h3 className="font-section-heading text-[22px] md:text-[24px] text-primary transition-colors leading-tight">
                        Flip Links
                      </h3>
                    </div>
                    <div className="grow flex flex-col items-center justify-center relative z-10">
                      <LinkNavigation />
                    </div>
                    <p className="font-editorial-standard text-[13px] md:text-[14px] text-on-surface-variant italic mt-6 relative z-10">
                      Kinetic typography navigation with tactile rolling feedback.
                    </p>
                  </div>

                  {/* Bottom: Encrypted Text */}
                  <div 
                    className="grow group relative rounded-[12px] overflow-hidden p-6 md:p-8 flex flex-col transition-all duration-200 ease-in-out hover:translate-y-[-2px] bg-cursor-light border border-transparent oklab-border hover:border-primary/20 min-h-[220px]"
                    onMouseEnter={() => setHoveredCard('encrypted')}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="mb-6 relative z-10">
                      <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                        Text &amp; Typography
                      </span>
                      <h3 className="font-section-heading text-[22px] md:text-[24px] text-primary transition-colors leading-tight">
                        Encrypted Text
                      </h3>
                    </div>
                    <div className="grow flex items-center justify-center rounded-lg transition-colors duration-500">
                      <EncryptedText
                        text="Access Granted"
                        interval={30}
                        duration={1500}
                        className="text-xl md:text-2xl font-bold text-primary tracking-tight"
                        animateOnHover={true}
                        isHovered={hoveredCard === 'encrypted'}
                      />
                    </div>
                    <p className="font-editorial-standard text-[13px] md:text-[14px] text-on-surface-variant italic mt-6 relative z-10">
                      Character-by-character decryption triggered on hover.
                    </p>
                  </div>

                </div>
              </div>

              {/* Row 2: Three equal columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                
                {/* Neural Trace */}
                <div className="group relative rounded-[12px] overflow-hidden p-6 md:p-8 flex flex-col transition-all duration-200 ease-in-out hover:translate-y-[-2px] bg-cursor-light border border-transparent oklab-border hover:border-primary/20 h-auto md:h-[360px]">
                  <div className="mb-6 relative z-10">
                    <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                      AI Timeline
                    </span>
                    <h3 className="font-section-heading text-[22px] md:text-[24px] text-primary transition-colors leading-tight">
                      Neural Trace
                    </h3>
                  </div>
                  <div className="grow flex items-center justify-center relative z-10">
                    <NeuralTrace />
                  </div>
                  <p className="font-editorial-standard text-[13px] md:text-[14px] text-on-surface-variant italic mt-6 relative z-10">
                    Visualize LLM thinking through time-coded steps.
                  </p>
                </div>

                {/* Mac Style Layout */}
                <div className="group relative rounded-[12px] overflow-hidden p-6 md:p-8 flex flex-col transition-all duration-200 ease-in-out hover:translate-y-[-2px] bg-cursor-light border border-transparent oklab-border hover:border-primary/20 h-auto md:h-[360px]">
                  <div className="mb-6 relative z-20">
                    <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                      Keyboards
                    </span>
                    <h3 className="font-section-heading text-[22px] md:text-[24px] text-primary transition-colors leading-tight">
                      Mac Style Layout
                    </h3>
                  </div>
                  <div className="grow flex items-center justify-center rounded-lg overflow-hidden transition-colors duration-500 relative z-10 -mx-4">
                    <div className="scale-[0.4] md:scale-[0.45] origin-center w-[780px]">
                      <MacKeyboard />
                    </div>
                  </div>
                  <p className="font-editorial-standard text-[13px] md:text-[14px] text-on-surface-variant italic mt-6 relative z-20">
                    Interactive keyboard with real key sounds.
                  </p>
                </div>

                {/* Ghost Forms */}
                <div className="group relative rounded-[12px] overflow-hidden p-6 md:p-8 flex flex-col transition-all duration-200 ease-in-out hover:translate-y-[-2px] bg-cursor-light border border-transparent oklab-border hover:border-primary/20 h-auto md:h-[360px]">
                  <div className="mb-6 relative z-10">
                    <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                      Forms &amp; Inputs
                    </span>
                    <h3 className="font-section-heading text-[22px] md:text-[24px] text-primary transition-colors leading-tight">
                      Ghost Forms
                    </h3>
                  </div>
                  <div className="grow flex flex-col items-center justify-center rounded-lg transition-colors duration-500 relative z-10 pt-4">
                    <div className="scale-[0.8] origin-top w-[125%]">
                      <GhostForm />
                    </div>
                  </div>
                  <p className="font-editorial-standard text-[13px] md:text-[14px] text-on-surface-variant italic mt-6 relative z-10">
                    Invisible input fields that reveal themselves on interaction.
                  </p>
                </div>

              </div>
            </div>
          </section>

        </main>

        {/* ── Horizontal Strip Stats Section ── */}
        <section className="relative w-full border-y border-border-fallback-10 overflow-hidden select-none bg-transparent">
          <div className="flex flex-col md:flex-row items-center justify-between divide-y md:divide-y-0 md:divide-x divide-border-fallback-10">
            {[
              { num: "43", label: "Components" },
              { num: "13", label: "Categories" },
              { num: "1", label: "npm Package" },
              { num: "MIT", label: "Licensed" },
            ].map((stat, i) => (
              <div key={i} className="flex-1 flex flex-col items-center justify-center py-8 md:py-10 w-full">
                <span className="font-section-heading font-bold text-[48px] text-primary mb-2 leading-none">
                  {stat.num}
                </span>
                <span className="font-mono-code text-[11px] uppercase tracking-[0.15em] text-on-surface-variant/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <main className="max-w-[1200px] mx-auto sm:px-8">
        {/* Text CTA Section (Desktop & Mobile) */}
        <section className="py-16 md:py-32 px-4 md:px-0 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          
          {/* Left Side (55%) */}
          <div className="w-full md:w-[55%] flex flex-col">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-4 block">
              GET STARTED
            </span>
            <h2 className="font-section-heading text-[36px] md:text-[48px] text-primary mb-6 leading-tight">
              Built for the era of AI.
            </h2>
            <p className="font-editorial-body text-lg md:text-[20px] text-on-surface-variant leading-relaxed mb-6">
              Components shouldn't just be pretty. They should be aware. Our
              library is built with semantic structures that AI agents can
              navigate, understand, and manipulate with ease.
            </p>
            <p className="font-editorial-standard text-[14px] italic text-on-surface-variant/60">
              Free forever. No account required.
            </p>
          </div>

          {/* Right Side (45%) */}
          <div className="w-full md:w-[45%]">
            <div className={`p-6 rounded-[12px] border transition-all duration-300 ${isDark ? 'bg-[#1a1a1a] border-white/8' : 'bg-[#e8e6e1] border-black/8'} flex flex-col`}>
              
              {/* Top: Install */}
              <div className="mb-6">
                <span className="font-mono-code text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-3 block">
                  INSTALL
                </span>
                <InlineCopyBlock />
              </div>

              {/* Divider */}
              <div className={`w-full h-px mb-6 ${isDark ? 'bg-white/6' : 'bg-black/6'}`} />

              {/* Buttons */}
              <div className="flex flex-col gap-3 mb-6">
                <Link to="/components" className="w-full">
                  <button className="w-full bg-[#1a1a1a] dark:bg-white text-white dark:text-black py-3.5 rounded-lg font-button-label text-sm uppercase tracking-widest transition-all hover:opacity-90 flex items-center justify-center gap-2 border border-transparent cursor-pointer">
                    BROWSE LIBRARY <span>→</span>
                  </button>
                </Link>
                <a href="https://github.com/TakshPatel02/ComponentLabs" target="_blank" rel="noreferrer" className="w-full">
                  <button className={`w-full bg-transparent py-3.5 rounded-lg font-button-label text-sm uppercase tracking-widest transition-all hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center gap-2 border cursor-pointer ${isDark ? 'border-white/20 text-white' : 'border-black/20 text-black'}`}>
                    VIEW ON GITHUB <span>→</span>
                  </button>
                </a>
              </div>

              {/* Checks */}
              <div className="flex flex-col gap-2.5">
                {[
                  "MIT Licensed",
                  "Open Source",
                  "npm package available",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <Check size={14} className="text-[#E8567A]" />
                    <span className="font-mono-code text-[11px] uppercase tracking-wider text-on-surface-variant/70">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
