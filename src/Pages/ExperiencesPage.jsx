import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Layout, Palette, ChevronRight, Zap, Copy, Code2, ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18 },
  },
};

const ExperiencesPage = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // offset for fixed header if any
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full bg-surface text-on-surface font-ui-body">
      {/* ═══ HERO ═══ */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center justify-center pt-28 md:pt-36 pb-16 md:pb-24 px-4 relative overflow-hidden"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-border-fallback-10 bg-surface-container/80 backdrop-blur-md mb-8 shadow-sm">
            <Sparkles size={14} className="text-primary" />
            <span className="font-mono-code text-[11px] tracking-wider text-on-surface-variant/80 uppercase font-medium">
              ComponentLabs · Animations & Feel
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display-hero text-[48px] sm:text-[64px] md:text-[80px] text-primary tracking-tighter leading-[1.05] mb-6">
            Elevate Your App's{" "}
            <span className="italic text-error-warm relative inline-block">
              Feel
              <div className="absolute -bottom-2 left-0 right-0 h-micro-2 bg-error-warm/30 rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-editorial-body text-[18px] md:text-[21px] text-on-surface-variant leading-relaxed max-w-3xl mb-12">
            Add world-class transition animations to your React projects in seconds. 
            No complex tutorials, no steep learning curve. Just seamless, copy-paste 
            experiences that wow your users.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#transitions-library" onClick={(e) => scrollToSection(e, 'transitions-library')} className="px-8 py-3.5 rounded-full bg-primary text-on-primary font-medium text-[15px] hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/20 flex items-center gap-2 cursor-pointer">
              Get Started <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" onClick={(e) => scrollToSection(e, 'how-it-works')} className="px-8 py-3.5 rounded-full bg-surface-container border border-border-fallback-10 text-primary font-medium text-[15px] hover:bg-surface-container-highest transition-colors duration-300 cursor-pointer">
              How it works
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* ═══ FEATURES ═══ */}
      <section className="py-16 px-4 bg-surface-container/20 border-y border-border-fallback-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            {
              icon: <Copy size={24} className="text-error-warm" />,
              title: "Copy & Paste Simplicity",
              desc: "Don't spend hours learning animation libraries. Grab our ready-to-use snippets and drop them directly into your codebase."
            },
            {
              icon: <Zap size={24} className="text-error-warm" />,
              title: "Zero Dependencies",
              desc: "Built using native browser APIs like View Transitions and pure CSS. Keep your bundle size small and your app lightning fast."
            },
            {
              icon: <Code2 size={24} className="text-error-warm" />,
              title: "Beginner Friendly",
              desc: "You don't need to be an animation wizard. We've done the hard math and timing curves so you can focus on building your app."
            }
          ].map((feature, idx) => (
            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <div className="w-12 h-12 rounded-2xl bg-surface-container border border-border-fallback-10 flex items-center justify-center shadow-sm">
                {feature.icon}
              </div>
              <h3 className="font-section-heading text-[20px] text-primary font-semibold">
                {feature.title}
              </h3>
              <p className="font-editorial-standard text-[15px] text-on-surface-variant/80 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TRANSITIONS LIBRARY ═══ */}
      <section id="transitions-library" className="py-24 px-4 scroll-mt-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-hero text-[36px] md:text-[48px] text-primary tracking-tight mb-4">
              The Library
            </h2>
            <p className="font-editorial-standard text-[17px] text-on-surface-variant/70 max-w-2xl mx-auto">
              Choose an experience to preview the animations and get the code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Theme Transitions Card */}
            <Link
              to="/experiences/theme-transitions"
              className="group relative rounded-4xl p-8 md:p-10 border oklab-border bg-surface-container/30 hover:bg-surface-container/60 transition-all duration-500 flex flex-col gap-6 overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-error-warm/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                <Palette size={28} className="text-error-warm" />
              </div>
              <div>
                <h3 className="font-section-heading text-[28px] text-primary font-bold tracking-tight mb-3">
                  Theme Transitions
                </h3>
                <p className="font-editorial-standard text-[16px] text-on-surface-variant/80 leading-relaxed">
                  Mesmerizing effects for switching between dark and light modes. Features curtain wipes, radial waves, and pixel dissolves. Highly interactive and fully responsive.
                </p>
              </div>
              
              <div className="mt-auto pt-6 flex items-center gap-2 text-error-warm font-mono-code text-[13px] font-bold tracking-wide uppercase group-hover:translate-x-3 transition-transform duration-300">
                View Transitions <ChevronRight size={16} />
              </div>
              
              {/* Background Glow */}
              <div className="absolute top-0 right-0 p-40 bg-error-warm/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-error-warm/10 transition-colors duration-500 pointer-events-none" />
            </Link>

            {/* Page Transitions Card */}
            <div className="group relative rounded-4xl p-8 md:p-10 border oklab-border bg-surface-container/20 transition-all duration-500 flex flex-col gap-6 overflow-hidden opacity-80">
              <div className="absolute inset-0 bg-surface/30 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center transition-all duration-300">
                <div className="px-5 py-2.5 rounded-full bg-surface border border-border-fallback-10 text-on-surface-variant font-mono-code text-[13px] font-medium tracking-wide uppercase shadow-xl mb-3">
                  Coming Soon
                </div>
                <p className="text-[14px] text-on-surface-variant/70 font-editorial-standard italic">
                  Currently in the lab
                </p>
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-2">
                <Layout size={28} className="text-primary/60" />
              </div>
              <div>
                <h3 className="font-section-heading text-[28px] text-primary/60 font-bold tracking-tight mb-3">
                  Page Transitions
                </h3>
                <p className="font-editorial-standard text-[16px] text-on-surface-variant/60 leading-relaxed">
                  Fluid, native-feeling route transitions powered by Framer Motion. Slide, fade, and scale between your application's pages seamlessly.
                </p>
              </div>
              
              <div className="mt-auto pt-6 flex items-center gap-2 text-on-surface-variant/40 font-mono-code text-[13px] font-bold tracking-wide uppercase">
                Explore <ChevronRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section id="how-it-works" className="py-24 px-4 bg-surface-container/20 border-t border-border-fallback-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-mono-code text-[12px] tracking-widest uppercase text-error-warm font-semibold mb-4 block">
            The Process
          </span>
          <h2 className="font-display-hero text-[32px] md:text-[44px] text-primary tracking-tight mb-12">
            Setup in 3 simple steps
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-border-fallback-10" />
            
            {[
              { num: "01", title: "Select", desc: "Choose the perfect transition effect for your app." },
              { num: "02", title: "Copy", desc: "Grab the provided React and CSS snippets." },
              { num: "03", title: "Paste", desc: "Drop them into your app and watch the magic." }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center gap-4 bg-surface-container/20 md:bg-transparent p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-surface border-2 border-border-fallback-10 flex items-center justify-center font-mono-code text-[16px] font-bold text-primary shadow-sm">
                  {step.num}
                </div>
                <h4 className="font-section-heading text-[20px] text-primary font-semibold">
                  {step.title}
                </h4>
                <p className="font-editorial-standard text-[15px] text-on-surface-variant/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CALL TO ACTION ═══ */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-primary rounded-[2.5rem] p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4" />
          
          <div className="relative z-10">
            <h2 className="font-display-hero text-[36px] md:text-[48px] text-on-primary mb-6">
              Ready to upgrade your UI?
            </h2>
            <p className="font-editorial-standard text-[18px] text-on-primary/80 mb-10 max-w-2xl mx-auto">
              Stop settling for jarring state changes. Give your users the smooth, premium experience they deserve.
            </p>
            <Link
              to="/experiences/theme-transitions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-surface text-primary font-bold text-[16px] hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              Get Started Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencesPage;
