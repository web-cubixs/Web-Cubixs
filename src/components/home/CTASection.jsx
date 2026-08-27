import React from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../data/companyConfig';

export const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 lg:p-20 rounded-3xl bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 text-white shadow-2xl text-center space-y-8 relative overflow-hidden">
          
          {/* Subtle grid pattern inside */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-code bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Elevate Your Business Online?</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to Give Your Business a{' '}
            <span className="text-gradient">
              Better Website?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Let's build a fast, credible, and conversion-optimized digital presence that wins clients and represents the true quality of your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button to="/contact" variant="primary" size="lg" showArrow className="w-full sm:w-auto">
              GET YOUR WEBSITE
            </Button>
            <Button href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg" className="w-full sm:w-auto">
              CHAT ON WHATSAPP
            </Button>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400 font-mono-code">
            <span>✓ Direct Developer Access</span>
            <span>✓ Guaranteed Delivery Timeline</span>
            <span>✓ 100% Custom React Architecture</span>
          </div>

        </div>
      </div>
    </section>
  );
};
