import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { ArrowLeft, ExternalLink, Globe, Sparkles, Smartphone, CheckCircle } from "lucide-react";
import ResizeableBrowserPreview from "../components/LandingPageComponents/ResizeableBrowserPreview";

const TemplatePreviewPage = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const templateData = {
    title: "SaaS Invoicing Landing Page",
    category: "TEMPLATES",
    description: "A premium, production-ready marketing landing page designed specifically for SaaS platforms, developer tools, and analytics utilities. Engineered for conversion and stunning aesthetics.",
    features: [
      "Modern typography featuring Space Grotesk and Inter fonts",
      "Interactive invoicing & analytics dashboard mockup preview",
      "Beautiful staggered entrance animations powered by Framer Motion",
      "Interactive Quick Task list component built-in",
      "100% responsive design optimized for mobile, tablet, and desktop screens",
      "Harmonious light/dark compatible aesthetics with smooth gradients",
    ],
    previewUrl: "/preview/saas-landing"
  };

  return (
    <div className={`min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${
      isDark ? "bg-[#111] text-white" : "bg-[#F5F3EE] text-[#1c1b1b]"
    }`}>
      <div className="max-w-[1200px] mx-auto">
        {/* Breadcrumb / Back Navigation */}
        <Link
          to="/templates"
          className={`inline-flex items-center gap-2 text-xs sm:text-sm font-semibold mb-8 group hover:text-primary transition-colors no-underline ${
            isDark ? "text-white/60" : "text-black/60"
          }`}
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Templates</span>
        </Link>

        {/* Template Information Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-8">
            <span className={`inline-block font-mono text-[10.5px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded bg-primary/10 text-primary mb-4`}>
              {templateData.category}
            </span>
            <h1 className="font-['Space_Grotesk'] text-3xl sm:text-[42px] font-bold tracking-tight mb-4">
              {templateData.title}
            </h1>
            <p className={`font-['Inter'] text-sm sm:text-base leading-relaxed ${
              isDark ? "text-white/70" : "text-black/70"
            }`}>
              {templateData.description}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <div className="flex flex-wrap gap-3">
              <a
                href={templateData.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-surface hover:bg-error-warm text-xs sm:text-sm font-semibold font-['Space_Grotesk'] tracking-tight transition-all duration-200 active:scale-[0.98] shadow-md"
              >
                <ExternalLink size={14} />
                <span>Open Raw Preview</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Responsive Preview Section */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4 font-['Space_Grotesk'] font-bold text-sm tracking-wide uppercase opacity-70">
            <Smartphone size={16} className="text-primary" />
            <span>Interactive Device & Responsiveness Preview</span>
          </div>
          
          <div className={`p-4 sm:p-6 md:p-8 rounded-2xl border ${
            isDark ? "bg-[#18181c] border-white/5" : "bg-white border-black/5"
          } shadow-[0_4px_30px_rgba(0,0,0,0.03)]`}>
            <ResizeableBrowserPreview src={templateData.previewUrl} />
          </div>
        </div>

        {/* Features Checklist */}
        <div className={`rounded-xl p-6 sm:p-8 border ${
          isDark ? "bg-[#161616] border-white/5" : "bg-[#ebebe6] border-black/5"
        }`}>
          <h2 className="font-['Space_Grotesk'] text-xl sm:text-2xl font-bold mb-6 flex items-center gap-2">
            <Sparkles size={20} className="text-primary" />
            <span>Key Features & Specifications</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {templateData.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <span className={`text-sm sm:text-[14.5px] leading-relaxed ${
                  isDark ? "text-white/80" : "text-black/80"
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TemplatePreviewPage;
