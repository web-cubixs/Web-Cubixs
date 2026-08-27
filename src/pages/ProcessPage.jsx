import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeading } from '../components/common/SectionHeading';
import { PROCESS_STEPS } from '../data/processData';
import { CTASection } from '../components/home/CTASection';
import { CheckCircle2, Clock } from 'lucide-react';

export const ProcessPage = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Engineering Roadmap"
            title="Our 5-Step Delivery"
            titleGradient="Framework"
            subtitle="Clear phases, guaranteed timelines, and direct collaboration with the founding engineers from discovery to production launch."
          />

          {/* Timeline Stack */}
          <div className="space-y-8 mb-24 max-w-5xl mx-auto">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-8 sm:p-10 rounded-3xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm hover:border-cyan-500/50 transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-8 items-start relative group"
              >
                {/* Left Step ID */}
                <div className="md:col-span-3 space-y-2">
                  <span className="font-display font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    {step.step}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono-code text-neutral-500">
                    <Clock className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{step.timeline}</span>
                  </div>
                </div>

                {/* Right Step Details */}
                <div className="md:col-span-9 space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                      {step.title} — {step.subtitle}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {step.desc}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-mono-code uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                      Key Deliverables & Milestones:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.deliverables.map((deliv, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <CTASection />

        </div>
      </div>
    </PageTransition>
  );
};
