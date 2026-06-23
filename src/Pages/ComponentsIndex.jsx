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
  Megaphone,
  Hash,
} from "lucide-react";

/* ── Category icon mapping ── */
const categoryIcons = {
  "TEXT & TYPOGRAPHY": Type,
  "BUTTONS": RectangleHorizontal,
  "NUMBERS & COUNTERS": Hash,
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
  "CTA SECTIONS": Megaphone,
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
  const firstHref = group.items[0]?.href || "/components";
  const Icon = categoryIcons[group.section] || categoryIcons["OTHER PRIMITIVES"];

  return (
    <Link
      ref={cardRef}
      to={firstHref}
      id={`category-card-${group.section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
      className="no-underline block group mb-4 md:mb-5 break-inside-avoid"
      style={{ opacity: 0 }}
    >
      <div
        className={`
          relative rounded-2xl p-6 sm:p-7
          transition-all duration-500 ease-out
          bg-surface-container/30 backdrop-blur-md
          border border-border-fallback-10/50
          hover:bg-surface-container/50 hover:border-error-warm/30
          hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(207,45,86,0.15)]
        `}
      >
        {/* Top row — Icon + Count badge */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={`
              w-10 h-10 rounded-xl flex items-center justify-center
              transition-all duration-500 bg-surface-container/50 border border-border-fallback-10/50
              text-on-surface-variant/70 group-hover:text-error-warm group-hover:border-error-warm/30
              group-hover:shadow-[0_0_15px_-3px_rgba(207,45,86,0.2)]
            `}
          >
            <Icon size={20} strokeWidth={1.5} />
          </div>
          <span
            className="font-system-micro text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-full bg-surface-container/40 border border-border-fallback-10/50 text-on-surface-variant/60"
          >
            {componentCount} {componentCount === 1 ? "Item" : "Items"}
          </span>
        </div>

        {/* Category name */}
        <h3
          className="font-section-heading text-[18px] md:text-[20px] font-bold tracking-tight mb-4 capitalize text-primary transition-colors group-hover:text-error-warm/90"
        >
          {group.section.charAt(0) + group.section.slice(1).toLowerCase()}
        </h3>

        {/* Component previews (Minimal Inline Style) */}
        <p className="font-editorial-standard text-[14.5px] leading-relaxed text-on-surface-variant/60 mb-6 group-hover:text-on-surface-variant/90 transition-colors duration-300">
          {group.items.slice(0, 3).map(item => item.label).join(", ")}
          {group.items.length > 3 ? <span className="opacity-50">, and {group.items.length - 3} more</span> : ""}
        </p>

        {/* Bottom arrow row */}
        <div className="flex items-center justify-between pt-5 border-t border-border-fallback-10/40">
          <span className="font-system-micro text-[11px] font-bold uppercase tracking-widest text-on-surface-variant/50 group-hover:text-error-warm transition-colors duration-300">
            Browse collection
          </span>
          <div className="text-on-surface-variant/40 group-hover:text-error-warm group-hover:translate-x-1 transition-all duration-300">
            <ArrowRight size={16} strokeWidth={2} />
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
    <div className="flex min-h-screen bg-surface font-ui-body">
      {/* Left sidebar */}
      <DocsSidebar />

      {/* Main content area */}
      <main className="ml-0 md:ml-60 flex-1 min-h-screen px-6 md:px-10 lg:px-14 py-16 md:py-24">
        <div className="max-w-270 mx-auto">

          {/* ── Header ── */}
          <div className="mb-16 md:mb-20" id="header">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container/50 border border-border-fallback-10/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
              <span className="font-system-micro text-[11px] font-bold text-on-surface-variant/70 tracking-widest uppercase">
                Component Library
              </span>
            </div>
            <h1 className="font-display-hero text-[40px] md:text-[56px] leading-[1.1] text-primary tracking-tight transition-colors mb-5">
              Browse Components
            </h1>
            <p className="font-editorial-standard text-[18px] md:text-[20px] text-on-surface-variant/80 max-w-3xl leading-relaxed">
              Explore {totalComponents} handcrafted components across {categories.length} categories.
              Select a category to dive into live previews, usage examples, and documentation.
            </p>
          </div>

          {/* ── Category Grid (Masonry) ── */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
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
