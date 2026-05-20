import React from "react";
import { motion } from "framer-motion";
import { CircleCheck } from "lucide-react";

const ProTierPricingCTA = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const features = [
    "Unlimited premium component access",
    "Advanced micro-spacing controller API",
    "Priority engineering support",
  ];

  return (
    <div className="w-full relative overflow-hidden bg-surface-container text-on-surface py-20 sm:py-28 flex justify-center items-center transition-colors duration-300">
      
      {/* ── Main Content Container ── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="relative z-10 w-full max-w-6xl px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Pro Features Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono font-semibold tracking-wider uppercase border border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400 mb-6 select-none"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span>New Pro Features Available</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-section-heading font-normal tracking-tight text-primary text-[42px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] select-none"
          >
            Unlock the <br />
            <span className="text-error-warm">Pro Tier</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-serif italic font-normal text-on-surface-variant text-[17px] sm:text-lg md:text-[20px] leading-relaxed max-w-2xl mt-6 mb-8"
          >
            Experience the power of seamless integrations and watch your productivity soar with our engineering-grade components.
          </motion.p>

          {/* Checklist */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 w-full"
          >
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3.5 select-none">
                <CircleCheck className="w-5.5 h-5.5 text-emerald-500 dark:text-emerald-400 shrink-0" strokeWidth={1.5} />
                <span className="font-ui-body text-sm sm:text-base font-semibold tracking-wide text-on-surface-variant">
                  {feature}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Pricing Card */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-5 w-full flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full max-w-95 bg-surface rounded-2xl p-8 border border-border-fallback-10 shadow-lg flex flex-col justify-between"
          >
            {/* Most Popular Badge */}
            <div className="absolute -top-3 right-6 bg-error-warm text-white text-[10px] font-bold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full shadow-sm select-none">
              Most Popular
            </div>

            <div>
              {/* Header */}
              <div className="font-mono-code text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/50 mb-3 select-none">
                Professional
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-5 select-none">
                <span className="font-section-heading text-[48px] sm:text-[56px] font-normal leading-none text-primary">
                  $10
                </span>
                <span className="font-serif italic text-base text-on-surface-variant/40">
                  /mo
                </span>
              </div>

              {/* Card Description */}
              <p className="font-serif italic text-[15px] sm:text-[16px] text-on-surface-variant/70 leading-relaxed mb-6">
                Full access for individuals and small teams focused on craft.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-border-fallback-10 mb-6" />
            </div>

            {/* Button */}
            <div className="flex flex-col gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 sm:py-4 rounded-xl font-button-label text-[13px] font-bold tracking-wider bg-primary text-on-primary hover:bg-error-warm transition-colors duration-200 cursor-pointer shadow-sm select-none"
              >
                Upgrade Now
              </motion.button>

              {/* Guarantee Label */}
              <div className="text-center font-mono-code text-[10px] sm:text-[11px] text-on-surface-variant/50 tracking-wider mt-2 select-none">
                14-day free trial &bull; No credit card required
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProTierPricingCTA;
