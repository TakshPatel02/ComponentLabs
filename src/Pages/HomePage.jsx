import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import GhostForm from "../components/HomePageComponents/GhostForm";
import LinkNavigation from "../components/HomePageComponents/LinkNavigation";
import NeuralTrace from "../components/HomePageComponents/NeuralTrace";
import TiltHoverCard from "../components/HomePageComponents/TiltHoverCard";
import EncryptedText from "../components/TextComponents/EncryptedText";
import MacKeyboard from "../components/KeyBoardComponents/MacKeyboard";
import { Link } from "react-router-dom";
import { Check, Copy } from "lucide-react";

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
        inline-flex items-center gap-2.5 px-5 py-3 rounded-lg
        font-mono-code text-[13px] tracking-wide
        border border-border-fallback-10 bg-transparent
        text-on-surface-variant
        hover:border-error-warm/40 hover:text-error-warm
        transition-all duration-300 active:scale-95
        cursor-pointer select-none
      `}
    >
      {copied ? (
        <>
          <Check size={15} className="text-green-500" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy size={15} className="opacity-40" />
          <span>npm install component-labs</span>
        </>
      )}
    </button>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-surface font-ui-body">
      <main className="max-w-[1200px] mx-auto sm:px-8">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 text-center px-4 md:px-0">
          <span className="md:hidden font-system-micro text-system-micro uppercase tracking-widest text-on-surface-variant mb-6 block mt-4">
            Portfolio Volume 01
          </span>

          {/* Desktop Hero Heading */}
          <h1 className="hidden md:block font-display-hero text-display-hero text-primary tracking-tighter mb-6">
            Crafted by{" "}
            <span className="italic text-error-warm">Intelligence</span>
          </h1>
          {/* Mobile Hero Heading */}
          <h1 className="md:hidden font-display-hero text-5xl leading-tight text-primary mb-6 mx-auto text-center px-4 flex flex-col items-center">
            <span>Crafted</span>
            <span>by</span>
            <span className="italic text-error-warm mt-1">Intelligence</span>
          </h1>

          {/* Desktop Hero Text */}
          <p className="hidden md:block font-editorial-body text-xl text-on-surface-variant max-w-4xl mx-auto italic">
            A premium collection of high-density UI primitives, engineered with
            the precision of a code editor and the soul of a classic
            publication.
          </p>
          {/* Mobile Hero Text */}
          <p className="md:hidden font-editorial-body text-editorial-body text-on-surface-variant max-w-xs mx-auto italic">
            A definitive collection of engineered interface components for the
            modern web architect.
          </p>

          {/* ── CTA Buttons ── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 md:mt-12 px-4">
            {/* Primary: Browse Components */}
            <Link
              to="/components"
              className="px-7 py-3 bg-primary text-on-primary rounded-lg font-button-label text-sm uppercase tracking-widest hover:bg-error-warm transition-all duration-300 active:scale-95 no-underline"
            >
              Browse Components
            </Link>

            {/* Secondary: npm install (copy to clipboard) */}
            <NpmCopyButton />
          </div>

          {/* ── Stat Pills ── */}
          <div className="flex items-center justify-center gap-3 mt-8 flex-wrap px-4">
            {["43 Components", "13 Categories", "Open Source"].map((stat) => (
              <span
                key={stat}
                className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 border border-border-fallback-10 rounded-full px-4 py-1.5 select-none"
              >
                {stat}
              </span>
            ))}
          </div>
        </section>

        {/* ── Component Name Marquee ── */}
        <section className="relative border-y border-border-fallback-10 overflow-hidden select-none">
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
            className="group flex py-4"
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
                    <span className="font-mono-code text-[11px] uppercase tracking-[0.15em] text-on-surface-variant/35 whitespace-nowrap px-5">
                      {name}
                    </span>
                    <span className="text-on-surface-variant/20 text-[8px] shrink-0">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ── Selected Primitives ── */}
        <section className="pb-16 md:pb-32 px-4 md:px-0">
          {/* Section heading */}
          <h2 className="font-section-heading text-[28px] md:text-[36px] text-primary tracking-tight mb-8 md:mb-10">
            Selected Primitives
          </h2>

          {/* ── Row 1: Large + Tall ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 mb-5 md:mb-6">
            {/* Kinetic 3D Card — large (7 cols) */}
            <div className="md:col-span-7 group">
              <div className="hover-card oklab-border rounded-xl bg-cursor-light p-6 md:p-8 h-auto md:h-[480px] flex flex-col transition-all duration-500 overflow-hidden relative">
                <div className="mb-6 md:mb-8">
                  <span className="font-system-micro text-system-micro text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                    Spatial Depth
                  </span>
                  <h3 className="font-section-heading text-[26px] md:text-section-heading text-primary group-hover:text-error-warm transition-colors leading-tight">
                    Kinetic 3D Card
                  </h3>
                </div>
                <div className="grow flex items-center justify-center rounded-lg group-hover:bg-cursor-cream/40 transition-colors duration-500 min-h-[240px]">
                  <TiltHoverCard />
                </div>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-6">
                  Interactive tilting surface with dynamic ambient lighting.
                </p>
              </div>
            </div>

            {/* Flip Links — tall (5 cols) */}
            <div className="md:col-span-5 group">
              <div className="hover-card oklab-border rounded-xl bg-cursor-light p-6 md:p-8 h-auto md:h-[480px] flex flex-col transition-all duration-500">
                <div className="mb-6 md:mb-8">
                  <span className="font-system-micro text-system-micro text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                    Navigation
                  </span>
                  <h3 className="font-section-heading text-[26px] md:text-[28px] text-primary group-hover:text-error-warm transition-colors leading-tight">
                    Flip Links
                  </h3>
                </div>
                <div className="grow bg-cursor-cream/30 rounded-lg oklab-border p-4 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-cursor-cream/60 transition-colors duration-500 min-h-[200px]">
                  <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-black/2" />
                  <div className="relative z-10 w-full h-full pb-4">
                    <LinkNavigation />
                  </div>
                </div>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-6">
                  Kinetic typography navigation with tactile rolling feedback.
                </p>
              </div>
            </div>
          </div>

          {/* ── Row 2: Three equal cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {/* Encrypted Text */}
            <div className="group">
              <div className="hover-card oklab-border rounded-xl bg-cursor-light p-6 h-auto md:h-[360px] flex flex-col transition-all duration-500">
                <div className="mb-6">
                  <span className="font-system-micro text-system-micro text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                    Text &amp; Typography
                  </span>
                  <h3 className="font-section-heading text-[24px] md:text-[26px] text-primary group-hover:text-error-warm transition-colors leading-tight">
                    Encrypted Text
                  </h3>
                </div>
                <div className="grow flex items-center justify-center rounded-lg group-hover:bg-cursor-cream/30 transition-colors duration-500 min-h-[100px]">
                  <EncryptedText
                    text="ComponentLab"
                    interval={50}
                    duration={3000}
                    className="text-2xl md:text-3xl font-bold text-primary tracking-tight"
                  />
                </div>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-6">
                  Character-by-character decryption animation effect.
                </p>
              </div>
            </div>

            {/* Neural Trace */}
            <div className="group">
              <div className="hover-card oklab-border rounded-xl bg-cursor-light p-6 h-auto md:h-[360px] flex flex-col transition-all duration-500 overflow-hidden">
                <div className="mb-6">
                  <span className="font-system-micro text-system-micro text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                    AI Timeline
                  </span>
                  <h3 className="font-section-heading text-[24px] md:text-[26px] text-primary group-hover:text-error-warm transition-colors leading-tight">
                    Neural Trace
                  </h3>
                </div>
                <div className="grow bg-cursor-cream/30 rounded-lg oklab-border p-4 relative overflow-hidden group-hover:bg-cursor-cream/50 transition-colors duration-500 min-h-[100px]">
                  <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-black/2" />
                  <div className="relative z-10 w-full h-full">
                    <NeuralTrace />
                  </div>
                </div>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-6">
                  Visualize LLM thinking through time-coded steps.
                </p>
              </div>
            </div>

            {/* Mac Style Keyboard */}
            <div className="group overflow-hidden">
              <div className="hover-card oklab-border rounded-xl bg-cursor-light p-6 h-auto md:h-[360px] flex flex-col transition-all duration-500 overflow-hidden">
                <div className="mb-6 relative z-20">
                  <span className="font-system-micro text-system-micro text-on-surface-variant/50 tracking-widest uppercase mb-2 block">
                    Keyboards
                  </span>
                  <h3 className="font-section-heading text-[24px] md:text-[26px] text-primary group-hover:text-error-warm transition-colors leading-tight">
                    Mac Style Layout
                  </h3>
                </div>
                <div className="grow flex items-center justify-center rounded-lg overflow-hidden group-hover:bg-cursor-cream/30 transition-colors duration-500 min-h-[100px] relative z-10 -mx-4">
                  <div className="scale-[0.4] md:scale-[0.45] origin-center w-[780px]">
                    <MacKeyboard />
                  </div>
                </div>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-6 relative z-20">
                  Interactive keyboard with real key sounds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Minimal Stats Section ── */}
        <section className="py-16 md:py-32 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-border-fallback-10"
          >
            <div className="w-full md:w-1/3 flex flex-col items-center py-6 md:py-0">
              <span className="font-display-hero text-[72px] md:text-[84px] leading-none text-primary mb-3">43<span className="text-error-warm">+</span></span>
              <span className="font-mono-code text-[12px] uppercase tracking-[0.2em] text-on-surface-variant/50">Components</span>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center py-6 md:py-0">
              <span className="font-display-hero text-[72px] md:text-[84px] leading-none text-primary mb-3">13</span>
              <span className="font-mono-code text-[12px] uppercase tracking-[0.2em] text-on-surface-variant/50">Categories</span>
            </div>
            <div className="w-full md:w-1/3 flex flex-col items-center py-6 md:py-0">
              <span className="font-display-hero text-[72px] md:text-[84px] leading-none text-primary mb-3">1</span>
              <span className="font-mono-code text-[12px] uppercase tracking-[0.2em] text-on-surface-variant/50">npm Package</span>
            </div>
          </motion.div>
        </section>

        {/* Text CTA Section (Desktop & Mobile) */}
        <section className="py-16 md:py-24 px-4 md:px-0 border-t oklab-border border-x  flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 px-2">
            <h2 className="font-section-heading text-[32px] md:text-section-heading text-primary mb-4 md:mb-6 leading-tight">
              Built for the era of AI.
            </h2>
            <p className="font-editorial-body text-lg md:text-editorial-body text-on-surface-variant leading-relaxed">
              Components shouldn't just be pretty. They should be aware. Our
              library is built with semantic structures that AI agents can
              navigate, understand, and manipulate with ease.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-2 flex flex-col gap-4">
            <Link to="/components" className="w-full">
              <button className="w-full bg-surface-300 text-primary py-4 md:py-5 rounded-lg font-button-label text-sm uppercase tracking-widest hover:text-error-warm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 border border-oklab-10 shadow-sm hover:shadow-md">
                Browse Library{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </Link>

            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-full">
              <button className="w-full bg-transparent text-on-surface-variant py-4 md:py-5 rounded-lg font-button-label text-sm uppercase tracking-widest hover:text-primary transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 border border-border-fallback-10 hover:border-border-fallback-30">
                View on GitHub{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </a>

            <div className="flex flex-col gap-2 mt-4 px-2">
              {[
                "MIT Licensed",
                "Open Source",
                "npm Package Available",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 text-on-surface-variant/60">
                  <Check size={14} className="opacity-70" />
                  <span className="font-mono-code text-[12px] uppercase tracking-wider">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
