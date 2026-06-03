import React, { useState, useEffect, useRef } from "react";
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
  TRANSITIONS,
} from "../config/transitionsData";

/* ═══════════════════════════════════════════════════
   SMALL COMPONENTS
   ═══════════════════════════════════════════════════ */

const CopyButton = ({ text }) => {
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
      className="cursor-pointer transition-all duration-200"
      aria-label="Copy to clipboard"
    >
      {copied ? (
        <Check size={14} className="text-error-warm" />
      ) : (
        <Copy
          size={14}
          className="opacity-40 hover:opacity-80 text-on-surface-variant"
        />
      )}
    </button>
  );
};

const CodeBlock = ({ code, language = "jsx" }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div
      className={`relative rounded-xl overflow-hidden border ${
        isDark ? "bg-[#0d0d0d] border-white/10" : "bg-[#1a1a1a] border-black/10"
      }`}
    >
      <div className="absolute top-3 right-3 z-10">
        <CopyButton text={code} />
      </div>
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className="p-5 overflow-x-auto text-[13px] leading-relaxed font-mono"
            style={{ ...style, background: "transparent" }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, j) => (
                  <span key={j} {...getTokenProps({ token })} />
                ))}
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
      case "Sparkles": return Sparkles;
      default: return Sparkles;
    }
  };

  const getTabCode = () => {
    if (activeTab === "context") {
      return direction === "dynamic" ? CONTEXT_CODE_DYNAMIC : CONTEXT_CODE_DEFAULT;
    }
    if (activeTab === "css") {
      return getCssCode(transition.id, direction);
    }
    return TOGGLE_CODE;
  };

  const getTabLanguage = () => {
    return TABS.find((t) => t.key === activeTab)?.language || "jsx";
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
    } else {
      // circle-wipe
      if (direction === "center") return "preview-circle-center";
      if (direction === "top-left") return "preview-circle-top-left";
      if (direction === "top-right") return "preview-circle-top-right";
      if (direction === "bottom-left") return "preview-circle-bottom-left";
      return "preview-circle-bottom-right";
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
          <div className="w-full max-w-xs aspect-[16/10] rounded-xl overflow-hidden border oklab-border relative shadow-lg">
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

      {/* Tabbed Code Blocks */}
      <div className="rounded-2xl overflow-hidden border oklab-border bg-cursor-light">
        {/* Tab Buttons */}
        <div className="flex items-center border-b border-border-fallback-10 bg-surface-container/40 px-2 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative flex items-center gap-2 px-4 py-3 font-mono-code text-[12px] tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap border-b-2 ${
                activeTab === tab.key
                  ? "text-error-warm border-error-warm font-semibold"
                  : "text-on-surface-variant/50 border-transparent hover:text-on-surface-variant/80"
              }`}
            >
              <Monitor size={12} />
              {tab.label}
              {tab.key === "css" && (
                <span className="ml-1 px-1.5 py-0.5 rounded text-[9px] bg-error-warm/10 text-error-warm font-bold uppercase font-mono-code">
                  {direction === "dynamic" ? "Dynamic" : direction.split("-").map(w => w[0].toUpperCase()).join("")}
                </span>
              )}
            </button>
          ))}

          {/* Copy All */}
          <div className="ml-auto pr-3 shrink-0">
            <CopyButton text={getTabCode()} />
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
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
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
  useEffect(() => {
    const STYLE_ID = "experience-transition-override";
    let styleEl = document.getElementById(STYLE_ID);

    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = getCssOverride(sandboxEffect, sandboxDirection, theme);

    return () => {
      const el = document.getElementById(STYLE_ID);
      if (el) el.remove();
    };
  }, [sandboxEffect, sandboxDirection, theme]);

  /* ── Handle theme toggle with dynamic direction override ── */
  const handleToggleTheme = () => {
    const styleEl = document.getElementById("experience-transition-override");
    if (styleEl) {
      styleEl.textContent = getCssOverride(sandboxEffect, sandboxDirection, theme);
    }
    toggleTheme();
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

      {/* ═══ BOTTOM ═══ */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-300 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to="/"
            className="font-mono-code text-[12px] text-on-surface-variant/60 hover:text-error-warm transition-colors flex items-center gap-1 group"
          >
            <ChevronRight
              size={12}
              className="rotate-180 group-hover:-translate-x-1 transition-transform"
            />
            Back to ComponentLab
          </Link>
          <p className="font-mono-code text-[12px] text-on-surface-variant/40 italic">
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
            <header className="sticky top-0 z-10 w-full h-16 px-6 border-b border-border-fallback-10 bg-surface/85 backdrop-blur-md flex items-center justify-between transition-colors duration-300">
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
              <div className="flex items-center gap-3">
                {/* Theme Toggle Pill */}
                <button
                  onClick={handleToggleTheme}
                  className="h-9 px-4 rounded-full border border-border-fallback-10 bg-surface-container hover:bg-surface-container-highest transition-all duration-300 flex items-center gap-2 cursor-pointer hover:shadow-sm"
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
                  className="h-9 px-4 rounded-full bg-primary text-on-primary hover:bg-error-warm hover:text-white transition-all duration-200 flex items-center gap-1.5 cursor-pointer text-xs font-semibold active:scale-95 shadow-sm font-['Space_Grotesk']"
                >
                  <X size={14} />
                  <span>Exit (Esc)</span>
                </button>
              </div>
            </header>

            {/* Ghost Screen Workspace */}
            <main className="max-w-4xl mx-auto w-full px-6 py-10 flex-1 flex flex-col gap-8 transition-colors duration-300">
              {/* Title / Info Placeholder */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-fallback-10">
                <div className="space-y-2">
                  <div className="h-7 w-64 bg-primary/10 rounded-md" />
                  <div className="h-4 w-96 bg-primary/5 rounded-md" />
                </div>
                <div className="flex items-center gap-2.5 shrink-0">
                  <span className="text-[11px] font-mono-code text-on-surface-variant/40">Active Mode:</span>
                  <span className="px-3 py-1 rounded bg-error-warm/10 border border-error-warm/15 text-error-warm text-[10px] font-mono-code uppercase font-semibold">
                    {sandboxEffect.replace(/-/g, " ")} · {sandboxDirection.replace(/-/g, " ")}
                  </span>
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
    </div>
  );
};

export default ExperiencesPage;
