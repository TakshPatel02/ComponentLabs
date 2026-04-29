import React from "react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-cursor-cream text-primary font-['Space_Grotesk'] pb-24">
      {/* Container */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 pt-12 md:pt-20 space-y-16">
        {/* Header */}
        <header className="space-y-6 border-b border-black/5 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            Terms of Use
          </h1>
          <p className="leading-relaxed text-primary">
            ComponentLab is a personal project and creative showcase. By
            visiting this site, you're agreeing to the following — which is
            mostly just common sense.
          </p>
        </header>

        {/* Section: What This Site Is */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight border-b border-black/5 pb-2">
            What This Site Is
          </h2>
          <p className="leading-relaxed text-primary/80">
            ComponentLab is a portfolio of UI components built by Taksh Patel to
            demonstrate skills in React, Framer Motion, and AI-assisted
            development. It is not a published npm package, a SaaS product, or a
            commercial component library.
          </p>
        </section>

        {/* Section: Using the Components */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight border-b border-black/5 pb-2">
            Using the Components
          </h2>
          <p className="leading-relaxed text-primary/80">
            The components showcased here are for demonstration purposes. If you
            want to use something you see here as inspiration or reference for
            your own work, go ahead — that's the point. Direct copy-paste into
            commercial products without understanding what the code does is on
            you.
          </p>
          <p className="leading-relaxed text-primary/80">
            No official license is attached to this project at this time. If
            that changes, this page will be updated.
          </p>
        </section>

        {/* Section: AI-Generated Content */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight border-b border-black/5 pb-2">
            AI-Generated Content
          </h2>
          <p className="leading-relaxed text-primary/80">
            Some components and content on this site were built with the
            assistance of AI tools including Claude, Gemini, and others. All AI
            output was reviewed, edited, and refined by the developer. Nothing
            here is raw generated output.
          </p>
        </section>

        {/* Section: No Warranties */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight border-b border-black/5 pb-2">
            No Warranties
          </h2>
          <p className="leading-relaxed text-primary/80">
            This site is provided as-is. Components may have bugs. Demos may
            break. The developer makes no guarantees about fitness for any
            particular purpose. Use anything you find here at your own risk.
          </p>
        </section>

        {/* Section: External Links */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight border-b border-black/5 pb-2">
            External Links
          </h2>
          <p className="leading-relaxed text-primary/80">
            ComponentLab may link to external sites like GitHub, Twitter, or
            Discord. Those sites have their own terms. We're not responsible for
            what happens over there.
          </p>
        </section>

        {/* Section: Changes */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight border-b border-black/5 pb-2">
            Changes
          </h2>
          <p className="leading-relaxed text-primary/80">
            This project is actively evolving. Content, components, and these
            terms can change at any time without notice.
          </p>
        </section>

        {/* Section: Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight border-b border-black/5 pb-2">
            Contact
          </h2>
          <p className="leading-relaxed text-primary/80">
            If you have questions, want to collaborate, or just want to talk
            about UI — reach out on Twitter or GitHub.
          </p>
        </section>

        {/* Footer / Last Updated */}
        <footer className="pt-8 border-t border-black/5">
          <strong className="text-primary font-bold">Last updated: 2026</strong>
        </footer>
      </div>
    </div>
  );
};

export default TermsPage;
