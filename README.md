<div align="center">

<img src="public/logo.svg" width="80" height="80" alt="OneTap Logo" />

# OneTap — Smart NFC Business Cards

**The #1 NFC digital business card platform in Tunisia.**  
Share your full professional profile with a single tap — no app required.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-my--onetaptn.netlify.app-00d28b?style=for-the-badge&logo=netlify&logoColor=white)](https://my-onetaptn.netlify.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

</div>

---

## ✨ What is OneTap?

OneTap is a **full-stack SaaS platform** that lets professionals in Tunisia replace paper business cards with a smart, programmable NFC card. When someone taps your card with any modern smartphone, they are instantly directed to your personalized digital profile — no app to install, no QR code to scan.

> 🇹🇳 Built for the Tunisian market, designed for global standards.

---

## 🚀 Key Features

| Feature | Description |
|---|---|
| **NFC Profile Pages** | Public profile accessible via `/t/:slug` — tap & share instantly |
| **Analytics Dashboard** | Track total views, unique visitors, and saved contacts |
| **Magic Link Auth** | Passwordless authentication powered by Supabase |
| **Dark Mode UI** | Premium dark interface with brand mint/navy palette |
| **vCard Editor** | Edit name, title, company, bio, social links & avatar |
| **Team Management** | Invite team members and manage multiple cards |
| **Physical Card Orders** | Order real NFC cards directly from the dashboard |

---

## 🛠️ Tech Stack

```
Frontend  →  React 19 · Vite 6 · Tailwind CSS 3 · Lucide Icons · Recharts
Backend   →  Supabase (PostgreSQL · Auth · Storage · Realtime)
Deploy    →  Netlify (CDN + serverless functions)
```

---

## 📁 Project Structure

```
onetap-client/
│
├── src/                          ← React source code
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx        ← Reusable button (primary / secondary / ghost)
│   │   │   └── Card.jsx          ← Glass-morphism dark card
│   │   ├── dashboard/
│   │   │   └── StatsCard.jsx     ← Metric card (views, taps, contacts…)
│   │   └── auth/                 ← Auth components (guards, redirects)
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx         ← Authenticated main dashboard
│   │   ├── Login.jsx             ← Magic link login page
│   │   └── Profile.jsx           ← Public NFC profile page (/t/:slug)
│   │
│   ├── hooks/
│   │   ├── useAuth.js            ← Supabase session management hook
│   │   └── useProfile.js         ← Profile data fetching hook
│   │
│   ├── lib/
│   │   └── supabase.js           ← Supabase client (initialized once)
│   │
│   ├── App.jsx                   ← Root component + client-side routing
│   ├── main.jsx                  ← React DOM entry point
│   └── index.css                 ← Tailwind directives + base styles
│
├── dist/                         ← Production build output (Vite)
│   ├── assets/
│   │   ├── favicon-jcMOq34Z.svg
│   │   └── index-CrDEy2SC.js
│   └── index.html
│
├── public/
│   └── index.html                ← Vite HTML entry point (source)
│
├── package.json                  ← Dependencies & scripts
├── vite.config.js                ← Vite build configuration
├── tailwind.config.js            ← Brand colors, fonts, animations
├── postcss.config.js             ← PostCSS / Autoprefixer
├── .env.example                  ← Environment variable template
├── .gitignore
└── README.md
```

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/onetap-client.git
cd onetap-client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

```bash
cp .env.example .env
```

Open `.env` and fill in your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

> 🔑 Find these in your Supabase project under **Settings → API**.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the app is live.

### 5. Build for production

```bash
npm run build
```

Output is generated in `dist/` — ready to deploy on Netlify, Vercel, or any static host.

---

## 🗄️ Supabase Schema (Overview)

| Table | Description |
|---|---|
| `users` | Auth users (managed by Supabase Auth) |
| `vcards` | Digital profiles — slug, bio, social links, stats |
| `contacts` | People who saved a profile (tap-to-save) |
| `activities` | Event log — views, taps, link clicks |
| `physical_cards` | NFC card orders & shipping status |
| `teams` | Team accounts for business plans |
| `team_members` | Members linked to a team |
| `payments` | Billing history |

---

## 🎨 Brand Design System

| Token | Value | Usage |
|---|---|---|
| `brand-600` | `#00d28b` | Primary CTA, highlights, icons |
| `navy-900` | `#0f172a` | Main background |
| `navy-800` | `#1e293b` | Card backgrounds |
| Font (sans) | `Inter` | All body text & UI |
| Font (serif) | `Playfair Display` | Display headings |

---

## 🌍 Deployment

This project is deployed on **Netlify** with automatic builds from the `main` branch.

```bash
# Manual deploy
npm run build
# Then drag & drop the dist/ folder to netlify.com/drop
```

For CI/CD, set your `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as environment variables in the Netlify dashboard.

---

## 📄 License

This project is proprietary. All rights reserved © OneTap Tunisia.

---

<div align="center">

Made with 💚 in Tunisia &nbsp;·&nbsp; [Live Demo](https://my-onetaptn.netlify.app)

</div>
