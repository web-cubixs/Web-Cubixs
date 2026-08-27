import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Shield, Code } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../../data/companyConfig';

export const Footer = () => {
  return (
    <footer className="relative bg-neutral-100 dark:bg-[#06080e] text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group select-none">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-white dark:bg-neutral-950 rounded-[11px] flex items-center justify-center">
                  <span className="font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 text-base">
                    W
                  </span>
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-neutral-900 dark:text-white">
                Web<span className="text-cyan-500">Cubixs</span>
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed max-w-sm text-neutral-600 dark:text-neutral-400">
              {COMPANY_CONFIG.mission}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {COMPANY_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_CONFIG.email}`}
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{COMPANY_CONFIG.email}</span>
              </a>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div>
            <h4 className="font-display text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-cyan-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-500 transition-colors">
                  Services & Packages
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-cyan-500 transition-colors">
                  Work & Demos
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-cyan-500 transition-colors">
                  5-Step Process
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-500 transition-colors">
                  About WebCubixs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-500 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Nav Col 2 - Demo Showcases */}
          <div>
            <h4 className="font-display text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Demo Showcases
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/work/bella-cafe" className="hover:text-cyan-500 transition-colors flex items-center gap-1.5">
                  Bella Café <span className="text-[10px] text-amber-500 font-mono-code">(Café)</span>
                </Link>
              </li>
              <li>
                <Link to="/work/elite-cuts" className="hover:text-cyan-500 transition-colors flex items-center gap-1.5">
                  Elite Cuts <span className="text-[10px] text-yellow-500 font-mono-code">(Salon)</span>
                </Link>
              </li>
              <li>
                <Link to="/work/prime-estate" className="hover:text-cyan-500 transition-colors flex items-center gap-1.5">
                  Prime Estate <span className="text-[10px] text-sky-500 font-mono-code">(Real Estate)</span>
                </Link>
              </li>
              <li>
                <Link to="/work/ironfit" className="hover:text-cyan-500 transition-colors flex items-center gap-1.5">
                  IronFit <span className="text-[10px] text-rose-500 font-mono-code">(Fitness)</span>
                </Link>
              </li>
              <li>
                <Link to="/work/autodrive" className="hover:text-cyan-500 transition-colors flex items-center gap-1.5">
                  AutoDrive <span className="text-[10px] text-cyan-500 font-mono-code">(Automotive)</span>
                </Link>
              </li>
              <li>
                <Link to="/work/medcare" className="hover:text-cyan-500 transition-colors flex items-center gap-1.5">
                  MedCare <span className="text-[10px] text-emerald-500 font-mono-code">(Clinic)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Markets */}
          <div>
            <h4 className="font-display text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Target Markets
            </h4>
            <ul className="space-y-2 text-xs text-neutral-500 dark:text-neutral-400">
              <li>🇦🇪 UAE (Dubai, Abu Dhabi)</li>
              <li>🇸🇦 Saudi Arabia (Riyadh, Jeddah)</li>
              <li>🇶🇦 Qatar (Doha)</li>
              <li>🇰🇼 Kuwait</li>
              <li>🇵🇰 Pakistan (Karachi, Lahore)</li>
              <li>🌍 Global International</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-neutral-500">
            © {new Date().getFullYear()} WebCubixs. All rights reserved. Custom built with React & Tailwind CSS.
          </p>
          <div className="flex items-center gap-6 text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-500" />
              100% Custom Code
            </span>
            <span className="flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-purple-500" />
              2-Person Dev Studio
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
