import React from 'react';
import EncryptedText from '../components/TextComponents/EncryptedText';
import StripeWriter from '../components/TextComponents/StripeWriter';
import VelocityText from '../components/TextComponents/VelocityText';
import { CreativeHighlightText } from '../components/TextComponents/CreativeHighlightText';

import FillButton from '../components/ButtonComponents/FillButton';
import UploadButton from '../components/ButtonComponents/UploadButton';
import MagnetButton from '../components/ButtonComponents/MagnetButton';
import EncryptButton from '../components/ButtonComponents/EncryptButton';
import GithubStarsButton from '../components/ButtonComponents/GithubStarsButton';
import NeumorphismButton from '../components/ButtonComponents/NeumorphismButton';

import TerminalContactForm from '../components/FormComponents/TerminalContactForm';
import PromptBar from '../components/FormComponents/PromptBar';
import CommandSearch from '../components/FormComponents/CommandSearch';
import MinimalAuth from '../components/FormComponents/MinimalAuth';
import RichComposer from '../components/FormComponents/RichComposer';


import StateSynthesisCard from '../components/CardComponents/StateSynthesisCard';
import AgenticFlowCard from '../components/CardComponents/AgenticFlowCard';
import DepthPerceptionCard from '../components/CardComponents/DepthPerceptionCard';
import PricingCard from '../components/CardComponents/PricingCard';

import MacKeyboard from '../components/KeyBoardComponents/MacKeyboard';
import MacKeyboardDark from '../components/KeyBoardComponents/MacKeyboardDark';
import TypewriterKeyboard from '../components/KeyBoardComponents/TypewriterKeyboard';

import BentoStatsGrid from '../components/GridComponents/BentoStatsGrid';
import MasonryShowcaseGrid from '../components/GridComponents/MasonryShowcaseGrid';
import CrosshairFeatureGrid from '../components/GridComponents/CrosshairFeatureGrid';

import { StaggeredEntranceHero } from '../components/HeroComponents/StaggeredEntranceHero';
import DynamicHero from '../components/HeroComponents/DynamicHero';
import AuroraHero from '../components/HeroComponents/AuroraHero';

import { TerminalTypingCard } from '../components/OtherComponents/TerminalTypingCard';
import KanbanBoard from '../components/OtherComponents/KanbanBoard';
import { VintageFader } from '../components/OtherComponents/EditorialSlider';

import { LogoCloud } from '../components/LogoCloudComponents/LogoCloud';
import { CenteredLogoCloud } from '../components/LogoCloudComponents/CenteredLogoCloud';
import { MarqueeLogoCloud } from '../components/LogoCloudComponents/MarqueeLogoCloud';
import { CrosshairLogoCloud } from '../components/LogoCloudComponents/CrosshairLogoCloud';

import SaaSFooter from '../components/FooterComponents/SaaSFooter';
import MinimalFooter from '../components/FooterComponents/MinimalFooter';

import { AnimatedFAQ } from '../components/OtherComponents/AnimatedFAQ';
import CategorizedFAQ from '../components/OtherComponents/CategorizedFAQ';

import CodeShowcaseFeature from '../components/FeatureComponents/CodeShowcaseFeature';

export const componentPreviews = {
  // TEXT
  encryptedtext: {
    previewContainerClass: "w-full min-h-75 md:h-96 bg-cursor-light rounded-xl oklab-border p-4 md:p-8 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]",
    renderPreview: (key) => (
      <>
        <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-black/2 pointer-events-none"></div>
        <div className="relative z-10 w-full h-full flex items-center justify-center bg-cursor-cream/60 rounded-lg oklab-border shadow-sm">
          <EncryptedText key={key} text="Welcome to ComponentLab" className="text-2xl md:text-5xl font-mono-code font-bold text-primary tracking-tighter" interval={40} duration={2000} />
        </div>
      </>
    )
  },
  stripetextwriter: {
    renderPreview: (key) => (
      <StripeWriter key={key} text="Building the internet's infrastructure." className="text-2xl md:text-5xl font-section-heading font-bold text-primary tracking-tight text-center px-4" speed={0.04} />
    )
  },
  velocitytext: {
    previewContainerClass: "w-full bg-cursor-cream/50 rounded-xl oklab-border flex flex-col relative transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)] overflow-hidden",
    renderPreview: (key) => (
      <VelocityText key={key} heightClass="h-96" text="Nothing in this world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan 'Press On!' has solved and always will solve the problems of the human race." />
    )
  },
  creativehighlight: {
    renderPreview: (key) => <CreativeHighlightText key={key} />
  },

  // BUTTONS
  fillbutton: {
    renderPreview: (key) => (
      <div className="flex flex-col gap-6 md:flex-row md:gap-8 items-center justify-center py-8">
        <FillButton key={`${key}-1`}>Standard</FillButton>
        <FillButton key={`${key}-2`} className="rounded-full px-8 font-mono">Rounded Mono</FillButton>
        <FillButton key={`${key}-3`} fillColorClass="bg-error-warm" className="border-error-warm/20 text-on-surface">Warm Fill</FillButton>
      </div>
    )
  },

  // FORMS
  terminalcontactform: {
    renderPreview: (key) => <div className="w-full max-w-5xl"><TerminalContactForm key={key} /></div>
  },
  promptbar: {
    renderPreview: (key) => <div className="w-full max-w-5xl"><PromptBar key={key} /></div>
  },
  comandsearch: {
    renderPreview: (key) => <div className="w-full max-w-5xl"><CommandSearch key={key} /></div>
  },
  minimalauth: {
    renderPreview: (key) => <div className="w-full max-w-5xl"><MinimalAuth key={key} /></div>
  },
  richcomposer: {
    renderPreview: (key) => <div className="w-full max-w-5xl"><RichComposer key={key} /></div>
  },

  // LINKS
  clippathiconlink: {
    renderPreview: (key) => <ClipPathLinks key={key} />
  },
  takeoverlink: {
    previewContainerClass: "w-full bg-cursor-cream/50 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]",
    renderPreview: (key) => <TakeoverLinks key={key} />
  },
  neuralhoverlink: {
    renderPreview: (key) => <div className="w-full max-w-5xl"><NeuralHoverLinks key={key} /></div>
  },

  // KEYBOARDS
  macstylelayout: {
    previewContainerClass: "w-full bg-[#f2f1ed]/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]"
  },
  macstylelayoutdark: {
    previewContainerClass: "w-full bg-[#111] min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl border border-[#222] flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 shadow-[inset_0_4px_20px_rgba(0,0,0,0.5)]"
  },
  typewriterkeyboard: {
    previewContainerClass: "w-full bg-[#f2f1ed]/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl border border-black/5 flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]"
  },

  // HERO
  staggeredentrance: {
    previewContainerClass: "w-full full-width-breakout overflow-hidden",
    renderPreview: (key) => <StaggeredEntranceHero key={key} />
  },

  // OTHER
  editorialslider: {
    previewContainerClass: "w-full bg-surface-container min-h-75 rounded-xl oklab-border flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]"
  },
  terminaltypingcard: {
    renderPreview: (key) => <TerminalTypingCard key={key} />
  },
  kanbanboard: {
    renderPreview: (key) => <KanbanBoard key={key} />
  },

  // LOGOS
  logocloud: {
    previewContainerClass: "w-full rounded-xl flex items-center justify-center p-2 relative overflow-hidden transition-all duration-500"
  },
  centeredlogocloud: {
    previewContainerClass: "w-full rounded-xl flex items-center justify-center p-2 relative overflow-hidden transition-all duration-500"
  },
  marqueelogocloud: {
    previewContainerClass: "w-full rounded-xl flex items-center justify-center p-2 relative overflow-hidden transition-all duration-500"
  },
  crosshairlogocloud: {
    previewContainerClass: "w-full rounded-xl flex items-center justify-center p-2 relative overflow-hidden transition-all duration-500"
  },

  // FOOTERS
  saasfooter: {
    previewContainerClass: "w-full bg-surface rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)] pt-12 pb-12"
  },
  minimalfooter: {
    previewContainerClass: "w-full bg-surface rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)] pt-12 pb-12"
  }
};
