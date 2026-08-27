import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeading } from '../components/common/SectionHeading';
import { CTASection } from '../components/home/CTASection';
import { Cpu, CheckCircle } from 'lucide-react';

export const AboutPage = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Who We Are"
            title="A Dedicated Two-Person"
            titleGradient="Web Engineering Studio"
            subtitle="We founded WebCubixs on a straightforward belief: ambitious businesses deserve modern, ultra-fast websites built by dedicated engineers without agency bloat."
          />

          {/* Story & Philosophy Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                Why a 2-Person Studio Beats Traditional Agencies
              </h3>
              
              <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                When you hire large agencies, you pay for fancy downtown offices, multi-layered account management, and expensive sales reps — while your actual website gets passed to junior interns or outsourced overseas.
              </p>

              <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                At WebCubixs, there are no middlemen. You speak directly with the two founding developers who architect, design, and code your digital flagship. This means instantaneous feedback, uncompromising quality control, and rapid delivery.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 space-y-1">
                  <span className="font-display font-extrabold text-2xl text-cyan-600 dark:text-cyan-400">100%</span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">Bespoke Custom Code</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 space-y-1">
                  <span className="font-display font-extrabold text-2xl text-purple-600 dark:text-purple-400">&lt; 12h</span>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">Guaranteed Response</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white border border-neutral-800 shadow-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                <Cpu className="w-3.5 h-3.5" />
                <span>Our Technical Standards</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Template Drag:</strong> We never use bloated, fragile WordPress themes.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Sub-Second Execution:</strong> Core Web Vitals tuned for 95+ PageSpeed.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Conversion Psychology:</strong> Layouts structured specifically to turn visitors into inquiries.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Regional Market Alignment:</strong> Deep understanding of consumer behaviors in UAE, Saudi Arabia, Qatar, and global markets.</span>
                </div>
              </div>
            </div>

          </div>

          {/* Team Structure Placeholders */}
          <div className="mb-20">
            <h3 className="font-display text-2xl font-bold text-center text-neutral-900 dark:text-white mb-10">
              The Founding Engineering Team
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Co-Founder 1 */}
              <div className="p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 text-center space-y-4 shadow-sm">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 mx-auto p-1">
                  <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center text-cyan-400 font-display font-bold text-2xl">
                    WC
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
                    Lead Web Engineer & UI Architect
                  </h4>
                  <p className="text-xs font-mono-code text-cyan-600 dark:text-cyan-400 mt-1">
                    Co-Founder, WebCubixs
                  </p>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Specializes in modern React architecture, Three.js 3D experiences, responsive mobile engineering, and sub-second performance tuning.
                </p>
              </div>

              {/* Co-Founder 2 */}
              <div className="p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 text-center space-y-4 shadow-sm">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-blue-600 mx-auto p-1">
                  <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center text-purple-400 font-display font-bold text-2xl">
                    WC
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
                    Lead Full-Stack & Solutions Architect
                  </h4>
                  <p className="text-xs font-mono-code text-purple-600 dark:text-purple-400 mt-1">
                    Co-Founder, WebCubixs
                  </p>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Specializes in full-stack integrations, conversion funnels, SEO infrastructure, analytics tracking, and high-converting copy layouts.
                </p>
              </div>

            </div>
          </div>

          <CTASection />

        </div>
      </div>
    </PageTransition>
  );
};
