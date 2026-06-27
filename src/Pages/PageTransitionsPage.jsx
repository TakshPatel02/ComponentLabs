import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Highlight, themes } from "prism-react-renderer";
import {
  Copy,
  Check,
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  Code,
  Sparkles,
  X,
  Maximize2,
  Layers,
  MoveRight,
  PenTool,
} from "lucide-react";
import {
  PAGE_TRANSITIONS,
  getPageTransitionCode,
  pageTransitionPreviewStyles,
} from "../config/pageTransitionsData";

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
        {({
          className: prismClass,
          style,
          tokens,
          getLineProps,
          getTokenProps,
        }) => (
          <pre
            className={`${prismClass} p-6 overflow-x-auto text-[13.5px] leading-relaxed font-mono antialiased table w-full`}
            style={{
              ...style,
              backgroundColor: "transparent",
              color: "var(--on-surface)",
              fontFamily:
                "var(--font-mono-code), ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                <span className="table-cell select-none text-on-surface-variant/40 text-right pr-4 font-mono text-[12px] w-8 shrink-0">
                  {i + 1}
                </span>
                <span
                  className="table-cell font-mono"
                  style={{ color: "var(--on-surface)" }}
                >
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

const getTransitionIcon = (id) => {
  switch (id) {
    case "slide-scale":
      return MoveRight;
    case "strip-wipe":
      return Layers;
    case "svg-wave-draw":
      return PenTool;
    default:
      return Sparkles;
  }
};

/* ═══════════════════════════════════════════════════
   MINI PREVIEW COMPONENTS
   ═══════════════════════════════════════════════════ */

const SlideScalePreview = () => (
  <div className="w-full aspect-16/10 rounded-xl overflow-hidden border border-border-fallback-10 relative shadow-lg bg-[#171717]">
    {/* Old page (stays behind) */}
    <div className="absolute inset-0 bg-[#f5f5f5] flex flex-col p-3 gap-2">
      <div className="h-1.5 w-12 bg-[#11100a]/10 rounded-full" />
      <div className="h-1.5 w-20 bg-[#11100a]/8 rounded-full" />
      <div className="flex-1 flex items-center justify-center">
        <span className="text-[9px] text-[#11100a]/20 font-mono tracking-wider">
          PAGE A
        </span>
      </div>
    </div>
    {/* New page sliding in */}
    <div
      className="absolute inset-0 bg-white flex flex-col p-3 gap-2"
      style={{
        animation:
          "preview-slide-scale 4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        boxShadow: "0 10px 30px -5px rgba(0,0,0,0.3)",
      }}
    >
      <div className="h-1.5 w-12 bg-indigo-500/20 rounded-full" />
      <div className="h-1.5 w-20 bg-indigo-500/15 rounded-full" />
      <div className="flex-1 flex items-center justify-center">
        <span className="text-[9px] text-indigo-500/30 font-mono tracking-wider">
          PAGE B
        </span>
      </div>
    </div>
    {/* Label */}
    <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm">
      <span className="font-mono-code text-[8px] text-white/70 uppercase tracking-wider">
        Slide & Scale
      </span>
    </div>
  </div>
);

const StripWipePreview = ({ theme }) => (
  <div className="w-full aspect-16/10 rounded-xl overflow-hidden border border-border-fallback-10 relative shadow-lg bg-white">
    {/* Page content */}
    <div className="absolute inset-0 bg-white flex flex-col p-3 gap-2">
      <div className="h-1.5 w-12 bg-[#11100a]/10 rounded-full" />
      <div className="h-1.5 w-20 bg-[#11100a]/8 rounded-full" />
      <div className="flex-1 flex items-center justify-center">
        <span className="text-[9px] text-[#11100a]/20 font-mono tracking-wider">
          CONTENT
        </span>
      </div>
    </div>
    {/* Strips */}
    {["#d4d4d4", "#c4c4c4", "#b4b4b4"].map((color, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          top: `${(i * 100) / 3}%`,
          left: 0,
          width: "100%",
          height: "calc(100% / 3 + 2px)",
          backgroundColor: color,
          animation: `preview-strip-${
            i + 1
          } 4s cubic-bezier(0.65, 0, 0.35, 1) infinite`,
        }}
      />
    ))}
    {/* Label */}
    <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm z-10">
      <span className="font-mono-code text-[8px] text-white/70 uppercase tracking-wider">
        Strip Wipe
      </span>
    </div>
  </div>
);

const SVG_WAVE_PATH =
  "M13.4746 291.27C13.4746 291.27 100.646 -18.6724 255.617 16.8418C410.588 52.356 61.0296 431.197 233.017 546.326C431.659 679.299 444.494 21.0125 652.73 100.784C860.967 180.556 468.663 430.709 617.216 546.326C765.769 661.944 819.097 48.2722 988.501 120.156C1174.21 198.957 809.424 543.841 988.501 636.726C1189.37 740.915 1301.67 149.213 1301.67 149.213";

const SvgWavePreview = () => (
  <div className="w-full aspect-16/10 rounded-xl overflow-hidden border border-border-fallback-10 relative shadow-lg bg-white">
    {/* Page content */}
    <div className="absolute inset-0 bg-white flex flex-col p-3 gap-2">
      <div className="h-1.5 w-12 bg-[#11100a]/10 rounded-full" />
      <div className="h-1.5 w-20 bg-[#11100a]/8 rounded-full" />
      <div className="flex-1 flex items-center justify-center">
        <span className="text-[9px] text-[#11100a]/20 font-mono tracking-wider">
          CONTENT
        </span>
      </div>
    </div>
    {/* SVG Wave */}
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1316 664"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        transform: "scale(1.3)",
      }}
    >
      <path
        d={SVG_WAVE_PATH}
        stroke="#82A0FF"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{
          strokeDasharray: 3000,
          animation:
            "preview-svg-draw 5s cubic-bezier(0.65, 0, 0.35, 1) infinite",
        }}
      />
    </svg>
    {/* Label */}
    <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm z-10">
      <span className="font-mono-code text-[8px] text-white/70 uppercase tracking-wider">
        SVG Wave
      </span>
    </div>
  </div>
);

const getPreviewComponent = (id, theme) => {
  switch (id) {
    case "slide-scale":
      return <SlideScalePreview />;
    case "strip-wipe":
      return <StripWipePreview theme={theme} />;
    case "svg-wave-draw":
      return <SvgWavePreview />;
    default:
      return null;
  }
};

/* ═══════════════════════════════════════════════════
   FULLSCREEN SANDBOX — EMBEDDED DEMOS
   ═══════════════════════════════════════════════════ */

// ── Sandbox pages (simple mock content for demos) ──
const SandboxPage = ({ title, color }) => (
  <div
    style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      padding: 24,
    }}
  >
    <div
      style={{
        width: 60,
        height: 60,
        borderRadius: 16,
        backgroundColor: color + "15",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ fontSize: 24 }}>
        {title === "Home"
          ? "🏠"
          : title === "About"
          ? "👤"
          : title === "Project"
          ? "📁"
          : "✉️"}
      </span>
    </div>
    <h2
      style={{
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: "-0.02em",
      }}
      className="text-primary"
    >
      {title}
    </h2>
    <p className="text-on-surface-variant/60 text-sm text-center max-w-xs">
      This is the {title.toLowerCase()} page. Click the navigation links above
      to see the page transition effect.
    </p>
  </div>
);

const SANDBOX_PAGES = [
  { path: "/", label: "Home", title: "Home", color: "#4f46e5" },
  { path: "/about", label: "About", title: "About", color: "#0891b2" },
  { path: "/project", label: "Project", title: "Project", color: "#7c3aed" },
  { path: "/contact", label: "Contact", title: "Contact", color: "#dc2626" },
];

// ── Slide & Scale Sandbox ──
const SlideScaleSandbox = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const [prevPage, setPrevPage] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = (to) => {
    if (to === currentPage || isAnimating) return;
    setIsAnimating(true);
    setPrevPage(currentPage);
    setCurrentPage(to);
  };

  const page = SANDBOX_PAGES.find((p) => p.path === currentPage);
  const prev = SANDBOX_PAGES.find((p) => p.path === prevPage);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        backgroundColor: "#171717",
        borderRadius: 12,
      }}
    >
      {/* Old page animating out */}
      {prev && isAnimating && (
        <motion.div
          initial={{ x: "0%", scale: 1, borderRadius: 0 }}
          animate={{ x: "-100%", scale: 0.8, borderRadius: 16 }}
          transition={{
            scale: { duration: 0.3, ease: [0.4, 0, 1, 1] },
            x: { delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            borderRadius: { duration: 0.3 },
          }}
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fff",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <SandboxPage title={prev.title} color={prev.color} />
        </motion.div>
      )}

      {/* New page animating in */}
      <motion.div
        key={currentPage}
        initial={
          isAnimating
            ? { x: "100%", scale: 0.8, borderRadius: 16 }
            : { x: "0%", scale: 1, borderRadius: 0 }
        }
        animate={{ x: "0%", scale: 1, borderRadius: 0 }}
        transition={{
          x: { delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
          scale: { delay: 0.8, duration: 0.3, ease: [0, 0, 0.2, 1] },
          borderRadius: { delay: 0.8, duration: 0.3 },
        }}
        onAnimationComplete={() => {
          setIsAnimating(false);
          setPrevPage(null);
        }}
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Sandbox Navbar */}
        <nav className="flex justify-between items-center px-4 py-3 border-b border-border-fallback-10 bg-surface">
          <span className="text-sm font-bold text-primary">Demo</span>
          <div className="flex gap-4">
            {SANDBOX_PAGES.map((p) => (
              <button
                key={p.path}
                onClick={() => navigate(p.path)}
                className={`text-xs font-medium cursor-pointer transition-colors ${
                  currentPage === p.path
                    ? "text-error-warm"
                    : "text-on-surface-variant/60 hover:text-primary"
                }`}
                style={{ background: "none", border: "none" }}
              >
                {p.label}
              </button>
            ))}
          </div>
        </nav>
        <SandboxPage title={page.title} color={page.color} />
      </motion.div>
    </div>
  );
};

// ── Strip Wipe Sandbox ──
const StripWipeSandbox = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const [phase, setPhase] = useState("idle");
  const isTransitioning = useRef(false);

  const STRIP_COUNT = 3;
  const STAGGER = 0.15;
  const DURATION = 0.5;
  const PHASE_DURATION = (STRIP_COUNT - 1) * STAGGER + DURATION;

  const navigate = useCallback(
    (to) => {
      if (isTransitioning.current || to === currentPage) return;
      isTransitioning.current = true;
      setPhase("enter");

      setTimeout(() => {
        setCurrentPage(to);
        setTimeout(() => {
          setPhase("exit");
          setTimeout(() => {
            setPhase("idle");
            isTransitioning.current = false;
          }, PHASE_DURATION * 1000 + 100);
        }, 100);
      }, PHASE_DURATION * 1000 + 50);
    },
    [currentPage, PHASE_DURATION]
  );

  const page = SANDBOX_PAGES.find((p) => p.path === currentPage);
  const STRIP_COLORS = ["#d4d4d4", "#c4c4c4", "#b4b4b4"];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
      }}
      className="bg-surface"
    >
      {/* Sandbox Navbar */}
      <nav className="flex justify-between items-center px-4 py-3 border-b border-border-fallback-10 bg-surface">
        <span className="text-sm font-bold text-primary">Demo</span>
        <div className="flex gap-4">
          {SANDBOX_PAGES.map((p) => (
            <button
              key={p.path}
              onClick={() => navigate(p.path)}
              className={`text-xs font-medium cursor-pointer transition-colors ${
                currentPage === p.path
                  ? "text-error-warm"
                  : "text-on-surface-variant/60 hover:text-primary"
              }`}
              style={{ background: "none", border: "none" }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
        <SandboxPage title={page.title} color={page.color} />

        {/* Strips overlay */}
        {phase !== "idle" && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 50,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            {Array.from({ length: STRIP_COUNT }).map((_, i) => (
              <motion.div
                key={i}
                style={{
                  position: "absolute",
                  top: `${(i * 100) / STRIP_COUNT}%`,
                  left: 0,
                  width: "100%",
                  height: `calc(100% / ${STRIP_COUNT} + 2px)`,
                  backgroundColor: STRIP_COLORS[i],
                }}
                initial={{ x: "-100%" }}
                animate={{ x: phase === "enter" ? "0%" : "-100%" }}
                transition={{
                  duration: DURATION,
                  delay: i * STAGGER,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ── SVG Wave Draw Sandbox ──
const SvgWaveDrawSandbox = () => {
  const [currentPage, setCurrentPage] = useState("/");
  const [phase, setPhase] = useState("idle");
  const isTransitioning = useRef(false);
  const DRAW_DURATION = 1;

  const navigate = useCallback(
    (to) => {
      if (isTransitioning.current || to === currentPage) return;
      isTransitioning.current = true;
      setPhase("leave");

      setTimeout(() => {
        setCurrentPage(to);
        setTimeout(() => {
          setPhase("enter");
          setTimeout(() => {
            setPhase("idle");
            isTransitioning.current = false;
          }, DRAW_DURATION * 1000 + 100);
        }, 100);
      }, DRAW_DURATION * 1000 + 100);
    },
    [currentPage]
  );

  const page = SANDBOX_PAGES.find((p) => p.path === currentPage);
  const isEntering = phase === "enter";

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: 12,
        display: "flex",
        flexDirection: "column",
      }}
      className="bg-surface"
    >
      {/* Sandbox Navbar */}
      <nav className="flex justify-between items-center px-4 py-3 border-b border-border-fallback-10 bg-surface">
        <span className="text-sm font-bold text-primary">Demo</span>
        <div className="flex gap-4">
          {SANDBOX_PAGES.map((p) => (
            <button
              key={p.path}
              onClick={() => navigate(p.path)}
              className={`text-xs font-medium cursor-pointer transition-colors ${
                currentPage === p.path
                  ? "text-error-warm"
                  : "text-on-surface-variant/60 hover:text-primary"
              }`}
              style={{ background: "none", border: "none" }}
            >
              {p.label}
            </button>
          ))}
        </div>
      </nav>

      <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
        <SandboxPage title={page.title} color={page.color} />

        {/* SVG Wave overlay */}
        {phase !== "idle" && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 50,
              pointerEvents: "none",
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "transparent",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: isEntering ? 0 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1316 664"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                transform: "scale(1.3)",
              }}
            >
              <motion.path
                d={SVG_WAVE_PATH}
                stroke="#82A0FF"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{
                  pathLength: 0,
                  pathOffset: 0,
                  strokeWidth: 2,
                }}
                animate={
                  isEntering
                    ? { pathLength: 0, pathOffset: 1, strokeWidth: 2 }
                    : { pathLength: 1, pathOffset: 0, strokeWidth: 300 }
                }
                transition={{
                  duration: 1.5,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

const getSandboxComponent = (id) => {
  switch (id) {
    case "slide-scale":
      return <SlideScaleSandbox />;
    case "strip-wipe":
      return <StripWipeSandbox />;
    case "svg-wave-draw":
      return <SvgWaveDrawSandbox />;
    default:
      return null;
  }
};

/* ═══════════════════════════════════════════════════
   TRANSITION CARD COMPONENT
   ═══════════════════════════════════════════════════ */

const TransitionCard = ({ transition, theme, onLaunchFullscreen }) => {
  const [activeTab, setActiveTab] = useState(transition.tabs[0].key);
  const [showCode, setShowCode] = useState(false);

  const code = getPageTransitionCode(transition.id, activeTab);
  const language =
    transition.tabs.find((t) => t.key === activeTab)?.language || "jsx";
  const Icon = getTransitionIcon(transition.id);

  return (
    <div className="mb-20">
      {/* Section Header */}
      <div className="mb-8">
        <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-2 block">
          TRANSITION EFFECT
        </span>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-error-warm/10 flex items-center justify-center">
            <Icon size={16} className="text-error-warm" />
          </div>
          <h2 className="font-section-heading text-[32px] md:text-[40px] text-primary tracking-tight leading-tight">
            {transition.name}
          </h2>
        </div>
        <p className="font-editorial-standard text-[15px] text-on-surface-variant italic max-w-2xl">
          {transition.description}
        </p>
      </div>

      {/* Two Column: Info + Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-8">
        {/* Left — Controls & Info */}
        <div
          className={`rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col justify-between border atmospheric-shadow transition-all ${
            theme === "dark"
              ? "bg-[#151515] border-white/5"
              : "bg-white border-black/5"
          }`}
        >
          <div>
            <span className="font-mono-code text-[10px] text-on-surface-variant/60 tracking-[0.15em] uppercase mb-3 block">
              Dependencies
            </span>
            <div className="flex flex-wrap gap-2 mb-8">
              {transition.dependencies.map((dep) => (
                <span
                  key={dep}
                  className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface-variant/80 font-mono-code text-[11px] border oklab-border"
                >
                  {dep}
                </span>
              ))}
            </div>

            <span className="font-mono-code text-[10px] text-on-surface-variant/60 tracking-[0.15em] uppercase mb-4 block">
              Key Points
            </span>
            <div className="space-y-3 mb-8">
              {transition.keyPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-md bg-error-warm/10 text-error-warm font-mono-code text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="font-editorial-standard text-[13px] text-on-surface-variant/80 leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono-code text-[10px] text-on-surface-variant/60 tracking-[0.15em] uppercase mb-3 block">
              Files Needed
            </span>
            <div className="flex flex-wrap gap-2">
              {transition.tabs.map((tab) => (
                <span
                  key={tab.key}
                  className="px-3 py-1 rounded-lg bg-surface-container text-on-surface-variant/60 font-mono-code text-[11px] border oklab-border"
                >
                  {tab.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Mini Preview + Demo Button */}
        <div
          className={`rounded-2xl overflow-hidden p-6 md:p-8 flex flex-col items-center justify-center gap-8 border atmospheric-shadow transition-all ${
            theme === "dark"
              ? "bg-[#151515] border-white/5"
              : "bg-white border-black/5"
          }`}
        >
          {/* Mini preview animation */}
          <div className="w-full max-w-xs">
            {getPreviewComponent(transition.id, theme)}
          </div>

          {/* Launch Fullscreen Sandbox Button */}
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => onLaunchFullscreen(transition.id)}
              className="group relative w-24 h-24 md:w-28 md:h-28 rounded-3xl border-2 border-border-fallback-10 hover:border-error-warm/40 bg-surface-container flex items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-[0_0_40px_rgba(207,45,86,0.15)] active:scale-95"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="text-primary flex flex-col items-center justify-center gap-1.5"
              >
                <Maximize2
                  size={32}
                  strokeWidth={1.5}
                  className="text-error-warm group-hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-3xl border border-error-warm/0 group-hover:border-error-warm/20 group-hover:scale-110 transition-all duration-500 pointer-events-none" />
            </button>

            <div className="flex flex-col items-center gap-1">
              <span className="font-section-heading text-[15px] text-primary font-medium">
                Launch Interactive Demo
              </span>
              <span className="font-mono-code text-[11px] text-on-surface-variant/50 italic text-center max-w-50">
                Click nav links to see the transition in action
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
                {transition.tabs.map((tab) => (
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
                  </button>
                ))}

                {/* Copy All */}
                <div className="ml-auto pr-2 shrink-0">
                  <CopyButton
                    text={code}
                    className="p-1.5 rounded-lg text-on-surface-variant/60 hover:text-primary hover:bg-surface-container/60 transition-colors"
                  />
                </div>
              </div>

              {/* Active Tab Code */}
              <div className="p-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                  >
                    <CodeBlock
                      code={code}
                      language={language}
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

const PageTransitionsPage = () => {
  const { theme } = useTheme();
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sandboxEffect, setSandboxEffect] = useState("slide-scale");

  /* ── Enter / Exit fullscreen sandbox ── */
  const enterFullscreen = (effect) => {
    setSandboxEffect(effect);
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

  return (
    <div className="min-h-screen w-full bg-surface text-on-surface font-ui-body">
      <style
        dangerouslySetInnerHTML={{ __html: pageTransitionPreviewStyles }}
      />

      {/* ═══ BACK BUTTON ═══ */}
      <div className="pt-24 px-4 md:px-8 max-w-7xl mx-auto w-full flex justify-start">
        <Link
          to="/experiences"
          className="group flex items-center gap-2 px-4 py-2 rounded-full border border-border-fallback-10 bg-surface-container/50 backdrop-blur-sm text-on-surface-variant hover:text-primary transition-all duration-300 hover:bg-surface-container hover:shadow-sm"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span className="font-mono-code text-[12px] tracking-wide">
            Back to Experiences
          </span>
        </Link>
      </div>

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
              Experiences · Page Transitions
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display-hero text-[44px] sm:text-[56px] md:text-[72px] text-primary tracking-tighter leading-[1.05] mb-6">
            Page{" "}
            <span className="italic text-error-warm">Transitions</span>
          </h1>

          {/* Subtitle */}
          <p className="font-editorial-body text-[17px] md:text-[19px] text-on-surface-variant leading-relaxed max-w-3xl mb-4 italic">
            Premium route transition effects powered by Framer Motion.
            Copy-paste ready — just grab the code and drop it into your React
            project.
          </p>

          {/* Dep note */}
          <div className="flex items-center gap-2 text-on-surface-variant/50 font-mono-code text-[11px] mt-2">
            <Layers size={12} />
            <span>
              Framer Motion · React Router · Zero config
            </span>
          </div>
        </motion.div>
      </motion.section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ TRANSITION EFFECTS ═══ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-300 mx-auto">
          {PAGE_TRANSITIONS.map((transition) => (
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
              Each transition follows a simple cover → swap → reveal pattern
              using Framer Motion for animations and React Router for
              navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                step: "1",
                title: "Trigger",
                desc: "When a navigation link is clicked, the transition context starts the cover animation (strips slide in, SVG draws, or new page slides in).",
              },
              {
                step: "2",
                title: "Swap",
                desc: "Once the cover animation completes, the actual route change happens behind the overlay. The user never sees a jarring page swap.",
              },
              {
                step: "3",
                title: "Reveal",
                desc: "The cover animation reverses — strips slide out, SVG undraws, or the page settles into place — smoothly revealing the new content.",
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
              Integrate smooth page transitions into your React app in three
              quick steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Choose & Test",
                desc: "Explore the Slide & Scale, Strip Wipe, or SVG Wave Draw effects above. Click 'Launch Interactive Demo' to test each transition live.",
              },
              {
                step: "02",
                title: "Grab the Code",
                desc: "Click 'Show Setup Code' on the card of your chosen transition. You'll find all necessary files — context providers, transition components, app setup, and navbar integration.",
              },
              {
                step: "03",
                title: "Install in Your App",
                desc: "Install framer-motion and react-router-dom, then paste the snippets into your project. For Strip Wipe and SVG Wave, use navigateWithTransition() instead of <Link>.",
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
        <div className="max-w-300 mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            to="/experiences"
            className="font-mono-code text-[16px] text-on-surface-variant/60 hover:text-error-warm transition-colors flex items-center gap-1 group"
          >
            <ChevronRight
              size={12}
              className="rotate-180 group-hover:-translate-x-1 transition-transform"
            />
            Back to Experiences
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
            className="fixed inset-0 z-100 flex flex-col bg-background text-on-surface transition-colors duration-300"
          >
            {/* Header */}
            <header className="sticky top-0 z-10 w-full h-14 sm:h-16 px-3 sm:px-6 border-b border-border-fallback-10 bg-surface/85 backdrop-blur-md flex items-center justify-between transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded bg-error-warm animate-pulse" />
                <span className="font-mono-code text-[12px] text-on-surface-variant/60 tracking-wide">
                  Page Transition Sandbox
                </span>
              </div>

              {/* Effect Switcher */}
              <div className="hidden md:flex items-center gap-2">
                {PAGE_TRANSITIONS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSandboxEffect(t.id)}
                    className={`px-3 py-1.5 rounded-lg font-mono-code text-[11px] cursor-pointer transition-all duration-200 border ${
                      sandboxEffect === t.id
                        ? "bg-error-warm/15 text-error-warm border-error-warm/30 font-semibold"
                        : "bg-surface hover:bg-surface-container-highest border-border-fallback-10 text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>

              {/* Exit Button */}
              <button
                onClick={exitFullscreen}
                className="h-8 sm:h-9 px-3 sm:px-4 rounded-full bg-primary text-on-primary hover:bg-error-warm hover:text-white transition-all duration-200 flex items-center gap-1.5 cursor-pointer text-xs font-semibold active:scale-95 shadow-sm font-['Space_Grotesk']"
              >
                <X size={14} />
                <span className="hidden sm:inline">Exit</span>
                <span>(Esc)</span>
              </button>
            </header>

            {/* Sandbox Content */}
            <main className="flex-1 max-w-4xl mx-auto w-full p-4 sm:p-8">
              <div className="w-full h-full min-h-[500px] rounded-2xl overflow-hidden border border-border-fallback-10 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={sandboxEffect}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-full min-h-[500px]"
                  >
                    {getSandboxComponent(sandboxEffect)}
                  </motion.div>
                </AnimatePresence>
              </div>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageTransitionsPage;
