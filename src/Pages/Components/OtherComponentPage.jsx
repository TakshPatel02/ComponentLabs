import React, { useState } from "react";
import DocumentationPanel from "../../components/DocumentationPanel";
import { TerminalTypingCard } from "../../components/OtherComponents/TerminalTypingCard";
import KanbanBoard from "../../components/OtherComponents/KanbanBoard";
import { VintageFader } from "../../components/OtherComponents/EditorialSlider";

const OtherComponentPage = () => {
  const [terminalReplayKey, setTerminalReplayKey] = useState(0);

  return (
    <>
      {/* Kanban Board Component Section */}
      <div className="w-full flex flex-col group mt-6 mb-20">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Other
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Engineered Kanban Board
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A high-performance drag-and-drop workflow board using native HTML5
              drag APIs and physics-based layout animations for seamless column
              transitions.
            </p>
          </div>
        </div>

        <DocumentationPanel
          componentName="KanbanBoard"
          importPath="../src/components/OtherComponents/KanbanBoard"
          defaultUsage="<KanbanBoard />"
          componentViewClassName="w-full bg-cursor-cream/50 min-h-62.5 md:h-auto rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]"
          props={[
            {
              name: "initialTasks",
              type: "Array",
              description: "starting task list: [{ id, column, tag, title }]",
              default: "Default tasks array",
            },
            {
              name: "columns",
              type: "Array",
              description: "board columns: [{ id, title, canAdd, isTrash }]",
              default: "Default columns array",
            },
            {
              name: "onTasksChange",
              type: "function",
              description: "called whenever the task list changes.",
              default: "undefined",
            },
            {
              name: "onTaskMove",
              type: "function",
              description: "called when a task is moved.",
              default: "undefined",
            },
            {
              name: "onTaskAdd",
              type: "function",
              description: "called when a new task is created.",
              default: "undefined",
            },
            {
              name: "onTaskDelete",
              type: "function",
              description: "called when a task is dropped into the trash.",
              default: "undefined",
            },
            {
              name: "className",
              type: "string",
              description: "additional classes for the board container.",
              default: '""',
            },
            {
              name: "style",
              type: "object",
              description: "inline styles for the outer container.",
              default: "{}",
            },
          ]}
          examples={[
            {
              title: "Custom columns and tasks",
              code: `import { KanbanBoard } from "component-labs";

const columns = [
  { id: "todo", title: "TODO", canAdd: true },
  { id: "doing", title: "DOING" },
  { id: "done", title: "DONE" },
  { id: "trash", title: "TRASH", isTrash: true },
];

const tasks = [
  { id: "1", column: "todo", tag: "API", title: "Review PR" },
  { id: "2", column: "doing", tag: "UI", title: "Design Button" },
];

export default function App() {
  return (
    <div className="w-full h-screen p-10 bg-neutral-900">
      <KanbanBoard columns={columns} initialTasks={tasks} />
    </div>
  );
}`,
            },
          ]}
          notes={[
            "Manages drag-and-drop internally, so you can use it immediately without extra state wiring.",
            "Use callback props to sync board state to a backend or parent store."
          ]}
        >
          <KanbanBoard />
        </DocumentationPanel>
      </div>

      {/* Editorial Slider Component Section */}
      <div className="w-full flex flex-col group mt-6 mb-20">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Other
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Vintage Master Fader
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A meticulously crafted analog mixing console fader. Features a
              deep recessed track, realistic knurled shadows, and an LED-style
              digital readout.
            </p>
          </div>
        </div>

        <div className="w-full bg-surface-container min-h-75 rounded-xl oklab-border flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden relative transition-all duration-500 group-hover:shadow-[0_20px_70px_-10px_rgba(38,37,30,0.05)]">
          <VintageFader />
        </div>
      </div>

      {/* Terminal Typing Card Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Other
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Terminal Typing Window
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A mocked CLI environment built with an authentic variable-speed
              typing animation. Ideal for hero sections or code setup
              instructions.
            </p>
          </div>

          <div className="shrink-0 flex items-center">
            <button
              onClick={() => setTerminalReplayKey((v) => v + 1)}
              className="flex items-center justify-center gap-2 bg-primary text-cursor-cream hover:bg-error-warm px-5 py-2.5 rounded-lg text-sm font-medium font-['Space_Grotesk'] transition-all active:scale-[0.98] shadow-sm hover:shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">
                replay
              </span>
              Rewatch Animation
            </button>
          </div>
        </div>

        <DocumentationPanel
          componentName="TerminalTypingCard"
          importPath="../src/components/OtherComponents/TerminalTypingCard"
          defaultUsage="<TerminalTypingCard />"
          props={[
            {
              name: "lines",
              type: "Array",
              description:
                "Array of line objects: { text, delay, type }. Each line has a text, delay in ms, and type ('cmd', 'success', 'error', etc.)",
              default: "sample terminal transcript array",
            },
          ]}
          examples={[
            {
              title: "Custom terminal output",
              code: `const lines = [
  { text: "npm run build", delay: 400, type: "cmd" },
  { text: "Building...", delay: 800, type: "info" },
  { text: "Build completed ✓", delay: 400, type: "success" }
];
<TerminalTypingCard lines={lines} />`,
            },
          ]}
          notes={[
            "Implements typewriter effect for type: 'cmd' lines.",
            "Non-cmd lines are printed instantly after their delay.",
            "Perfect for showcasing deployment or installation steps.",
            "Supports multiple line types: 'cmd', 'success', 'error', 'info'.",
          ]}
        >
          <TerminalTypingCard key={terminalReplayKey} />
        </DocumentationPanel>
      </div>
    </>
  );
};

export default OtherComponentPage;
