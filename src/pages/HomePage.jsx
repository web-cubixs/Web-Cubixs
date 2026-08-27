import React from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { HeroSection } from '../components/home/HeroSection';
import { ValueStrip } from '../components/home/ValueStrip';
import { ProblemSolution } from '../components/home/ProblemSolution';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { BeforeAfterSlider } from '../components/home/BeforeAfterSlider';
import { FeaturedWork } from '../components/home/FeaturedWork';
import { WhyWebCubixs } from '../components/home/WhyWebCubixs';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { PricingOverview } from '../components/home/PricingOverview';
import { FAQSection } from '../components/home/FAQSection';
import { CTASection } from '../components/home/CTASection';

export const HomePage = () => {
  return (
    <PageTransition>
      <div className="space-y-0">
        <HeroSection />
        <ValueStrip />
        <ProblemSolution />
        <ServicesOverview />
        <IndustriesSection />
        <BeforeAfterSlider />
        <FeaturedWork />
        <WhyWebCubixs />
        <ProcessTimeline />
        <PricingOverview />
        <FAQSection />
        <CTASection />
      </div>
    </PageTransition>
  );
};
