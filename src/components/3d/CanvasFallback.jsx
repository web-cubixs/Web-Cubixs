import React from 'react';
import { Layers, Sparkles } from 'lucide-react';

export const CanvasFallback = () => {
  return (
    <div className="w-full h-full min-h-[380px] sm:min-h-[440px] flex items-center justify-center p-6 relative overflow-hidden rounded-3xl bg-gradient-to-b from-cyan-500/10 via-blue-500/5 to-purple-500/10 border border-neutral-200/80 dark:border-neutral-800/80">
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      
      {/* Decorative Glow Orbs */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl -top-10 -right-10 pointer-events-none" />
      <div className="absolute w-72 h-72 rounded-full bg-purple-500/20 blur-3xl -bottom-10 -left-10 pointer-events-none" />

      {/* Futuristic Isometric Digital UI Composition */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-sm space-y-6">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 animate-pulse-glow" />
          <div className="w-20 h-20 rounded-xl bg-neutral-900 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-2xl relative z-10">
            <Layers className="w-10 h-10 animate-float" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WebCubixs Engine</span>
          </div>
          <h3 className="font-display text-lg font-bold text-neutral-900 dark:text-white">
            High-Performance Architecture
          </h3>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            Engineered with modern React, sub-second execution, and tailored conversion optimization.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full pt-2">
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-center">
            <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400">&lt; 0.8s</div>
            <div className="text-[10px] text-neutral-500">Speed</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-center">
            <div className="text-xs font-bold text-blue-600 dark:text-blue-400">100%</div>
            <div className="text-[10px] text-neutral-500">Mobile</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white/60 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-center">
            <div className="text-xs font-bold text-purple-600 dark:text-purple-400">Direct</div>
            <div className="text-[10px] text-neutral-500">Devs</div>
          </div>
        </div>
      </div>
    </div>
  );
};
