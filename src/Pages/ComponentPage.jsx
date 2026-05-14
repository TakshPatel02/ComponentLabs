import React, { Component, useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Highlight, themes } from "prism-react-renderer";
import { AnimatePresence, motion } from "motion/react";
import { Eye, Code, Settings, Copy, AlertCircle } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import DocsSidebar from "../components/DocsSidebar";
import { componentsData } from "../config/componentsData";
import { componentPreviews } from "../config/componentPreviews";

// ── Error boundary for live component preview
class PreviewErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.slug !== this.props.slug) {
      this.setState({ hasError: false, error: null });
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-3 text-center px-6">
          <span className="text-error-warm font-system-micro text-system-micro font-semibold uppercase tracking-wider">
            Preview Unavailable
          </span>
          <p className="font-editorial-standard text-[15px] text-on-surface-variant max-w-md leading-relaxed">
            This component requires props to render. Check the Usage section below for how to use it.
          </p>
          <code className="font-mono-code text-mono-code text-on-surface-variant/60 mt-1">
            {this.state.error?.message}
          </code>
        </div>
      );
    }
    return this.props.children;
  }
}

// ── Anchor sections for the right sidebar
const SECTIONS = [
  { id: "preview", label: "Preview" },
  { id: "usage", label: "Usage" },
  { id: "props", label: "Props" },
];

// ── Right sidebar: "On This Page" anchor nav
const OnThisPageNav = ({ activeSection }) => {
  return (
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
};

// ── Main page component
const ComponentPage = () => {
  const { slug } = useParams();
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const codeTheme = isDarkTheme ? themes.vsDark : themes.vsLight;

  const data = componentsData[slug];
  const previewData = componentPreviews[slug] || {};

  // Tab state
  const [activeTab, setActiveTab] = useState("component");
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [replayKey, setReplayKey] = useState(0);

  // Scroll-spy for right sidebar
  const [activeSection, setActiveSection] = useState("preview");
  const observerRef = useRef(null);

  useEffect(() => {
    setActiveTab("component");
  }, [slug]);

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
  }, [setupObserver, slug]);

  // 404 for unknown slugs
  if (!data) {
    return (
      <div className="flex min-h-screen bg-surface">
        <DocsSidebar />
        <main className="ml-0 md:ml-[240px] flex-1 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-section-heading text-4xl text-primary mb-3">
              Component Not Found
            </h1>
            <p className="font-editorial-standard text-on-surface-variant text-base">
              No component found for slug: <code className="font-mono-code text-error-warm">{slug}</code>
            </p>
          </div>
        </main>
      </div>
    );
  }

  const {
    title,
    description,
    category,
    component: LiveComponent,
    usage,
    props: componentProps,
    features,
  } = data;

  const {
    renderPreview,
    previewContainerClass = "w-full bg-cursor-cream/50 min-h-96 rounded-xl oklab-border flex flex-col items-stretch justify-center overflow-hidden p-6 md:p-8 mt-6 transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]",
  } = previewData;

  const codeSnippet = usage || `// Usage code not yet available for ${title}`;

  const handleCopyCode = () => {
    if (usage) {
      navigator.clipboard.writeText(usage);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    }
  };

  // Prism render helper — extracts key to avoid React spread warning
  const renderCode = (code) => (
    <Highlight theme={codeTheme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} rounded-xl border oklab-border overflow-x-auto bg-surface-container-highest p-4 md:p-6 text-sm md:text-base font-mono shadow-[0_10px_40px_-24px_rgba(17,16,10,0.35)]`}
          style={{
            ...style,
            backgroundColor: "var(--surface-container-highest)",
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
  );

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Left sidebar */}
      <DocsSidebar />

      {/* Main content */}
      <main className="ml-0 md:ml-[240px] xl:mr-[200px] flex-1 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 md:py-24">

          {/* ── Header ── */}
          <div className="mb-10" id="preview">
            <span className="font-system-micro text-system-micro text-on-surface-variant/60 tracking-widest uppercase mb-2 block">
              {category}
            </span>
            <h1 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary tracking-tight transition-colors">
              {title}
            </h1>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              {description}
            </p>
          </div>

          {/* ── Preview / Code Tab Section ── */}
          <section className="mb-12 scroll-mt-20">
            {/* Tab Toggle — matches DocumentationPanel style */}
            <div className="flex gap-3 oklab-border-b pb-4">
              <button
                onClick={() => setActiveTab("component")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  activeTab === "component"
                    ? "bg-primary text-surface"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container/80"
                }`}
              >
                <Eye size={18} />
                Component View
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  activeTab === "code"
                    ? "bg-primary text-surface"
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container/80"
                }`}
              >
                <Code size={18} />
                Code
              </button>
              
              {activeTab === "component" && (
                <button
                  onClick={() => setReplayKey((v) => v + 1)}
                  className="ml-auto flex items-center justify-center gap-2 bg-primary text-cursor-cream hover:bg-error-warm px-5 py-2 rounded-lg text-sm font-medium font-['Space_Grotesk'] transition-all active:scale-[0.98] shadow-sm hover:shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    replay
                  </span>
                  Rewatch
                </button>
              )}
            </div>

            {/* Content — animated transition */}
            <AnimatePresence mode="wait">
              {activeTab === "component" ? (
                <motion.div
                  key="component"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={previewContainerClass}
                >
                  <PreviewErrorBoundary slug={slug}>
                    {renderPreview ? renderPreview(replayKey) : (
                      <div className="flex items-center justify-center w-full">
                        <LiveComponent key={replayKey} />
                      </div>
                    )}
                  </PreviewErrorBoundary>
                </motion.div>
              ) : (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full mt-6"
                >
                  {renderCode(codeSnippet)}
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* ── Usage Section ── */}
          <section id="usage" className="mb-12 scroll-mt-20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Code size={20} className="text-on-surface-variant/60" />
                <h2 className="text-xl md:text-2xl font-bold text-primary font-section-heading tracking-tight">
                  Usage
                </h2>
              </div>
              {usage && (
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-2 text-xs md:text-sm font-medium text-on-surface-variant/60 hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-container/50"
                >
                  <Copy size={16} />
                  {copyFeedback ? "Copied!" : "Copy Snippet"}
                </button>
              )}
            </div>
            {usage ? (
              renderCode(usage)
            ) : (
              <div className="rounded-xl border oklab-border bg-surface-container/60 p-6 text-[15px] text-on-surface-variant italic text-center">
                This component is not yet published. Usage documentation will be available once it's added to the npm package.
              </div>
            )}
          </section>

          {/* ── Props Section ── */}
          <section id="props" className="mb-12 scroll-mt-20">
            <div className="flex items-center gap-3 mb-4">
              <Settings size={20} className="text-on-surface-variant/60" />
              <h2 className="text-xl md:text-2xl font-bold text-primary font-section-heading tracking-tight">
                Available Props
              </h2>
            </div>

            {componentProps && componentProps.length > 0 ? (
              <div className="space-y-3">
                {componentProps.map((prop, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border oklab-border bg-surface-container/60 p-4 hover:bg-surface-container/80 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <div className="font-mono text-[14px] md:text-[15px] text-primary font-semibold">
                          {prop.name}
                        </div>
                        <div className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest mt-1 mb-2">
                          {prop.type}
                        </div>
                      </div>
                      {prop.default && (
                        <div className="text-right">
                          <div className="text-xs font-bold text-on-surface-variant/70 uppercase tracking-widest">
                            DEFAULT
                          </div>
                          <div className="font-mono text-[13px] text-on-surface-variant mt-1">
                            {prop.default}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-[15px] md:text-[16px] text-on-surface-variant leading-relaxed">
                      {prop.description}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-xl border oklab-border bg-surface-container/60 p-6 text-[15px] text-on-surface-variant italic text-center">
                No public props documented for this component yet.
              </div>
            )}
          </section>

          {/* ── Features Section (if available) ── */}
          {features && features.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={20} className="text-error-warm" />
                <h2 className="text-xl md:text-2xl font-bold text-primary font-section-heading tracking-tight">
                  Notes
                </h2>
              </div>
              <div className="rounded-xl border oklab-border bg-surface-container/60 p-5">
                <ul className="space-y-3 text-[15px] md:text-[16px] text-on-surface-variant leading-relaxed">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-error-warm/60 mt-1 shrink-0">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Right sidebar */}
      <OnThisPageNav activeSection={activeSection} />
    </div>
  );
};

export default ComponentPage;
