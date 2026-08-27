let msgCounter = 0;
const generateId = (prefix) => `${prefix}-${Date.now()}-${++msgCounter}`;
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, X, Bot, ArrowRight, RefreshCw, RotateCcw, AlertTriangle } from 'lucide-react';
import { AIService } from '../../services/aiService';
import { AI_KNOWLEDGE } from '../../data/aiKnowledge';
import { getWhatsAppUrl } from '../../data/companyConfig';

export const AIChatDrawer = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hi there! I'm the WebCubixs AI Sales Assistant. We build modern, high-speed, and conversion-focused websites for businesses worldwide.\n\nHow can I help you today?",
      suggestedActions: [
        { label: 'View Demo Websites', action: 'navigate', url: '/work' },
        { label: 'Our 6 Services', action: 'navigate', url: '/services' },
        { label: 'Chat on WhatsApp', action: 'whatsapp', url: getWhatsAppUrl() }
      ]
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [lastFailedQuery, setLastFailedQuery] = useState(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  const handleSend = async (customText) => {
    const textToSend = customText || inputVal;
    if (!textToSend.trim() || isTyping) return;

    setLastFailedQuery(null);

    const userMessage = {
      id: 'user-' + generateId('msg'),
      sender: 'user',
      text: textToSend.trim()
    };

    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    if (!customText) setInputVal('');
    setIsTyping(true);

    try {
      const response = await AIService.sendMessage({
        message: textToSend.trim(),
        history: newHistory
      });

      const assistantMessage = {
        id: 'bot-' + generateId('msg'),
        sender: 'assistant',
        text: response.text,
        suggestedActions: response.suggestedActions || []
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setLastFailedQuery(textToSend.trim());
      const errorMessage = {
        id: 'error-' + generateId('msg'),
        sender: 'assistant',
        isError: true,
        text: "I encountered a connection issue while communicating with Gemini. You can retry your request below or connect directly with the founders on WhatsApp.",
        suggestedActions: [
          { label: 'Chat on WhatsApp', action: 'whatsapp', url: getWhatsAppUrl(`Hi WebCubixs, I was asking the AI: "${textToSend.trim()}"`) }
        ]
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleRetry = () => {
    if (lastFailedQuery) {
      handleSend(lastFailedQuery);
    }
  };

  const handleActionClick = (action) => {
    if (action.action === 'navigate') {
      onClose();
      navigate(action.url);
    } else if (action.action === 'whatsapp') {
      window.open(action.url, '_blank');
    }
  };

  const handleReset = () => {
    setLastFailedQuery(null);
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        text: "Conversation refreshed! Ask me anything about our website builds, timelines, packages, or services.",
        suggestedActions: [
          { label: 'Restaurant Websites', action: 'send', text: 'Can you build a website for my restaurant?' },
          { label: 'Pricing & Packages', action: 'send', text: 'How much does a website cost?' },
          { label: 'Timeline & Speed', action: 'send', text: 'How long does a website take?' }
        ]
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 sm:inset-auto sm:bottom-20 sm:right-6 z-[90] w-full sm:w-[420px] h-full sm:h-[620px] sm:max-h-[85vh] flex flex-col bg-white dark:bg-neutral-900 border sm:border-neutral-200/90 dark:sm:border-neutral-800/90 sm:rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 animate-[fadeIn_0.2s_ease-out]">
      
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-950 text-white flex items-center justify-between border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px]">
            <div className="w-full h-full bg-neutral-950 rounded-[11px] flex items-center justify-center text-cyan-400">
              <Bot className="w-5 h-5" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-neutral-900" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="font-display text-sm font-bold tracking-tight">Ask WebCubixs</h3>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-mono-code bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                Gemini AI
              </span>
            </div>
            <p className="text-[10px] text-neutral-400">Powered by official Google GenAI SDK</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={handleReset}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            title="Reset Chat"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close AI Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-neutral-50/50 dark:bg-neutral-950/50 text-sm">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-start gap-2 max-w-[88%]">
              {msg.sender === 'assistant' && (
                <div className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 border ${
                  msg.isError
                    ? 'bg-rose-500/10 text-rose-500 border-rose-500/20'
                    : 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20'
                }`}>
                  {msg.isError ? <AlertTriangle className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                </div>
              )}
              
              <div
                className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-line text-xs sm:text-sm ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-tr-none shadow-sm'
                    : msg.isError
                    ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200 border border-rose-200 dark:border-rose-800/80 rounded-tl-none'
                    : 'bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-tl-none border border-neutral-200/80 dark:border-neutral-700/80 shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>

            {/* Error Retry Option */}
            {msg.isError && lastFailedQuery && (
              <div className="mt-2 ml-8">
                <button
                  onClick={handleRetry}
                  disabled={isTyping}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500 text-white hover:bg-rose-600 transition-colors shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retry Message</span>
                </button>
              </div>
            )}

            {/* Suggested Action Buttons */}
            {msg.suggestedActions && msg.suggestedActions.length > 0 && (
              <div className="mt-2.5 ml-8 flex flex-wrap gap-1.5">
                {msg.suggestedActions.map((act, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      if (act.action === 'send') {
                        handleSend(act.text);
                      } else {
                        handleActionClick(act);
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer select-none"
                  >
                    <span>{act.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center gap-2 text-neutral-400 ml-8 text-xs">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.2s]" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-bounce [animation-delay:0.4s]" />
            <span className="font-mono-code text-[10px] text-cyan-500">Gemini is responding...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Starter Chips */}
      {messages.length <= 2 && (
        <div className="px-3 py-2 bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 overflow-x-auto flex gap-1.5 no-scrollbar text-xs">
          {AI_KNOWLEDGE.suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-2.5 py-1 rounded-lg whitespace-nowrap bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-cyan-500 transition-colors text-[11px]"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-2"
      >
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Ask anything about our web builds..."
          className="flex-1 px-3.5 py-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white placeholder-neutral-400 text-xs focus:outline-none focus:border-cyan-500 transition-colors"
          disabled={isTyping}
        />
        <button
          type="submit"
          disabled={!inputVal.trim() || isTyping}
          className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white disabled:opacity-40 hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer shadow-sm"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
