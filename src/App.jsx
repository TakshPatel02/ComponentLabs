import GhostForm from "./components/GhostForm";
import NeuralTrace from "./components/NeuralTrace";
import LinkNavigation from "./components/LinkNavigation";
import TiltHoverCard from "./components/TiltHoverCard";

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
          </div>
          <div className="flex items-center gap-6">
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
                      Spatial Depth
                    </span>
                    <h3 className="font-section-heading text-section-heading text-primary group-hover:text-error-warm transition-colors">
                      Kinetic 3D Card
                    </h3>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:text-error-warm transition-colors">
                    3d_rotation
                  </span>
                </div>
                <div className="grow flex items-center justify-center -mx-4 group-hover:bg-cursor-cream/40 transition-colors duration-500 rounded-lg">
                  <TiltHoverCard />
                </div>
                <div className="mt-8 flex justify-between items-center z-10 relative">
                  <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic">
                    Interactive tilting surface with dynamic ambient lighting.
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
                    Flip Links
                  </h3>
                </div>
                <div className="grow bg-cursor-cream/30 rounded-lg oklab-border p-4 flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-cursor-cream/60 transition-colors duration-500">
                  <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-black/2"></div>
                  <div className="relative z-10 w-full h-full pb-4">
                    <LinkNavigation />
                  </div>
                </div>
                <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-6">
                  Kinetic typography navigation that adds tactile feedback to
                  standard links.
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
                <div className="w-1/2 bg-cursor-cream/40 oklab-border rounded-lg p-6 flex flex-col gap-4 relative overflow-hidden group-hover:bg-cursor-cream/60 transition-colors duration-500">
                  <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-black/2"></div>
                  <div className="relative z-10 w-full h-full pb-4">
                    <NeuralTrace />
                  </div>
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

          {/* Flip Links Card */}
          <div className="bg-surface-300 rounded-lg p-3 border border-oklab-10 shadow-sm transition-all duration-300 hover:shadow-lg group">
            <div className="aspect-4/3 rounded-md overflow-hidden mb-3 relative bg-cursor-cream/50 flex items-center justify-center p-4">
              <div className="absolute inset-0 z-0 bg-linear-to-b from-transparent to-black/2 pointer-events-none"></div>
              <div className="relative z-10 w-full h-full pt-8">
                <LinkNavigation />
              </div>
            </div>
            <div className="px-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-section-heading text-[24px] text-primary tracking-tighter">
                  Flip Links
                </h3>
                <span className="font-system-micro text-system-micro bg-surface-500 px-2 py-0.5 rounded-full text-on-surface-variant">
                  NEW
                </span>
              </div>
              <p className="font-editorial-standard text-editorial-standard text-on-surface-variant mb-6 leading-relaxed">
                Staggered kinetic typography that reacts with a smooth rolling
                motion on hover, perfect for primary navigations or assertive
                footers.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Typography
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Motion
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
            <div className="aspect-4/3 rounded-md overflow-hidden mb-3 relative bg-[#121212] flex items-center justify-center">
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)] absolute inset-0 pointer-events-none"></div>
              <div className="relative z-10 w-full h-full p-6 pb-2">
                <NeuralTrace isDark={true} />
              </div>
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
