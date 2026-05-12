import React from "react";
import DocumentationPanel from "../../components/DocumentationPanel";
import CodeShowcaseFeature from "../../components/FeatureComponents/CodeShowcaseFeature";

const FeatureComponentPage = () => {
  return (
    <div className="w-full flex flex-col pt-12">
      
      {/* 1. Code Showcase Feature */}
      <div className="w-full flex flex-col mb-24 group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Archetype 01
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Code Showcase Segment
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A premium, dark-themed code demonstration component. Features smooth language switching and simulated syntax highlighting.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <div className="w-full">
            <CodeShowcaseFeature />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponentPage;
