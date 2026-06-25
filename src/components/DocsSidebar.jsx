import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { navConfig } from "../config/nav";

const DocsSidebar = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const isDark = theme === "dark";

  const [mobileOpen, setMobileOpen] = useState(false);

  // Initialize expanded sections
  const [expandedSections, setExpandedSections] = useState(() => {
    return navConfig.reduce((acc, group) => {
      // Default expand DOCS and the section containing the current path
      const isActive = group.items.some(item => pathname === item.href || pathname.startsWith(item.href));
      acc[group.section] = group.section === "DOCS" || isActive;
      return acc;
    }, {});
  });

  // Update expanded sections when pathname changes
  useEffect(() => {
    setExpandedSections(prev => {
      const next = { ...prev };
      navConfig.forEach(group => {
        if (group.items.some(item => pathname === item.href)) {
          next[group.section] = true;
        }
      });
      return next;
    });
  }, [pathname]);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  // Close sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Mobile hamburger toggle (FAB on mobile) ── */}
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Toggle sidebar navigation"
        className={`
          md:hidden fixed bottom-6 right-6 z-51 w-14 h-14 shadow-lg
          flex items-center justify-center rounded-full
          border-none cursor-pointer bg-primary text-on-primary
          transition-transform duration-200 hover:scale-105 active:scale-95
        `}
      >
        {mobileOpen ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="4" y1="4" x2="16" y2="16" />
            <line x1="16" y1="4" x2="4" y2="16" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="5" x2="17" y2="5" />
            <line x1="3" y1="10" x2="17" y2="10" />
            <line x1="3" y1="15" x2="17" y2="15" />
          </svg>
        )}
      </button>

      {/* ── Mobile backdrop ── */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 z-39 bg-black/40"
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`
          fixed top-0 left-0 w-60 h-screen z-40
          flex flex-col
          border-r border-border-fallback-10
          transition-transform duration-300 ease-in-out
          ${isDark ? "bg-[#111]" : "bg-[#F5F3EE]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            flex items-center h-16 px-5 shrink-0
            border-b border-border-fallback-10
            no-underline
            group
          "
        >
          <span className="font-['Space_Grotesk'] text-lg font-bold tracking-tighter text-primary group-hover:text-[#E8567A] transition-colors duration-150">
            ComponentLab
          </span>
        </Link>

        {/* Scrollable nav */}
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-4 pb-12 custom-scrollbar">
          {navConfig.map((group) => {
            const isExpanded = expandedSections[group.section];
            
            return (
              <div key={group.section} className="mb-1 px-2">
                {/* Section header toggle */}
                <button
                  onClick={() => toggleSection(group.section)}
                  className={`
                    w-full flex items-center justify-between
                    px-3 py-2 rounded-md cursor-pointer border-none bg-transparent outline-none
                    font-['Space_Grotesk'] text-[11px] font-bold
                    uppercase tracking-widest leading-snug
                    select-none transition-colors duration-200
                    ${isDark ? "text-[#a8a49c] hover:bg-white/5 hover:text-[#e6e2e0]" : "text-[#8a8780] hover:bg-black/5 hover:text-[#48473f]"}
                  `}
                >
                  <span>{group.section}</span>
                  <ChevronRight 
                    size={14} 
                    className={`transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} 
                  />
                </button>

                {/* Links */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="list-none m-0 p-0 overflow-hidden"
                    >
                      <div className="py-1">
                        {group.items.map((item) => {
                          const isActive = pathname === item.href;

                          return (
                            <li key={item.href}>
                              <Link
                                to={item.href}
                                className={`
                                  block py-1.5 px-3 mx-1 rounded-md
                                  font-['Inter'] text-[14px] leading-normal
                                  no-underline cursor-pointer
                                  transition-all duration-150
                                  ${isActive
                                    ? "bg-[#E8567A]/10 text-[#E8567A] font-medium"
                                    : isDark
                                      ? "text-[#8a8780] hover:text-[#e6e2e0] hover:bg-white/5"
                                      : "text-on-surface-variant/80 hover:text-on-surface hover:bg-black/5"
                                  }
                                `}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </div>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default DocsSidebar;
