import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary', // primary | secondary | outline | ghost | glow
  size = 'md',        // sm | md | lg
  showArrow = false,
  className = '',
  type = 'button',
  disabled = false,
  target,
  rel,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_6px_25px_rgba(6,182,212,0.4)] border border-cyan-400/30",
    glow: "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border border-neutral-700/50 dark:border-neutral-200 hover:border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.35)]",
    secondary: "bg-neutral-100 hover:bg-neutral-200 text-neutral-900 dark:bg-neutral-800/80 dark:hover:bg-neutral-700 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700",
    outline: "bg-transparent hover:bg-cyan-500/10 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 hover:border-cyan-500/50",
    ghost: "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 relative z-10" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClass} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClass} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClass} {...props}>
      {content}
    </button>
  );
};
