// Component Imports
// Text & Typography
import EncryptedText from "../components/TextComponents/EncryptedText";
import StripeWriter from "../components/TextComponents/StripeWriter";
import VelocityText from "../components/TextComponents/VelocityText";
import { CreativeHighlightText } from "../components/TextComponents/CreativeHighlightText";

// Buttons
import FillButton from "../components/ButtonComponents/FillButton";
import UploadButton from "../components/ButtonComponents/UploadButton";
import MagnetButton from "../components/ButtonComponents/MagnetButton";
import EncryptButton from "../components/ButtonComponents/EncryptButton";
import GithubStarsButton from "../components/ButtonComponents/GithubStarsButton";
import NeumorphismButton from "../components/ButtonComponents/NeumorphismButton";

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

// FAQs
import CategorizedFAQ from "../components/OtherComponents/CategorizedFAQ";
import { AnimatedFAQ } from "../components/OtherComponents/AnimatedFAQ";

// Logo Clouds
import { LogoCloud } from "../components/LogoCloudComponents/LogoCloud";
import { CenteredLogoCloud } from "../components/LogoCloudComponents/CenteredLogoCloud";
import { MarqueeLogoCloud } from "../components/LogoCloudComponents/MarqueeLogoCloud";
import { CrosshairLogoCloud } from "../components/LogoCloudComponents/CrosshairLogoCloud";

// Footers
import SaaSFooter from "../components/FooterComponents/SaaSFooter";
import MinimalFooter from "../components/FooterComponents/MinimalFooter";

// Other Primitives
import KanbanBoard from "../components/OtherComponents/KanbanBoard";
import { VintageFader } from "../components/OtherComponents/EditorialSlider";
import { TerminalTypingCard } from "../components/OtherComponents/TerminalTypingCard";

// Creative
import FluidCursorTrail from "../components/CreativeComponents/FluidCursorTrail";
import CinematicCards from "../components/CreativeComponents/CinematicCards";

// Components Data
export const componentsData = {

  // TEXT & TYPOGRAPHY

  "encryptedtext": {
    title: "Encrypted Text",
    category: "TEXT & TYPOGRAPHY",
    description: "Text scramble-and-reveal animation using randomized glyphs.",
    component: EncryptedText,
    published: true,
    usage: `import { EncryptedText } from "../components/TextComponents/EncryptedText";

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
    usage: `import { StripeWriter } from "../components/TextComponents/StripeWriter";

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
    usage: `import { VelocityText } from "../components/TextComponents/VelocityText";

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
    usage: `import { CreativeHighlightText } from "../components/TextComponents/CreativeHighlightText";

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
    usage: `import { MagnetButton } from "../components/ButtonComponents/MagnetButton";

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
    usage: `import { EncryptButton } from "../components/ButtonComponents/EncryptButton";

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
    usage: `import { NeumorphismButton } from "../components/ButtonComponents/NeumorphismButton";

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

  // FORMS & IDENTITY

  "terminalcontactform": {
    title: "Terminal Contact Form",
    category: "FORMS & IDENTITY",
    description: "Multi-step terminal-themed contact form with typewriter prompts.",
    component: TerminalContactForm,
    published: false,
    usage: null,
    props: [
      { name: "fields", type: "array", default: "Built-in FIELDS array", description: "Array of field objects with key, prompt, hl, type, and ph properties." },
    ],
    features: [
      "Typewriter-style prompt animation",
      "Multi-step sequential form flow",
      "macOS-style terminal header",
      "Summary review before submission",
      "Submit and restart actions",
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
    usage: `import { ClipPathLinks } from "../components/LinkComponents/ClipPathLinks";

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
    usage: `import TakeoverLinks from "../components/LinkComponents/TakeoverLinks";

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
    usage: `import NeuralHoverLinks from "../components/LinkComponents/NeuralHoverLinks";

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
    usage: `import { StaggeredEntranceHero } from "../components/HeroComponents/StaggeredEntranceHero";

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
    description: "Dark hero section with animated aurora gradient background and canvas starfield.",
    component: AuroraHero,
    published: false,
    usage: null,
    props: [
      { name: "colors", type: "array", default: '["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]', description: "Aurora gradient color cycle (hardcoded)." },
      { name: "starCount", type: "number", default: "250", description: "Number of twinkling stars rendered on canvas." },
    ],
    features: [
      "Animated aurora gradient background",
      "Canvas-based twinkling starfield",
      "Radial gradient with motion values",
      "Glowing CTA button with dynamic border",
      "Badge and headline entrance animations",
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
    usage: `import { AnimatedFAQ } from "../components/OtherComponents/AnimatedFAQ";

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
    title: "Animated Marquee",
    category: "LOGO CLOUDS",
    description: "Infinite horizontal marquee logo cloud with configurable scroll speed.",
    component: MarqueeLogoCloud,
    published: false,
    usage: null,
    props: [
      { name: "headline", type: "string", default: '"Your favorite companies are our partners."', description: "Headline text above the marquee." },
      { name: "companies", type: "array", default: "Built-in 10 companies", description: "Array of { name, icon } objects." },
      { name: "className", type: "string", default: '""', description: "Additional wrapper classes." },
      { name: "speed", type: "number", default: "40", description: "Duration in seconds for one full loop cycle." },
    ],
    features: [
      "Infinite horizontal scroll loop",
      "Configurable scroll speed",
      "Gradient edge mask for seamless fade",
      "Triple array duplication for seamless loop",
      "Grayscale to color on hover",
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
    usage: `import { VintageFader } from "../components/OtherComponents/EditorialSlider";

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
    usage: `import { TerminalTypingCard } from "../components/OtherComponents/TerminalTypingCard";

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
    title: "Cinematic Reveal Grid",
    category: "CREATIVE",
    description: "Fluid, expanding cinematic grid with layout-driven animations and editorial typography.",
    component: CinematicCards,
    published: false,
    usage: null,
    props: [],
    features: [
      "Dynamic layout-based expansion using Framer Motion",
      "Cinematic image bloom and focus transitions",
      "Staggered editorial-style typography reveals",
      "Responsive flex-based grid architecture",
      "Integrated background numeric accents",
    ],
    notes: [
      "Optimized for a 4-column layout on desktop.",
      "Uses Framer Motion's layout prop for fluid aspect-ratio transitions.",
      "Requires 'Space Grotesk' for the numeric accents and headings.",
      "Best used with high-resolution cinematic photography.",
    ],
  },

  "fluidcursortrail": {
    title: "Fluid Cursor Trail",
    category: "CREATIVE",
    description: "Interactive canvas drawing a trailing snake/spring-like effect following the mouse pointer.",
    component: FluidCursorTrail,
    published: false,
    usage: null,
    props: [],
    features: [
      "Smooth cursor trailing physics",
      "Spring and friction-based animation",
      "Uses HTML Canvas API",
      "Dynamic responsive sizing",
      "Self-contained isolated scope",
    ],
  },
};