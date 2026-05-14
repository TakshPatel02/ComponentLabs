import React from "react";
import { useTheme } from "../context/ThemeContext";
import DocsSidebar from "../components/DocsSidebar";

const ComponentsIndex = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`flex min-h-screen ${isDark ? "bg-[#111]" : "bg-[#F5F3EE]"}`}>
      {/* Left sidebar */}
      <DocsSidebar />

      {/* Main content area */}
      <main className="ml-0 md:ml-[240px] flex-1 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-[520px] text-center">
          {/* Category tag */}
          <span className={`
            inline-block font-['Space_Grotesk'] text-[10.5px] font-semibold
            uppercase tracking-[0.15em] mb-4 select-none
            ${isDark ? "text-[#6b6960]" : "text-[#8a8780]"}
          `}>
            Component Library
          </span>

          {/* Heading */}
          <h1 className="font-['Space_Grotesk'] text-3xl md:text-[42px] font-bold text-primary tracking-tight leading-tight mb-4">
            Browse Components
          </h1>

          {/* Description */}
          <p className={`
            font-['Inter'] text-base md:text-lg leading-relaxed mb-8
            ${isDark ? "text-[#a8a49c]" : "text-on-surface-variant"}
          `}>
            Select a component from the sidebar to view its live preview,
            usage examples, and prop documentation.
          </p>

          {/* Decorative dot grid */}
          <div className="flex items-center justify-center gap-1.5 opacity-30">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[#a8a49c]" : "bg-on-surface-variant"}`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComponentsIndex;
