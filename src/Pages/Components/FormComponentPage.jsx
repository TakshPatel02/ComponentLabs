import React from 'react'
import PromptBar from "../../components/FormComponents/PromptBar";
import CommandSearch from "../../components/FormComponents/CommandSearch";
import MinimalAuth from "../../components/FormComponents/MinimalAuth";
import RichComposer from "../../components/FormComponents/RichComposer";
import TerminalContactForm from "../../components/FormComponents/TerminalContactForm";

const FormComponentPage = () => {
  return (
    <>
      {/* Terminal Contact Form Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Forms & Contact
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Terminal Contact Form
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A conversational, terminal-inspired contact form that guides users through each field step-by-step with typewriter animations and smooth transitions.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-">
          <div className="w-full max-w-5xl">
            <TerminalContactForm />
          </div>
        </div>
      </div>
      {/* Prompt Bar Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Forms
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Prompt Bar
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              An elegant AI-assistant prompt input field featuring soft inner shadows, premium typography, and a refined interactive submit state.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-">
          <div className="w-full max-w-5xl">
            <PromptBar />
          </div>
        </div>
      </div>
      {/* Command Search Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Forms & Navigation
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Command Palette Search
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A keyboard-first search input with a focus shortcut toggle and a clean editorial design.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">
                keyboard
              </span>
              Press CMD+K or CTRL+K
            </span>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-">
          <div className="w-full max-w-5xl">
            <CommandSearch />
          </div>
        </div>
      </div>
      {/* Minimal Auth Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Forms & Identity
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Minimal Auth
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A brutalist, high-contrast login entry point emphasizing simplicity, structure, and a cinematic success transition.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-">
          <div className="w-full max-w-5xl">
            <MinimalAuth />
          </div>
        </div>
      </div>
      {/* Rich Composer Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Forms
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Rich Composer
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A rich-text editor interface with a formatting toolbar, live character count, and an AI-driven thinking status indicator.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <span className="font-system-micro text-system-micro bg-surface-300 border border-oklab-10 px-3 py-1.5 rounded-full text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-[14px]">
                edit_note
              </span>
              Start typing
            </span>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-">
          <div className="w-full max-w-5xl">
            <RichComposer />
          </div>
        </div>
      </div>
    </>
  )
}

export default FormComponentPage