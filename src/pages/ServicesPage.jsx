import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeading } from '../components/common/SectionHeading';
import { SERVICES } from '../data/servicesData';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/home/CTASection';
import { CheckCircle2, Globe, Zap, RefreshCw, Smartphone, Gauge, ShieldCheck } from 'lucide-react';

const iconMap = {
  Globe,
  Zap,
  RefreshCw,
  Smartphone,
  Gauge,
  ShieldCheck
};

export const ServicesPage = () => {
  return (
    <PageTransition>
      <div className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <SectionHeading
            badge="Engineering Solutions"
            title="Comprehensive Services Built For"
            titleGradient="Business Growth"
            subtitle="Explore our specialized digital capabilities. Every service is delivered with 100% custom code, mobile-first responsiveness, and conversion architecture."
          />

          {/* Deep-dive Services List */}
          <div className="space-y-12 mb-24">
            {SERVICES.map((service, idx) => {
              const Icon = iconMap[service.iconName] || Globe;
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="p-8 sm:p-12 rounded-3xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm hover:border-cyan-500/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  {/* Left info */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono-code text-cyan-600 dark:text-cyan-400 font-semibold uppercase">
                          {service.badge}
                        </span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Deliverables Grid */}
                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono-code uppercase tracking-wider text-neutral-500 font-bold">
                        What's Included:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Button to="/contact" variant="primary" size="md" showArrow>
                        GET A QUOTE FOR THIS SERVICE
                      </Button>
                    </div>
                  </div>

                  {/* Right Highlights Card */}
                  <div className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/80 space-y-6 ${isEven ? 'lg:order-1' : ''}`}>
                    <div>
                      <span className="text-xs font-mono-code text-neutral-500 block mb-1">
                        Typical Timeline
                      </span>
                      <span className="font-display text-xl font-bold text-neutral-900 dark:text-white">
                        {service.timeline}
                      </span>
                    </div>

                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                      <span className="text-xs font-mono-code text-neutral-500 block mb-1">
                        Best Suited For
                      </span>
                      <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">
                        {service.idealFor}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700 space-y-2">
                      <span className="text-xs font-mono-code text-cyan-600 dark:text-cyan-400 font-semibold block">
                        Direct Developer Guarantee
                      </span>
                      <p className="text-[11px] text-neutral-500">
                        Zero middlemen. Continuous feedback loops directly with the two founding engineers.
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          <CTASection />
        </div>
      </div>
    </PageTransition>
  );
};
