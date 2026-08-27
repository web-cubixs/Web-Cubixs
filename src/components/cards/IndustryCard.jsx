import React from 'react';
import { 
  Utensils, Scissors, Building, Dumbbell, Stethoscope, Hotel, Car, Briefcase, Store, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const industryIcons = {
  Utensils,
  Scissors,
  Building,
  Dumbbell,
  Stethoscope,
  Hotel,
  Car,
  Briefcase,
  Store
};

export const IndustryCard = ({ industry }) => {
  const Icon = industryIcons[industry.iconName] || Store;

  return (
    <div className="group relative p-6 rounded-3xl bg-white/70 dark:bg-neutral-900/70 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-[0_12px_24px_rgba(6,182,212,0.1)]">
      <div>
        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
          <Icon className="w-5 h-5" />
        </div>

        <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
          {industry.name}
        </h3>

        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
          {industry.tagline}
        </p>

        {/* Features Checklist */}
        <div className="space-y-1.5 mb-6">
          {industry.features.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-600 dark:text-neutral-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 flex-shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        to="/contact"
        className="pt-3 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500"
      >
        <span>Build For My {industry.name}</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};
