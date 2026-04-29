import React, { useState } from "react";
import EncryptedText from "../components/EncryptedText";
import VelocityText from "../components/VelocityText";
import { CreativeHighlightText } from "../components/CreativeHighlightText";
import FillButton from "../components/FillButton";
import UploadButton from "../components/UploadButton";

const ComponentsPage = () => {
  const [replayKey, setReplayKey] = useState(0);
  const [highlightReplayKey, setHighlightReplayKey] = useState(0);

  return (
    <div className="min-h-screen bg-surface font-ui-body text-on-surface">
      <main className="max-w-container-max mx-auto sm:px-8 py-24 md:py-32">
        {/* Page Header matching the Editorial/Lab Aesthetic */}
        <div className="px-4 md:px-0 mb-16">
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

        {/* Full-Width Components Layout */}
        <div className="px-4 md:px-0 flex flex-col gap-24 pb-24">
          {/* Encrypted Text Component Section */}
          <div className="w-full flex flex-col group">
            {/* Component Header and Controls */}
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
                  Typography
                </span>
                <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
                  Encrypted Text
                </h3>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
                  Cryptographic text reveal effect for high-impact typography
                  entrances.
                </p>
              </div>

              <div className="shrink-0 flex items-center">
                <button
                  onClick={() => setReplayKey((v) => v + 1)}
                  className="flex items-center justify-center gap-2 bg-primary text-cursor-cream hover:bg-error-warm px-5 py-2.5 rounded-lg text-sm font-medium font-['Space_Grotesk'] transition-all active:scale-[0.98] shadow-sm hover:shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    replay
                  </span>
                  Rewatch Animation
                </button>
              </div>
            </div>

            <div className="w-full min-h-75 md:h-96 bg-cursor-light rounded-xl oklab-border p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
              <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-black/2 pointer-events-none"></div>

              <div className="relative z-10 w-full h-full flex items-center justify-center bg-cursor-cream/60 rounded-lg oklab-border shadow-sm">
                <EncryptedText
                  key={replayKey}
                  text="Welcome to ComponentLab"
                  className="text-2xl md:text-5xl font-mono-code font-bold text-primary tracking-tighter"
                  interval={40}
                  duration={2000}
                />
              </div>
            </div>
          </div>

          {/* Velocity Text Component Section */}
          <div className="w-full flex flex-col group mt-6">
            {/* Component Header and Controls */}
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
                  Interaction
                </span>
                <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
                  Velocity Text
                </h3>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
                  Scroll-linked kinetic typography that transforms scroll
                  velocity into dynamic skew and translation.
                </p>
              </div>

              <div className="shrink-0 flex items-center">
                <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">
                    mouse
                  </span>
                  Scroll inside container
                </span>
              </div>
            </div>

            {/* Component Display Area (Scrollable Showcase) */}
            <div className="w-full bg-cursor-cream/50 rounded-xl oklab-border flex flex-col relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)] overflow-hidden">
              <VelocityText
                heightClass="h-96"
                text="Nothing in this world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan 'Press On!' has solved and always will solve the problems of the human race."
              />
            </div>
          </div>

          {/* Creative Highlight Text Component Section */}
          <div className="w-full flex flex-col group mt-6">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
                  Presentation
                </span>
                <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
                  Creative Highlight Text
                </h3>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
                  A neon-esque AI-inspired text highlight with floating
                  particles and path drawing animation.
                </p>
              </div>

              <div className="shrink-0 flex items-center">
                <button
                  onClick={() => setHighlightReplayKey((v) => v + 1)}
                  className="flex items-center justify-center gap-2 bg-primary text-cursor-cream hover:bg-error-warm px-5 py-2.5 rounded-lg text-sm font-medium font-['Space_Grotesk'] transition-all active:scale-[0.98] shadow-sm hover:shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    replay
                  </span>
                  Rewatch Animation
                </button>
              </div>
            </div>

            <div className="w-full bg-cursor-cream/50 min-h-75 md:h-96 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
              <CreativeHighlightText key={highlightReplayKey} />
            </div>
          </div>

          {/* Fill Button Component Section */}
          <div className="w-full flex flex-col group mt-6">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
                  Interaction
                </span>
                <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
                  Fill Button
                </h3>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
                  A sequenced fill animation starting with a horizontal border
                  expansion, followed by an elegant vertical fill.
                </p>
              </div>
            </div>

            <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-75 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
              <div className="flex items-center gap-6 flex-wrap justify-center">
                <FillButton>Hover Me</FillButton>
                <FillButton
                  className="border-error-warm text-error-warm group-hover/btn:text-surface"
                  fillColorClass="bg-error-warm"
                >
                  Destructive Action
                </FillButton>
              </div>
            </div>
          </div>

          {/* Upload Button Component Section */}
          <div className="w-full flex flex-col group mt-6">
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex-1">
                <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
                  Interaction
                </span>
                <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
                  Upload Button
                </h3>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
                  A simulated file upload action combining a linear progress
                  indicator with a satisfying success completion state.
                </p>
              </div>
            </div>

            <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-75 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
              <div className="flex items-center gap-6 flex-wrap justify-center">
                <UploadButton />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComponentsPage;
