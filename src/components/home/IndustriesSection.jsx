import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { IndustryCard } from '../cards/IndustryCard';
import { INDUSTRIES } from '../../data/industriesData';

export const IndustriesSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredIndustries = activeFilter === 'all' 
    ? INDUSTRIES 
    : INDUSTRIES.filter(item => {
        if (activeFilter === 'hospitality') return item.id.includes('restaurant') || item.id.includes('hotel');
        if (activeFilter === 'lifestyle') return item.id.includes('salon') || item.id.includes('gym');
        if (activeFilter === 'services') return item.id.includes('clinic') || item.id.includes('estate') || item.id.includes('professional') || item.id.includes('auto') || item.id.includes('small');
        return true;
      });

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Industry Expertise"
          title="Purpose-Built Websites For"
          titleGradient="Your Specific Market"
          subtitle="Different businesses have distinct customer journeys. We tailor every architecture to your exact operational model and customer expectations."
        />

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All 9 Industries' },
            { id: 'hospitality', label: 'Dining & Hospitality' },
            { id: 'lifestyle', label: 'Salons & Fitness' },
            { id: 'services', label: 'Real Estate, Medical & Services' }
          ].map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid of Industries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIndustries.map((ind) => (
            <IndustryCard key={ind.id} industry={ind} />
          ))}
        </div>

      </div>
    </section>
  );
};
