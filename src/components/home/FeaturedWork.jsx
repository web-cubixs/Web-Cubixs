import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PortfolioCard } from '../cards/PortfolioCard';
import { PORTFOLIO_PROJECTS } from '../../data/portfolioData';
import { Button } from '../common/Button';
import { useAnimeReveal } from '../../hooks/useAnimeReveal';

export const FeaturedWork = () => {
  const featured = PORTFOLIO_PROJECTS.slice(0, 3);
  const containerRef = useAnimeReveal({ selector: '.work-reveal-card', staggerDelay: 120 });

  return (
    <section ref={containerRef} className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Demo Concepts & Showcases"
          title="What Our Work"
          titleGradient="Looks Like"
          subtitle="Explore our interactive agency concepts designed for modern businesses. Each build demonstrates our standard for visual polish, speed, and conversion engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((project) => (
            <div key={project.id} className="work-reveal-card">
              <PortfolioCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/work" variant="glow" size="lg" showArrow>
            VIEW ALL 6 DEMO SHOWCASES
          </Button>
        </div>

      </div>
    </section>
  );
};
