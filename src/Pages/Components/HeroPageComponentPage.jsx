import React from 'react';
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
          A curated collection of high-end, Framer Motion-ready hero section archetypes. Designed with precision craft, leveraging warm tonal shifts and atmospheric depth.
        </p>
      </div>

      {/* 1. Staggered Entrance Archetype */}
      <div className="w-full flex flex-col items-center justify-center text-center px-4 mt-16 mb-12">
        <span className="font-system-micro text-[10px] tracking-[0.3em] uppercase text-on-surface-variant/40 font-bold mb-4">
          Archetype 01
        </span>
        <h2 className="font-display-hero text-4xl md:text-[60px] leading-[0.9] text-primary tracking-tighter mb-4">
          The Staggered <span className="italic">Entrance</span>
        </h2>
        <p className="font-editorial-body text-lg text-on-surface-variant max-w-2xl italic">
          High-fidelity typography patterns with orchestrated entrance states.
        </p>
      </div>

      <div className="w-full full-width-breakout overflow-hidden pb-32 border-b border-oklab-10">
        <StaggeredEntranceHero />
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
          Highly interactive UI elements with tactile feedback and fluid state transitions.
        </p>
      </div>

      <div className="w-full full-width-breakout overflow-hidden">
        <DynamicHero />
      </div>

      {/* Placeholder for future archetypes */}
      <div className="w-full py-32 flex flex-col items-center justify-center border-t border-oklab-10 border-dashed mt-24">
        <span className="font-system-micro text-[10px] tracking-widest uppercase text-on-surface-variant/40">
          More Archetypes coming soon
        </span>
      </div>
    </div>
  );
};

export default HeroPageComponentPage;