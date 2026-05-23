import React from "react";
import { Link } from "react-router-dom";
import KineticSplitReveal from "./TextComponents/KineticSplitReveal";

const Footer = () => {
  const footerLinks = {
    PRODUCT: [
      { label: "Showcase", to: "/" },
      { label: "Components", to: "/components" },
      { label: "Templates", to: "/components" },
      { label: "IconFlow", to: "/iconflow" },
    ],
    RESOURCES: [
      { label: "Documentation", to: "/docs/introduction" },
      { label: "Installation", to: "/docs/installation" },
    ],
    COMPANY: [
      { label: "About", href: "https://takshpatel.vercel.app/" },
      { label: "Blog", href: "https://www.linkedin.com/in/taksh-patel20/" },
    ],
    LEGAL: [
      { label: "Terms of Service", to: "/terms" },
      { label: "License", to: "https://github.com/TakshPatel02/ComponentLabs/blob/main/LICENSE" },
    ],
  };

  const socialLinks = [
    { label: "Twitter", href: "https://x.com/TakshPatel02" },
    { label: "GitHub", href: "https://github.com/TakshPatel02/ComponentLabs" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/taksh-patel20/" },
  ];

  return (
    <footer className="w-full border-t rounded-t-3xl border-border-fallback-10 bg-surface">
      {/* Hero: Kinetic Split Text */}
      <div className="w-full flex justify-center pt-4 pb-2 md:pt-6 md:pb-3">
        <KineticSplitReveal
          text="COMPONENT LABS"
          quote="The precision of a code editor. The soul of a classic publication."
          fontSizeClass="text-5xl sm:text-7xl md:text-[120px] lg:text-[160px]"
          quoteFontSizeClass="text-sm sm:text-lg md:text-xl lg:text-[24px]"
          quoteColorClass="text-[#E8567A]"
          textColorClass="text-primary"
          fontFamilyClass="font-display-hero"
          quoteFontFamilyClass="font-serif"
          duration={700}
        />
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-border-fallback-10" />

      {/* Links Grid */}
      <div className="px-6 md:px-12 lg:px-20 py-8 md:py-12">
        <div className="grid  grid-cols-2 sm:grid-cols-4 gap-10 md:gap-24">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <span className="font-mono-code text-[13px] uppercase tracking-[0.15em] text-on-surface-variant/40 font-medium">
                {category}
              </span>
              <div className="flex flex-col gap-3.5">
                {links.map((link) =>
                  link.to ? (
                    <Link
                      key={link.label}
                      to={link.to}
                      className="font-editorial-standard text-[16px] text-on-surface-variant/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-editorial-standard text-[16px] text-on-surface-variant/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-border-fallback-10" />

      {/* Bottom Bar */}
      <div className="px-6 md:px-12 lg:px-20 py-8 md:py-10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="font-mono-code text-[13px] uppercase tracking-[0.15em] text-on-surface-variant/40">
          © 2026 ComponentLab. Designed & Built by{" "}
          <a
            href="https://takshpatel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-[#E8567A] transition-colors font-medium hover:underline"
          >
            Taksh Patel
          </a>
        </span>
        <div className="flex items-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-code text-[13px] uppercase tracking-[0.15em] text-on-surface-variant/40 hover:text-primary transition-colors hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
