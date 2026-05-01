import React from 'react';
import StateSynthesisCard from '../../components/CardComponents/StateSynthesisCard';

const CardComponentPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-12 pb-24 px-8 bg-[#EBEBE8]/50">
      <div className="mb-16 text-center max-w-2xl mt-12">
        <h1 className="font-display-hero text-5xl md:text-display-hero text-stone-800 tracking-tighter mb-6">
          Interactive <span className="italic text-stone-500">States</span>
        </h1>
        <p className="font-editorial-body text-editorial-body text-stone-600 italic">
          Click on the card below to see the interactive morphing animations powered by Framer Motion.
        </p>
      </div>

      <StateSynthesisCard />
    </div>
  );
};

export default CardComponentPage;