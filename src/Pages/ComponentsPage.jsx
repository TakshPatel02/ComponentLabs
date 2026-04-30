import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const CATEGORIES = [
  { id: "buttons", label: "Buttons", path: "/components/buttons" },
  { id: "text", label: "Text & Typography", path: "/components/text" },
  { id: "forms", label: "Forms & Identity", path: "/components/forms" },
  { id: "links", label: "Links & Navigation", path: "/components/links" },
  { id: "cards", label: "Cards & Layouts", path: "/components/cards" },
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
        <div className="sticky top-20 z-40 bg-surface/80 backdrop-blur-md py-4 mb-12 border-y border-oklab-10 px-4 md:px-0">
          <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <NavLink
                key={cat.id}
                to={cat.path}
                className={({ isActive }) =>
                  `shrink-0 px-5 py-2.5 rounded-full font-system-micro text-[11px] tracking-widest uppercase transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-cursor-cream shadow-sm"
                      : "bg-transparent border border-oklab-10 text-on-surface-variant hover:bg-oklab-10 hover:text-primary"
                  }`
                }
              >
                {cat.label}
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
