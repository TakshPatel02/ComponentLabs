import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const CATEGORIES = [
  { id: "buttons", label: "Buttons", path: "/components/buttons" },
  { id: "text", label: "Text & Typography", path: "/components/text" },
  { id: "forms", label: "Forms & Identity", path: "/components/forms" },
  { id: "links", label: "Links & Navigation", path: "/components/links" },
  { id: "cards", label: "Cards & Layouts", path: "/components/cards" },
  { id: "keyboard", label: "Keyboards", path: "/components/keyboard" },
  { id: "grids", label: "Grids", path: "/components/grids" },
  { id: "hero", label: "Hero Sections", path: "/components/hero" },
  { id: "other", label: "Other Primitives", path: "/components/other" },
];

const ComponentsPage = () => {
  return (
    <div className="min-h-screen bg-surface font-ui-body text-on-surface">
      <main className="max-w-container-max mx-auto sm:px-8 py-24 md:py-32">
        {/* Page Header matching the Editorial/Lab Aesthetic */}
        <div className="px-4 md:px-0 mb-12">
          <span className="font-system-micro text-system-micro uppercase tracking-widest text-on-surface-variant mb-6 block">
            Component Library
          </span>
          <h1 className="font-display-hero text-5xl md:text-display-hero text-primary tracking-tighter mb-6">
            Interactive{" "}
            <span className="italic text-error-warm">Primitives</span>
          </h1>
          <p className="font-editorial-body text-editorial-body text-on-surface-variant max-w-2xl italic">
            A rigorous catalog of engineered UI elements, ready for assembly.
          </p>
        </div>

        {/* Unique Sub-Navigation Menu */}
        <div className="relative mb-12">
          <nav className="flex flex-wrap items-center gap-2 px-4 md:px-0 relative z-0">
            {CATEGORIES.map((cat) => (
              <NavLink
                key={cat.id}
                to={cat.path}
                className={({ isActive }) =>
                  `relative shrink-0 flex items-center justify-center px-5 py-2 rounded-full transition-colors duration-300 z-10 ${isActive
                    ? "text-on-primary"
                    : "text-on-surface-variant hover:bg-black/5 hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="activeTabIndicator"
                        className="absolute inset-0 bg-primary rounded-full -z-10 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30
                        }}
                      />
                    )}
                    <span className="font-system-micro text-[10px] tracking-wider uppercase relative z-10 font-medium whitespace-nowrap">
                      {cat.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Dynamic Nested Route Content */}
        <div className="px-4 md:px-0 pb-24">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ComponentsPage;
