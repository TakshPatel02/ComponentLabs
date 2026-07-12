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
    <div className="relative group rounded-2xl overflow-hidden bg-surface-container-highest border border-border-fallback-10/50 shadow-[0_10px_40px_-24px_rgba(17,16,10,0.35)] transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(207,45,86,0.15)] hover:border-error-warm/30 mb-4">
      {/* Mac window controls */}
      <div className="flex items-center gap-2 px-4 py-3 bg-surface-container/50 border-b border-border-fallback-10/30">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
      </div>
      <Highlight theme={codeTheme} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-x-auto px-5 py-4 text-[13.5px] md:text-[14.5px] leading-relaxed`}
            style={{
              ...style,
              backgroundColor: "transparent",
              color: "var(--on-surface)",
              fontFamily: "var(--font-mono-code), ui-monospace, SFMono-Regular, Menlo, monospace",
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
        className="absolute top-2.5 right-3 p-2 rounded-lg bg-surface-container/80 hover:bg-surface-container border border-border-fallback-10/50 transition-colors opacity-0 group-hover:opacity-100 backdrop-blur-md"
        title="Copy to clipboard"
      >
        {copied ? (
          <Check size={16} className="text-[#27C93F]" />
        ) : (
          <CopyIcon size={16} className="text-primary/60 hover:text-primary" />
        )}
      </button>
    </div>
  );
};

/* ── On This Page sidebar ── */
const SECTIONS = [
  { id: "install", label: "Installation" },
  { id: "import-styles", label: "Import Styles" },
  { id: "peer-deps", label: "Peer Dependencies" },
  { id: "usage", label: "Basic Usage" },
];

const OnThisPageNav = ({ activeSection }) => (
  <nav className="hidden xl:block fixed right-0 top-0 w-50 h-screen pt-24 pr-6 pl-4 bg-surface">
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
                block py-2 pl-4 border-l-2 text-[13.5px] no-underline transition-all duration-300
                font-ui-body
                ${isActive
                  ? "border-error-warm text-error-warm font-semibold shadow-[inset_15px_0_20px_-15px_rgba(207,45,86,0.25)]"
                  : "border-border-fallback-10/40 text-on-surface-variant hover:text-primary hover:border-border-fallback-10/80"
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
      <main className="ml-0 md:ml-60 xl:mr-50 flex-1 min-w-0 min-h-screen">
        <div className="max-w-3xl min-w-0 mx-auto px-6 md:px-8 py-16 md:py-24">

          {/* ── Page Header ── */}
          <header className="mb-20 relative">
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-error-warm/10 blur-[100px] rounded-full pointer-events-none" />
            <span className="font-system-micro text-[11px] font-bold text-on-surface-variant/60 tracking-widest uppercase mb-4 block">
              Documentation
            </span>
            <h1 className="font-display-hero text-[48px] md:text-[64px] leading-[1.05] text-primary tracking-tight relative z-10">
              Installation
            </h1>
          </header>

          {/* ── Section 1: Install ── */}
          <section id="install" className="mb-14 scroll-mt-20">
            <h2 className="font-display-hero text-[32px] md:text-[40px] tracking-tight pb-4 mb-6 text-primary border-b border-border-fallback-10/40">
              Install the package
            </h2>
            <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px] mb-4">
              Install ComponentLab from npm:
            </p>
            <CodeBlock code="npm install component-labs" language="bash" />
          </section>

          {/* ── Section 2: Import Styles ── */}
          <section id="import-styles" className="mb-14 scroll-mt-20">
            <h2 className="font-display-hero text-[32px] md:text-[40px] tracking-tight pb-4 mb-6 text-primary border-b border-border-fallback-10/40">
              Import Styles
            </h2>
            <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px] mb-5">
              Import the styles globally in your application's entry file (e.g., <code>main.jsx</code> or <code>App.jsx</code>):
            </p>

            <div className="space-y-5">
              <div className="space-y-2">
                <CodeBlock
                  code={`import "component-labs/styles";`}
                  language="javascript"
                />
              </div>
            </div>
          </section>

          {/* ── Section 3: Peer Dependencies ── */}
          <section id="peer-deps" className="mb-14 scroll-mt-20">
            <h2 className="font-display-hero text-[32px] md:text-[40px] tracking-tight pb-4 mb-6 text-primary border-b border-border-fallback-10/40">
              Peer dependencies
            </h2>
            <p className="leading-relaxed text-primary/80 font-['Inter'] text-[16px] mb-4">
              Make sure these are installed in your project:
            </p>
            <div
              className="rounded-2xl border bg-surface-container/20 backdrop-blur-md border-border-fallback-10/50 overflow-hidden shadow-sm"
            >
              <div className="divide-y divide-border-fallback-10">
                {[
                  { name: "react", version: ">= 18" },
                  { name: "react-dom", version: ">= 18" },
                  { name: "motion", version: ">= 12" },
                  { name: "tailwindcss", version: ">= 3" },
                  { name: "lucide-react", version: ">= 0.300.0" },
                  { name: "react-icons", version: ">= 4.0.0" },
                ].map(({ name, version }) => (
                  <div
                    key={name}
                    className={`
                      flex items-center justify-between py-4 px-5 transition-colors duration-300
                      hover:bg-surface-container/40
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
            <h2 className="font-display-hero text-[32px] md:text-[40px] tracking-tight pb-4 mb-6 text-primary border-b border-border-fallback-10/40">
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
              rounded-2xl border p-8 md:p-12 text-center transition-all duration-500
              bg-surface-container/30 backdrop-blur-md border-border-fallback-10/50
              hover:bg-surface-container/50 hover:border-error-warm/30 hover:shadow-[0_0_40px_-10px_rgba(207,45,86,0.15)]
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
