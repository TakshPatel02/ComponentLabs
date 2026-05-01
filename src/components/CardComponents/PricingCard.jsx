import React from 'react';
import { motion } from 'framer-motion';
import { CircleCheck, Lock } from 'lucide-react';

const PLANS = [
  { name: "Starter", price: "$0", period: "/mo",
    features: [
      { text: "Basic components", active: true },
      { text: "5 projects", active: true },
      { text: "Priority support", active: false },
    ],
    cta: "Get Started" },
  { name: "Professional", price: "$10", period: "/mo", popular: true,
    features: [
      { text: "All premium components", active: true },
      { text: "Unlimited projects", active: true },
      { text: "Priority support", active: true },
      { text: "Advanced micro-spacing controls", active: true },
    ],
    cta: "Upgrade Now" },
  { name: "Enterprise", price: "Custom", period: "",
    features: [
      { text: "Custom components library", active: true },
      { text: "Granular team permissions", active: true },
      { text: "Enterprise-grade SLA", active: true },
      { text: "White-glove migration support", active: true },
    ],
    cta: "Contact Sales" },
];

const PricingCard = () => (
  <div className="w-full flex flex-col items-center py-8 px-4">
    {/* Header */}
    <h2 className="text-[40px] md:text-[52px] text-stone-800 font-medium tracking-tight text-center mb-4">
      Engineered for <span className="italic font-serif text-[#8B4513]">Craft.</span>
    </h2>
    <p className="text-stone-500 text-center text-[15px] md:text-[17px] leading-relaxed max-w-2xl mb-12">
      Transparent pricing for developers who prioritize <span className="underline underline-offset-2">micro-alignment, warm aesthetics,</span>
      {" "}and rigorous architectural integrity.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
      {PLANS.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.12, ease: "easeOut" }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className={`relative bg-[#F0EFEB] rounded-xl p-7 flex flex-col justify-between ${
            plan.popular 
              ? 'border-2 border-[#8B4513]/60 shadow-[0_8px_30px_rgba(139,69,19,0.08)]' 
              : 'border border-stone-200/80'
          }`}
        >
          {/* Popular badge */}
          {plan.popular && (
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8B4513] text-white text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1 rounded-full">
              Most Popular
            </div>
          )}

          {/* Plan info */}
          <div>
            <h3 className="text-[18px] font-medium text-stone-700 mb-3">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[42px] font-medium text-stone-800 tracking-tight leading-none">{plan.price}</span>
              {plan.period && <span className="text-[15px] text-stone-400">{plan.period}</span>}
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 mb-8">
              {plan.features.map((f, j) => (
                <div key={j} className={`flex items-center gap-2.5 text-[14px] ${f.active ? 'text-stone-700' : 'text-stone-400'}`}>
                  {f.active 
                    ? <CircleCheck size={16} className="text-[#8B4513]/70 shrink-0" /> 
                    : <Lock size={14} className="text-stone-300 shrink-0" />}
                  <span className={f.active ? 'font-medium' : ''}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 rounded-lg text-[14px] font-medium transition-colors cursor-pointer ${
              plan.popular
                ? 'bg-stone-800 text-white hover:bg-stone-700'
                : 'bg-transparent border border-stone-300 text-stone-600 hover:bg-stone-200/50'
            }`}
          >
            {plan.cta}
          </motion.button>
        </motion.div>
      ))}
    </div>
  </div>
);

export default PricingCard;
