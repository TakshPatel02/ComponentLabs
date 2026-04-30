import React, { useState } from 'react';
import FillButton from "../../components/ButtonComponents/FillButton";
import UploadButton from "../../components/ButtonComponents/UploadButton";
import MagnetButton from "../../components/ButtonComponents/MagnetButton";
import EncryptButton from "../../components/ButtonComponents/EncryptButton";
import GithubStarsButton from "../../components/ButtonComponents/GithubStarsButton";
import NeumorphismButton from "../../components/ButtonComponents/NeumorphismButton";

const ButtonComponentPage = () => {

  const [githubReplayKey, setGithubReplayKey] = useState(0);
  return (
    <>
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

      {/* Magnet Button Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Interaction
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Magnet Button
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A magnetic hover button with independent shadow distancing and
              a sequential character flip transition.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-75 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <MagnetButton text="Hover Me" />
          </div>
        </div>
      </div>

      {/* Encrypt Button Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Interaction
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Encrypt Action Button
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              An encrypted text-scramble hover effect with an ascending
              neon-accent scanning laser line and lock toggle animation.
            </p>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-75 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <EncryptButton targetText="Decrypt Sequence" />
          </div>
        </div>
      </div>

      {/* GitHub Stars Button Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Interaction
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Animated Counter Button
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A dynamic metric indicator utilizing smooth physics-based
              interpolation to count up, with an aesthetic sweeping shine
              effect.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <button
              onClick={() => setGithubReplayKey((v) => v + 1)}
              className="flex items-center justify-center gap-2 bg-primary text-cursor-cream hover:bg-error-warm px-5 py-2.5 rounded-lg text-sm font-medium font-['Space_Grotesk'] transition-all active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">
                replay
              </span>
              Rewatch Animation
            </button>
          </div>
        </div>

        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-75 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <GithubStarsButton key={githubReplayKey} targetStars={8492} />
          </div>
        </div>
      </div>

      {/* Neumorphism AI Button Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Interaction
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Neumorphic AI Button
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A soft-UI depth illusion that indents strictly on hover,
              enhanced with an internal AI particle-sweep and repeating
              sonar pulse effect.
            </p>
          </div>
        </div>

        {/* Note: Standard neumorphism requires the background to strictly match the button base color */}
        <div className="w-full bg-cursor-cream/50 min-h-62.5 md:h-75 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <NeumorphismButton />
          </div>
        </div>
      </div>
    </>
  )
}

export default ButtonComponentPage