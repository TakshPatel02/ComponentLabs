/* ═══════════════════════════════════════════════════
   THEME TRANSITIONS DATA CONFIGURATION
   ═══════════════════════════════════════════════════ */

export const CONTEXT_CODE_DEFAULT = `import React, { createContext, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";

    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};`;

export const CONTEXT_CODE_DYNAMIC = `import React, { createContext, useContext, useEffect, useState } from "react";
import { flushSync } from "react-dom";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    const root = document.documentElement;

    // Apply swipe direction classes to root before capturing transition
    if (theme === "dark" && next === "light") {
      root.classList.add("transition-br-to-tl");
      root.classList.remove("transition-tl-to-br");
    } else {
      root.classList.add("transition-tl-to-br");
      root.classList.remove("transition-br-to-tl");
    }

    if (!document.startViewTransition) {
      setTheme(next);
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });

    // Clean up classes after transition finishes
    transition.finished.then(() => {
      root.classList.remove("transition-br-to-tl", "transition-tl-to-br");
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};`;

export const getCssCode = (effect, direction) => {
  if (effect === "curtain-wipe") {
    let desc = "";
    let from = "";
    if (direction === "bottom-to-top") {
      desc = "Curtain Wipe — Bottom to Top";
      from = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
    } else if (direction === "top-to-bottom") {
      desc = "Curtain Wipe — Top to Bottom";
      from = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
    } else if (direction === "left-to-right") {
      desc = "Curtain Wipe — Left to Right";
      from = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
    } else if (direction === "right-to-left") {
      desc = "Curtain Wipe — Right to Left";
      from = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    }

    return `/* ${desc} */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 2;
  animation: curtain-wipe 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
}

@keyframes curtain-wipe {
  from {
    clip-path: ${from};
  }
  to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}`;
  }

  // Effect: polygon-wipe (diagonal)
  if (direction === "bottom-right-to-top-left") {
    return `/* Diagonal Wipe — Bottom Right to Top Left */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 2;
  animation: diagonal-wipe-br-tl 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
}

@keyframes diagonal-wipe-br-tl {
  from {
    clip-path: polygon(200% 200%, 200% 0%, 0% 200%);
  }
  to {
    clip-path: polygon(200% 200%, 200% -200%, -200% 200%);
  }
}`;
  } else if (direction === "top-left-to-bottom-right") {
    return `/* Diagonal Wipe — Top Left to Bottom Right */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 2;
  animation: diagonal-wipe-tl-br 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
}

@keyframes diagonal-wipe-tl-br {
  from {
    clip-path: polygon(-200% -200%, -200% 200%, 200% -200%);
  }
  to {
    clip-path: polygon(-200% -200%, -200% 400%, 400% -200%);
  }
}`;
  }

  // direction === "dynamic"
  if (effect === "polygon-wipe" && direction === "dynamic") {
    return `/* Diagonal Wipe — Dynamic Adaptive Corner Wipe
   Apply transition-br-to-tl or transition-tl-to-br to html root class */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) { z-index: 1; }

/* Dark to Light: Bottom-Right to Top-Left */
html.transition-br-to-tl::view-transition-new(root) {
  z-index: 2;
  animation: diagonal-wipe-br-tl 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
}

/* Light to Dark: Top-Left to Bottom-Right */
html.transition-tl-to-br::view-transition-new(root) {
  z-index: 2;
  animation: diagonal-wipe-tl-br 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
}

@keyframes diagonal-wipe-br-tl {
  from {
    clip-path: polygon(200% 200%, 200% 0%, 0% 200%);
  }
  to {
    clip-path: polygon(200% 200%, 200% -200%, -200% 200%);
  }
}

@keyframes diagonal-wipe-tl-br {
  from {
    clip-path: polygon(-200% -200%, -200% 200%, 200% -200%);
  }
  to {
    clip-path: polygon(-200% -200%, -200% 400%, 400% -200%);
  }
}`;
  }

  // Effect: circle-wipe (Radial)
  if (effect === "circle-wipe") {
    let coords = "50% 50%";
    let desc = "Circle Wipe — Center";
    if (direction === "top-left") {
      coords = "0% 0%";
      desc = "Circle Wipe — Top Left";
    } else if (direction === "top-right") {
      coords = "100% 0%";
      desc = "Circle Wipe — Top Right";
    } else if (direction === "bottom-left") {
      coords = "0% 100%";
      desc = "Circle Wipe — Bottom Left";
    } else if (direction === "bottom-right") {
      coords = "100% 100%";
      desc = "Circle Wipe — Bottom Right";
    }

    return `/* ${desc} */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 2;
  animation: circle-wipe-${direction} 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
}

@keyframes circle-wipe-${direction} {
  from {
    clip-path: circle(0% at ${coords});
  }
  to {
    clip-path: circle(150% at ${coords});
  }
}`;
  }

  return "";
};

export const TOGGLE_CODE = `import { useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 20px",
        borderRadius: "12px",
        border: "1px solid",
        borderColor: isDark
          ? "rgba(255,255,255,0.12)"
          : "rgba(0,0,0,0.08)",
        background: isDark
          ? "rgba(255,255,255,0.06)"
          : "rgba(0,0,0,0.04)",
        color: isDark ? "#e5e5e5" : "#1a1a1a",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: 500,
        fontFamily: "'Inter', system-ui, sans-serif",
        transition: "all 0.3s ease",
        outline: "none",
      }}
    >
      <span
        style={{
          fontSize: "16px",
          transition:
            "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
          transform: isDark ? "rotate(0)" : "rotate(360deg)",
          display: "inline-block",
        }}
      >
        {isDark ? "☀️" : "🌙"}
      </span>
      <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
};

export default ThemeToggle;`;

export const getCssOverride = (effect, direction, currentTheme = "light") => {
  if (effect === "circle-wipe") {
    let coords = "50% 50%";
    if (direction === "top-left") coords = "0% 0%";
    else if (direction === "top-right") coords = "100% 0%";
    else if (direction === "bottom-left") coords = "0% 100%";
    else if (direction === "bottom-right") coords = "100% 100%";

    return `
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) { z-index: 1; }
::view-transition-new(root) {
  z-index: 2;
  animation: exp-circle-wipe 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
}
@keyframes exp-circle-wipe {
  from { clip-path: circle(0% at ${coords}); }
  to   { clip-path: circle(150% at ${coords}); }
}`;
  }

  let activeDir = direction;
  if (effect === "polygon-wipe" && direction === "dynamic") {
    activeDir = currentTheme === "dark" ? "bottom-right-to-top-left" : "top-left-to-bottom-right";
  }

  let from = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
  let to = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  if (effect === "curtain-wipe") {
    if (activeDir === "bottom-to-top") {
      from = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
    } else if (activeDir === "top-to-bottom") {
      from = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
    } else if (activeDir === "left-to-right") {
      from = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
    } else if (activeDir === "right-to-left") {
      from = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
    }
  } else {
    // effect === "polygon-wipe"
    if (activeDir === "bottom-right-to-top-left") {
      from = "polygon(200% 200%, 200% 0%, 0% 200%)";
      to = "polygon(200% 200%, 200% -200%, -200% 200%)";
    } else {
      // top-left-to-bottom-right
      from = "polygon(-200% -200%, -200% 200%, 200% -200%)";
      to = "polygon(-200% -200%, -200% 400%, 400% -200%)";
    }
  }

  return `
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) { z-index: 1; }
::view-transition-new(root) {
  z-index: 2;
  animation: exp-corner-wipe 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
}
@keyframes exp-corner-wipe {
  from { clip-path: ${from}; }
  to   { clip-path: ${to}; }
}`;
};

export const previewAnimationStyles = `
/* Curtain Wipes */
@keyframes preview-btt {
  0%, 12%   { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); }
  32%, 68%  { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  88%, 100% { clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0 100%); }
}
@keyframes preview-ttb {
  0%, 12%   { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); }
  32%, 68%  { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  88%, 100% { clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); }
}
@keyframes preview-ltr {
  0%, 12%   { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
  32%, 68%  { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  88%, 100% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); }
}
@keyframes preview-rtl {
  0%, 12%   { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%); }
  32%, 68%  { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); }
  88%, 100% { clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%); }
}

/* Polygon Diagonal Wipes */
@keyframes preview-br-tl {
  0%, 12%   { clip-path: polygon(200% 200%, 200% 0%, 0% 200%); }
  32%, 68%  { clip-path: polygon(200% 200%, 200% -200%, -200% 200%); }
  88%, 100% { clip-path: polygon(200% 200%, 200% 0%, 0% 200%); }
}
@keyframes preview-tl-br {
  0%, 12%   { clip-path: polygon(-200% -200%, -200% 200%, 200% -200%); }
  32%, 68%  { clip-path: polygon(-200% -200%, -200% 400%, 400% -200%); }
  88%, 100% { clip-path: polygon(-200% -200%, -200% 200%, 200% -200%); }
}
@keyframes preview-dyn {
  0%       { clip-path: polygon(200% 200%, 200% 0%, 0% 200%); }
  15%, 35% { clip-path: polygon(200% 200%, 200% -200%, -200% 200%); }
  50%      { clip-path: polygon(-200% -200%, -200% 200%, 200% -200%); }
  65%, 85% { clip-path: polygon(-200% -200%, -200% 400%, 400% -200%); }
  100%     { clip-path: polygon(200% 200%, 200% 0%, 0% 200%); }
}

/* Circle Radial Wipes */
@keyframes preview-circle-center {
  0%, 12%   { clip-path: circle(0% at 50% 50%); }
  32%, 68%  { clip-path: circle(150% at 50% 50%); }
  88%, 100% { clip-path: circle(0% at 50% 50%); }
}
@keyframes preview-circle-top-left {
  0%, 12%   { clip-path: circle(0% at 0% 0%); }
  32%, 68%  { clip-path: circle(150% at 0% 0%); }
  88%, 100% { clip-path: circle(0% at 0% 0%); }
}
@keyframes preview-circle-top-right {
  0%, 12%   { clip-path: circle(0% at 100% 0%); }
  32%, 68%  { clip-path: circle(150% at 100% 0%); }
  88%, 100% { clip-path: circle(0% at 100% 0%); }
}
@keyframes preview-circle-bottom-left {
  0%, 12%   { clip-path: circle(0% at 0% 100%); }
  32%, 68%  { clip-path: circle(150% at 0% 100%); }
  88%, 100% { clip-path: circle(0% at 0% 100%); }
}
@keyframes preview-circle-bottom-right {
  0%, 12%   { clip-path: circle(0% at 100% 100%); }
  32%, 68%  { clip-path: circle(150% at 100% 100%); }
  88%, 100% { clip-path: circle(0% at 100% 100%); }
}
`;

export const TABS = [
  { key: "context", label: "ThemeContext.jsx", language: "jsx" },
  { key: "css", label: "transitions.css", language: "css" },
  { key: "toggle", label: "ThemeToggle.jsx", language: "jsx" },
];

export const TRANSITIONS = [
  {
    id: "curtain-wipe",
    name: "Curtain Wipe",
    description: "A clean vertical or horizontal wipe that slides the new theme into view like a stage curtain.",
    directions: [
      { key: "bottom-to-top", label: "Bottom → Top", iconName: "ArrowUp" },
      { key: "top-to-bottom", label: "Top → Bottom", iconName: "ArrowDown" },
      { key: "left-to-right", label: "Left → Right", iconName: "ArrowRight" },
      { key: "right-to-left", label: "Right → Left", iconName: "ArrowLeft" },
    ],
  },
  {
    id: "polygon-wipe",
    name: "Polygon Wipe (Diagonal)",
    description: "A corner-to-corner diagonal sweep that reveals the new theme dynamically using a single straight line.",
    directions: [
      { key: "bottom-right-to-top-left", label: "Bottom Right → Top Left", iconName: "ArrowUpLeft" },
      { key: "top-left-to-bottom-right", label: "Top Left → Bottom Right", iconName: "ArrowDownRight" },
      { key: "dynamic", label: "Dynamic Adaptive", iconName: "Sparkles" },
    ],
  },
  {
    id: "circle-wipe",
    name: "Circle Wipe (Radial)",
    description: "An expanding circular shape that reveals the new theme from the center or from any corner.",
    directions: [
      { key: "center", label: "Center Out", iconName: "Circle" },
      { key: "top-left", label: "Top Left", iconName: "ArrowUpLeft" },
      { key: "top-right", label: "Top Right", iconName: "ArrowUpRight" },
      { key: "bottom-left", label: "Bottom Left", iconName: "ArrowDownLeft" },
      { key: "bottom-right", label: "Bottom Right", iconName: "ArrowDownRight" },
    ],
  }
];
