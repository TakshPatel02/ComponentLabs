import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import DocsSidebar from "../components/DocsSidebar";
import {
  ArrowRight,
  Package,
  Copy as CopyIcon,
  Layers,
  Eye,
  Code,
  FileText,
  AlertCircle,
  Check,
} from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";

/* ── Inline code block with copy ── */
const CodeBlock = ({ code, language = "bash" }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const codeTheme = isDark ? themes.vsDark : themes.vsLight;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <Highlight theme={codeTheme} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} rounded-xl border oklab-border overflow-x-auto bg-surface-container-highest px-4 py-4 text-sm md:text-base font-mono shadow-[0_10px_40px_-24px_rgba(17,16,10,0.35)]`}
            style={{
              ...style,
              backgroundColor: "var(--surface-container-highest)",
              color: "var(--on-surface)",
              fontFamily:
                "var(--font-mono-code), ui-monospace, SFMono-Regular, Menlo, monospace",
            }}
          >
            {tokens.map((line, i) => {
              const { key: _lk, ...lineRestProps } = getLineProps({ line });
              return (
                <div key={i} {...lineRestProps}>
                  {line.map((token, j) => {
                    const { key: _tk, ...tokenRestProps } = getTokenProps({ token });
                    return <span key={j} {...tokenRestProps} />;
                  })}
                </div>
              );
            })}
          </pre>
        )}
      </Highlight>

      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors opacity-0 group-hover:opacity-100"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={16} className="text-green-500" />
        ) : (
          <CopyIcon size={16} className="text-primary/60" />
        )}
      </button>
    </div>
  );
};

/* ── On This Page sidebar ── */
const SECTIONS = [
  { id: "what-is", label: "What is ComponentLab" },
  { id: "whats-inside", label: "What's Inside" },
  { id: "two-ways", label: "Two Ways to Use" },
  { id: "philosophy", label: "Philosophy" },
  { id: "built-with", label: "Built With" },
  { id: "open-source", label: "Open Source" },
];

const OnThisPageNav = ({ activeSection }) => (
  <nav className="hidden xl:block fixed right-0 top-0 w-[200px] h-screen pt-24 pr-6 pl-4 bg-surface">
    <div className="font-system-micro text-[10.5px] font-semibold uppercase tracking-widest mb-4 select-none text-on-surface-variant/60">
      On This Page
    </div>
    <ul className="list-none m-0 p-0 flex flex-col gap-0.5">
      {SECTIONS.map((s) => {
        const isActive = activeSection === s.id;
        return (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`
                block py-1.5 text-[13px] no-underline transition-colors duration-150
                font-ui-body
                ${isActive
                  ? "text-error-warm font-medium"
                  : "text-on-surface-variant hover:text-primary"
                }
              `}
            >
              {s.label}
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
);

/* ── Stack item ── */
const StackItem = ({ name, role, isDark }) => (
  <div
    className={`
      flex items-center justify-between py-3 px-4 rounded-lg
      ${isDark ? "bg-white/3" : "bg-black/2"}
    `}
  >
    <span className="font-['Space_Grotesk'] text-[15px] font-semibold text-primary">{name}</span>
    <span className={`font-['Inter'] text-[13px] ${isDark ? "text-[#7a776e]" : "text-[#8a8780]"}`}>{role}</span>
  </div>
);

/* ── Main page ── */
const IntroductionPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Scroll-spy
  const [activeSection, setActiveSection] = useState("what-is");
  const observerRef = useRef(null);

  const setupObserver = useCallback(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = setupObserver();
    return cleanup;
  }, [setupObserver]);

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Left sidebar */}
      <DocsSidebar />

      {/* Main content */}
      <main className="ml-0 md:ml-[240px] xl:mr-[200px] flex-1 min-w-0 min-h-screen">
        <div className="max-w-3xl min-w-0 mx-auto px-6 md:px-8 py-16 md:py-24">

          {/* ── Page Header ── */}
          <header className="mb-14">
            <span className="font-system-micro text-system-micro text-on-surface-variant/60 tracking-widest uppercase mb-2 block">
              Docs
            </span>
            <h1 className="font-section-heading text-[32px] md:text-[44px] leading-tight text-primary tracking-tight">
              Introduction
            </h1>
          </header>

          {/* ── Section 1: What is ComponentLab ── */}
          <section id="what-is" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2 font-['Space_Grotesk'] text-primary mb-5">
              What is ComponentLab
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px]">
                ComponentLab is a curated collection of production-ready React UI primitives
                built with Motion, Tailwind CSS, and AI-assisted development.
              </p>
              <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px]">
                It started as a single portfolio page to showcase components. Then became a
                standalone site. Then became a published npm package. Every stage was driven
                by one question — <em>what would make this actually useful to other developers?</em>
              </p>
              <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px]">
                The answer: components that feel alive, are properly documented, accept real
                props, and can drop into any React project without fighting the codebase.
              </p>
            </div>
          </section>

          {/* ── Section 2: What's Inside ── */}
          <section id="whats-inside" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2 font-['Space_Grotesk'] text-primary mb-5">
              What's inside
            </h2>
            <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px] mb-5">
              43 interactive components across 13 categories — buttons, text effects, forms,
              grids, keyboards, hero sections, navigation, cards, logo clouds, footers, FAQs,
              templates and more.
            </p>
            <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px] mb-4">
              Every component includes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Eye, text: "Live interactive preview" },
                { icon: Code, text: "Usage code with syntax highlighting" },
                { icon: FileText, text: "Full props documentation" },
                { icon: AlertCircle, text: "Notes on behavior and edge cases" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl border
                    ${isDark
                      ? "bg-white/3 border-white/6"
                      : "bg-black/2 border-black/5"
                    }
                  `}
                >
                  <Icon size={18} className="text-[#E8567A] shrink-0" />
                  <span className="font-['Inter'] text-[14px] text-primary/80">{text}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Section 3: Two Ways to Use ── */}
          <section id="two-ways" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2 font-['Space_Grotesk'] text-primary mb-5">
              Two ways to use it
            </h2>

            <div className="space-y-6">
              {/* Option 1 */}
              <div
                className={`
                  rounded-xl border p-5
                  ${isDark ? "bg-white/3 border-white/6" : "bg-black/15 border-black/5"}
                `}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? "bg-white/6" : "bg-black/4"}`}>
                    <Layers size={18} className="text-[#E8567A]" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-[17px] font-bold text-primary">
                    Browse and copy
                  </h3>
                </div>
                <p className="leading-relaxed text-primary/80 font-['Inter'] text-[15px]">
                  Visit the{" "}
                  <Link to="/components" className="text-[#E8567A] hover:underline no-underline font-medium">
                    Components page
                  </Link>
                  , find what you need, copy the code directly
                  into your project. No installation required.
                </p>
              </div>

              {/* Option 2 */}
              <div
                className={`
                  rounded-xl border p-5
                  ${isDark ? "bg-white/3 border-white/6" : "bg-black/15 border-black/5"}
                `}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? "bg-white/6" : "bg-black/4"}`}>
                    <Package size={18} className="text-[#E8567A]" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-[17px] font-bold text-primary">
                    Install the npm package
                  </h3>
                </div>
                <div className="mb-3">
                  <CodeBlock code="npm install component-labs" language="bash" />
                </div>
                <p className="leading-relaxed text-primary/70 font-['Inter'] text-[14px]">
                  Add to your Tailwind config so styles are picked up correctly, import
                  any component and use it directly. Full installation guide in the{" "}
                  <Link to="/docs/installation" className="text-[#E8567A] hover:underline no-underline font-medium">
                    next section
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 4: Philosophy ── */}
          <section id="philosophy" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2 font-['Space_Grotesk'] text-primary mb-5">
              Philosophy
            </h2>
            <div className="space-y-6">
              <div>
                <strong className="block text-primary font-bold mb-1 font-['Space_Grotesk'] text-[16px]">
                  Motion should be earned.
                </strong>
                <p className="leading-relaxed text-primary/80 font-['Inter'] text-[15px]">
                  Animation exists to communicate, not decorate. Every transition
                  in ComponentLab has a reason — it guides attention, confirms an
                  action, or reveals hierarchy.
                </p>
              </div>
              <div>
                <strong className="block text-primary font-bold mb-1 font-['Space_Grotesk'] text-[16px]">
                  Minimalism with a pulse.
                </strong>
                <p className="leading-relaxed text-primary/80 font-['Inter'] text-[15px]">
                  Clean doesn't mean cold. The best components feel alive without
                  being loud. Restraint in color, intention in motion.
                </p>
              </div>
              <div>
                <strong className="block text-primary font-bold mb-1 font-['Space_Grotesk'] text-[16px]">
                  AI is a collaborator, not a vending machine.
                </strong>
                <p className="leading-relaxed text-primary/80 font-['Inter'] text-[15px]">
                  The output is only as good as the thinking behind the prompt. AI
                  handles the syntax. The architecture, the edge cases, the "does
                  this actually feel right" — that's still human work.
                </p>
              </div>
              <div>
                <strong className="block text-primary font-bold mb-1 font-['Space_Grotesk'] text-[16px]">
                  Production-ready or not at all.
                </strong>
                <p className="leading-relaxed text-primary/80 font-['Inter'] text-[15px]">
                  No half-built demos. Every component handles error states, accessibility,
                  and real interaction — not just the happy path.
                </p>
              </div>
            </div>
          </section>

          {/* ── Section 5: Built With ── */}
          <section id="built-with" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2 font-['Space_Grotesk'] text-primary mb-5">
              Built with
            </h2>
            <div
              className={`
                rounded-xl border overflow-hidden
                ${isDark ? "border-white/6" : "border-black/5"}
              `}
            >
              <div className="divide-y divide-border-fallback-10">
                <StackItem name="React 18" role="Component foundation" isDark={isDark} />
                <StackItem name="Motion" role="Animations and interactions" isDark={isDark} />
                <StackItem name="Tailwind CSS v4" role="Styling" isDark={isDark} />
                <StackItem name="Vite" role="Build tool" isDark={isDark} />
                <StackItem name="Vercel" role="Deployment" isDark={isDark} />
              </div>
            </div>
          </section>

          {/* ── Section 6: Open Source ── */}
          <section id="open-source" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2 font-['Space_Grotesk'] text-primary mb-5">
              Open source
            </h2>
            <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px] mb-5">
              ComponentLab is fully open source under the MIT license.
            </p>

            <div className="space-y-2 mb-6">
              {[
                { label: "Website repo", url: "https://github.com/TakshPatel02/ComponentLabs", display: "github.com/TakshPatel02/ComponentLabs" },
                { label: "npm package repo", url: "https://github.com/TakshPatel02/ComponentLabs-npm", display: "github.com/TakshPatel02/ComponentLabs-npm" },
                { label: "npm package", url: "https://npmjs.com/package/component-labs", display: "npmjs.com/package/component-labs" },
              ].map(({ label, url, display }) => (
                <div
                  key={label}
                  className={`
                    flex items-center justify-between py-3 px-4 rounded-lg
                    ${isDark ? "bg-white/3" : "bg-black/2"}
                  `}
                >
                  <span className={`font-['Inter'] text-[14px] ${isDark ? "text-[#7a776e]" : "text-[#8a8780]"}`}>{label}</span>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Inter'] text-[14px] text-[#E8567A] hover:underline no-underline font-medium"
                  >
                    {display} →
                  </a>
                </div>
              ))}
            </div>

            <p className="leading-relaxed text-primary/70 font-['Inter'] text-[15px]">
              Found a bug? Open an issue. Want to contribute? PRs are welcome.
              Want to use it in your project? Go ahead — that's the point.
            </p>
          </section>

          {/* ── Bottom CTA ── */}
          <div
            className={`
              rounded-xl border p-6 md:p-8 text-center
              ${isDark ? "bg-white/3 border-white/6" : "bg-black/15 border-black/5"}
            `}
          >
            <p className={`font-['Inter'] text-[14px] mb-4 ${isDark ? "text-[#7a776e]" : "text-[#8a8780]"}`}>
              Ready to get started?
            </p>
            <Link
              to="/docs/installation"
              className={`
                inline-flex items-center gap-2.5 px-6 py-3 rounded-xl
                font-['Space_Grotesk'] text-[15px] font-semibold
                no-underline transition-all duration-300
                bg-primary text-on-primary
                hover:bg-[#E8567A] hover:text-white
                hover:shadow-[0_8px_30px_-6px_rgba(232,86,122,0.4)]
                active:scale-[0.98]
              `}
            >
              Next → Installation
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* ── Bottom decoration ── */}
          <div className="flex items-center justify-center gap-1.5 opacity-30 mt-16">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${isDark ? "bg-[#a8a49c]" : "bg-on-surface-variant"}`}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Right sidebar */}
      <OnThisPageNav activeSection={activeSection} />
    </div>
  );
};

export default IntroductionPage;
