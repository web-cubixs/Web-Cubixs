import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ServiceCard } from '../cards/ServiceCard';
import { SERVICES } from '../../data/servicesData';
import { Button } from '../common/Button';
import { useAnimeReveal } from '../../hooks/useAnimeReveal';

export const ServicesOverview = () => {
  const containerRef = useAnimeReveal({ selector: '.service-reveal-card', staggerDelay: 100 });

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-neutral-50/50 dark:bg-[#07090f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Tailored Engineering"
          title="Engineered Services to"
          titleGradient="Elevate Your Business"
          subtitle="From bespoke corporate flagships to high-converting campaign landing pages and legacy modernization, we build websites that work as 24/7 client generators."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-reveal-card">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Button to="/services" variant="glow" size="lg" showArrow>
            EXPLORE ALL SERVICES & PACKAGES
          </Button>
        </div>

      </div>
    </section>
  );
};
