import React from "react";
import DocumentationPanel from "../../components/DocumentationPanel";
import { StaggeredEntranceHero } from "../../components/HeroComponents/StaggeredEntranceHero";
import DynamicHero from "../../components/HeroComponents/DynamicHero";

const HeroPageComponentPage = () => {
  return (
    <div className="w-full flex flex-col pt-12">
      {/* Page Header Section */}
      <div className="w-full flex flex-col items-center justify-center text-center px-4 mb-16">
        <h1 className="font-display-hero text-5xl md:text-[100px] leading-[0.9] text-primary tracking-tighter mb-8">
          Animated Hero <span className="italic">Primitives</span>
        </h1>
        <p className="font-editorial-body text-xl text-on-surface-variant max-w-2xl italic leading-relaxed">
          A curated collection of high-end, Framer Motion-ready hero section
          archetypes. Designed with precision craft, leveraging warm tonal
          shifts and atmospheric depth.
        </p>
      </div>

      {/* 1. Staggered Entrance Archetype */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Archetype 01
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              The Staggered Entrance
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              High-fidelity typography patterns with orchestrated entrance
              states.
            </p>
          </div>
        </div>

        <DocumentationPanel
          componentName="StaggeredEntranceHero"
          importPath="../src/components/HeroComponents/StaggeredEntranceHero"
          defaultUsage="<StaggeredEntranceHero />"
          props={[]}
          examples={[
            {
              title: "Basic usage with hard-coded content",
              code: `// Currently uses internal heading, subtext, and action buttons
<StaggeredEntranceHero />`,
            },
            {
              title: "Suggested customization (refactor)",
              code: `// To customize, modify JSX or add props:
<StaggeredEntranceHero
  title="Your Custom Title"
  subtitle="Your custom subtitle"
  actions={[{ label: "Button", href: "#" }]}
/>`,
            },
          ]}
          notes={[
            "Uses framer-motion for staggered entrance animations.",
            "Currently uses hard-coded copy and buttons in the JSX.",
            "Perfect for landing pages and marketing hero sections.",
            "Consider adding title, subtitle, and actions props for reusability.",
            "Ensure framer-motion is installed in your project.",
          ]}
        >
          <div className="w-full full-width-breakout overflow-hidden">
            <StaggeredEntranceHero />
          </div>
        </DocumentationPanel>
      </div>

      {/* 2. Dynamic Hero Archetype */}
      <div className="w-full flex flex-col items-center justify-center text-center px-4 mt-32 mb-12">
        <span className="font-system-micro text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/40 font-bold mb-4">
          Archetype 02
        </span>
        <h2 className="font-display-hero text-4xl md:text-[60px] leading-[0.9] text-primary tracking-tighter mb-4">
          Dynamic Component <span className="italic">Primitives</span>
        </h2>
        <p className="font-editorial-body text-lg text-on-surface-variant max-w-2xl italic leading-relaxed">
          Highly interactive UI elements with tactile feedback and fluid state
          transitions.
        </p>
      </div>

      <div className="w-full full-width-breakout overflow-hidden">
        <DynamicHero />
      </div>

      {/* Placeholder for future archetypes */}
      <div className="w-full py-32 flex flex-col items-center justify-center border-t oklab-border border-dashed mt-24">
        <span className="font-system-micro text-[10px] tracking-widest uppercase text-on-surface-variant/40">
          More Archetypes coming soon
        </span>
      </div>
    </div>
  );
};

export default HeroPageComponentPage;
