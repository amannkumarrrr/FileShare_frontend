# Zero-Trust Document Manager — Frontend UI

Modern, security-focused React + TypeScript single-page application (SPA) built with Vite for the **Zero-Trust Based Secure Document Management and File Sharing System**.

---

## Architecture & Technology Stack

- **Framework:** React 18
- **Language:** TypeScript 5
- **Bundler & Dev Server:** Vite 5
- **Routing:** React Router DOM v6
- **Icons:** Lucide React
- **Theme:** Dark Cyber-Defense UI with Zero-Trust telemetry styling

---

## Folder Structure

```text
frontend/
├── public/                 # Static assets and icons
├── src/
│   ├── assets/             # Brand logos and images
│   ├── components/         # Reusable UI widgets, badges, modals, table views
│   ├── context/            # React Context (AppContext: state, auth, real-time sync)
│   ├── data/               # Reference static data and system fixtures
│   ├── hooks/              # Custom React hooks
│   ├── layouts/            # Page layouts and navigational frames
│   ├── pages/              # Primary application views
│   │   ├── Login.tsx
│   │   ├── Dashboard.tsx
│   │   ├── MyDocuments.tsx
│   │   ├── SharedWithMe.tsx
│   │   ├── SharedByMe.tsx
│   │   ├── UploadDocument.tsx
│   │   ├── DocumentDetails.tsx
│   │   ├── UserManagement.tsx
│   │   ├── SecurityActivity.tsx
│   │   └── Settings.tsx
│   ├── services/           # Centralized HTTP API client (api.ts) with error interceptors
│   ├── styles/             # Global CSS themes, design tokens, and utility classes
│   ├── types/              # Domain TypeScript interfaces and enumerations
│   ├── utils/              # Helper utilities and formatting functions
│   ├── App.tsx             # Root router and layout frame
│   └── main.tsx            # Vite entry point
├── .env.example            # Environment variables template
├── index.html              # HTML shell
├── package.json            # Dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration with automatic /api proxy
```

---

## Environment Configuration

Create a `.env` file in this directory based on `.env.example`:

```env
# Point to your Spring Boot backend (default port 8080)
VITE_API_BASE_URL=http://localhost:8080/api
```

> **Zero-Trust Rule:** Never place Google OAuth Client Secrets, database credentials, or private encryption keys in frontend environment variables. All secrets are managed exclusively on the backend.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will launch on **`http://localhost:3000`**.

### 3. Build for Production
```bash
npm run build
```
Production assets are output to `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## Features & Zero-Trust UI Controls

- **Authentication:** JWT session validation and automatic expiration redirect.
- **Continuous Posture:** Live display of classification levels (`Public`, `Internal`, `Confidential`, `Highly Confidential`).
- **Google Drive Integration:** Dedicated tab in **Settings** providing real OAuth 2.0 connection controls with least-privilege `drive.file` scope.
- **Secure File Sharing:** Ephemeral sharing modal with Single-Use self-destruct tokens and granular permissions (`View Only` vs `Can Download`).
- **Real-Time Audit Trail:** Security activity logs viewer displaying user actions, IP addresses, and policy violation attempts.
