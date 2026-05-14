import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { navConfig } from "../config/nav";

const DocsSidebar = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const isDark = theme === "dark";

  const [mobileOpen, setMobileOpen] = useState(false);

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
      {/* ── Mobile hamburger toggle ── */}
      <button
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Toggle sidebar navigation"
        className={`
          md:hidden fixed top-[18px] left-4 z-51 w-8 h-8
          flex items-center justify-center rounded-md
          border-none cursor-pointer text-primary
          transition-colors duration-150
          hover:bg-surface-container
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
          fixed top-0 left-0 w-[240px] h-screen z-40
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
        <nav className="flex-1 overflow-y-auto overflow-x-hidden py-3 pb-6">
          {navConfig.map((group, idx) => (
            <div key={group.section} className={idx === 0 ? "mt-1" : "mt-5"}>
              {/* Section header */}
              <div
                className={`
                  px-5 mb-1
                  font-['Space_Grotesk'] text-[10.5px] font-semibold
                  uppercase tracking-widest leading-snug
                  select-none
                  ${isDark ? "text-[#6b6960]" : "text-[#8a8780]"}
                `}
              >
                {group.section}
              </div>

              {/* Links */}
              <ul className="list-none m-0 p-0">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        to={item.href}
                        className={`
                          block py-[5px] pl-7 pr-5
                          font-['Inter'] text-[13.5px] leading-normal
                          no-underline cursor-pointer
                          transition-colors duration-150
                          ${
                            isActive
                              ? "text-[#E8567A] font-medium"
                              : isDark
                              ? "text-[#a8a49c] hover:text-[#e6e2e0]"
                              : "text-on-surface-variant hover:text-on-surface"
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default DocsSidebar;
