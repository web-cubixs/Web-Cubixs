import React from 'react';
import { XCircle, CheckCircle, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

const problems = [
  'Customers cannot easily find crucial pricing, services, or location information',
  'Your business looks small or amateurish compared to established competitors',
  'Visitors cannot easily view your service catalog or portfolio on smartphones',
  'Competitors with modern websites appear far more credible and win high-ticket clients',
  'Customers experience friction or have difficulty contacting your business directly',
  'Existing website is outdated, slow, clunky, and fails on Google Core Web Vitals'
];

const solutions = [
  'Clear, intuitive digital architecture that presents your value in seconds',
  'High-prestige, custom visual design that establishes instant market authority',
  'Mobile-first responsive interfaces optimized for touch interactions and speed',
  'Dominant brand positioning that justifies higher prices and commands respect',
  'Direct 1-tap WhatsApp and phone call triggers that capture interested leads instantly',
  'Sub-second page speeds, clean modern React code, and top Google Lighthouse scores'
];

export const ProblemSolution = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Market Reality"
          title="Your Business Deserves More Than Just a"
          titleGradient="Social Media Page."
          subtitle="Relying solely on an Instagram or Facebook page leaves you vulnerable to algorithms, limits customer discovery, and fails to establish true enterprise authority."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Problem Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-rose-500/5 border border-rose-500/20 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                <span>The Outdated Approach</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Why Standard / Outdated Approaches Cost You Clients:
              </h3>
              <div className="space-y-4">
                {problems.map((p, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {p}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-8 mt-6 border-t border-rose-500/15">
              <p className="text-xs text-rose-600 dark:text-rose-400 font-mono-code">
                Result: Lost trust, lower conversion rates, and lost revenue to competitors.
              </p>
            </div>
          </div>

          {/* Solution Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 border border-cyan-500/30 flex flex-col justify-between relative shadow-lg">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The WebCubixs Standard</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                How We Engineer Your Digital Authority:
              </h3>
              <div className="space-y-4">
                {solutions.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                      {s}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-cyan-700 dark:text-cyan-300 font-mono-code">
                Result: High credibility, steady customer inquiries & measurable growth.
              </p>
              <Button to="/contact" variant="primary" size="sm" showArrow>
                LET'S FIX IT
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
