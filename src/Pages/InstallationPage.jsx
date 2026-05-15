import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import DocsSidebar from "../components/DocsSidebar";
import { ArrowRight, Check, Copy as CopyIcon } from "lucide-react";
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
  { id: "install", label: "Installation" },
  { id: "tailwind-config", label: "Tailwind Config" },
  { id: "peer-deps", label: "Peer Dependencies" },
  { id: "usage", label: "Basic Usage" },
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

/* ── Main page ── */
const InstallationPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Scroll-spy
  const [activeSection, setActiveSection] = useState("install");
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
              Installation
            </h1>
          </header>

          {/* ── Section 1: Install ── */}
          <section id="install" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2 font-['Space_Grotesk'] text-primary mb-5">
              Install the package
            </h2>
            <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px] mb-4">
              Install ComponentLab from npm:
            </p>
            <CodeBlock code="npm install component-labs" language="bash" />
          </section>

          {/* ── Section 2: Tailwind Config ── */}
          <section id="tailwind-config" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2 font-['Space_Grotesk'] text-primary mb-5">
              Configure Tailwind
            </h2>
            <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px] mb-5">
              Add the ComponentLab dist path to your Tailwind config so styles are picked up correctly.
            </p>

            <div className="space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-primary/70 font-['Space_Grotesk']">
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
                <p className="text-sm font-semibold text-primary/70 font-['Space_Grotesk']">
                  tailwind.config.css (v4)
                </p>
                <CodeBlock
                  code={`@import "tailwindcss";
@source "../node_modules/component-labs/dist";`}
                  language="css"
                />
              </div>
            </div>
          </section>

          {/* ── Section 3: Peer Dependencies ── */}
          <section id="peer-deps" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2 font-['Space_Grotesk'] text-primary mb-5">
              Peer dependencies
            </h2>
            <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px] mb-4">
              Make sure these are installed in your project:
            </p>
            <div
              className={`
                rounded-xl border overflow-hidden
                ${isDark ? "border-white/6" : "border-black/5"}
              `}
            >
              <div className="divide-y divide-border-fallback-10">
                {[
                  { name: "react", version: ">= 18" },
                  { name: "react-dom", version: ">= 18" },
                  { name: "motion", version: ">= 12" },
                  { name: "tailwindcss", version: ">= 3" },
                  { name: "lucide-react", version: ">= 0.300.0" },
                ].map(({ name, version }) => (
                  <div
                    key={name}
                    className={`
                      flex items-center justify-between py-3 px-4
                      ${isDark ? "bg-white/3" : "bg-black/2"}
                    `}
                  >
                    <code className="font-mono text-[14px] text-primary font-semibold">{name}</code>
                    <span className={`font-['Inter'] text-[13px] ${isDark ? "text-[#7a776e]" : "text-[#8a8780]"}`}>{version}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Section 4: Basic Usage ── */}
          <section id="usage" className="mb-14 scroll-mt-20">
            <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2 font-['Space_Grotesk'] text-primary mb-5">
              Basic usage
            </h2>
            <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px] mb-4">
              Import any component and use it directly:
            </p>
            <CodeBlock
              code={`import { EncryptedText } from "component-labs";

function App() {
  return (
    <EncryptedText
      text="Hello World"
      speed={80}
      sequential={true}
    />
  );
}`}
              language="jsx"
            />
          </section>

          {/* ── Bottom CTA ── */}
          <div
            className={`
              rounded-xl border p-6 md:p-8 text-center
              ${isDark ? "bg-white/3 border-white/6" : "bg-black/15 border-black/5"}
            `}
          >
            <p className={`font-['Inter'] text-[14px] mb-4 ${isDark ? "text-[#7a776e]" : "text-[#8a8780]"}`}>
              Ready to explore?
            </p>
            <Link
              to="/components/text/encryptedtext"
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
              Browse Components
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

export default InstallationPage;
