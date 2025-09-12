import { WebinarRegistration } from "@shared/schema";
import twilio from "twilio";

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
  const digitsOnly = phoneNumber.replace(/\D/g, "");

  // Validate we have enough digits for a valid phone number
  if (digitsOnly.length < 10 || digitsOnly.length > 15) {
    throw new Error(
      `Invalid phone number: must have 10-15 digits, got ${digitsOnly.length}`,
    );
  }

  // Format as E.164 (+ followed by digits)
  return "+" + digitsOnly;
}

/**
 * Creates a WhatsApp message with registration details
 */
export function createRegistrationWhatsAppMessage(
  registration: WebinarRegistration,
): WhatsAppMessage {
  // Admin WhatsApp number for receiving registrant notifications
  const adminPhoneNumber = "8825620014";

  // Example webinar details
  const webinarDate = "December 15, 2024";
  const webinarTime = "2:00 PM EST";

  const message = `🎯 New Webinar Registration!

📝 Registration Details:
👤 Name: ${registration.name}
📧 Email: ${registration.email}
📱 Mobile: ${registration.mobile}
🏢 Company: ${registration.company || "Individual"}

📅 Event: Cutting-Edge Webinar
📅 Date: ${webinarDate}
⏰ Time: ${webinarTime}

✅ Registration ID: ${registration.id}

💬 You can now contact this registrant directly for any updates or questions about the webinar.`;

  try {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`;

    return {
      phoneNumber: `+${adminPhoneNumber}`,
      message,
      whatsappUrl,
    };
  } catch (error: any) {
    throw new Error(`Failed to create WhatsApp message: ${error.message}`);
  }
}

/**
 * Sends WhatsApp message via Twilio API or logs for development
 */
export async function sendWhatsAppMessage(
  whatsappMessage: WhatsAppMessage,
): Promise<void> {
  // Check if Twilio credentials are available
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_WHATSAPP_FROM; // e.g., 'whatsapp:+14155238886'

  if (accountSid && authToken && fromNumber) {
    try {
      const client = twilio(accountSid, authToken);

      // Format the admin number for Twilio (need whatsapp: prefix)
      const adminPhoneNumber = "8825620014";
      const toNumber = `whatsapp:+91${adminPhoneNumber}`;

      const message = await client.messages.create({
        body: whatsappMessage.message,
        from: fromNumber,
        to: toNumber,
      });

      console.log("✅ WhatsApp message sent successfully!");
      console.log(`📞 Message SID: ${message.sid}`);
      console.log(`📱 Sent to: ${toNumber}`);
    } catch (error: any) {
      console.error("❌ Failed to send WhatsApp message:", error.message);

      // Fall back to logging the URL for manual sending
      console.log("💡 Fallback - Open this URL to send manually:");
      console.log(whatsappMessage.whatsappUrl);
    }
  } else {
    // Development mode - log message details for testing
    console.log("📱 WhatsApp Message Prepared (Twilio not configured):");
    console.log(`📞 Phone: ${whatsappMessage.phoneNumber}`);
    console.log(`🔗 WhatsApp URL: ${whatsappMessage.whatsappUrl}`);
    console.log("📝 Message:", whatsappMessage.message);
    console.log(
      "💡 To send manually: Open the WhatsApp URL above in a browser",
    );
    console.log(
      "🔧 To enable auto-sending, configure TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_WHATSAPP_FROM",
    );
  }
}
