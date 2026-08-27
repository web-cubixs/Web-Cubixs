import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Zap, RefreshCw, Smartphone, Gauge, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Globe,
  Zap,
  RefreshCw,
  Smartphone,
  Gauge,
  ShieldCheck
};

export const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.iconName] || Globe;

  return (
    <div className="group relative p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-[0_15px_30px_rgba(6,182,212,0.1)]">
      
      {/* Ambient background glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div>
        {/* Top bar with Icon & Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono-code bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700">
            {service.badge}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="font-display text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
          {service.title}
        </h3>
        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Core Inclusions / Deliverables */}
        <div className="space-y-2 mb-6">
          {service.deliverables.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
        <span className="text-xs font-mono-code text-neutral-500">
          {service.timeline}
        </span>
        <Link
          to="/services"
          className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform"
        >
          <span>Explore Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
