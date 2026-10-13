import { STUDIO_CONFIG } from '../data/studioData';

/**
 * Sanitizes phone number by stripping all spaces, plus signs, dashes, and brackets.
 * Returns only digits.
 */
export function getSanitizedWhatsAppNumber(rawNumber: string = STUDIO_CONFIG.contact.whatsappNumber): string {
  return rawNumber.replace(/[^0-9]/g, '');
}

/**
 * Generates an official WhatsApp click-to-chat URL with properly encoded message.
 */
export function buildWhatsAppUrl(message: string, customNumber?: string): string {
  const number = customNumber ? getSanitizedWhatsAppNumber(customNumber) : getSanitizedWhatsAppNumber(STUDIO_CONFIG.contact.whatsappNumber);
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encodedText}`;
}

/**
 * Safely triggers opening the WhatsApp chat in a new browser tab.
 */
export function openWhatsAppChat(message: string, customNumber?: string): void {
  const url = buildWhatsAppUrl(message, customNumber);
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Pre-formatted message templates for various customer journeys
 */

export function getTrialBookingMessage(danceStyle?: string, name?: string): string {
  const greeting = name ? `Hi Rhythm Republic! I'm ${name.trim()}.` : 'Hi Rhythm Republic!';
  const styleText = danceStyle ? ` for your *${danceStyle}* batch` : '';
  return `${greeting} I would like to book a *Trial Dance Class*${styleText} at your Baner, Pune studio. Could you please share the upcoming batch timings and availability?`;
}

export function getClassBookingMessage(className: string, instructor: string, timing: string, days: string[]): string {
  const daysStr = days.join(', ');
  return `Hi Rhythm Republic team! I am interested in joining the *${className}* batch conducted by *${instructor}* (${daysStr} at ${timing}). Please let me know how I can confirm my slot and schedule a visit.`;
}

export function getDanceStyleEnquiryMessage(styleName: string): string {
  return `Hi Rhythm Republic! I came across your *${styleName}* dance program. I'm a beginner looking to understand the syllabus, upcoming batches, and fee details for this style at your Baner studio.`;
}

export function getWeddingChoreographyMessage(packageName?: string): string {
  const packageStr = packageName ? ` regarding the *${packageName}* package` : '';
  return `Namaste Rhythm Republic team! We are planning an upcoming wedding and would like to enquire about your *Wedding & Sangeet Choreography services*${packageStr}. Could we discuss song ideas, batch scheduling, and pricing?`;
}

export function getFormEnquiryMessage(data: {
  name: string;
  phone: string;
  danceStyle: string;
  preferredTime: string;
  experienceLevel: string;
  message?: string;
}): string {
  return `*New Enquiry from Website*\n\n` +
    `• *Name:* ${data.name.trim()}\n` +
    `• *Contact:* ${data.phone.trim()}\n` +
    `• *Preferred Style:* ${data.danceStyle}\n` +
    `• *Preferred Timing:* ${data.preferredTime}\n` +
    `• *Experience Level:* ${data.experienceLevel}\n` +
    (data.message && data.message.trim() ? `• *Note / Query:* ${data.message.trim()}\n\n` : `\n`) +
    `Looking forward to confirming my trial batch at Rhythm Republic Baner!`;
}
