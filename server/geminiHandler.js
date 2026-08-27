import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

const WEBCUBIXS_SYSTEM_PROMPT = `
You are the official AI Sales & Web Development Consultant for "WebCubixs" — an elite, high-performance web development agency studio.

ABOUT WEBCUBIXS:
- WebCubixs is a specialized, founder-led two-person web development studio.
- Clients work directly with the two founding engineers who design, architect, and code every website. There are zero account managers, zero bureaucracy, and no junior outsources.
- Tagline: "Websites That Make Your Business Stand Out."
- Core Value: We build custom, ultra-fast (< 0.8s load time, 95+ PageSpeed), mobile-first, and conversion-focused websites that turn visitors into paying clients.
- Primary Markets: United Arab Emirates (Dubai, Abu Dhabi), Saudi Arabia (Riyadh, Jeddah), Qatar (Doha), Kuwait, Pakistan (Karachi, Lahore, Islamabad), and international global markets.
- Guaranteed Response Time: Under 12 hours.
- Contact Channels:
  • Email: hello@webcubixs.com
  • WhatsApp: +971 50 123 4567 (https://wa.me/971501234567)
  • Project Kickoff Form: /contact

SERVICES (6 Core Pillars):
1. Business Websites: Bespoke multi-page authority websites for established companies (10-20 days turnaround).
2. Landing Pages: High-converting single-page sales & ad campaign funnels (5-10 days turnaround).
3. Website Redesign: Transforming outdated, clunky websites into modern digital flagships (10-18 days).
4. Responsive Design: 100% mobile-first tactile experiences for iOS, Android, and tablets.
5. Performance Optimization: Sub-second load times, asset compression, 95+ Core Web Vitals.
6. Maintenance & Updates: Ongoing technical care, content updates, and cloud backups.

PORTFOLIO & DEMO CONCEPTS (All 100% transparently labeled as proprietary DEMO CONCEPTS):
- Bella Café (/work/bella-cafe): Artisanal Italian bakery & specialty espresso bar with digital menu & WhatsApp table reservations.
- Elite Cuts (/work/elite-cuts): Luxury barber studio & men's grooming catalog with before/afters & appointment triggers.
- Prime Estate (/work/prime-estate): Luxury real estate showcase with gated brochure lead capture for high-net-worth investors.
- IronFit (/work/ironfit): Strength & athletics club with weekly class timetables and free day-pass funnel.
- AutoDrive (/work/autodrive): Supercar ceramic coating & detailing with interactive before/after paint defect slider.
- MedCare (/work/medcare): Advanced dental & aesthetic clinic with doctor credentials, treatment guides, and smile makeover views.

OUR 5-STEP DELIVERY PROCESS (/process):
01 DISCOVER (Goals & competitor audit)
02 PLAN (Wireframes & content architecture)
03 DESIGN (Bespoke visual identity & tokens)
04 BUILD (Clean React/Tailwind code & 3D accents)
05 LAUNCH (Speed testing, QA & deployment)

PRICING STRUCTURE (/contact or /#pricing):
- Starter: Focused single-page or 3-section launch (7-10 business days).
- Business: Flagship complete multi-page build with custom 3D/scroll elements (14-21 business days).
- Custom: Advanced bespoke architectures, bilingual English/Arabic setups, custom APIs.
- We provide customized proposals with zero pressure and zero obligation.

STRICT ACCURACY RULES:
- NEVER invent fake clients, fake testimonials, fake awards, fake revenue numbers, or fake statistics.
- If asked about portfolio items, honestly clarify they are proprietary demo concepts engineered by WebCubixs to demonstrate our standard of quality.
- Maintain a confident, professional, knowledgeable, consultative, and helpful agency tone.
- When prospective clients ask about their business, ask helpful clarifying questions (e.g. current website, timeline, business goals) and guide them to schedule a discussion on WhatsApp or request a quote at /contact.
- Keep answers concise, direct, clear, and formatted nicely in markdown.
`;

function getFallbackWhatsAppUrl(customMessage) {
  const msg = encodeURIComponent(customMessage || "Hi WebCubixs, I'm interested in getting a website for my business.");
  return `https://wa.me/971501234567?text=${msg}`;
}

function deriveSuggestedActions(userQuery, replyText) {
  const combined = (userQuery + ' ' + replyText).toLowerCase();
  const actions = [];

  if (combined.includes('restaurant') || combined.includes('cafe') || combined.includes('food') || combined.includes('menu')) {
    actions.push({ label: 'View Bella Café Demo', action: 'navigate', url: '/work/bella-cafe' });
  } else if (combined.includes('salon') || combined.includes('barber') || combined.includes('grooming')) {
    actions.push({ label: 'View Elite Cuts Demo', action: 'navigate', url: '/work/elite-cuts' });
  } else if (combined.includes('estate') || combined.includes('property') || combined.includes('villa')) {
    actions.push({ label: 'View Prime Estate Demo', action: 'navigate', url: '/work/prime-estate' });
  } else if (combined.includes('gym') || combined.includes('fitness') || combined.includes('workout')) {
    actions.push({ label: 'View IronFit Demo', action: 'navigate', url: '/work/ironfit' });
  } else if (combined.includes('auto') || combined.includes('car') || combined.includes('detailing')) {
    actions.push({ label: 'View AutoDrive Demo', action: 'navigate', url: '/work/autodrive' });
  } else if (combined.includes('clinic') || combined.includes('dental') || combined.includes('dentist') || combined.includes('doctor')) {
    actions.push({ label: 'View MedCare Demo', action: 'navigate', url: '/work/medcare' });
  }

  if (combined.includes('service') || combined.includes('offer') || combined.includes('what do you build')) {
    actions.push({ label: 'Explore All Services', action: 'navigate', url: '/services' });
  }

  if (combined.includes('process') || combined.includes('timeline') || combined.includes('how long') || combined.includes('step')) {
    actions.push({ label: 'Our 5-Step Process', action: 'navigate', url: '/process' });
  }

  if (combined.includes('cost') || combined.includes('price') || combined.includes('pricing') || combined.includes('quote') || combined.includes('budget')) {
    actions.push({ label: 'View Pricing Tiers', action: 'navigate', url: '/#pricing' });
  }

  // Always include WhatsApp and Contact options
  actions.push({ label: 'Chat on WhatsApp', action: 'whatsapp', url: getFallbackWhatsAppUrl(`Hi WebCubixs, I'd like to discuss: "${userQuery.substring(0, 60)}..."`) });
  actions.push({ label: 'Get a Quote', action: 'navigate', url: '/contact' });

  // Return up to 3 distinct actions
  const unique = [];
  const seenUrls = new Set();
  for (const act of actions) {
    if (!seenUrls.has(act.url)) {
      seenUrls.add(act.url);
      unique.push(act);
      if (unique.length === 3) break;
    }
  }
  return unique;
}

export async function handleChatRequest({ message, history = [] }) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey.trim() === '' || apiKey === 'YOUR_GEMINI_API_KEY') {
    return {
      text: "Hello! The WebCubixs AI Sales Assistant is ready. To connect to the live Gemini API, please set your `GEMINI_API_KEY` in the server environment.\n\nIn the meantime, our founding developers are available directly on WhatsApp to answer any questions about your project.",
      suggestedActions: [
        { label: 'Chat on WhatsApp', action: 'whatsapp', url: getFallbackWhatsAppUrl("Hi WebCubixs, I'd like to ask a question about building a website.") },
        { label: 'View Demo Concepts', action: 'navigate', url: '/work' },
        { label: 'Get a Quote', action: 'navigate', url: '/contact' }
      ]
    };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    // Format conversation history for Gemini API
    const formattedContents = [];

    if (Array.isArray(history)) {
      for (const item of history) {
        if (!item || !item.text) continue;
        if (item.id === 'welcome' || item.id === 'welcome-reset') continue;

        const role = item.sender === 'user' ? 'user' : 'model';
        formattedContents.push({
          role,
          parts: [{ text: item.text }]
        });
      }
    }

    // Add current user message
    formattedContents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const modelName = process.env.GEMINI_MODEL || 'gemini-3.6-flash';

    const response = await ai.models.generateContent({
      model: modelName,
      contents: formattedContents,
      config: {
        systemInstruction: WEBCUBIXS_SYSTEM_PROMPT,
        temperature: 0.7
      }
    });

    const responseText = response.text || '';
    const suggestedActions = deriveSuggestedActions(message, responseText);

    return {
      text: responseText,
      suggestedActions
    };
  } catch (err) {
    console.error('Gemini API Error:', err);
    throw new Error(err?.message || 'Failed to generate response from Gemini');
  }
}
