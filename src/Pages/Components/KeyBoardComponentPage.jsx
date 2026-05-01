import React from 'react';
import MacKeyboard from '../../components/KeyBoardComponents/MacKeyboard';
import TypewriterKeyboard from '../../components/KeyBoardComponents/TypewriterKeyboard';

const KeyBoardComponentPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-12 pb-24 px-8 gap-24">
      <div className="w-full flex flex-col items-center">
        <div className="mb-16 text-center max-w-2xl">
          <span className="font-system-micro text-system-micro uppercase tracking-widest text-on-surface-variant mb-6 block">
            Mechanical Keyboard
          </span>
          <h1 className="font-display-hero text-5xl md:text-display-hero text-primary tracking-tighter mb-6">
            Mac-Style <span className="italic text-secondary">Layout</span>
          </h1>
          <p className="font-editorial-body text-editorial-body text-on-surface-variant italic">
            A fully responsive, interactive mechanical keyboard component inspired by Mac aesthetics. Engineered with Tailwind CSS and Framer Motion. Try typing on your physical keyboard to test the interactive states!
          </p>
        </div>
        <MacKeyboard />
      </div>

      <div className="w-full flex flex-col items-center bg-[#F4F3EE] py-24 -mx-8 px-8" style={{ width: 'calc(100% + 4rem)' }}>
        <div className="mb-16 text-center max-w-2xl">
          <span className="font-system-micro text-[10px] tracking-[0.2em] uppercase text-[#888] mb-6 block">
            Limited Edition Release
          </span>
          <h1 className="font-serif text-5xl md:text-[64px] text-[#111] tracking-tight mb-6">
            The Typewriter Edition
          </h1>
          <p className="font-serif text-lg md:text-[20px] text-[#444] leading-relaxed">
            A masterclass in tactile nostalgia. Precision-engineered mechanical switches housed within a heavy-gauge metallic chassis, finished with genuine chrome-rimmed ivory keycaps.
          </p>
        </div>
        <TypewriterKeyboard />
      </div>
    </div>
  );
};

export default KeyBoardComponentPage;