import React from 'react';
import { Smartphone, Zap, Search, Target, Headphones, Layers } from 'lucide-react';
import { useAnimeReveal } from '../../hooks/useAnimeReveal';

const valueItems = [
  { icon: Layers, title: 'Modern Design', desc: 'Sleek, bespoke visual aesthetics.' },
  { icon: Smartphone, title: 'Mobile Responsive', desc: 'Engineered for smartphone users.' },
  { icon: Zap, title: 'Fast Performance', desc: '< 0.8s load times & 95+ scores.' },
  { icon: Search, title: 'SEO Friendly', desc: 'Google-ready semantic markup.' },
  { icon: Target, title: 'Business Focused', desc: 'Designed to generate client leads.' },
  { icon: Headphones, title: 'Direct Support', desc: 'Direct access to founding devs.' }
];

export const ValueStrip = () => {
  const containerRef = useAnimeReveal({ selector: '.value-strip-item', staggerDelay: 60, delay: 50 });

  return (
    <section ref={containerRef} className="py-8 bg-neutral-100/50 dark:bg-neutral-900/40 border-y border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {valueItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="value-strip-item p-4 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200/70 dark:border-neutral-800/70 shadow-sm hover:border-cyan-500/40 transition-all duration-200 group flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-2.5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-neutral-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-neutral-500 leading-tight">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
