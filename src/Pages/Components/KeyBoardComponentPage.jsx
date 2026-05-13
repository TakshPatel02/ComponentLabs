import React from 'react';
import DocumentationPanel from "../../components/DocumentationPanel";
import MacKeyboard from '../../components/KeyBoardComponents/MacKeyboard';
import MacKeyboardDark from '../../components/KeyBoardComponents/MacKeyboardDark';
import TypewriterKeyboard from '../../components/KeyBoardComponents/TypewriterKeyboard';

const KeyBoardComponentPage = () => {
  return (
    <>
      {/* Mac Keyboard Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Keyboard
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Mac-Style Layout
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A fully responsive, interactive mechanical keyboard component inspired by Mac aesthetics. Engineered with Tailwind CSS and Framer Motion. Try typing on your physical keyboard to test the interactive states!
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">
                keyboard
              </span>
              Type on your keyboard
            </span>
          </div>
        </div>

        <DocumentationPanel
          componentName="MacKeyboard"
          importPath="../src/components/KeyBoardComponents/MacKeyboard"
          defaultUsage="<MacKeyboard />"
          componentViewClassName="w-full bg-[#f2f1ed]/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]"
          props={[]}
          examples={[
            {
              title: "Basic usage",
              code: `import { MacKeyboard } from "component-labs";

export default function App() {
  return (
    <div className="w-full h-screen bg-[#f2f1ed]/50 flex items-center justify-center p-10">
      <MacKeyboard />
    </div>
  );
}`,
            },
          ]}
          notes={[
            "It listens to physical keyboard events and visualizes the matching keys on screen.",
            "The sound sprite is loaded from /sound.ogg, so host apps must serve that asset from the public root. Download sound file: [sound.ogg](/sound.ogg)",
            "The component uses browser-only APIs such as window, AudioContext, and IntersectionObserver, so it should be rendered on the client."
          ]}
        >
          <MacKeyboard />
        </DocumentationPanel>
      </div>

      {/* Mac Keyboard Dark Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Keyboard
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Mac-Style Layout (Dark Mode)
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              The stealthy, dark-themed variant of the Mac keyboard. Uses deep blacks and sleek charcoal tones for a professional, low-light aesthetic.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">
                keyboard
              </span>
              Type on your keyboard
            </span>
          </div>
        </div>

        <DocumentationPanel
          componentName="MacKeyboardDark"
          importPath="../src/components/KeyBoardComponents/MacKeyboardDark"
          defaultUsage="<MacKeyboardDark />"
          componentViewClassName="w-full bg-[#111] min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl border border-[#222] flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]"
          props={[]}
          examples={[
            {
              title: "Basic usage",
              code: `import { MacKeyboardDark } from "component-labs";

export default function App() {
  return (
    <div className="w-full h-screen bg-[#111] flex items-center justify-center p-10">
      <MacKeyboardDark />
    </div>
  );
}`,
            },
          ]}
          notes={[
            "It is the dark variant of the Mac keyboard display and shares the same interaction model as MacKeyboard.",
            "It also expects /sound.ogg to be available in the host app's public folder. Download sound file: [sound.ogg](/sound.ogg)",
            "Like the light variant, it should be used on the client because it depends on browser audio and visibility APIs."
          ]}
        >
          <MacKeyboardDark />
        </DocumentationPanel>
      </div>

      {/* Typewriter Keyboard Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Keyboard
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              The Typewriter Edition
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A masterclass in tactile nostalgia. Precision-engineered mechanical switches housed within a heavy-gauge metallic chassis, finished with genuine chrome-rimmed ivory keycaps.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">
                keyboard
              </span>
              Type on your keyboard
            </span>
          </div>
        </div>

        <div className="w-full bg-[#f2f1ed]/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl border border-black/5 flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <TypewriterKeyboard />
        </div>
      </div>
    </>
  );
};

export default KeyBoardComponentPage;