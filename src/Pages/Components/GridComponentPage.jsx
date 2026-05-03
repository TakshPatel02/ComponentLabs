import React from 'react';
import BentoStatsGrid from '../../components/GridComponents/BentoStatsGrid';
import MasonryShowcaseGrid from '../../components/GridComponents/MasonryShowcaseGrid';
import CrosshairFeatureGrid from '../../components/GridComponents/CrosshairFeatureGrid';

const GridComponentPage = () => {
  return (
    <>
      {/* Bento Stats Grid Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Grids
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Bento Stats Board
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              An asymmetric bento layout featuring dynamic count-up animations, animated sparklines, and a sophisticated muted color palette for data visualization.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">
                data_usage
              </span>
              Animated Data
            </span>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)] dark:group-hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.4)]">
          <BentoStatsGrid />
        </div>
      </div>

      {/* Masonry Showcase Section */}
      <div className="w-full flex flex-col group mt-20">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Grids
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Masonry Showcase
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A fluid CSS-columns masonry grid designed specifically for component library previews. Features interactive placeholders and soft editorial typography.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">
                view_quilt
              </span>
              Fluid Columns
            </span>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)] dark:group-hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.4)]">
          <MasonryShowcaseGrid />
        </div>
      </div>

      {/* Crosshair Feature Grid Section */}
      <div className="w-full flex flex-col group mt-20 mb-20">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Grids
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Technical Crosshairs
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A highly distinctive feature grid styled like technical blueprints. Hovering smoothly inverts the cell colors while the crosshair markers remain fixed.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">
                architecture
              </span>
              Technical Aesthetic
            </span>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)] dark:group-hover:shadow-[0_20px_70px_-10px_rgba(0,0,0,0.4)]">
          <CrosshairFeatureGrid />
        </div>
      </div>
    </>
  );
};

export default GridComponentPage;