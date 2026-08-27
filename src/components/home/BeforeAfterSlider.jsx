import React, { useState, useRef } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Sparkles, ArrowLeftRight, Check, X, MousePointerClick, ShieldAlert } from 'lucide-react';
import { Button } from '../common/Button';



export const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e) => {
    if (isDragging || e.buttons === 1) {
      handleMove(e.clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-neutral-50/50 dark:bg-[#07090f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Transformation Showcase"
          title="Interactive Website"
          titleGradient="Before & After Redesign"
          subtitle="Slide across to witness the transformation from an outdated, high-friction legacy website to a bespoke WebCubixs digital flagship."
        />

        {/* Quick Preset Buttons */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <button
            onClick={() => setSliderPos(0)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
              sliderPos === 0
                ? 'bg-rose-500 text-white shadow-sm'
                : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-rose-500/50'
            }`}
          >
            0% (View Before Only)
          </button>
          <button
            onClick={() => setSliderPos(50)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
              sliderPos === 50
                ? 'bg-cyan-500 text-white shadow-sm'
                : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-cyan-500/50'
            }`}
          >
            50% (Split Comparison)
          </button>
          <button
            onClick={() => setSliderPos(100)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
              sliderPos === 100
                ? 'bg-emerald-500 text-white shadow-sm'
                : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-emerald-500/50'
            }`}
          >
            100% (View After Only)
          </button>
        </div>

        {/* Visual Mockup Stage */}
        <div className="max-w-5xl mx-auto mb-16">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[420px] sm:h-[480px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-neutral-300 dark:border-neutral-700 select-none cursor-ew-resize bg-neutral-950"
          >
            {/* LAYER 1: AFTER (WebCubixs Next-Gen Design - Full Background Canvas) */}
            <div className="absolute inset-0 bg-[#070a12] text-white flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Browser Header Bar */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-neutral-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono-code text-cyan-400 font-semibold ml-2">
                    https://brand.com (WebCubixs Build)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-cyan-500 text-white shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    AFTER: REDESIGN
                  </span>
                  <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-mono-code bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    ⚡ PageSpeed: 98/100
                  </span>
                </div>
              </div>

              {/* Modern Website UI Content Mockup */}
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    <span>Modern Luxury Brand Experience</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    Elevated Aesthetics That Convert Visitors
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                    Sub-second static performance, dark/light mode elegance, crisp typography, and 1-tap WhatsApp consultation triggers.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="px-3 py-1 rounded-xl bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/30">
                      +160% Conversion Lift
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">
                      0.6s Load Speed
                    </span>
                    <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                      100% Mobile First
                    </span>
                  </div>
                </div>

                <div className="hidden md:flex md:col-span-4 justify-end">
                  <div className="p-4 rounded-2xl bg-neutral-900/90 border border-cyan-500/40 shadow-2xl space-y-2 text-right">
                    <div className="text-xs font-mono-code text-cyan-400">Direct Conversion</div>
                    <div className="text-xl font-display font-bold text-white">Instant WhatsApp</div>
                    <div className="text-[11px] text-neutral-400">1-Tap Booking Trigger</div>
                  </div>
                </div>
              </div>

              {/* Bottom Footer Bar */}
              <div className="relative z-10 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400 font-mono-code">
                <span>✓ React 19 + Tailwind CSS</span>
                <span>✓ Verified Mobile Responsive</span>
              </div>
            </div>

            {/* LAYER 2: BEFORE (Outdated Clunky Website - Clipped Overlay) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-[#e5e5e5] text-neutral-800 flex flex-col justify-between p-6 sm:p-8 border-r-4 border-cyan-500 shadow-2xl z-20"
              style={{ width: `${sliderPos}%` }}
            >
              {/* Internal fixed-width container to prevent text warping when sliding */}
              <div className="w-[850px] sm:w-[980px] flex flex-col justify-between h-full">
                
                {/* Browser Header Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-300">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-neutral-400" />
                    <div className="w-3 h-3 rounded-full bg-neutral-400" />
                    <div className="w-3 h-3 rounded-full bg-neutral-400" />
                    <span className="text-[11px] font-mono-code text-neutral-600 ml-2">
                      http://old-template-site.net/index.php?id=823
                    </span>
                  </div>
                  <div className="flex items-center gap-2 pr-6">
                    <span className="px-3 py-1 rounded-full text-xs font-mono-code font-bold bg-neutral-800 text-white flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                      BEFORE: OUTDATED
                    </span>
                    <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-xs font-mono-code bg-rose-200 text-rose-800 border border-rose-300">
                      ⚠️ PageSpeed: 34/100
                    </span>
                  </div>
                </div>

                {/* Clunky 2012 Old Layout Mockup */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
                  <div className="md:col-span-8 space-y-3">
                    <div className="inline-block px-2.5 py-0.5 bg-rose-100 border border-rose-300 text-rose-800 text-xs font-serif font-bold">
                      [Legacy WordPress Template 2014]
                    </div>
                    <h3 className="font-serif text-2xl sm:text-4xl font-bold text-neutral-900 leading-tight underline decoration-rose-500">
                      Welcome to Our Business Homepage
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-xl font-serif">
                      Click here to download PDF brochure (8.4MB). Notice: this page may not render correctly on mobile browsers or tablets.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <span className="px-2.5 py-1 bg-neutral-300 text-neutral-700 text-xs font-mono-code border border-neutral-400">
                        High 72% Bounce Rate
                      </span>
                      <span className="px-2.5 py-1 bg-rose-100 text-rose-700 text-xs font-mono-code border border-rose-300">
                        4.8s Load Time
                      </span>
                      <span className="px-2.5 py-1 bg-neutral-300 text-neutral-700 text-xs font-mono-code border border-neutral-400">
                        Broken Mobile Layout
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex md:col-span-4 justify-end pr-8">
                    <div className="p-4 bg-neutral-200 border-2 border-dashed border-neutral-400 text-center space-y-1">
                      <div className="text-xs font-mono-code text-rose-600 font-bold">No Direct WhatsApp</div>
                      <div className="text-sm font-serif text-neutral-700">Broken Contact Form</div>
                      <div className="text-[10px] text-neutral-500">Generic Stock Photo Missing</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Bar */}
                <div className="pt-3 border-t border-neutral-300 flex items-center justify-between text-xs text-neutral-600 font-mono-code">
                  <span>✗ Unminified Legacy Scripts</span>
                  <span>✗ Zero SEO Schema Markup</span>
                </div>

              </div>
            </div>

            {/* Slider Center Grab Handle */}
            <div
              className="absolute top-0 bottom-0 w-10 -ml-5 flex items-center justify-center pointer-events-none z-30 transition-transform"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.9)] border-2 border-white cursor-ew-resize">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>

          </div>

          <p className="text-center text-xs text-neutral-500 font-mono-code mt-4 flex items-center justify-center gap-1.5">
            <MousePointerClick className="w-4 h-4 text-cyan-500" />
            <span>Drag the center divider or use the preset buttons above to compare</span>
          </p>
        </div>

        {/* Side-by-Side Comparison Scorecard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          
          {/* Outdated Site Column */}
          <div className="p-6 sm:p-8 rounded-3xl bg-rose-500/5 border border-rose-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-lg font-bold text-rose-600 dark:text-rose-400">
                Outdated / Generic Website
              </h4>
              <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-rose-500/10 text-rose-500">
                Losing Clients
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>4.0s - 6.0s Load Speeds:</strong> Heavy uncompressed assets leading to immediate bounce.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>Broken Mobile Layouts:</strong> Clunky pinching and zooming required on smartphones.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>Friction-Heavy Inquiries:</strong> Long broken forms with zero instant WhatsApp integration.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                <span><strong>Weak Authority:</strong> Makes your business look small against established competitors.</span>
              </li>
            </ul>
          </div>

          {/* WebCubixs Redesign Column */}
          <div className="p-6 sm:p-8 rounded-3xl bg-cyan-500/5 border border-cyan-500/20 space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-lg font-bold text-cyan-600 dark:text-cyan-400">
                WebCubixs Next-Gen Build
              </h4>
              <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-500">
                High Prestige
              </span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-800 dark:text-neutral-200 font-medium">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span><strong>&lt; 0.8s Sub-Second Speeds:</strong> Core Web Vitals tuned for top Google SEO rankings.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span><strong>100% Mobile-First Touch:</strong> Native app-like fluidity on iOS, Android, and tablets.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span><strong>1-Tap Conversion Funnels:</strong> Smart WhatsApp & qualified lead capture forms.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span><strong>High-Impact Modern Identity:</strong> Positions your business as the premier authority in your market.</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center">
          <Button to="/contact" variant="primary" size="lg" showArrow>
            REDESIGN YOUR WEBSITE WITH WEBCUBIXS
          </Button>
        </div>

      </div>
    </section>
  );
};
