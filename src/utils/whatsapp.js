import { WHATSAPP_CONFIG } from '../config/whatsapp';

/**
 * Generate WhatsApp click-to-chat URL
 * @param {string} message - Pre-filled message text
 * @returns {string} WhatsApp URL
 */
export const generateWhatsAppLink = (message = '') => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp with pre-filled message
 * @param {string} message - Pre-filled message text
 */
export const openWhatsApp = (message = '') => {
  const url = generateWhatsAppLink(message);
  window.open(url, '_blank');
};
