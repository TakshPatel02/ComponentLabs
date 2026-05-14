import React from "react";
import SaaSFooter from "../../components/FooterComponents/SaaSFooter";
import MinimalFooter from "../../components/FooterComponents/MinimalFooter";

const FooterComponentPage = () => {
  return (
    <>
      {/* SaaS Footer Component Section */}
      <div className="w-full flex flex-col group mt-6">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Structure
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              SaaS Footer
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A clean, high-conversion footer designed for SaaS applications, featuring a prominent CTA card and organized navigation.
            </p>
          </div>
        </div>

        <div className="w-full bg-surface rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group- pt-12 pb-12">
          <SaaSFooter />
        </div>
      </div>

      {/* Minimal Footer Component Section */}
      <div className="w-full flex flex-col group mt-16">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <span className="font-system-micro text-system-micro text-secondary tracking-widest uppercase mb-2 block">
              Structure
            </span>
            <h3 className="font-section-heading text-[32px] md:text-[40px] leading-tight text-primary transition-colors">
              Minimal Footer
            </h3>
            <p className="font-editorial-standard text-editorial-standard text-on-surface-variant italic mt-3 max-w-2xl">
              A streamlined, content-first footer prioritizing clean typography and essential navigation links. Includes subtle staggered entrance animations.
            </p>
          </div>
        </div>

        <div className="w-full bg-surface rounded-xl oklab-border flex flex-col items-center justify-center overflow-hidden relative transition-all duration-500 group- pt-12 pb-12">
          <MinimalFooter />
        </div>
      </div>
    </>
  );
};

export default FooterComponentPage;
