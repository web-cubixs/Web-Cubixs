import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PRICING_TIERS } from '../../data/pricingData';
import { Button } from '../common/Button';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingOverview = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-neutral-50/50 dark:bg-[#07090f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Transparent Investment"
          title="Tailored Packages Built For"
          titleGradient="Maximum ROI"
          subtitle="We don't publish generic fake price tags. Every project is scoped accurately to your business objectives with clear milestone deliverables."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`relative p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between ${
                tier.highlighted
                  ? 'bg-neutral-900 text-white border-2 border-cyan-400 shadow-[0_15px_40px_rgba(6,182,212,0.2)]'
                  : 'bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 text-neutral-900 dark:text-white shadow-sm'
              }`}
            >
              {/* Highlight Badge */}
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-mono-code font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{tier.badge}</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-extrabold text-2xl tracking-tight">
                    {tier.name}
                  </span>
                  <span className={`text-xs font-mono-code px-2.5 py-1 rounded-lg ${
                    tier.highlighted 
                      ? 'bg-white/10 text-cyan-300' 
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'
                  }`}>
                    {tier.timeline}
                  </span>
                </div>

                <p className={`text-xs leading-relaxed mb-6 ${
                  tier.highlighted ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'
                }`}>
                  {tier.description}
                </p>

                <div className={`p-4 rounded-2xl mb-6 ${
                  tier.highlighted ? 'bg-white/5 border border-white/10' : 'bg-neutral-100 dark:bg-neutral-800/50'
                }`}>
                  <span className="text-xs font-mono-code block text-neutral-400">
                    Pricing Guidance
                  </span>
                  <span className="font-display font-bold text-lg text-cyan-400">
                    {tier.priceNote}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono-code uppercase tracking-wider text-neutral-400 block mb-2">
                    Included Deliverables:
                  </span>
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs">
                      <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className={tier.highlighted ? 'text-neutral-200' : 'text-neutral-600 dark:text-neutral-300'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <Button
                to="/contact"
                variant={tier.highlighted ? 'primary' : 'outline'}
                size="lg"
                className="w-full justify-center"
                showArrow
              >
                {tier.ctaText}
              </Button>
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center max-w-2xl mx-auto text-xs text-neutral-600 dark:text-neutral-400">
          Need custom multi-language support (English & Arabic) or complex database integrations?{' '}
          <Link to="/contact" className="text-cyan-500 font-semibold underline underline-offset-4">
            Contact us for a tailored proposal
          </Link>
        </div>

      </div>
    </section>
  );
};
