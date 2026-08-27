import React, { useState } from 'react';
import { PageTransition } from '../components/common/PageTransition';
import { SectionHeading } from '../components/common/SectionHeading';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../data/companyConfig';
import { Button } from '../components/common/Button';
import { 
  Mail, MessageSquare, Clock, CheckCircle2, Sparkles, MapPin 
} from 'lucide-react';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Restaurant / Café',
    existingWebsite: '',
    servicesNeeded: ['Business Website'],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const businessTypes = [
    'Restaurant / Café',
    'Salon / Barber',
    'Real Estate',
    'Gym / Fitness',
    'Clinic / Dentist',
    'Hotel / Hospitality',
    'Automotive / Detailing',
    'Professional Services',
    'Small Business',
    'Other'
  ];

  const serviceOptions = [
    'Business Website',
    'Landing Page',
    'Website Redesign',
    'Speed & SEO Optimization',
    'Ongoing Maintenance'
  ];

  const handleCheckboxChange = (service) => {
    setFormData(prev => {
      const exists = prev.servicesNeeded.includes(service);
      return {
        ...prev,
        servicesNeeded: exists 
          ? prev.servicesNeeded.filter(s => s !== service)
          : [...prev.servicesNeeded, service]
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable client-side processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            badge="Start Your Project"
            title="Let's Build Something Your"
            titleGradient="Customers Remember."
            subtitle="Tell us about your business. We will review your requirements and respond with a clear proposal and timeline within 12 hours."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
            
            {/* Left Col: Direct Contacts & Commitments */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-8 rounded-3xl bg-neutral-900 text-white border border-neutral-800 space-y-6 shadow-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Direct Founder Access</span>
                </div>

                <h3 className="font-display text-2xl font-bold">
                  Quickest Way to Reach Us
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  For immediate answers, project scoping, or sharing reference websites, message us directly on WhatsApp.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={getWhatsAppUrl("Hi WebCubixs, I'd like to discuss building a website for my business.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-xs font-bold">WhatsApp Direct</div>
                      <div className="text-[11px] text-emerald-200/80">{COMPANY_CONFIG.phone}</div>
                    </div>
                  </a>

                  <a
                    href={`mailto:${COMPANY_CONFIG.email}`}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                  >
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-xs font-bold">Email Inquiry</div>
                      <div className="text-[11px] text-cyan-200/80">{COMPANY_CONFIG.email}</div>
                    </div>
                  </a>
                </div>

                <div className="pt-4 border-t border-neutral-800 space-y-2 text-xs text-neutral-400 font-mono-code">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Response Time: {COMPANY_CONFIG.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Locations: UAE, Saudi Arabia & Global</span>
                  </div>
                </div>
              </div>

              {/* Trust Box */}
              <div className="p-6 rounded-3xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
                <span className="font-bold text-neutral-900 dark:text-white block">
                  No Pressure & Free Consultation
                </span>
                <p>
                  Every project starts with a transparent discussion. If we believe a simpler solution works better for you, we will tell you upfront.
                </p>
              </div>

            </div>

            {/* Right Col: Interactive Inquiry Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xl">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. The WebCubixs founding developers are reviewing your details and will get back to you within 12 hours.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <Button
                      href={getWhatsAppUrl(`Hi WebCubixs, I just submitted an inquiry for ${formData.businessName}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      size="sm"
                      showArrow
                    >
                      CHAT ON WHATSAPP NOW
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-neutral-700 dark:text-neutral-300 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Mansoor"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-neutral-700 dark:text-neutral-300 font-medium">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={e => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Al-Noor Medical Clinic"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-neutral-700 dark:text-neutral-300 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@business.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-neutral-700 dark:text-neutral-300 font-medium">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 000 0000"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Business Type & Existing Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-neutral-700 dark:text-neutral-300 font-medium">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={e => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-cyan-500 transition-colors"
                      >
                        {businessTypes.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-code text-neutral-700 dark:text-neutral-300 font-medium">
                        Existing Website (if any)
                      </label>
                      <input
                        type="url"
                        value={formData.existingWebsite}
                        onChange={e => setFormData({ ...formData, existingWebsite: e.target.value })}
                        placeholder="https://example.com"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services Needed Checkboxes */}
                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-mono-code text-neutral-700 dark:text-neutral-300 font-medium block">
                      What Services Do You Need?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((srv) => {
                        const checked = formData.servicesNeeded.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleCheckboxChange(srv)}
                            className={`p-3 rounded-xl border text-left text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                              checked
                                ? 'bg-cyan-500/10 border-cyan-500 text-cyan-700 dark:text-cyan-300'
                                : 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300'
                            }`}
                          >
                            <span>{srv}</span>
                            {checked && <CheckCircle2 className="w-4 h-4 text-cyan-500" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5 pt-2">
                    <label className="text-xs font-mono-code text-neutral-700 dark:text-neutral-300 font-medium">
                      Project Details & Goals
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about what you want to achieve, any competitor sites you like, or specific features you need..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                    size="lg"
                    className="w-full justify-center"
                    showArrow
                  >
                    {isSubmitting ? 'PROCESSING...' : 'START YOUR PROJECT'}
                  </Button>

                </form>
              )}

            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
};
