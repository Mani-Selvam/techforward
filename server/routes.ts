import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWebinarRegistrationSchema } from "@shared/schema";
import { sendRegistrationConfirmation } from "./sendgrid";
import { createRegistrationWhatsAppMessage, createClientConfirmationMessage, sendWhatsAppMessage } from "./whatsapp";

export async function registerRoutes(app: Express): Promise<Server> {
  // Webinar registration endpoint
  app.post("/api/register", async (req, res) => {
    try {
      const validatedData = insertWebinarRegistrationSchema.parse(req.body);
      
      // Check if email already registered (using simple duplicate prevention)
      const existingRegistration = await storage.getWebinarRegistrationByEmail(validatedData.email);
      if (existingRegistration) {
        return res.status(400).json({ 
          error: "This email is already registered for the webinar" 
        });
      }

      // Create registration
      const registration = await storage.createWebinarRegistration(validatedData);

      // Send confirmation email (non-blocking)
      if (process.env.SENDGRID_API_KEY) {
        sendRegistrationConfirmation(registration.email, registration.name)
          .catch(error => console.error('Failed to send confirmation email:', error));
      }

      // Send WhatsApp messages to both admin and client
      // 1. Send admin notification
      const adminMessage = createRegistrationWhatsAppMessage(registration);
      await sendWhatsAppMessage(adminMessage, false);
      
      // 2. Send client confirmation
      const clientMessage = createClientConfirmationMessage(registration);
      await sendWhatsAppMessage(clientMessage, true);

      res.status(201).json({ 
        success: true, 
        message: "Registration successful! You'll receive WhatsApp confirmation instantly. Check your email too.",
        registrationId: registration.id
      });
    } catch (error: any) {
      console.error("Registration error:", error);
      
      // Return user-friendly validation errors
      if (error.name === 'ZodError') {
        const firstError = error.errors[0];
        return res.status(400).json({ error: firstError.message });
      }
      
      res.status(400).json({ error: "Registration failed. Please check your information and try again." });
    }
  });

  // Note: Admin endpoints removed for security - no authentication system in place

  const httpServer = createServer(app);

  return httpServer;
}
