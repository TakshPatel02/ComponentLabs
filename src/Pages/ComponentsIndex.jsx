import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import DocsSidebar from "../components/DocsSidebar";
import { navConfig } from "../config/nav";
import {
  Type,
  RectangleHorizontal,
  FileText,
  Link2,
  LayoutDashboard,
  Keyboard,
  Grid2x2,
  Zap,
  Sparkles,
  CircleHelp,
  Cloud,
  PanelBottom,
  Puzzle,
  ArrowRight,
} from "lucide-react";

/* ── Category icon mapping ── */
const categoryIcons = {
  "TEXT & TYPOGRAPHY": Type,
  "BUTTONS": RectangleHorizontal,
  "FORMS & IDENTITY": FileText,
  "LINKS & NAVIGATION": Link2,
  "CARDS & LAYOUTS": LayoutDashboard,
  "KEYBOARDS": Keyboard,
  "GRIDS": Grid2x2,
  "HERO SECTIONS": Zap,
  "FEATURES": Sparkles,
  "FAQS": CircleHelp,
  "LOGO CLOUDS": Cloud,
  "FOOTERS": PanelBottom,
  "OTHER PRIMITIVES": Puzzle,
};

/* ── Category Card Component ── */
const CategoryCard = ({ group, index, isDark }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 80 + index * 60);
    return () => clearTimeout(timer);
  }, [index]);

  const componentCount = group.items.length;
  const previewItems = group.items.slice(0, 3);
  const firstHref = group.items[0]?.href || "/components";
  const Icon = categoryIcons[group.section] || categoryIcons["OTHER PRIMITIVES"];

  return (
    <Link
      ref={cardRef}
      to={firstHref}
      id={`category-card-${group.section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
      className="no-underline block group"
      style={{ opacity: 0 }}
    >
      <div
        className={`
          relative rounded-xl p-6 h-full
          border transition-all duration-300 ease-out
          ${isDark
            ? "bg-[#1a1a1a] border-white/8 hover:border-white/18 hover:bg-[#1e1e1e]"
            : "bg-white border-black/6 hover:border-black/14 hover:bg-[#FDFBF9]"
          }
        `}
        style={{
          boxShadow: isDark
            ? "0 1px 3px rgba(0,0,0,0.3)"
            : "0 1px 3px rgba(0,0,0,0.04)",
        }}
      >
        {/* Top row — Icon + Count badge */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={`
              w-10 h-10 rounded-lg flex items-center justify-center
              transition-colors duration-300
              ${isDark
                ? "bg-white/6 text-[#a8a49c] group-hover:text-[#E8567A] group-hover:bg-[#E8567A]/10"
                : "bg-black/4 text-[#8a8780] group-hover:text-[#E8567A] group-hover:bg-[#E8567A]/8"
              }
            `}
          >
            <Icon size={22} strokeWidth={1.6} />
          </div>
          <span
            className={`
              font-['Space_Grotesk'] text-[11px] font-semibold tracking-wide
              px-2.5 py-1 rounded-full
              ${isDark
                ? "bg-white/6 text-[#6b6960]"
                : "bg-black/4 text-[#8a8780]"
              }
            `}
          >
            {componentCount} {componentCount === 1 ? "component" : "components"}
          </span>
        </div>

        {/* Category name */}
        <h3
          className={`
            font-['Space_Grotesk'] text-[15px] font-semibold tracking-tight
            mb-3 capitalize
            ${isDark ? "text-[#e6e2e0]" : "text-[#1c1b1b]"}
          `}
          style={{ textTransform: "none" }}
        >
          {group.section.charAt(0) + group.section.slice(1).toLowerCase()}
        </h3>

        {/* Component previews */}
        <div className="flex flex-col gap-1.5 mb-5">
          {previewItems.map((item, i) => (
            <div key={item.href} className="flex items-center gap-2">
              <div
                className={`
                  w-[5px] h-[5px] rounded-full shrink-0
                  ${isDark ? "bg-[#48473f]" : "bg-[#C0BCB5]"}
                `}
              />
              <span
                className={`
                  font-['Inter'] text-[13px] leading-snug
                  ${isDark ? "text-[#7a776e]" : "text-[#8a8780]"}
                `}
              >
                {item.label}
              </span>
            </div>
          ))}
          {group.items.length > 3 && (
            <span
              className={`
                font-['Inter'] text-[12px] ml-[13px]
                ${isDark ? "text-[#5a574f]" : "text-[#b0ada6]"}
              `}
            >
              +{group.items.length - 3} more
            </span>
          )}
        </div>

        {/* Bottom arrow row */}
        <div
          className={`
            flex items-center justify-between pt-4
            border-t
            ${isDark ? "border-white/6" : "border-black/5"}
          `}
        >
          <span
            className={`
              font-['Inter'] text-[12.5px] font-medium
              ${isDark
                ? "text-[#6b6960] group-hover:text-[#E8567A]"
                : "text-[#8a8780] group-hover:text-[#E8567A]"
              }
              transition-colors duration-300
            `}
          >
            Browse category
          </span>
          <div
            className={`
              w-7 h-7 rounded-full flex items-center justify-center
              transition-all duration-300
              ${isDark
                ? "bg-white/5 text-[#6b6960] group-hover:bg-[#E8567A] group-hover:text-white"
                : "bg-black/4 text-[#8a8780] group-hover:bg-[#E8567A] group-hover:text-white"
              }
            `}
          >
            <ArrowRight size={14} strokeWidth={2.5} />
          </div>
        </div>
      </div>
    </Link>
  );
};

/* ── Main Page ── */
const ComponentsIndex = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Filter out the DOCS section — only show component categories
  const categories = navConfig.filter((g) => g.section !== "DOCS");
  const totalComponents = categories.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <div className={`flex min-h-screen ${isDark ? "bg-[#111]" : "bg-[#F5F3EE]"}`}>
      {/* Left sidebar */}
      <DocsSidebar />

      {/* Main content area */}
      <main className="ml-0 md:ml-[240px] flex-1 min-h-screen px-6 md:px-10 lg:px-14 py-12 md:py-16">
        <div className="max-w-[1080px] mx-auto">

          {/* ── Header ── */}
          <div className="mb-12 md:mb-14">
            {/* Category tag */}
            <span className={`
              inline-block font-['Space_Grotesk'] text-[10.5px] font-semibold
              uppercase tracking-[0.15em] mb-3 select-none
              ${isDark ? "text-[#6b6960]" : "text-[#8a8780]"}
            `}>
              Component Library
            </span>

            {/* Heading */}
            <h1 className="font-['Space_Grotesk'] text-3xl md:text-[42px] font-bold text-primary tracking-tight leading-tight mb-3">
              Browse Components
            </h1>

            {/* Description */}
            <p className={`
              font-['Inter'] text-base md:text-[17px] leading-relaxed max-w-[540px]
              ${isDark ? "text-[#a8a49c]" : "text-on-surface-variant"}
            `}>
              Explore {totalComponents} handcrafted components across {categories.length} categories.
              Select a category to dive into live previews, usage examples, and documentation.
            </p>
          </div>

          {/* ── Category Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {categories.map((group, idx) => (
              <CategoryCard
                key={group.section}
                group={group}
                index={idx}
                isDark={isDark}
              />
            ))}
          </div>

          {/* ── Bottom decoration ── */}
          <div className="flex items-center justify-center gap-1.5 opacity-30 mt-16">
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
