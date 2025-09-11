# Modern 3D Webinar Website

## Overview

This is a cutting-edge webinar website featuring interactive 3D elements, modern design aesthetics, and immersive user experiences. The application showcases a futuristic approach to digital events with a focus on visual engagement through 3D animations, glassmorphism effects, and smooth interactions. Built as a full-stack application with React frontend and Express backend, it provides webinar registration functionality with email confirmation capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**React with TypeScript**: Single-page application built with React 18 and TypeScript for type safety and modern component patterns. Uses functional components with hooks for state management and side effects.

**Routing Strategy**: Implemented with Wouter for lightweight client-side routing, providing simple navigation between pages with minimal bundle overhead.

**State Management**: Combination of React Query for server state management and local component state using React hooks. React Query handles API calls, caching, and synchronization with backend data.

**UI Component System**: Built on Radix UI primitives with custom styling using Tailwind CSS. Follows atomic design principles with reusable components organized in a design system approach. Features comprehensive component library including cards, forms, navigation, and interactive elements.

**3D Visual Design**: Implements modern design trends including glassmorphism effects, floating elements, gradient backgrounds, and CSS transforms for depth perception. Uses custom animations and hover states to create immersive user experiences.

### Backend Architecture
**Express.js Server**: RESTful API server using Express with TypeScript for type-safe backend development. Implements middleware for request logging, error handling, and JSON parsing.

**Storage Layer**: Abstracted storage interface supporting both in-memory storage (for development) and database storage (for production). Uses dependency injection pattern for easy testing and environment switching.

**API Design**: Clean REST endpoints for webinar registration and data retrieval. Implements proper HTTP status codes, error handling, and response formatting.

### Data Storage Solutions
**Drizzle ORM**: Type-safe database toolkit for PostgreSQL with schema-first approach. Provides migration management and query building with full TypeScript integration.

**Database Schema**: Simple relational structure with user management and webinar registration tables. Uses UUID primary keys and proper constraints for data integrity.

**Environment-based Configuration**: Supports multiple database configurations through environment variables, enabling seamless deployment across development, staging, and production environments.

### Authentication and Authorization
**Session-based Architecture**: Prepared for session management with connect-pg-simple for PostgreSQL session storage. Currently implements basic request/response patterns without complex authentication flows.

**Security Considerations**: Implements CORS handling, request validation using Zod schemas, and proper error boundaries to prevent sensitive data exposure.

### Design System and Styling
**Tailwind CSS Configuration**: Comprehensive design system with custom color palettes, spacing scales, and component variants. Implements CSS variables for theme consistency and dynamic styling.

**Typography System**: Uses Inter and Space Grotesk fonts for modern, clean typography hierarchy. Implements responsive text sizing and proper contrast ratios for accessibility.

**3D Effects and Animations**: CSS-based 3D transformations, parallax scrolling effects, and interactive hover states. Uses backdrop-blur and glassmorphism techniques for modern visual appeal.

## External Dependencies

### Email Services
**SendGrid Integration**: Email delivery service for registration confirmations and user communications. Implements proper error handling and fallback mechanisms when email service is unavailable.

### Database Services
**Neon Database**: PostgreSQL-compatible serverless database service using @neondatabase/serverless driver. Provides automatic scaling and connection pooling for production workloads.

### Payment Processing
**Stripe Integration**: Payment processing capability with @stripe/stripe-js and @stripe/react-stripe-js for handling transactions and subscriptions (infrastructure ready for future monetization).

### Development Tools
**Vite Build System**: Modern frontend build tool with hot module replacement, TypeScript support, and optimized production builds. Includes development-specific plugins for enhanced debugging experience.

**Development Environment**: Replit-specific integrations including runtime error overlay and cartographer for enhanced development experience within the Replit ecosystem.

### UI and Component Libraries
**Radix UI Primitives**: Comprehensive set of low-level UI primitives providing accessibility, keyboard navigation, and focus management out of the box.

**Lucide React Icons**: Modern icon library providing consistent iconography throughout the application.

**Class Variance Authority**: Type-safe utility for handling component variants and conditional styling in the design system.