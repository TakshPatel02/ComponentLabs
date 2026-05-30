// Component Imports
// Text & Typography
import EncryptedText from "../components/TextComponents/EncryptedText";
import StripeWriter from "../components/TextComponents/StripeWriter";
import VelocityText from "../components/TextComponents/VelocityText";
import { CreativeHighlightText } from "../components/TextComponents/CreativeHighlightText";
import KineticSplitReveal from "../components/TextComponents/KineticSplitReveal";
import GeometricReconstitution from "../components/TextComponents/GeometricReconstitution";
import AtmosphericDistortion from "../components/TextComponents/AtmosphericDistortion";

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

<EncryptedText text="Access granted" />`,
    props: [
      { name: "text", type: "string", default: '""', description: "Text to scramble and reveal. Required." },
      { name: "interval", type: "number", default: "50", description: "Update interval in ms for each scramble tick." },
      { name: "duration", type: "number", default: "3000", description: "Total reveal duration in ms." },
      { name: "className", type: "string", default: '""', description: "Optional classes appended to the text wrapper." },
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

<StripeWriter text="Hello world" speed={0.02} delay={0.2} />`,
    props: [
      { name: "text", type: "string", default: '"Sample sentence"', description: "Text content to animate." },
      { name: "delay", type: "number", default: "0", description: "Initial delay before animation starts (seconds)." },
      { name: "speed", type: "number", default: "0.03", description: "Stagger speed per character (smaller = faster)." },
      { name: "className", type: "string", default: '""', description: "Wrapper classes." },
      { name: "cursorClassName", type: "string", default: '""', description: "Classes for the animated cursor block." },
      { name: "triggerOnce", type: "boolean", default: "true", description: "Whether to animate only once when in view." },
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

<VelocityText text="Scroll to distort and slide this message" />`,
    props: [
      { name: "text", type: "string", default: '"Built-in quote"', description: "Content rendered in the animated line." },
      { name: "heightClass", type: "string", default: '"h-[400px]"', description: "Tailwind height utility for viewport and sticky area." },
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

<CreativeHighlightText text="Main heading" decorText="accent" para="Supporting paragraph." />`,
    props: [
      { name: "text", type: "string", default: '""', description: "Main headline text." },
      { name: "decorText", type: "string", default: '""', description: "Highlighted/decoration word." },
      { name: "para", type: "string", default: '""', description: "Supporting paragraph text." },
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
    published: false,
    usage: null,
    props: [
      { name: "text", type: "string", default: '"ENGINEERED SOUL"', description: "Primary Gothic/sans-serif text to split." },
      { name: "quote", type: "string", default: '"The tension between the calculated and the felt. A digital heart in a biological cage."', description: "Inner Serif quote/message revealed in the split." },
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
    published: false,
    usage: null,
    props: [
      { name: "text", type: "string", default: '"ENGINEERED SOUL"', description: "Text content to fragment and reconstitute." },
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
    published: false,
    usage: null,
    props: [
      { name: "text", type: "string", default: '"ATMOSPHERIC"', description: "Text content to distort." },
    ],
    features: [
      "Physical spring-based text leaning, translation, and skewing",
      "Ambient living float keyframes with unique character offsets",
      "Native CSS Flexbox + Framer Motion layout displacement waves",
      "Zero JS event listener loop overhead",
    ],
  },

  // BUTTONS

  "fillbutton": {
    title: "Fill Button",
    category: "BUTTONS",
    description: "Button with an animated bottom-to-top fill effect on hover.",
    component: FillButton,
    published: false,
    usage: null,
    props: [
      { name: "children", type: "string", default: '""', description: "Button label content." },
      { name: "onClick", type: "function", default: "undefined", description: "Click handler callback." },
      { name: "className", type: "string", default: '""', description: "Additional CSS classes." },
      { name: "fillColorClass", type: "string", default: '"bg-primary"', description: "Tailwind background class for the fill effect." },
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

<UploadButton
  onUpload={async (files) => {
    const formData = new FormData();
    formData.append("file", files[0]);
    await fetch("/api/upload", { method: "POST", body: formData });
  }}
/>`,
    props: [
      { name: "onUpload", type: "function", default: "undefined", description: "Async upload handler that receives the selected FileList and should return a promise. Required." },
      { name: "accept", type: "string", default: "undefined", description: "Accepted file types, e.g. 'image/*' or '.pdf'." },
      { name: "multiple", type: "boolean", default: "false", description: "Allows selecting multiple files." },
      { name: "idleText", type: "string", default: '"Upload File"', description: "Label shown before upload starts." },
      { name: "uploadingText", type: "string", default: '"Uploading..."', description: "Label shown while the upload promise is pending." },
      { name: "successText", type: "string", default: '"Complete"', description: "Label shown after the upload resolves." },
      { name: "className", type: "string", default: '""', description: "Additional classes for the button wrapper." },
      { name: "onSuccess", type: "function", default: "undefined", description: "Optional callback fired after a successful upload." },
      { name: "onError", type: "function", default: "undefined", description: "Optional callback fired if the upload promise rejects." },
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

<MagnetButton text="Try this" onClick={() => alert("clicked")} />`,
    props: [
      { name: "text", type: "string", default: '"Hover Me"', description: "Label shown inside the button." },
      { name: "onClick", type: "function", default: "undefined", description: "Optional click handler." },
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

<EncryptButton targetText="Secure Now" className="my-4" />`,
    props: [
      { name: "targetText", type: "string", default: '"Encrypt data"', description: "Text shown on the button, used for scramble animation." },
      { name: "className", type: "string", default: '""', description: "Appended to the button class list." },
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
    published: false,
    usage: null,
    props: [
      { name: "targetStars", type: "number", default: "8492", description: "Target star count for the counter animation." },
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

<NeumorphismButton text="Start" />`,
    props: [
      { name: "text", type: "string", default: '"Initialize AI"', description: "Label shown inside the button." },
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
    published: false,
    usage: null,
    props: [
      { name: "text", type: "string", default: '"Trace Path"', description: "Label shown inside the button." },
      { name: "onClick", type: "function", default: "undefined", description: "Optional click handler callback." },
      { name: "strokeColor", type: "string", default: '"#cf2d56"', description: "Color of the stroke vector outline path." },
      { name: "particleColor", type: "string", default: '"#cf2d56"', description: "Color of the kinetic follow particle." },
      { name: "className", type: "string", default: '""', description: "Additional classes for the inner button element." },
      { name: "wrapperClassName", type: "string", default: '""', description: "Additional classes for the outer wrapper div container." },
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
    published: false,
    usage: null,
    props: [
      { name: "onToggle", type: "function", default: "undefined", description: "Callback fired with the new boolean state on each toggle." },
      { name: "defaultActive", type: "boolean", default: "false", description: "Initial toggle state." },
      { name: "activeLabel", type: "string", default: '"LUNAR_ACTIVE"', description: "Status text shown when toggled on." },
      { name: "inactiveLabel", type: "string", default: '"SOLAR_ACTIVE"', description: "Status text shown when toggled off." },
      { name: "showLabel", type: "boolean", default: "true", description: "Whether to render the status label below the toggle." },
      { name: "className", type: "string", default: '""', description: "Additional classes for the outer wrapper." },
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
    published: false,
    usage: null,
    props: [
      { name: "maxDigits", type: "number", default: "3", description: "Maximum number of digit columns to display." },
      { name: "className", type: "string", default: '""', description: "Additional CSS classes for the outer container." },
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
    published: false,
    usage: null,
    props: [
      { name: "className", type: "string", default: '""', description: "Additional CSS classes for the outer container." },
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
    usage: `import { TerminalContactForm } from "../components/FormComponents/TerminalContactForm";

// Default usage
<TerminalContactForm />

// Custom feedback terminal example
const customSteps = [
  { key: "username", prompt: "Hello! What's your ", hl: "GitHub username?", type: "text", ph: "octocat" },
  { key: "rating", prompt: "Awesome! How would you rate ", hl: "our library (1-10)?", type: "number", ph: "10" },
  { key: "notes", prompt: "Perfect, any ", hl: "final thoughts?", type: "text", ph: "It's awesome!" }
];

<TerminalContactForm
  fields={customSteps}
  greetingText="Welcome to the feedback terminal!"
  terminalTitle="feedback@componentlabs.in"
  successMessage="Thanks for the feedback! 🚀"
  onSubmit={(data) => console.log("Received data:", data)}
/>`,
    props: [
      { name: "fields", type: "array", default: "Name/Email/Description array", description: "Custom list of input step objects, shaped like { key, prompt, hl, type, ph }." },
      { name: "greetingText", type: "string", default: '"Hey there! We\'re excited to link 🔗"', description: "The typewriter greeting shown when the component mounts." },
      { name: "terminalTitle", type: "string", default: '"contact@componentlabs.in"', description: "The label in the center of the terminal title bar." },
      { name: "onSubmit", type: "function", default: "undefined", description: "Callback function triggered on successful form submission: (data) => void, where data is an object of entered answers." },
      { name: "successMessage", type: "string", default: '"Sent! We\'ll get back to you ASAP 😎"', description: "Custom message shown after the form has been successfully sent." },
      { name: "typerSpeed", type: "number", default: "30", description: "Typing animation speed in milliseconds per character." },
      { name: "className", type: "string", default: '""', description: "Custom classes for outer container overrides." },
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
    published: false,
    usage: null,
    props: [
      { name: "placeholder", type: "string", default: '"Explain the architecture..."', description: "Placeholder text for the input field." },
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
    published: false,
    usage: null,
    props: [
      { name: "placeholder", type: "string", default: '"Find component..."', description: "Placeholder text for the search input." },
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
    published: false,
    usage: null,
    props: [
      { name: "onSubmit", type: "function", default: "undefined", description: "Callback fired on form submission with email and password." },
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
    published: false,
    usage: null,
    props: [
      { name: "placeholder", type: "string", default: '"Begin crafting your narrative..."', description: "Placeholder text shown when editor is empty." },
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

<ClipPathLinks />`,
    props: [
      { name: "groups", type: "array", default: "Built-in icon groups", description: "Array of rows, each row is an array of { Icon, href, label } objects." },
      { name: "className", type: "string", default: '""', description: "Optional classes appended to the outer wrapper." },
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
    usage: `import TakeoverLinks from "component-labs";

<TakeoverLinks links={[{ label: "WORK", href: "/work", color: "#2f4858" }]} />`,
    props: [
      { name: "links", type: "array", default: "Built-in ART/DESIGN/PHOTOS/CONTACT set", description: "Array of { label, href, color } objects." },
      { name: "className", type: "string", default: '""', description: "Optional classes appended to the outer section." },
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
    usage: `import NeuralHoverLinks from "component-labs";

<NeuralHoverLinks />`,
    props: [
      { name: "links", type: "array", default: "Internal LINKS_DATA", description: "Array of { heading, subheading, imgSrc, href } objects (requires refactor to accept)." },
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
    published: false,
    usage: null,
    props: [
      { name: "states", type: "array", default: "Built-in STATES array", description: "Array of state objects with key, title, sub, icon, and counter properties." },
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
    published: false,
    usage: null,
    props: [
      { name: "steps", type: "array", default: "Built-in STEPS array", description: "Array of step objects with label, desc, dot, and color." },
      { name: "delay", type: "number", default: "1200", description: "Delay in ms between each step reveal." },
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
    published: false,
    usage: null,
    props: [
      { name: "initialLayers", type: "number", default: "2", description: "Initial number of stacked layers." },
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
    published: false,
    usage: null,
    props: [
      { name: "plans", type: "array", default: "Built-in PLANS array", description: "Array of plan objects with name, price, period, features, cta, and popular flag." },
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
    usage: `import { PremiumTiltCard } from "../components/CardComponents/PremiumTiltCard";

// Default usage
<PremiumTiltCard />

// Custom cards with React Router Link
import { Link } from "react-router-dom";
import { Folder } from "lucide-react";

<PremiumTiltCard
  title="Project Folder"
  description="Manage all your visual and asset files cleanly in a premium physics-driven card layout."
  href="/projects"
  as={Link}
  icon={<Folder className="w-5 h-5 text-neutral-400" />}
  actionText="Open Projects"
/>`,
    props: [
      { name: "title", type: "string", default: '"Premium Interface"', description: "Primary heading text on the card." },
      { name: "description", type: "string", default: "Original depth description", description: "Supporting copy description below the title." },
      { name: "href", type: "string", default: '"#"', description: "Destination path/URL." },
      { name: "as", type: "element / string", default: '"a"', description: "Polymorphic wrapper for the action link. Defaults to standard HTML anchor to avoid SSR router failures." },
      { name: "icon", type: "element / string", default: '"⌘"', description: "Minimal circular header badge content. Can be text or full custom SVG element." },
      { name: "actionText", type: "string", default: '"Explore Component"', description: "Label for the bottom action link." },
      { name: "rotationRange", type: "number", default: "18", description: "Rotation threshold sensitivity on hover mouse movements." },
      { name: "className", type: "string", default: '""', description: "Custom classes for outer card overrides." },
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

<MacKeyboard />`,
    props: [
      { name: "soundSrc", type: "string", default: '"/sound.ogg"', description: "Path to the keyboard sound sprite file. Host apps must serve this asset from the public root." },
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

<MacKeyboardDark />`,
    props: [
      { name: "soundSrc", type: "string", default: '"/sound.ogg"', description: "Path to the keyboard sound sprite file. Host apps must serve this asset from the public root." },
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
    published: false,
    usage: null,
    props: [
      { name: "soundSrc", type: "string", default: '"/sound.ogg"', description: "Path to the keyboard sound sprite file." },
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
    published: false,
    usage: null,
    props: [
      { name: "stats", type: "array", default: "Built-in stat cards", description: "Array of stat card configs with title, value, tag, accentColor, suffix, and showGraph." },
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
    published: false,
    usage: null,
    props: [
      { name: "items", type: "array", default: "Built-in showcase cards", description: "Array of items with category, title, previewHeight, and caption." },
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
    published: false,
    usage: null,
    props: [
      { name: "features", type: "array", default: "Built-in 6 features", description: "Array of feature objects with title, description, and icon." },
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

<StaggeredEntranceHero />`,
    props: [
      { name: "title", type: "string", default: '"Design systems with literary soul."', description: "Main hero headline (hardcoded, customize via source)." },
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
    published: false,
    usage: null,
    props: [
      { name: "sections", type: "array", default: "Built-in 4 sub-components", description: "Array of interactive section components (hardcoded)." },
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

// Default usage
<AuroraHero />

// Custom configuration example
<AuroraHero
  badgeText="New Update"
  title="Create beautifully interactive React dashboards in seconds"
  description="Bring your interfaces to life with fully customizable components built with Tailwind CSS and Framer Motion."
  ctaText="Explore Docs"
  starCount={150}
  colors={["#FF0055", "#00FF55", "#0055FF"]}
  onCtaClick={() => console.log("cta clicked!")}
/>`,
    props: [
      { name: "badgeText", type: "string", default: '"Beta Now Live!"', description: "Supporting status tag above heading. Set to null or \"\" to hide it." },
      { name: "title", type: "string", default: '"Decrease your SaaS churn by over 90%"', description: "Main title text." },
      { name: "description", type: "string", default: "Built-in retention text", description: "Paragraph description copy." },
      { name: "ctaText", type: "string", default: '"Start free trial"', description: "Call to action button label." },
      { name: "onCtaClick", type: "function", default: "undefined", description: "Click event callback handler for CTA button." },
      { name: "starCount", type: "number", default: "250", description: "Density of the canvas-based starfield." },
      { name: "colors", type: "array", default: "Signature mint/blue/lavender/pink sequence", description: "Custom hex color strings for the animated aurora gradient background." },
      { name: "className", type: "string", default: '""', description: "Custom classes for styling extensions." },
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
    published: false,
    usage: null,
    props: [
      { name: "codeExamples", type: "object", default: "Built-in React/HTML examples", description: "Object of code examples keyed by tab name." },
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
    published: false,
    usage: null,
    props: [],
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
    usage: null,
    props: [],
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
    published: false,
    usage: null,
    props: [
      { name: "categories", type: "array", default: '["Web dev", "Mobile dev", "UI/UX", "Copywriting"]', description: "Array of category label strings." },
      { name: "faqData", type: "object", default: "Built-in FAQ_DATA", description: "Object keyed by category with arrays of { question, answer }." },
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

<AnimatedFAQ />`,
    props: [
      { name: "faqs", type: "array", default: "Built-in DEFAULT_FAQS", description: "Array of { question, answer } objects." },
      { name: "question", type: "string", default: "undefined", description: "If provided with answer, renders a single FAQ." },
      { name: "answer", type: "string", default: "undefined", description: "Answer text for single FAQ mode." },
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
    published: false,
    usage: null,
    props: [],
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
    published: false,
    usage: null,
    props: [
      { name: "headline", type: "string", default: '"Your favorite companies are our partners."', description: "Headline text above the logo grid." },
      { name: "companies", type: "array", default: "Built-in 10 companies", description: "Array of { name, icon } objects." },
      { name: "className", type: "string", default: '""', description: "Additional wrapper classes." },
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
    published: false,
    usage: null,
    props: [
      { name: "headline", type: "string", default: '"You\'re in good company"', description: "Headline text." },
      { name: "description", type: "string", default: '"ComponentLabs is trusted by..."', description: "Description paragraph below headline." },
      { name: "companies", type: "array", default: "Built-in 5 companies", description: "Array of { name, icon, showText } objects." },
      { name: "className", type: "string", default: '""', description: "Additional wrapper classes." },
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

// Default usage
<MarqueeLogoCloud />

// Custom companies example
import { SiGithub, SiGithubactions, SiSlack } from "react-icons/si";

const myPartners = [
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Actions", icon: <SiGithubactions /> },
  { name: "Slack", icon: <SiSlack /> },
];

<MarqueeLogoCloud headline="Our Ecosystem" companies={myPartners} speed={25} />`,
    props: [
      { name: "headline", type: "string", default: '"Your favorite companies are our partners."', description: "Optional heading text above the marquee. Set to null or \"\" to hide it." },
      { name: "companies", type: "array", default: "Built-in list of 9 platforms", description: "List of company logo objects formatted as { name, icon }." },
      { name: "speed", type: "number", default: "40", description: "Animation cycle duration in seconds (smaller = faster scroll speed)." },
      { name: "className", type: "string", default: '""', description: "Custom classes for styling extensions." },
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
    published: false,
    usage: null,
    props: [
      { name: "headline", type: "string", default: '"ComponentLabs is trusted by..."', description: "Headline paragraph text." },
      { name: "companies", type: "array", default: "Built-in 10 companies", description: "Array of { name, icon, showText } objects." },
      { name: "className", type: "string", default: '""', description: "Additional wrapper classes." },
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
    published: false,
    usage: null,
    props: [
      { name: "ctaHeadline", type: "string", default: '"Create, Sell and Grow"', description: "CTA card headline text (hardcoded)." },
      { name: "links", type: "object", default: "Built-in Product/Company/Community", description: "Footer link columns (hardcoded)." },
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
    published: false,
    usage: null,
    props: [
      { name: "brandName", type: "string", default: '"ComponentLabs"', description: "Brand name displayed in footer (hardcoded)." },
      { name: "links", type: "array", default: '["Home", "Features", "Pricing", "About", "Blog", "Contact"]', description: "Navigation link labels (hardcoded)." },
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
    published: false,
    usage: null,
    props: [],
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
    published: false,
    usage: null,
    props: [],
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
    usage: `import { SmartInterfaceCTA } from "../components/CTAComponents/SmartInterfaceCTA";

// Default usage
<SmartInterfaceCTA />

// Custom consulting promotion example
import { MessageSquare } from "lucide-react";

<SmartInterfaceCTA
  badgeText="100% Client Satisfaction"
  headline="Ready to scale your product design?"
  subtitle="Schedule an elite 1-on-1 strategy call with our core design engineering team."
  primaryCtaText="Schedule Call"
  secondaryCtaText="View Portfolio"
  secondaryCtaHref="https://componentlabs.in/portfolio"
  icon={<MessageSquare className="w-7 h-7" />}
  onPrimaryCtaClick={() => window.open("https://calendly.com", "_blank")}
/>`,
    props: [
      { name: "badgeText", type: "string", default: '"Trusted by 2,000+ Engineers"', description: "Centered floating trust/social badge text." },
      { name: "headline", type: "element / string", default: '"The smartest interface decision you’ve ever made."', description: "Core bold headline text." },
      { name: "subtitle", type: "element / string", default: "Original design system text", description: "Serif subtitle with responsive breakpoints." },
      { name: "primaryCtaText", type: "string", default: '"Start Building"', description: "Label for the prominent primary solid button." },
      { name: "onPrimaryCtaClick", type: "function", default: "undefined", description: "Callback function triggered when primary CTA is clicked." },
      { name: "secondaryCtaText", type: "string", default: '"Book a Demo"', description: "Label for the inline link action." },
      { name: "secondaryCtaHref", type: "string", default: '"#"', description: "Anchor destination for the secondary link." },
      { name: "onSecondaryCtaClick", type: "function", default: "undefined", description: "Click event handler for the secondary link action." },
      { name: "icon", type: "element", default: "Lucide DraftingCompass in circle", description: "Centered rounded badge icon." },
      { name: "className", type: "string", default: '""', description: "Container wrapper style overrides." },
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
    usage: `import { CreativeIntelligenceCTA } from "../components/CTAComponents/CreativeIntelligenceCTA";

// Default usage
<CreativeIntelligenceCTA />

// Custom console dashboard example
import { Sparkles } from "lucide-react";

<CreativeIntelligenceCTA
  headline="Design the Future"
  subtitle="Unleash an infinitely scalable UI playground powered by component intelligence."
  ctaText="Launch Console"
  imageUrl="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1200"
  icon={<Sparkles className="w-8 h-8 text-amber-500" />}
  onCtaClick={() => console.log("Console launched")}
/>`,
    props: [
      { name: "headline", type: "string", default: '"Create with Intelligence"', description: "Main title text of the section." },
      { name: "subtitle", type: "string", default: "Original SaaS mind description", description: "Supporting serif paragraph text below the headline." },
      { name: "ctaText", type: "string", default: '"Begin Creation"', description: "The label of the pill-shaped action button." },
      { name: "onCtaClick", type: "function", default: "undefined", description: "Callback function triggered when the CTA button is clicked." },
      { name: "imageUrl", type: "string", default: "Unsplash abstract waves copper graphic", description: "Fallback high-quality abstract image or customizable image URL." },
      { name: "imageAlt", type: "string", default: '"Flowing bronze waves representing automated creativity"', description: "Alt description for the wave visual card." },
      { name: "icon", type: "element", default: "Lucide Network in copper", description: "SVG element or component rendering in the metallic copper accent color above the headline." },
      { name: "className", type: "string", default: '""', description: "Additional classes appended to the outer container." },
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
    usage: `import { ProTierPricingCTA } from "../components/CTAComponents/ProTierPricingCTA";

// Default usage
<ProTierPricingCTA />

// Custom Free Hobby Tier example
<ProTierPricingCTA
  badgeText="Developer License"
  headline="Build with ComponentLabs"
  features={[
    "Access to 50+ beautiful blocks",
    "Tailwind v4 fully optimized",
    "Community discord channel access"
  ]}
  cardBadgeText="Free Forever"
  cardTitle="Hobby Tier"
  cardPrice="$0"
  cardPeriod=""
  cardDescription="Perfect for hobbyists and developers experimenting on side-projects."
  ctaText="Get Started"
  onCtaClick={() => alert("Starter registered!")}
/>`,
    props: [
      { name: "badgeText", type: "string", default: '"New Pro Features Available"', description: "Flashing Pro features notification badge label." },
      { name: "headline", type: "element / string", default: '"Unlock the Pro Tier"', description: "Headline text on the left column with highlighted Warm-Error span." },
      { name: "subtitle", type: "string", default: "Original productivity description", description: "Paragraph description text beneath the headline." },
      { name: "features", type: "array", default: "Built-in 3 premium features", description: "Array of checklist text strings." },
      { name: "cardBadgeText", type: "string", default: '"Most Popular"', description: "Highlighted uppercase badge on the pricing card." },
      { name: "cardTitle", type: "string", default: '"Professional"', description: "Small upper-case monospace title of the tier." },
      { name: "cardPrice", type: "string", default: '"$10"', description: "The tier's large price tag." },
      { name: "cardPeriod", type: "string", default: '"/mo"', description: "Period label." },
      { name: "cardDescription", type: "string", default: "Built-in craft description", description: "Support copy explaining the tier." },
      { name: "ctaText", type: "string", default: '"Upgrade Now"', description: "Action button label inside the card." },
      { name: "onCtaClick", type: "function", default: "undefined", description: "Click event handler for the card upgrade button." },
      { name: "guaranteeText", type: "string", default: '"14-day free trial • No credit card required"', description: "Monospace trial support disclaimer text." },
      { name: "className", type: "string", default: '""', description: "Outer wrapper style classes." },
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

// Default usage
<KanbanBoard />

// Custom data
const columns = [
  { id: "backlog", title: "BACKLOG", canAdd: true },
  { id: "doing", title: "DOING" },
  { id: "done", title: "DONE" },
  { id: "trash", title: "TRASH", isTrash: true },
];

const tasks = [
  { id: "a1", column: "backlog", tag: "API", title: "Draft upload endpoint" },
  { id: "b2", column: "doing", tag: "UI", title: "Polish board spacing" },
];

<KanbanBoard initialTasks={tasks} columns={columns} />`,
    props: [
      { name: "initialTasks", type: "array", default: "Built-in INITIAL_TASKS", description: "Starting task list. Each task: { id, column, tag, title }." },
      { name: "columns", type: "array", default: "Built-in COLUMNS", description: "Board columns. Each column: { id, title, canAdd, isTrash }." },
      { name: "onTasksChange", type: "function", default: "undefined", description: "Called whenever the task list changes." },
      { name: "onTaskMove", type: "function", default: "undefined", description: "Called when a task is moved to another column." },
      { name: "onTaskAdd", type: "function", default: "undefined", description: "Called when a new task is created." },
      { name: "onTaskDelete", type: "function", default: "undefined", description: "Called when a task is dropped into the trash column." },
      { name: "className", type: "string", default: '""', description: "Additional classes for the board container." },
      { name: "style", type: "object", default: "undefined", description: "Inline styles for the outer container." },
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

<VintageFader onChange={(value) => console.log(value)} />`,
    props: [
      { name: "min", type: "number", default: "0", description: "Minimum slider value." },
      { name: "max", type: "number", default: "100", description: "Maximum slider value." },
      { name: "defaultValue", type: "number", default: "50", description: "Initial slider position." },
      { name: "step", type: "number", default: "1", description: "Step increment for value changes." },
      { name: "onChange", type: "function", default: "undefined", description: "Callback fired on value change: (newValue) => {}." },
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

<TerminalTypingCard />`,
    props: [
      { name: "lines", type: "array", default: "Built-in npm install transcript", description: "Array of line objects with text, delay, and type (cmd/output/success/info)." },
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

// Default usage
<CinematicCards />

// Custom slides example
const customSlides = [
  {
    id: 1,
    title: "Cyber City",
    subtitle: "NEON DREAMS",
    copy: "Explore future streetscapes and high-tech corporate heights.",
    button: "Enter City",
    image: "https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?w=800"
  },
  {
    id: 2,
    title: "Deep Sea",
    subtitle: "ABYSS VOYAGE",
    copy: "Submerge into pitch-black waters and glowing marine biology.",
    button: "Submerge",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"
  }
];

<CinematicCards items={customSlides} hoverToActivate={false} onCardChange={(idx, item) => console.log(item)} />`,
    props: [
      { name: "items", type: "array", default: "Built-in list of 4 cards", description: "Custom array of card items containing { id, title, subtitle, copy, button, image }." },
      { name: "hoverToActivate", type: "boolean", default: "true", description: "If true, hovering over collapsed cards expands them. If false, click interaction is required." },
      { name: "onCardChange", type: "function", default: "undefined", description: "Callback triggered when active card changes: (index, card) => void." },
      { name: "className", type: "string", default: '""', description: "Custom classes for outer container." },
      { name: "containerClassName", type: "string", default: '""', description: "Custom classes for inner flex container." },
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
    published: false,
    usage: null,
    props: [
      { name: "text", type: "string", default: '"CREATIVE"', description: "The text string to animate." },
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
    usage: `import { FluidCursorTrail } from "../components/CreativeComponents/FluidCursorTrail";

// Default usage (Global fullscreen mode)
<FluidCursorTrail isGlobal={true} />

// Local container mode usage
<div className="relative w-full h-[500px] overflow-hidden rounded-xl">
  <FluidCursorTrail isGlobal={false} color="rgba(197, 140, 103, 0.85)" pointsNumber={60} widthFactor={0.4} />
</div>`,
    props: [
      { name: "isGlobal", type: "boolean", default: "true", description: "If true, the canvas trail is fixed fullscreen, functioning as a global backdrop. If false, it stays locally in its parent container as a card widget." },
      { name: "color", type: "string", default: '"rgba(232, 86, 122, 0.85)"', description: "Trail color (hex, rgb, rgba)." },
      { name: "pointsNumber", type: "number", default: "40", description: "Quantity of points in the fluid physics chain (trail length)." },
      { name: "widthFactor", type: "number", default: "0.3", description: "Thickness multiplier for the trail." },
      { name: "spring", type: "number", default: "0.4", description: "Spring stiffness of the trail (larger = faster trail reaction)." },
      { name: "friction", type: "number", default: "0.5", description: "Movement damping of the trail (larger = more friction / slower slide)." },
      { name: "className", type: "string", default: '""', description: "Custom classes for styling extensions." },
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

<MorphCardButton
  buttonText="Click Me"
  tag="Lab Report"
  badge="07"
  heading="Precision UI: Engineered for the modern stack"
  subtitle="ComponentLab Studios"
  imageSrc="/avatar.png"
/>`,
    props: [
      { name: "buttonText", type: "string", default: '"Click Me"', description: "Label shown in the collapsed button state." },
      { name: "tag", type: "string", default: '"Lab Report"', description: "Small category tag in the expanded card." },
      { name: "badge", type: "string", default: '"07"', description: "Badge text next to the tag." },
      { name: "heading", type: "string", default: '"Precision UI: Engineered..."', description: "Main heading in the expanded card." },
      { name: "subtitle", type: "string", default: '"ComponentLab Studios"', description: "Subtitle text below the heading." },
      { name: "imageSrc", type: "string", default: "undefined", description: "URL for the card image. Shows a geometric placeholder when omitted." },
      { name: "onExpand", type: "function", default: "undefined", description: "Callback fired when the button expands into a card." },
      { name: "onCollapse", type: "function", default: "undefined", description: "Callback fired when the card collapses back to a button." },
      { name: "className", type: "string", default: '""', description: "Additional classes for the outer wrapper." },
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

// Default usage
<GreetingPreloader />

// Custom wrapper page example
<GreetingPreloader
  greetings={["Welcome", "Bienvenue", "Willkommen", "Benvenuto"]}
  durationPerWord={600}
  subTitle="Launching Dashboard..."
  theme="dark"
>
  <MyDashboard />
</GreetingPreloader>`,
    props: [
      { name: "greetings", type: "array", default: "['Hello', 'Bonjour', 'Hola', ...]", description: "List of greeting strings to cycle through on startup." },
      { name: "durationPerWord", type: "number", default: "500", description: "Time duration in milliseconds that each word is shown." },
      { name: "subTitle", type: "string", default: '"Initializing Experience"', description: "Small status metadata subtitle text shown at the bottom of the loader." },
      { name: "isGlobal", type: "boolean", default: "true", description: "If true, renders fixed fullscreen as a global page loader. If false, renders absolute inset locally within its parent container." },
      { name: "theme", type: "string", default: '"light"', description: "Preloader color theme: 'light' (neutral-cream backdrop) or 'dark' (charcoal-gothic backdrop)." },
      { name: "onComplete", type: "function", default: "undefined", description: "Fired when the greetings list has fully cycled and the loading panel has finished sliding out." },
      { name: "children", type: "element", default: "undefined", description: "Optional component or page elements to render and reveal after the preloader finishes." },
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

// Default usage
<StaircasePreloader />

// Custom wrapper page example
<StaircasePreloader
  greetings={["Welcome", "Bienvenue", "Willkommen", "Benvenuto"]}
  durationPerWord={400}
  panelCount={5}
  accentColor="#d24200"
  bgColor="#f2f1ed"
  textColor="#11100a"
>
  <MyLandingPage />
</StaircasePreloader>`,
    props: [
      { name: "greetings", type: "array", default: "['Hello', 'Bonjour', 'नमस्ते', ...]", description: "List of greeting strings to cycle through during loading." },
      { name: "durationPerWord", type: "number", default: "300", description: "Time in milliseconds each greeting is displayed before cycling to the next." },
      { name: "panelCount", type: "number", default: "5", description: "Number of vertical strips that form the staircase curtain." },
      { name: "panelStaggerMs", type: "number", default: "100", description: "Stagger delay in milliseconds between each strip's exit animation." },
      { name: "accentColor", type: "string", default: '"#d24200"', description: "Color of the accent dot displayed next to the greeting text." },
      { name: "bgColor", type: "string", default: '"#f2f1ed"', description: "Background color of the vertical strip panels." },
      { name: "textColor", type: "string", default: '"#11100a"', description: "Color of the greeting text." },
      { name: "isGlobal", type: "boolean", default: "true", description: "If true, renders as a fixed fullscreen page loader. If false, renders within its parent container." },
      { name: "onComplete", type: "function", default: "undefined", description: "Callback fired when the staircase exit animation has fully completed." },
      { name: "children", type: "element", default: "undefined", description: "Page content to reveal after the preloader finishes." },
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
};