import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { COMPANY_CONFIG } from '../../data/companyConfig';
import { ShieldCheck, Zap, Users, Sparkles, Smartphone, BarChart3 } from 'lucide-react';

const pillarIcons = [
  Sparkles,
  ShieldCheck,
  Smartphone,
  Zap,
  Users,
  BarChart3
];

export const WhyWebCubixs = () => {
  return (
    <section className="py-20 md:py-28 bg-neutral-50/50 dark:bg-[#07090f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="The WebCubixs Advantage"
          title="Why Choose a Specialized"
          titleGradient="2-Person Web Studio?"
          subtitle="Unlike bloated digital agencies that outsource your build to juniors, or flaky freelance marketplaces, we give you direct founder engineering with uncompromising standards."
        />

        {/* Asymmetrical Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {COMPANY_CONFIG.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Comparison Matrix Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-neutral-900 to-neutral-950 text-white border border-neutral-800 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            
            {/* Bloated Agencies */}
            <div className="space-y-3 pb-6 md:pb-0">
              <span className="text-xs font-mono-code text-rose-400 uppercase tracking-wider">
                Big Bloated Agencies
              </span>
              <h4 className="text-lg font-bold text-neutral-300">
                Expensive & Slow
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Inflated overhead costs, 5 layers of account managers, weeks to get a simple update done, and work farmed out to interns.
              </p>
            </div>

            {/* Random Freelancers */}
            <div className="space-y-3 py-6 md:py-0 md:px-8">
              <span className="text-xs font-mono-code text-amber-400 uppercase tracking-wider">
                Freelance Marketplaces
              </span>
              <h4 className="text-lg font-bold text-neutral-300">
                Unreliable & Inconsistent
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Copy-paste WordPress templates, security vulnerabilities, ghosting after final payment, and zero business conversion strategy.
              </p>
            </div>

            {/* WebCubixs */}
            <div className="space-y-3 pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-mono-code text-cyan-400 uppercase tracking-wider flex items-center justify-center md:justify-start gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                WebCubixs Studio
              </span>
              <h4 className="text-lg font-bold text-white">
                Direct, Elite & Dedicated
              </h4>
              <p className="text-xs text-cyan-100/80 leading-relaxed">
                Direct communication with the two founding developers. 100% custom modern code, guaranteed delivery timelines, and sub-second load speeds.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
