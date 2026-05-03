import React from "react";
import { Link } from "react-router-dom";

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
            ComponentLab is a personal showcase of high-density UI primitives
            built at the intersection of design intuition and AI-assisted
            development. This isn't a component library you install — it's a
            living proof of work.
          </p>
          <p className="leading-relaxed text-primary/80">
            Every component here started as an idea, was shaped through
            structured AI collaboration, and was refined until the motion felt
            inevitable and the code felt clean. The goal isn't quantity. It's
            craft.
          </p>
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
                <li>React 19</li>
                <li>Framer Motion (Motion for React)</li>
                <li>Tailwind CSS v4</li>
                <li>Vite</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">Design</h3>
              <p className="text-primary/80">
                No Figma. Components are designed in the browser, in motion.
              </p>
            </div>
          </div>

          <div className="space-y-3 mt-6">
            <h3 className="text-lg font-bold">AI Tools</h3>
            <ul className="space-y-2 text-primary/80">
              <li>
                <strong className="text-primary font-bold">Claude</strong> —
                architecture, code review, production cleanup, logic flow
              </li>
              <li>
                <strong className="text-primary font-bold">
                  Gemini 3.1 Pro
                </strong>{" "}
                — creative ideation, design direction, alternative approaches
              </li>
              <li>
                <strong className="text-primary font-bold">
                  Stitch by Google
                </strong>{" "}
                — UI mockup generation, visual starting points
              </li>
              <li>
                <strong className="text-primary font-bold">v0 by Vercel</strong>{" "}
                — rapid prototyping, layout scaffolding{" "}
              </li>
            </ul>
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

        {/* Section: How I Build a Component */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            How I Build a Component
          </h2>
          <div className="space-y-6 text-primary/80">
            <div>
              <strong className="block text-primary font-bold mb-1">
                Step 1 — Find the idea
              </strong>
              <p className="leading-relaxed">
                It usually starts with something I see that feels boring. A form
                that could ghost. A link that could flip. A timeline that could
                think out loud. The question is always:{" "}
                <em>what would make this unforgettable?</em>
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                Step 2 — Define the interaction in plain English
              </strong>
              <p className="leading-relaxed">
                Before touching AI, I write exactly what should happen. What
                triggers the animation. What the states are. What the edge cases
                are. This becomes the prompt.
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                Step 3 — Scaffold with AI
              </strong>
              <p className="leading-relaxed">
                I use Claude or Gemini to generate the initial component. I'm
                specific about the stack, the motion library, the props
                interface, and the variants I need. Vague prompts produce vague
                components.
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                Step 4 — Break it intentionally
              </strong>
              <p className="leading-relaxed">
                I test the error state. The empty state. Fast interactions. Slow
                networks. Mobile. Whatever the AI didn't think about — I find it
                here.
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                Step 5 — Clean up
              </strong>
              <p className="leading-relaxed">
                This is where AI helps again. Code review, accessibility audit,
                removing dead code, tightening the animation curves. The diff
                between "it works" and "it's production-ready" lives in this
                step.
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                Step 6 — Ship it
              </strong>
              <p className="leading-relaxed">
                If I'm not slightly proud of it, it doesn't go on the site.
              </p>
            </div>
          </div>
        </section>

        {/* Section: AI Prompting Approach */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            AI Prompting Approach
          </h2>
          <p className="leading-relaxed text-primary/80">
            The difference between a generic output and a good component is
            almost entirely in the prompt.
          </p>

          <div className="space-y-4">
            <div className="bg-surface-container/50 oklab-border rounded-xl p-6 shadow-sm">
              <span className="text-xs font-bold text-primary/50 uppercase tracking-widest mb-3 block">
                Weak prompt
              </span>
              <p className="italic text-primary/70">
                "Make a form component with animation"
              </p>
            </div>

            <div className="bg-surface oklab-border border-error-warm/20 rounded-xl p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-error-warm" />
              <span className="text-xs font-bold text-error-warm uppercase tracking-widest mb-3 block">
                What I actually write
              </span>
              <p className="text-primary/90 leading-relaxed font-medium">
                "Build a GhostForm component in React + Framer Motion.
                Ghost-style inputs — no visible border, only a 1px bottom line
                that animates scaleX from 0 to 1 on focus using origin-left.
                Floating label that transitions up and scales to 0.78 on focus
                or when the field has value. Placeholder only visible on focus.
                Validation on submit — email format check, message minimum 10
                chars. Errors appear with AnimatePresence slide-in. Button has
                three states: idle, submitting (spinner + 'Sending…'), success
                (checkmark + 'Sent!'). Auto-reset after 3 seconds. No form tag
                submission — handle with onSubmit and e.preventDefault."
              </p>
            </div>
          </div>

          <p className="leading-relaxed mt-4 text-primary/80">
            The specificity is the skill. AI can write any component. Knowing
            exactly what to ask for is what makes the output worth keeping.
          </p>
        </section>

        {/* Section: AI Tool Breakdown */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            AI Tool Breakdown
          </h2>
          <div className="space-y-6 text-primary/80">
            <div>
              <strong className="block text-primary font-bold mb-1">
                Claude
              </strong>
              <p className="leading-relaxed">
                Best for production cleanup, catching bugs, accessibility, and
                when you need the code to actually be correct. Great at
                understanding full context across a long conversation. This is
                where components go to become solid.
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                Gemini 3.1 Pro
              </strong>
              <p className="leading-relaxed">
                Strong at creative direction and exploring multiple approaches
                fast. Good when you're not sure what you want yet and need
                options to react to. Better for ideation than precision.
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                Stitch by Google
              </strong>
              <p className="leading-relaxed">
                Visual UI mockup generation. Useful for getting a rough visual
                direction before writing a single line of code. Think of it as
                AI Figma for starting points.
              </p>
            </div>
            <div>
              <strong className="block text-primary font-bold mb-1">
                v0 by Vercel
              </strong>
              <p className="leading-relaxed">
                Rapid layout scaffolding with a Tailwind + shadcn bias. Fast for
                getting a working skeleton. Needs cleanup but saves time on
                boilerplate. <em>(Being explored)</em>
              </p>
            </div>
          </div>
        </section>

        {/* Section: Component Anatomy */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            Component Anatomy
          </h2>
          <p className="text-primary/80">
            Using{" "}
            <strong className="text-primary font-bold">Ghost Forms</strong> as
            the reference.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-surface oklab-border rounded-xl block sm:table shadow-sm text-sm overflow-hidden">
              <thead className="bg-on-surface/5">
                <tr className="text-primary/70 font-bold border-b oklab-border">
                  <th className="py-3 px-4">Prop</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Default</th>
                  <th className="py-3 px-4">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y oklab-border text-primary/80">
                <tr>
                  <td className="py-3 px-4 font-mono text-xs bg-black/3">
                    label
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">string</td>
                  <td className="py-3 px-4 font-mono text-xs opacity-50">—</td>
                  <td className="py-3 px-4">Floating label text</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs bg-on-surface/5">
                    type
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">string</td>
                  <td className="py-3 px-4 font-mono text-xs">"text"</td>
                  <td className="py-3 px-4">Input type</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs bg-on-surface/5">
                    placeholder
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">string</td>
                  <td className="py-3 px-4 font-mono text-xs opacity-50">—</td>
                  <td className="py-3 px-4">Shown only on focus</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs bg-on-surface/5">
                    value
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">string</td>
                  <td className="py-3 px-4 font-mono text-xs opacity-50">—</td>
                  <td className="py-3 px-4">Controlled value</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs bg-on-surface/5">
                    onChange
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">function</td>
                  <td className="py-3 px-4 font-mono text-xs opacity-50">—</td>
                  <td className="py-3 px-4">Change handler</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs bg-on-surface/5">
                    error
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">string</td>
                  <td className="py-3 px-4 font-mono text-xs">undefined</td>
                  <td className="py-3 px-4">Error message</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs bg-on-surface/5">
                    required
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">boolean</td>
                  <td className="py-3 px-4 font-mono text-xs">false</td>
                  <td className="py-3 px-4">Marks field required</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-xs bg-on-surface/5">
                    isTextarea
                  </td>
                  <td className="py-3 px-4 font-mono text-xs">boolean</td>
                  <td className="py-3 px-4 font-mono text-xs">false</td>
                  <td className="py-3 px-4">Renders textarea variant</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold">States</h3>
              <ul className="list-disc leading-relaxed pl-5 space-y-1 text-primary/80">
                <li>
                  <strong className="text-primary font-bold">Default</strong> —
                  label sits in field position, no underline emphasis
                </li>
                <li>
                  <strong className="text-primary font-bold">Focused</strong> —
                  label floats up, underline animates in from left
                </li>
                <li>
                  <strong className="text-primary font-bold">Filled</strong> —
                  label stays floated even without focus
                </li>
                <li>
                  <strong className="text-primary font-bold">Error</strong> —
                  underline and label turn red, error message slides in
                </li>
                <li>
                  <strong className="text-primary font-bold">Submitting</strong>{" "}
                  — button slides to spinner state, inputs locked
                </li>
                <li>
                  <strong className="text-primary font-bold">Success</strong> —
                  button shows checkmark, resets after 3s
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold">Accessibility</h3>
              <ul className="list-disc leading-relaxed pl-5 space-y-1 text-primary/80">
                <li>
                  <code className="bg-black/5 px-1.5 py-0.5 rounded text-xs font-mono">
                    useId()
                  </code>{" "}
                  for unique label-input association
                </li>
                <li>
                  <code className="bg-black/5 px-1.5 py-0.5 rounded text-xs font-mono">
                    aria-invalid
                  </code>{" "}
                  on error state
                </li>
                <li>
                  <code className="bg-black/5 px-1.5 py-0.5 rounded text-xs font-mono">
                    aria-describedby
                  </code>{" "}
                  linking input to error msg
                </li>
                <li>
                  <code className="bg-black/5 px-1.5 py-0.5 rounded text-xs font-mono">
                    role="alert"
                  </code>{" "}
                  on error paragraphs
                </li>
                <li>
                  <code className="bg-black/5 px-1.5 py-0.5 rounded text-xs font-mono">
                    noValidate
                  </code>{" "}
                  prevents browser native popups
                </li>
              </ul>
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
                    Command Palette
                  </strong>{" "}
                  — keyboard-first search interface
                </li>
                <li>
                  <strong className="text-primary font-bold">
                    Skeleton Loader
                  </strong>{" "}
                  — content-aware loading states
                </li>
                <li>
                  <strong className="text-primary font-bold">
                    Drag Surface
                  </strong>{" "}
                  — reorderable card grid
                </li>
                <li>
                  <strong className="text-primary font-bold">
                    Toast System
                  </strong>{" "}
                  — notification stack with physics
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Closing Note */}
        <section className="pt-8 border-t oklab-border">
          <p className="leading-relaxed text-primary/80 italic text-lg">
            That's everything. Clean, honest, and actually interesting to read —
            which is rare for a docs page.
          </p>
          <p className="leading-relaxed text-primary/80 italic text-lg mt-4">
            The{" "}
            <strong className="text-primary font-bold not-italic">
              Prompting Approach
            </strong>{" "}
            and{" "}
            <strong className="text-primary font-bold not-italic">
              AI Tool Breakdown
            </strong>{" "}
            sections are your differentiators. Nobody else is documenting their
            AI workflow this transparently. That's what makes this a portfolio,
            not just a demo site.
          </p>
        </section>
      </div>
    </div>
  );
};

export default DocsPage;
