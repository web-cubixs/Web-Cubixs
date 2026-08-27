import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { FAQ_ITEMS } from '../../data/faqData';
import { ChevronDown } from 'lucide-react';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../data/companyConfig';

export const FAQSection = () => {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0].id);

  const toggleFaq = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Got Questions?"
          title="Frequently Answered"
          titleGradient="Questions"
          subtitle="Everything you need to know about our website engineering, hosting, timelines, and ongoing support."
        />

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-neutral-900 border-cyan-500/50 shadow-md'
                    : 'bg-white/70 dark:bg-neutral-900/60 border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-cyan-500/10 text-cyan-500' : 'text-neutral-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed border-t border-neutral-100 dark:border-neutral-800/80 pt-4 animate-[fadeIn_0.2s_ease-out]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="text-center p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/20 space-y-4">
          <h4 className="font-display text-lg font-bold text-neutral-900 dark:text-white">
            Have a question not covered here?
          </h4>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
            Speak directly with the founding developers. We respond within a few hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button href={getWhatsAppUrl("Hi WebCubixs, I have a specific question about building a website.")} target="_blank" rel="noopener noreferrer" variant="primary" size="sm" showArrow>
              CHAT ON WHATSAPP
            </Button>
            <Button to="/contact" variant="outline" size="sm">
              SEND AN INQUIRY
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
