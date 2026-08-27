import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';
import { AIChatDrawer } from './AIChatDrawer';

export const FloatingActions = () => {
  const [aiChatOpen, setAiChatOpen] = useState(false);

  return (
    <>
      {/* Coordinated Floating Bar at Bottom Right */}
      <aside 
        className="fixed bottom-5 right-4 sm:right-6 z-[80] flex items-center gap-2.5 pointer-events-auto"
        aria-label="Quick contact and assistance options"
      >
        
        {/* Ask WebCubixs AI Assistant Trigger */}
        <button
          onClick={() => setAiChatOpen(!aiChatOpen)}
          className={`group flex items-center gap-2 px-3.5 sm:px-4 py-3 rounded-full transition-all duration-300 cursor-pointer select-none active:scale-95 border ${
            aiChatOpen
              ? 'bg-cyan-500 text-white border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.6)]'
              : 'bg-neutral-900 text-white dark:bg-neutral-800 dark:text-neutral-100 border-neutral-700 hover:border-cyan-400 shadow-[0_4px_25px_rgba(0,0,0,0.35)]'
          }`}
          aria-label="Open Ask WebCubixs AI Assistant"
          title="Ask WebCubixs AI"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
          </div>
          <span className="text-xs font-semibold tracking-wide hidden sm:inline-block">
            Ask AI
          </span>
        </button>

        {/* WhatsApp Fixed Button */}
        <WhatsAppButton />
      </aside>

      {/* Expandable AI Chat Drawer */}
      <AIChatDrawer isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} />
    </>
  );
};
