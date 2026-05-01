import React from 'react';
import MacKeyboard from '../../components/KeyBoardComponents/MacKeyboard';

const KeyBoardComponentPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-12 pb-24 px-8">
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
  );
};

export default KeyBoardComponentPage;