import React from "react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-surface text-primary font-['Space_Grotesk'] pb-24">
      {/* Container */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 pt-12 md:pt-20 space-y-16">
        {/* Header */}
        <header className="space-y-6 oklab-border-b pb-8">
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
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            What This Site Is
          </h2>
          <p className="leading-relaxed text-primary/80">
            ComponentLab is a UI component library and showcase built by Taksh
            Patel. It demonstrates skills in React, Motion, and AI-assisted
            development.
          </p>
          <p className="leading-relaxed text-primary/80">
            ComponentLab is available as a live showcase at
            component-labs.vercel.app and as a published npm package at
            npmjs.com/package/component-labs.
          </p>
        </section>

        {/* Section: Using the Components */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            Using the Components
          </h2>
          <p className="leading-relaxed text-primary/80">
            Components are available to use in personal and commercial projects.
            The npm package is published under the MIT license — you're free to
            use, modify, and distribute the components with attribution.
          </p>
          <p className="leading-relaxed text-primary/80">
            The live showcase code can be copied inline from the components
            page. Direct copy-paste without understanding what the code does is
            on you.
          </p>
        </section>

        {/* Section: AI-Generated Content */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
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
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
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
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
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
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            Changes
          </h2>
          <p className="leading-relaxed text-primary/80">
            This project is actively evolving. Content, components, and these
            terms can change at any time without notice.
          </p>
        </section>

        {/* Section: Contact */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight oklab-border-b pb-2">
            Contact
          </h2>
          <p className="leading-relaxed text-primary/80">
            If you have questions, want to collaborate, or just want to talk
            about UI — reach out on Twitter or GitHub.
          </p>
        </section>

        {/* Footer / Last Updated */}
        <footer className="pt-8 text-center text-md text-primary/80">
          <strong className="text-primary font-bold">Last updated: May 2026</strong>
        </footer>
      </div>
    </div>
  );
};

export default TermsPage;
