import React, { Component, useState, useEffect, useRef, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
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
  return createPortal(
    <nav className="hidden xl:block fixed right-0 top-16 w-50 h-[calc(100vh-4rem)] pt-8 pr-6 pl-4 bg-surface z-40">
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
    </nav>,
    document.body
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
      className="fixed inset-0 z-[200] bg-surface/95 backdrop-blur-md flex items-center justify-center"
    >
      {/* Floating Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3.5 rounded-full bg-surface-container/50 hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-all duration-300 z-10 shadow-sm border border-border-fallback-10/50 hover:scale-[1.03]"
        aria-label="Close Fullscreen"
      >
        <Minimize2 size={20} strokeWidth={1.5} />
      </button>

      {/* Floating Rewatch Button */}
      {hasRewatch && (
        <button
          onClick={onReplay}
          className="absolute top-6 left-6 flex items-center gap-2.5 px-5 py-3 rounded-full bg-surface-container/50 hover:bg-surface-container-highest text-on-surface-variant hover:text-primary transition-all duration-300 z-10 font-ui-body text-sm font-medium shadow-sm border border-border-fallback-10/50 hover:scale-[1.03]"
        >
          <span className="material-symbols-outlined text-[18px]">replay</span>
          <span className="hidden sm:inline">Rewatch</span>
        </button>
      )}

      {/* Preview area */}
      <div className="w-full h-full max-h-[85vh] overflow-auto flex items-center justify-center p-4 sm:p-12 relative z-0">
        <div className="w-full max-h-full flex items-center justify-center">
          <PreviewErrorBoundary slug={slug}>
            {renderPreview ? renderPreview(replayKey) : (
              <div className="w-full flex items-center justify-center">
                {LiveComponent && <LiveComponent key={replayKey} />}
              </div>
            )}
          </PreviewErrorBoundary>
        </div>
      </div>

      {/* Floating Bottom Nav Pill */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 rounded-full bg-surface-container/80 backdrop-blur-md border border-border-fallback-10 shadow-lg z-10 transition-transform duration-300 hover:scale-[1.02]">
        <button
          onClick={onPrev}
          disabled={!hasPrev}
          className={`p-3 rounded-full flex items-center justify-center transition-all duration-300 ${
            hasPrev
              ? "hover:bg-surface-container-highest text-primary"
              : "text-on-surface-variant/30 cursor-not-allowed"
          }`}
          aria-label={hasPrev ? prevLabel : "No Previous"}
          title={hasPrev ? prevLabel : ""}
        >
          <ChevronLeft size={20} strokeWidth={1.5} />
        </button>

        <div className="flex flex-col items-center justify-center px-4 sm:px-6 min-w-[140px] sm:min-w-[200px] pointer-events-none border-x border-border-fallback-10/40">
          <span className="text-[9.5px] font-bold uppercase tracking-[0.15em] text-on-surface-variant/50 font-system-micro leading-none mb-1.5 truncate max-w-full">
            {data?.category}
          </span>
          <span className="text-sm font-semibold text-primary font-ui-body leading-none truncate max-w-full">
            {data?.title}
          </span>
        </div>

        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`p-3 rounded-full flex items-center justify-center transition-all duration-300 ${
            hasNext
              ? "hover:bg-surface-container-highest text-primary"
              : "text-on-surface-variant/30 cursor-not-allowed"
          }`}
          aria-label={hasNext ? nextLabel : "No Next"}
          title={hasNext ? nextLabel : ""}
        >
          <ChevronRight size={20} strokeWidth={1.5} />
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
          <div className="mb-12 md:mb-16" id="preview">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container/50 border border-border-fallback-10/50 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
              <span className="font-system-micro text-[11px] font-bold text-on-surface-variant/70 tracking-widest uppercase">
                {category}
              </span>
            </div>
            <h1 className="font-display-hero text-[40px] md:text-[56px] leading-[1.1] text-primary tracking-tight transition-colors max-w-5xl">
              {title}
            </h1>
            <p className="font-editorial-standard text-[18px] md:text-[20px] text-on-surface-variant/80 mt-5 max-w-3xl leading-relaxed">
              {description}
            </p>
          </div>

          {/* ── Preview / Code Tab Section ── */}
          <section className="mb-16 scroll-mt-24">
            {/* Tab Toggle */}
            {!data.hideCode && (
              <div className="flex items-center justify-between mb-6">
                <div className="flex p-1 bg-surface-container/60 rounded-xl border border-border-fallback-10/50 backdrop-blur-sm">
                  <button
                    onClick={() => setActiveTab("component")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm font-ui-body ${activeTab === "component"
                        ? "bg-surface shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-primary"
                        : "text-on-surface-variant hover:text-primary hover:bg-surface-container/50"
                      }`}
                  >
                    <Eye size={16} strokeWidth={1.5} />
                    <span className="hidden sm:inline">Preview</span>
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm font-ui-body ${activeTab === "code"
                        ? "bg-surface shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-primary"
                        : "text-on-surface-variant hover:text-primary hover:bg-surface-container/50"
                      }`}
                  >
                    <Code size={16} strokeWidth={1.5} />
                    <span className="hidden sm:inline">Code</span>
                  </button>
                </div>
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
                  className={`relative group ${previewContainerClass} border-border-fallback-10/50 bg-surface-container/30`}
                >
                  {/* Floating Action Buttons inside preview */}
                  {!data.hideCode && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      {previewData.hasRewatch && (
                        <button
                          onClick={() => setReplayKey((v) => v + 1)}
                          className="flex items-center justify-center p-2.5 bg-surface/90 hover:bg-surface text-on-surface-variant hover:text-primary rounded-xl backdrop-blur-md shadow-sm border border-border-fallback-10/50 transition-all duration-200"
                          title="Rewatch"
                        >
                          <span className="material-symbols-outlined text-[18px]">replay</span>
                        </button>
                      )}
                      <button
                        onClick={() => { setFullscreenSlug(slug); setIsFullscreen(true); }}
                        className="flex items-center justify-center p-2.5 bg-surface/90 hover:bg-surface text-on-surface-variant hover:text-primary rounded-xl backdrop-blur-md shadow-sm border border-border-fallback-10/50 transition-all duration-200"
                        title="Fullscreen"
                      >
                        <Maximize2 size={18} strokeWidth={1.5} />
                      </button>
                    </div>
                  )}

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
                  className="w-full"
                >
                  {renderCode(codeSnippet)}
                </motion.div>
              )}
            </AnimatePresence>
          </section>

          {/* ── Usage Section ── */}
          {!data.hideCode && (
            <section id="usage" className="mb-16 scroll-mt-24">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-surface-container/50 border border-border-fallback-10/50">
                    <Code size={18} className="text-on-surface-variant/80" strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl font-semibold text-primary font-section-heading tracking-tight">
                    Usage
                  </h2>
                </div>
                {usage && (
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-2 text-sm font-medium text-on-surface-variant/70 hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-container/50 border border-transparent hover:border-border-fallback-10/50"
                  >
                    <Copy size={16} strokeWidth={1.5} />
                    {copyFeedback ? "Copied!" : "Copy Snippet"}
                  </button>
                )}
              </div>
              {usage ? (
                renderCode(codeSnippet)
              ) : (
                <div className="rounded-xl border border-border-fallback-10/50 bg-surface-container/30 p-6 text-[15px] text-on-surface-variant italic text-center">
                  This component is not yet published. Usage documentation will be available once it's added to the npm package.
                </div>
              )}
            </section>
          )}

          {/* ── Props Section ── */}
          {!data.hideCode && (
            <section id="props" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-surface-container/50 border border-border-fallback-10/50">
                  <Settings size={18} className="text-on-surface-variant/80" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-semibold text-primary font-section-heading tracking-tight">
                  Available Props
                </h2>
              </div>

              {componentProps && componentProps.length > 0 ? (
                <div className="border-t border-border-fallback-10/50">
                  {/* Table Header */}
                  <div className="hidden md:grid md:grid-cols-[180px_140px_140px_1fr] md:gap-4 md:py-4 border-b border-border-fallback-10/50 text-[11px] font-bold text-on-surface-variant/50 uppercase tracking-[0.15em] font-system-micro">
                    <div>Prop</div>
                    <div>Type</div>
                    <div>Default</div>
                    <div>Description</div>
                  </div>

                  {/* Table Rows */}
                  <div className="divide-y divide-border-fallback-10/30">
                    {componentProps.map((prop, idx) => (
                      <div
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-[180px_140px_140px_1fr] md:gap-4 gap-3 py-5 hover:bg-surface-container/10 transition-colors items-start md:items-center"
                      >
                        {/* Column 1: Prop Name */}
                        <div className="font-mono text-[14px] text-primary font-semibold break-all">
                          {prop.name}
                        </div>

                        {/* Column 2: Type */}
                        <div className="flex md:block items-center gap-2">
                          <span className="md:hidden text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-wider">Type:</span>
                          <code className="text-[12px] text-secondary font-mono">
                            {prop.type}
                          </code>
                        </div>

                        {/* Column 3: Default */}
                        <div className="flex md:block items-center gap-2">
                          <span className="md:hidden text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-wider">Default:</span>
                          {prop.default ? (
                            <code className="text-[12px] font-mono text-on-surface-variant/70">
                              {prop.default}
                            </code>
                          ) : (
                            <span className="text-on-surface-variant/30 font-mono text-[13px]">—</span>
                          )}
                        </div>

                        {/* Column 4: Description */}
                        <div className="text-[14px] text-on-surface-variant/90 leading-relaxed md:col-span-1 col-span-full pt-1 md:pt-0">
                          {prop.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="rounded-xl border border-border-fallback-10/50 bg-surface-container/30 p-6 text-[15px] text-on-surface-variant italic text-center">
                  No public props documented for this component yet.
                </div>
              )}
            </section>
          )}

          {/* ── Features Section (if available) ── */}
          {features && features.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-surface-container/50 border border-border-fallback-10/50">
                  <AlertCircle size={18} className="text-error-warm" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-semibold text-primary font-section-heading tracking-tight">
                  Notes
                </h2>
              </div>
              <div className="rounded-xl border border-border-fallback-10/50 bg-surface-container/30 p-6">
                <ul className="space-y-4 text-[15px] md:text-[16px] text-on-surface-variant/90 leading-relaxed">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <span className="mt-2 shrink-0 block w-1.5 h-1.5 rounded-full bg-error-warm"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* ── Prev / Next Navigation ── */}
          <section className="mt-16 mb-8 pt-10 border-t border-border-fallback-10/40">
            <div className="flex flex-col sm:flex-row items-stretch justify-between gap-8">
              {/* Previous */}
              {prevComponent ? (
                <Link
                  to={prevComponent.href}
                  className="group flex flex-col gap-2.5 no-underline items-start"
                >
                  <span className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.15em] text-on-surface-variant/50 font-system-micro transition-colors group-hover:text-primary">
                    <ArrowLeft size={14} strokeWidth={2} />
                    Previous
                  </span>
                  <span className="text-xl sm:text-2xl font-medium text-primary font-section-heading group-hover:underline underline-offset-[6px] decoration-border-fallback-10 transition-all">
                    {prevComponent.label}
                  </span>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              {/* Next */}
              {nextComponent ? (
                <Link
                  to={nextComponent.href}
                  className="group flex flex-col gap-2.5 no-underline items-end text-right"
                >
                  <span className="flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.15em] text-on-surface-variant/50 font-system-micro transition-colors group-hover:text-primary">
                    Next
                    <ArrowRight size={14} strokeWidth={2} />
                  </span>
                  <span className="text-xl sm:text-2xl font-medium text-primary font-section-heading group-hover:underline underline-offset-[6px] decoration-border-fallback-10 transition-all">
                    {nextComponent.label}
                  </span>
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
