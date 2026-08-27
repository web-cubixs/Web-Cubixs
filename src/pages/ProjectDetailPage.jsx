import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PageTransition } from '../components/common/PageTransition';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { Button } from '../components/common/Button';
import { CTASection } from '../components/home/CTASection';
import { 
  ArrowLeft, Sparkles, CheckCircle2, Smartphone, Monitor 
} from 'lucide-react';
import { getWhatsAppUrl } from '../data/companyConfig';

export const ProjectDetailPage = () => {
  const { projectSlug } = useParams();
  const [activeTab, setActiveTab] = useState('desktop');

  const project = PORTFOLIO_PROJECTS.find(p => p.slug === projectSlug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  return (
    <PageTransition>
      <div className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono-code text-neutral-500 hover:text-cyan-500 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all demo showcases</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="space-y-4 mb-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                DEMO CONCEPT
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono-code bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                {project.industry}
              </span>
              <span className="text-xs text-neutral-400 font-mono-code">
                {project.category}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              {project.title} — {project.tagline}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Interactive Mockup Preview Stage */}
          <div className="mb-16 rounded-3xl bg-neutral-950 border border-neutral-800 p-4 sm:p-8 shadow-2xl">
            
            {/* View Mode Controls */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('desktop')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === 'desktop'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Monitor className="w-4 h-4" />
                  <span>Desktop View</span>
                </button>
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    activeTab === 'mobile'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Mobile View</span>
                </button>
              </div>

              <span className="text-[11px] font-mono-code text-cyan-400 hidden sm:inline-block">
                Interactive Concept Stage
              </span>
            </div>

            {/* Stage Screen */}
            <div className="flex items-center justify-center min-h-[400px]">
              {activeTab === 'desktop' ? (
                <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900">
                  <div className="h-7 bg-neutral-900 px-3 flex items-center gap-1.5 border-b border-neutral-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[10px] font-mono-code text-neutral-500 ml-4">
                      https://webcubixs.demo/{project.slug}
                    </span>
                  </div>
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full aspect-[16/9] object-cover object-top"
                  />
                </div>
              ) : (
                <div className="w-[300px] sm:w-[320px] rounded-[36px] overflow-hidden border-4 border-neutral-700 shadow-2xl bg-neutral-900 p-2">
                  <div className="w-20 h-4 bg-neutral-800 rounded-full mx-auto mb-2" />
                  <div className="rounded-[24px] overflow-hidden border border-neutral-800">
                    <img
                      src={project.mobileImage}
                      alt={`${project.title} Mobile`}
                      className="w-full aspect-[9/16] object-cover object-top"
                    />
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Deep Case Study Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            
            {/* Left Col: Problem, Solution & Features */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Problem Statement */}
              <div className="p-8 rounded-3xl bg-rose-500/5 border border-rose-500/20 space-y-3">
                <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
                  The Industry Challenge & Pain Points
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {project.clientProblem}
                </p>
              </div>

              {/* WebCubixs Solution */}
              <div className="p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/20 space-y-3">
                <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white">
                  The WebCubixs Engineering Solution
                </h3>
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Key Features Implemented */}
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                  Key Engineered Features
                </h3>
                <div className="space-y-3">
                  {project.features.map((f, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-neutral-800 dark:text-neutral-200 font-medium">
                        {f}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Grid */}
              <div className="space-y-4 pt-4">
                <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                  Detail Views
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.detailImages.map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 aspect-[4/3]">
                      <img src={img} alt="Detail" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Business Benefits & Tech Stack */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Business Benefits Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 space-y-4">
                <h4 className="font-display text-lg font-bold text-neutral-900 dark:text-white">
                  Intended Business Benefits
                </h4>
                <div className="space-y-3">
                  {project.businessBenefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0 mt-1.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Specs */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-4">
                <h4 className="font-display text-lg font-bold text-neutral-900 dark:text-white">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-xl text-xs font-mono-code bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white space-y-4 shadow-xl">
                <h4 className="font-display text-xl font-bold">
                  Want a Similar Website For Your Business?
                </h4>
                <p className="text-xs text-white/90 leading-relaxed">
                  We can tailor this concept and architectural flow to your exact brand, menu, inventory, or booking model in under 14 days.
                </p>
                <div className="pt-2 space-y-2">
                  <Button to="/contact" variant="glow" size="md" className="w-full justify-center" showArrow>
                    START YOUR BUILD
                  </Button>
                  <Button
                    href={getWhatsAppUrl(`Hi WebCubixs, I saw your ${project.title} concept and would love to discuss a similar website for my business.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                    className="w-full justify-center text-xs"
                  >
                    Discuss on WhatsApp
                  </Button>
                </div>
              </div>

            </div>

          </div>

          <CTASection />

        </div>
      </div>
    </PageTransition>
  );
};
