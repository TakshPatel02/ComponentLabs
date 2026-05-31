import React, { Component, useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Highlight, themes } from "prism-react-renderer";
import { AnimatePresence, motion } from "motion/react";
import { Eye, Code, Settings, Copy, AlertCircle, Maximize2, Minimize2, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import DocsSidebar from "../components/DocsSidebar";
import { componentsData } from "../config/componentsData";
import { componentPreviews } from "../config/componentPreviews";
import { navConfig } from "../config/nav";

// ── Flatten navConfig into ordered list of component slugs for prev/next navigation
const getComponentSlugs = () => {
  const slugs = [];
  navConfig.forEach((section) => {
    if (section.section === "DOCS") return; // skip docs pages
    section.items.forEach((item) => {
      // Extract slug from href — it's the last segment
      const parts = item.href.split("/");
      const slug = parts[parts.length - 1];
      if (componentsData[slug]) {
        slugs.push({ slug, label: item.label, href: item.href, section: section.section });
      }
    });
  });
  return slugs;
};

const allComponentSlugs = getComponentSlugs();

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
        <div className="flex flex-col items-center justify-center min-h-75 gap-3 text-center px-6">
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
const OnThisPageNav = ({ activeSection, sections }) => {
  return (
    <nav className="hidden xl:block fixed right-0 top-0 w-50 h-screen pt-24 pr-6 pl-4 bg-surface">
      <div className="font-system-micro text-[10.5px] font-semibold uppercase tracking-widest mb-4 select-none text-on-surface-variant/60">
        On This Page
      </div>
      <ul className="list-none m-0 p-0 flex flex-col gap-0.5">
        {sections.map((s) => {
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

// ── Fullscreen Preview Overlay
const FullscreenPreview = ({ slug, onClose, onNext, onPrev, hasNext, hasPrev, nextLabel, prevLabel, replayKey, onReplay, hasRewatch }) => {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNext) onNext();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  const data = componentsData[slug];
  const previewData = componentPreviews[slug] || {};
  const { renderPreview } = previewData;
  const LiveComponent = data?.component;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-200 bg-surface flex flex-col"
    >
      {/* Top bar */}
      <div className="relative flex items-center justify-between px-4 sm:px-6 py-3 border-b oklab-border bg-surface-container/50 backdrop-blur-sm shrink-0">
        <div className="flex items-center gap-3 z-10">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container hover:bg-surface-container-highest text-primary transition-all duration-200 font-ui-body text-sm font-medium"
          >
            <Minimize2 size={16} />
            <span className="hidden sm:inline">Exit Fullscreen</span>
          </button>
          <span className="hidden sm:inline text-[10.5px] font-semibold uppercase tracking-widest text-on-surface-variant/50 font-system-micro">
            {data?.category}
          </span>
        </div>

        <h3 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-section-heading text-base sm:text-lg text-primary tracking-tight truncate max-w-50 sm:max-w-100 pointer-events-none">
          {data?.title}
        </h3>

        <div className="flex items-center gap-2 z-10">
          {hasRewatch && (
            <button
              onClick={onReplay}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-cursor-cream hover:bg-error-warm text-sm font-medium font-ui-body transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[16px]">replay</span>
              <span className="hidden sm:inline">Rewatch</span>
            </button>
          )}
        </div>
      </div>

      {/* Preview area */}
      <div className="flex-1 overflow-auto relative flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-h-full">
          <PreviewErrorBoundary slug={slug}>
            {renderPreview ? renderPreview(replayKey) : (
              <div className="w-full flex items-center justify-center">
                {LiveComponent && <LiveComponent key={replayKey} />}
              </div>
            )}
          </PreviewErrorBoundary>
        </div>
      </div>

      {/* Bottom nav bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-t oklab-border bg-surface-container/50 backdrop-blur-sm shrink-0">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium font-ui-body transition-all duration-200 ${
            hasPrev
              ? "bg-surface-container hover:bg-surface-container-highest text-primary"
              : "bg-surface-container/40 text-on-surface-variant/30 cursor-not-allowed"
          }`}
        >
          <ChevronLeft size={16} />
          <span className="hidden sm:inline truncate max-w-35">{hasPrev ? prevLabel : "No Previous"}</span>
          <span className="sm:hidden">Prev</span>
        </button>

        <span className="text-[10.5px] font-semibold uppercase tracking-widest text-on-surface-variant/40 font-system-micro hidden md:block">
          ← → Navigate · Esc Close
        </span>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium font-ui-body transition-all duration-200 ${
            hasNext
              ? "bg-surface-container hover:bg-surface-container-highest text-primary"
              : "bg-surface-container/40 text-on-surface-variant/30 cursor-not-allowed"
          }`}
        >
          <span className="hidden sm:inline truncate max-w-35">{hasNext ? nextLabel : "No Next"}</span>
          <span className="sm:hidden">Next</span>
          <ChevronRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

// ── Main page component
const ComponentPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const codeTheme = isDarkTheme ? themes.vsDark : themes.vsLight;

  const data = componentsData[slug];
  const previewData = componentPreviews[slug] || {};

  // Tab state
  const [activeTab, setActiveTab] = useState("component");
  const [copyFeedback, setCopyFeedback] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenSlug, setFullscreenSlug] = useState(slug);
  const [fullscreenReplayKey, setFullscreenReplayKey] = useState(0);

  // Scroll-spy for right sidebar
  const [activeSection, setActiveSection] = useState("preview");

  // Prev/Next navigation
  const currentIndex = useMemo(() => allComponentSlugs.findIndex((c) => c.slug === slug), [slug]);
  const prevComponent = currentIndex > 0 ? allComponentSlugs[currentIndex - 1] : null;
  const nextComponent = currentIndex < allComponentSlugs.length - 1 ? allComponentSlugs[currentIndex + 1] : null;

  // Fullscreen prev/next
  const fullscreenIndex = useMemo(() => allComponentSlugs.findIndex((c) => c.slug === fullscreenSlug), [fullscreenSlug]);
  const fsPrev = fullscreenIndex > 0 ? allComponentSlugs[fullscreenIndex - 1] : null;
  const fsNext = fullscreenIndex < allComponentSlugs.length - 1 ? allComponentSlugs[fullscreenIndex + 1] : null;

  // Sync fullscreen slug when page slug changes
  useEffect(() => {
    setFullscreenSlug(slug);
    setFullscreenReplayKey(0);
  }, [slug]);
  const observerRef = useRef(null);

  useEffect(() => {
    setActiveTab("component");
  }, [slug]);

  const sections = data?.hideCode
    ? [{ id: "preview", label: "Preview" }]
    : SECTIONS;

  const setupObserver = useCallback((sectionsList) => {
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

    sectionsList.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cleanup = setupObserver(sections);
    return cleanup;
  }, [setupObserver, slug, sections]);

  // 404 for unknown slugs
  if (!data) {
    return (
      <div className="flex min-h-screen bg-surface">
        <DocsSidebar />
        <main className="ml-0 md:ml-60 flex-1 min-h-screen flex items-center justify-center">
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
    previewContainerClass = "w-full bg-cursor-cream/50 min-h-96 rounded-xl oklab-border flex flex-col items-stretch justify-center overflow-hidden p-6 md:p-8 mt-6 transition-all duration-500 ",
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
      <main className="ml-0 md:ml-60 xl:mr-50 flex-1 min-w-0 min-h-screen">
        <div className="max-w-7xl min-w-0 mx-auto px-4 sm:px-8 py-16 md:py-24">

          {/* ── Header ── */}
          <div className="mb-10" id="preview">
            <span className="font-system-micro text-system-micro text-on-surface-variant/60 tracking-widest uppercase mb-2 block">
              {category}
            </span>
            <h1 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary tracking-tight transition-colors">
              {title}
            </h1>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-6xl">
              {description}
            </p>
          </div>

          {/* ── Preview / Code Tab Section ── */}
          <section className="mb-12 scroll-mt-20">
            {/* Tab Toggle — matches DocumentationPanel style */}
            {!data.hideCode && (
              <div className="flex items-center gap-2 sm:gap-3 oklab-border-b pb-4">
                <button
                  onClick={() => setActiveTab("component")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${activeTab === "component"
                      ? "bg-primary text-surface"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container/80"
                    }`}
                >
                  <Eye size={16} />
                  <span className="hidden sm:inline">Component View</span>
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm ${activeTab === "code"
                      ? "bg-primary text-surface"
                      : "bg-surface-container text-on-surface-variant hover:bg-surface-container/80"
                    }`}
                >
                  <Code size={16} />
                  <span className="hidden sm:inline">Code</span>
                </button>

                {activeTab === "component" && previewData.hasRewatch && (
                  <button
                    onClick={() => setReplayKey((v) => v + 1)}
                    className="ml-auto flex items-center justify-center gap-1.5 sm:gap-2 bg-primary text-cursor-cream hover:bg-error-warm px-3 sm:px-5 py-2 rounded-lg text-sm font-medium font-['Space_Grotesk'] transition-all active:scale-[0.98] shadow-sm hover:shadow-md"
                  >
                    <span className="material-symbols-outlined text-[16px] sm:text-[18px]">
                      replay
                    </span>
                    <span className="hidden sm:inline">Rewatch</span>
                  </button>
                )}

                {/* Fullscreen button */}
                {activeTab === "component" && (
                  <button
                    onClick={() => { setFullscreenSlug(slug); setIsFullscreen(true); }}
                    className={`${previewData.hasRewatch ? '' : 'ml-auto'} flex items-center justify-center gap-1.5 sm:gap-2 bg-surface-container hover:bg-surface-container-highest text-primary px-3 sm:px-4 py-2 rounded-lg text-sm font-medium font-['Space_Grotesk'] transition-all active:scale-[0.98]`}
                  >
                    <Maximize2 size={16} />
                    <span className="hidden sm:inline">Fullscreen</span>
                  </button>
                )}
              </div>
            )}

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
          {!data.hideCode && (
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
                renderCode(codeSnippet)
              ) : (
                <div className="rounded-xl border oklab-border bg-surface-container/60 p-6 text-[15px] text-on-surface-variant italic text-center">
                  This component is not yet published. Usage documentation will be available once it's added to the npm package.
                </div>
              )}
            </section>
          )}

          {/* ── Props Section ── */}
          {!data.hideCode && (
            <section id="props" className="mb-12 scroll-mt-20">
              <div className="flex items-center gap-3 mb-4">
                <Settings size={20} className="text-on-surface-variant/60" />
                <h2 className="text-xl md:text-2xl font-bold text-primary font-section-heading tracking-tight">
                  Available Props
                </h2>
              </div>

              {componentProps && componentProps.length > 0 ? (
                <div className="border border-border-fallback-10 rounded-2xl bg-surface-container/20 overflow-hidden shadow-sm">
                  {/* Table Header (hidden on mobile, grid on desktop) */}
                  <div className="hidden md:grid md:grid-cols-[180px_120px_130px_1fr] md:gap-4 md:px-6 md:py-3.5 border-b border-border-fallback-10 bg-surface-container/45 text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-[0.15em] font-section-heading">
                    <div>Prop</div>
                    <div>Type</div>
                    <div>Default</div>
                    <div>Description</div>
                  </div>

                  {/* Table Rows */}
                  <div className="divide-y divide-border-fallback-10">
                    {componentProps.map((prop, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-[180px_120px_130px_1fr] md:gap-4 gap-2 px-6 py-4.5 hover:bg-surface-container/30 transition-colors items-start md:items-center text-left"
                      >
                        {/* Column 1: Prop Name */}
                        <div className="font-mono text-[14px] md:text-[15px] text-primary font-semibold break-all leading-tight">
                          {prop.name}
                        </div>

                        {/* Column 2: Type */}
                        <div className="flex md:block items-center gap-2">
                          <span className="md:hidden text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-wider">Type:</span>
                          <code className="text-[11px] font-semibold text-secondary uppercase tracking-widest px-2 py-0.5 rounded bg-surface-container-highest border border-border-fallback-10 font-mono w-fit block leading-none">
                            {prop.type}
                          </code>
                        </div>

                        {/* Column 3: Default */}
                        <div className="flex md:block items-center gap-2">
                          <span className="md:hidden text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-wider">Default:</span>
                          {prop.default ? (
                            <code className="text-[12px] font-mono text-on-surface-variant/80 bg-surface-container/50 border border-border-fallback-10/50 px-1.5 py-0.5 rounded leading-none w-fit block">
                              {prop.default}
                            </code>
                          ) : (
                            <span className="text-on-surface-variant/30 font-mono text-[13px]">—</span>
                          )}
                        </div>

                        {/* Column 4: Description */}
                        <div className="text-[14px] sm:text-[15px] text-on-surface-variant leading-relaxed md:col-span-1 col-span-full pt-1 md:pt-0">
                          {prop.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border oklab-border bg-surface-container/60 p-6 text-[15px] text-on-surface-variant italic text-center">
                  No public props documented for this component yet.
                </div>
              )}
            </section>
          )}

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

          {/* ── Prev / Next Navigation ── */}
          <section className="mt-8 mb-4">
            <div className="flex items-stretch gap-4">
              {/* Previous */}
              {prevComponent ? (
                <Link
                  to={prevComponent.href}
                  className="flex-1 group flex items-center gap-4 p-5 rounded-2xl border oklab-border bg-surface-container/30 hover:bg-surface-container/60 transition-all duration-300 no-underline"
                >
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                    <ArrowLeft size={18} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[10.5px] font-semibold uppercase tracking-widest text-on-surface-variant/50 font-system-micro mb-0.5">Previous</span>
                    <span className="text-sm sm:text-base font-medium text-primary font-ui-body truncate">{prevComponent.label}</span>
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {/* Next */}
              {nextComponent ? (
                <Link
                  to={nextComponent.href}
                  className="flex-1 group flex items-center justify-end gap-4 p-5 rounded-2xl border oklab-border bg-surface-container/30 hover:bg-surface-container/60 transition-all duration-300 no-underline text-right"
                >
                  <div className="flex flex-col min-w-0 items-end">
                    <span className="text-[10.5px] font-semibold uppercase tracking-widest text-on-surface-variant/50 font-system-micro mb-0.5">Next</span>
                    <span className="text-sm sm:text-base font-medium text-primary font-ui-body truncate">{nextComponent.label}</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container-highest flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-surface transition-all duration-300">
                    <ArrowRight size={18} />
                  </div>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </section>
        </div>
      </main>

      {/* Right sidebar */}
      <OnThisPageNav activeSection={activeSection} sections={sections} />

      {/* Fullscreen overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <FullscreenPreview
            slug={fullscreenSlug}
            replayKey={fullscreenReplayKey}
            hasRewatch={componentPreviews[fullscreenSlug]?.hasRewatch}
            onReplay={() => setFullscreenReplayKey((v) => v + 1)}
            onClose={() => setIsFullscreen(false)}
            hasNext={!!fsNext}
            hasPrev={!!fsPrev}
            nextLabel={fsNext?.label}
            prevLabel={fsPrev?.label}
            onNext={() => {
              if (fsNext) {
                setFullscreenSlug(fsNext.slug);
                setFullscreenReplayKey(0);
                navigate(fsNext.href);
              }
            }}
            onPrev={() => {
              if (fsPrev) {
                setFullscreenSlug(fsPrev.slug);
                setFullscreenReplayKey(0);
                navigate(fsPrev.href);
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComponentPage;
