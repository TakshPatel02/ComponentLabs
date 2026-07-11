// Component Imports
// Text & Typography
import EncryptedText from "../components/TextComponents/EncryptedText";
import StripeWriter from "../components/TextComponents/StripeWriter";
import VelocityText from "../components/TextComponents/VelocityText";
import { CreativeHighlightText } from "../components/TextComponents/CreativeHighlightText";
import KineticSplitReveal from "../components/TextComponents/KineticSplitReveal";
import GeometricReconstitution from "../components/TextComponents/GeometricReconstitution";
import AtmosphericDistortion from "../components/TextComponents/AtmosphericDistortion";
import IdentityDecoder from "../components/TextComponents/IdentityDecoder";

// Buttons
import FillButton from "../components/ButtonComponents/FillButton";
import UploadButton from "../components/ButtonComponents/UploadButton";
import MagnetButton from "../components/ButtonComponents/MagnetButton";
import EncryptButton from "../components/ButtonComponents/EncryptButton";
import GithubStarsButton from "../components/ButtonComponents/GithubStarsButton";
import NeumorphismButton from "../components/ButtonComponents/NeumorphismButton";
import GeometricPathButton from "../components/ButtonComponents/GeometricPathButton";
import CinematicToggle from "../components/ButtonComponents/CinematicToggle";

// Numbers & Counters
import NumberFlowInput from "../components/NumberComponents/NumberFlowInput";
import KineticNumberShowcase from "../components/NumberComponents/KineticNumberShowcase";

// Forms & Identity
import TerminalContactForm from "../components/FormComponents/TerminalContactForm";
import PromptBar from "../components/FormComponents/PromptBar";
import CommandSearch from "../components/FormComponents/CommandSearch";
import MinimalAuth from "../components/FormComponents/MinimalAuth";
import RichComposer from "../components/FormComponents/RichComposer";

// Links & Navigation
import ClipPathLinks from "../components/LinkComponents/ClipPathLinks";
import TakeoverLinks from "../components/LinkComponents/TakeoverLinks";
import { NeuralHoverLinks } from "../components/LinkComponents/NeuralHoverLinks";

// Cards & Layouts
import StateSynthesisCard from "../components/CardComponents/StateSynthesisCard";
import AgenticFlowCard from "../components/CardComponents/AgenticFlowCard";
import DepthPerceptionCard from "../components/CardComponents/DepthPerceptionCard";
import PricingCard from "../components/CardComponents/PricingCard";
import PremiumTiltCard from "../components/CardComponents/PremiumTiltCard";

// Keyboards
import MacKeyboard from "../components/KeyBoardComponents/MacKeyboard";
import MacKeyboardDark from "../components/KeyBoardComponents/MacKeyboardDark";
import TypewriterKeyboard from "../components/KeyBoardComponents/TypewriterKeyboard";

// Grids
import BentoStatsGrid from "../components/GridComponents/BentoStatsGrid";
import MasonryShowcaseGrid from "../components/GridComponents/MasonryShowcaseGrid";
import CrosshairFeatureGrid from "../components/GridComponents/CrosshairFeatureGrid";

// Hero Sections
import { StaggeredEntranceHero } from "../components/HeroComponents/StaggeredEntranceHero";
import DynamicHero from "../components/HeroComponents/DynamicHero";
import AuroraHero from "../components/HeroComponents/AuroraHero";

// Features
import CodeShowcaseFeature from "../components/FeatureComponents/CodeShowcaseFeature";
import InteractiveSpotlightFeatures from "../components/FeatureComponents/InteractiveSpotlightFeatures";
import CreativeTeamsFeature from "../components/FeatureComponents/CreativeTeamsFeature";

// FAQs
import CategorizedFAQ from "../components/OtherComponents/CategorizedFAQ";
import { AnimatedFAQ } from "../components/OtherComponents/AnimatedFAQ";
import MinimalGridFAQ from "../components/OtherComponents/MinimalGridFAQ";

// Logo Clouds
import { LogoCloud } from "../components/LogoCloudComponents/LogoCloud";
import { CenteredLogoCloud } from "../components/LogoCloudComponents/CenteredLogoCloud";
import { MarqueeLogoCloud } from "../components/LogoCloudComponents/MarqueeLogoCloud";
import { CrosshairLogoCloud } from "../components/LogoCloudComponents/CrosshairLogoCloud";

// Footers
import SaaSFooter from "../components/FooterComponents/SaaSFooter";
import MinimalFooter from "../components/FooterComponents/MinimalFooter";
import EditorialBrandFooter from "../components/FooterComponents/EditorialBrandFooter";
import EngineeringStatusFooter from "../components/FooterComponents/EngineeringStatusFooter";

// CTA Sections
import SmartInterfaceCTA from "../components/CTAComponents/SmartInterfaceCTA";
import CreativeIntelligenceCTA from "../components/CTAComponents/CreativeIntelligenceCTA";
import ProTierPricingCTA from "../components/CTAComponents/ProTierPricingCTA";

// Other Primitives
import KanbanBoard from "../components/OtherComponents/KanbanBoard";
import { VintageFader } from "../components/OtherComponents/EditorialSlider";
import { TerminalTypingCard } from "../components/OtherComponents/TerminalTypingCard";

import FluidCursorTrail from "../components/CreativeComponents/FluidCursorTrail";
import CinematicCards from "../components/CreativeComponents/CinematicCards";
import ElasticStretchText from "../components/CreativeComponents/ElasticStretchText";
import MorphCardButton from "../components/CreativeComponents/MorphCardButton";

// loader animations
import GreetingPreloader from "../components/LoaderComponents/GreetingPreloader";
import StaircasePreloader from "../components/LoaderComponents/StaircasePreloader";

// SVG Animations
import PlayPauseButton from "../components/SVGAnimationComponents/PlayPauseButton";
import HamburgerCross from "../components/SVGAnimationComponents/HamburgerCross";

// Components Data
export const componentsData = {

  // TEXT & TYPOGRAPHY

  "encryptedtext": {
    title: "Encrypted Text",
    category: "TEXT & TYPOGRAPHY",
    description: "Text scramble-and-reveal animation using randomized glyphs.",
    component: EncryptedText,
    published: true,
    usage: `import { EncryptedText } from "component-labs";

export default function Example() {
  return <EncryptedText text="Access granted" className="text-xl font-bold" />;
}`,
    props: [
          {
                "name": "text",
                "type": "any",
                "default": "undefined",
                "description": "Custom text property."
          },
          {
                "name": "interval",
                "type": "number",
                "default": "50",
                "description": "Custom interval property."
          },
          {
                "name": "duration",
                "type": "number",
                "default": "3000",
                "description": "Custom duration property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Randomized glyph scramble effect",
      "Progressive character reveal",
      "Preserves spaces during animation",
      "Configurable speed and duration",
    ],
  },

  "stripetextwriter": {
    title: "Stripe Text Writer",
    category: "TEXT & TYPOGRAPHY",
    description: "Typewriter-style text animation with staggered character reveal.",
    component: StripeWriter,
    published: true,
    usage: `import { StripeWriter } from "component-labs";

export default function Example() {
  return <StripeWriter text="Hello world" speed={0.02} delay={0.2} />;
}`,
    props: [
          {
                "name": "text",
                "type": "string",
                "default": "\"Building the internet's infrastructure.\"",
                "description": "Custom text property."
          },
          {
                "name": "delay",
                "type": "number",
                "default": "0",
                "description": "Custom delay property."
          },
          {
                "name": "speed",
                "type": "number",
                "default": "0.03",
                "description": "Custom speed property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "cursorClassName",
                "type": "string",
                "default": "\"bg-[#11100a]\"",
                "description": "Custom cursorClassName property."
          },
          {
                "name": "triggerOnce",
                "type": "boolean",
                "default": "true",
                "description": "Custom triggerOnce property."
          }
    ],
    features: [
      "Per-character staggered animation",
      "Animated cursor block",
      "Viewport-triggered animation",
      "Configurable speed and delay",
    ],
  },

  "velocitytext": {
    title: "Velocity Text",
    category: "TEXT & TYPOGRAPHY",
    description: "Scroll-driven horizontal marquee with velocity-based skew distortion.",
    component: VelocityText,
    published: true,
    usage: `import { VelocityText } from "component-labs";

export default function Example() {
  return <VelocityText text="Scroll to distort" />;
}`,
    props: [
          {
                "name": "text",
                "type": "any",
                "default": "undefined",
                "description": "Custom text property."
          },
          {
                "name": "heightClass",
                "type": "string",
                "default": "\"h-[400px]\"",
                "description": "Custom heightClass property."
          }
    ],
    features: [
      "Scroll-progress drives horizontal translation",
      "Scroll velocity drives skew distortion",
      "Internal scroll container for smooth distance",
      "Kinetic marquee effect",
    ],
  },

  "creativehighlight": {
    title: "Creative Highlight",
    category: "TEXT & TYPOGRAPHY",
    description: "Headline component with inline SVG accents and animated sparkles.",
    component: CreativeHighlightText,
    published: true,
    usage: `import { CreativeHighlightText } from "component-labs";

export default function Example() {
  return <CreativeHighlightText text="Main heading" decorText="accent" para="Supporting paragraph." />;
}`,
    props: [
          {
                "name": "text",
                "type": "string",
                "default": "\"Design is meant to\"",
                "description": "Custom text property."
          },
          {
                "name": "decorText",
                "type": "string",
                "default": "\"communicate\"",
                "description": "Custom decorText property."
          },
          {
                "name": "subText",
                "type": "string",
                "default": "\"not just to decorate.\"",
                "description": "Custom subText property."
          },
          {
                "name": "para",
                "type": "string",
                "default": "\"A thoughtful design system ensures that everything has a purpose and a place",
                "description": "Custom para property."
          }
    ],
    features: [
      "Inline SVG accent decorations",
      "Animated sparkle effects",
      "Tailwind-styled typography",
    ],
  },

  "kineticsplitreveal": {
    title: "Kinetic Split Reveal",
    category: "TEXT & TYPOGRAPHY",
    description: "A premium typographic reveal where a headline splits vertically to uncover editorial insights on hover.",
    component: KineticSplitReveal,
    published: true,
    usage: `import { KineticSplitReveal } from "component-labs";

export default function Example() {
  return <KineticSplitReveal text="ENGINEERED" quote="The tension between the calculated and the felt." />;
}`,
    props: [
          {
                "name": "text",
                "type": "string",
                "default": "\"ENGINEERED SOUL\"",
                "description": "Custom text property."
          },
          {
                "name": "quote",
                "type": "string",
                "default": "\"The tension between the calculated and the felt. A digital heart in a biological cage.\"",
                "description": "Custom quote property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "textColorClass",
                "type": "string",
                "default": "\"text-primary\"",
                "description": "Custom textColorClass property."
          },
          {
                "name": "quoteColorClass",
                "type": "string",
                "default": "\"text-[#cf2d56]\"",
                "description": "Custom quoteColorClass property."
          },
          {
                "name": "fontFamilyClass",
                "type": "string",
                "default": "\"font-sans\"",
                "description": "Custom fontFamilyClass property."
          },
          {
                "name": "quoteFontFamilyClass",
                "type": "string",
                "default": "\"font-serif\"",
                "description": "Custom quoteFontFamilyClass property."
          },
          {
                "name": "fontSizeClass",
                "type": "string",
                "default": "\"text-4xl sm:text-6xl md:text-8xl lg:text-[110px]\"",
                "description": "Custom fontSizeClass property."
          },
          {
                "name": "quoteFontSizeClass",
                "type": "string",
                "default": "\"text-base sm:text-lg md:text-xl lg:text-[24px]\"",
                "description": "Custom quoteFontSizeClass property."
          },
          {
                "name": "duration",
                "type": "number",
                "default": "800",
                "description": "Custom duration property."
          },
    ],
    features: [
      "Vertical split-and-reveal dynamic masking using clip-path",
      "Weighted physical easing profile for interactive tension",
      "Mouse-movement parallax micro-interaction",
      "Responsive typographic layout for all screens",
    ],
  },

  "geometricreconstitution": {
    title: "Geometric Reconstitution",
    category: "TEXT & TYPOGRAPHY",
    description: "A typographic reconstitution engine that elasticates and fragments letters on hover using physics springs.",
    component: GeometricReconstitution,
    published: true,
    usage: `import { GeometricReconstitution } from "component-labs";

export default function Example() {
  return <GeometricReconstitution text="DYNAMIC" />;
}`,
    props: [
          {
                "name": "text",
                "type": "string",
                "default": "\"ENGINEERED SOUL\"",
                "description": "Custom text property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "textColorClass",
                "type": "string",
                "default": "\"text-primary\"",
                "description": "Custom textColorClass property."
          },
          {
                "name": "fontFamilyClass",
                "type": "string",
                "default": "\"font-sans\"",
                "description": "Custom fontFamilyClass property."
          },
          {
                "name": "fontSizeClass",
                "type": "string",
                "default": "\"text-4xl sm:text-6xl md:text-8xl lg:text-[110px]\"",
                "description": "Custom fontSizeClass property."
          },
          {
                "name": "stiffness",
                "type": "number",
                "default": "200",
                "description": "Custom stiffness property."
          },
          {
                "name": "damping",
                "type": "number",
                "default": "14",
                "description": "Custom damping property."
          },
          {
                "name": "mass",
                "type": "number",
                "default": "0.9",
                "description": "Custom mass property."
          },
          {
                "name": "scatterRangeX",
                "type": "number",
                "default": "60",
                "description": "Custom scatterRangeX property."
          }
    ],
    features: [
      "High-performance spring physics for fluid letter scatter and snap",
      "Ambient staggered liquid floating keyframe animations",
      "Consistent random target offsets for uniform layout snapping",
      "Responsive, clean editorial styling",
    ],
  },

  "atmosphericdistortion": {
    title: "Atmospheric Distortion",
    category: "TEXT & TYPOGRAPHY",
    description: "A physics-based typographic engine that simulates the weight and friction of digital atmosphere using spring layouts.",
    component: AtmosphericDistortion,
    published: true,
    usage: `import { AtmosphericDistortion } from "component-labs";

export default function Example() {
  return <AtmosphericDistortion text="ATMOSPHERE" />;
}`,
    props: [
          {
                "name": "text",
                "type": "string",
                "default": "\"ATMOSPHERIC\"",
                "description": "Custom text property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "textColorClass",
                "type": "string",
                "default": "\"text-primary\"",
                "description": "Custom textColorClass property."
          },
          {
                "name": "hoverColor",
                "type": "string",
                "default": "\"#cf2d56\"",
                "description": "Custom hoverColor property."
          },
          {
                "name": "fontFamilyClass",
                "type": "string",
                "default": "\"font-sans\"",
                "description": "Custom fontFamilyClass property."
          },
          {
                "name": "fontSizeClass",
                "type": "string",
                "default": "\"text-[60px] sm:text-[100px] md:text-[125px] lg:text-[150px]\"",
                "description": "Custom fontSizeClass property."
          },
          {
                "name": "stiffness",
                "type": "number",
                "default": "160",
                "description": "Custom stiffness property."
          },
          {
                "name": "damping",
                "type": "number",
                "default": "10",
                "description": "Custom damping property."
          },
          {
                "name": "mass",
                "type": "number",
                "default": "0.8",
                "description": "Custom mass property."
          },
          {
                "name": "driftX",
                "type": "number",
                "default": "12",
                "description": "Custom driftX property."
          },
          {
                "name": "driftY",
                "type": "number",
                "default": "-25",
                "description": "Custom driftY property."
          },
          {
                "name": "rotateAngle",
                "type": "number",
                "default": "10",
                "description": "Custom rotateAngle property."
          },
          {
                "name": "blurAmount",
                "type": "number",
                "default": "4",
                "description": "Custom blurAmount property."
          }
    ],
    features: [
      "Physical spring-based text leaning, translation, and skewing",
      "Ambient living float keyframes with unique character offsets",
      "Native CSS Flexbox + Framer Motion layout displacement waves",
      "Zero JS event listener loop overhead",
    ],
  },

  "identitydecoder": {
    title: "Identity Decoder",
    category: "TEXT & TYPOGRAPHY",
    description: "An elegant cryptographic-themed identity segment decoder that displays target segments using sliding brackets, angled pointer lines, and depth-of-field blurs.",
    component: IdentityDecoder,
    published: true,
    usage: `import { IdentityDecoder } from "component-labs";

export default function Example() {
  return <IdentityDecoder identity="user@domain.com" accentColor="#10B981" />;
}`,
    props: [
          {
                "name": "identity",
                "type": "string",
                "default": "\"takshpatel02@component-labs.com\"",
                "description": "Custom identity property."
          },
          {
                "name": "segments",
                "type": "any",
                "default": "defaultSegments",
                "description": "Custom segments property."
          },
          {
                "name": "accentColor",
                "type": "string",
                "default": "\"#d24200\"",
                "description": "Custom accentColor property."
          },
          {
                "name": "springConfig",
                "type": "any",
                "default": "defaultSpringConfig",
                "description": "Custom springConfig property."
          },
          {
                "name": "onSegmentChange",
                "type": "any",
                "default": "undefined",
                "description": "Custom onSegmentChange property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Combines modern typography with dynamic mathematical SVGs that draw smooth path alignments between cursor states and raw characters.",
      "Uses responsive client rect measurements defensively clamped to avoid character indexing overflows during hot resizing.",
      "Built-in automatic resizing and font-load observers to ensure absolute pixel-perfect alignment.",
    ],
  },

  // BUTTONS

  "fillbutton": {
    title: "Fill Button",
    category: "BUTTONS",
    description: "Button with an animated bottom-to-top fill effect on hover.",
    component: FillButton,
    published: true,
    usage: `import { FillButton } from "component-labs";

export default function Example() {
  return <FillButton>Hover me</FillButton>;
}`,
    props: [
          {
                "name": "children",
                "type": "any",
                "default": "undefined",
                "description": "Custom children property."
          },
          {
                "name": "onClick",
                "type": "any",
                "default": "undefined",
                "description": "Custom onClick property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "fillColorClass",
                "type": "string",
                "default": "\"bg-[#11100a] dark:bg-[#fdf8f7]\"",
                "description": "Custom fillColorClass property."
          }
    ],
    features: [
      "Two-phase CSS fill animation",
      "Cubic-bezier easing curves",
      "Text color inversion on hover",
    ],
  },

  "uploadbutton": {
    title: "Upload Button",
    category: "BUTTONS",
    description: "Multi-state upload button with progress bar and success animation.",
    component: UploadButton,
    published: true,
    usage: `import { UploadButton } from "component-labs";

export default function Example() {
  return <UploadButton onUpload={async (files) => {}} />;
}`,
    props: [
          {
                "name": "onUpload",
                "type": "any",
                "default": "undefined",
                "description": "Custom onUpload property."
          },
          {
                "name": "accept",
                "type": "string",
                "default": "\"\"",
                "description": "Custom accept property."
          },
          {
                "name": "multiple",
                "type": "boolean",
                "default": "false",
                "description": "Custom multiple property."
          },
          {
                "name": "idleText",
                "type": "string",
                "default": "\"Upload File\"",
                "description": "Custom idleText property."
          },
          {
                "name": "uploadingText",
                "type": "string",
                "default": "\"Uploading...\"",
                "description": "Custom uploadingText property."
          },
          {
                "name": "successText",
                "type": "string",
                "default": "\"Complete\"",
                "description": "Custom successText property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "onSuccess",
                "type": "any",
                "default": "undefined",
                "description": "Custom onSuccess property."
          },
          {
                "name": "onError",
                "type": "any",
                "default": "undefined",
                "description": "Custom onError property."
          }
    ],
    features: [
      "Three states: idle, uploading, success",
      "Animated progress bar fill",
      "Spring-based success animation",
      "Auto-reset after completion",
      "Hidden file input triggered by button",
      "Safe for real upload flows — success shows only after onUpload resolves",
    ],
  },

  "magnetbutton": {
    title: "Magnet Button",
    category: "BUTTONS",
    description: "Magnetic cursor-follow effect button that tracks mouse position.",
    component: MagnetButton,
    published: true,
    usage: `import { MagnetButton } from "component-labs";

export default function Example() {
  return <MagnetButton text="Try this" />;
}`,
    props: [
          {
                "name": "text",
                "type": "string",
                "default": "\"Hover Me\"",
                "description": "Custom text property."
          },
          {
                "name": "onClick",
                "type": "any",
                "default": "undefined",
                "description": "Custom onClick property."
          }
    ],
    features: [
      "Magnetic cursor-follow effect",
      "Mouse position tracking within wrapper",
      "Smooth spring-based motion",
    ],
  },

  "encryptbutton": {
    title: "Encrypt Button",
    category: "BUTTONS",
    description: "Button with hover-triggered scramble/decrypt text animation.",
    component: EncryptButton,
    published: true,
    usage: `import { EncryptButton } from "component-labs";

export default function Example() {
  return <EncryptButton targetText="Secure Now" />;
}`,
    props: [
          {
                "name": "targetText",
                "type": "string",
                "default": "\"Encrypt data\"",
                "description": "Custom targetText property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Hover-triggered scramble animation",
      "Natural reveal on mouse leave",
      "Uses setInterval for realistic effect",
    ],
  },

  "animatedcounterbutton": {
    title: "Animated Counter",
    category: "BUTTONS",
    description: "GitHub stars button with cinematic counter animation and glint sweep.",
    component: GithubStarsButton,
    published: true,
    usage: `import { GithubStarsButton } from "component-labs";

export default function Example() {
  return <GithubStarsButton targetStars={12500} />;
}`,
    props: [
          {
                "name": "targetStars",
                "type": "number",
                "default": "8492",
                "description": "Custom targetStars property."
          }
    ],
    features: [
      "Cinematic deceleration counter animation",
      "Star icon flip on hover",
      "Glint sweep overlay effect",
      "Locale-formatted number display",
    ],
  },

  "neumorphicbutton": {
    title: "Neumorphic Button",
    category: "BUTTONS",
    description: "Neumorphism-styled button with soft shadow depth effect.",
    component: NeumorphismButton,
    published: true,
    usage: `import { NeumorphismButton } from "component-labs";

export default function Example() {
  return <NeumorphismButton text="Start" />;
}`,
    props: [
          {
                "name": "text",
                "type": "string",
                "default": "\"Initialize AI\"",
                "description": "Custom text property."
          }
    ],
    features: [
      "Neumorphic soft shadow styling",
      "Light surface background design",
      "Tailwind-based depth illusion",
    ],
  },

  "geometricpathbutton": {
    title: "Geometric Path Button",
    category: "BUTTONS",
    description: "A digital ink trace following the vector boundary of the button container with modern kinetic particle tracking.",
    component: GeometricPathButton,
    published: true,
    usage: `import { GeometricPathButton } from "component-labs";

export default function Example() {
  return <GeometricPathButton text="Trace Path" />;
}`,
    props: [
          {
                "name": "children",
                "type": "any",
                "default": "undefined",
                "description": "Custom children property."
          },
          {
                "name": "text",
                "type": "string",
                "default": "\"Trace Path\"",
                "description": "Custom text property."
          },
          {
                "name": "onClick",
                "type": "any",
                "default": "undefined",
                "description": "Custom onClick property."
          },
          {
                "name": "strokeColor",
                "type": "string",
                "default": "\"#cf2d56\"",
                "description": "Custom strokeColor property."
          },
          {
                "name": "particleColor",
                "type": "string",
                "default": "\"#cf2d56\"",
                "description": "Custom particleColor property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "wrapperClassName",
                "type": "string",
                "default": "\"\"",
                "description": "Custom wrapperClassName property."
          }
    ],
    features: [
      "Dynamic ink trace outline vector animation on hover",
      "Interactive kinetic path-particle tracking",
      "Fully responsive with flexible dimensions",
      "Micro-interactions powered by premium cubic-bezier easing",
    ],
  },

  "cinematictoggle": {
    title: "Cinematic Toggle",
    category: "BUTTONS",
    description: "A physics-driven theme toggle with elastic spring motion and cinematic icon rotation.",
    component: CinematicToggle,
    published: true,
    usage: `import { CinematicToggle } from "component-labs";

export default function Example() {
  return <CinematicToggle onToggle={(state) => console.log(state)} />;
}`,
    props: [
          {
                "name": "onToggle",
                "type": "any",
                "default": "undefined",
                "description": "Custom onToggle property."
          },
          {
                "name": "defaultActive",
                "type": "boolean",
                "default": "false",
                "description": "Custom defaultActive property."
          },
          {
                "name": "activeLabel",
                "type": "string",
                "default": "\"LUNAR_ACTIVE\"",
                "description": "Custom activeLabel property."
          },
          {
                "name": "inactiveLabel",
                "type": "string",
                "default": "\"SOLAR_ACTIVE\"",
                "description": "Custom inactiveLabel property."
          },
          {
                "name": "showLabel",
                "type": "boolean",
                "default": "true",
                "description": "Custom showLabel property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "GPU-accelerated x transform for thumb slide",
      "Spring physics with configurable stiffness and damping",
      "Cinematic 180° icon rotation on state change",
      "Zero useEffect — pure render-driven animations",
    ],
  },

  // NUMBERS & COUNTERS

  "numberflowigniput": {
    title: "Number Flow Input",
    category: "NUMBERS & COUNTERS",
    description: "An interactive number input with smooth spring-physics digit scrolling animation. Digits roll from bottom to top as you type.",
    component: NumberFlowInput,
    published: true,
    usage: `import { NumberFlowInput } from "component-labs";

export default function Example() {
  return <NumberFlowInput maxDigits={4} />;
}`,
    props: [
          {
                "name": "maxDigits",
                "type": "number",
                "default": "10",
                "description": "Custom maxDigits property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Spring-physics digit scroll animation",
      "Digits shift left as new numbers are entered",
      "Backspace support to clear digits",
      "Blinking cursor indicator on focus",
      "Hidden input for accessible keyboard capture",
      "Responsive digit sizing across breakpoints",
    ],
  },

  "kineticnumbershowcase": {
    title: "Kinetic Countdown Timer",
    category: "NUMBERS & COUNTERS",
    description: "A premium, high-performance kinetic countdown timer with interactive play, pause, and reset controls.",
    component: KineticNumberShowcase,
    published: true,
    usage: `import { KineticNumberShowcase } from "component-labs";

export default function Example() {
  return <KineticNumberShowcase />;
}`,
    props: [
          {
                "name": "initialTime",
                "type": "number",
                "default": "60",
                "description": "Custom initialTime property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Interactive play, pause, and manual rotate-reset controls",
      "Bespoke character-by-character bounce entrance animations",
      "Only changing digits transition, keeping static prefix elements still",
      "Full light and dark mode integration using tailwind CSS variables",
      "Robust width-capped layout preventing container collapse in flexboxes",
    ],
  },

  // FORMS & IDENTITY

  "terminalcontactform": {
    title: "Terminal Contact Form",
    category: "FORMS & IDENTITY",
    description: "A multi-step, interactive terminal-themed contact form with macOS window styling and custom typewriter prompts.",
    component: TerminalContactForm,
    published: true,
    usage: `import { TerminalContactForm } from "component-labs";

export default function Example() {
  return <TerminalContactForm successMessage="Sent!" />;
}`,
    props: [
          {
                "name": "fields",
                "type": "any",
                "default": "defaultFields",
                "description": "Custom fields property."
          },
          {
                "name": "greetingText",
                "type": "string",
                "default": "\"Hey there! We're excited to link \ud83d\udd17\"",
                "description": "Custom greetingText property."
          },
          {
                "name": "terminalTitle",
                "type": "string",
                "default": "\"contact@componentlabs.in\"",
                "description": "Custom terminalTitle property."
          },
          {
                "name": "onSubmit",
                "type": "any",
                "default": "undefined",
                "description": "Custom onSubmit property."
          },
          {
                "name": "successMessage",
                "type": "string",
                "default": "\"Sent! We'll get back to you ASAP \ud83d\ude0e\"",
                "description": "Custom successMessage property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "typerSpeed",
                "type": "number",
                "default": "30",
                "description": "Custom typerSpeed property."
          }
    ],
    features: [
      "Interactive multi-step form flow with typewriter prompt animations",
      "macOS-style terminal header layout with interactive traffic buttons",
      "Smooth auto-scroll container logic and active keyboard focus control on each step",
      "Dynamic summary review step displaying entered answers before submission",
      "Custom submit callbacks and configurable typewriter speed parameters",
    ],
    notes: [
      "Styled as a dark macOS-style terminal window with traffic light headers, prompt lines (❯), and an inline blinking cursor block.",
      "Implements smooth auto-scroll to the bottom of the log container and auto-focuses the input at each step to keep the experience friction-free.",
    ],
  },

  "promptbar": {
    title: "Prompt Bar",
    category: "FORMS & IDENTITY",
    description: "AI-style prompt input with chat bubble response display.",
    component: PromptBar,
    published: true,
    usage: `import { PromptBar } from "component-labs";

export default function Example() {
  return <PromptBar placeholder="Ask AI..." />;
}`,
    props: [
          {
                "name": "onSubmit",
                "type": "any",
                "default": "undefined",
                "description": "Custom onSubmit property."
          },
          {
                "name": "title",
                "type": "string",
                "default": "\"The Prompt Bar\"",
                "description": "Custom title property."
          },
          {
                "name": "subtitle",
                "type": "string",
                "default": "\"Intelligent Input\"",
                "description": "Custom subtitle property."
          },
          {
                "name": "placeholder",
                "type": "string",
                "default": "\"Explain the architecture of these forms...\"",
                "description": "Custom placeholder property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Chat bubble response display",
      "Submit and reset flow",
      "Decorative background panel",
      "Arrow submit button with hover effect",
    ],
  },

  "comandsearch": {
    title: "Command Search",
    category: "FORMS & IDENTITY",
    description: "Command palette search input with CMD+K shortcut and simulated search.",
    component: CommandSearch,
    published: true,
    usage: `import { CommandSearch } from "component-labs";

export default function Example() {
  return <CommandSearch placeholder="Search components..." />;
}`,
    props: [
          {
                "name": "onSearch",
                "type": "any",
                "default": "undefined",
                "description": "Custom onSearch property."
          },
          {
                "name": "title",
                "type": "string",
                "default": "\"Command Search\"",
                "description": "Custom title property."
          },
          {
                "name": "subtitle",
                "type": "string",
                "default": "\"Command Palette\"",
                "description": "Custom subtitle property."
          },
          {
                "name": "footerQuote",
                "type": "string",
                "default": "\"Efficiency through spatial memory and rapid keyboard interaction.\"",
                "description": "Custom footerQuote property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "CMD+K keyboard shortcut toggle",
      "Three states: idle, searching, done",
      "Animated status dropdown",
      "KBD shortcut indicators",
    ],
  },

  "minimalauth": {
    title: "Minimal Auth",
    category: "FORMS & IDENTITY",
    description: "Clean authentication form with loading and success states.",
    component: MinimalAuth,
    published: true,
    usage: `import { MinimalAuth } from "component-labs";

export default function Example() {
  return <MinimalAuth onSubmit={(email, pass) => {}} />;
}`,
    props: [
          {
                "name": "onSignIn",
                "type": "any",
                "default": "undefined",
                "description": "Custom onSignIn property."
          },
          {
                "name": "title",
                "type": "string",
                "default": "\"Minimal Auth\"",
                "description": "Custom title property."
          },
          {
                "name": "subtitle",
                "type": "string",
                "default": "\"Entry Point\"",
                "description": "Custom subtitle property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Three states: idle, loading, success",
      "Blur effect during loading",
      "Success state with checkmark animation",
      "Auto-reset after success",
    ],
  },

  "richcomposer": {
    title: "Rich Composer",
    category: "FORMS & IDENTITY",
    description: "ContentEditable rich text editor with toolbar and AI-thinking indicator.",
    component: RichComposer,
    published: true,
    usage: `import { RichComposer } from "component-labs";

export default function Example() {
  return <RichComposer placeholder="Write story..." />;
}`,
    props: [
          {
                "name": "onPublish",
                "type": "any",
                "default": "undefined",
                "description": "Custom onPublish property."
          },
          {
                "name": "title",
                "type": "string",
                "default": "\"Rich Composer\"",
                "description": "Custom title property."
          },
          {
                "name": "placeholder",
                "type": "string",
                "default": "\"Begin crafting your narrative...\"",
                "description": "Custom placeholder property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Bold, italic, list, link formatting",
      "ContentEditable with toolbar",
      "Character count display",
      "AI-thinking status indicator",
      "Publish button",
    ],
  },

  // LINKS & NAVIGATION

  "clippathiconlink": {
    title: "Clip Path Icon Link",
    category: "LINKS & NAVIGATION",
    description: "Icon link grid with clip-path hover animation effect.",
    component: ClipPathLinks,
    published: true,
    usage: `import { ClipPathLinks } from "component-labs";

export default function Example() {
  return <ClipPathLinks />;
}`,
    props: [
          {
                "name": "groups",
                "type": "any",
                "default": "DEFAULT_LINK_GROUPS",
                "description": "Custom groups property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Clip-path hover animation per link box",
      "Dynamic grid columns per row",
      "Lucide-react icon support",
      "Accessible labels",
    ],
  },

  "takeoverlink": {
    title: "Takeover Link",
    category: "LINKS & NAVIGATION",
    description: "Full-section color takeover navigation with split-text animation.",
    component: TakeoverLinks,
    published: true,
    usage: `import { TakeoverLinks } from "component-labs";

export default function Example() {
  return <TakeoverLinks />;
}`,
    props: [
          {
                "name": "links",
                "type": "any",
                "default": "DEFAULT_LINKS",
                "description": "Custom links property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Full-section color takeover on hover",
      "Split-text animation",
      "First link color as initial background",
      "Best with short uppercase labels",
    ],
  },

  "neuralhoverlink": {
    title: "Neural Hover Link",
    category: "LINKS & NAVIGATION",
    description: "Parallax link rows with mouse-driven scramble and image effects.",
    component: NeuralHoverLinks,
    published: true,
    usage: `import { NeuralHoverLinks } from "component-labs";

export default function Example() {
  return <NeuralHoverLinks />;
}`,
    props: [
          {
                "name": "links",
                "type": "any",
                "default": "LINKS_DATA",
                "description": "Custom links property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Mouse-position parallax effect",
      "Text scramble on hover",
      "Image preview on hover",
      "Internal data array (customizable via source edit)",
    ],
  },

  // CARDS & LAYOUTS

  "statesynthesis": {
    title: "State Synthesis",
    category: "CARDS & LAYOUTS",
    description: "Interactive card cycling through idle, processing, and success states.",
    component: StateSynthesisCard,
    published: true,
    usage: `import { StateSynthesisCard } from "component-labs";

export default function Example() {
  return <StateSynthesisCard />;
}`,
    props: [
          {
                "name": "states",
                "type": "any",
                "default": "STATES",
                "description": "Custom states property."
          },
          {
                "name": "title",
                "type": "string",
                "default": "\"State Synthesis\"",
                "description": "Custom title property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "\"Seamlessly transitioning between user input and background processing.\"",
                "description": "Custom description property."
          },
          {
                "name": "badgeText",
                "type": "string",
                "default": "\"Interactive Morph\"",
                "description": "Custom badgeText property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Three morphing states with AnimatePresence",
      "Animated percentage counter",
      "SVG progress ring",
      "Click to cycle states",
      "Step indicator dots",
    ],
  },

  "agenticflow": {
    title: "Agentic Flow",
    category: "CARDS & LAYOUTS",
    description: "Step-by-step agentic workflow card with accept/reject review.",
    component: AgenticFlowCard,
    published: true,
    usage: `import { AgenticFlowCard } from "component-labs";

export default function Example() {
  return <AgenticFlowCard delay={1000} />;
}`,
    props: [
          {
                "name": "steps",
                "type": "any",
                "default": "STEPS",
                "description": "Custom steps property."
          },
          {
                "name": "title",
                "type": "string",
                "default": "\"Agentic Flow\"",
                "description": "Custom title property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Sequential step reveal animation",
      "Accept/Reject review phase",
      "Color-coded step indicators",
      "Replay functionality",
      "Progress bar sync",
    ],
  },

  "depthperception": {
    title: "Depth Perception",
    category: "CARDS & LAYOUTS",
    description: "Layered card stack with atmospheric shadows and fan-out animation.",
    component: DepthPerceptionCard,
    published: true,
    usage: `import { DepthPerceptionCard } from "component-labs";

export default function Example() {
  return <DepthPerceptionCard initialLayers={3} />;
}`,
    props: [
          {
                "name": "title",
                "type": "string",
                "default": "\"Depth Perception\"",
                "description": "Custom title property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "\"Layered elements using atmospheric shadows and Z-index offsets.\"",
                "description": "Custom description property."
          },
          {
                "name": "buttonText",
                "type": "string",
                "default": "\"Execute Function\"",
                "description": "Custom buttonText property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Dynamic layer addition (up to 5)",
      "Fan-out animation on execute",
      "Atmospheric shadow depth",
      "Toast notification on action",
      "Spring-based physics",
    ],
  },

  "pricingtiers": {
    title: "Pricing Tiers",
    category: "CARDS & LAYOUTS",
    description: "Three-tier pricing card layout with popular badge and hover lift.",
    component: PricingCard,
    published: true,
    usage: `import { PricingCard } from "component-labs";

export default function Example() {
  return <PricingCard />;
}`,
    props: [
          {
                "name": "plans",
                "type": "any",
                "default": "PLANS",
                "description": "Custom plans property."
          },
          {
                "name": "title",
                "type": "any",
                "default": "Engineered for Craft.",
                "description": "Custom title property."
          },
          {
                "name": "description",
                "type": "any",
                "default": "Transparent pricing for developers who prioritize micro-alignment",
                "description": "Custom description property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Three-tier pricing layout",
      "Popular plan badge highlight",
      "Hover lift animation",
      "Active/locked feature indicators",
      "Staggered entrance animation",
    ],
  },

  "premiumtiltcard": {
    title: "Premium Tilt Card",
    category: "CARDS & LAYOUTS",
    description: "An elegant, physics-driven 3D tilt card with a dynamic radial glare effect tracking the cursor.",
    component: PremiumTiltCard,
    published: true,
    usage: `import { PremiumTiltCard } from "component-labs";

export default function Example() {
  return <PremiumTiltCard title="Dashboard" />;
}`,
    props: [
          {
                "name": "title",
                "type": "string",
                "default": "\"Premium Interface\"",
                "description": "Custom title property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "A minimal",
                "description": "Custom description property."
          },
          {
                "name": "href",
                "type": "string",
                "default": "#",
                "description": "Custom href property."
          },
          {
                "name": "icon",
                "type": "string",
                "default": "\u2318",
                "description": "Custom icon property."
          },
          {
                "name": "actionText",
                "type": "string",
                "default": "\"Explore Component\"",
                "description": "Custom actionText property."
          },
          {
                "name": "rotationRange",
                "type": "number",
                "default": "18",
                "description": "Custom rotationRange property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Interactive 3D tilt physics using mouse coordinates tracking",
      "Radial glare lighting effect overlay dynamically aligned with the cursor",
      "Flexible polymorphic wrapper support (as prop) for router compatibility",
      "Clean visual structure with circular badge icons and action indicators",
      "Highly premium dark design system preserving original styles and branding",
    ],
    notes: [
      "Styled as an elegant, physics-driven tilt card with a dynamic radial glare effect overlay that tracks the user's cursor position.",
      "Offers a premium 3D transform effect utilizing Framer Motion's preserve-3d standard styles.",
      "Strictly preserves all original styles, custom dimensions (h-100, w-75), borders, glare calculations, and colors (like text-primary and #E8567A).",
    ],
  },

  // KEYBOARDS

  "macstylelayout": {
    title: "Mac Style Layout",
    category: "KEYBOARDS",
    description: "Interactive Mac-style keyboard with real key sounds and press animations.",
    component: MacKeyboard,
    published: true,
    usage: `import { MacKeyboard } from "component-labs";

export default function Example() {
  return <MacKeyboard soundSrc="/assets/click.mp3" />;
}`,
    props: [
          {
                "name": "soundSrc",
                "type": "string",
                "default": "\"/sound.ogg\"",
                "description": "Click sound URL."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom classes."
          }
    ],
    features: [
      "Full QWERTY layout with function keys",
      "Real keyboard sound via Web Audio API",
      "Physical key press and mouse click support",
      "Responsive scaling for smaller screens",
      "Intersection Observer for scope limiting",
      "Requires /sound.ogg in host app public folder",
      "Client-only — uses window, AudioContext, IntersectionObserver",
    ],
  },

  "macstyledarklayout": {
    title: "Mac Style Dark",
    category: "KEYBOARDS",
    description: "Dark-themed Mac keyboard variant with same interactive sound features.",
    component: MacKeyboardDark,
    published: true,
    usage: `import { MacKeyboardDark } from "component-labs";

export default function Example() {
  return <MacKeyboardDark soundSrc="/assets/click.mp3" />;
}`,
    props: [
          {
                "name": "soundSrc",
                "type": "string",
                "default": "\"/sound.ogg\"",
                "description": "Click sound URL."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom classes."
          }
    ],
    features: [
      "Dark color scheme keyboard",
      "Full QWERTY layout with function keys",
      "Real keyboard sound via Web Audio API",
      "Responsive scaling",
      "Intersection Observer scoping",
      "Requires /sound.ogg in host app public folder",
      "Client-only — uses browser audio and visibility APIs",
    ],
  },

  "typewriteredition": {
    title: "Typewriter Edition",
    category: "KEYBOARDS",
    description: "Vintage typewriter-style keyboard with round keycaps and glass dome effect.",
    component: TypewriterKeyboard,
    published: true,
    usage: `import { TypewriterKeyboard } from "component-labs";

export default function Example() {
  return <TypewriterKeyboard soundSrc="/assets/type.mp3" />;
}`,
    props: [
          {
                "name": "soundUrl",
                "type": "string",
                "default": "\"/sound.ogg\"",
                "description": "Custom soundUrl property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "keyTextClass",
                "type": "string",
                "default": "\"text-[#1a1a1a]\"",
                "description": "Custom keyTextClass property."
          }
    ],
    features: [
      "Vintage round keycap design",
      "Glass dome 3D effect on keys",
      "Chrome rim gradients",
      "Reduced key set (QWERTY + ASDFG + Space)",
      "Tactile press depth animation",
    ],
  },

  // GRIDS

  "bentostatsboard": {
    title: "Bento Stats Board",
    category: "GRIDS",
    description: "Bento-style stats grid with animated counters and sparkline graphs.",
    component: BentoStatsGrid,
    published: true,
    usage: `import { BentoStatsGrid } from "component-labs";

export default function Example() {
  return <BentoStatsGrid />;
}`,
    props: [
          {
                "name": "stats",
                "type": "any",
                "default": "defaultStats",
                "description": "Custom stats property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Animated number counters",
      "SVG sparkline graphs",
      "Bento grid layout (mixed sizes)",
      "Hover lift animation",
      "Viewport-triggered animations",
    ],
  },

  "masonryshowcase": {
    title: "Masonry Showcase",
    category: "GRIDS",
    description: "CSS columns masonry grid with showcase cards and preview areas.",
    component: MasonryShowcaseGrid,
    published: true,
    usage: `import { MasonryShowcaseGrid } from "component-labs";

export default function Example() {
  return <MasonryShowcaseGrid />;
}`,
    props: [
          {
                "name": "items",
                "type": "any",
                "default": "defaultItems",
                "description": "Custom items property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "CSS columns masonry layout",
      "Variable height preview areas",
      "Hover border accent color",
      "Staggered viewport entrance",
      "Copy button on each card",
    ],
  },

  "technicalcrosshairs": {
    title: "Technical Crosshairs",
    category: "GRIDS",
    description: "3x2 feature grid with crosshair markers and full-cell color inversion on hover.",
    component: CrosshairFeatureGrid,
    published: true,
    usage: `import { CrosshairFeatureGrid } from "component-labs";

export default function Example() {
  return <CrosshairFeatureGrid />;
}`,
    props: [
          {
                "name": "features",
                "type": "any",
                "default": "defaultFeatures",
                "description": "Custom features property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "3x2 responsive grid",
      "Full-cell color inversion on hover",
      "Crosshair intersection markers",
      "SVG icon support",
      "Staggered fade-in animation",
    ],
  },

  // HERO SECTIONS

  "staggeredentrance": {
    title: "Staggered Entrance",
    category: "HERO SECTIONS",
    description: "Hero section with spring-physics staggered entrance animation.",
    component: StaggeredEntranceHero,
    published: true,
    usage: `import { StaggeredEntranceHero } from "component-labs";

export default function Example() {
  return <StaggeredEntranceHero title="Welcome to Labs" />;
}`,
    props: [
          {
                "name": "titlePre",
                "type": "string",
                "default": "\"Design systems with\"",
                "description": "Custom titlePre property."
          },
          {
                "name": "highlightWord",
                "type": "string",
                "default": "\"literary\"",
                "description": "Custom highlightWord property."
          },
          {
                "name": "titlePost",
                "type": "string",
                "default": "\"soul.\"",
                "description": "Custom titlePost property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "We combine the aggressive engineered precision of compressed gothic typography with the warm calligraphic soul of classic serifs. A delicate balance of logic and emotion.",
                "description": "Custom description property."
          },
          {
                "name": "primaryButtonText",
                "type": "string",
                "default": "\"Explore Typography\"",
                "description": "Custom primaryButtonText property."
          },
          {
                "name": "secondaryButtonText",
                "type": "string",
                "default": "\"View Guidelines\"",
                "description": "Custom secondaryButtonText property."
          },
          {
                "name": "onPrimaryClick",
                "type": "any",
                "default": "undefined",
                "description": "Custom onPrimaryClick property."
          },
          {
                "name": "onSecondaryClick",
                "type": "any",
                "default": "undefined",
                "description": "Custom onSecondaryClick property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Spring-physics stagger animation",
      "Highlighted accent word with scale entrance",
      "Dot pattern background",
      "Dual CTA buttons",
      "Viewport-triggered animation",
    ],
  },

  "dynamicprimitives": {
    title: "Dynamic Primitives",
    category: "HERO SECTIONS",
    description: "Interactive hero showcase with morphing button, parameter dial, accordion, and data table.",
    component: DynamicHero,
    published: true,
    usage: `import { DynamicHero } from "component-labs";

export default function Example() {
  return <DynamicHero />;
}`,
    props: [
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Morphing action button with progress",
      "Precision parameter dial slider",
      "Atmospheric accordion with tags",
      "Data streamer table with latency metrics",
      "Two-column responsive layout",
    ],
  },

  "auroragradienthero": {
    title: "Aurora Gradient Hero",
    category: "HERO SECTIONS",
    description: "A dark premium hero section with an animated aurora radial gradient background and interactive canvas starfield.",
    component: AuroraHero,
    published: true,
    usage: `import { AuroraHero } from "component-labs";

export default function Example() {
  return <AuroraHero badgeText="v2.0 Live" title="Next Gen UI" />;
}`,
    props: [
          {
                "name": "badgeText",
                "type": "string",
                "default": "\"Beta Now Live!\"",
                "description": "Custom badgeText property."
          },
          {
                "name": "title",
                "type": "string",
                "default": "\"Decrease your SaaS churn by over 90%\"",
                "description": "Custom title property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "Predict at-risk users before they leave. Our AI-powered retention engine identifies churn signals in real-time so you can act fast and keep your customers engaged.",
                "description": "Custom description property."
          },
          
          {
                "name": "ctaText",
                "type": "string",
                "default": "\"Start free trial\"",
                "description": "Custom ctaText property."
          },
          {
                "name": "onCtaClick",
                "type": "any",
                "default": "undefined",
                "description": "Custom onCtaClick property."
          },
          {
                "name": "starCount",
                "type": "number",
                "default": "250",
                "description": "Custom starCount property."
          },
          {
                "name": "colors",
                "type": "any",
                "default": "DEFAULT_AURORA_COLORS",
                "description": "Custom colors property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Twinkling starfield background using HTML5 Canvas",
      "Framer Motion animated aurora radial gradients",
      "Interactive CTA button with dynamic border glow effect",
      "Fully customizable supporting badge, main title, and description text",
      "Stunning premium entrance animations for headings and button groups",
    ],
    notes: [
      "Implements a canvas-based twinkling starfield background combined with an animated radial gradient using Framer Motion.",
      "Sizing bounds-checks are built-in defensively to ensure canvas rendering is always clean.",
    ],
  },

  // FEATURES

  "codeshowcasesegment": {
    title: "Code Showcase Segment",
    category: "FEATURES",
    description: "Dark code showcase section with React/HTML tab switching and syntax highlighting.",
    component: CodeShowcaseFeature,
    published: true,
    usage: `import { CodeShowcaseFeature } from "component-labs";

export default function Example() {
  return <CodeShowcaseFeature />;
}`,
    props: [
          {
                "name": "title",
                "type": "string",
                "default": "\"Engineered for modern frameworks\"",
                "description": "Custom title property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "ComponentLabs provides first-class support for React, Next.js, and vanilla JavaScript. Seamlessly integrate our primitives into your existing stack",
                "description": "Custom description property."
          },
          {
                "name": "codeExamples",
                "type": "any",
                "default": "CODE_EXAMPLES",
                "description": "Custom codeExamples property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "React and HTML tab switching",
      "Simulated syntax highlighting",
      "Line numbers display",
      "GitHub stars badge",
      "Grid pattern background with glow",
      "AnimatePresence tab transitions",
    ],
  },

  "interactivespotlightfeatures": {
    title: "Interactive Spotlight Features",
    category: "FEATURES",
    description: "Premium SaaS-oriented feature cards leveraging local mouse tracking to drive glowing spotlights, accompanied by high-fidelity SVG technical grids.",
    component: InteractiveSpotlightFeatures,
    published: true,
    usage: `import { InteractiveSpotlightFeatures } from "component-labs";

export default function Example() {
  return <InteractiveSpotlightFeatures />;
}`,
    props: [
          {
                "name": "title",
                "type": "string",
                "default": "\"Built to cover your needs\"",
                "description": "Custom title property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "A suite of modular high-performance primitives engineered to give you absolute control over your digital product's design and intelligence.",
                "description": "Custom description property."
          },
          {
                "name": "features",
                "type": "any",
                "default": "defaultFeatures",
                "description": "Custom features property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Real-time cursor coordinate spotlight tracking",
      "SVG-drawn blueprint grid backdrops with crosshairs",
      "Spring-responsive card transformations & micro-lifts",
      "Lucide vector icon layouts",
      "Unified dark and light theme compliance",
    ],
  },

  "creativeteamsfeature": {
    title: "Creative Teams Feature",
    category: "FEATURES",
    description: "A highly polished, responsive bento-grid feature section displaying fast integration, powerful core library, enterprise-grade security, and an interactive, animated circuit board tracing pattern for intelligent layouts.",
    component: CreativeTeamsFeature,
    published: true,
    usage: `import { CreativeTeamsFeature } from "component-labs";

export default function Example() {
  return <CreativeTeamsFeature />;
}`,
    props: [
          {
                "name": "title",
                "type": "string",
                "default": "\"The foundation for creative teams management\"",
                "description": "Custom title property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "\"Lyra is evolving to be more than just the models. It supports an entire ecosystem of APIs and platforms helping developers and businesses innovate with soulful precision.\"",
                "description": "Custom description property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Dynamic 12-column responsive bento grid",
      "Looping glowing pulse animations along trace paths",
      "Highly detailed vector microchip layout built entirely using custom SVG lines",
      "Elegant Space Grotesk / Inter typography styling",
      "Seamless dark mode and light mode responsiveness out-of-the-box",
    ],
  },

  // FAQS

  "categorizedfaq": {
    title: "Categorized FAQ",
    category: "FAQS",
    description: "FAQ component with category pill tabs and animated accordion answers.",
    component: CategorizedFAQ,
    published: true,
    usage: `import { CategorizedFAQ } from "component-labs";

export default function Example() {
  return <CategorizedFAQ />;
}`,
    props: [
          {
                "name": "categories",
                "type": "any",
                "default": "CATEGORIES",
                "description": "Custom categories property."
          },
          {
                "name": "faqData",
                "type": "any",
                "default": "FAQ_DATA",
                "description": "Custom faqData property."
          },
          {
                "name": "title",
                "type": "string",
                "default": "\"FAQs\"",
                "description": "Custom title property."
          },
          {
                "name": "subtitle",
                "type": "string",
                "default": "\"Let's answer some questions\"",
                "description": "Custom subtitle property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Category pill tab selection",
      "Animated accordion expand/collapse",
      "AnimatePresence for category transitions",
      "Plus icon rotation on open",
      "Reset open question on category change",
    ],
  },

  "standardfaq": {
    title: "Standard FAQ",
    category: "FAQS",
    description: "Simple animated FAQ accordion with motion expand/collapse.",
    component: AnimatedFAQ,
    published: true,
    usage: `import { AnimatedFAQ } from "component-labs";

export default function Example() {
  return <AnimatedFAQ />;
}`,
    props: [
          {
                "name": "faqs",
                "type": "any",
                "default": "DEFAULT_FAQS",
                "description": "Custom faqs property."
          },
          {
                "name": "titlePre",
                "type": "string",
                "default": "\"Frequently Assumed \"",
                "description": "Custom titlePre property."
          },
          {
                "name": "titleHighlight",
                "type": "string",
                "default": "\"Queries\"",
                "description": "Custom titleHighlight property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "\"Everything you need to know about our principles and architecture.\"",
                "description": "Custom description property."
          },
          {
                "name": "question",
                "type": "any",
                "default": "undefined",
                "description": "Custom question property."
          },
          {
                "name": "answer",
                "type": "any",
                "default": "undefined",
                "description": "Custom answer property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Accordion expand/collapse animation",
      "Plus icon rotates to X on open",
      "Background color change on active",
      "Single FAQ or list mode",
    ],
  },

  "minimalgridfaq": {
    title: "Minimal Grid FAQ",
    category: "FAQS",
    description: "High-fidelity responsive grid callout mapping key FAQs with circular help decorators, Space Grotesk section titles, and micro-hover interactions.",
    component: MinimalGridFAQ,
    published: true,
    usage: `import { MinimalGridFAQ } from "component-labs";

export default function Example() {
  return <MinimalGridFAQ />;
}`,
    props: [
          {
                "name": "faqs",
                "type": "any",
                "default": "faqData",
                "description": "Custom faqs property."
          },
          {
                "name": "title",
                "type": "string",
                "default": "\"Frequently Asked Questions\"",
                "description": "Custom title property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Clean responsive 3-column desktop layout grid",
      "Geometric Space Grotesk section title",
      "Interactive help mark vector decorators",
      "Spring-animated micro-hover lifts",
      "Seamless dark and light theme compliance using Tailwind variables",
    ],
  },

  // LOGO CLOUDS

  "simplelogocloud": {
    title: "Simple Logo Cloud",
    category: "LOGO CLOUDS",
    description: "Two-row logo cloud with grayscale-to-color hover effect.",
    component: LogoCloud,
    published: true,
    usage: `import { LogoCloud } from "component-labs";

export default function Example() {
  return <LogoCloud />;
}`,
    props: [
          {
                "name": "headline",
                "type": "string",
                "default": "\"Your favorite companies are our partners.\"",
                "description": "Custom headline property."
          },
          {
                "name": "companies",
                "type": "any",
                "default": "defaultCompanies",
                "description": "Custom companies property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Two-row responsive logo layout",
      "Grayscale to color on hover",
      "Icon + text company logos",
      "Configurable headline",
    ],
  },

  "centeredlogocloud": {
    title: "Centered Logo Cloud",
    category: "LOGO CLOUDS",
    description: "Centered logo cloud with headline, description, and flexible icon/text display.",
    component: CenteredLogoCloud,
    published: true,
    usage: `import { CenteredLogoCloud } from "component-labs";

export default function Example() {
  return <CenteredLogoCloud />;
}`,
    props: [
          {
                "name": "headline",
                "type": "string",
                "default": "\"You're in good company\"",
                "description": "Custom headline property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "ComponentLabs is trusted by leading teams from Generative AI Companies, Hosting Providers, Payments Providers, Streaming Providers",
                "description": "Custom description property."
          },
          {
                "name": "companies",
                "type": "any",
                "default": "defaultCompanies",
                "description": "Custom companies property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Centered layout with description",
      "Icon-only or icon+text per company",
      "Grayscale to color on hover",
      "Opacity transition effect",
    ],
  },

  "animatedmarqueelogocloud": {
    title: "Marquee Logo Cloud",
    category: "LOGO CLOUDS",
    description: "An infinite, ultra-wide horizontal scrolling marquee logo cloud.",
    component: MarqueeLogoCloud,
    published: true,
    usage: `import { MarqueeLogoCloud } from "component-labs";

export default function Example() {
  return <MarqueeLogoCloud />;
}`,
    props: [
          {
                "name": "headline",
                "type": "string",
                "default": "\"Your favorite companies are our partners.\"",
                "description": "Custom headline property."
          },
          {
                "name": "companies",
                "type": "any",
                "default": "defaultCompanies",
                "description": "Custom companies property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "speed",
                "type": "number",
                "default": "40",
                "description": "Custom speed property."
          }
    ],
    features: [
      "Infinite horizontal marquee auto-scrolling logo trail",
      "Customizable speed and headline text parameters",
      "Seamless translation loop using a dynamic relative offset formula",
      "Grayscale-filtered logos that transition beautifully on hover",
      "Built-in auto-repeat helper duplicating array items to guarantee a gapless loop on ultra-wide screens",
    ],
    notes: [
      "Uses a dynamic -50% relative translation loop, ensuring perfect loop seamlessness on any screen size regardless of custom logo widths or names.",
      "Includes a built-in repeatCompaniesToFit helper that replicates the company logos array until it has at least 15 items, ensuring a perfect full-bleed layout without gaps even on ultra-wide screens.",
    ],
  },

  "crosshairgridlogocloud": {
    title: "Crosshair Grid",
    category: "LOGO CLOUDS",
    description: "5-column logo grid with crosshair corner markers and mouse spotlight glow.",
    component: CrosshairLogoCloud,
    published: true,
    usage: `import { CrosshairLogoCloud } from "component-labs";

export default function Example() {
  return <CrosshairLogoCloud />;
}`,
    props: [
          {
                "name": "headline",
                "type": "string",
                "default": "ComponentLabs is trusted by leading teams from Generative AI Companies, Hosting Providers, Payments Providers, Streaming Providers",
                "description": "Custom headline property."
          },
          {
                "name": "companies",
                "type": "any",
                "default": "defaultCompanies",
                "description": "Custom companies property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "5-column responsive grid",
      "Crosshair corner markers",
      "Mouse-follow spotlight glow",
      "Grayscale with scale on hover",
      "Viewport-triggered fade in",
    ],
  },

  // FOOTERS

  "sassfooter": {
    title: "SaaS Footer",
    category: "FOOTERS",
    description: "SaaS-style footer with conversion CTA card, link columns, and status badge.",
    component: SaaSFooter,
    published: true,
    usage: `import { SaaSFooter } from "component-labs";

export default function Example() {
  return <SaaSFooter />;
}`,
    props: [
          {
                "name": "ctaTitle",
                "type": "string",
                "default": "\"Create",
                "description": "Custom ctaTitle property."
          },
          {
                "name": "Sell and Grow\"",
                "type": "any",
                "default": "undefined",
                "description": "Custom Sell and Grow\" property."
          },
          {
                "name": "ctaDescription",
                "type": "string",
                "default": "\"Join a community of over 1000+ companies and developers who have already discovered the power of ComponentLabs.\"",
                "description": "Custom ctaDescription property."
          },
          {
                "name": "ctaButtonText",
                "type": "string",
                "default": "\"Contact Sales\"",
                "description": "Custom ctaButtonText property."
          },
          {
                "name": "brandName",
                "type": "string",
                "default": "\"ComponentLabs\"",
                "description": "Custom brandName property."
          },
          {
                "name": "brandDescription",
                "type": "string",
                "default": "\"ComponentLabs is a platform for building AI-powered applications.\"",
                "description": "Custom brandDescription property."
          },
          {
                "name": "productLinks",
                "type": "array",
                "default": "['Features', 'solution', 'Partnerships', 'Mobile apps']",
                "description": "Custom productLinks property."
          },
          {
                "name": "companyLinks",
                "type": "array",
                "default": "['About', 'Licence', 'Privacy']",
                "description": "Custom companyLinks property."
          },
          {
                "name": "copyright",
                "type": "string",
                "default": "\"\u00a9 2026 ComponentLabs. ALl rights reserved",
                "description": "Custom copyright property."
          },
          {
                "name": "statusText",
                "type": "string",
                "default": "\"All Systems Normal\"",
                "description": "Custom statusText property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Conversion-oriented CTA card",
      "Decorative arch graphic",
      "Three-column link layout",
      "Social media icons",
      "Animated system status badge",
      "Staggered entrance animations",
    ],
  },

  "minimalfooter": {
    title: "Minimal Footer",
    category: "FOOTERS",
    description: "Clean minimal footer with brand, social links, nav links, and copyright.",
    component: MinimalFooter,
    published: true,
    usage: `import { MinimalFooter } from "component-labs";

export default function Example() {
  return <MinimalFooter />;
}`,
    props: [
          {
                "name": "brandName",
                "type": "string",
                "default": "\"ComponentLabs\"",
                "description": "Custom brandName property."
          },
          {
                "name": "description",
                "type": "string",
                "default": "\"The modern integration platform for teams who ship fast and build beautiful interfaces.\"",
                "description": "Custom description property."
          },
          {
                "name": "footerLinks",
                "type": "array",
                "default": "['Home', 'Pricing', 'Docs', 'About', 'Contact']",
                "description": "Custom footerLinks property."
          },
          {
                "name": "copyright",
                "type": "string",
                "default": "\"\u00a9 2026 ComponentLabs. All rights reserved.",
                "description": "Custom copyright property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Spring-physics staggered entrance",
      "Social media icons (X, GitHub, LinkedIn)",
      "Underline hover effect on nav links",
      "Clean two-section border layout",
      "Dark mode compatible",
    ],
  },

  "editorialbrandfooter": {
    title: "Editorial Brand Footer",
    category: "FOOTERS",
    description: "Premium large-brand editorial footer with massive condensed heading, serif design tag, 4-column links, and social copyright bar.",
    component: EditorialBrandFooter,
    published: true,
    usage: `import { EditorialBrandFooter } from "component-labs";

export default function Example() {
  return <EditorialBrandFooter />;
}`,
    props: [
          {
                "name": "columns",
                "type": "any",
                "default": "DEFAULT_COLUMNS",
                "description": "Custom columns property."
          },
          {
                "name": "wordmarkText",
                "type": "string",
                "default": "\"COMPONENTLAB\"",
                "description": "Custom wordmarkText property."
          },
          {
                "name": "designLabel",
                "type": "string",
                "default": "\"design\"",
                "description": "Custom designLabel property."
          },
          {
                "name": "copyright",
                "type": "string",
                "default": "\"\u00a9 2026 COMPONENTLAB. ALL RIGHTS RESERVED.\"",
                "description": "Custom copyright property."
          },
          {
                "name": "socialLinks",
                "type": "array",
                "default": "['TWITTER', 'GITHUB', 'DRIBBBLE', 'LINKEDIN']",
                "description": "Custom socialLinks property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Massive high-impact editorial brand logo",
      "Serif lowercase design wordmark accent",
      "4-column structured link layout",
      "Trademark status indicator circle",
      "Fully responsive mobile stacking layout",
      "Premium dark container with custom rounded corners",
    ],
  },

  "engineeringstatusfooter": {
    title: "Engineering Status Footer",
    category: "FOOTERS",
    description: "Ultra-premium brand footer with technical operational status bar, centered dot-separated navigation, dynamic backdrop spotlight, and individual letter spring reactions.",
    component: EngineeringStatusFooter,
    published: true,
    usage: `import { EngineeringStatusFooter } from "component-labs";

export default function Example() {
  return <EngineeringStatusFooter />;
}`,
    props: [
          {
                "name": "navLinks",
                "type": "any",
                "default": "DEFAULT_NAV_LINKS",
                "description": "Custom navLinks property."
          },
          {
                "name": "wordmarkText",
                "type": "string",
                "default": "\"COMPONENTLAB\"",
                "description": "Custom wordmarkText property."
          },
          {
                "name": "copyright",
                "type": "string",
                "default": "\"\u00a9 2026 ComponentLab. Engineered with precision. Built for humans.\"",
                "description": "Custom copyright property."
          },
          {
                "name": "legalLinks",
                "type": "array",
                "default": "['PRIVACY', 'TERMS', 'CONTACT']",
                "description": "Custom legalLinks property."
          },
          {
                "name": "systemRegistryVersion",
                "type": "string",
                "default": "\"v2.0.4\"",
                "description": "Custom systemRegistryVersion property."
          },
          {
                "name": "systemRegistryStatus",
                "type": "string",
                "default": "\"STABLE_BUILD\"",
                "description": "Custom systemRegistryStatus property."
          },
          {
                "name": "globalPresence",
                "type": "string",
                "default": "\"SF + LON + TYO\"",
                "description": "Custom globalPresence property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Technical operational status bar with boxed registry identifier",
      "Pulsating green status beacon with Systems Nominal underline",
      "Centered dot-separated responsive links with sibling focus-dimming",
      "Book a Demo high-contrast pill with spring-animating arrow action",
      "Massive bold wordmark COMPONENTLAB with organic letter-by-letter spring wave on hover",
      "Dynamic cursor-tracking backlit ambient spotlight glow",
      "Serif Georgia copyright signature styling",
    ],
  },

  // CTA SECTIONS

  "smartinterfacecta": {
    title: "Smart Interface CTA",
    category: "CTA SECTIONS",
    description: "A drafting-board themed section with background blueprints, a coordinate grid framework, and trust badges.",
    component: SmartInterfaceCTA,
    published: true,
    usage: `import { SmartInterfaceCTA } from "component-labs";

export default function Example() {
  return <SmartInterfaceCTA />;
}`,
    props: [
          {
                "name": "badgeText",
                "type": "string",
                "default": "\"Trusted by 2",
                "description": "Custom badgeText property."
          },
          {
                "name": "000+ Engineers\"",
                "type": "any",
                "default": "undefined",
                "description": "Custom 000+ Engineers\" property."
          },
          {
                "name": "headline",
                "type": "any",
                "default": "The smartest interface decision you\u2019ve ever made.",
                "description": "Custom headline property."
          },
          {
                "name": "subtitle",
                "type": "any",
                "default": "Experience the precision of an engineered design system combined with the soul of premium typography. Build faster",
                "description": "Custom subtitle property."
          },
          {
                "name": "feelbetter",
                "type": "string",
                "default": "undefined",
                "description": "Custom feel better.</> property."
          },
          {
                "name": "primaryCtaText",
                "type": "string",
                "default": "\"Start Building\"",
                "description": "Custom primaryCtaText property."
          },
          {
                "name": "onPrimaryCtaClick",
                "type": "any",
                "default": "undefined",
                "description": "Custom onPrimaryCtaClick property."
          },
          {
                "name": "secondaryCtaText",
                "type": "string",
                "default": "\"Book a Demo\"",
                "description": "Custom secondaryCtaText property."
          },
          {
                "name": "secondaryCtaHref",
                "type": "string",
                "default": "\"#\"",
                "description": "Custom secondaryCtaHref property."
          },
          {
                "name": "onSecondaryCtaClick",
                "type": "any",
                "default": "undefined",
                "description": "Custom onSecondaryCtaClick property."
          },
          {
                "name": "icon",
                "type": "any",
                "default": "<DraftingCompass className=\"w-6.5 h-6.5 sm:w-7 sm:h-7\" strokeWidth={1.5} />",
                "description": "Custom icon property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Architectural blueprint drafting layout with coordinate guideline graphics",
      "Floating trust/social proof badge with dynamic responsive alignments",
      "Interactive buttons featuring sliding arrows on mouse hover",
      "Elegant serif typography styling with editorial spacing",
      "Highly refined coordinate grids perfectly themed for dark and light modes",
    ],
    notes: [
      "Floating trust badge aligns dynamically across mobile and desktop viewpoints.",
      "Arrow indicator in the secondary link triggers a smooth horizontal slide animation on hover.",
    ],
  },

  "creativeintelligencecta": {
    title: "Creative Intelligence CTA",
    category: "CTA SECTIONS",
    description: "An abstract branding section featuring network node indicators, metallic accents, and a flowing waves visual card.",
    component: CreativeIntelligenceCTA,
    published: true,
    usage: `import { CreativeIntelligenceCTA } from "component-labs";

export default function Example() {
  return <CreativeIntelligenceCTA />;
}`,
    props: [
          {
                "name": "headline",
                "type": "string",
                "default": "\"Create with Intelligence\"",
                "description": "Custom headline property."
          },
          {
                "name": "subtitle",
                "type": "string",
                "default": "Scale your digital footprint through an automated mind that learns your tone, logic, and creative rhythm.",
                "description": "Custom subtitle property."
          },
          {
                "name": "ctaText",
                "type": "string",
                "default": "Begin Creation",
                "description": "Custom ctaText property."
          },
          {
                "name": "onCtaClick",
                "type": "any",
                "default": "undefined",
                "description": "Custom onCtaClick property."
          },
          {
                "name": "imageUrl",
                "type": "string",
                "default": "\"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80\"",
                "description": "Custom imageUrl property."
          },
          {
                "name": "imageAlt",
                "type": "string",
                "default": "\"Flowing bronze waves representing automated creativity\"",
                "description": "Custom imageAlt property."
          },
          {
                "name": "icon",
                "type": "any",
                "default": "<Network className=\"w-8 h-8\" strokeWidth={1.5} />",
                "description": "Custom icon property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Staggered entrance animations powered by spring dynamics",
      "Signature metallic copper heading accent colors (#c58c67)",
      "Rounded graphics card showing high-contrast flowing bronze waves",
      "Organic hover scaling effects on background visuals",
      "Sleek wide-tracking pill-button layouts matching premium design grids",
    ],
    notes: [
      "Provides beautiful staggered entry micro-animations powered by motion/react.",
      "Highlights the main title text in a premium metallic copper accent color (#c58c67).",
      "Image element comes with smooth hover scaling animations.",
    ],
  },

  "protierpricingcta": {
    title: "Pro Tier Pricing CTA",
    category: "CTA SECTIONS",
    description: "A premium pricing CTA grid with list checklists, gold highlight badges, and a professional pricing card.",
    component: ProTierPricingCTA,
    published: true,
    usage: `import { ProTierPricingCTA } from "component-labs";

export default function Example() {
  return <ProTierPricingCTA />;
}`,
    props: [
          {
                "name": "badgeText",
                "type": "string",
                "default": "\"New Pro Features Available\"",
                "description": "Custom badgeText property."
          },
          {
                "name": "headline",
                "type": "any",
                "default": "Unlock the Pro Tier",
                "description": "Custom headline property."
          },
          {
                "name": "subtitle",
                "type": "string",
                "default": "Experience the power of seamless integrations and watch your productivity soar with our engineering-grade components.",
                "description": "Custom subtitle property."
          },
          {
                "name": "features",
                "type": "any",
                "default": "defaultFeatures",
                "description": "Custom features property."
          },
          {
                "name": "cardBadgeText",
                "type": "string",
                "default": "\"Most Popular\"",
                "description": "Custom cardBadgeText property."
          },
          {
                "name": "cardTitle",
                "type": "string",
                "default": "\"Professional\"",
                "description": "Custom cardTitle property."
          },
          {
                "name": "cardPrice",
                "type": "string",
                "default": "\"$10\"",
                "description": "Custom cardPrice property."
          },
          {
                "name": "cardPeriod",
                "type": "string",
                "default": "\"/mo\"",
                "description": "Custom cardPeriod property."
          },
          {
                "name": "cardDescription",
                "type": "string",
                "default": "\"Full access for individuals and small teams focused on craft.\"",
                "description": "Custom cardDescription property."
          },
          {
                "name": "ctaText",
                "type": "string",
                "default": "\"Upgrade Now\"",
                "description": "Custom ctaText property."
          },
          {
                "name": "onCtaClick",
                "type": "any",
                "default": "undefined",
                "description": "Custom onCtaClick property."
          },
          {
                "name": "guaranteeText",
                "type": "string",
                "default": "\"14-day free trial \u2022 No credit card required\"",
                "description": "Custom guaranteeText property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Split column grid architecture (promotional details left, transaction card right)",
      "Gold flashing notification badge highlighting pricing updates",
      "Custom checkmark checklists for feature outlines",
      "Hover lifting pricing card with dark highlighted actions",
      "Standard spacing grids isolated for dark and light layout systems",
    ],
    notes: [
      "Combines a split grid layout structure (headline checklist on left, pricing card on right).",
      "Features dynamic card lift animations on mouse hover.",
      "Preserves all layout tokens, color tags (bg-surface-container, text-amber-600), and spacing offsets.",
    ],
  },

  // OTHER PRIMITIVES

  "kanbanboard": {
    title: "Kanban Board",
    category: "OTHER PRIMITIVES",
    description: "Drag-and-drop Kanban board with five columns and trash drop zone.",
    component: KanbanBoard,
    published: true,
    usage: `import { KanbanBoard } from "component-labs";

export default function Example() {
  return <KanbanBoard />;
}`,
    props: [
          {
                "name": "initialTasks",
                "type": "any",
                "default": "DEMO_TASKS",
                "description": "Custom initialTasks property."
          },
          {
                "name": "columns",
                "type": "any",
                "default": "DEMO_COLUMNS",
                "description": "Custom columns property."
          },
          {
                "name": "onTasksChange",
                "type": "any",
                "default": "undefined",
                "description": "Custom onTasksChange property."
          },
          {
                "name": "onTaskMove",
                "type": "any",
                "default": "undefined",
                "description": "Custom onTaskMove property."
          },
          {
                "name": "onTaskAdd",
                "type": "any",
                "default": "undefined",
                "description": "Custom onTaskAdd property."
          },
          {
                "name": "onTaskDelete",
                "type": "any",
                "default": "undefined",
                "description": "Custom onTaskDelete property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "style",
                "type": "object",
                "default": "{",
                "description": "Custom style property."
          }
    ],
    features: [
      "HTML5 drag-and-drop",
      "Five columns: Backlog, Todo, In Progress, Complete, Trash",
      "Add new task inline",
      "AnimatePresence for card transitions",
      "Column highlight on drag over",
      "Completed task strikethrough styling",
      "Internal state management — works immediately without extra wiring",
      "Callback props for syncing to backend or parent store",
    ],
  },

  "vintagemasterfader": {
    title: "Vintage Master Fader",
    category: "OTHER PRIMITIVES",
    description: "Vintage audio mixer fader with VU-style readout and pointer-driven drag.",
    component: VintageFader,
    published: true,
    usage: `import { VintageFader } from "component-labs";

export default function Example() {
  return <VintageFader />;
}`,
    props: [
          {
                "name": "min",
                "type": "number",
                "default": "0",
                "description": "Custom min property."
          },
          {
                "name": "max",
                "type": "number",
                "default": "100",
                "description": "Custom max property."
          },
          {
                "name": "defaultValue",
                "type": "number",
                "default": "50",
                "description": "Custom defaultValue property."
          },
          {
                "name": "step",
                "type": "number",
                "default": "1",
                "description": "Custom step property."
          },
          {
                "name": "onChange",
                "type": "any",
                "default": "undefined",
                "description": "Custom onChange property."
          }
    ],
    features: [
      "Vintage audio mixer aesthetic",
      "Tick marks with 0-100 scale",
      "VU-style readout with orange glow",
      "Pointer event driven for desktop and touch",
      "Animated knob grab feedback",
      "3-digit padded display",
    ],
  },

  "terminaltypingwindow": {
    title: "Terminal Typing Window",
    category: "OTHER PRIMITIVES",
    description: "Terminal card with typewriter command lines and styled output types.",
    component: TerminalTypingCard,
    published: true,
    usage: `import { TerminalTypingCard } from "component-labs";

export default function Example() {
  return <TerminalTypingCard />;
}`,
    props: [
          {
                "name": "lines",
                "type": "array",
                "default": "[\r\n    { text: \"npm install @componentlab/ui\"",
                "description": "Custom lines property."
          },
          {
                "name": "delay: 800",
                "type": "any",
                "default": "undefined",
                "description": "Custom delay: 800 property."
          },
          {
                "name": "type: \"cmd\"",
                "type": "any",
                "default": "undefined",
                "description": "Custom type: \"cmd\" property."
          }
    ],
    features: [
      "Typewriter effect for command lines",
      "Four line types: cmd, output, success, info",
      "Random typing speed variation (30-70ms)",
      "macOS traffic light header",
      "Blinking cursor animation",
      "Dark terminal background",
    ],
  },

  // CREATIVE
  "cinematiccards": {
    title: "Cinematic Cards",
    category: "CREATIVE",
    description: "An editorial, fluid expanding grid of cards with layout-driven bloom and focus animations.",
    component: CinematicCards,
    published: true,
    usage: `import { CinematicCards } from "component-labs";

export default function Example() {
  return <CinematicCards hoverToActivate={true} />;
}`,
    props: [
          {
                "name": "items",
                "type": "any",
                "default": "defaultCards",
                "description": "Custom items property."
          },
          {
                "name": "hoverToActivate",
                "type": "boolean",
                "default": "true",
                "description": "Custom hoverToActivate property."
          },
          {
                "name": "onCardChange",
                "type": "any",
                "default": "undefined",
                "description": "Custom onCardChange property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          },
          {
                "name": "containerClassName",
                "type": "string",
                "default": "\"\"",
                "description": "Custom containerClassName property."
          }
    ],
    features: [
      "Accordion-style slide layout animations driven by Framer Motion",
      "Interactive card triggers supporting both hover and click modes",
      "Dynamic grayscale, brightness, and bloom focus transitions",
      "Sleek editorial-style numeric backdrop side accents",
      "Beautiful visual coherence utilizing theme-inspired brand colors (#cf2d56)",
    ],
    notes: [
      "Leverages Framer Motion's layout animations (layout and layout=\"position\") for smooth accordion-like slide expansions.",
      "Incorporates selective grayscale and brightness transitions, custom number side accents, and consistent visual details using the signature accent color #cf2d56.",
    ],
  },

  "elasticstretchtext": {
    title: "Elastic Stretch Text",
    category: "CREATIVE",
    description: "Highly interactive typography that stretches vertically and compresses horizontally on hover.",
    component: ElasticStretchText,
    published: true,
    usage: `import { ElasticStretchText } from "component-labs";

export default function Example() {
  return <ElasticStretchText text="DYNAMIC" />;
}`,
    props: [
          {
                "name": "text",
                "type": "string",
                "default": "\"CREATIVE\"",
                "description": "Custom text property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Individual character hover detection",
      "Spring-physics based deformation",
      "Variable scaleY and scaleX ratios",
      "Dynamic color shifting",
      "Responsive typography scaling",
    ],
    notes: [
      "Uses Framer Motion's spring transition for organic responsiveness.",
      "Best used with bold, uppercase sans-serif fonts.",
    ],
  },
  "fluidcursortrail": {
    title: "Fluid Cursor Trail",
    category: "CREATIVE",
    description: "Interactive canvas drawing a trailing snake/spring-like effect following the mouse pointer.",
    component: FluidCursorTrail,
    published: true,
    usage: `import { FluidCursorTrail } from "component-labs";

export default function Example() {
  return <FluidCursorTrail isGlobal={false} color="#00ff00" />;
}`,
    props: [
          {
                "name": "isGlobal",
                "type": "boolean",
                "default": "true",
                "description": "Custom isGlobal property."
          },
          {
                "name": "color",
                "type": "string",
                "default": "\"rgba(232, 86, 122, 0.85)",
                "description": "Custom color property."
          },
          {
                "name": "pointsNumber",
                "type": "number",
                "default": "40",
                "description": "Custom pointsNumber property."
          },
          {
                "name": "widthFactor",
                "type": "number",
                "default": "0.3",
                "description": "Custom widthFactor property."
          },
          {
                "name": "spring",
                "type": "number",
                "default": "0.4",
                "description": "Custom spring property."
          },
          {
                "name": "friction",
                "type": "number",
                "default": "0.5",
                "description": "Custom friction property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Fluid physics canvas-based cursor trailing effect",
      "Dual modes: fixed fullscreen backdrop or local container widget",
      "Customizable trail colors, length (points), thickness, spring stiffness, and friction",
      "Interactive pointer-events: none overlay allows normal click navigation",
      "Elegant automatic idle motion: floats in a smooth looping path when stationary",
    ],
    notes: [
      "When isGlobal={true} is active, the overlay uses pointer-events: none, meaning visitors can click links, buttons, and fully interact with and navigate the page normally.",
      "If the mouse is stationary or hasn't moved yet, the trail floats automatically in a elegant, looping sine/cosine path, keeping the page feeling alive.",
    ],
  },

  "morphcardbutton": {
    title: "Morph Card Button",
    category: "CREATIVE",
    description: "A layout morph primitive that transforms from a minimal click button into an expanded info card with spring physics.",
    component: MorphCardButton,
    published: true,
    usage: `import { MorphCardButton } from "component-labs";

export default function Example() {
  return <MorphCardButton heading="Learn More" />;
}`,
    props: [
          {
                "name": "buttonText",
                "type": "string",
                "default": "\"Click Me\"",
                "description": "Custom buttonText property."
          },
          {
                "name": "tag",
                "type": "string",
                "default": "\"Lab Report\"",
                "description": "Custom tag property."
          },
          {
                "name": "badge",
                "type": "string",
                "default": "\"07\"",
                "description": "Custom badge property."
          },
          {
                "name": "heading",
                "type": "string",
                "default": "\"Precision UI: Engineered for the modern stack\"",
                "description": "Custom heading property."
          },
          {
                "name": "subtitle",
                "type": "string",
                "default": "\"ComponentLab Studios\"",
                "description": "Custom subtitle property."
          },
          {
                "name": "imageSrc",
                "type": "any",
                "default": "undefined",
                "description": "Custom imageSrc property."
          },
          {
                "name": "onExpand",
                "type": "any",
                "default": "undefined",
                "description": "Custom onExpand property."
          },
          {
                "name": "onCollapse",
                "type": "any",
                "default": "undefined",
                "description": "Custom onCollapse property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Framer Motion layout animation for seamless dimension morph",
      "AnimatePresence with blur transitions for content swap",
      "Spring physics for natural, elastic motion",
      "Zero useEffect — pure render-driven",
      "Geometric grid placeholder when no image provided",
    ],
  },

  "greetingpreloader": {
    title: "Greeting Preloader",
    category: "LOADER ANIMATIONS",
    description: "An elegant, multi-lingual typewriter-style page loader that cycles through greetings and reveals page content with a sleek layout transition.",
    component: GreetingPreloader,
    published: true,
    usage: `import { GreetingPreloader } from "component-labs";

export default function Example() {
  return <GreetingPreloader />;
}`,
    props: [
          {
                "name": "greetings",
                "type": "array",
                "default": "['Hello', 'Bonjour', 'Hola', 'Ciao', 'Namaste', 'Konnichiwa', 'Salam']",
                "description": "Custom greetings property."
          },
          {
                "name": "durationPerWord",
                "type": "number",
                "default": "400",
                "description": "Custom durationPerWord property."
          },
          {
                "name": "subTitle",
                "type": "string",
                "default": "\"Initializing Experience\"",
                "description": "Custom subTitle property."
          },
          {
                "name": "isGlobal",
                "type": "boolean",
                "default": "true",
                "description": "Custom isGlobal property."
          },
          {
                "name": "onComplete",
                "type": "any",
                "default": "undefined",
                "description": "Custom onComplete property."
          },
          {
                "name": "children",
                "type": "any",
                "default": "undefined",
                "description": "Custom children property."
          }
    ],
    features: [
      "Typographic greeting sequence with clean exit transitions powered by AnimatePresence",
      "Seamless wrapper mode hiding content initially and fading it in upon transition completion",
      "Dual canvas scopes: fixed fullscreen global page loader or absolute local widget overlay",
      "Dynamic coordinate linear progress bar reflecting total load completion",
      "Strict premium light and dark editorial theme options pre-designed",
    ],
    notes: [
      "When using isGlobal={true}, the overlay blocks scroll interaction initially and automatically restores it once the exit slide animation is fully complete.",
      "The vertical loading line uses a dynamic scale transition synced precisely with the duration and word-count of your greetings list.",
    ],
  },

  "staircasepreloader": {
    title: "Staircase Preloader",
    category: "LOADER ANIMATIONS",
    description: "A cinematic page preloader that cycles through multi-lingual greetings with a fade effect, then reveals content with a staggered staircase animation — 5 vertical strips slide up one-by-one with cascading delays.",
    component: StaircasePreloader,
    published: true,
    usage: `import { StaircasePreloader } from "component-labs";

export default function Example() {
  return <StaircasePreloader />;
}`,
    props: [
          {
                "name": "greetings",
                "type": "array",
                "default": "['Hello', 'Bonjour', 'Hola', 'Ciao', 'Namaste', 'Konnichiwa', 'Salam']",
                "description": "Custom greetings property."
          },
          {
                "name": "durationPerWord",
                "type": "number",
                "default": "250",
                "description": "Custom durationPerWord property."
          },
          {
                "name": "panelCount",
                "type": "number",
                "default": "5",
                "description": "Custom panelCount property."
          },
          {
                "name": "panelStaggerMs",
                "type": "number",
                "default": "100",
                "description": "Custom panelStaggerMs property."
          },
          {
                "name": "isGlobal",
                "type": "boolean",
                "default": "true",
                "description": "Custom isGlobal property."
          },
          {
                "name": "onComplete",
                "type": "any",
                "default": "undefined",
                "description": "Custom onComplete property."
          },
          {
                "name": "children",
                "type": "any",
                "default": "undefined",
                "description": "Custom children property."
          }
    ],
    features: [
      "Staggered staircase exit animation with 5 vertical strips sliding up in sequence",
      "Smooth text cycling with fade-in/fade-out transitions matching the reference pattern",
      "Accent dot indicator next to the greeting text for editorial polish",
      "Customizable panel count, stagger delay, colors and greeting list",
      "Dual scope: fixed fullscreen global loader or contained local overlay",
    ],
    notes: [
      "The staircase animation uses a cubic-bezier(0.77, 0, 0.175, 1) easing for a premium, editorial feel.",
      "Each panel exits with a configurable stagger delay (default 100ms between panels), creating the cascading 'staircase' reveal effect.",
    ],
  },

  // ─── SVG ANIMATIONS ───────────────────────────────────────────────

  "playpausebutton": {
    title: "Play Pause Button",
    category: "SVG ANIMATIONS",
    description: "A premium play/pause toggle button with smooth SVG morph animation on click. Inspired by YouTube, Spotify and modern media player controls — features ripple feedback, micro-rotation transitions, and a cinematic spring feel.",
    component: PlayPauseButton,
    published: true,
    usage: `import { PlayPauseButton } from "component-labs";

export default function Example() {
  return <PlayPauseButton color="#ff0000" />;
}`,
    props: [
          {
                "name": "size",
                "type": "number",
                "default": "64",
                "description": "Custom size property."
          },
          {
                "name": "bgColor",
                "type": "string",
                "default": "\"#1a1a1a\"",
                "description": "Custom bgColor property."
          },
          {
                "name": "iconColor",
                "type": "string",
                "default": "\"#ffffff\"",
                "description": "Custom iconColor property."
          },
          {
                "name": "hoverScale",
                "type": "number",
                "default": "1.08",
                "description": "Custom hoverScale property."
          },
          {
                "name": "activeScale",
                "type": "number",
                "default": "0.92",
                "description": "Custom activeScale property."
          },
          {
                "name": "initialPlaying",
                "type": "boolean",
                "default": "false",
                "description": "Custom initialPlaying property."
          },
          {
                "name": "onToggle",
                "type": "any",
                "default": "undefined",
                "description": "Custom onToggle property."
          },
          {
                "name": "showRipple",
                "type": "boolean",
                "default": "true",
                "description": "Custom showRipple property."
          },
          {
                "name": "showLabel",
                "type": "boolean",
                "default": "true",
                "description": "Custom showLabel property."
          },
          {
                "name": "bare",
                "type": "boolean",
                "default": "false",
                "description": "Custom bare property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Smooth SVG morph animation between play (▶) and pause (‖) icons",
      "Spring-physics hover and tap scale feedback",
      "Expanding ripple ring effect on each click",
      "Radial gradient overlay for premium depth/gloss",
      "Fully customizable size, colors, and behavior",
      "Accessible button element with no external dependencies beyond motion",
    ],
    notes: [
      "The morph transition uses a rotation + scale animation for a cinematic icon swap feel.",
      "The ripple effect auto-cleans after 600ms to prevent memory buildup.",
      "Uses spring physics (stiffness: 500, damping: 30) for snappy, premium interactions.",
    ],
  },

  "hamburgercross": {
    title: "Hamburger Cross",
    category: "SVG ANIMATIONS",
    description: "A premium hamburger menu toggle that morphs into an X close icon via smooth SVG line-endpoint animation. Three persistent lines transform in-place — top and bottom become cross diagonals, middle collapses and fades.",
    component: HamburgerCross,
    published: true,
    usage: `import { HamburgerCross } from "component-labs";

export default function Example() {
  return <HamburgerCross color="#ff0000" />;
}`,
    props: [
          {
                "name": "size",
                "type": "number",
                "default": "48",
                "description": "Custom size property."
          },
          {
                "name": "strokeWidth",
                "type": "number",
                "default": "2",
                "description": "Custom strokeWidth property."
          },
          {
                "name": "bgColor",
                "type": "string",
                "default": "\"#1a1a1a\"",
                "description": "Custom bgColor property."
          },
          {
                "name": "strokeColor",
                "type": "string",
                "default": "\"#ffffff\"",
                "description": "Custom strokeColor property."
          },
          {
                "name": "hoverScale",
                "type": "number",
                "default": "1.06",
                "description": "Custom hoverScale property."
          },
          {
                "name": "activeScale",
                "type": "number",
                "default": "0.92",
                "description": "Custom activeScale property."
          },
          {
                "name": "initialOpen",
                "type": "boolean",
                "default": "false",
                "description": "Custom initialOpen property."
          },
          {
                "name": "onToggle",
                "type": "any",
                "default": "undefined",
                "description": "Custom onToggle property."
          },
          {
                "name": "rounded",
                "type": "boolean",
                "default": "true",
                "description": "Custom rounded property."
          },
          {
                "name": "showLabel",
                "type": "boolean",
                "default": "true",
                "description": "Custom showLabel property."
          },
          {
                "name": "bare",
                "type": "boolean",
                "default": "false",
                "description": "Custom bare property."
          },
          {
                "name": "className",
                "type": "string",
                "default": "\"\"",
                "description": "Custom className property."
          }
    ],
    features: [
      "Smooth SVG line-endpoint morph between hamburger (☰) and cross (✕) icons",
      "Middle line collapses to center point and fades simultaneously",
      "Spring-physics hover and tap scale feedback",
      "Supports both circular and rounded-rectangle button shapes",
      "Radial gradient overlay for premium depth/gloss",
      "Fully customizable size, stroke, colors, and behavior",
    ],
    notes: [
      "The morph uses cubic-bezier(0.4, 0, 0.2, 1) easing for a smooth, natural feel.",
      "Top line endpoints morph from (4,6)-(20,6) to (5,5)-(19,19) forming a \\ diagonal.",
      "Bottom line endpoints morph from (4,18)-(20,18) to (5,19)-(19,5) forming a / diagonal.",
      "Middle line collapses to a center point (12,12) and fades to opacity 0 simultaneously.",
    ],
  },
};