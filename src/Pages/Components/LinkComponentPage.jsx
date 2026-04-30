import React from 'react'
import ClipPathLinks from '../../components/Linkcomponent/ClipPathLinks';
import TakeoverLinks from '../../components/Linkcomponent/TakeoverLinks';
import NeuralHoverLinks from '../../components/Linkcomponent/NeuralHoverLinks';

const LinkComponentPage = () => {
  return (
    <>
      {/* Clip Path Links Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Other
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Clip Path Icon Links
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A directional hover reveal grid where each tile animates from
              the nearest cursor edge using clip-path transitions.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <div className="w-full max-w-5xl">
            <ClipPathLinks />
          </div>
        </div>
      </div>

      {/* Takeover Links Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Other
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Takeover Links
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A stacked navigation effect with per-letter upward flip and a
              full-height bottom-to-top color takeover on hover.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <div className="w-full max-w-5xl">
            <TakeoverLinks />
          </div>
        </div>
      </div>

      {/* Neural Hover Links Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Navigation
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Neural Hover Links
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              AI-infused navigation links with mouse-tracking image previews, neural scan lines, cryptographic text scramble, and floating particle effects.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">
                mouse
              </span>
              Hover each link
            </span>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <div className="w-full max-w-5xl">
            <NeuralHoverLinks />
          </div>
        </div>
      </div>
    </>
  )
}

export default LinkComponentPage