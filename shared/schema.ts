import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const webinarRegistrations = pgTable("webinar_registrations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  mobile: text("mobile").notNull(),
  registeredAt: timestamp("registered_at").defaultNow().notNull(),
  confirmed: boolean("confirmed").default(false).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertWebinarRegistrationSchema = createInsertSchema(webinarRegistrations).pick({
  name: true,
  email: true,
  company: true,
  mobile: true,
}).extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  mobile: z.preprocess(
    (val) => String(val).replace(/\D/g, ""), // Strip all non-digits
    z.string()
      .min(10, "Mobile number must have at least 10 digits")
      .max(15, "Mobile number cannot exceed 15 digits")
      .regex(/^\d{10,15}$/, "Please enter a valid mobile number")
  ),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type WebinarRegistration = typeof webinarRegistrations.$inferSelect;
export type InsertWebinarRegistration = z.infer<typeof insertWebinarRegistrationSchema>;
