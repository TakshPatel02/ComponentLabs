import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Plus,
  Eye,
  Code,
  Settings,
  Zap,
  AlertCircle,
  Copy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";
import { useTheme } from "../context/ThemeContext";

export const DocumentationPanel = ({
  componentName,
  importPath,
  defaultUsage,
  props,
  examples,
  notes,
  componentViewClassName = "w-full bg-cursor-cream/50 min-h-96 rounded-xl oklab-border flex flex-col items-stretch justify-center overflow-hidden p-8 transition-all duration-500 ",
  children, // component view
}) => {
  const [activeTab, setActiveTab] = useState("component");
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);
  const [currentExampleIdx, setCurrentExampleIdx] = useState(0);
  const [copyFeedback, setCopyFeedback] = useState(false);
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const codeTheme = isDarkTheme ? themes.vsDark : themes.vsLight;

  const codeSnippet = `import { ${componentName} } from "${importPath}";

// Default usage
${defaultUsage}`;

  const propsContent =
    props && props.length > 0 ? (
      <div className="space-y-3">
        {props.map((prop, idx) => (
          <div key={idx} className="border-l-2 border-secondary pl-4">
            <div className="font-mono text-[15px] md:text-[16px] text-primary">
              {prop.name}: <span className="text-secondary">{prop.type}</span>
            </div>
            <div className="text-[15px] md:text-[16px] text-on-surface-variant mt-1">
              {prop.description}
            </div>
            {prop.default && (
              <div className="text-[13px] md:text-sm text-secondary mt-1">
                Default:{" "}
                <code className="bg-surface-container px-2 py-1 rounded">
                  {prop.default}
                </code>
              </div>
            )}
          </div>
        ))}
      </div>
    ) : null;

  const renderExample = (code) => (
    <Highlight theme={codeTheme} code={code} language="jsx">
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
  );

  const examplesContent =
    examples && examples.length > 0 ? (
      <div className="space-y-4">
        {examples.map((example, idx) => (
          <div key={idx}>
            <h4 className="font-semibold text-primary mb-2 text-[15px] md:text-[16px]">
              {example.title}
            </h4>
            {renderExample(example.code)}
          </div>
        ))}
      </div>
    ) : null;

  const notesContent = notes ? (
    <ul className="list-disc list-inside space-y-2 text-on-surface-variant text-[15px] md:text-[16px]">
      {notes.map((note, idx) => (
        <li key={idx} className="leading-relaxed">
          {note}
        </li>
      ))}
    </ul>
  ) : null;

  const currentExample =
    examples && examples.length > 0 ? examples[currentExampleIdx] : null;

  const handleCopySnippet = () => {
    if (currentExample) {
      navigator.clipboard.writeText(currentExample.code);
      setCopyFeedback(true);
      setTimeout(() => setCopyFeedback(false), 2000);
    }
  };

  const nextExample = () => {
    if (examples && examples.length > 0) {
      setCurrentExampleIdx((prev) => (prev + 1) % examples.length);
    }
  };

  const prevExample = () => {
    if (examples && examples.length > 0) {
      setCurrentExampleIdx((prev) =>
        prev === 0 ? examples.length - 1 : prev - 1,
      );
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Tab Toggle */}
      <div className="flex gap-3 oklab-border-b pb-4">
        <button
          onClick={() => setActiveTab("component")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${activeTab === "component"
              ? "bg-primary text-surface"
              : "bg-surface-container text-on-surface-variant hover:bg-surface-container/80"
            }`}
        >
          <Eye size={18} />
          Component View
        </button>
        <button
          onClick={() => setActiveTab("code")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${activeTab === "code"
              ? "bg-primary text-surface"
              : "bg-surface-container text-on-surface-variant hover:bg-surface-container/80"
            }`}
        >
          <Code size={18} />
          Code
        </button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "component" ? (
          <motion.div
            key="component"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={componentViewClassName}
          >
            {children}
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
            <Highlight theme={codeTheme} code={codeSnippet} language="jsx">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`${className} rounded-xl border oklab-border overflow-x-auto bg-surface-container-highest p-6 text-sm md:text-base font-mono shadow-[0_10px_40px_-24px_rgba(17,16,10,0.35)]`}
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* How to Use Section */}
      <motion.div
        initial={false}
        className={`border oklab-border rounded-xl overflow-hidden transition-colors duration-300 ${isInstructionsOpen
            ? "bg-surface-300"
            : "bg-surface hover:bg-surface-container"
          }`}
      >
        <button
          onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
          className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
        >
          <div className="flex-1">
            <span className="block text-xl md:text-2xl font-bold text-primary font-['Space_Grotesk'] tracking-tight">
              How to Use
            </span>
            <p className="text-sm md:text-[15px] leading-relaxed text-on-surface-variant mt-2">
              Import, explore the props, and copy ready-to-use examples to
              integrate this component into your project.
            </p>
          </div>
          <motion.div
            animate={{ rotate: isInstructionsOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "backOut" }}
            className="shrink-0 ml-4 h-8 w-8 rounded-full bg-surface border oklab-border flex items-center justify-center text-secondary"
          >
            <Plus size={18} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isInstructionsOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 pb-8 border-t oklab-border pt-8 space-y-8">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="space-y-8"
                >
                  {/* Import Section */}
                  <section>
                    <div className="flex items-center gap-3 mb-4">
                      <Code size={20} className="text-secondary" />
                      <h3 className="text-base font-bold text-primary font-['Space_Grotesk'] tracking-tight uppercase">
                        Import
                      </h3>
                    </div>
                    <Highlight
                      theme={codeTheme}
                      code={`import { ${componentName} } from "${importPath}";`}
                      language="jsx"
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          className={`${className} rounded-xl border oklab-border overflow-x-auto bg-surface-container-highest p-4 text-sm md:text-base font-mono shadow-[0_10px_40px_-24px_rgba(17,16,10,0.35)]`}
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
                                <span
                                  key={key}
                                  {...getTokenProps({ token, key })}
                                />
                              ))}
                            </div>
                          ))}
                        </pre>
                      )}
                    </Highlight>
                  </section>

                  {/* Props Section */}
                  {propsContent && (
                    <section>
                      <div className="flex items-center gap-3 mb-4">
                        <Settings size={20} className="text-secondary" />
                        <h3 className="text-base font-bold text-primary font-['Space_Grotesk'] tracking-tight uppercase">
                          Available Props
                        </h3>
                      </div>
                      <div className="space-y-3">
                        {props &&
                          props.map((prop, idx) => (
                            <div
                              key={idx}
                              className="rounded-xl border oklab-border bg-surface-container/60 p-4 hover:bg-surface-container/80 transition-colors"
                            >
                              <div className="flex items-start justify-between gap-4 mb-2">
                                <div>
                                  <div className="font-mono text-[14px] md:text-[15px] text-primary font-semibold">
                                    {prop.name}
                                  </div>
                                  <div className="text-xs font-bold text-secondary uppercase tracking-widest mt-1 mb-2">
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
                    </section>
                  )}

                  {/* Examples Section */}
                  {examples && examples.length > 0 && (
                    <section>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Zap size={20} className="text-secondary" />
                          <h3 className="text-base font-bold text-primary font-['Space_Grotesk'] tracking-tight uppercase">
                            Usage Examples
                          </h3>
                        </div>
                        <button
                          onClick={handleCopySnippet}
                          className="flex items-center gap-2 text-xs md:text-sm font-medium text-secondary hover:text-primary transition-colors px-3 py-1.5 rounded-lg hover:bg-surface-container/50"
                        >
                          <Copy size={16} />
                          {copyFeedback ? "Copied!" : "Copy Snippet"}
                        </button>
                      </div>

                      {examples.length > 1 && (
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm text-on-surface-variant">
                            {currentExampleIdx + 1} / {examples.length}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={prevExample}
                              className="p-2 rounded-lg hover:bg-surface-container/50 transition-colors text-on-surface-variant hover:text-primary"
                            >
                              <ChevronLeft size={18} />
                            </button>
                            <button
                              onClick={nextExample}
                              className="p-2 rounded-lg hover:bg-surface-container/50 transition-colors text-on-surface-variant hover:text-primary"
                            >
                              <ChevronRight size={18} />
                            </button>
                          </div>
                        </div>
                      )}

                      {currentExample && (
                        <div>
                          <div className="text-sm font-semibold text-primary mb-3 font-['Space_Grotesk']">
                            {currentExample.title}
                          </div>
                          {renderExample(currentExample.code)}
                        </div>
                      )}
                    </section>
                  )}

                  {/* Notes Section */}
                  {notesContent && (
                    <section>
                      <div className="flex items-center gap-3 mb-4">
                        <AlertCircle size={20} className="text-error-warm" />
                        <h3 className="text-base font-bold text-primary font-['Space_Grotesk'] tracking-tight uppercase">
                          Important Notes
                        </h3>
                      </div>
                      <div className="rounded-xl border oklab-border bg-surface-container/60 p-5">
                        <ul className="space-y-3 text-[15px] md:text-[16px] text-on-surface-variant leading-relaxed">
                          {notes &&
                            notes.map((note, idx) => (
                              <li key={idx} className="flex gap-3">
                                <span className="text-error-warm/60 mt-1 shrink-0">
                                  •
                                </span>
                                <span>{note}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </section>
                  )}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default DocumentationPanel;
