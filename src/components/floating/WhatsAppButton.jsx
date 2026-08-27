import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../data/companyConfig';

export const WhatsAppButton = ({ className = '' }) => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-[0_4px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_30px_rgba(16,185,129,0.5)] border border-emerald-400/40 transition-all duration-300 cursor-pointer select-none active:scale-95 ${className}`}
      aria-label="Chat directly with WebCubixs on WhatsApp"
      title="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-white rounded-full animate-ping" />
      </div>
      <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
        WhatsApp
      </span>
    </a>
  );
};
