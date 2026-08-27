import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../common/Button';
import { HeroScene } from '../3d/HeroScene';
import { COMPANY_CONFIG } from '../../data/companyConfig';

export const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambience Grids & Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-xs font-mono-code font-medium">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span>High-Performance Web Studio</span>
              <span className="hidden sm:inline text-neutral-400">• UAE, KSA & Global</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.08]">
              Websites That Make Your Business{' '}
              <span className="text-gradient">
                Stand Out.
              </span>
            </h1>

            {/* Supporting Subheadline */}
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {COMPANY_CONFIG.subheadline}
            </p>

            {/* Key Differentiator Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-medium text-neutral-600 dark:text-neutral-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>100% Custom Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Sub-Second Load Times</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                <span>Direct Developer Access</span>
              </div>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <Button to="/contact" variant="primary" size="lg" showArrow className="w-full sm:w-auto">
                GET YOUR WEBSITE
              </Button>
              <Button to="/work" variant="secondary" size="lg" className="w-full sm:w-auto">
                VIEW OUR WORK
              </Button>
            </div>

            {/* Regional Markets Served Strip */}
            <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <p className="text-xs text-neutral-500 font-mono-code mb-2">
                TRUSTED BY BUSINESSES ACROSS:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800/70">
                  🇦🇪 United Arab Emirates
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800/70">
                  🇸🇦 Saudi Arabia
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800/70">
                  🇶🇦 Qatar
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/70 dark:border-neutral-800/70">
                  🇵🇰 Pakistan
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Experience */}
          <div className="lg:col-span-5 relative">
            <HeroScene />
          </div>

        </div>
      </div>
    </section>
  );
};
