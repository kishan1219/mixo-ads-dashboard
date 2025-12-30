# Mixo Ads – Campaign Monitoring Dashboard

A dynamic, production-ready campaign monitoring dashboard built as part of the **Mixo Ads Frontend Engineer Challenge**.

The application consumes a live backend API to display campaign performance data in a clean, usable dashboard focused on clarity and maintainability over visual polish.

---

## 🚀 Live Demo

🔗 https://mixo-ads-dashboard.netlify.app

---

## 📦 GitHub Repository

🔗 https://github.com/kishan1219/mixo-ads-dashboard

---

## 🧠 Key Features

- Dynamic campaign data fetched from a live backend API
- Summary metrics (total campaigns, active campaigns, spend, CTR)
- Campaign table with:
  - Status indicators
  - Budget & daily spend
  - Platform tags
- Client-side routing for campaign detail pages
- Responsive and production-usable UI
- Deployed publicly with CI/CD

---

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **HTTP Client:** Axios
- **Deployment:** Netlify

---

## 📁 Project Structure

```text
src/
├── api/            # API service layer
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── types/          # TypeScript types
├── App.tsx         # App routing
└── main.tsx        # Application entry point


🔌 Backend API

Base URL:

https://mixo-fe-backend-task.vercel.app/


Endpoints used:

GET /campaigns

GET /campaigns/:id

⚙️ Local Development
Prerequisites

Node.js v18+ (tested with v22)

Setup
npm install
npm run dev


App will run at:

http://localhost:5173

🧪 Build & Deployment

Build command:

npm run build


The project uses a strict TypeScript build (tsc -b) to ensure type safety.

For Netlify routing support (React Router), a _redirects file is included:

/*  /index.html  200

🎯 Design Decisions

Focused on functional clarity rather than heavy visual polish

Used strict TypeScript settings to enforce clean code

Modular structure for maintainability and scalability

Minimal dependencies to keep the bundle lightweight

👤 Author
Kishan Gupta
