# ComponentLab

A curated collection of **production-ready React UI primitives** built with Motion, Tailwind CSS, and AI-assisted development. Every component is interactive, accessible, and ready to drop into your project.

## ✨ Features

- **Production-Ready** — Battle-tested components with error states, accessibility, and real interaction
- **AI-Designed** — Built through structured collaboration with Claude and Gemini, refined for quality
- **Motion-First** — Intentional animations that guide attention and confirm action
- **Tailwind CSS v4** — Fully styled with utility-first CSS and CSS variables
- **Accessible** — WCAG-compliant with proper ARIA attributes and keyboard support
- **Dark/Light Modes** — Seamless theme support with CSS variables
- **Copy-Paste Ready** — Use components inline or install via npm

## 📦 Installation

```bash
npm install component-labs
```

### Tailwind Configuration

**Tailwind v3:**

```javascript
// tailwind.config.js
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/component-labs/dist/**/*.{js,mjs}",
];
```

**Tailwind v4:**

```css
/* tailwind.config.css */
@import "tailwindcss";
@source "../node_modules/component-labs/dist";
```

### Peer Dependencies

Make sure these are installed in your project:

- `react >= 18`
- `react-dom >= 18`
- `motion >= 12`
- `tailwindcss >= 3`
- `lucide-react >= 0.300.0`

## 🎯 Component Categories

### Button Components

- **Fill Button** — Sequenced fill animation with border expansion
- **Upload Button** — Progress indicator with success state
- **Magnet Button** — Magnetic hover with sequential character flip
- **Encrypt Button** — Text encryption animation on click
- **GitHub Stars Button** — Social proof integration
- **Neumorphism Button** — Soft UI aesthetic

### Form Components

- **Ghost Forms** — Minimalist inputs with floating labels
- **Minimal Auth** — Low-friction authentication interface
- **Prompt Bar** — AI-style input with suggestions
- **Rich Composer** — Advanced text editor with formatting

### Card Components

- **Depth Perception Card** — 3D tilting with ambient lighting
- **Pricing Card** — Feature comparison layout
- **Agentic Flow Card** — Process visualization
- **State Synthesis Card** — Data transformation display

### Text Components

- **Encrypted Text** — Character-by-character reveal animation
- **Stripe Writer** — Striped text animation
- **Velocity Text** — Motion-based typography
- **Creative Highlight** — Dynamic text underlining

### Grid Components

- **Bento Stats Grid** — Varied-size stat display
- **Crosshair Feature Grid** — Target-aligned features
- **Masonry Showcase Grid** — Pinterest-style layout

### Hero Components

- **Dynamic Hero** — Responsive hero with animations
- **Staggered Entrance Hero** — Sequenced element animations

### Link Components

- **Flip Links** — Kinetic typography navigation
- **Takeover Links** — Full-block link animation
- **Clip Path Links** — SVG-based link effects
- **Neural Hover Links** — AI-inspired hover states

### Keyboard Components

- **Mac Keyboard** — macOS keyboard simulator
- **Typewriter Keyboard** — Mechanical keyboard animation

### Other Components

- **Animated FAQ** — Expandable question interface
- **Editorial Slider** — Magazine-style carousel
- **Kanban Board** — Drag-and-drop task board
- **Terminal Typing Card** — Command-line interface

## 🏗️ Stack

**Core:**

- React 18
- Framer Motion / Motion for React
- Tailwind CSS v4
- Vite

**Available as:**

- Live showcase — [component-labs.vercel.app](https://component-labs.vercel.app)
- npm package — [@component-labs on npm](https://npmjs.com/package/component-labs)

## 🚀 Quick Start

1. **Install the package:**

   ```bash
   npm install component-labs
   ```

2. **Import and use a component:**

   ```jsx
   import { FillButton } from "component-labs";

   export default function App() {
     return <FillButton>Click Me</FillButton>;
   }
   ```

3. **Browse all components at:**
   [component-labs.vercel.app/components](https://component-labs.vercel.app/components)

## 📚 Documentation

- **[Live Showcase](https://component-labs.vercel.app)** — Interactive component browser
- **[Docs Page](https://component-labs.vercel.app/docs)** — Installation, stack, and philosophy
- **[Components Page](https://component-labs.vercel.app/components)** — Full component library with code
- **[Terms & License](https://component-labs.vercel.app/terms)** — MIT License and usage terms

## 🎨 Philosophy

**Motion should be earned.** Animation exists to communicate, not decorate. Every transition guides attention, confirms action, or reveals hierarchy.

**Minimalism with a pulse.** Clean doesn't mean cold. The best components feel alive without being loud. Restraint in color, intention in motion.

**AI is a collaborator, not a vending machine.** The output is only as good as the thinking behind the prompt. AI handles the syntax. Architecture, edge cases, and "does this feel right?" — that's still human work.

**Production-ready or not at all.** No half-built demos. Every component handles error states, accessibility, and real interaction — not just the happy path.

## 🛠️ Development

### Local Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
src/
├── components/          # All reusable components
│   ├── ButtonComponents/
│   ├── CardComponents/
│   ├── FormComponents/
│   ├── GridComponents/
│   ├── HeroComponents/
│   ├── HomePageComponents/
│   ├── KeyBoardComponents/
│   ├── Linkcomponent/
│   ├── OtherComponents/
│   └── TextComponents/
├── Pages/               # Application pages
│   ├── HomePage.jsx
│   ├── DocsPage.jsx
│   ├── ComponentsPage.jsx
│   ├── TermsPage.jsx
│   └── Components/      # Individual component showcase pages
├── context/             # React Context (ThemeContext)
├── App.jsx
├── main.jsx
└── index.css
```

## 📦 Publishing

This library is published on npm as `component-labs`. For publishing updates, see [PUBLISHING_GUIDE.md](./PUBLISHING_GUIDE.md).

## 📄 License

MIT License — see [LICENSE](./LICENSE) for details.

Built by **Taksh Patel**

---

**Explore the full library:** [component-labs.vercel.app](https://component-labs.vercel.app)
