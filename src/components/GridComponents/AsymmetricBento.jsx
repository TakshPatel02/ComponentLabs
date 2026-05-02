import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

// Optimized reusable card wrapper
const BentoCard = ({ children, className, delay = 0, noHover = false }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-[24px] border border-[#ebe9e1] bg-[#fbfaf8] overflow-hidden hover:bg-white transition-colors duration-500 shadow-[0_2px_10px_rgba(0,0,0,0.02)] ${className}`}
    >
      {/* Light spotlight hover effect */}
      {!noHover && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-soft-light"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 1),
                transparent 80%
              )
            `,
          }}
        />
      )}
      <div className="relative h-full flex flex-col p-8 z-10">
        {children}
      </div>
    </motion.div>
  );
};

const AsymmetricBento = () => {
  return (
    <div className="w-full max-w-[1100px] relative font-sans overflow-hidden py-4">
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-[minmax(0,1fr)_minmax(0,1fr)] gap-4 md:gap-6 h-[750px] md:h-[550px]">
        
        {/* Card 1: Primary Focus */}
        <BentoCard className="md:col-span-2 md:row-span-2" delay={0.1}>
          <div className="absolute top-8 right-8 text-[#d0ccc3] transition-colors duration-500 group-hover:text-[#aaa]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
          </div>
          <div className="mt-auto transition-transform duration-500 group-hover:translate-x-1">
            <h3 className="font-section-heading text-3xl text-[#222] mb-3 leading-tight">Primary Focus</h3>
            <p className="font-editorial-standard text-[#666] text-[15px] italic">Irregular scaling for hierarchical emphasis.</p>
          </div>
        </BentoCard>

        {/* Card 2: Metric A */}
        <BentoCard className="md:col-span-1 md:row-span-1 bg-[#f3f0e8] border-[#e2dfd7]" delay={0.2} noHover>
          <span className="font-system-micro text-[10px] font-bold tracking-[0.15em] text-[#444] uppercase">Metric A</span>
          <div className="font-section-heading text-5xl text-[#222] tracking-tight mt-auto">
            84.2<span className="text-2xl text-[#888]">%</span>
          </div>
        </BentoCard>

        {/* Card 3: Dynamic Flow / Parallax */}
        <BentoCard className="md:col-span-1 md:row-span-2 overflow-hidden bg-[#e6e2d8] border-[#d8d4ca]" delay={0.3}>
          {/* Animated abstract shapes inside card */}
          <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 45, 90, 180]
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="w-[200%] h-[150%] bg-gradient-to-tr from-[#dfdcd3] to-[#f4f2eb] blur-3xl rounded-full opacity-60"
            />
          </div>
          
          {/* Top Left Icon */}
          <div className="w-8 h-8 rounded-full border border-[#c4c0b5] flex items-center justify-center text-[#555] relative z-20 group-hover:bg-[#c4c0b5]/20 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
               <path d="M5 19L19 5M19 5V15M19 5H9" />
            </svg>
          </div>

          <div className="mt-auto w-full relative z-10 transition-transform duration-500 group-hover:translate-x-1">
            <span className="font-system-micro text-[10px] font-bold tracking-[0.15em] text-[#555] uppercase block leading-snug w-[70%]">
              Abstract Flow
            </span>
          </div>
        </BentoCard>

        {/* Card 4: Latency */}
        <BentoCard className="md:col-span-1 md:row-span-1" delay={0.4}>
          <span className="font-system-micro text-[10px] font-bold tracking-[0.15em] text-[#444] uppercase">Latency</span>
          <div className="font-section-heading text-4xl text-[#222] tracking-tight mt-auto">
            12<span className="text-2xl text-[#888]">ms</span>
          </div>
        </BentoCard>

      </div>
    </div>
  );
};

export default AsymmetricBento;
