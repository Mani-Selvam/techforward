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

  // Handle Indian numbers specifically - if 10 digits, add +91
  if (digitsOnly.length === 10) {
    return "+91" + digitsOnly;
  }
  
  // If already has country code (12 digits starting with 91), format properly
  if (digitsOnly.length === 12 && digitsOnly.startsWith('91')) {
    return "+" + digitsOnly;
  }

  // Format as E.164 (+ followed by digits) for other cases
  return "+" + digitsOnly;
}

/**
 * Creates a WhatsApp message with registration details for ADMIN
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
 * Creates a WhatsApp confirmation message for CLIENT
 */
export function createClientConfirmationMessage(
  registration: WebinarRegistration,
): WhatsAppMessage {
  // Format client's phone number
  const clientPhoneNumber = formatPhoneNumber(registration.mobile);
  
  const webinarDate = "December 15, 2024";
  const webinarTime = "2:00 PM EST";
  
  const message = `✅ Registration Confirmed!

Hi ${registration.name}! 👋

🎯 You're successfully registered for:
📅 Event: Cutting-Edge Webinar
📅 Date: ${webinarDate}
⏰ Time: ${webinarTime}

📧 Confirmation sent to: ${registration.email}
✅ Registration ID: ${registration.id}

🚀 Get ready for an amazing experience with interactive 3D environments and cutting-edge technology!

📞 Questions? Contact us anytime.
See you at the webinar! 🎉`;

  try {
    const encodedMessage = encodeURIComponent(message);
    // Remove the + from phone number for WhatsApp URL
    const phoneForUrl = clientPhoneNumber.replace('+', '');
    const whatsappUrl = `https://wa.me/${phoneForUrl}?text=${encodedMessage}`;

    return {
      phoneNumber: clientPhoneNumber,
      message,
      whatsappUrl,
    };
  } catch (error: any) {
    throw new Error(`Failed to create client confirmation message: ${error.message}`);
  }
}

/**
 * Sends WhatsApp message via Twilio API or logs for development
 */
export async function sendWhatsAppMessage(
  whatsappMessage: WhatsAppMessage,
  isClientMessage: boolean = false,
): Promise<void> {
  // Check if Twilio credentials are available
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_WHATSAPP_FROM; // e.g., 'whatsapp:+14155238886'

  if (accountSid && authToken && fromNumber) {
    try {
      const client = twilio(accountSid, authToken);

      // Format the target number for Twilio (need whatsapp: prefix and + for international)
      let toNumber: string;
      if (isClientMessage) {
        // For client messages, use the client's number from the message (already has +)
        toNumber = `whatsapp:${whatsappMessage.phoneNumber}`;
      } else {
        // For admin messages, use the admin number with proper format
        const adminPhoneNumber = "+918825620014";
        toNumber = `whatsapp:${adminPhoneNumber}`;
      }

      // Debug logging
      console.log(`🔍 WhatsApp API Debug:`);
      console.log(`📤 From: ${fromNumber}`);
      console.log(`📥 To: ${toNumber}`);
      console.log(`📧 Message Type: ${isClientMessage ? 'CLIENT CONFIRMATION' : 'ADMIN NOTIFICATION'}`);

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
      
      // Check if it's a sandbox verification error
      if (error.code === 21910) {
        console.log("🔧 SOLUTION: This is a Twilio WhatsApp sandbox verification issue.");
        console.log("📱 To enable real-time WhatsApp messages:");
        console.log("1. Open WhatsApp on your phone");
        console.log("2. Send this message to +1 415 523 8886:");
        console.log("   join <your-sandbox-code>");
        console.log("3. Wait for confirmation from Twilio");
        console.log("4. Then try registering again");
      }

      // Fall back to logging the URL for manual sending
      console.log("💡 Fallback - Open this URL to send manually:");
      console.log(whatsappMessage.whatsappUrl);
    }
  } else {
    // Development mode - log message details for testing
    const messageType = isClientMessage ? "CLIENT CONFIRMATION" : "ADMIN NOTIFICATION";
    console.log(`📱 ${messageType} WhatsApp Message Prepared (Twilio not configured):`);
    console.log(`📞 Phone: ${whatsappMessage.phoneNumber}`);
    console.log(`🔗 WhatsApp URL: ${whatsappMessage.whatsappUrl}`);
    console.log("📝 Message:", whatsappMessage.message);
    console.log(
      "💡 To send manually: Open the WhatsApp URL above in a browser",
    );
    if (!isClientMessage) {
      console.log(
        "🔧 To enable auto-sending, configure TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, and TWILIO_WHATSAPP_FROM",
      );
    }
  }
}
