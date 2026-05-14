import React from "react";
import DocumentationPanel from "../../components/DocumentationPanel";
import { AnimatedFAQ } from "../../components/OtherComponents/AnimatedFAQ";
import CategorizedFAQ from "../../components/OtherComponents/CategorizedFAQ";

const FAQComponentPage = () => {
  return (
    <div className="w-full flex flex-col pt-12">

      {/* 1. Categorized FAQ */}
      <div className="w-full flex flex-col mb-24 group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Archetype 01
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Categorized FAQ
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              An elegant dark-themed FAQ section with fluid category switching and spring-animated selection chips.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-">
          <div className="w-full">
            <CategorizedFAQ />
          </div>
        </div>
      </div>

      {/* 2. Animated FAQ */}
      <div className="w-full flex flex-col mb-24 group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Archetype 02
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Standard Animated FAQ
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A clean, light-themed expandable accordion list with staggered item animations.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-">
          <div className="w-full">
            <AnimatedFAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponentPage;
