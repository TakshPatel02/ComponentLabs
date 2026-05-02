import React from 'react';
import AsymmetricBento from '../../components/GridComponents/AsymmetricBento';

const GridComponentPage = () => {
  return (
    <>
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Grids
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Asymmetric Bento Grid
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A meticulously crafted asymmetric layout utilizing responsive CSS grid mechanics. Highly optimized structure, layered with interactive spotlights and abstract depth.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">
                grid_view
              </span>
              Interactive Hover
            </span>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <AsymmetricBento />
        </div>
      </div>
    </>
  );
};

export default GridComponentPage;