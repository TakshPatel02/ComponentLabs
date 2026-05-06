import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { useTheme } from "../context/ThemeContext";

const CodeBlock = ({ code, language = "bash" }) => {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const codeTheme = isDarkTheme ? themes.vsDark : themes.vsLight;

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
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>

      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors opacity-0 group-hover:opacity-100"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={16} className="text-success-muted" />
        ) : (
          <Copy size={16} className="text-primary/60" />
        )}
      </button>
    </div>
  );
};

const DocsPage = () => {
  return (
    <div className="min-h-screen bg-surface text-primary font-['Space_Grotesk'] pb-24">
      {/* Container */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 pt-12 md:pt-20 space-y-16">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Documentation
          </h1>
        </header>

        {/* Section: Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            Introduction
          </h2>
          <p className="leading-relaxed text-primary/80">
            ComponentLab is a curated collection of production-ready React UI
            primitives built with Motion, Tailwind CSS, and AI-assisted
            development. Every component is interactive, accessible, and ready
            to drop into your project.
          </p>
          <p className="leading-relaxed text-primary/80">
            ComponentLab is available both as a live showcase and as an npm
            package — install it directly into your React project or browse the
            components page to copy code inline.
          </p>
        </section>

        {/* Section: Installation */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            Installation
          </h2>
          <div className="space-y-4">
            <CodeBlock code="npm install component-labs" language="bash" />

            <div className="space-y-3">
              <h3 className="text-lg font-bold">
                Then add to your Tailwind config:
              </h3>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary/70">
                  tailwind.config.js (v3)
                </p>
                <CodeBlock
                  code={`content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/component-labs/dist/**/*.{js,mjs}"
]`}
                  language="javascript"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary/70">
                  tailwind.config.css (v4)
                </p>
                <CodeBlock
                  code={`@import "tailwindcss";
@source "../node_modules/component-labs/dist";`}
                  language="css"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Peer Dependencies */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            Peer Dependencies
          </h2>
          <p className="leading-relaxed text-primary/80">
            Make sure these are installed in your project:
          </p>
          <ul className="list-disc leading-relaxed pl-5 space-y-1 text-primary/80">
            <li>
              <code className="bg-black/5 px-1.5 py-0.5 rounded text-md font-mono">
                react &gt;= 18
              </code>
            </li>
            <li>
              <code className="bg-black/5 px-1.5 py-0.5 rounded text-md font-mono">
                react-dom &gt;= 18
              </code>
            </li>
            <li>
              <code className="bg-black/5 px-1.5 py-0.5 rounded text-md font-mono">
                motion &gt;= 12
              </code>
            </li>
            <li>
              <code className="bg-black/5 px-1.5 py-0.5 rounded text-md font-mono">
                tailwindcss &gt;= 3
              </code>
            </li>
            <li>
              <code className="bg-black/5 px-1.5 py-0.5 rounded text-md font-mono">
                lucide-react &gt;= 0.300.0
              </code>
            </li>
          </ul>
        </section>

        {/* Section: Stack */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Core</h3>
              <ul className="list-disc leading-relaxed pl-5 space-y-1 text-primary/80">
                <li>React 18</li>
                <li>Framer Motion / Motion for React</li>
                <li>Tailwind CSS v4</li>
                <li>Vite</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">Available as</h3>
              <ul className="list-disc leading-relaxed pl-5 space-y-1 text-primary/80">
                <li>Live showcase — component-labs.vercel.app</li>
                <li>npm package — npmjs.com/package/component-labs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Philosophy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            Philosophy
          </h2>
          <div className="space-y-6">
            <div>
              <strong className="block text-primary font-bold mb-1">
                Motion should be earned.
              </strong>
              <p className="leading-relaxed text-primary/80">
                Animation exists to communicate, not decorate. Every transition
                in ComponentLab has a reason — it guides attention, confirms an
                action, or reveals hierarchy.
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                Minimalism with a pulse.
              </strong>
              <p className="leading-relaxed text-primary/80">
                Clean doesn't mean cold. The best components feel alive without
                being loud. Restraint in color, intention in motion.
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                AI is a collaborator, not a vending machine.
              </strong>
              <p className="leading-relaxed text-primary/80">
                The output is only as good as the thinking behind the prompt. AI
                handles the syntax. The architecture, the edge cases, the "does
                this actually feel right" — that's still human work.
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                Production-ready or not at all.
              </strong>
              <p className="leading-relaxed text-primary/80">
                No half-built demos. Every component on this site handles error
                states, accessibility, and real interaction — not just the happy
                path.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Roadmap */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            Roadmap
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface-container/50 oklab-border p-6 rounded-xl shadow-sm">
            <div className="space-y-3">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success-muted animate-pulse border border-black/10"></span>
                Completed
              </h3>
              <ul className="space-y-2 text-primary/80 text-sm">
                <li>
                  <strong className="text-primary font-bold">
                    Neural Trace
                  </strong>{" "}
                  — AI thinking process timeline
                </li>
                <li>
                  <strong className="text-primary font-bold">
                    Adaptive Sidebar
                  </strong>{" "}
                  — context-aware navigation
                </li>
                <li>
                  <strong className="text-primary font-bold">Flip Links</strong>{" "}
                  — kinetic typography nav
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary/20 border border-black/10"></span>
                Planned
              </h3>
              <ul className="space-y-2 text-primary/80 text-sm">
                <li>
                  <strong className="text-primary font-bold">
                    Code preview beside every component
                  </strong>
                </li>
                <li>
                  <strong className="text-primary font-bold">
                    npm package CSS variables fix
                  </strong>
                </li>
                <li>
                  <strong className="text-primary font-bold">
                    TypeScript support
                  </strong>
                </li>
                <li>
                  <strong className="text-primary font-bold">
                    Component search
                  </strong>
                </li>
                <li>
                  <strong className="text-primary font-bold">Figma file</strong>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DocsPage;
