import React from "react";
import { LogoCloud } from "../../components/LogoCloudComponents/LogoCloud";
import { CenteredLogoCloud } from "../../components/LogoCloudComponents/CenteredLogoCloud";
import { MarqueeLogoCloud } from "../../components/LogoCloudComponents/MarqueeLogoCloud";
import { CrosshairLogoCloud } from "../../components/LogoCloudComponents/CrosshairLogoCloud";

const LogoCloudComponentPage = () => {
  return (
    <>
      <div className="w-full flex flex-col group mb-24">
        {/* Component Header and Controls */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Brands & Trust
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Logo Cloud
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              Showcase partners with an elegantly spaced, responsive two-row
              dark logo cloud.
            </p>
          </div>
        </div>

        <div className="w-full rounded-xl flex items-center justify-center p-2 relative overflow-hidden transition-all duration-500">
          <LogoCloud />
        </div>
      </div>
      <div className="w-full flex flex-col group mb-24">
        {/* Component Header and Controls */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Brands & Trust
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Centered Logo Cloud
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A refined single-row logo cloud with centered headline and
              supporting copy, perfect for hero sections.
            </p>
          </div>
        </div>

        <div className="w-full rounded-xl flex items-center justify-center p-2 relative overflow-hidden transition-all duration-500">
          <CenteredLogoCloud />
        </div>
      </div>
      <div className="w-full flex flex-col group mb-24">
        {/* Component Header and Controls */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Brands & Trust
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Animated Marquee Logo Cloud
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              An infinite scrolling logo cloud featuring smooth gradients fading
              out at the edges.
            </p>
          </div>
        </div>

        <div className="w-full rounded-xl flex items-center justify-center p-2 relative overflow-hidden transition-all duration-500">
          <MarqueeLogoCloud />
        </div>
      </div>

      <div className="w-full flex flex-col group mb-24">
        {/* Component Header and Controls */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Brands & Trust
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Crosshair Grid Logo Cloud
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              An elegant 2x5 structured logo grid featuring corner crosshairs,
              border-bounded logos, and interactive hover cell isolation.
            </p>
          </div>
        </div>

        <div className="w-full rounded-xl flex items-center justify-center p-2 relative overflow-hidden transition-all duration-500">
          <CrosshairLogoCloud />
        </div>
      </div>
    </>
  );
};

export default LogoCloudComponentPage;
