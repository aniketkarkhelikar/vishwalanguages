/**
 * VISHWA LANGUAGES — Lead Service
 *
 * Abstracts all lead submission logic behind a single interface.
 * Today: WhatsApp message + prefilled email.
 * Tomorrow: swap submitLead() internals for API call, CRM.
 * The frontend never changes — only this file does.
 *
 * Architecture:
 *   Form → submitLead() → WhatsApp + Email (now) → DB → CRM (future)
 */

/** WhatsApp number — all leads go here */
const WHATSAPP_NUMBER = '919561894119';

/** Email config */
const CONTACT_EMAIL = 'hello@vishwalanguages.com';

/**
 * @typedef {Object} LeadPayload
 * @property {string} name
 * @property {string} phone
 * @property {string} [email]
 * @property {string} [language]    - target language
 * @property {string} [goal]        - work / study / corporate / culture
 * @property {string} [source]      - page or section that triggered the form
 * @property {string} [serviceType] - language | corporate | interpretation | healthcare
 * @property {boolean} [consent]
 */

/**
 * Build a highly professional, user-facing WhatsApp message.
 * This is the message the USER sends to VISHWA.
 */
function buildWhatsAppMessage(payload) {
  const typeLabels = {
    general: 'a general inquiry',
    language: 'a Language Program',
    corporate: 'Corporate Training',
    interpretation: 'Interpretation Services',
    healthcare: 'Healthcare Placement in Germany',
  };

  const service = typeLabels[payload.serviceType] || 'your services';

  const lines = [
    `Hello Vishwa Languages Team,`,
    ``,
    `I am reaching out to inquire about ${service}. Please find my details below:`,
    ``,
    `*Name:* ${payload.name}`,
    `*Contact Number:* ${payload.phone}`
  ];

  if (payload.email) lines.push(`*Email:* ${payload.email}`);
  if (payload.language) lines.push(`*Target Language/Area:* ${payload.language}`);
  if (payload.goal) lines.push(`*Primary Goal:* ${payload.goal}`);
  
  lines.push(``);
  lines.push(`I look forward to discussing how we can work together.`);
  lines.push(``);
  lines.push(`Best regards,`);
  lines.push(payload.name);

  return lines.join('\n');
}

/**
 * Build a highly professional prefilled mailto URL for email follow-up.
 */
function buildMailtoURL(payload) {
  const typeLabels = {
    general: 'General Inquiry',
    language: 'Language Program Inquiry',
    corporate: 'Corporate Training Inquiry',
    interpretation: 'Interpretation Services Inquiry',
    healthcare: 'Healthcare Placement Inquiry',
  };

  const subject = encodeURIComponent(
    `${typeLabels[payload.serviceType] || 'Inquiry'} — ${payload.name}`
  );

  const service = typeLabels[payload.serviceType]?.toLowerCase() || 'your services';

  const bodyLines = [
    `Hello Vishwa Languages Team,`,
    ``,
    `I am reaching out to formally inquire about ${service}. Please find my details below:`,
    ``,
    `Name: ${payload.name}`,
    `Contact Number: ${payload.phone}`,
  ];
  
  if (payload.email) bodyLines.push(`Email: ${payload.email}`);
  if (payload.language) bodyLines.push(`Target Language/Area: ${payload.language}`);
  if (payload.goal) bodyLines.push(`Primary Goal: ${payload.goal}`);
  
  bodyLines.push(``, `I look forward to speaking with an advisor soon.`, ``, `Best regards,`, payload.name);

  const body = encodeURIComponent(bodyLines.join('\n'));
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * Primary lead submission function.
 * Opens WhatsApp with prefilled message.
 * Returns mailto URL for optional email follow-up.
 *
 * @param {LeadPayload} payload
 * @returns {Promise<{ success: boolean, message: string, mailtoURL?: string }>}
 */
export async function submitLead(payload) {
  try {
    // --- Validation ---
    if (!payload.name?.trim())  throw new Error('Name is required.');
    if (!payload.phone?.trim()) throw new Error('Phone number is required.');

    // --- Build messages ---
    const whatsappMessage = buildWhatsAppMessage(payload);
    const mailtoURL = buildMailtoURL(payload);

    // --- Log for dev ---
    console.log('[LeadService] Lead submitted:', {
      ...payload,
      timestamp: new Date().toISOString(),
    });

    // --- Open WhatsApp ---
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank', 'noopener,noreferrer');

    return {
      success: true,
      message: 'Your inquiry has been sent via WhatsApp. An advisor will respond shortly.',
      mailtoURL,
    };
  } catch (err) {
    console.error('[LeadService] Error:', err);
    return { success: false, message: err.message || 'Something went wrong. Please try again.' };
  }
}

/**
 * Opens prefilled email in user's default mail client.
 * @param {string} mailtoURL — from submitLead result
 */
export function openEmailFollowUp(mailtoURL) {
  if (mailtoURL) window.location.href = mailtoURL;
}

/**
 * Tracks a page-level intent event.
 * Future: send to analytics or CRM as a funnel signal.
 *
 * @param {string} event   - e.g. 'cta_clicked', 'language_card_viewed'
 * @param {object} [meta]  - arbitrary metadata
 */
export function trackIntent(event, meta = {}) {
  // TODO: window.gtag?.('event', event, meta);
  console.log('[Intent]', event, meta);
}
