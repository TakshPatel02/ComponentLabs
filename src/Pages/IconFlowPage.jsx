import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Highlight, themes } from "prism-react-renderer";
import {
  Search,
  Check,
  Loader,
  Bell,
  Star,
  Heart,
  Copy,
  MousePointerClick,
  Play,
  Repeat,
  Zap,
  Package,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

/* ─── Keyframe Styles ─── */
const animationStyles = `
  @keyframes iconflow-shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-3px) rotate(-3deg); }
    75% { transform: translateX(3px) rotate(3deg); }
  }
  @keyframes iconflow-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes iconflow-bounce {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.25); }
  }
  @keyframes iconflow-swing {
    0%, 100% { transform: rotate(0deg); }
    20% { transform: rotate(15deg); }
    40% { transform: rotate(-10deg); }
    60% { transform: rotate(5deg); }
    80% { transform: rotate(-5deg); }
  }
  @keyframes iconflow-pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.92); }
  }
  @keyframes iconflow-heartbeat {
    0% { transform: scale(1); }
    14% { transform: scale(1.3); }
    28% { transform: scale(1); }
    42% { transform: scale(1.3); }
    70% { transform: scale(1); }
  }
  .if-shake { animation: iconflow-shake 1s ease-in-out infinite; }
  .if-spin { animation: iconflow-spin 1.5s linear infinite; }
  .if-bounce { animation: iconflow-bounce 1.2s cubic-bezier(0.28, 0.84, 0.42, 1) infinite; }
  .if-swing { animation: iconflow-swing 2s ease-in-out infinite; transform-origin: top center; }
  .if-pulse { animation: iconflow-pulse 2s ease-in-out infinite; }
  .if-heartbeat { animation: iconflow-heartbeat 1.5s ease-in-out infinite; }
`;

/* ─── Data ─── */
const ANIMATIONS = [
  { name: "shake", icon: Search, label: "Shake" },
  { name: "spin", icon: Loader, label: "Spin" },
  { name: "bounce", icon: Check, label: "Bounce" },
  { name: "swing", icon: Bell, label: "Swing" },
  { name: "pulse", icon: Star, label: "Pulse" },
  { name: "heartbeat", icon: Heart, label: "Heartbeat" },
];

const TRIGGERS = [
  { name: "hover", icon: MousePointerClick, label: "Hover", desc: "Activates on mouse enter, deactivates on leave" },
  { name: "click", icon: Zap, label: "Click", desc: "Toggles the animation on each click" },
  { name: "mount", icon: Play, label: "Mount", desc: "Activates when the component mounts" },
  { name: "loop", icon: Repeat, label: "Loop", desc: "Starts active and keeps running forever" },
];

const PROPS_DATA = [
  { prop: "icon", type: "component", default: "required", desc: "Lucide icon component to render" },
  { prop: "animation", type: "string", default: '"shake"', desc: "Animation class to apply" },
  { prop: "trigger", type: "string", default: '"hover"', desc: "Interaction mode" },
  { prop: "size", type: "number", default: "24", desc: "Icon size in pixels" },
  { prop: "color", type: "string", default: '"currentColor"', desc: "Icon color" },
  { prop: "speed", type: "number", default: "1", desc: "Animation speed multiplier" },
  { prop: "strokeWidth", type: "number", default: "2", desc: "Lucide stroke width" },
  { prop: "className", type: "string", default: '""', desc: "Extra class names" },
];

/* ─── Generic Copy Button (used by CodeBlock) ─── */
const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className="cursor-pointer transition-all duration-200" aria-label="Copy to clipboard">
      {copied ? <Check size={14} className="text-[#E8567A]" /> : <Copy size={14} className="opacity-40 hover:opacity-80 text-on-surface-variant" />}
    </button>
  );
};

/* ─── Hero Copy Button (matches HomePage NpmCopyButton) ─── */
const IconFlowCopyBlock = () => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm install iconflow lucide-react");
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg
        font-mono-code text-[13px] tracking-widest uppercase
        border border-border-fallback-10 bg-transparent
        text-on-surface-variant
        hover:border-[#E8567A]/40 hover:text-[#E8567A]
        transition-all duration-300 active:scale-95
        cursor-pointer select-none w-full sm:w-auto
      `}
    >
      {copied ? (
        <>
          <Check size={16} className="text-[#E8567A]" />
          <span>Copied ✓</span>
        </>
      ) : (
        <>
          <Copy size={16} className="opacity-40" />
          <span className="lowercase">npm install iconflow lucide-react</span>
        </>
      )}
    </button>
  );
};

/* ─── Code Block ─── */
const CodeBlock = ({ code, language = "jsx", showCopy = true }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className={`relative rounded-xl overflow-hidden border ${isDark ? "bg-[#0d0d0d] border-white/10" : "bg-[#1a1a1a] border-black/10"}`}>
      {showCopy && <div className="absolute top-3 right-3 z-10"><CopyButton text={code} /></div>}
      <Highlight theme={themes.nightOwl} code={code.trim()} language={language}>
        {({ style, tokens, getLineProps, getTokenProps }) => (
          <pre className="p-5 overflow-x-auto text-[13px] leading-relaxed font-mono" style={{ ...style, background: "transparent" }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => <span key={key} {...getTokenProps({ token })} />)}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

/* ─── Framer Motion Variants ─── */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 18 } },
};

/* ══════════════════════════════════════════════════
   MAIN PAGE
   ══════════════════════════════════════════════════ */
const IconFlowPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [selectedAnimation, setSelectedAnimation] = useState("shake");
  const [selectedTrigger, setSelectedTrigger] = useState("loop");
  const [speed, setSpeed] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Reset animation state when trigger changes
  useEffect(() => {
    if (selectedTrigger === "loop") {
      setIsAnimating(true);
    } else if (selectedTrigger === "mount") {
      setIsAnimating(true);
      const timeout = setTimeout(() => setIsAnimating(false), 2000);
      return () => clearTimeout(timeout);
    } else {
      setIsAnimating(false);
    }
    setIsHovered(false);
  }, [selectedTrigger, selectedAnimation]);

  // Determine if animation should play
  const shouldAnimate = selectedTrigger === "loop"
    || (selectedTrigger === "hover" && isHovered)
    || (selectedTrigger === "click" && isAnimating)
    || (selectedTrigger === "mount" && isAnimating);

  const iconMap = { shake: "Search", spin: "Loader", bounce: "Check", swing: "Bell", pulse: "Star", heartbeat: "Heart" };
  const iconName = iconMap[selectedAnimation];

  const playgroundCode = `import { ${iconName} } from "lucide-react";
import AnimatedIcon from "iconflow";

<AnimatedIcon
  icon={${iconName}}
  animation="${selectedAnimation}"
  trigger="${selectedTrigger}"
  speed={${speed}}
  size={28}
  color="${isDark ? "#f2f1ed" : "#111827"}"
/>`;

  const selectedIconComponent = ANIMATIONS.find((a) => a.name === selectedAnimation)?.icon;
  const animDuration = (1 / speed).toFixed(2);

  return (
    <div className="min-h-screen w-full bg-surface text-on-surface font-ui-body">
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />

      {/* ═══ HERO ═══ */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center justify-center pt-28 md:pt-36 pb-20 md:pb-28 px-4"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border-fallback-10 bg-surface-container/50 backdrop-blur-sm mb-8">
            <Package size={12} className="text-[#E8567A]" />
            <span className="font-mono-code text-[11px] tracking-wider text-on-surface-variant/80 uppercase">
              npm package — v1.0
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display-hero text-[44px] sm:text-[56px] md:text-[72px] text-primary tracking-tighter leading-[1.05] mb-6">
            Lucide Icons,<br />
            Brought to <span className="italic text-[#E8567A]">Life.</span>
          </h1>

          {/* Subtitle */}
          <p className="font-editorial-body text-[17px] md:text-[19px] text-on-surface-variant leading-relaxed max-w-3xl mb-10 italic">
            A lightweight React wrapper for Lucide icons that adds animation
            triggers — hover, click, mount, and loop. One prop away from motion.
          </p>

          {/* Install block */}
          <div className="flex flex-col items-center mt-6">
            <IconFlowCopyBlock />
            <p className="font-mono-code text-[11px] text-on-surface-variant/50 mt-4 text-center">
              Requires React 18+ and lucide-react
            </p>
          </div>
        </motion.div>

        {/* Animated icons strip */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 md:gap-5 mt-14 max-w-4xl">
          {ANIMATIONS.map(({ name, icon: Icon, label }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-surface-container border oklab-border flex items-center justify-center transition-colors duration-200 hover:border-primary/20">
                <Icon className={`text-primary w-5 h-5 md:w-6 md:h-6 if-${name}`} />
              </div>
              <span className="font-mono-code text-[10px] text-on-surface-variant/60">{label}</span>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ LIVE PLAYGROUND ═══ */}
      <section className="py-16 md:py-28 px-4">
        <div className="max-w-300 mx-auto">
          {/* Heading */}
          <div className="mb-10 md:mb-12">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-3 block">PLAYGROUND</span>
            <h2 className="font-section-heading text-[32px] md:text-[40px] text-primary tracking-tight leading-tight mb-3">Try it live</h2>
            <p className="font-editorial-standard text-[15px] text-on-surface-variant italic max-w-2xl">
              Pick an animation, a trigger mode, and adjust the speed. The code updates in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            {/* Left: Controls + Preview */}
            <div className="rounded-xl overflow-hidden p-6 md:p-8 flex flex-col bg-cursor-light border border-transparent oklab-border">
              {/* Animation selector */}
              <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-4 block">Animation</span>
              <div className="flex flex-wrap gap-2 mb-8">
                {ANIMATIONS.map(({ name, label }) => (
                  <button
                    key={name}
                    onClick={() => setSelectedAnimation(name)}
                    className={`px-3.5 py-1.5 rounded-lg font-mono-code text-[12px] tracking-wide transition-all duration-200 cursor-pointer border ${
                      selectedAnimation === name
                        ? "bg-[#E8567A] text-white border-[#E8567A]"
                        : "border-border-fallback-10 text-on-surface-variant/60 hover:border-primary/25 hover:text-on-surface-variant"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Trigger selector */}
              <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-4 block">Trigger</span>
              <div className="flex flex-wrap gap-2 mb-8">
                {TRIGGERS.map(({ name, label }) => (
                  <button
                    key={name}
                    onClick={() => setSelectedTrigger(name)}
                    className={`px-3.5 py-1.5 rounded-lg font-mono-code text-[12px] tracking-wide transition-all duration-200 cursor-pointer border ${
                      selectedTrigger === name
                        ? "bg-[#E8567A] text-white border-[#E8567A]"
                        : "border-border-fallback-10 text-on-surface-variant/60 hover:border-primary/25 hover:text-on-surface-variant"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Speed slider */}
              <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-3 block">
                Speed — {speed}x
              </span>
              <input
                type="range" min="0.25" max="3" step="0.25" value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full accent-[#E8567A] mb-10 cursor-pointer"
              />

              {/* Icon Preview */}
              <div className="flex-1 flex flex-col items-center justify-center gap-3">
                <div
                  className="w-28 h-28 md:w-32 md:h-32 rounded-3xl bg-surface-container border-2 oklab-border flex items-center justify-center cursor-pointer select-none"
                  onMouseEnter={() => { if (selectedTrigger === "hover") setIsHovered(true); }}
                  onMouseLeave={() => { if (selectedTrigger === "hover") setIsHovered(false); }}
                  onClick={() => { if (selectedTrigger === "click") setIsAnimating((p) => !p); }}
                >
                  {selectedIconComponent && React.createElement(selectedIconComponent, {
                    className: `text-primary ${shouldAnimate ? `if-${selectedAnimation}` : ""}`,
                    size: 40,
                    style: shouldAnimate ? { animationDuration: `${animDuration}s` } : {},
                  })}
                </div>
                <span className="font-mono-code text-[11px] text-on-surface-variant/40 italic">
                  {selectedTrigger === "hover" && "Hover the icon"}
                  {selectedTrigger === "click" && (isAnimating ? "Click to stop" : "Click to animate")}
                  {selectedTrigger === "mount" && (isAnimating ? "Playing on mount…" : "Played once on mount")}
                  {selectedTrigger === "loop" && "Always animating"}
                </span>
              </div>
            </div>

            {/* Right: Code Output */}
            <div className="flex flex-col">
              <span className="font-system-micro text-[10px] text-on-surface-variant/50 tracking-widest uppercase mb-4 block">Generated Code</span>
              <div className="flex-1">
                <CodeBlock code={playgroundCode} language="jsx" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ QUICK START ═══ */}
      <section className="py-16 md:py-28 px-4">
        <div className="max-w-300 mx-auto">
          <div className="mb-10 md:mb-12">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-3 block">QUICK START</span>
            <h2 className="font-section-heading text-[32px] md:text-[40px] text-primary tracking-tight leading-tight mb-3">Up and running in 3 steps</h2>
            <p className="font-editorial-standard text-[15px] text-on-surface-variant italic max-w-2xl">
              Install the package, import the styles, and drop in your first animated icon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { step: "1", title: "Install", code: `npm install iconflow lucide-react`, lang: "bash", note: null },
              { step: "2", title: "Import Styles", code: `import "iconflow/styles";`, lang: "javascript", note: "Add once in your app entry file" },
              { step: "3", title: "Use It", code: `import { Camera } from "lucide-react";\nimport AnimatedIcon from "iconflow";\n\n<AnimatedIcon\n  icon={Camera}\n  animation="spin"\n  trigger="hover"\n/>`, lang: "jsx", note: null },
            ].map(({ step, title, code, lang, note }) => (
              <div key={step} className="rounded-xl overflow-hidden p-6 bg-cursor-light border border-transparent oklab-border flex flex-col">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-7 h-7 rounded-full bg-[#E8567A]/10 text-[#E8567A] font-mono-code text-[12px] font-bold flex items-center justify-center">{step}</span>
                  <span className="font-section-heading text-[16px] text-primary font-medium">{title}</span>
                </div>
                <CodeBlock code={code} language={lang} showCopy={true} />
                {note && <p className="font-mono-code text-[12px] text-on-surface-variant/60 mt-4">{note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ TRIGGERS ═══ */}
      <section className="py-16 md:py-28 px-4">
        <div className="max-w-300 mx-auto">
          <div className="mb-10 md:mb-12">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-3 block">TRIGGERS</span>
            <h2 className="font-section-heading text-[32px] md:text-[40px] text-primary tracking-tight leading-tight mb-3">Four interaction modes</h2>
            <p className="font-editorial-standard text-[15px] text-on-surface-variant italic max-w-2xl">
              Control exactly when your icons animate with a single prop.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {TRIGGERS.map(({ name, icon: Icon, label, desc }) => (
              <div
                key={name}
                className="rounded-xl overflow-hidden p-6 bg-cursor-light border border-transparent oklab-border flex flex-col items-start transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 group"
              >
                <div className="w-11 h-11 rounded-xl bg-surface-container flex items-center justify-center mb-5 transition-colors group-hover:bg-[#E8567A]/10">
                  <Icon size={20} className="text-on-surface-variant group-hover:text-[#E8567A] transition-colors" />
                </div>
                <h3 className="font-section-heading text-[18px] text-primary font-medium mb-2">{label}</h3>
                <code className="font-mono-code text-[11px] text-[#E8567A]/80 mb-3">trigger="{name}"</code>
                <p className="font-editorial-standard text-[13px] text-on-surface-variant/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ ANIMATION TYPES ═══ */}
      <section className="py-16 md:py-28 px-4">
        <div className="max-w-300 mx-auto">
          <div className="mb-10 md:mb-12">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-3 block">ANIMATIONS</span>
            <h2 className="font-section-heading text-[32px] md:text-[40px] text-primary tracking-tight leading-tight mb-3">Six motion primitives</h2>
            <p className="font-editorial-standard text-[15px] text-on-surface-variant italic max-w-2xl">
              Each animation is carefully crafted with easing curves that feel natural and performant.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {ANIMATIONS.map(({ name, icon: Icon, label }) => (
              <div
                key={name}
                className="rounded-xl overflow-hidden p-5 bg-cursor-light border border-transparent oklab-border flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center mb-4 transition-colors group-hover:bg-[#E8567A]/10">
                  <Icon className={`text-primary w-6 h-6 if-${name}`} />
                </div>
                <span className="font-section-heading text-[14px] text-primary font-medium mb-1">{label}</span>
                <code className="font-mono-code text-[10px] text-on-surface-variant/50">"{name}"</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ PROPS TABLE ═══ */}
      <section className="py-16 md:py-28 px-4">
        <div className="max-w-300 mx-auto">
          <div className="mb-10 md:mb-12">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-3 block">REFERENCE</span>
            <h2 className="font-section-heading text-[32px] md:text-[40px] text-primary tracking-tight leading-tight mb-3">Props</h2>
            <p className="font-editorial-standard text-[15px] text-on-surface-variant italic max-w-2xl">
              Every prop available on the AnimatedIcon component.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border oklab-border">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border-fallback-10 bg-cursor-light">
                  {["Prop", "Type", "Default", "Description"].map((h) => (
                    <th key={h} className="px-5 py-3.5 font-mono-code text-[11px] uppercase tracking-[0.15em] text-on-surface-variant/50 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PROPS_DATA.map(({ prop, type, default: def, desc }) => (
                  <tr key={prop} className="border-b border-border-fallback-10 last:border-b-0 transition-colors hover:bg-cursor-light/50">
                    <td className="px-5 py-4"><code className="font-mono-code text-[13px] text-[#E8567A]">{prop}</code></td>
                    <td className="px-5 py-4">
                      <span className="font-mono-code text-[12px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant/60">{type}</span>
                    </td>
                    <td className="px-5 py-4"><code className="font-mono-code text-[12px] text-on-surface-variant/60">{def}</code></td>
                    <td className="px-5 py-4 font-editorial-standard text-[13px] text-on-surface-variant/80">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ API SECTION ═══ */}
      <section className="py-16 md:py-28 px-4">
        <div className="max-w-300 mx-auto">
          <div className="mb-10 md:mb-12">
            <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-3 block">API</span>
            <h2 className="font-section-heading text-[32px] md:text-[40px] text-primary tracking-tight leading-tight mb-3">IconFlow helper class</h2>
            <p className="font-editorial-standard text-[15px] text-on-surface-variant italic max-w-2xl">
              Create shared configurations and merge defaults across your app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start">
            <CodeBlock
              code={`import { IconFlow } from "iconflow";

const flow = new IconFlow({
  size: 32,
  animation: "bounce",
  trigger: "click",
});

// Merge with per-instance overrides
const defaults = flow.getDefaults({
  color: "#0f172a",
});`}
              language="javascript"
            />

            <div className="rounded-xl overflow-hidden p-6 md:p-8 bg-cursor-light border border-transparent oklab-border">
              <h3 className="font-section-heading text-[18px] text-primary font-medium mb-4">What this gives you</h3>
              <ul className="space-y-3">
                {[
                  "Centralized animation defaults for your entire app",
                  "Per-instance overrides via getDefaults()",
                  "Type-safe configuration with predictable fallbacks",
                  "Zero runtime overhead — just config merging",
                ].map((text) => (
                  <li key={text} className="flex items-start gap-3">
                    <Check size={14} className="text-[#E8567A] mt-1 shrink-0" />
                    <span className="font-editorial-standard text-[13px] text-on-surface-variant/80 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="w-full border-t border-border-fallback-10" />

      {/* ═══ LINKS & BOTTOM ═══ */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-300 mx-auto flex flex-col items-center text-center">
          <h2 className="font-section-heading text-[28px] md:text-[36px] text-primary tracking-tight mb-4">Start animating your icons</h2>
          <p className="font-editorial-standard text-[15px] text-on-surface-variant italic mb-10 max-w-2xl">
            IconFlow is open-source and free forever. Built as part of the ComponentLab ecosystem.
          </p>

          {/* Link cards */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full max-w-2xl">
            <a
              href="https://www.npmjs.com/package/iconflow"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-cursor-light border border-transparent oklab-border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E8567A]/20 group"
            >
              <Package size={18} className="text-[#E8567A]" />
              <span className="font-mono-code text-[13px] text-primary font-medium">npmjs.com</span>
              <ExternalLink size={12} className="text-on-surface-variant/40 group-hover:text-[#E8567A] transition-colors" />
            </a>
            <a
              href="https://github.com/TakshPatel02/IconFlow-npm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-cursor-light border border-transparent oklab-border transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E8567A]/20 group"
            >
              <span className="font-mono-code text-[13px] text-primary font-medium">GitHub</span>
              <ExternalLink size={12} className="text-on-surface-variant/40 group-hover:text-[#E8567A] transition-colors" />
            </a>
          </div>

          {/* Bottom footer */}
          <div className="w-full pt-8 border-t border-border-fallback-10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/" className="font-mono-code text-[12px] text-on-surface-variant/60 hover:text-[#E8567A] transition-colors flex items-center gap-1 group">
              <ChevronRight size={12} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to ComponentLab
            </Link>
            <p className="font-mono-code text-[12px] text-on-surface-variant/50">MIT License © Taksh Patel</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconFlowPage;
