import { type User, type InsertUser, type WebinarRegistration, type InsertWebinarRegistration } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createWebinarRegistration(registration: InsertWebinarRegistration): Promise<WebinarRegistration>;
  getWebinarRegistrationByEmail(email: string): Promise<WebinarRegistration | undefined>;
  getAllWebinarRegistrations(): Promise<WebinarRegistration[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private webinarRegistrations: Map<string, WebinarRegistration>;

  constructor() {
    this.users = new Map();
    this.webinarRegistrations = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createWebinarRegistration(insertRegistration: InsertWebinarRegistration): Promise<WebinarRegistration> {
    const id = randomUUID();
    const registration: WebinarRegistration = {
      ...insertRegistration,
      company: insertRegistration.company || null,
      id,
      registeredAt: new Date(),
      confirmed: false,
    };
    this.webinarRegistrations.set(id, registration);
    return registration;
  }

  async getWebinarRegistrationByEmail(email: string): Promise<WebinarRegistration | undefined> {
    return Array.from(this.webinarRegistrations.values()).find(
      (registration) => registration.email === email,
    );
  }

  async getAllWebinarRegistrations(): Promise<WebinarRegistration[]> {
    return Array.from(this.webinarRegistrations.values());
  }
}

export const storage = new MemStorage();
