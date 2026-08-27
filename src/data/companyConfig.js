export const COMPANY_CONFIG = {
  name: 'WebCubixs',
  tagline: 'Websites That Make Your Business Stand Out.',
  subheadline: 'We design and build modern, fast and professional websites that help businesses look credible, attract customers and turn visitors into clients.',
  mission: 'A boutique two-person web development studio dedicated to crafting high-performance, conversion-engineered digital experiences for businesses across the UAE, Saudi Arabia, Qatar, Kuwait, Pakistan, and global markets.',
  email: 'hello@webcubixs.com',
  phone: '+971 50 123 4567',
  whatsappNumber: '+971501234567',
  whatsappDefaultMessage: "Hi WebCubixs, I'm interested in getting a website for my business.",
  location: 'Dubai, UAE & Remote Global',
  turnaroundTime: '7 - 21 Business Days',
  responseTime: '< 12 Hours Guaranteed',
  teamStructure: '2-Person Specialized Studio (Direct Founder-Led Development)',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/webcubixs',
    twitter: 'https://x.com/webcubixs',
    github: 'https://github.com/webcubixs',
    instagram: 'https://instagram.com/webcubixs'
  },
  markets: [
    'United Arab Emirates (Dubai, Abu Dhabi, Sharjah)',
    'Saudi Arabia (Riyadh, Jeddah, Dammam)',
    'Qatar (Doha)',
    'Kuwait (Kuwait City)',
    'Pakistan (Karachi, Lahore, Islamabad)',
    'International & North America'
  ],
  stats: [
    { label: 'Direct Dev Access', value: '100%', detail: 'Zero account managers or middlemen' },
    { label: 'Avg. Load Speed', value: '< 0.8s', detail: 'Google PageSpeed 95+ target' },
    { label: 'Mobile Optimized', value: '100%', detail: 'Engineered for 70%+ mobile traffic' },
    { label: 'Delivery Pace', value: '14 Days', detail: 'Typical turnaround for business sites' }
  ],
  pillars: [
    {
      title: 'Built Around Your Business',
      desc: 'Custom tailored architecture matched to your revenue goals, customer journey, and distinct industry positioning — never generic templates.'
    },
    {
      title: 'Modern Design',
      desc: 'Contemporary visual hierarchy, clean typography, depth, and tasteful micro-interactions that communicate high prestige and trust.'
    },
    {
      title: 'Mobile First',
      desc: 'Flawless, tactile touch experiences engineered specifically for high-converting mobile users across smartphones and tablets.'
    },
    {
      title: 'Fast & Reliable',
      desc: 'Blazing fast load speeds, optimized asset payloads, and rock-solid code foundations that rank high on search engines.'
    },
    {
      title: 'Direct Communication',
      desc: 'You collaborate directly with the two engineers building your digital presence. Instant feedback, transparency, and rapid delivery.'
    },
    {
      title: 'Business Focused',
      desc: 'Every headline, layout section, and call-to-action is intentionally orchestrated to turn passive browsers into qualified inquiries.'
    }
  ]
};

export const getWhatsAppUrl = (customMessage) => {
  const message = customMessage || COMPANY_CONFIG.whatsappDefaultMessage;
  const encodedMsg = encodeURIComponent(message);
  const cleanNumber = COMPANY_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
};
