# NestJS Dependency Injection Scopes Laboratory

This laboratory demonstrates the differences between NestJS dependency injection scopes: **Singleton** (Default), **Request**, and **Transient**.

## 🎯 Scopes Overview

### Singleton (Default)
- **Behavior**: Creates a single instance of the provider that is shared across the entire application lifecycle
- **Use Case**: Perfect for stateless services, utilities, and shared resources
- **Memory**: Most efficient as only one instance exists

### Request
- **Behavior**: Creates a new instance of the provider for each incoming HTTP request
- **Use Case**: Ideal for request-specific data, user context, or per-request caching
- **Memory**: Moderate usage, instances are garbage collected after request completion

### Transient
- **Behavior**: Creates a new instance every time the provider is injected
- **Use Case**: When you need a fresh instance for each injection point
- **Memory**: Highest usage as multiple instances can exist simultaneously

## 🚀 Local Setup

### Requirements

- [Node.js](https://nodejs.org) (v22 or above)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/kebecode/nestjs-scopes-example.git
cd nestjs-scopes-example

# Install dependencies
npm install

# Run in development mode
npm run start:dev

# Or run in production mode
npm run start
```

## 📡 API Endpoints

The application exposes the following endpoints to demonstrate each scope behavior:

- **GET** `http://localhost:3000/` - Welcome message
- **GET** `http://localhost:3000/singleton` - Demonstrates singleton scope
- **GET** `http://localhost:3000/request` - Demonstrates request scope  
- **GET** `http://localhost:3000/transient` - Demonstrates transient scope

### Expected Behavior

#### Singleton Endpoint
```json
[
  { "sessionId": "550e8400-e29b-41d4-a716-446655440000" },
  { "sessionId": "550e8400-e29b-41d4-a716-446655440000" }
]
```
Both objects will **always have the same sessionId** because the same instance is reused.

#### Request Endpoint
```json
[
  { "sessionId": "550e8400-e29b-41d4-a716-446655440001" },
  { "sessionId": "550e8400-e29b-41d4-a716-446655440001" }
]
```
Both objects have the **same sessionId within a single request**, but different sessionIds between different requests.

#### Transient Endpoint
```json
[
  { "sessionId": "550e8400-e29b-41d4-a716-446655440002" },
  { "sessionId": "550e8400-e29b-41d4-a716-446655440003" }
]
```
Each object will have a **different sessionId** because a new instance is created for each injection.

## 🧪 Testing the Scopes

1. Start the application: `npm run start:dev`
2. Make multiple requests to each endpoint
3. Observe the sessionId patterns:
   - **Singleton**: Same ID across all requests
   - **Request**: Same ID within request, different between requests
   - **Transient**: Always different IDs

## 🛠️ Tech Stack

- **[TypeScript](https://www.typescriptlang.org/)** - Strongly typed programming language
- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework for scalable server-side applications
- **[Node.js](https://nodejs.org/)** - JavaScript runtime built on Chrome's V8 JavaScript engine
- **[Express](https://expressjs.com/)** - Fast, unopinionated, minimalist web framework (via NestJS)
- **[Jest](https://jestjs.io/)** - Delightful JavaScript testing framework