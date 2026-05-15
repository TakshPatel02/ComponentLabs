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

import ClipPathLinks from '../components/LinkComponents/ClipPathLinks';
import TakeoverLinks from '../components/LinkComponents/TakeoverLinks';
import { NeuralHoverLinks } from '../components/LinkComponents/NeuralHoverLinks';

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

// A completely transparent wrapper with NO background, NO border, and NO shadow.
// This allows components that render their own boxes to be the only box visible.
const noBoxClass = "w-full py-12 flex flex-col items-stretch justify-center overflow-hidden";

// Specific for items that need to go edge-to-edge but have no box
const fullWidthNoBoxClass = "w-full flex flex-col items-stretch justify-center overflow-hidden";

// Standard preview box for components that do not have an internal box
const standardBoxClass = "w-full bg-cursor-cream/50 min-h-96 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden p-6 md:p-8 transition-all duration-500 ";

export const componentPreviews = {
  // TEXT (Using standardBoxClass so they get exactly 1 box)
  encryptedtext: {
    hasRewatch: true,
    previewContainerClass: standardBoxClass,
    renderPreview: (key) => (
      <div className="w-full h-full flex items-center justify-center">
        <EncryptedText key={key} text="Welcome to ComponentLab" className="text-2xl md:text-5xl font-mono-code font-bold text-primary tracking-tighter" interval={40} duration={2000} />
      </div>
    )
  },
  stripetextwriter: {
    hasRewatch: true,
    previewContainerClass: standardBoxClass,
    renderPreview: (key) => (
      <StripeWriter key={key} text="Building the internet's infrastructure." className="text-2xl md:text-5xl font-section-heading font-bold text-primary tracking-tight text-center px-4" speed={0.04} />
    )
  },
  velocitytext: {
    previewContainerClass: standardBoxClass,
    renderPreview: (key) => (
      <VelocityText key={key} heightClass="h-96" text="Nothing in this world can take the place of persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. Persistence and determination alone are omnipotent. The slogan 'Press On!' has solved and always will solve the problems of the human race." />
    )
  },
  creativehighlight: {
    hasRewatch: true,
    previewContainerClass: standardBoxClass,
    renderPreview: (key) => <CreativeHighlightText key={key} />
  },

  // BUTTONS (Using standardBoxClass so they get exactly 1 box)
  fillbutton: {
    previewContainerClass: standardBoxClass,
    renderPreview: (key) => (
      <div className="flex flex-col gap-6 md:flex-row md:gap-8 items-center justify-center">
        <FillButton key={`${key}-1`}>Standard</FillButton>
        <FillButton key={`${key}-2`} className="rounded-full px-8 font-mono">Rounded Mono</FillButton>
        <FillButton key={`${key}-3`} fillColorClass="bg-error-warm" className="border-error-warm/20 text-on-surface">Warm Fill</FillButton>
      </div>
    )
  },
  uploadbutton: { previewContainerClass: standardBoxClass },
  magnetbutton: { previewContainerClass: standardBoxClass },
  encryptbutton: { previewContainerClass: standardBoxClass },
  animatedcounterbutton: { previewContainerClass: standardBoxClass },
  neumorphicbutton: { previewContainerClass: standardBoxClass },

  // FORMS (They have their own internal boxes, so use noBoxClass)
  terminalcontactform: {
    previewContainerClass: noBoxClass,
    renderPreview: (key) => <div className="w-full max-w-5xl mx-auto"><TerminalContactForm key={key} /></div>
  },
  promptbar: {
    previewContainerClass: noBoxClass,
    renderPreview: (key) => <div className="w-full max-w-5xl mx-auto"><PromptBar key={key} /></div>
  },
  comandsearch: {
    previewContainerClass: noBoxClass,
    renderPreview: (key) => <div className="w-full max-w-5xl mx-auto"><CommandSearch key={key} /></div>
  },
  minimalauth: {
    previewContainerClass: noBoxClass,
    renderPreview: (key) => <div className="w-full max-w-5xl mx-auto"><MinimalAuth key={key} /></div>
  },
  richcomposer: {
    previewContainerClass: noBoxClass,
    renderPreview: (key) => <div className="w-full max-w-5xl mx-auto"><RichComposer key={key} /></div>
  },

  // LINKS (TakeoverLinks has an internal box, others don't so they use default box or noBox)
  clippathiconlink: {
    previewContainerClass: standardBoxClass,
    renderPreview: (key) => <div className="w-full max-w-3xl mx-auto"><ClipPathLinks key={key} /></div>
  },
  takeoverlink: {
    previewContainerClass: noBoxClass, // TakeoverLinks has its own box
    renderPreview: (key) => <TakeoverLinks key={key} />
  },
  neuralhoverlink: {
    previewContainerClass: noBoxClass, // Neural hover doesn't need a box
    renderPreview: (key) => <div className="w-full max-w-5xl mx-auto"><NeuralHoverLinks key={key} /></div>
  },

  // KEYBOARDS (Explicit custom boxes)
  macstylelayout: {
    previewContainerClass: "w-full bg-[#f2f1ed]/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 "
  },
  macstyledarklayout: {
    previewContainerClass: "w-full bg-[#111] min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl border border-[#222] flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500"
  },
  typewriteredition: {
    previewContainerClass: "w-full bg-[#f2f1ed]/50 min-h-62.5 md:h-auto py-10 px-4 md:px-8 rounded-xl border border-black/5 flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 "
  },

  // HERO (They have internal boxes/full width, use fullWidthNoBoxClass)
  staggeredentrance: {
    previewContainerClass: fullWidthNoBoxClass,
    renderPreview: (key) => <div className="w-full"><StaggeredEntranceHero key={key} /></div>
  },
  dynamicprimitives: {
    previewContainerClass: fullWidthNoBoxClass,
    renderPreview: (key) => <div className="w-full"><DynamicHero key={key} /></div>
  },
  auroragradienthero: {
    previewContainerClass: fullWidthNoBoxClass,
    renderPreview: (key) => <div className="w-full"><AuroraHero key={key} /></div>
  },

  // OTHER
  vintagemasterfader: {
    previewContainerClass: noBoxClass // Assuming it has its own box
  },
  terminaltypingwindow: {
    hasRewatch: true,
    previewContainerClass: noBoxClass,
    renderPreview: (key) => <TerminalTypingCard key={key} />
  },
  kanbanboard: {
    previewContainerClass: noBoxClass,
    renderPreview: (key) => <div className="w-full max-w-6xl mx-auto"><KanbanBoard key={key} /></div>
  },

  // LOGOS
  simplelogocloud: {
    previewContainerClass: noBoxClass
  },
  centeredlogocloud: {
    previewContainerClass: noBoxClass
  },
  animatedmarqueelogocloud: {
    previewContainerClass: noBoxClass, // It has its own internal box
    // Use w-full max-w-full to prevent overflow
    renderPreview: (key) => <div className="w-full max-w-6xl mx-auto overflow-hidden px-1"><MarqueeLogoCloud key={key} /></div>
  },
  crosshairgridlogocloud: {
    previewContainerClass: noBoxClass
  },

  // FOOTERS
  sassfooter: {
    previewContainerClass: fullWidthNoBoxClass
  },
  minimalfooter: {
    previewContainerClass: fullWidthNoBoxClass
  },

  // CARDS
  statesynthesis: { previewContainerClass: noBoxClass },
  agenticflow: { previewContainerClass: noBoxClass },
  depthperception: { previewContainerClass: noBoxClass },
  pricingtiers: { previewContainerClass: noBoxClass },

  // GRIDS
  bentostatsboard: { previewContainerClass: noBoxClass },
  masonryshowcase: { previewContainerClass: noBoxClass },
  technicalcrosshairs: { previewContainerClass: noBoxClass }
};
