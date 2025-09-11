import { WebinarRegistration } from '@shared/schema';

export interface WhatsAppMessage {
  phoneNumber: string;
  message: string;
  whatsappUrl: string;
}

/**
 * Formats a phone number for WhatsApp URL (E.164 format)
 */
export function formatPhoneNumber(phoneNumber: string): string {
  // Strip all non-digits
  const digitsOnly = phoneNumber.replace(/\D/g, '');
  
  // Validate we have enough digits for a valid phone number
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    throw new Error(`Invalid phone number: must have 10-15 digits, got ${digitsOnly.length}`);
  }
  
  // Format as E.164 (+ followed by digits)
  return '+' + digitsOnly;
}

/**
 * Creates a WhatsApp message with registration details
 */
export function createRegistrationWhatsAppMessage(registration: WebinarRegistration): WhatsAppMessage {
  const webinarDate = "December 15, 2024";
  const webinarTime = "2:00 PM EST";
  const webinarLink = "https://your-webinar-platform.com/join";
  
  const message = `🎉 Welcome to the Cutting-Edge Webinar!

Hi ${registration.name}!

Thank you for registering for our exclusive webinar. Here are your details:

📅 Date: ${webinarDate}
⏰ Time: ${webinarTime}
💼 Company: ${registration.company || 'Not specified'}
📧 Email: ${registration.email}

📋 What to expect:
• Industry-leading insights
• Interactive Q&A sessions
• Networking opportunities
• Exclusive resources

🔗 Join Link: ${webinarLink}

We'll send you a reminder 24 hours before the event. See you there!

Best regards,
The Webinar Team`;

  try {
    const phoneNumber = formatPhoneNumber(registration.mobile);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;

    return {
      phoneNumber,
      message,
      whatsappUrl
    };
  } catch (error: any) {
    throw new Error(`Failed to create WhatsApp message: ${error.message}`);
  }
}

/**
 * Logs WhatsApp message details (in production, this could send via WhatsApp Business API)
 */
export function sendWhatsAppMessage(whatsappMessage: WhatsAppMessage): void {
  // Only log detailed information in development to protect PII
  if (process.env.NODE_ENV !== 'production') {
    console.log('📱 WhatsApp Message Prepared:');
    console.log(`📞 Phone: ${whatsappMessage.phoneNumber}`);
    console.log(`🔗 WhatsApp URL: ${whatsappMessage.whatsappUrl}`);
    console.log('📝 Message:', whatsappMessage.message);
    console.log('💡 To send manually: Open the WhatsApp URL above in a browser');
  } else {
    // In production, only log that a message was prepared without PII
    console.log('📱 WhatsApp message prepared for registration');
  }
  
  // In production with WhatsApp Business API, you would:
  // 1. Use Twilio WhatsApp API
  // 2. Use WhatsApp Business API directly
  // 3. Use other WhatsApp providers
}