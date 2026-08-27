import React, { useState } from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeading } from '../components/common/SectionHeading';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioCard } from '../components/cards/PortfolioCard';
import { CTASection } from '../components/home/CTASection';
import { Info } from 'lucide-react';

export const WorkPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Hospitality', 'Grooming & Lifestyle', 'Luxury Real Estate', 'Fitness & Athletics', 'Automotive & Fleet', 'Healthcare & Wellness'];

  const filteredProjects = activeCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Agency Showcase"
            title="Demo Concepts &"
            titleGradient="Portfolio Showcases"
            subtitle="Explore our curated agency demo concepts. Built with real-world business requirements, sub-second performance, and tailored conversion funnels."
          />

          {/* DEMO CONCEPT Disclaimer Banner */}
          <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-amber-800 dark:text-amber-300 text-xs sm:text-sm">
            <Info className="w-5 h-5 flex-shrink-0 text-amber-500 mt-0.5" />
            <div>
              <span className="font-bold uppercase font-mono-code mr-1">Transparency Notice:</span>
              The projects shown below are proprietary <strong>DEMO CONCEPTS</strong> engineered by WebCubixs to demonstrate our design caliber, code architecture, and industry-specific conversion flows for prospective clients.
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredProjects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>

          <CTASection />

        </div>
      </div>
    </PageTransition>
  );
};
