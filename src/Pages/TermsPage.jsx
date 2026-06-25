import React from "react";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-surface text-on-surface pt-24 md:pt-32 pb-24 md:pb-32 px-4">
      {/* Container */}
      <div className="max-w-[800px] mx-auto">
        
        {/* Header */}
        <header className="mb-16 md:mb-24 text-center">
          <span className="font-mono-code text-[11px] uppercase tracking-widest text-on-surface-variant/60 mb-4 block">
            LEGAL
          </span>
          <h1 className="font-display-hero text-5xl md:text-7xl tracking-tighter text-primary mb-6">
            Terms of Use
          </h1>
          <p className="font-editorial-standard text-[18px] md:text-[20px] leading-relaxed text-on-surface-variant max-w-2xl mx-auto italic">
            ComponentLab is a personal project and creative showcase. By
            visiting this site, you're agreeing to the following — which is
            mostly just common sense.
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-16 md:space-y-20 font-editorial-body text-[16px] md:text-[18px] leading-[1.7] text-on-surface-variant/90">
          
          {/* Section 01: What This Site Is */}
          <section className="relative pl-0 md:pl-12">
            <span className="hidden md:block absolute left-0 top-1 font-mono-code text-[12px] text-on-surface-variant/40">
              01
            </span>
            <h2 className="font-section-heading text-2xl md:text-3xl text-primary mb-6 tracking-tight flex items-baseline gap-3">
              <span className="md:hidden font-mono-code text-[12px] text-on-surface-variant/40">01</span>
              What This Site Is
            </h2>
            <div className="space-y-4">
              <p>
                ComponentLab is a UI component library and showcase built by Taksh
                Patel. It demonstrates skills in React, Motion, and AI-assisted
                development.
              </p>
              <p>
                ComponentLab is available as a live showcase at{" "}
                <a href="https://component-labs.vercel.app" className="text-primary hover:text-[#E8567A] underline underline-offset-4 decoration-border-fallback-10 transition-colors">component-labs.vercel.app</a>{" "}
                and as a published npm package at{" "}
                <a href="https://npmjs.com/package/component-labs" className="text-primary hover:text-[#E8567A] underline underline-offset-4 decoration-border-fallback-10 transition-colors">npmjs.com/package/component-labs</a>.
              </p>
            </div>
          </section>

          <hr className="border-t border-border-fallback-10" />

          {/* Section 02: Using the Components */}
          <section className="relative pl-0 md:pl-12">
            <span className="hidden md:block absolute left-0 top-1 font-mono-code text-[12px] text-on-surface-variant/40">
              02
            </span>
            <h2 className="font-section-heading text-2xl md:text-3xl text-primary mb-6 tracking-tight flex items-baseline gap-3">
              <span className="md:hidden font-mono-code text-[12px] text-on-surface-variant/40">02</span>
              Using the Components
            </h2>
            <div className="space-y-4">
              <p>
                Components are available to use in personal and commercial projects.
                The npm package is published under the MIT license — you're free to
                use, modify, and distribute the components with attribution.
              </p>
              <p>
                The live showcase code can be copied inline from the components
                page. Direct copy-paste without understanding what the code does is
                on you.
              </p>
            </div>
          </section>

          <hr className="border-t border-border-fallback-10" />

          {/* Section 03: AI-Generated Content */}
          <section className="relative pl-0 md:pl-12">
            <span className="hidden md:block absolute left-0 top-1 font-mono-code text-[12px] text-on-surface-variant/40">
              03
            </span>
            <h2 className="font-section-heading text-2xl md:text-3xl text-primary mb-6 tracking-tight flex items-baseline gap-3">
              <span className="md:hidden font-mono-code text-[12px] text-on-surface-variant/40">03</span>
              AI-Generated Content
            </h2>
            <div className="space-y-4">
              <p>
                Some components and content on this site were built with the
                assistance of AI tools including Claude, Gemini, and others. All AI
                output was reviewed, edited, and refined by the developer. Nothing
                here is raw generated output.
              </p>
            </div>
          </section>

          <hr className="border-t border-border-fallback-10" />

          {/* Section 04: No Warranties */}
          <section className="relative pl-0 md:pl-12">
            <span className="hidden md:block absolute left-0 top-1 font-mono-code text-[12px] text-on-surface-variant/40">
              04
            </span>
            <h2 className="font-section-heading text-2xl md:text-3xl text-primary mb-6 tracking-tight flex items-baseline gap-3">
              <span className="md:hidden font-mono-code text-[12px] text-on-surface-variant/40">04</span>
              No Warranties
            </h2>
            <div className="space-y-4">
              <p>
                This site is provided as-is. Components may have bugs. Demos may
                break. The developer makes no guarantees about fitness for any
                particular purpose. Use anything you find here at your own risk.
              </p>
            </div>
          </section>

          <hr className="border-t border-border-fallback-10" />

          {/* Section 05: External Links */}
          <section className="relative pl-0 md:pl-12">
            <span className="hidden md:block absolute left-0 top-1 font-mono-code text-[12px] text-on-surface-variant/40">
              05
            </span>
            <h2 className="font-section-heading text-2xl md:text-3xl text-primary mb-6 tracking-tight flex items-baseline gap-3">
              <span className="md:hidden font-mono-code text-[12px] text-on-surface-variant/40">05</span>
              External Links
            </h2>
            <div className="space-y-4">
              <p>
                ComponentLab may link to external sites like GitHub, Twitter, or
                Discord. Those sites have their own terms. We're not responsible for
                what happens over there.
              </p>
            </div>
          </section>

          <hr className="border-t border-border-fallback-10" />

          {/* Section 06: Changes & Contact */}
          <section className="relative pl-0 md:pl-12">
            <span className="hidden md:block absolute left-0 top-1 font-mono-code text-[12px] text-on-surface-variant/40">
              06
            </span>
            <h2 className="font-section-heading text-2xl md:text-3xl text-primary mb-6 tracking-tight flex items-baseline gap-3">
              <span className="md:hidden font-mono-code text-[12px] text-on-surface-variant/40">06</span>
              Changes & Contact
            </h2>
            <div className="space-y-4">
              <p>
                This project is actively evolving. Content, components, and these
                terms can change at any time without notice.
              </p>
              <p>
                If you have questions, want to collaborate, or just want to talk
                about UI — reach out on Twitter or GitHub.
              </p>
            </div>
          </section>

        </div>

        {/* Footer / Last Updated */}
        <footer className="mt-24 pt-8 border-t border-border-fallback-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono-code text-[12px] uppercase tracking-widest text-on-surface-variant/50">
            Last updated: May 2026
          </span>
          <a href="https://takshpatel.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-mono-code text-[12px] uppercase tracking-widest text-primary hover:text-[#E8567A] transition-colors">
            Taksh Patel
          </a>
        </footer>

      </div>
    </div>
  );
};

export default TermsPage;
