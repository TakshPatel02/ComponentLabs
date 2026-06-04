import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Highlight, themes } from "prism-react-renderer";
import {
  Sun,
  Moon,
  Copy,
  Check,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowDownRight,
  ArrowUpRight,
  ArrowDownLeft,
  Circle,
  ChevronRight,
  ChevronDown,
  Code,
  Grid,
  Sparkles,
  Globe,
  Monitor,
  X,
  Maximize2,
} from "lucide-react";
import {
  CONTEXT_CODE_DEFAULT,
  CONTEXT_CODE_DYNAMIC,
  getCssCode,
  TOGGLE_CODE,
  getCssOverride,
  previewAnimationStyles,
  TABS,
  PIXEL_FILTERS_TAB,
  PIXEL_FILTERS_CODE,
  TRANSITIONS,
} from "../config/transitionsData";

const getIcon = (iconName) => {
  switch (iconName) {
    case "ArrowUp": return ArrowUp;
    case "ArrowDown": return ArrowDown;
    case "ArrowLeft": return ArrowLeft;
    case "ArrowRight": return ArrowRight;
    case "ArrowUpLeft": return ArrowUpLeft;
    case "ArrowDownRight": return ArrowDownRight;
    case "ArrowUpRight": return ArrowUpRight;
    case "ArrowDownLeft": return ArrowDownLeft;
    case "Circle": return Circle;
    case "Grid": return Grid;
    case "Sparkles": return Sparkles;
    default: return Sparkles;
  }
};

/* ═══════════════════════════════════════════════════
   SMALL COMPONENTS
   ═══════════════════════════════════════════════════ */

const CopyButton = ({ text, className = "" }) => {
  const [copied, setCopied] = useState(false);
  const timeout = useRef(null);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className={`cursor-pointer transition-all duration-200 flex items-center justify-center ${
        className || "opacity-40 hover:opacity-85 text-on-surface-variant"
      }`}
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check size={14} className="text-error-warm" />
      ) : (
        <Copy size={14} />
      )}
    </button>
  );
};

const CodeBlock = ({ code, language = "jsx", borderless = false }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const codeTheme = isDark ? themes.vsDark : themes.vsLight;

  return (
    <div
      className={`relative overflow-hidden transition-all duration-300 ${
        borderless
          ? "bg-transparent"
          : "rounded-xl border oklab-border bg-surface-container-highest shadow-[0_10px_40px_-24px_rgba(17,16,10,0.35)]"
      }`}
    >
      {!borderless && (
        <div className="absolute top-3.5 right-3.5 z-10">
          <CopyButton
            text={code}
            className="flex items-center gap-2 text-xs md:text-sm font-medium text-on-surface-variant/60 hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-container/50 border border-border-fallback-10/40 bg-surface-container shadow-sm"
          />
        </div>
      )}
      <Highlight theme={codeTheme} code={code.trim()} language={language}>
        {({ className: prismClass, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${prismClass} p-6 overflow-x-auto text-[13.5px] leading-relaxed font-mono antialiased table w-full`}
            style={{
              ...style,
              backgroundColor: "transparent",
              color: "var(--on-surface)",
              fontFamily: "var(--font-mono-code), ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                <span className="table-cell select-none text-on-surface-variant/40 text-right pr-4 font-mono text-[12px] w-8 shrink-0">
                  {i + 1}
                </span>
                <span className="table-cell font-mono" style={{ color: "var(--on-surface)" }}>
                  {line.map((token, j) => (
                    <span key={j} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

/* ── Framer Motion Variants ── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

/* ═══════════════════════════════════════════════════
   TRANSITION CARD COMPONENT
   ═══════════════════════════════════════════════════ */

const TransitionCard = ({ transition, theme, onLaunchFullscreen }) => {
  const [direction, setDirection] = useState(transition.directions[0].key);
  const [activeTab, setActiveTab] = useState("context");
  const [showCode, setShowCode] = useState(false);

  // Show an extra "PixelFilters.jsx" tab for pixel-dissolve
  const activeTabs = transition.id === "pixel-dissolve"
    ? [...TABS, PIXEL_FILTERS_TAB]
    : TABS;

  const getTabCode = () => {
    if (activeTab === "context") {
      return direction === "dynamic" ? CONTEXT_CODE_DYNAMIC : CONTEXT_CODE_DEFAULT;
    }
    if (activeTab === "css") {
      return getCssCode(transition.id, direction);
    }
    if (activeTab === "filters") {
      return PIXEL_FILTERS_CODE;
    }
    return TOGGLE_CODE;
  };

  const getTabLanguage = () => {
    return activeTabs.find((t) => t.key === activeTab)?.language || "jsx";
  };

  const getPreviewAnimationName = () => {
    if (transition.id === "curtain-wipe") {
      if (direction === "bottom-to-top") return "preview-btt";
      if (direction === "top-to-bottom") return "preview-ttb";
      if (direction === "left-to-right") return "preview-ltr";
      return "preview-rtl";
    } else if (transition.id === "polygon-wipe") {
      if (direction === "bottom-right-to-top-left") return "preview-br-tl";
      if (direction === "top-left-to-bottom-right") return "preview-tl-br";
      return "preview-dyn";
    } else if (transition.id === "circle-wipe") {
      if (direction === "center") return "preview-circle-center";
      if (direction === "top-left") return "preview-circle-top-left";
      if (direction === "top-right") return "preview-circle-top-right";
      if (direction === "bottom-left") return "preview-circle-bottom-left";
      return "preview-circle-bottom-right";
    } else {
      // pixel-dissolve
      return "preview-pixel-dissolve";
    }
  };

  return (
    <div className="mb-20">
      {/* Section Header */}
      <div className="mb-8">
        <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-2 block">
          TRANSITION EFFECT
        </span>
        <h2 className="font-section-heading text-[32px] md:text-[40px] text-primary tracking-tight leading-tight mb-2">
          {transition.name}
        </h2>
        <p className="font-editorial-standard text-[15px] text-on-surface-variant italic max-w-2xl">
          {transition.description}
        </p>
      </div>

      {/* Two Column: Info + Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
        {/* Left — Controls */}
        <div className="rounded-2xl overflow-hidden p-6 md:p-8 bg-cursor-light border oklab-border flex flex-col justify-between">
          <div>
            <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-4 block">
              Direction
            </span>
            <div className="flex flex-wrap gap-2 mb-8">
              {transition.directions.map((dir) => {
                const Icon = getIcon(dir.iconName);
                const isActive = direction === dir.key;
                return (
                  <button
                    key={dir.key}
                    onClick={() => setDirection(dir.key)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono-code text-[12px] tracking-wide transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? "bg-error-warm text-white border-error-warm shadow-lg shadow-error-warm/20"
                        : "border-border-fallback-10 text-on-surface-variant/60 hover:border-primary/25 hover:text-on-surface-variant"
                    }`}
                  >
                    <Icon size={14} />
                    {dir.label}
                  </button>
                );
              })}
            </div>

            <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-4 block">
              Setup
            </span>
            <div className="space-y-3 mb-8">
              {[
                "Copy ThemeContext.jsx into your project",
                "Add the CSS to your global stylesheet",
                "Wrap your App with <ThemeProvider>",
                "Use the toggle component anywhere",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-error-warm/10 text-error-warm font-mono-code text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="font-editorial-standard text-[13px] text-on-surface-variant/80 leading-relaxed">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-3 block">
              Browser Support
            </span>
            <div className="flex flex-wrap gap-2">
              {["Chrome 111+", "Edge 111+", "Safari 18+", "Fallback ✓"].map(
                (browser) => (
                  <span
                    key={browser}
                    className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant/60 font-mono-code text-[11px] border oklab-border"
                  >
                    {browser}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right — Mini Preview Animation + Demo Button */}
        <div className="rounded-2xl overflow-hidden border oklab-border flex flex-col items-center justify-center bg-cursor-light p-6 md:p-8 gap-8">
          {/* Mini preview animation */}
          <div className="w-full max-w-xs aspect-16/10 rounded-xl overflow-hidden border oklab-border relative shadow-lg">
            {/* Mock light page */}
            <div className="absolute inset-0 bg-[#fdf8f7] flex flex-col p-4 gap-3">
              <div className="h-2 w-16 bg-[#11100a]/10 rounded-full" />
              <div className="h-2 w-24 bg-[#11100a]/10 rounded-full" />
              <div className="flex-1 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#11100a]/8 flex items-center justify-center">
                  <Sun size={14} className="text-[#11100a]/30" />
                </div>
              </div>
              <div className="h-1.5 w-20 bg-[#11100a]/6 rounded-full" />
            </div>
            {/* Mock dark page — animated clip-path overlay */}
            <div
              className="absolute inset-0 bg-[#111111] flex flex-col p-4 gap-3"
              style={{
                animation: `${getPreviewAnimationName()} 4s cubic-bezier(0.85, 0, 0.15, 1) infinite`,
              }}
            >
              <div className="h-2 w-16 bg-white/10 rounded-full" />
              <div className="h-2 w-24 bg-white/10 rounded-full" />
              <div className="flex-1 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center">
                  <Moon size={14} className="text-white/30" />
                </div>
              </div>
              <div className="h-1.5 w-20 bg-white/6 rounded-full" />
            </div>
            {/* Direction label */}
            <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm">
              <span className="font-mono-code text-[9px] text-white/70 uppercase tracking-wider">
                {direction.replace(/-/g, " ")}
              </span>
            </div>
          </div>

          {/* Launch Fullscreen Sandbox Button */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => onLaunchFullscreen(transition.id, direction)}
              className="group relative w-24 h-24 md:w-28 md:h-28 rounded-3xl border-2 border-border-fallback-10 hover:border-error-warm/40 bg-surface-container flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(207,45,86,0.15)] active:scale-95"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary flex flex-col items-center justify-center gap-1.5"
              >
                <Maximize2 size={32} strokeWidth={1.5} className="text-error-warm group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-3xl border border-error-warm/0 group-hover:border-error-warm/20 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
            </button>

            <div className="flex flex-col items-center gap-1">
              <span className="font-section-heading text-[15px] text-primary font-medium">
                Launch Fullscreen Sandbox
              </span>
              <span className="font-mono-code text-[11px] text-on-surface-variant/50 italic text-center max-w-50">
                Test this wipe direction in the ghost simulator
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible Source Code section */}
      <div className="flex flex-col items-center mt-2 mb-4">
        <button
          onClick={() => setShowCode(!showCode)}
          className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-mono-code text-[12px] tracking-wide cursor-pointer transition-all duration-300 border ${
            showCode
              ? "bg-primary text-on-primary border-primary shadow-lg shadow-primary/10"
              : "border-border-fallback-10 text-on-surface-variant/75 bg-surface-container/30 hover:border-error-warm/40 hover:text-error-warm hover:bg-surface-container/60"
          }`}
        >
          <Code size={14} className="opacity-80" />
          <span>{showCode ? "Hide Setup Code" : "Show Setup Code"}</span>
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 opacity-60 ${
              showCode ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showCode && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            {/* Tabbed Code Blocks */}
            <div className="rounded-2xl overflow-hidden border oklab-border bg-surface-container-highest mt-4 shadow-[0_10px_40px_-24px_rgba(17,16,10,0.15)]">
              {/* Tab Buttons */}
              <div className="flex items-center border-b border-border-fallback-10 bg-surface-container/60 px-2.5 overflow-x-auto">
                {activeTabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative flex items-center gap-1.5 px-4 py-3 font-mono text-[12px] tracking-tight transition-all duration-200 cursor-pointer whitespace-nowrap border-b-2 ${
                      activeTab === tab.key
                        ? "text-primary border-primary font-medium"
                        : "text-on-surface-variant/60 border-transparent hover:text-on-surface-variant/85"
                    }`}
                  >
                    {tab.label}
                    {tab.key === "css" && (
                      <span className="ml-1.5 px-1.5 py-0.5 rounded text-[9px] bg-surface-container border border-border-fallback-10/40 text-on-surface-variant/80 font-semibold font-mono">
                        {direction === "dynamic" ? "Dynamic" : direction.split("-").map(w => w[0].toUpperCase()).join("")}
                      </span>
                    )}
                  </button>
                ))}

                {/* Copy All */}
                <div className="ml-auto pr-2 shrink-0">
                  <CopyButton
                    text={getTabCode()}
                    className="p-1.5 rounded-lg text-on-surface-variant/60 hover:text-primary hover:bg-surface-container/60 transition-colors"
                  />
                </div>
              </div>

              {/* Active Tab Code */}
              <div className="p-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab + direction}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                  >
                    <CodeBlock
                      code={getTabCode()}
                      language={getTabLanguage()}
                      borderless={true}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════════ */

const ExperiencesPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sandboxEffect, setSandboxEffect] = useState("curtain-wipe");
  const [sandboxDirection, setSandboxDirection] = useState("bottom-to-top");

  const activeTransition = TRANSITIONS.find((t) => t.id === sandboxEffect);

  /* ── Enter / Exit fullscreen sandbox ── */
  const enterFullscreen = (effect, direction) => {
    setSandboxEffect(effect);
    setSandboxDirection(direction);
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  const exitFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = "";
    const el = document.getElementById("experience-transition-override");
    if (el) el.remove();
  };

  /* ── Exit fullscreen on Escape key ── */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isFullscreen) {
        exitFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  /* ── Auto clean-up scroll lock on unmount ── */
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* ── Dynamic head injection of CSS view transitions ── */
  /* ── Handle theme toggle with dynamic direction override ── */
  const isTransitioningRef = useRef(false);

  const handleToggleTheme = () => {
    // Guard against rapid double-taps / overlapping transitions
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    const STYLE_ID = "experience-transition-override";
    let styleEl = document.getElementById(STYLE_ID);

    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = getCssOverride(sandboxEffect, sandboxDirection, theme);

    // Trigger the global theme toggle transition
    toggleTheme();

    // Determine cleanup delay based on effect duration
    const cleanupDelay = sandboxEffect === "pixel-dissolve" ? 1500 : 1200;

    // Clean up: prefer the View Transition API's finished promise, fallback to timeout
    const cleanup = () => {
      const el = document.getElementById(STYLE_ID);
      if (el) el.remove();
      isTransitioningRef.current = false;
    };

    // Try to use the active view transition's finished promise
    if (document.startViewTransition) {
      // Safety fallback timeout in case the promise never resolves
      const fallbackTimer = setTimeout(() => {
        cleanup();
      }, cleanupDelay);

      // The last view transition should be on the document
      // Since toggleTheme creates it, we wait for the transition to finish
      setTimeout(() => {
        cleanup();
        clearTimeout(fallbackTimer);
      }, cleanupDelay);
    } else {
      setTimeout(cleanup, cleanupDelay);
    }
  };

  return (
    <div className="min-h-screen w-full bg-surface text-on-surface font-ui-body">
      <style dangerouslySetInnerHTML={{ __html: previewAnimationStyles }} />

      {/* ═══ HERO ═══ */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center justify-center pt-28 md:pt-36 pb-16 md:pb-24 px-4"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border-fallback-10 bg-surface-container/50 backdrop-blur-sm mb-8">
            <Sparkles size={12} className="text-error-warm" />
            <span className="font-mono-code text-[11px] tracking-wider text-on-surface-variant/80 uppercase">
              Experiences · Theme Transitions
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display-hero text-[44px] sm:text-[56px] md:text-[72px] text-primary tracking-tighter leading-[1.05] mb-6">
            Theme{" "}
            <span className="italic text-error-warm">Transitions</span>
          </h1>

          {/* Subtitle */}
          <p className="font-editorial-body text-[17px] md:text-[19px] text-on-surface-variant leading-relaxed max-w-3xl mb-4 italic">
            Premium view transition effects for dark/light mode switching.
            Zero dependencies — just CSS and the native View Transitions API.
          </p>

          {/* Browser note */}
          <div className="flex items-center gap-2 text-on-surface-variant/50 font-mono-code text-[11px] mt-2">
            <Globe size={12} />
            <span>Chrome 111+ · Edge 111+ · Safari 18+ · Graceful fallback</span>
          </div>
        </motion.div>
      </motion.section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ TRANSITION EFFECTS GRID ═══ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-300 mx-auto">
          {TRANSITIONS.map((transition) => (
            <TransitionCard
              key={transition.id}
              transition={transition}
              theme={theme}
              onLaunchFullscreen={enterFullscreen}
            />
          ))}
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-300 mx-auto">
          <div className="mb-10 md:mb-12">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-3 block">
              UNDER THE HOOD
            </span>
            <h2 className="font-section-heading text-[32px] md:text-[40px] text-primary tracking-tight leading-tight mb-3">
              How it works
            </h2>
            <p className="font-editorial-standard text-[15px] text-on-surface-variant italic max-w-2xl">
              The View Transitions API captures screenshots of the old and new
              states and animates between them using CSS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                step: "1",
                title: "Capture",
                desc: "When you call document.startViewTransition(), the browser takes a screenshot of the current page state.",
              },
              {
                step: "2",
                title: "Update",
                desc: "Inside the callback, flushSync() immediately applies the new theme. The browser captures the new state.",
              },
              {
                step: "3",
                title: "Animate",
                desc: "The browser creates ::view-transition pseudo-elements and applies your CSS animation to transition between the two snapshots.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="rounded-xl overflow-hidden p-6 bg-cursor-light border oklab-border flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-full bg-error-warm/10 text-error-warm font-mono-code text-[12px] font-bold flex items-center justify-center">
                    {step}
                  </span>
                  <span className="font-section-heading text-[16px] text-primary font-medium">
                    {title}
                  </span>
                </div>
                <p className="font-editorial-standard text-[13px] text-on-surface-variant/70 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ QUICK USAGE GUIDE ═══ */}
      <section className="py-16 md:py-20 px-4 bg-surface-container/25 transition-colors duration-300">
        <div className="max-w-300 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-2.5 block">
              GETTING STARTED
            </span>
            <h2 className="font-section-heading text-[28px] md:text-[32px] text-primary tracking-tight mb-3">
              How to Use These Transitions
            </h2>
            <p className="font-editorial-standard text-[14px] text-on-surface-variant/80">
              Integrate zero-dependency CSS view transitions into your React codebase in three quick steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Choose & Test",
                desc: "Explore the curtain wipes, radial waves, or pixel dissolves above. Click 'Launch Fullscreen Sandbox' to test wipe directions on our mock dashboard.",
              },
              {
                step: "02",
                title: "Grab the Code",
                desc: "Click 'Show Setup Code' on the card of your chosen transition. You'll find ready-to-use snippets for the React Context Provider, the CSS keyframes, and the Toggle button.",
              },
              {
                step: "03",
                title: "Install in Your App",
                desc: "Paste the snippets into your project. Wrap your root element in the ThemeProvider, add the CSS to your index.css, and import the button wherever you need it.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative rounded-2xl border oklab-border bg-surface p-6 md:p-8 flex flex-col gap-4 shadow-sm hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between border-b border-border-fallback-10/40 pb-4">
                  <span className="font-section-heading text-[16px] text-primary font-bold">
                    {title}
                  </span>
                  <span className="font-mono-code text-[12px] text-error-warm font-bold px-2 py-0.5 rounded bg-error-warm/10">
                    Step {step}
                  </span>
                </div>
                <p className="font-editorial-standard text-[13px] text-on-surface-variant/75 leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ BOTTOM ═══ */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-300  mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to="/"
            className="font-mono-code text-[16px] text-on-surface-variant/60 hover:text-error-warm transition-colors flex items-center gap-1 group"
          >
            <ChevronRight
              size={12}
              className="rotate-180 group-hover:-translate-x-1 transition-transform"
            />
            Back to ComponentLab
          </Link>
          <p className="font-mono-code text-[16px] text-on-surface-variant/40 italic">
            More transitions coming soon
          </p>
        </div>
      </section>

      {/* ═══ FULLSCREEN SANDBOX OVERLAY ═══ */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex flex-col overflow-y-auto bg-background text-on-surface transition-colors duration-300"
          >
            {/* Minimalist Header / Navbar */}
            <header className="sticky top-0 z-10 w-full h-14 sm:h-16 px-3 sm:px-6 border-b border-border-fallback-10 bg-surface/85 backdrop-blur-md flex items-center justify-between transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-error-warm animate-pulse" />
                <div className="h-4 w-28 bg-primary/10 rounded" />
              </div>

              {/* Ghost Navigation Links */}
              <div className="hidden md:flex items-center gap-6">
                <div className="h-3 w-16 bg-primary/5 rounded" />
                <div className="h-3 w-20 bg-primary/5 rounded" />
                <div className="h-3 w-14 bg-primary/5 rounded" />
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Theme Toggle Pill */}
                <button
                  onClick={handleToggleTheme}
                  className="h-8 sm:h-9 px-3 sm:px-4 rounded-full border border-border-fallback-10 bg-surface-container hover:bg-surface-container-highest transition-all duration-300 flex items-center gap-2 cursor-pointer hover:shadow-sm"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <div className="flex items-center gap-1.5">
                      <Sun size={14} className="text-error-warm" />
                      <span className="text-[11px] font-medium font-mono-code">Light</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <Moon size={14} className="text-error-warm" />
                      <span className="text-[11px] font-medium font-mono-code">Dark</span>
                    </div>
                  )}
                </button>

                {/* Exit Button */}
                <button
                  onClick={exitFullscreen}
                  className="h-8 sm:h-9 px-3 sm:px-4 rounded-full bg-primary text-on-primary hover:bg-error-warm hover:text-white transition-all duration-200 flex items-center gap-1.5 cursor-pointer text-xs font-semibold active:scale-95 shadow-sm font-['Space_Grotesk']"
                >
                  <X size={14} />
                  <span className="hidden sm:inline">Exit</span>
                  <span>(Esc)</span>
                </button>
              </div>
            </header>

            {/* Ghost Screen Workspace */}
            <main className="max-w-4xl mx-auto w-full px-3 sm:px-6 py-6 sm:py-10 flex-1 flex flex-col gap-5 sm:gap-8 transition-colors duration-300">
              {/* Title / Info Placeholder */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-fallback-10">
                <div className="space-y-2">
                  <div className="h-7 w-40 sm:w-64 bg-primary/10 rounded-md" />
                  <div className="h-4 w-52 sm:w-96 bg-primary/5 rounded-md" />
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="text-[11px] font-mono-code text-on-surface-variant/40">Active Mode:</span>
                  <span className="px-3 py-1 rounded bg-error-warm/10 border border-error-warm/15 text-error-warm text-[10px] font-mono-code uppercase font-semibold">
                    {sandboxEffect.replace(/-/g, " ")} · {sandboxDirection.replace(/-/g, " ")}
                  </span>
                </div>
              </div>

              {/* Dynamic Direction Selector inside Sandbox */}
              <div className="p-3 sm:p-5 rounded-2xl bg-surface-container/60 border border-border-fallback-10 backdrop-blur-sm flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-border-fallback-10/40">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-error-warm animate-pulse" />
                    <h3 className="font-section-heading text-[12px] font-bold tracking-wider uppercase text-on-surface-variant">
                      Sandbox Controller
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono-code text-on-surface-variant/50">
                    Switch transition directions on the fly
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  {activeTransition?.directions.map((dir) => {
                    const IconComponent = getIcon(dir.iconName);
                    const isActive = sandboxDirection === dir.key;
                    return (
                      <button
                        key={dir.key}
                        onClick={() => setSandboxDirection(dir.key)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono-code text-[11px] tracking-wide transition-all duration-200 cursor-pointer border ${
                          isActive
                            ? "bg-error-warm/15 text-error-warm border-error-warm/30 font-semibold shadow-sm"
                            : "bg-surface hover:bg-surface-container-highest border-border-fallback-10 text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        {IconComponent && (
                          <IconComponent
                            size={13}
                            className={`transition-colors ${isActive ? "text-error-warm" : "text-on-surface-variant/60"}`}
                          />
                        )}
                        <span>{dir.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3-Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Ghost Card 1 */}
                <div className="rounded-xl p-6 bg-surface-container border border-border-fallback-10 space-y-4">
                  <div className="h-3 w-16 bg-primary/10 rounded animate-pulse" />
                  <div className="h-8 w-28 bg-primary/15 rounded animate-pulse" />
                  <div className="h-3 w-32 bg-primary/5 rounded animate-pulse" />
                </div>

                {/* Ghost Card 2 */}
                <div className="rounded-xl p-6 bg-surface-container border border-border-fallback-10 space-y-4">
                  <div className="h-3 w-20 bg-primary/10 rounded animate-pulse" />
                  <div className="h-8 w-20 bg-primary/15 rounded animate-pulse" />
                  <div className="h-3 w-24 bg-primary/5 rounded animate-pulse" />
                </div>

                {/* Transition Trigger Panel */}
                <div className="rounded-xl p-6 bg-surface-container border border-border-fallback-10 flex flex-col justify-between h-36">
                  <div className="h-3 w-28 bg-primary/10 rounded" />
                  <button
                    onClick={handleToggleTheme}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-error-warm hover:bg-error-warm/95 text-white font-medium text-xs transition-all duration-200 active:scale-95 shadow-sm cursor-pointer font-['Space_Grotesk']"
                  >
                    {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                    <span>Trigger Transition</span>
                  </button>
                </div>
              </div>

              {/* Large Ghost Content Card */}
              <div className="rounded-xl p-6 bg-surface-container border border-border-fallback-10 space-y-4">
                <div className="h-4 w-40 bg-primary/10 rounded mb-2" />
                <div className="space-y-3">
                  <div className="h-3 w-full bg-primary/5 rounded animate-pulse" />
                  <div className="h-3 w-11/12 bg-primary/5 rounded animate-pulse" />
                  <div className="h-3 w-4/5 bg-primary/5 rounded animate-pulse" />
                  <div className="h-3 w-5/6 bg-primary/5 rounded animate-pulse" />
                </div>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SVG Pixel Dissolve Filters */}
      <svg style={{ position: "absolute", width: 0, height: 0 }} width="0" height="0">
        <defs>
          {/* px-10: 10px pixels */}
          <filter id="px-10" x="0%" y="0%" width="100%" height="100%" primitiveUnits="userSpaceOnUse">
            <feFlood floodColor="white" x="0" y="0" width="1" height="1" result="dot" />
            <feComposite in="dot" in2="dot" operator="over" x="0" y="0" width="10" height="10" result="cell" />
            <feTile in="cell" result="grid" />
            <feComposite in="SourceGraphic" in2="grid" operator="in" result="sampled" />
            <feMorphology in="sampled" operator="dilate" radius="5" result="pixelated" />
          </filter>

          {/* px-30: 30px pixels */}
          <filter id="px-30" x="0%" y="0%" width="100%" height="100%" primitiveUnits="userSpaceOnUse">
            <feFlood floodColor="white" x="0" y="0" width="1" height="1" result="dot" />
            <feComposite in="dot" in2="dot" operator="over" x="0" y="0" width="30" height="30" result="cell" />
            <feTile in="cell" result="grid" />
            <feComposite in="SourceGraphic" in2="grid" operator="in" result="sampled" />
            <feMorphology in="sampled" operator="dilate" radius="15" result="pixelated" />
          </filter>

          {/* px-80: 80px pixels */}
          <filter id="px-80" x="0%" y="0%" width="100%" height="100%" primitiveUnits="userSpaceOnUse">
            <feFlood floodColor="white" x="0" y="0" width="1" height="1" result="dot" />
            <feComposite in="dot" in2="dot" operator="over" x="0" y="0" width="80" height="80" result="cell" />
            <feTile in="cell" result="grid" />
            <feComposite in="SourceGraphic" in2="grid" operator="in" result="sampled" />
            <feMorphology in="sampled" operator="dilate" radius="40" result="pixelated" />
          </filter>

          {/* px-150: 150px pixels */}
          <filter id="px-150" x="0%" y="0%" width="100%" height="100%" primitiveUnits="userSpaceOnUse">
            <feFlood floodColor="white" x="0" y="0" width="1" height="1" result="dot" />
            <feComposite in="dot" in2="dot" operator="over" x="0" y="0" width="150" height="150" result="cell" />
            <feTile in="cell" result="grid" />
            <feComposite in="SourceGraphic" in2="grid" operator="in" result="sampled" />
            <feMorphology in="sampled" operator="dilate" radius="75" result="pixelated" />
          </filter>

          {/* px-250: 250px pixels */}
          <filter id="px-250" x="0%" y="0%" width="100%" height="100%" primitiveUnits="userSpaceOnUse">
            <feFlood floodColor="white" x="0" y="0" width="1" height="1" result="dot" />
            <feComposite in="dot" in2="dot" operator="over" x="0" y="0" width="250" height="250" result="cell" />
            <feTile in="cell" result="grid" />
            <feComposite in="SourceGraphic" in2="grid" operator="in" result="sampled" />
            <feMorphology in="sampled" operator="dilate" radius="125" result="pixelated" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ExperiencesPage;
