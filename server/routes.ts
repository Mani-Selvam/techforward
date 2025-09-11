import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWebinarRegistrationSchema } from "@shared/schema";
import { sendRegistrationConfirmation } from "./sendgrid";

export async function registerRoutes(app: Express): Promise<Server> {
  // Webinar registration endpoint
  app.post("/api/register", async (req, res) => {
    try {
      const validatedData = insertWebinarRegistrationSchema.parse(req.body);
      
      // Check if email already registered
      const existingRegistration = await storage.getWebinarRegistrationByEmail(validatedData.email);
      if (existingRegistration) {
        return res.status(400).json({ 
          error: "Email already registered for this webinar" 
        });
      }

      // Create registration
      const registration = await storage.createWebinarRegistration(validatedData);

      // Send confirmation email (non-blocking)
      if (process.env.SENDGRID_API_KEY) {
        sendRegistrationConfirmation(registration.email, registration.name)
          .catch(error => console.error('Failed to send confirmation email:', error));
      }

      res.status(201).json({ 
        success: true, 
        message: "Registration successful! Check your email for confirmation.",
        registrationId: registration.id 
      });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(400).json({ error: "Invalid registration data" });
    }
  });

  // Get all registrations (admin endpoint)
  app.get("/api/registrations", async (req, res) => {
    try {
      const registrations = await storage.getAllWebinarRegistrations();
      res.json(registrations);
    } catch (error) {
      console.error("Failed to fetch registrations:", error);
      res.status(500).json({ error: "Failed to fetch registrations" });
    }
  });

  // Check registration status
  app.get("/api/register/check/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const registration = await storage.getWebinarRegistrationByEmail(email);
      
      if (registration) {
        res.json({ registered: true, registration });
      } else {
        res.json({ registered: false });
      }
    } catch (error) {
      console.error("Failed to check registration:", error);
      res.status(500).json({ error: "Failed to check registration" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
