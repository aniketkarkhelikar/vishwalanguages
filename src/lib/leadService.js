/**
 * VISHWA LANGUAGES — Lead Service
 *
 * Abstracts all lead submission logic behind a single interface.
 * Today: console + local state.
 * Tomorrow: swap submitLead() internals for API call, CRM, email, WhatsApp.
 * The frontend never changes — only this file does.
 *
 * Architecture:
 *   Form → submitLead() → Email (now) → WhatsApp → DB → CRM (future)
 */

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
 * Primary lead submission function.
 * Replace internals to connect to backend — zero frontend changes needed.
 *
 * @param {LeadPayload} payload
 * @returns {Promise<{ success: boolean, message: string }>}
 */
export async function submitLead(payload) {
  try {
    // --- Validation ---
    if (!payload.name?.trim())  throw new Error('Name is required.');
    if (!payload.phone?.trim()) throw new Error('Phone number is required.');

    // --- Current implementation: log only ---
    // TODO: Replace with API call:
    // const res = await fetch('/api/leads', { method: 'POST', body: JSON.stringify(payload) });
    // if (!res.ok) throw new Error('Submission failed.');

    console.log('[LeadService] Lead submitted:', {
      ...payload,
      timestamp: new Date().toISOString(),
    });

    // Simulate async delay (remove when API is live)
    await new Promise((resolve) => setTimeout(resolve, 400));

    return { success: true, message: 'Request received. An advisor will be in touch soon.' };
  } catch (err) {
    console.error('[LeadService] Error:', err);
    return { success: false, message: err.message || 'Something went wrong. Please try again.' };
  }
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
