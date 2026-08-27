import React from 'react';

export const SectionHeading = ({
  badge,
  title,
  titleGradient = '',
  subtitle,
  centered = true,
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono-code font-medium mb-4 border transition-colors ${
          centered ? 'mx-auto' : ''
        } bg-cyan-500/10 border-cyan-500/20 text-cyan-700 dark:text-cyan-400`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          {badge}
        </div>
      )}
      
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.15] mb-4">
        {title}{' '}
        {titleGradient && (
          <span className="text-gradient">
            {titleGradient}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
