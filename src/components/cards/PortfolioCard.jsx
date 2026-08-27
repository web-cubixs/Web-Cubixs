import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';

export const PortfolioCard = ({ project }) => {
  return (
    <div className="group relative rounded-3xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 overflow-hidden hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]">
      
      {/* Browser / Device Mockup Window Header */}
      <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden border-b border-neutral-200/60 dark:border-neutral-800/80">
        {/* Browser Top Chrome */}
        <div className="absolute top-0 inset-x-0 h-7 bg-neutral-900/90 backdrop-blur-md z-20 flex items-center justify-between px-3 border-b border-neutral-800/80">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[10px] font-mono-code text-neutral-400 truncate max-w-[150px]">
            https://webcubixs.demo/{project.slug}
          </span>
          <div className="w-3 h-3" />
        </div>

        {/* Screenshot Image with Hover Zoom */}
        <img
          src={project.heroImage}
          alt={`${project.title} - ${project.tagline}`}
          loading="lazy"
          className="w-full h-full object-cover object-top pt-7 group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* DEMO CONCEPT Badge */}
        <div className="absolute top-9 right-3 z-20">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono-code font-bold bg-neutral-950/80 text-amber-400 border border-amber-400/40 backdrop-blur-md shadow-lg flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            DEMO CONCEPT
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
        <div>
          {/* Industry tag */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-mono-code text-cyan-600 dark:text-cyan-400 font-medium uppercase tracking-wider">
              {project.industry}
            </span>
            <span className="text-xs text-neutral-400 font-mono-code">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
            {project.summary}
          </p>

          {/* Features Highlights */}
          <div className="space-y-1.5 mb-6">
            {project.features.slice(0, 2).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                <Check className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <Link
            to={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
