import React from "react";
import GhostForm from "../components/HomePageComponents/GhostForm";
import LinkNavigation from "../components/HomePageComponents/LinkNavigation";
import NeuralTrace from "../components/HomePageComponents/NeuralTrace";
import TiltHoverCard from "../components/HomePageComponents/TiltHoverCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-surface font-ui-body">
      <main className="max-w-container-max mx-auto sm:px-8">
        {/* Hero Section */}
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 text-center px-4 md:px-0">
          <span className="md:hidden font-system-micro text-system-micro uppercase tracking-widest text-on-surface-variant mb-6 block mt-4">
            Portfolio Volume 01
          </span>

          {/* Desktop Hero Heading */}
          <h1 className="hidden md:block font-display-hero text-display-hero text-primary tracking-tighter mb-6">
            Crafted by{" "}
            <span className="italic text-error-warm">Intelligence</span>
          </h1>
          {/* Mobile Hero Heading */}
          <h1 className="md:hidden font-display-hero text-5xl leading-tight text-primary mb-6 mx-auto text-center px-4 flex flex-col items-center">
            <span>Crafted</span>
            <span>by</span>
            <span className="italic text-error-warm mt-1">Intelligence</span>
          </h1>

          {/* Desktop Hero Text */}
          <p className="hidden md:block font-editorial-body text-xl text-on-surface-variant max-w-4xl mx-auto italic">
            A premium collection of high-density UI primitives, engineered with
            the precision of a code editor and the soul of a classic
            publication.
          </p>
          {/* Mobile Hero Text */}
          <p className="md:hidden font-editorial-body text-editorial-body text-on-surface-variant max-w-xs mx-auto italic">
            A definitive collection of engineered interface components for the
            modern web architect.
          </p>

          <Link
            to="/components"
            className="md:hidden inline-block mt-8 px-6 py-3 bg-primary text-surface-300 rounded-lg font-button-label text-xs uppercase tracking-widest hover:bg-error-warm transition-colors active:scale-95"
          >
            Browse Components
          </Link>

          <div className="hidden md:flex mt-12 justify-center gap-4">
            <div className="w-1 h-12 bg-border-oklab-10"></div>
            <Link
              to="/components"
              className="px-8 py-3 bg-primary text-surface-300 rounded-lg font-button-label text-sm uppercase tracking-widest hover:bg-error-warm transition-colors active:scale-95"
            >
              Browse Components
            </Link>
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
            <div className="aspect-square rounded-md overflow-hidden mb-3 relative flex items-center justify-center -mx-3 -mt-3 bg-cursor-light group-hover:bg-cursor-cream/40 transition-colors duration-500">
              <TiltHoverCard />
            </div>
            <div className="px-2 pt-2">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-section-heading text-[24px] text-primary tracking-tighter hover:text-error-warm transition-colors">
                  Kinetic 3D Card
                </h3>
                <span className="font-system-micro text-system-micro bg-surface-500 px-2 py-0.5 rounded-full text-on-surface-variant">
                  v2.4
                </span>
              </div>
              <p className="font-editorial-standard text-editorial-standard text-on-surface-variant mb-6 leading-relaxed">
                Interactive tilting surface with dynamic ambient lighting.
                Interactive properties enabled on mobile touch devices.
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-surface-500 font-system-micro text-[10px] text-on-surface-variant uppercase tracking-wider">
                  Spatial Depth
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
            <div className="aspect-4/3 rounded-md overflow-hidden mb-3 relative bg-surface-container-highest flex items-center justify-center">
              <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_70%)] absolute inset-0 pointer-events-none"></div>
              <div className="relative z-10 w-full h-full p-6 pb-2">
                <NeuralTrace />
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

        {/* Text CTA Section (Desktop & Mobile) */}
        <section className="py-16 md:py-24 px-4 md:px-0 border-t oklab-border border-x  flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-1/2 px-2">
            <h2 className="font-section-heading text-[32px] md:text-section-heading text-primary mb-4 md:mb-6 leading-tight">
              Built for the era of AI.
            </h2>
            <p className="font-editorial-body text-lg md:text-editorial-body text-on-surface-variant leading-relaxed">
              Components shouldn't just be pretty. They should be aware. Our
              library is built with semantic structures that AI agents can
              navigate, understand, and manipulate with ease.
            </p>
          </div>
          <div className="w-full md:w-1/3 px-2 flex flex-col gap-4">
            <Link to="/components" className="flex items-center gap-2">
              <button className="w-full bg-surface-300 text-primary py-4 md:py-5 rounded-lg font-button-label text-sm md:text-button-label uppercase tracking-widest hover:text-error-warm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 border border-oklab-10 shadow-sm hover:shadow-md">
                Browse Library{" "}
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </Link>
            <p className="text-center font-system-micro text-[12px] text-on-surface-variant uppercase opacity-60">
              Growing Library
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
