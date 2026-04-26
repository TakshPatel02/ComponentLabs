import GhostForm from "./components/GhostForm";

const App = () => {
  return (
    <div className="min-h-screen bg-surface font-ui-body">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-cursor-cream/90 backdrop-blur-xl border-b border-black/5 shadow-[0_20px_50px_rgba(38,37,30,0.05)]">
        {/* Desktop Navbar */}
        <div className="hidden md:flex justify-between items-center w-full px-8 h-16 max-w-container-max mx-auto">
          <div className="text-xl font-bold tracking-tighter text-primary font-['Space_Grotesk']">
            ComponentLab
          </div>
          <div className="flex items-center gap-8 font-['Space_Grotesk'] tracking-tight font-medium">
            <a className="text-primary border-b border-primary pb-1" href="#">
              Showcase
            </a>
            <a
              className="text-primary/50 transition-colors duration-200 hover:text-error-warm"
              href="#"
            >
              Components
            </a>
            <a
              className="text-primary/50 transition-colors duration-200 hover:text-error-warm"
              href="#"
            >
              Docs
            </a>
            <a
              className="text-primary/50 transition-colors duration-200 hover:text-error-warm"
              href="#"
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="material-symbols-outlined text-primary/60 cursor-pointer hover:text-error-warm">
              search
            </span>
            <button className="bg-primary text-cursor-cream px-5 py-2 rounded-lg text-sm font-medium hover:bg-error-warm transition-all active:scale-[0.98]">
              Start Building
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between px-5 h-16">
          <div className="flex items-center gap-4">
            <button className="active:scale-95 duration-200 text-primary">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <span className="text-xl font-black tracking-widest text-primary font-['Space_Grotesk'] uppercase">
              GALLERY
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button className="active:scale-95 duration-200 text-primary">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-container-max mx-auto sm:px-8">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 text-center px-4 md:px-0">
          <span className="md:hidden font-system-micro text-system-micro uppercase tracking-widest text-on-surface-variant mb-6 block">
            Portfolio Volume 01
          </span>

          {/* Desktop Hero Heading */}
          <h1 className="hidden md:block font-display-hero text-display-hero text-primary tracking-tighter mb-6">
            Crafted by{" "}
            <span className="italic text-error-warm">Intelligence</span>
          </h1>
          {/* Mobile Hero Heading */}
          <h1 className="md:hidden font-display-hero text-[56px] leading-[0.95] text-primary mb-6 max-w-sm mx-auto">
            Crafted by Intelligence
          </h1>

          {/* Desktop Hero Text */}
          <p className="hidden md:block font-editorial-body text-editorial-body text-on-surface-variant max-w-2xl mx-auto italic">
            A premium collection of high-density UI primitives, engineered with
            the precision of a code editor and the soul of a classic
            publication.
          </p>
          {/* Mobile Hero Text */}
          <p className="md:hidden font-editorial-body text-editorial-body text-on-surface-variant max-w-xs mx-auto italic">
            A definitive collection of engineered interface components for the
            modern web architect.
          </p>

          <div className="hidden md:flex mt-12 justify-center gap-4">
            <div className="w-1 h-12 bg-border-oklab-10"></div>
          </div>
        </section>

        {/* Desktop Gallery (Bento Grid) */}
        <section className="hidden md:block pb-32">
          <div className="grid grid-cols-12 gap-6">
            {/* Large Featured Card */}
            <div className="col-span-8 group">
              <div className="hover-card oklab-border rounded-xl bg-cursor-light p-8 h-120 flex flex-col transition-all duration-500 overflow-hidden relative">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
                      Premium Interaction
                    </span>
                    <h3 className="font-section-heading text-section-heading text-primary group-hover:text-error-warm transition-colors">
                      Fluid Motion Core
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:text-error-warm transition-colors">
                    auto_awesome
                  </span>
                </div>
                <div className="grow flex items-center justify-center">
                  <div className="w-full h-full rounded-lg bg-cursor-cream/50 overflow-hidden oklab-border flex items-center justify-center relative">
                    <img
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                      alt="Fluid Motion"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-LzM25aubZ1ZyhBhZXD-K0IQAc-21jXFO-hDoLE-O7TYnmOBqwX7047OgxgkdSkpOuOfkiVpkYh4gBSpbmQAlxTJgPfGv_pQTJQ0WMSFfJRr12uHbkGJaaMTI_INgVnTNOolsyGU0RFWdzYeAFhLv7lK0bPGS25RrN3vfdSJ3q0hecHoZhShnjAEf2E4s7SLdDG6aMTNWTry2pedMDh2Zd1KVadNznAQLoXKwfQ5kELbn_bKCr8W8M73I4ZBjA6lF7RT4d4Js9T7_"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-cursor-light/40 to-transparent"></div>
                  </div>
                </div>
                <div className="mt-6 flex justify-between items-center z-10 relative">
                  <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic">
                    Refined physics for the modern web.
                  </p>
                  <span className="font-system-micro text-system-micro bg-surface-300 px-3 py-1 rounded-full">
                    v2.4.0
                  </span>
                </div>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="col-span-4 group">
              <div className="hover-card oklab-border rounded-xl bg-cursor-light p-6 h-120 flex flex-col transition-all duration-500">
                <div className="mb-8">
                  <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
                    Navigation
                  </span>
                  <h3 className="font-section-heading text-[28px] leading-tight text-primary group-hover:text-error-warm transition-colors">
                    Adaptive Sidebar
                  </h3>
                </div>
                <div className="grow bg-cursor-cream/30 rounded-lg oklab-border p-4 flex flex-col gap-3">
                  <div className="h-8 w-full bg-surface-500/30 rounded"></div>
                  <div className="h-8 w-2/3 bg-surface-500/30 rounded"></div>
                  <div className="h-8 w-3/4 bg-surface-500/30 rounded"></div>
                  <div className="h-8 w-1/2 bg-surface-500/30 rounded"></div>
                  <div className="mt-auto h-24 w-full rounded-lg bg-error-warm/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-error-warm/40 text-[32px]">
                      view_sidebar
                    </span>
                  </div>
                </div>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-6">
                  Intuitive layouts that breathe.
                </p>
              </div>
            </div>

            {/* Row 2: Symmetric Layout Small Card 2 */}
            <div className="col-span-4 group">
              <div className="hover-card oklab-border rounded-xl bg-cursor-light p-6 h-100 flex flex-col transition-all duration-500">
                <div className="mb-8">
                  <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
                    Inputs
                  </span>
                  <h3 className="font-section-heading text-[28px] leading-tight text-primary group-hover:text-error-warm transition-colors">
                    Ghost Forms
                  </h3>
                </div>
                <div className="grow flex flex-col justify-center w-full">
                  <GhostForm />
                </div>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-6">
                  Minimalist input architecture.
                </p>
              </div>
            </div>

            {/* Row 2: Wide Card */}
            <div className="col-span-8 group">
              <div className="hover-card oklab-border rounded-xl bg-cursor-light p-8 h-100 flex transition-all duration-500 overflow-hidden">
                <div className="w-1/2 flex flex-col justify-between pr-8">
                  <div>
                    <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
                      AI Timeline
                    </span>
                    <h3 className="font-section-heading text-section-heading text-primary group-hover:text-error-warm transition-colors">
                      Neural Trace
                    </h3>
                  </div>
                  <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic">
                    Visualize the thinking process of LLMs through elegant,
                    time-coded steps.
                  </p>
                </div>
                <div className="w-1/2 bg-cursor-cream/40 oklab-border rounded-lg p-6 flex flex-col gap-4 relative overflow-hidden">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-timeline-thinking"></div>
                    <div className="font-system-micro text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Thinking
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-timeline-grep"></div>
                    <div className="font-system-micro text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Grep Search
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-timeline-read"></div>
                    <div className="font-system-micro text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Reading context
                    </div>
                  </div>
                  <div className="flex items-center gap-4 z-10 relative">
                    <div className="w-2 h-2 rounded-full bg-timeline-edit"></div>
                    <div className="font-system-micro text-[10px] text-on-surface-variant uppercase tracking-widest">
                      Applying Edits
                    </div>
                  </div>
                  {/* Connector Line */}
                  <div className="absolute left-6.75 top-9 bottom-9 w-px bg-border-oklab-10 z-0"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Gallery (Stacked) */}
        <section className="md:hidden px-4 space-y-6 pb-24">
          {/* Fluid Motion Core Card */}
          <div className="bg-surface-300 rounded-lg p-3 border border-oklab-10 shadow-sm transition-all duration-300 hover:shadow-lg group">
            <div className="aspect-4/3 rounded-md overflow-hidden mb-3 relative">
              <img
                alt="Fluid motion"
                className="w-full h-full object-cover opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhxnFs6svQYaQrC9WuLA0rWNM00Gy2qUgG3esswa7j_ITe5CtTMZ9GIAMlL2Bu0JShQzXcKSAIhRexYPG1iiSDYFJUA6FH_mbX8qp1-m9CKXQ294KJLYFOTCqaYD1sAkGReSH0YescG_p1faLEk2EL2fAVTFSsHTEPBuMeLPSxWbQrWT9OAOa-S43L8tah4ItXfioPCJMkUD-D7LzkEjr_QkYNHE4UxgyR8NwyctxebaSTITZTc_vgLGzQZQPUAEtzdHOeIfc5mlZw"
              />
            </div>
            <div className="px-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-section-heading text-[24px] text-primary tracking-tighter">
                  Fluid Motion Core
                </h3>
                <span className="font-system-micro text-system-micro bg-surface-500 px-2 py-0.5 rounded-full text-on-surface-variant">
                  v2.4
                </span>
              </div>
              <p className="font-editorial-standard text-editorial-standard text-on-surface-variant mb-6 leading-relaxed">
                Precision-engineered animation systems built on physics-based
                transition matrices.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Animation
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Physics
                </span>
              </div>
            </div>
          </div>

          {/* Adaptive Sidebar Card */}
          <div className="bg-surface-300 rounded-lg p-3 border border-oklab-10 shadow-sm transition-all duration-300 hover:shadow-lg group">
            <div className="aspect-4/3 rounded-md overflow-hidden mb-3 relative bg-[#1c1b1b] flex items-center justify-center">
              <div className="w-1/2 h-4/5 border border-white/10 rounded-lg flex flex-col bg-black/50 p-3 pt-6 gap-2">
                <div className="w-1/3 h-1 bg-white/20 rounded"></div>
                <div className="w-1/2 h-1 bg-white/20 rounded"></div>
                <div className="w-3/4 h-1 bg-white/20 rounded"></div>
              </div>
            </div>
            <div className="px-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-section-heading text-[24px] text-primary tracking-tighter">
                  Adaptive Sidebar
                </h3>
                <span className="font-system-micro text-system-micro bg-surface-500 px-2 py-0.5 rounded-full text-on-surface-variant">
                  NEW
                </span>
              </div>
              <p className="font-editorial-standard text-editorial-standard text-on-surface-variant mb-6 leading-relaxed">
                A context-aware navigation shell that recalibrates based on user
                intent and workflow.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Navigation
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Layout
                </span>
              </div>
            </div>
          </div>

          {/* Ghost Forms Card */}
          <div className="bg-surface-300 rounded-lg p-3 border border-oklab-10 shadow-sm transition-all duration-300 hover:shadow-lg group">
            <div className="aspect-4/3 rounded-md overflow-hidden mb-3 relative flex flex-col justify-center px-4 md:px-8">
              <GhostForm />
            </div>
            <div className="px-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-section-heading text-[24px] text-primary tracking-tighter">
                  Ghost Forms
                </h3>
                <span className="font-system-micro text-system-micro bg-surface-500 px-2 py-0.5 rounded-full text-on-surface-variant">
                  BETA
                </span>
              </div>
              <p className="font-editorial-standard text-editorial-standard text-on-surface-variant mb-6 leading-relaxed">
                Low-friction input systems utilizing atmospheric depth and tonal
                shift focus states.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Inputs
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Glass
                </span>
              </div>
            </div>
          </div>

          {/* Neural Trace Card */}
          <div className="bg-surface-300 rounded-lg p-3 border border-oklab-10 shadow-sm transition-all duration-300 hover:shadow-lg group">
            <div className="aspect-4/3 rounded-md overflow-hidden mb-3 relative bg-black flex items-center justify-center">
              {/* Decorative background or image could go here, using a gradient for abstract placeholder */}
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-cyan-900 via-black to-black opacity-80"></div>
            </div>
            <div className="px-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-section-heading text-[24px] text-primary tracking-tighter">
                  Neural Trace
                </h3>
                <span className="font-system-micro text-system-micro bg-surface-500 px-2 py-0.5 rounded-full text-on-surface-variant">
                  EXP
                </span>
              </div>
              <p className="font-editorial-standard text-editorial-standard text-on-surface-variant mb-6 leading-relaxed">
                Signature timeline components for visualizing AI reasoning and
                process history.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  AI Timeline
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Trace
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Text CTA Section (Desktop) */}
        <section className="hidden md:flex py-24 border-t oklab-border flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="font-section-heading text-section-heading text-primary mb-6">
              Built for the era of AI.
            </h2>
            <p className="font-editorial-body text-editorial-body text-on-surface-variant">
              Components shouldn't just be pretty. They should be aware. Our
              library is built with semantic structures that AI agents can
              navigate, understand, and manipulate with ease.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col gap-4">
            <button className="w-full bg-surface-300 text-primary py-5 rounded-lg font-button-label text-button-label uppercase tracking-widest hover:text-error-warm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95">
              Browse Library{" "}
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </button>
            <p className="text-center font-system-micro text-[10px] text-on-surface-variant uppercase opacity-60">
              Over 240+ primitives available
            </p>
          </div>
        </section>
      </main>

      {/* Mobile Footer Area (from stacked design end) */}
      <div className="md:hidden py-12 flex flex-col items-center justify-center text-center px-4">
        <h4 className="font-system-micro text-system-micro tracking-widest uppercase text-primary mb-6">
          Precision Craft
        </h4>
        <div className="flex gap-4 font-system-micro text-[10px] uppercase text-on-surface-variant mb-8 tracking-wider">
          <span>Components</span>
          <span>Guidelines</span>
          <span>Archive</span>
        </div>
        <p className="font-system-micro text-[10px] text-on-surface-variant uppercase opacity-60">
          © 2024 Precision Craft
        </p>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-cursor-cream/95 backdrop-blur-xl border-t border-oklab-10 h-16 flex items-center justify-around px-2 z-50">
        <button className="flex flex-col items-center gap-1 text-error-warm">
          <span className="material-symbols-outlined text-[20px]">explore</span>
          <span className="font-system-micro text-[8px] uppercase tracking-widest">
            Explore
          </span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-[20px]">
            auto_awesome
          </span>
          <span className="font-system-micro text-[8px] uppercase tracking-widest">
            Magic
          </span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-[20px]">
            inventory_2
          </span>
          <span className="font-system-micro text-[8px] uppercase tracking-widest">
            Assets
          </span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined text-[20px]">person</span>
          <span className="font-system-micro text-[8px] uppercase tracking-widest">
            Profile
          </span>
        </button>
      </div>

      {/* Desktop Footer */}
      <footer className="hidden md:flex w-full border-t border-black/10 bg-cursor-cream">
        <div className="max-w-container-max w-full mx-auto py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-black text-primary font-['Space_Grotesk']">
            ComponentLab
          </div>
          <div className="flex gap-8 font-['Space_Grotesk'] text-[13px] uppercase tracking-widest">
            <a
              className="text-primary/40 hover:text-error-warm transition-colors"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-primary/40 hover:text-error-warm transition-colors"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-primary/40 hover:text-error-warm transition-colors"
              href="#"
            >
              Discord
            </a>
            <a
              className="text-primary/40 hover:text-error-warm transition-colors"
              href="#"
            >
              Terms
            </a>
          </div>
          <div className="font-['Space_Grotesk'] text-[13px] uppercase tracking-widest text-primary/40">
            © 2024 ComponentLab. Built for the era of AI.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
