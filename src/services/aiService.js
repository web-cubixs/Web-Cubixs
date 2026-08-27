import { getWhatsAppUrl } from '../data/companyConfig';

/**
 * AI Sales Assistant Client Service
 * Communicates with the secure server-side endpoint (/api/chat).
 * NO API keys or Gemini credentials are ever stored or exposed in the frontend.
 */

export class AIService {
  static async sendMessage({ message, history = [] }) {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message,
          history: history.map((item) => ({
            sender: item.sender,
            text: item.text,
            id: item.id
          }))
        })
      });

      if (!response.ok) {
        let errorMsg = `Server error (${response.status})`;
        try {
          const errData = await response.json();
          if (errData && errData.error) {
            errorMsg = errData.error;
          }
        } catch {
          // ignore json parse error
        }
        throw new Error(errorMsg);
      }

      const data = await response.json();

      if (!data || typeof data.text !== 'string') {
        throw new Error('Invalid response structure received from assistant');
      }

      return {
        text: data.text,
        suggestedActions: Array.isArray(data.suggestedActions) && data.suggestedActions.length > 0
          ? data.suggestedActions
          : [
              { label: 'Chat on WhatsApp', action: 'whatsapp', url: getWhatsAppUrl() },
              { label: 'Get a Quote', action: 'navigate', url: '/contact' }
            ]
      };
    } catch (err) {
      console.error('AIService.sendMessage error:', err);
      throw err;
    }
  }
}
