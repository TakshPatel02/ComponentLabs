import React from "react";
import DocumentationPanel from "../../components/DocumentationPanel";
import { StaggeredEntranceHero } from "../../components/HeroComponents/StaggeredEntranceHero";
import DynamicHero from "../../components/HeroComponents/DynamicHero";
import AuroraHero from "../../components/HeroComponents/AuroraHero";

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
      <div className="w-full flex flex-col mb-24 group mt-6">
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
      <div className="w-full flex flex-col mb-24 group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Archetype 02
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Dynamic Component Primitives
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              Highly interactive UI elements with tactile feedback and fluid state transitions.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-">
          <div className="w-full">
            <DynamicHero />
          </div>
        </div>
      </div>

      {/* 3. Aurora Hero Archetype */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Archetype 03
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Aurora Gradient Hero
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A mesmerizing hero section with an animated aurora gradient, twinkling canvas starfield, and dynamic color-cycling CTA.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-">
          <div className="w-full">
            <AuroraHero />
          </div>
        </div>
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
