import React, { useState } from 'react';
import { AnimatedFAQ } from "../../components/OtherComponents/AnimatedFAQ";
import { TerminalTypingCard } from "../../components/OtherComponents/TerminalTypingCard";

const OtherComponentPage = () => {
  const [terminalReplayKey, setTerminalReplayKey] = useState(0);

  return (
    <>
      {/* Animated FAQ Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Other
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Animated Accordion FAQ
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A smooth accordion-style FAQ component with physics-based
              layout transitions. Uses an exclusive-open state.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <AnimatedFAQ />
        </div>
      </div>

      {/* Terminal Typing Card Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Other
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Terminal Typing Window
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A mocked CLI environment built with an authentic
              variable-speed typing animation. Ideal for hero sections or
              code setup instructions.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <button
              onClick={() => setTerminalReplayKey((v) => v + 1)}
              className="flex items-center justify-center gap-2 bg-primary text-cursor-cream hover:bg-error-warm px-5 py-2.5 rounded-lg text-sm font-medium font-['Space_Grotesk'] transition-all active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">
                replay
              </span>
              Rewatch Animation
            </button>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-16 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <TerminalTypingCard key={terminalReplayKey} />
        </div>
      </div>
    </>
  )
}

export default OtherComponentPage