import React from "react";
import { motion } from "framer-motion";

const LANDING_PAGES = [
  {
    id: "saas-invoicing",
    title: "SaaS Invoicing",
    description: "Enterprise billing platform with AI autocomplete, customer analytics, and pipeline management.",
    tags: ["SaaS", "Finance", "AI"],
    status: "live",
    route: "/preview/saas-landing",
    colors: { hero: "#3b82f6", accent: "#6366f1", bg: "#fafbfe" },
  },
  {
    id: "ai-product",
    title: "AI Product Studio",
    description: "Modern AI product showcase with gradient aesthetics, feature breakdowns, and interactive demos.",
    tags: ["AI", "Product", "Dark"],
    status: "coming",
    colors: { hero: "#8b5cf6", accent: "#a78bfa", bg: "#0f0f1a" },
  },
  {
    id: "dev-tools",
    title: "Developer Platform",
    description: "CLI-first developer tools landing with terminal previews, code snippets, and API documentation.",
    tags: ["DevTools", "API", "Docs"],
    status: "coming",
    colors: { hero: "#10b981", accent: "#34d399", bg: "#fafdf7" },
  },
  {
    id: "ecommerce",
    title: "E-Commerce Starter",
    description: "Clean storefront with product grids, cart preview, and checkout flow components.",
    tags: ["Commerce", "Retail", "Minimal"],
    status: "coming",
    colors: { hero: "#f59e0b", accent: "#fbbf24", bg: "#fffbf5" },
  },
];

/* Mini browser-frame preview that visually hints at the landing page layout */
const MiniPreview = ({ colors, status }) => (
  <div className="relative w-full aspect-16/10 rounded-lg overflow-hidden" style={{ backgroundColor: colors.bg, border: "1px solid var(--border-fallback-10)" }}>
    {/* Browser chrome */}
    <div className="flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: "1px solid var(--border-fallback-10)" }}>
      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#febc2e" }} />
      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#28c840" }} />
      <div className="flex-1 mx-2 h-3 rounded-full" style={{ backgroundColor: colors.bg === "#0f0f1a" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)" }} />
    </div>
    {/* Mini layout blocks */}
    <div className="px-4 pt-3 pb-4 flex flex-col items-center gap-2">
      {/* Nav */}
      <div className="w-full flex justify-between items-center mb-2">
        <div className="w-12 h-1.5 rounded-full" style={{ backgroundColor: colors.hero, opacity: 0.6 }} />
        <div className="flex gap-2">
          <div className="w-6 h-1 rounded-full" style={{ backgroundColor: colors.bg === "#0f0f1a" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)" }} />
          <div className="w-6 h-1 rounded-full" style={{ backgroundColor: colors.bg === "#0f0f1a" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)" }} />
          <div className="w-6 h-1 rounded-full" style={{ backgroundColor: colors.bg === "#0f0f1a" ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.08)" }} />
        </div>
      </div>
      {/* Hero text */}
      <div className="w-3/4 h-2.5 rounded-full mt-2" style={{ backgroundColor: colors.bg === "#0f0f1a" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)" }} />
      <div className="w-1/2 h-2.5 rounded-full" style={{ backgroundColor: colors.bg === "#0f0f1a" ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.12)" }} />
      <div className="w-2/5 h-1.5 rounded-full mt-1" style={{ backgroundColor: colors.bg === "#0f0f1a" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)" }} />
      {/* CTA button */}
      <div className="w-16 h-3 rounded mt-2" style={{ backgroundColor: colors.hero, opacity: 0.7 }} />
      {/* Feature card */}
      <div className="w-4/5 h-10 rounded-md mt-3" style={{ backgroundColor: colors.bg === "#0f0f1a" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)", border: `1px solid ${colors.bg === "#0f0f1a" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}` }} />
    </div>
    {/* Gradient shimmer overlay */}
    <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: `linear-gradient(135deg, transparent 40%, ${colors.hero}10 50%, transparent 60%)` }} />
    {/* Coming Soon overlay */}
    {status === "coming" && (
      <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px]" style={{ backgroundColor: colors.bg === "#0f0f1a" ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)" }}>
        <span className="text-xs font-semibold tracking-[0.15em] uppercase px-3 py-1.5 rounded-full bg-surface-300 text-on-surface-variant" style={{ fontFamily: "'Space Grotesk'" }}>
          Coming Soon
        </span>
      </div>
    )}
  </div>
);

const LandingPageComponentPage = () => {
  const handleOpenPreview = (page) => {
    if (page.status === "live") {
      window.open(page.route, "_blank");
    }
  };

  return (
    <div className="w-full flex flex-col pt-12">
      {/* Page Header */}
      <div className="w-full flex flex-col items-center justify-center text-center px-4 mb-16">
        <h1 className="font-display-hero text-5xl md:text-[100px] leading-[0.9] text-primary tracking-tighter mb-8">
          Landing <span className="italic text-error-warm">Pages</span>
        </h1>
        <p className="font-editorial-body text-xl text-on-surface-variant max-w-2xl italic leading-relaxed">
          Full-page, production-ready landing page templates. Click any card to
          explore the complete experience in a new tab.
        </p>
      </div>

      {/* Grid of Preview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LANDING_PAGES.map((page, i) => (
          <motion.div
            key={page.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={() => handleOpenPreview(page)}
            className={`group bg-surface-300 rounded-xl p-4 oklab-border transition-all duration-400 ${
              page.status === "live"
                ? "cursor-pointer hover:shadow-lg hover:-translate-y-1"
                : "cursor-default opacity-80"
            }`}
          >
            {/* Preview thumbnail */}
            <MiniPreview colors={page.colors} status={page.status} />

            {/* Card info */}
            <div className="mt-4 px-1">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-section-heading text-[22px] text-primary tracking-tight group-hover:text-error-warm transition-colors">
                  {page.title}
                </h3>
                {page.status === "live" && (
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-error-warm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    open_in_new
                  </span>
                )}
              </div>
              <p className="font-editorial-standard text-editorial-standard text-on-surface-variant leading-relaxed mb-4">
                {page.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {page.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Placeholder for more */}
      <div className="w-full py-24 flex flex-col items-center justify-center border-t oklab-border border-dashed mt-16">
        <span className="font-system-micro text-[10px] tracking-widest uppercase text-on-surface-variant/40">
          More landing pages coming soon
        </span>
      </div>
    </div>
  );
};

export default LandingPageComponentPage;
