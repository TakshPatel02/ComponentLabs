import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Eye, Code } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";

export const DocumentationPanel = ({
  componentName,
  importPath,
  defaultUsage,
  props,
  examples,
  notes,
  children, // component view
}) => {
  const [activeTab, setActiveTab] = useState("component");
  const [isInstructionsOpen, setIsInstructionsOpen] = useState(false);

  const codeSnippet = `import { ${componentName} } from "${importPath}";

// Default usage
${defaultUsage}`;

  const propsContent =
    props && props.length > 0 ? (
      <div className="space-y-3">
        {props.map((prop, idx) => (
          <div key={idx} className="border-l-2 border-secondary pl-4">
            <div className="font-mono text-sm text-primary">
              {prop.name}: <span className="text-secondary">{prop.type}</span>
            </div>
            <div className="text-sm text-on-surface-variant mt-1">
              {prop.description}
            </div>
            {prop.default && (
              <div className="text-xs text-secondary mt-1">
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
    <Highlight theme={themes.nightOwl} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} p-4 rounded-lg overflow-x-auto text-xs`}
          style={style}
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
            <h4 className="font-semibold text-primary mb-2">{example.title}</h4>
            {renderExample(example.code)}
          </div>
        ))}
      </div>
    ) : null;

  const notesContent = notes ? (
    <ul className="list-disc list-inside space-y-2 text-on-surface-variant text-sm">
      {notes.map((note, idx) => (
        <li key={idx} className="leading-relaxed">
          {note}
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div className="w-full space-y-6">
      {/* Tab Toggle */}
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
            className="w-full bg-cursor-cream/50 min-h-96 rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden p-8 transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]"
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
            <Highlight
              theme={themes.nightOwl}
              code={codeSnippet}
              language="jsx"
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                  className={`${className} p-6 rounded-xl overflow-x-auto border oklab-border`}
                  style={style}
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
        className={`border oklab-border rounded-xl overflow-hidden transition-colors duration-300 ${
          isInstructionsOpen
            ? "bg-surface-300"
            : "bg-surface hover:bg-surface-container"
        }`}
      >
        <button
          onClick={() => setIsInstructionsOpen(!isInstructionsOpen)}
          className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
        >
          <span className="text-lg font-medium text-primary font-['Space_Grotesk']">
            How to Use
          </span>
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
              <div className="px-6 pb-6 text-on-surface-variant text-[16px] leading-relaxed border-t oklab-border pt-4 mt-2 font-editorial-standard space-y-4">
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="space-y-4"
                >
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Import</h4>
                    <Highlight
                      theme={themes.nightOwl}
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
                          className={`${className} p-3 rounded text-xs overflow-x-auto`}
                          style={style}
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
                  </div>

                  {propsContent && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Available Props
                      </h4>
                      {propsContent}
                    </div>
                  )}

                  {examplesContent && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Usage Examples
                      </h4>
                      {examplesContent}
                    </div>
                  )}

                  {notesContent && (
                    <div>
                      <h4 className="font-semibold text-primary mb-2">
                        Important Notes
                      </h4>
                      {notesContent}
                    </div>
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
