import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PROCESS_STEPS } from '../../data/processData';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { useAnimeReveal } from '../../hooks/useAnimeReveal';

export const ProcessTimeline = () => {
  const containerRef = useAnimeReveal({ selector: '.process-reveal-step', staggerDelay: 90 });

  return (
    <section ref={containerRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Transparent Methodology"
          title="From Concept to Launch in"
          titleGradient="5 Clear Phases"
          subtitle="We eliminate uncertainty. You will always know what stage your project is at, what we are building, and when your website goes live."
        />

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-16 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="process-reveal-step p-6 rounded-3xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-sm relative group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-black text-2xl text-cyan-500">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                  {step.desc}
                </p>

                {/* Key Deliverables list */}
                <div className="space-y-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                  {step.deliverables.slice(0, 2).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-[11px] text-neutral-600 dark:text-neutral-400">
                      <CheckCircle2 className="w-3 h-3 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/process" variant="secondary" size="md" showArrow>
            VIEW IN-DEPTH PROCESS & TIMELINE
          </Button>
        </div>

      </div>
    </section>
  );
};
