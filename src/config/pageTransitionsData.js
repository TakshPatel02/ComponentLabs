/* ═══════════════════════════════════════════════════
   PAGE TRANSITIONS DATA CONFIGURATION
   ═══════════════════════════════════════════════════ */

// ── Transition 1: Slide & Scale ──────────────────────
export const SLIDE_SCALE_APP_CODE = `import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// ── Your page components ──
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

// ── Page transition variants ──
const pageVariants = {
  initial: {
    x: "100%",
    scale: 0.8,
    borderRadius: 16,
  },
  animate: {
    x: "0%",
    scale: 1,
    borderRadius: 0,
    transition: {
      x: { delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { delay: 0.8, duration: 0.3, ease: [0, 0, 0.2, 1] },
      borderRadius: { delay: 0.8, duration: 0.3 },
    },
  },
  exit: {
    x: "-100%",
    scale: 0.8,
    borderRadius: 16,
    transition: {
      scale: { duration: 0.3, ease: [0.4, 0, 1, 1] },
      x: { delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      borderRadius: { duration: 0.3 },
    },
  },
};

// ── Animated Routes wrapper ──
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          willChange: "transform",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
      >
        {/* Your Navbar goes here */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}

// ── Main App ──
const App = () => {
  return (
    <BrowserRouter>
      <div style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#171717",
      }}>
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;`;

export const SLIDE_SCALE_NAVBAR_CODE = `import { Link } from "react-router-dom";

// Simple Navbar — uses standard <Link> from react-router-dom
const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem",
      backgroundColor: "#fff",
      borderBottom: "1px solid #e5e7eb",
    }}>
      <Link to="/" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#4f46e5", textDecoration: "none" }}>
        MyApp
      </Link>
      <div style={{ display: "flex", gap: "2rem" }}>
        <Link to="/" style={{ color: "#6b7280", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ color: "#6b7280", textDecoration: "none" }}>About</Link>
        <Link to="/project" style={{ color: "#6b7280", textDecoration: "none" }}>Project</Link>
        <Link to="/contact" style={{ color: "#6b7280", textDecoration: "none" }}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;`;

// ── Transition 2: Strip Wipe ─────────────────────────
export const STRIP_CONTEXT_CODE = `import { createContext, useContext, useState, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TransitionContext = createContext();

export const usePageTransition = () => useContext(TransitionContext);

const STRIP_COUNT = 3;
const STAGGER = 0.15;    // seconds between each strip
const DURATION = 0.5;    // animation duration per strip

// Time for all strips to finish entering/exiting
const PHASE_DURATION = (STRIP_COUNT - 1) * STAGGER + DURATION;

export const TransitionProvider = ({ children }) => {
  const [phase, setPhase] = useState("idle"); // "idle" | "enter" | "exit"
  const navigate = useNavigate();
  const location = useLocation();
  const isTransitioning = useRef(false);

  const navigateWithTransition = useCallback((to) => {
    // Guard: don't transition if already transitioning or on same page
    if (isTransitioning.current) return;
    if (location.pathname === to) return;

    isTransitioning.current = true;

    // Phase 1: Strips slide in (cover)
    setPhase("enter");

    setTimeout(() => {
      // Swap the page content while strips are covering
      navigate(to);

      // Small pause while fully covered
      setTimeout(() => {
        // Phase 2: Strips slide out (reveal)
        setPhase("exit");

        setTimeout(() => {
          // Done — reset everything
          setPhase("idle");
          isTransitioning.current = false;
        }, (PHASE_DURATION * 1000) + 100);
      }, 100);
    }, (PHASE_DURATION * 1000) + 50);
  }, [navigate, location.pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, phase }}>
      {children}
    </TransitionContext.Provider>
  );
};

export { STRIP_COUNT, STAGGER, DURATION };`;

export const STRIP_COMPONENT_CODE = `import { motion } from "framer-motion";
import { usePageTransition, STRIP_COUNT, STAGGER, DURATION } from "../context/TransitionContext";

const STRIP_COLORS = ["#d4d4d4", "#c4c4c4", "#b4b4b4"];

const PageTransition = () => {
  const { phase } = usePageTransition();

  if (phase === "idle") return null;

  return (
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
            top: \`\${(i * 100) / STRIP_COUNT}%\`,
            left: 0,
            width: "100%",
            height: \`calc(100% / \${STRIP_COUNT} + 2px)\`,
            backgroundColor: STRIP_COLORS[i],
          }}
          initial={{ x: "-100%" }}
          animate={{
            x: phase === "enter" ? "0%" : "-100%",
          }}
          transition={{
            duration: DURATION,
            delay: i * STAGGER,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      ))}
    </div>
  );
};

export default PageTransition;`;

export const STRIP_APP_CODE = `import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";

// ── Your page components ──
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

function AppContent() {
  return (
    <TransitionProvider>
      <div style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}>
        <Navbar />
        <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
          <main style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <PageTransition />
        </div>
      </div>
    </TransitionProvider>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;`;

export const STRIP_NAVBAR_CODE = `import { useLocation } from "react-router-dom";
import { usePageTransition } from "../context/TransitionContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/project", label: "Project" },
  { path: "/contact", label: "Contact" },
];

// IMPORTANT: Uses navigateWithTransition() instead of <Link>
// This triggers the strip animation before navigating
const Navbar = () => {
  const { navigateWithTransition } = usePageTransition();
  const location = useLocation();

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem",
      backgroundColor: "#fff",
      borderBottom: "1px solid #e5e7eb",
    }}>
      <button
        onClick={() => navigateWithTransition("/")}
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#4f46e5",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        MyApp
      </button>
      <div style={{ display: "flex", gap: "2rem" }}>
        {navLinks.map(({ path, label }) => (
          <button
            key={path}
            onClick={() => navigateWithTransition(path)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              color: location.pathname === path ? "#4f46e5" : "#6b7280",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;`;

// ── Transition 3: SVG Wave Draw ──────────────────────
export const SVG_CONTEXT_CODE = `import { createContext, useContext, useState, useCallback, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TransitionContext = createContext();

export const usePageTransition = () => useContext(TransitionContext);

const DRAW_DURATION = 1; // seconds

export const TransitionProvider = ({ children }) => {
  const [phase, setPhase] = useState("idle"); // "idle" | "enter" | "leave"
  const navigate = useNavigate();
  const location = useLocation();
  const isTransitioning = useRef(false);

  const navigateWithTransition = useCallback((to) => {
    if (isTransitioning.current) return;
    if (location.pathname === to) return;

    isTransitioning.current = true;

    // LEAVE phase: path draws on + strokeWidth grows (covers page)
    setPhase("leave");

    // Wait for the draw animation to complete
    setTimeout(() => {
      // Swap content while covered
      navigate(to);

      // ENTER phase: path undraws + strokeWidth shrinks (reveals new page)
      setTimeout(() => {
        setPhase("enter");

        // Wait for reveal animation to complete, then reset
        setTimeout(() => {
          setPhase("idle");
          isTransitioning.current = false;
        }, (DRAW_DURATION * 1000) + 100);
      }, 100);
    }, (DRAW_DURATION * 1000) + 100);
  }, [navigate, location.pathname]);

  return (
    <TransitionContext.Provider value={{ navigateWithTransition, phase }}>
      {children}
    </TransitionContext.Provider>
  );
};`;

export const SVG_COMPONENT_CODE = `import { motion } from "framer-motion";
import { usePageTransition } from "../context/TransitionContext";

/**
 * SvgPathTransition — Reusable SVG-path page transition.
 *
 * Props:
 *  @param {string}  svgPath     – The SVG path \`d\` attribute
 *  @param {string}  viewBox     – SVG viewBox (default "0 0 1316 664")
 *  @param {string}  strokeColor – Path stroke color (default "#82A0FF")
 *  @param {number}  thinWidth   – Starting thin stroke width (default 2)
 *  @param {number}  thickWidth  – Ending thick stroke width (default 300)
 */
const SvgPathTransition = ({
  svgPath,
  viewBox = "0 0 1316 664",
  strokeColor = "#82A0FF",
  thinWidth = 2,
  thickWidth = 300,
}) => {
  const { phase } = usePageTransition();

  if (phase === "idle") return null;

  const isEntering = phase === "enter";

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 50,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
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

      {/* SVG with animated path */}
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox}
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
          d={svgPath}
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{
            pathLength: 0,
            pathOffset: 0,
            strokeWidth: thinWidth,
          }}
          animate={
            isEntering
              ? {
                  // ENTER (reveal): undraw from tail to head
                  pathLength: 0,
                  pathOffset: 1,
                  strokeWidth: thinWidth,
                }
              : {
                  // LEAVE (cover): draw path on, grow stroke width
                  pathLength: 1,
                  pathOffset: 0,
                  strokeWidth: thickWidth,
                }
          }
          transition={{
            duration: 1.5,
            ease: [0.65, 0, 0.35, 1],
          }}
        />
      </svg>
    </div>
  );
};

export default SvgPathTransition;`;

export const SVG_APP_CODE = `import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext";
import SvgPathTransition from "./components/SvgPathTransition";
import Navbar from "./components/Navbar";

// ── Your page components ──
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";

// The wave SVG path used for the transition effect
const WAVE_PATH =
  "M13.4746 291.27C13.4746 291.27 100.646 -18.6724 255.617 16.8418C410.588 52.356 61.0296 431.197 233.017 546.326C431.659 679.299 444.494 21.0125 652.73 100.784C860.967 180.556 468.663 430.709 617.216 546.326C765.769 661.944 819.097 48.2722 988.501 120.156C1174.21 198.957 809.424 543.841 988.501 636.726C1189.37 740.915 1301.67 149.213 1301.67 149.213";

function AppContent() {
  return (
    <TransitionProvider>
      <div style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}>
        <Navbar />
        <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
          <main style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Reusable — swap svgPath / coverColor to change the transition */}
          <SvgPathTransition
            svgPath={WAVE_PATH}
            viewBox="0 0 1316 664"
            strokeColor="#1a1a2e"
            thickWidth={400}
          />
        </div>
      </div>
    </TransitionProvider>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;`;

export const SVG_NAVBAR_CODE = `import { useLocation } from "react-router-dom";
import { usePageTransition } from "../context/TransitionContext";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/project", label: "Project" },
  { path: "/contact", label: "Contact" },
];

// IMPORTANT: Uses navigateWithTransition() instead of <Link>
// This triggers the SVG draw animation before navigating
const Navbar = () => {
  const { navigateWithTransition } = usePageTransition();
  const location = useLocation();

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1.5rem",
      backgroundColor: "#fff",
      borderBottom: "1px solid #e5e7eb",
    }}>
      <button
        onClick={() => navigateWithTransition("/")}
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "#4f46e5",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        MyApp
      </button>
      <div style={{ display: "flex", gap: "2rem" }}>
        {navLinks.map(({ path, label }) => (
          <button
            key={path}
            onClick={() => navigateWithTransition(path)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              color: location.pathname === path ? "#4f46e5" : "#6b7280",
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;`;

/* ═══════════════════════════════════════════════════
   TRANSITIONS METADATA
   ═══════════════════════════════════════════════════ */

export const PAGE_TRANSITIONS = [
  {
    id: "slide-scale",
    name: "Slide & Scale",
    description:
      "Pages slide in from the right with a scale-down and rounded corners effect, while the old page slides out to the left. Creates a smooth, card-like stacking feel using Framer Motion's AnimatePresence.",
    dependencies: ["framer-motion", "react-router-dom"],
    tabs: [
      { key: "app", label: "App.jsx", language: "jsx" },
      { key: "navbar", label: "Navbar.jsx", language: "jsx" },
    ],
    keyPoints: [
      "Wrap your Routes inside AnimatePresence with initial={false}",
      "Use motion.div with key={location.pathname} for page detection",
      "The parent container needs position: relative and overflow: hidden",
      "Standard <Link> components work — no special navigation needed",
    ],
  },
  {
    id: "strip-wipe",
    name: "Strip Wipe",
    description:
      "Three horizontal strips slide in from the left to cover the page, the route swaps while covered, then the strips slide back out to reveal the new page. Uses a TransitionContext for coordinated timing.",
    dependencies: ["framer-motion", "react-router-dom"],
    tabs: [
      { key: "context", label: "TransitionContext.jsx", language: "jsx" },
      { key: "component", label: "PageTransition.jsx", language: "jsx" },
      { key: "app", label: "App.jsx", language: "jsx" },
      { key: "navbar", label: "Navbar.jsx", language: "jsx" },
    ],
    keyPoints: [
      "Wrap your app with TransitionProvider inside BrowserRouter",
      "Use navigateWithTransition() instead of <Link> in your Navbar",
      "Place <PageTransition /> as a sibling of your <main> content",
      "Customize strip colors and count in the constants",
    ],
  },
  {
    id: "svg-wave-draw",
    name: "SVG Wave Draw",
    description:
      "An SVG wave path draws itself across the screen with an expanding stroke width to cover the page, then undraws to reveal the new content. Mimics the GSAP DrawSVG effect using Framer Motion.",
    dependencies: ["framer-motion", "react-router-dom"],
    tabs: [
      { key: "context", label: "TransitionContext.jsx", language: "jsx" },
      { key: "component", label: "SvgPathTransition.jsx", language: "jsx" },
      { key: "app", label: "App.jsx", language: "jsx" },
      { key: "navbar", label: "Navbar.jsx", language: "jsx" },
    ],
    keyPoints: [
      "Wrap your app with TransitionProvider inside BrowserRouter",
      "Use navigateWithTransition() instead of <Link> in your Navbar",
      "Customize the SVG path, stroke color, and stroke width via props",
      "The SVG scales to 1.3x to ensure full page coverage",
    ],
  },
];

/* ═══════════════════════════════════════════════════
   CODE GETTER
   ═══════════════════════════════════════════════════ */

export const getPageTransitionCode = (transitionId, tabKey) => {
  switch (transitionId) {
    case "slide-scale":
      if (tabKey === "app") return SLIDE_SCALE_APP_CODE;
      if (tabKey === "navbar") return SLIDE_SCALE_NAVBAR_CODE;
      return "";
    case "strip-wipe":
      if (tabKey === "context") return STRIP_CONTEXT_CODE;
      if (tabKey === "component") return STRIP_COMPONENT_CODE;
      if (tabKey === "app") return STRIP_APP_CODE;
      if (tabKey === "navbar") return STRIP_NAVBAR_CODE;
      return "";
    case "svg-wave-draw":
      if (tabKey === "context") return SVG_CONTEXT_CODE;
      if (tabKey === "component") return SVG_COMPONENT_CODE;
      if (tabKey === "app") return SVG_APP_CODE;
      if (tabKey === "navbar") return SVG_NAVBAR_CODE;
      return "";
    default:
      return "";
  }
};

/* ═══════════════════════════════════════════════════
   PREVIEW ANIMATION CSS
   ═══════════════════════════════════════════════════ */

export const pageTransitionPreviewStyles = `
/* Slide & Scale preview */
@keyframes preview-slide-scale {
  0%, 15% { transform: translateX(100%) scale(0.8); border-radius: 16px; }
  35%, 65% { transform: translateX(0%) scale(1); border-radius: 0px; }
  85%, 100% { transform: translateX(-100%) scale(0.8); border-radius: 16px; }
}

/* Strip Wipe preview */
@keyframes preview-strip-1 {
  0%, 10% { transform: translateX(-100%); }
  30%, 55% { transform: translateX(0%); }
  75%, 100% { transform: translateX(-100%); }
}
@keyframes preview-strip-2 {
  0%, 15% { transform: translateX(-100%); }
  35%, 60% { transform: translateX(0%); }
  80%, 100% { transform: translateX(-100%); }
}
@keyframes preview-strip-3 {
  0%, 20% { transform: translateX(-100%); }
  40%, 65% { transform: translateX(0%); }
  85%, 100% { transform: translateX(-100%); }
}

/* SVG Wave Draw preview */
@keyframes preview-svg-draw {
  0%, 10% { stroke-dashoffset: 3000; stroke-width: 2; }
  45%, 55% { stroke-dashoffset: 0; stroke-width: 200; }
  90%, 100% { stroke-dashoffset: -3000; stroke-width: 2; }
}
`;
