/* ═══════════════════════════════════════════════════
   THEME TRANSITIONS DATA CONFIGURATION
   ═══════════════════════════════════════════════════ */

export const CONTEXT_CODE = `import React, { createContext, useContext, useEffect, useState } from "react";
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

export const getCssCode = (direction) => {
  if (direction === "bottom-to-top") {
    return `/* Curtain Wipe — Bottom to Top */
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
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}`;
  }

  return `/* Curtain Wipe — Top to Bottom */
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
    clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  }
  to {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}`;
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

export const getCssOverride = (direction) => {
  const from =
    direction === "bottom-to-top"
      ? "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
      : "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
  const to = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

  return `
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}
::view-transition-old(root) { z-index: 1; }
::view-transition-new(root) {
  z-index: 2;
  animation: exp-curtain-wipe 0.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
}
@keyframes exp-curtain-wipe {
  from { clip-path: ${from}; }
  to   { clip-path: ${to}; }
}`;
};

export const previewAnimationStyles = `
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
`;

export const TABS = [
  { key: "context", label: "ThemeContext.jsx", language: "jsx" },
  { key: "css", label: "transitions.css", language: "css" },
  { key: "toggle", label: "ThemeToggle.jsx", language: "jsx" },
];
