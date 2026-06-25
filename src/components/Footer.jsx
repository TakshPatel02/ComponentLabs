import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    PRODUCT: [
      { label: "Showcase", to: "/" },
      { label: "Components", to: "/components" },
      { label: "Templates", to: "/templates" },
      { label: "IconFlow", to: "/iconflow" },
      {label: "Expriences", to:"/experiences"}
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
      { label: "License", href: "https://github.com/TakshPatel02/ComponentLabs/blob/main/LICENSE" },
    ],
  };

  const socialLinks = [
    { label: "Twitter", href: "https://x.com/TakshPatel02" },
    { label: "GitHub", href: "https://github.com/TakshPatel02/ComponentLabs" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/taksh-patel20/" },
  ];

  return (
    <footer className="w-full border-t border-border-fallback-10 bg-surface">
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6 max-w-[600px]">
            <Link to="/" className="font-['Space_Grotesk'] text-4xl font-bold tracking-tighter text-primary hover:text-[#E8567A] transition-colors duration-200 no-underline">
              ComponentLab
            </Link>
            <p className="font-editorial-standard text-[16px] text-on-surface-variant/80 leading-relaxed">
              The precision of a code editor. The soul of a classic publication. Premium React components crafted for modern web applications.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-16 lg:gap-20">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-5">
                <span className="font-mono-code text-[12px] uppercase tracking-[0.15em] text-on-surface-variant/50 font-medium">
                  {category}
                </span>
                <div className="flex flex-col gap-3.5">
                  {links.map((link) =>
                    link.to ? (
                      <Link
                        key={link.label}
                        to={link.to}
                        className="font-editorial-standard text-[15px] text-on-surface-variant/80 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-editorial-standard text-[15px] text-on-surface-variant/80 hover:text-primary transition-colors"
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-fallback-10">
        <div className="px-6 md:px-12 lg:px-20 py-8 max-w-[1600px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <span className="font-mono-code text-[12px] uppercase tracking-widest text-on-surface-variant/50">
            © {new Date().getFullYear()} ComponentLab. Designed & Built by{" "}
            <a
              href="https://takshpatel.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant/80 hover:text-[#E8567A] transition-colors font-medium hover:underline"
            >
              Taksh Patel
            </a>
          </span>
          <div className="flex items-center gap-6 md:gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-code text-[12px] uppercase tracking-widest text-on-surface-variant/50 hover:text-primary transition-colors hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
